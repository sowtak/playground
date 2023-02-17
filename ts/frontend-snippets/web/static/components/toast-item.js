import{component as m,html as r,useCallback as l,useEffect as s,useState as n}from"../snowpack/pkg/haunted.js";import{nothing as p}from"../snowpack/pkg/lit-html.js";function f({toast:e}){const[t,c]=n(Object.assign({type:"",content:"",timeout:5e3},e)),[a,o]=n(!0),u=l(()=>{o(!1)},[t]);return s(()=>{const i=setTimeout(()=>{o(!1)},t.timeout);return()=>{clearTimeout(i)}},[t]),s(()=>{c(Object.assign({type:"",content:"",timeout:5e3},e)),o(!0)},[e]),a?r`
        <div class="toast${t.type!==""?" "+t.type:""}" role="status" aria-live="polite" @click=${u}>
            <p>${t.content}</p>
        </div>
    `:p}customElements.define("toast-item",m(f,{useShadowDOM:!1}));
