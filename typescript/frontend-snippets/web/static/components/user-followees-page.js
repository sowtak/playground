import{component as M,html as t,useCallback as v,useEffect as R,useState as o}from"../snowpack/pkg/haunted.js";import{nothing as w}from"../snowpack/pkg/lit-html.js";import{repeat as F}from"../snowpack/pkg/lit-html/directives/repeat.js";import{request as I}from"../http.js";import"./intersectable-comp.js";import"./toast-item.js";import"./user-item.js";const c=10;export default function({params:s}){return t`<user-followees-page .username=${s.username}></user-followees-page>`}function L({username:s}){const[l,n]=o([]),[a,p]=o(null),[E,u]=o(!0),[f,U]=o(null),[m,d]=o(!1),[i,h]=o(!1),[b,j]=o(!1),[g,k]=o(null),C=v(()=>{m||i||(d(!0),$(s,a).then(({items:e,endCursor:r})=>{n(y=>[...y,...e]),p(r),e.length<c&&(h(!0),j(!0))},e=>{const r="could not fetch more users: "+e.message;console.error(r),k({type:"error",content:r})}).finally(()=>{d(!1)}))},[m,i,s,a]);return R(()=>{u(!0),$(s).then(({items:e,endCursor:r})=>{n(e),p(r),e.length<c&&h(!0)},e=>{console.error("could not fetch users:",e),U(e)}).finally(()=>{u(!1)})},[s]),t`
        <main class="container followees-page">
            <h1>${s}'s Followees</h1>
            ${f!==null?t`
                <p class="error" role="alert">Could not fetch followees: ${f.message}</p>
            `:E?t`
                <p class="loader" aria-busy="true" aria-live="polite">Loading followees... please wait.<p>
            `:t`
                ${l.length===0?t`
                    <p>0 followees</p>
                `:t`
                    <div class="users" role="feed">
                        ${F(l,e=>e.id,e=>t`<user-item .user=${e}></user-item>`)}
                    </div>
                    ${i?b?t`
                        <p>End reached.</p>
                    `:w:t`
                        <intersectable-comp @is-intersecting=${C}></intersectable-comp>
                        <p class="loader" aria-busy="true" aria-live="polite">Loading users... please wait.<p>
                    `}
                `}
            `}
        </main>
        ${g!==null?t`<toast-item .toast=${g}></toast-item>`:w}
    `}customElements.define("user-followees-page",M(L,{useShadowDOM:!1}));function $(s,l="",n=c){return I("GET",`/api/users/${encodeURIComponent(s)}/followees?after=${encodeURIComponent(l)}&first=${encodeURIComponent(n)}`).then(a=>a.body)}
