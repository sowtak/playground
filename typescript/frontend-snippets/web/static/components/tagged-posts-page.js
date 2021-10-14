import{component as L,html as t,useCallback as E,useEffect as T,useState as n}from"../snowpack/pkg/haunted.js";import{nothing as k}from"../snowpack/pkg/lit-html.js";import{repeat as U}from"../snowpack/pkg/lit-html/directives/repeat.js";import{setLocalAuth as D}from"../auth.js";import{authStore as I,useStore as x}from"../ctx.js";import{request as q}from"../http.js";import"./intersectable-comp.js";import"./post-item.js";import"./toast-item.js";const m=10;export default function({params:s}){return t`<tagged-posts-page .tag=${s.tag}></tagged-posts-page>`}function z({tag:s}){const[u,l]=x(I),[o,r]=n([]),[g,i]=n(null),[v,f]=n(o.length===0),[h,C]=n(null),[$,b]=n(!1),[p,c]=n(!1),[M,j]=n(!1),[y,P]=n(null),R=E(e=>{const a=e.detail;r(d=>d.filter(A=>A.id!==a.id))},[]),S=E(()=>{$||p||(b(!0),w(s,g).then(({items:e,endCursor:a})=>{r(d=>[...d,...e]),i(a),e.length<m&&(c(!0),j(!0))},e=>{const a="could not fetch more tagged posts: "+e.message;console.error(a),P({type:"error",content:a})}).finally(()=>{b(!1)}))},[s,$,p,g]);return T(()=>{r([]),i(null),c(!1),j(!1),f(!0),w(s).then(({items:e,endCursor:a})=>{r(e),i(a),e.length<m&&c(!0)},e=>{console.error("could not fetch tagged posts:",e),e.name==="UnauthenticatedError"&&(l(null),D(null)),C(e)}).finally(()=>{f(!1)})},[s]),t`
        <main class="container tagged-posts-page">
            <h1>"${s}" Tagged Posts</h1>
            ${h!==null?t`
                <p class="error" role="alert">
                    could not fetch tagged posts: ${h.message}
                </p>
            `:v?t`
                <p class="loader" aria-busy="true" aria-live="polite">
                    Loading tagged posts... please wait.
                <p>
            `:t`
                <div role="tabpanel" id="tabpanel" aria-labelledby="tab">
                ${o.length===0?t`
                    <p>0 posts</p>
                `:t`
                    <div class="posts" role="feed">
                        ${U(o,e=>e.id,e=>t`<post-item .post=${e} .type="post"
                            @resource-deleted=${R}></post-item>`)}
                    </div>
                    ${p?M?t`
                        <p>End reached</p>
                    `:k:t`
                        <intersectable-comp @is-intersecting=${S}></intersectable-comp>
                        <p class="loader" aria-busy="true" aria-live="polite">
                            Loading tagged posts... please wait.
                        <p>
                    `}
                `}
            `}
        </main>
        ${y!==null?t`<toast-item .toast=${y}></toast-item>`:k}
    `}customElements.define("tagged-posts-page",L(z,{useShadowDOM:!1}));function w(s,u="",l=m){return q("GET",`/api/posts?tag=${encodeURIComponent(s)}&last=${encodeURIComponent(l)}&before=${encodeURIComponent(u)}`).then(o=>o.body).then(o=>(o.items=o.items.map(r=>({...r,createdAt:new Date(r.createdAt)})),o))}
