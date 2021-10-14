import{component as b,html as s,useCallback as d,useEffect as C,useState as u}from"../snowpack/pkg/haunted.js";import{nothing as l}from"../snowpack/pkg/lit-html.js";import{translate as r}from"../snowpack/pkg/lit-translate.js";import{setLocalAuth as E}from"../auth.js";import{authStore as $,useStore as R}from"../ctx.js";import{navigate as A}from"../router.js";export default function(){return s`<access-callback-page></access-callback-page>`}function I(){const[,t]=R($),[o,m]=u(null),[n,g]=u(null),[c,f]=u(""),k=d(e=>{e.preventDefault(),n!==null&&(n.searchParams.set("username",c),location.replace(n.toString()))},[n,c]),U=d(e=>{f(e.currentTarget.value)},[]);return C(()=>{const e=new URLSearchParams(location.hash.substr(1));if(e.has("error")){const a=new Error(decodeURIComponent(e.get("error")));if(a.name=a.message.split(" ").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join("")+"Error",m(a),e.has("retry_endpoint")&&h(a)){g(new URL(decodeURIComponent(e.get("retry_endpoint")),location.origin));return}return}if(!e.has("token")||!e.has("expires_at")||!e.has("user.id")||!e.has("user.username")){const a=new Error("missing auth data");a.name="MissingAuthDataError",m(a);return}const i={token:decodeURIComponent(e.get("token")),expiresAt:new Date(decodeURIComponent(e.get("expires_at"))),user:{id:decodeURIComponent(e.get("user.id")),username:decodeURIComponent(e.get("user.username")),avatarURL:e.has("user.avatar_url")?decodeURIComponent(e.get("user.avatar_url")):null}};E(i),t(i),A("/",!0)},[]),s`
        <main class="container">
            <h1>${r("accessCallbackPage.title")}</h1>
            ${o!==null?s`
                <p class="error" role="alert">${r("accessCallbackPage.err")} ${r(o.name)}</p>
                ${h(o)?l:s`
                    <a href="/">${r("accessCallbackPage.goHome")}</a>
                `}
            `:l}
            ${n!==null?s`
                <form class="username-form" @submit=${k}>
                    <input type="text" name="username" placeholder="${r("accessCallbackPage.usernamePlaceholder")}" pattern="^[a-zA-Z][a-zA-Z0-9_-]{0,17}$" autofocus .value=${c} @input=${U}>
                    <button>${r("accessCallbackPage.createAccountBtn")}</button>
                </form>
            `:l}
        </main>
    `}customElements.define("access-callback-page",b(I,{useShadowDOM:!1}));function h(t){return t.name==="UserNotFoundError"||t.name==="InvalidUsernameError"||t.name==="UsernameTakenError"}
