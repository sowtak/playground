import{component as x,html as n,useCallback as d,useEffect as j,useRef as T,useState as l}from"../snowpack/pkg/haunted.js";import{nothing as u}from"../snowpack/pkg/lit-html.js";import{ifDefined as L}from"../snowpack/pkg/lit-html/directives/if-defined.js";import{unsafeHTML as G}from"../snowpack/pkg/lit-html/directives/unsafe-html.js";import{get as b,translate as h}from"../snowpack/pkg/lit-translate.js";import J from"../snowpack/pkg/medium-zoom.js";import{authStore as K,useStore as Q}from"../ctx.js";import{ref as B}from"../directives/ref.js";import{request as C}from"../http.js";import{Avatar as X}from"./avatar.js";import"./relative-datetime.js";import"./toast-item.js";function ee({post:t,type:o}){const[a]=Q(K),[e,i]=l(t),[c,s]=l([]),[g,$]=l(!1),[v,y]=l(!1),[f,k]=l(!1),[m,w]=l(!1),[I,E]=l(!1),[_,U]=l(!1),[M,z]=l(null),V=d(()=>{$(r=>!r)},[]),R=d(r=>{(r.relatedTarget===null||!r.currentTarget.closest(".post-menu-wrapper").contains(r.relatedTarget))&&$(!1)},[]),H=d(()=>{y(!0),be(e.id).then(r=>{i(p=>({...p,...r}))},r=>{const p=b("postItem.errToggleSubscription")+" "+b(r.name);console.error(p),z({type:"error",content:p})}).finally(()=>{y(!1)})},[e]),O=r=>{this.dispatchEvent(new CustomEvent("removed-from-timeline",{bubbles:!0,detail:r}))},F=d(()=>{o==="timeline_item"&&(k(!0),$e(e.timelineItemID).then(()=>{O({timelineItemID:e.timelineItemID})},r=>{const p=b("postItem.errRemove")+" "+b(r.name);console.error(p),z({type:"error",content:p})}).finally(()=>{k(!1)}))},[o,e]),W=r=>{this.dispatchEvent(new CustomEvent("resource-deleted",{bubbles:!0,detail:r}))},N=d(()=>{w(!0),ve(o,e.id).then(()=>{W({id:e.id})},r=>{const p=b("postItem.errDelete.fmt",{type:b("postItem.errDelete.types."+o)});console.error(p),z({type:"error",content:p})}).finally(()=>{w(!1)})},[e,o]),Z=d(()=>{E(!0)},[]),q=d(()=>{U(!0)},[]),S=d(r=>{const p=r.detail;i(Y=>({...Y,...p}))},[]);return j(()=>{s(ce(e.content))},[e]),j(()=>{i(t)},[t]),n`
        <article class="post">
            <div class="post-header">
                <a href="/@${e.user.username}" class="post-author">
                    ${X(e.user)}
                    <span class="username">${e.user.username}</span>
                </a>
                <div class="post-meta">
                    <a href="/posts/${e.id}" class="post-ts">
                        <relative-datetime .datetime=${e.createdAt}></relative-datetime>
                    </a>
                    ${a!==null&&!(o==="comment"&&!e.mine)?n`
                        <div class="post-menu-wrapper">
                            <button class="post-menu-wrapper-btn"
                                id="${e.id}-more-menu-btn"
                                aria-haspopup="true"
                                aria-controls="${e.id}-more-menu"
                                title="${h("postItem.menu.title")}"
                                aria-expanded="${L(g?"true":void 0)}"
                                @click=${V}
                                @blur=${R}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="more-vertical"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></g></g></svg>
                            </button>
                            <ul class="post-menu"
                                id="${e.id}-more-menu"
                                role="menu"
                                aria-labelledby="${e.id}-more-menu-btn"
                                tabindex="-1"
                                @blur=${R}>
                                ${o==="timeline_item"||o==="post"?n`
                                    <li class="post-menu-item" role="none">
                                        <button class="post-menu-btn"
                                            role="menuitem"
                                            tabindex="-1"
                                            .disabled=${v}
                                            @click=${H}
                                            @blur=${R}>
                                            ${e.subscribed?n`
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bell-off"><rect width="24" height="24" opacity="0"/><path d="M8.9 5.17A4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a1.92 1.92 0 0 0 .1.59l3.6 3.6a1.58 1.58 0 0 0 .45-.6 1.62 1.62 0 0 0-.35-1.78l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.71 6.71 0 0 0-5.32 1.61 6.88 6.88 0 0 0-.58.54l1.47 1.43a4.79 4.79 0 0 1 .43-.47z"/><path d="M14 16.86l-.83-.86H5.51l1.18-1.18a2 2 0 0 0 .59-1.42v-3.29l-2-2a5.68 5.68 0 0 0 0 .59v4.7l-1.8 1.81A1.63 1.63 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.88 3.88 0 0 0 4-3.22l-.83-.78zM12 20a1.88 1.88 0 0 1-2-1.66V18h4v.34A1.88 1.88 0 0 1 12 20z"/><path d="M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
                                                <span>${h("postItem.menu.unsusbcribe")}</span>
                                            `:n`
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bell"><rect width="24" height="24" opacity="0"/><path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 0 0 .59-1.42V8.73A4.73 4.73 0 0 1 8.9 5.17 4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 16z"/></g></g></svg>
                                                <span>${h("postItem.menu.susbcribe")}</span>
                                            `}
                                        </button>
                                    </li>
                                `:u}
                                ${o==="timeline_item"?n`
                                    <li class="post-menu-item" role="none">
                                        <button class="post-menu-btn" role="menuitem" tabindex="-1" .disabled=${f} @click=${F} @blur=${R}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="eye-off"><rect width="24" height="24" opacity="0"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56z"/><path d="M12.22 17c-4.3.1-7.12-3.59-8-5a13.7 13.7 0 0 1 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67l-1.58-1.58a7.74 7.74 0 0 1-1.7.25z"/><path d="M21.87 11.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.7 13.7 0 0 1-2.29 2.72L19 16.13a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0-.04-1z"/></g></g></svg>
                                            <span>${h("postItem.menu.remove")}</span>
                                        </button>
                                    </li>
                                `:u}
                                ${e.mine?n`
                                    <li class="post-menu-item" role="none">
                                        <button class="post-menu-btn" role="menuitem" tabindex="-1" .disabled=${m} @click=${N} @blur=${R}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="trash-2"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/><path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/><path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/></g></g></svg>
                                            <span>${h("postItem.menu.delete")}</span>
                                        </button>
                                    </li>
                                `:u}
                            </ul>
                        </div>
                    `:u}
                </div>
            </div>
            <div class="post-content">
                ${o!=="comment"&&e.spoilerOf!==null&&!I?n`
                    <div class="post-warning">
                        <p>${h("postItem.spoiler.warning")} ${e.spoilerOf}</p>
                        <button @click=${Z}>${h("postItem.spoiler.show")}</button>
                    </div>
                `:n`
                    <p>${G(re(ie(e.content)))}</p>
                    ${o!=="comment"&&e.nsfw&&!_?n`
                        <div class="post-warning">
                            <p>${h("postItem.nsfw.warning")}</p>
                            <button @click=${q}>${h("postItem.nsfw.show")}</button>
                        </div>
                    `:n`
                        <media-scroller .urls=${c}></media-scroller>
                    `}
                `}
            </div>
            <div class="post-footer">
                ${e.reactions.length!==0||a!==null?n`
                    <div class="post-reactions">
                        ${e.reactions.length!==0?e.reactions.map(r=>n`
                            <reaction-btn .postID=${e.id} .reaction=${r} .type=${o} @new-reaction-counts=${S}></reaction-btn>
                        `):u}
                        ${a!==null?n`
                            <add-reaction-btn .postID=${e.id} .type=${o} @new-reaction-counts=${S}></add-reaction-btn>
                        `:u}
                    </div>
                `:u}
                ${typeof e.commentsCount=="number"?n`
                    <a class="post-replies-link btn" href="/posts/${e.id}" title="${h("postItem.comments")}">
                        <span>${e.commentsCount}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="11" r="1"/><circle cx="16" cy="11" r="1"/><circle cx="8" cy="11" r="1"/><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g></svg>
                    </a>
                `:u}
            </div>
        </article>
        ${M!==null?n`<toast-item .toast=${M}></toast-item>`:u}
    `}customElements.define("post-item",x(ee,{useShadowDOM:!1}));function te({postID:t,reaction:o,type:a}){const[e,i]=l(o),[c,s]=l(!1),[g,$]=l(null),v=f=>{this.dispatchEvent(new CustomEvent("new-reaction-counts",{bubbles:!0,detail:f}))},y=d(()=>{s(!0),D(a,t,e).then(f=>{v({reactions:f})},f=>{const k=b("reactionBtn.err")+" "+b(f.name);console.error(k),$({type:"error",content:k})}).finally(()=>{s(!1)})},[a,t,e]);return j(()=>{i(o)},[o]),n`
        <button class="post-reaction${e.reacted?" reacted":""}" .disabled=${c} @click=${y}>
            <span>${e.count}</span>
            ${e.type==="emoji"?n`
                <span>${e.reaction}</span>
            `:n`
                <img src="${e.reaction}">
            `}
        </button>
        ${g!==null?n`<toast-item .toast=${g}></toast-item>`:u}
    `}customElements.define("reaction-btn",x(te,{useShadowDOM:!1}));const oe=`
    .picker {
        border-radius: var(--emoji-picker-border-radius);
        border-top-left-radius: var(--emoji-picker-border-top-left-radius);
        border-bottom-left-radius: var(--emoji-picker-border-bottom-left-radius);
        border-bottom-right-radius: var(--emoji-picker-border-bottom-right-radius);
        border: var(--emoji-picker-border);
    }

    .picker input.search {
        background-color: var(--emoji-picker-input-background-color);
        border: var(--emoji-picker-input-border);
        height: var(--emoji-picker-input-height);
        padding: var(--emoji-picker-input-padding);
    }
`;function ne({postID:t,type:o}){const a=T(null),[e,i]=l(!1),[c,s]=l(!1),[g,$]=l(null),v=m=>{this.dispatchEvent(new CustomEvent("new-reaction-counts",{bubbles:!0,detail:m}))},y=d(()=>{i(m=>!m)},[]),f=d(m=>{(m.relatedTarget===null||!m.currentTarget.closest(".emoji-picker-wrapper").contains(m.relatedTarget))&&i(!1)},[]),k=d(m=>{const w=m.detail.unicode;s(!0),D(o,t,{type:"emoji",reaction:w}).then(I=>{i(!1),v({reactions:I})},I=>{const E=b("addReactionBtn.err")+" "+b(I.name);console.error(E),$({type:"error",content:E})}).finally(()=>{s(!1)})},[o,t]);return j(()=>{if(a.current===null)return;const m=()=>{try{if(a.current!==null&&a.current.shadowRoot!==null){const w=document.createElement("style");w.textContent=oe,a.current.shadowRoot.appendChild(w)}}catch(w){}};customElements.get("emoji-picker")===void 0?import("../snowpack/pkg/emoji-picker-element.js").then(m).catch(()=>{}):m()},[a.current]),n`
        <div class="emoji-picker-wrapper">
            <button class="post-add-reaction-btn"
                id="${t}-reactions-menu-btn"
                aria-haspopup="true"
                aria-controls="${t}-reactions-menu"
                aria-expanded="${L(e?"true":void 0)}"
                title="${h("addReactionBtn.title")}"
                .disabled=${c}
                @click=${y}
                @blur=${f}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="smiling-face"><g id="smiling-face" data-name="smiling-face"><rect width="24" height="24" opacity="0"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm5 9a5 5 0 0 1-10 0z" id="🎨-Icon-Сolor"/></g></g></g></svg>
            </button>
            <emoji-picker .ref=${B(a)}
                class="dark${c?" disabled":""}"
                id="${t}-reactions-menu"
                role="menu"
                aria-labelledby="${t}-more-menu-btn"
                tabindex="-1"
                @emoji-click=${k}
                @blur=${f}></emoji-picker>
        </div>
        ${g!==null?n`<toast-item .toast=${g}></toast-item>`:u}
    `}customElements.define("add-reaction-btn",x(ne,{useShadowDOM:!1}));const ae=/\B@([a-zA-Z][a-zA-Z0-9_-]{0,17})(\b[^@]|$)/g,se=/\B#((?:\p{L}|\p{N}|_)+)(\b[^#]|$)/gu,P=/\b(https?:\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,\.;]*[\-A-Za-z0-9+&@#\/%=~_|])/gi;function ie(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/"/g,"&#039;")}function re(t){return t.replace(ae,'<a href="/users/$1">@$1</a>$2').replace(se,'<a href="/tagged-posts/$1">#$1</a>$2').replace(P,'<a href="$1" target="_blank" rel="noopener">$1</a>')}function ce(t){const o=[];for(const a of t.matchAll(P))if(a!==null&&a.length>=2)try{const e=new URL(a[1]);o.push(e)}catch(e){}return o}const le=["https://i.imgur.com","https://puu.sh"],me=["jpg","jpeg","gif","png","webp","avif"].map(t=>"."+t),pe=["wav","mp3","flac"].map(t=>"."+t),de=["mp4","webm","mov","3gp","ogg"].map(t=>"."+t);function ue({urls:t}){const[o,a]=l([]);return j(()=>{(async function(){const i=[];for(const c of t){{const s=he(c);if(s.id!==null){i.push(n`<iframe
                            src="https://www.youtube-nocookie.com/embed/${s.id}${s.seconds!==null?"?start="+s.seconds:""}"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>`);continue}}{const s=ge(c);if(s!==null){i.push(n`<iframe
                            src="https://coub.com/embed/${s}?muted=false&autostart=false&originalSize=true&startWithHD=true"
                            title="Coub video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>`);continue}}if(le.includes(c.origin)){if(me.some(s=>c.pathname.endsWith(s))){i.push(n`<zoomable-img .src=${c.toString()}></zoomable-img>`);continue}if(pe.some(s=>c.pathname.endsWith(s))){i.push(n`<audio src="${c.toString()}" preload="metadata" controls loop></audio>`);continue}if(de.some(s=>c.pathname.endsWith(s))){i.push(n`<video src="${c.toString()}" preload="metadata" controls loop></video>`);continue}}try{const s="/api/proxy?target="+encodeURIComponent(c.toString()),g=await fetch(s,{method:"HEAD",headers:{accept:"image/*, audio/*, video/*"}});if(!g.ok)continue;const $=g.headers.get("content-type");if($===null)continue;const v=$.split("/");if(v.length===0)continue;switch(v[0]){case"image":i.push(n`<zoomable-img .src=${s}></zoomable-img>`);break;case"audio":i.push(n`<audio src="${s}" preload="metadata" controls loop></audio>`);break;case"video":i.push(n`<video src="${s}" preload="metadata" controls loop></video>`);break}}catch(s){}}a(i)})()},[t]),o.length===0?u:n`
        <ul class="media-scroller" data-length="${o.length}">
            ${o.map(e=>n`
                <li>${e}</li>
            `)}
        </ul>
    `}customElements.define("media-scroller",x(ue,{useShadowDOM:!1}));function he(t){let o=null,a=null;if(t.hostname==="www.youtube.com"||t.hostname==="youtube.com"){t.pathname==="/watch"&&t.searchParams.has("v")&&(o=decodeURIComponent(t.searchParams.get("v")));const e=t.pathname.split("/");e.length===3&&e[0]===""&&e[1]==="embed"&&(o=decodeURIComponent(e[2]))}if(t.hostname==="youtu.be"){const e=t.pathname.split("/");e.length===2&&e[0]===""&&(o=decodeURIComponent(e[1]))}if(t.hostname==="music.youtube.com"&&t.pathname==="/watch"&&t.searchParams.has("v")&&(o=decodeURIComponent(t.searchParams.get("v"))),t.searchParams.has("t"))try{const e=decodeURIComponent(t.searchParams.get("t")).replace("s","");a=parseInt(e,10)}catch(e){}if(t.searchParams.has("start"))try{const e=decodeURIComponent(t.searchParams.get("start"));a=parseInt(e,10)}catch(e){}return{id:o,seconds:a}}function ge(t){if(t.hostname!=="coub.com")return null;const o=t.pathname.split("/");return o.length!==3&&o[0]!==""&&o[1]!="view"?null:decodeURIComponent(o[2])}const A=J();function fe({src:t}){const o=T(null);return j(()=>(o.current!==null&&A.attach(o.current),()=>{A.detach(o.current)}),[o]),n`<img src="${t}" alt="" loading="lazy" .ref=${B(o)}>`}customElements.define("zoomable-img",x(fe,{useShadowDOM:!1}));function be(t){return C("POST",`/api/posts/${encodeURIComponent(t)}/toggle_subscription`).then(o=>o.body)}function D(t,o,a){const e=t==="timeline_item"||t==="post"?"posts":t==="comment"?"comments":null;return e===null?Promise.reject(new Error("unkown resource type "+t)):C("POST",`/api/${e}/${encodeURIComponent(o)}/toggle_reaction`,{body:a}).then(i=>i.body)}function $e(t){return C("DELETE","/api/timeline/"+encodeURIComponent(t)).then(()=>{})}function ve(t,o){const a=t==="timeline_item"||t==="post"?"posts":t==="comment"?"comments":null;return a===null?Promise.reject(new Error("unkown resource type "+t)):C("DELETE",`/api/${a}/${encodeURIComponent(o)}`).then(()=>{})}
