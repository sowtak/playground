import{component as c,html as t,useCallback as m,useEffect as f,useState as i}from"../snowpack/pkg/haunted.js";import{nothing as p}from"../snowpack/pkg/lit-html.js";import{ifDefined as d}from"../snowpack/pkg/lit-html/directives/if-defined.js";import{authStore as w,useStore as h}from"../ctx.js";import{Avatar as $}from"./avatar.js";import"./user-follow-btn.js";import"./user-follow-counts.js";function g({user:s}){const[r]=h(w),[e,o]=i(s),l=m(u=>{const n=u.detail;o(a=>({...a,...n}))},[e]);return f(()=>{o(s)},[s]),t`
        <article class="user-item" style="${d(e.coverURL!==null?`--cover-url: url('${e.coverURL}');`:void 0)}">
            <a href="/@${e.username}" class="user-info">
                ${$(e)}
                <div class="user-text">
                    <span class="username">${e.username}</span>
                    <user-follow-counts .user=${e}></user-follow-counts>
                </div>
            </a>
            ${r!==null&&!e.me?t`
                <user-follow-btn .user=${e} @follow-toggle=${l}></user-follow-btn>
            `:p}
        </article>
    `}customElements.define("user-item",c(g,{useShadowDOM:!1}));
