import{component as b,html as d,useCallback as c,useEffect as f,useState as k}from"../snowpack/pkg/haunted.js";import{nothing as m}from"../snowpack/pkg/lit-html.js";import{ifDefined as $}from"../snowpack/pkg/lit-html/directives/if-defined.js";import{authStore as y,hasUnreadNotificationsStore as L,notificationsEnabledStore as D,useStore as h}from"../ctx.js";import{request as g,subscribe as I}from"../http.js";import{Avatar as P}from"./avatar.js";const C=/^\/posts\/(?<postID>[^\/]+)$/;function S(){const[t]=h(y),[n,a]=h(L),[o]=h(D),[l,u]=k(location.pathname),E=c(e=>{if(U(e)){A(e.id).then(()=>{e.read=!0,w(e)},N=>{console.error("could not mark arriving notification as read:",N)});return}a(!0),w(e),o&&B(e)},[o]),r=c(e=>{location.href===e.currentTarget.href&&(document.documentElement.scrollTop=0)},[]),i=c(()=>{u(location.pathname)},[]);f(()=>{if(t!==null)return v().then(e=>{a(e)},e=>{console.error("could not fetch has unread notifications:",e)}),_(E)},[t]);const p=c(()=>{v().then(e=>{a(e)},e=>{console.error("could not fetch has unread notifications:",e)})},[]);f(()=>{if("setAppBadge"in navigator&&"clearAppBadge"in navigator){if(n){navigator.setAppBadge();return}navigator.clearAppBadge()}},[n]),f(()=>(addEventListener("notification-read",p),addEventListener("popstate",i),addEventListener("pushstate",i),addEventListener("replacestate",i),addEventListener("hashchange",i),()=>{removeEventListener("popstate",i),removeEventListener("pushstate",i),removeEventListener("replacestate",i),removeEventListener("hashchange",i),removeEventListener("notification-read",p)}),[]);const s=e=>$(l===e?"page":void 0);return d`
        <header>
            <nav class="container">
                <ul>
                    <li>
                        <a href="/" class="btn" title="Home" aria-current="${s("/")}" @click=${r}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g data-name="Layer 2">
                                    <g data-name="home">
                                        <rect width="24" height="24" opacity="0" />
                                        <path
                                            d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </li>
                    ${t!==null?d`
                    <li>
                        <a href="/notifications" class="btn${n?" has-unread-notifications":""}"
                            title="Notifications" aria-current="${s("/notifications")}" @click=${r}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g data-name="Layer 2">
                                    <g data-name="bell">
                                        <rect width="24" height="24" opacity="0" />
                                        <path
                                            d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 0 0 .59-1.42V8.73A4.73 4.73 0 0 1 8.9 5.17 4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 16z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </li>
                    `:m}
                    <li>
                        <a href="/search" class="btn" title="Search" aria-current="${s("/search")}"
                            @click=${r}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g data-name="Layer 2">
                                    <g data-name="search">
                                        <rect width="24" height="24" opacity="0" />
                                        <path
                                            d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </li>
                    ${t!==null?d`
                    <li class="profile-link-item">
                        <a href="/@${t.user.username}" class="btn profile-link" title="Profile"
                            aria-current="${s("/@"+t.user.username)}" @click=${r}>
                            ${P(t.user)}
                        </a>
                    </li>
                    `:m}
                </ul>
            </nav>
        </header>
    `}customElements.define("app-header",b(S,{useShadowDOM:!1}));function B(t){const n=M(t),a=x(t),o=new Notification(n,{body:a,tag:t.id,timestamp:t.issuedAt,data:t,icon:location.origin+"/icons/logo-circle-512.png"}),l=u=>{u.preventDefault(),window.open(location.origin+z(t)),o.close(),A(t.id).then(()=>{dispatchEvent(new CustomEvent("notification-read",{bubbles:!0,detail:t}))})};o.addEventListener("click",l,{once:!0})}function M(t){switch(t.type){case"follow":return"New follow";case"comment":return"New commented";case"post_mention":return"New post mention";case"comment_mention":return"New comment mention";default:return"New notification"}}function x(t){const n=()=>{const o=t.actors;switch(o.length){case 0:return"Someone";case 1:return o[0];case 2:return`${o[0]} and ${o[1]}`;default:return`${o[0]} and ${o.length-1} others`}},a=()=>{switch(t.type){case"follow":return"followed you";case"comment":return"commented in a post";case"post_mention":return"mentioned you in a post";case"comment_mention":return"mentioned you in a comment";default:return"did something"}};return n()+" "+a()}function z(t){return typeof t.postID=="string"&&t.postID!==""?"/posts/"+encodeURIComponent(t.postID):t.type==="follow"?"/@"+encodeURIComponent(t.actors[0]):"/notifications"}function U(t){if(!document.hasFocus())return!1;const n=C.exec(location.pathname);return n===null?!1:decodeURIComponent(n.groups.postID)===t.postID}function v(){return g("GET","/api/has_unread_notifications").then(t=>t.body).then(t=>Boolean(t))}function _(t){return I("/api/notifications",n=>{n.issuedAt=new Date(n.issuedAt),t(n)})}function w(t){dispatchEvent(new CustomEvent("new-notification-arrived",{bubbles:!0,detail:t}))}function A(t){return g("POST",`/api/notifications/${encodeURIComponent(t)}/mark_as_read`).then(()=>{})}
