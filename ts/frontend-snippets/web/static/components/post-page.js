import{Textcomplete as O}from"../snowpack/pkg/@textcomplete/core.js";import{TextareaEditor as N}from"../snowpack/pkg/@textcomplete/textarea.js";import{component as L,html as s,useCallback as $,useEffect as M,useRef as Q,useState as m}from"../snowpack/pkg/haunted.js";import{nothing as C}from"../snowpack/pkg/lit-html.js";import{repeat as _}from"../snowpack/pkg/lit-html/directives/repeat.js";import{authStore as P,useStore as U}from"../ctx.js";import{ref as J}from"../directives/ref.js";import{request as k,subscribe as K}from"../http.js";import{navigate as V}from"../router.js";import"./post-item.js";import"./toast-item.js";const E=10;export default function({params:e}){return s`<post-page .postID=${e.postID}></post-page>`}function W({postID:e}){const[o]=U(P),[t,a]=m(null),[h,f]=m([]),[g,w]=m(null),[c,b]=m(t===null),[v,A]=m(null),[y,T]=m(null),[i,d]=m(!1),[u,x]=m(!1),[p,j]=m([]),[R,S]=m(null),q=$(n=>{const r=n.detail;a(l=>({...l,commentsCount:l.commentsCount+1})),f(l=>[r,...p,...l]),j([])},[p]),z=$(n=>{j(r=>[n,...r]),a(r=>({...r,commentsCount:r.commentsCount+1}))},[]),B=$(()=>{V("/",!0),S({type:"success",content:"post deleted"})},[]),D=$(n=>{const r=n.detail;f(l=>l.filter(G=>G.id!==r.id)),a(l=>({...l,commentsCount:l.commentsCount-1}))},[]),I=$(()=>{f(n=>[...p,...n]),j([])},[p]),F=$(()=>{i||u||(d(!0),H(e,g).then(({items:n,endCursor:r})=>{f(l=>[...l,...n]),w(r),n.length<E&&x(!0)},n=>{const r="could not fetch more comments: "+n.message;console.error(r),S({type:"error",content:r})}).finally(()=>{d(!1)}))},[i,u,e,g]);return M(()=>{b(!0),Promise.all([Z(e).catch(A),H(e).catch(T)]).then(([n,{items:r,endCursor:l}])=>{a(n),f(r),w(l),r.length<E&&x(!0)}).finally(()=>{b(!1)})},[e]),M(()=>te(e,z),[e]),s`
        <main>
            <div class="post-wrapper">
                <div class="container">
                    ${v!==null?s`
                        <p class="error" role="alert">Could not fetch post: ${v.message}</p>
                    `:c?s`
                        <p class="loader" aria-busy="true" aria-live="polite">Loading post... please wait.<p>
                    `:s`
                        <post-item .post=${t} .type=${"post"} @resource-deleted=${B}></post-item>
                    `}
                </div>
            </div>
            <div class="container comments-wrapper">
                <h2>Comments</h2>
                ${y!==null?s`
                    <p class="error" role="alert">Could not fetch comments: ${y.message}</p>
                `:c?s`
                    <p class="loader" aria-busy="true" aria-live="polite">Loading comments... please wait.<p>
                `:s`
                    ${h.length===0?s`
                        <p>0 comments</p>
                    `:s`
                        ${u?C:s`
                            <button class="load-more-comments-btn" .disabled=${i} @click=${F}>
                                ${i?"Loading previous...":"Load previous"}
                            </button>
                        `}
                        <div class="comments" role="feed">
                            ${_(h.slice().reverse(),n=>n.id,n=>s`<post-item .post=${n} .type=${"comment"} @resource-deleted=${D}></post-item>`)}
                        </div>
                    `}
                    ${o!==null?s`
                        <comment-form .postID=${e} @comment-created=${q}></comment-form>
                    `:C}
                    ${p.length!==0?s`
                        <button class="queue-btn" @click=${I}>${p.length} new comments</button>
                `:C}
                `}
            </div>
        </main>
        ${R!==null?s`<toast-item .toast=${R}></toast-item>`:C}
    `}customElements.define("post-page",L(W,{useShadowDOM:!1}));const X=/\B@([\-+\w]*)$/;function Y({postID:e}){const[o]=U(P),[t,a]=m(""),[h,f]=m(!1),[g,w]=m(0),c=Q(null),[b,v]=m(null),A=i=>{this.dispatchEvent(new CustomEvent("comment-created",{bubbles:!0,detail:i}))},y=$(i=>{i.preventDefault(),f(!0),ee(e,{content:t}).then(d=>{d.user=o.user,A(d),a(""),c.current.style.height=g+"px"},d=>{const u="could not create comment: "+d.message;console.error(u),v({type:"error",content:u})}).finally(()=>{f(!1)})},[e,t,g,c,o]),T=$(()=>{a(c.current.value),c.current.style.height=g+"px",c.current.value!==""&&(c.current.style.height=Math.max(c.current.scrollHeight,g)+"px")},[t,g,c]);return M(()=>{if(c.current===null)return;const i=new N(c.current),d=new O(i,[{match:X,search:async(u,x)=>{x(await oe(u).then(p=>p.items,p=>(console.error("could not fetch mentions usernames:",p),[])))},replace:u=>`@${u} `}]);return w(c.current.scrollHeight),()=>{d.destroy()}},[]),s`
        <form class="comment-form${t!==""?" has-content":""}" name="comment-form" @submit=${y}>
            <textarea name="content" placeholder="Say something..." maxlenght="2048" aria-label="Content" required .disabled=${h} .value=${t} .ref=${J(c)} @input=${T}></textarea>
            ${t!==""?s`
                <button .disabled=${h}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="paper-plane"><rect width="24" height="24" opacity="0"/><path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"/></g></g></svg>
                    <span>Comment</button>
                </button>
            `:C}
        </form>
        ${b!==null?s`<toast-item .toast=${b}></toast-item>`:C}
    `}customElements.define("comment-form",L(Y,{useShadowDOM:!1}));function Z(e){return k("GET","/api/posts/"+encodeURIComponent(e)).then(o=>o.body).then(o=>(o.createdAt=new Date(o.createdAt),o))}function H(e,o="",t=E){return k("GET",`/api/posts/${encodeURIComponent(e)}/comments?last=${t}&before=${o}`).then(a=>a.body).then(a=>(a.items=a.items.map(h=>({...h,createdAt:new Date(h.createdAt)})),a))}function ee(e,{content:o}){return k("POST",`/api/posts/${encodeURIComponent(e)}/comments`,{body:{content:o}}).then(t=>t.body).then(t=>(t.createdAt=new Date(t.createdAt),t))}function te(e,o){return K(`/api/posts/${encodeURIComponent(e)}/comments`,t=>{t.createdAt=new Date(t.createdAt),o(t)})}function oe(e="",o="",t=E){return k("GET",`/api/usernames?starting_with=${encodeURIComponent(e)}&after=${encodeURIComponent(o)}&first=${encodeURIComponent(t)}`).then(a=>a.body)}
