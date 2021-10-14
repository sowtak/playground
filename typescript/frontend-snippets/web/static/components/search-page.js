import{component as E,html as s,useCallback as f,useEffect as q,useState as r}from"../snowpack/pkg/haunted.js";import{nothing as y}from"../snowpack/pkg/lit-html.js";import{repeat as M}from"../snowpack/pkg/lit-html/directives/repeat.js";import{request as I}from"../http.js";import"./intersectable-comp.js";import"./toast-item.js";import"./user-item.js";const b=10;export default function(){return s`<search-page></search-page>`}function L(){const[t,c]=r([]),[l,o]=r(null),[m,h]=r(!0),[p,g]=r(null),[d,n]=r(!1),[i,u]=r(!1),[U,v]=r(!1),[C,R]=r(null),j=f(e=>{const{items:a,endCursor:$}=e.detail;c(a),o($)},[]),k=f(()=>{d||i||(n(!0),S(w(),l).then(({items:e,endCursor:a})=>{c($=>[...$,...e]),o(a),e.length<b&&(u(!0),v(!0))},e=>{const a="could not fetch more users: "+e.message;console.error(a),R({type:"error",content:a})}).finally(()=>{n(!1)}))},[d,i,l]);return q(()=>{h(!0),S(w()).then(({items:e,endCursor:a})=>{c(e),o(a),e.length<b&&u(!0)},e=>{console.error("could not fetch users:",e),g(e)}).finally(()=>{h(!1)})},[]),s`
        <main class="container search-page">
            <h1>Search</h1>
            <search-form @new-results=${j}></search-form>
            ${p!==null?s`
                <p class="error" role="alert">Could not fetch users: ${p.message}</p>
            `:m?s`
                <p class="loader" aria-busy="true" aria-live="polite">Loading users... please wait.<p>
            `:s`
                ${t.length===0?s`
                    <p>0 results</p>
                `:s`
                    <div class="users" role="feed">
                        ${M(t,e=>e.id,e=>s`<user-item .user=${e}></user-item>`)}
                    </div>
                    ${i?U?s`
                        <p>End reached.</p>
                    `:y:s`
                        <intersectable-comp @is-intersecting=${k}></intersectable-comp>
                        <p class="loader" aria-busy="true" aria-live="polite">Loading users... please wait.<p>
                    `}
                `}
            `}
        </main>
        ${C!==null?s`<toast-item .toast=${C}></toast-item>`:y}
    `}customElements.define("search-page",E(L,{useShadowDOM:!1}));function T(){const[t,c]=r(w),[l,o]=r(!1),[m,h]=r(null),p=n=>{this.dispatchEvent(new CustomEvent("new-results",{bubbles:!0,detail:n}))},g=f(n=>{n.preventDefault(),history.pushState(history.state,document.title,"/search?q="+encodeURIComponent(t)),o(!0),S(t).then(p,i=>{const u="could not fetch users: "+i.message;console.error(u),h({type:"error",content:u})}).finally(()=>{o(!1)})},[t]),d=f(n=>{c(n.currentTarget.value)},[]);return s`
        <form @submit=${g}>
            <input type="search" name="q" placeholder="Search..." required .value=${t} .disabled=${l} @input=${d}>
        </form>
        ${m!==null?s`<toast-item .toast=${m}></toast-item>`:y}
    `}customElements.define("search-form",E(T,{useShadowDOM:!1}));function w(){try{const t=new URLSearchParams(location.search.substr(1));return t.has("q")?decodeURIComponent(t.get("q")):""}catch(t){return""}}function S(t="",c="",l=b){return I("GET",`/api/users?search=${encodeURIComponent(t)}&after=${encodeURIComponent(c)}&first=${encodeURIComponent(l)}`).then(o=>o.body)}
