import{component as H,html as i,useCallback as a,useEffect as O,useRef as q,useState as d}from"../snowpack/pkg/haunted.js";import{nothing as j}from"../snowpack/pkg/lit-html.js";import{ifDefined as le}from"../snowpack/pkg/lit-html/directives/if-defined.js";import{repeat as ie}from"../snowpack/pkg/lit-html/directives/repeat.js";import{setLocalAuth as Q}from"../auth.js";import{authStore as _,useStore as G}from"../ctx.js";import{ref as N}from"../directives/ref.js";import{request as S}from"../http.js";import{navigate as W}from"../router.js";import{Avatar as X}from"./avatar.js";import"./intersectable-comp.js";import"./post-item.js";import"./toast-item.js";import"./user-follow-btn.js";import"./user-follow-counts.js";const V=10;export default function({params:r}){return i`<user-page .username=${r.username}></user-page>`}function ce({username:r}){const[c,$]=G(_),[o,m]=d(null),[k,w]=d([]),[p,v]=d(null),[f,L]=d(o===null),[C,h]=d(null),[D,g]=d(!1),[y,A]=d(!1),[M,T]=d(!1),[b,R]=d(null),I=a(s=>{const l=s.detail;w(u=>u.filter(U=>U.id!==l.id))},[]),P=a(s=>{E(s.detail)},[]),x=a(s=>{E(s.detail)},[]),z=a(s=>{E(s.detail)},[]),E=a(s=>{m(l=>({...l,...s})),w(l=>l.map(u=>({...u,user:{...u.user,...s}}))),$(l=>{const u={...l,user:{...l.user,...s}};return Q(u),u})},[]),B=a(()=>{D||y||(g(!0),Y(r,p).then(({items:s,endCursor:l})=>{for(let u=0;u<s.length;u++)s[u].user=o;w(u=>[...u,...s]),v(l),s.length<V&&(A(!0),T(!0))},s=>{const l="could not fetch more posts: "+s.message;console.error(l),R({type:"error",content:l})}).finally(()=>{g(!1)}))},[D,y,r,p,o]);return O(()=>{L(!0),Promise.all([pe(r),Y(r)]).then(([s,{items:l,endCursor:u}])=>{for(let U=0;U<l.length;U++)l[U].user=s;m(s),w(l),v(u),l.length<V&&A(!0)},s=>{console.error("could not fetch user and posts:",s),s.name==="UnauthenticatedError"&&($(null),Q(null),W("/")),h(s)}).finally(()=>{L(!1)})},[r]),i`
        <main class="user-page">
            <div class="user-profile-wrapper" style="${le(C===null&&!f&&o.coverURL!==null?`--cover-url: url('${o.coverURL}');`:void 0)}">
                <div class="container">
                    ${C!==null?i`
                    <p class="error" role="alert">Could not fetch user: ${C.message}</p>
                    `:f?i`
                    <p class="loader" aria-busy="true" aria-live="polite">Loading user... please wait.<p>
                            `:i`
                            <user-profile .user=${o} @username-updated=${P} @avatar-updated=${x} @cover-updated=${z}></user-profile>
                            `}
                </div>
            </div>
            <div class="container posts-wrapper">
                <h2>Posts</h2>
                ${C!==null?i`
                <p class="error" role="alert">Could not fetch posts: ${C.message}</p>
                `:f?i`
                <p class="loader" aria-busy="true" aria-live="polite">Loading posts... please wait.<p>
                        `:i`
                        ${k.length===0?i`
                        <p>0 posts</p>
                        `:i`
                        <div class="posts" role="feed">
                            ${ie(k,s=>s.id,s=>i`<post-item .post=${s} .type=${"post"}
                                @resource-deleted=${I}></post-item>`)}
                        </div>
                        ${y?M?i`
                        <p>End reached.</p>
                        `:j:i`
                        <intersectable-comp @is-intersecting=${B}></intersectable-comp>
                        <p class="loader" aria-busy="true" aria-live="polite">Loading posts... please wait.</p>
                        `}
                        `}
                        `}
            </div>
        </main>
        ${b!==null?i`<toast-item .toast=${b}></toast-item>`:j}
    `}customElements.define("user-page",H(ce,{useShadowDOM:!1}));function ue({user:r}){const[c,$]=G(_),[o,m]=d(r),[k,w]=d(o.username),p=q(null),v=q(null),f=q(null),[L,C]=d(!1),[h,D]=d(!1),[g,y]=d(!1),[A,M]=d(()=>{const t=localStorage.getItem("color-scheme");return t!==null?t:"default"}),[T,b]=d(null),R=t=>{this.dispatchEvent(new CustomEvent("username-updated",{bubbles:!0,detail:t}))},I=t=>{this.dispatchEvent(new CustomEvent("avatar-updated",{bubbles:!0,detail:t}))},P=t=>{this.dispatchEvent(new CustomEvent("cover-updated",{bubbles:!0,detail:t}))},x=a(t=>{const e=t.detail;m(n=>({...n,...e}))},[o]),z=a(()=>{p.current.showModal()},[p]),E=a(t=>{w(t.currentTarget.value)},[]),B=a(t=>{t.preventDefault(),C(!0),me({username:k}).then(e=>{$(n=>({...n,user:{...n.user,...e}})),m(n=>({...n,...e})),b({type:"success",content:"username updated"}),history.replaceState(history.state,document.title,"/@"+encodeURIComponent(e.username)),R(e)},e=>{const n="could not update username: "+e.message;b({type:"error",content:n})}).finally(()=>{C(!1)})},[k]),s=a(t=>{const e=t.currentTarget.files;if(e===null||e.length!==1)return;const n=e.item(0);J(n)},[]),l=a(()=>{h||v.current.click()},[h,v]),u=a(()=>{v.current===null||h||v.current.click()},[h,v]),U=a(t=>{t.preventDefault()},[]),Z=a(t=>{if(t.preventDefault(),h)return;const e=t.dataTransfer.files;if(!(e instanceof FileList)||e.length!==1)return;const n=e.item(0);J(n)},[h]),J=a(t=>{D(!0),ge(t).then(e=>{$(n=>({...n,user:{...n.user,...e}})),m(n=>({...n,...e})),b({type:"success",content:"avatar updated"}),I(e)},e=>{const n="could not update avatar: "+e.message;b({type:"error",content:n})}).finally(()=>{D(!1)})},[]),ee=a(t=>{const e=t.currentTarget.files;if(e===null||e.length!==1)return;const n=e.item(0);K(n)},[]),te=a(()=>{g||f.current.click()},[g,f]),se=a(()=>{f.current===null||g||f.current.click()},[g,f]),ne=a(t=>{t.preventDefault()},[]),ae=a(t=>{if(t.preventDefault(),g)return;const e=t.dataTransfer.files;if(!(e instanceof FileList)||e.length!==1)return;const n=e.item(0);K(n)},[g]),K=a(t=>{y(!0),fe(t).then(e=>{$(n=>({...n,user:{...n.user,...e}})),m(n=>({...n,...e})),b({type:"success",content:"cover updated"}),P(e)},e=>{const n="could not update cover: "+e.message;b({type:"error",content:n})}).finally(()=>{y(!1)})},[]),F=a(t=>{const e=t.currentTarget.value;if(M(e),e==="default"){localStorage.removeItem("color-scheme"),document.firstElementChild.removeAttribute("color-scheme");return}localStorage.setItem("color-scheme",e),document.firstElementChild.setAttribute("color-scheme",e)},[]),oe=a(()=>{p.current.close()},[p]),re=a(()=>{w(o.username)},[o]);return O(()=>{p.current!==null&&!("HTMLDialogElement"in window||"showModal"in p.current)&&import("../snowpack/pkg/dialog-polyfill.js").then(t=>t.default).then(t=>{t.registerDialog(p.current)})},[p]),O(()=>{m(r),w(r.username)},[r]),i`
        <div class="user-profile">
            <h1>${o.username}</h1>
            <user-follow-counts .user=${o}></user-follow-counts>
            ${X(o)}
            <div class="user-controls">
                ${o.me?i`
                <button @click=${z}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g data-name="Layer 2">
                            <g data-name="settings">
                                <rect width="24" height="24" opacity="0" />
                                <path
                                    d="M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41 2.14 2.14 0 0 1 1.68-.12 1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67 2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78 1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59.22.22 0 0 0-.14 0 .28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z"
                                    data-name="&lt;Group&gt;" />
                                <path
                                    d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z" />
                            </g>
                        </g>
                    </svg>
                    <span>Settings</span>
                </button>
                <logout-btn></logout-btn>
                `:c!==null?i`
                <user-follow-btn .user=${o} @follow-toggle=${x}></user-follow-btn>
                `:j}
            </div>
        </div>
        <dialog class="user-settings-dialog" .ref=${N(p)} @close=${re}>
            <div class="user-settings">
                <div class="user-settings-header">
                    <h2>Settings</h2>
                    <button class="close-btn" title="Close" @click=${oe}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g data-name="Layer 2">
                                <g data-name="close">
                                    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                                    <path
                                        d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <form @submit=${B}>
                    <fieldset class="username-fieldset">
                        <legend>Username</legend>
                        <div class="username-grp">
                            <input type="text" name="username" placeholder="Username" required .value=${k}
                                .disabled=${L} @input=${E}>
                            <button .disabled=${L}>Update</button>
                        </div>
                    </fieldset>
                </form>
                <fieldset class="avatar-fieldset" @drop=${Z} @dragover=${U}>
                    <legend>Avatar</legend>
                    <div class="avatar-grp">
                        <div @dblclick=${l}>
                            ${X(o)}
                        </div>
                        <input type="file" name="avatar" accept="image/png,image/jpeg" required hidden
                            .disabled=${h} .ref=${N(v)} @change=${s}>
                        <button .disabled=${h} @click=${u}>Update</button>
                    </div>
                </fieldset>
                <fieldset class="cover-fieldset" @drop=${ae} @dragover=${ne}>
                    <legend>Cover</legend>
                    <div class="cover-grp">
                        ${o.coverURL!==null?i`
                            <img src="${o.coverURL}" @dblclick=${te}>
                        `:j}
                        <input type="file" name="cover" accept="image/png,image/jpeg" required hidden
                            .disabled=${g} .ref=${N(f)} @change=${ee}>
                        <button .disabled=${g} @click=${se}>Update</button>
                    </div>
                </fieldset>
                <fieldset class="theme-fieldset">
                    <legend>Theme</legend>
                    <label>
                        <input type="radio" name="theme" value="default" .checked=${A==="default"} @change=${F}>
                        <span>Default</span>
                    </label>
                    <label>
                        <input type="radio" name="theme" value="dark" .checked=${A==="dark"} @change=${F}>
                        <span>Dark</span>
                    </label>
                    <label>
                        <input type="radio" name="theme" value="light" .checked=${A==="light"} @change=${F}>
                        <span>Light</span>
                    </label>
                </fieldset>
            </div>
            ${T!==null?i`<toast-item .toast=${T}></toast-item>`:j}
        </dialog>
    `}customElements.define("user-profile",H(ue,{useShadowDOM:!1}));function de(){const[,r]=G(_),c=a(()=>{localStorage.removeItem("auth"),r(null),W("/")},[]);return i`
        <button @click=${c}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                    <g data-name="log-out">
                        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
                        <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z" />
                        <path
                            d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z" />
                    </g>
                </g>
            </svg>
            <span>Logout</span>
        </button>
    `}customElements.define("logout-btn",H(de,{useShadowDOM:!1}));function pe(r){return S("GET","/api/users/"+encodeURIComponent(r)).then(c=>c.body)}function Y(r,c="",$=V){return S("GET",`/api/users/${encodeURIComponent(r)}/posts?last=${encodeURIComponent($)}&before=${encodeURIComponent(c)}`).then(o=>o.body).then(o=>(o.items=o.items.map(m=>({...m,createdAt:new Date(m.createdAt)})),o))}function me({username:r}){return S("PATCH","/api/auth_user",{body:{username:r}}).then(c=>c.body)}function ge(r){return S("PUT","/api/auth_user/avatar",{body:r}).then(c=>c.body).then(c=>({avatarURL:c}))}function fe(r){return S("PUT","/api/auth_user/cover",{body:r}).then(c=>c.body).then(c=>({coverURL:c}))}
