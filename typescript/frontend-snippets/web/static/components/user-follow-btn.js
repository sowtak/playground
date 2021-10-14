import{component as p,html as a,useCallback as u,useEffect as w,useState as n}from"../snowpack/pkg/haunted.js";import{nothing as h}from"../snowpack/pkg/lit-html.js";import{ifDefined as f}from"../snowpack/pkg/lit-html/directives/if-defined.js";import{request as v}from"../http.js";import"./toast-item.js";function b({user:o}){const[t,l]=n(o),[r,g]=n(!1),[i,m]=n(null),c=e=>{this.dispatchEvent(new CustomEvent("follow-toggle",{bubbles:!0,detail:e}))},d=u(()=>{g(!0),k(t.username).then(e=>{l(s=>({...s,...e})),c(e)},e=>{const s="could not toggle follow: "+e.message;console.error(s),m({type:"error",content:s})}).finally(()=>{g(!1)})},[t]);return w(()=>{l(o)},[o]),t.me?h:a`
        <button aria-busy=${f(r?"true":void 0)} .disabled=${r} @click=${d}>
            ${t.following?a`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="person-done"><rect width="24" height="24" opacity="0"/><path d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g></svg>
            `:a`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="person-add"><rect width="24" height="24" opacity="0"/><path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g></svg>
            `}
            <span>${t.following?"Following":"Follow"}</span>
        </button>
        ${i!==null?a`<toast-item .toast=${i}></toast-item>`:h}
    `}customElements.define("user-follow-btn",p(b,{useShadowDOM:!1}));function k(o){return v("POST",`/api/users/${encodeURIComponent(o)}/toggle_follow`).then(t=>t.body)}
