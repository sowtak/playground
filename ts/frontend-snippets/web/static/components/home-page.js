import{Textcomplete as Y}from"../snowpack/pkg/@textcomplete/core.js";import{TextareaEditor as Z}from"../snowpack/pkg/@textcomplete/textarea.js";import{component as z,html as u,useCallback as c,useEffect as S,useRef as _,useState as m}from"../snowpack/pkg/haunted.js";import{nothing as F}from"../snowpack/pkg/lit-html.js";import{repeat as ee}from"../snowpack/pkg/lit-html/directives/repeat.js";import{get as G,translate as t}from"../snowpack/pkg/lit-translate.js";import{setLocalAuth as te}from"../auth.js";import{authStore as Q,useStore as W}from"../ctx.js";import{ref as J}from"../directives/ref.js";import{request as O,subscribe as K}from"../http.js";import"./intersectable-comp.js";import"./post-item.js";import"./toast-item.js";const M=10;export default function(){return u`<home-page></home-page>`}function oe(){const[p,n]=W(Q),[e,s]=m("timeline"),[x,f]=m([]),[T,I]=m(null),[C,g]=m(x.length===0),[v,d]=m(null),[k,R]=m(!1),[r,y]=m(!1),[D,j]=m(!1),[b,P]=m([]),[E,U]=m(null),L=c(a=>{const i=a.detail;f(h=>[i,...b,...h]),P([])},[b]),q=c(a=>{P(i=>[a,...i])},[]),B=c(a=>{P(i=>[a,...i])},[]),H=c(a=>{const i=a.detail;f(h=>h.filter(A=>A.timelineItemID!==i.timelineItemID))},[]),N=c(a=>{const i=a.detail;f(h=>h.filter(A=>A.id!==i.id))},[]),o=c(()=>{f(a=>[...b,...a]),P([])},[b]),l=c(()=>{if(k||r)return;R(!0),(e==="timeline"?V(T):X(T)).then(({items:i,endCursor:h})=>{f(A=>[...A,...i]),I(h),i.length<M&&(y(!0),j(!0))},i=>{const h=e==="could not fetch more timeline items: "+i.message;console.error(h),U({type:"error",content:h})}).finally(()=>{R(!1)})},[e,k,r,T]),w=c(()=>{s("timeline")},[]),$=c(()=>{s("posts")},[]);return S(()=>{f([]),I(null),P([]),y(!1),j(!1),g(!0),(e==="timeline"?V():X()).then(({items:i,endCursor:h})=>{f(i),I(h),i.length<M&&y(!0)},i=>{console.error(e==="timeline"?"could not fetch timeline:":"could not fetch posts:",i),i.name==="UnauthenticatedError"&&(n(null),te(null)),d(i)}).finally(()=>{g(!1)})},[e]),S(()=>e==="timeline"?ie(q):le(B),[e]),u`
        <main class="container home-page">
            <h1>${e==="timeline"?t("homePage.title.timeline"):t("homePage.title.posts")}</h1>
            <post-form @timeline-item-created=${L}></post-form>
            ${b.length!==0?u`
                <button class="queue-btn" @click=${o}>${e==="timeline"?b.length===1?t("homePage.queueBtn.newTimelineItem"):t("homePage.queueBtn.newTimelineItems",{length:b.length}):b.length===1?t("homePage.queueBtn.newPost"):t("homePage.queueBtn.newPosts",{length:b.length})}
                </button>
            `:F}
            <div role="tablist">
                <button role="tab" id="${e}-tab" aria-controls="${e}-tabpanel" aria-selected=${String(e==="timeline")} @click=${w}>
                    ${t("homePage.tabs.timeline")}
                </button>
                <button role="tab" id="${e}-tab" aria-controls="${e}-tabpanel" aria-selected=${String(e==="posts")} @click=${$}>
                    ${t("homePage.tabs.posts")}
                </button>
            </div>
            ${v!==null?u`
                <p class="error" role="alert">${e==="timeline"?t("homePage.err.timeline"):t("homePage.err.posts")}
                    ${t(v.name)}
                </p>
            `:C?u`
                <p class="loader" aria-busy="true" aria-live="polite">${e==="timeline"?t("homePage.loading.timeline"):t("homePage.loading.posts")}
                <p>
            `:u`
                <div role="tabpanel" id="${e}-tabpanel" aria-labelledby="${e}-tab">
                ${x.length===0?u`
                    <p>${e==="timeline"?t("homePage.empty.timeline"):t("homePage.empty.posts")}
                    </p>
                `:u`
                    <div class="posts" role="feed">
                        ${ee(x,a=>a.id,a=>u`<post-item .post=${a} .type=${e==="timeline"?"timeline_item":"post"}
                            @removed-from-timeline=${H}
                            @resource-deleted=${N}></post-item>`)}
                    </div>
                    ${r?D?u`
                        <p>${t("homePage.end")}</p>
                    `:F:u`
                        <intersectable-comp @is-intersecting=${l}></intersectable-comp>
                        <p class="loader" aria-busy="true" aria-live="polite">${e==="timeline"?t("homePage.loading.timeline"):t("homePage.loading.posts")}
                        <p>
                    `}
                `}
            `}
        </main>
        ${E!==null?u`<toast-item .toast=${E}></toast-item>`:F}
    `}customElements.define("home-page",z(oe,{useShadowDOM:!1}));const ne=/\B@([\-+\w]*)$/;function se(){const[p]=W(Q),[n,e]=m(""),[s,x]=m(!1),[f,T]=m(!1),[I,C]=m(!1),[g,v]=m(""),d=_(null),[k,R]=m(0),r=_(null),y=_(null),[D,j]=m(null),b=o=>{this.dispatchEvent(new CustomEvent("timeline-item-created",{bubbles:!0,detail:o}))},P=c(o=>{o.preventDefault(),x(!0),re({content:n,spoilerOf:g.trim()===""?null:g.trim(),nsfw:f}).then(l=>{l.user=p.user,e(""),T(!1),C(!1),v(""),y.current.hide(),b(l)},l=>{const w=G("postForm.err")+" "+G(l.name);console.error(w),j({type:"error",content:w})}).finally(()=>{x(!1)})},[n,f,g,p,r,k]),E=c(()=>{e(r.current.value)},[n,r]),U=c(o=>{const l=o.currentTarget.checked;T(l)},[]),L=c(o=>{const l=o.currentTarget.checked;C(l),l?d.current.showModal():v("")},[d]),q=c(o=>{v(o.currentTarget.value)},[]),B=c(()=>{g.trim()===""&&(v(""),C(!1))},[g]),H=c(o=>{o.preventDefault(),d.current.close()},[]),N=c(()=>{v(""),C(!1),d.current.close()},[d]);return S(()=>{d.current!==null&&!("HTMLDialogElement"in window||"showModal"in d.current)&&import("../snowpack/pkg/dialog-polyfill.js").then(o=>o.default).then(o=>{o.registerDialog(d.current)}).catch(o=>{console.error("could not import dialog polyfill:",o)})},[d.current]),S(()=>{if(r.current===null)return;const o=new Z(r.current);return y.current=new Y(o,[{match:ne,search:async(l,w)=>{w(await ae(l).then($=>$.items,$=>(console.error("could not fetch mentions usernames:",$),[])))},replace:l=>`@${l} `}]),R(r.current.scrollHeight),()=>{y.current.destroy()}},[r,y]),S(()=>{const o=new URLSearchParams(window.location.search.slice(1)),l=[];let w=!1;if(o.has("text")){w=!0;const $=decodeURIComponent(o.get("text")).trim();$!==""&&l.push($)}if(o.has("url")){w=!0;const $=decodeURIComponent(o.get("url"));$!==""&&l.push($)}l.length!==0&&(e(l.join(" ")),r.current!==null&&r.current.focus()),w&&history.replaceState(history.state,document.title,"/")},[r]),S(()=>{r.current!==null&&(r.current.style.height=k+"px",r.current.value!==""&&(r.current.style.height=Math.max(r.current.scrollHeight,k)+"px"))},[n,k,r]),u`
        <form class="post-form${n!==""?" has-content":""}" name="post-form" @submit=${P}>
            <textarea name="content"
                placeholder="${t("postForm.placeholder")}"
                maxlenght="2048"
                aria-label="${t("postForm.textAreaLabel")}"
                required
                .value=${n}
                .disabled=${s}
                .ref=${J(r)}
                @input=${E}></textarea>
            ${n!==""?u`
            <div class="post-form-controls">
                <div class="post-form-options">
                    <label class="switch-wrapper">
                        <input type="checkbox" role="switch" name="nsfw" .disabled=${s} .checked=${f} @change=${U}>
                        <span>${t("postForm.nsfwLabel")}</span>
                    </label>
                    <label class="switch-wrapper">
                        <input type="checkbox" role="switch" name="is_spoiler" .disabled=${s} .checked=${I} @change=${L}>
                        <span>${g.trim()===""?t("postForm.spoilerLabel"):t("postForm.spoilerOfLabel",{value:g.trim()})}
                        </span>
                    </label>
                </div>
                <button class="submit-btn" .disabled=${s}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g data-name="Layer 2">
                            <g data-name="paper-plane">
                                <rect width="24" height="24" opacity="0" />
                                <path
                                    d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z" />
                            </g>
                        </g>
                    </svg>
                    <span>${t("postForm.submit")}</button>
                </button>
            </div>
            `:F}
        </form>
        <dialog .ref=${J(d)} @close=${B}>
            <form method="dialog" class="spoiler-of-form" @submit=${H}>
                <label for="spoiler-of-input">${t("postForm.dialog.spoilerOfLabel")}</label>
                <input type="text"
                    id="spoiler-of-input"
                    name="spoiler_of"
                    placeholder="${t("postForm.dialog.spoilerOfPlaceholder")}"
                    maxlenght="64"
                    autocomplete="off"
                    .value=${g}
                    ?required=${I}
                    @input=${q}>
                <div class="spoiler-of-controls">
                    <button>${t("postForm.dialog.ok")}</button>
                    <button type="reset" @click=${N}>${t("postForm.dialog.cancel")}</button>
                </div>
            </form>
        </dialog>
        ${D!==null?u`<toast-item .toast=${D}></toast-item>`:F}
    `}customElements.define("post-form",z(se,{useShadowDOM:!1}));function re({content:p,spoilerOf:n,nsfw:e}){return O("POST","/api/timeline",{body:{content:p,spoilerOf:n,nsfw:e}}).then(s=>s.body).then(s=>(s.createdAt=new Date(s.createdAt),s))}function ie(p){return K("/api/timeline",n=>{n.createdAt=new Date(n.createdAt),p(n)})}function V(p="",n=M){return O("GET",`/api/timeline?last=${encodeURIComponent(n)}&before=${encodeURIComponent(p)}`).then(e=>e.body).then(e=>(e.items=e.items.map(s=>({...s,createdAt:new Date(s.createdAt)})),e))}function le(p){return K("/api/posts",n=>{n.createdAt=new Date(n.createdAt),p(n)})}function X(p="",n=M){return O("GET",`/api/posts?last=${encodeURIComponent(n)}&before=${encodeURIComponent(p)}`).then(e=>e.body).then(e=>(e.items=e.items.map(s=>({...s,createdAt:new Date(s.createdAt)})),e))}function ae(p="",n="",e=M){return O("GET",`/api/usernames?starting_with=${encodeURIComponent(p)}&after=${encodeURIComponent(n)}&first=${encodeURIComponent(e)}`).then(s=>s.body)}
