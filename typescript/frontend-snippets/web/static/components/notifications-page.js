import{component as P,html as o,useCallback as u,useEffect as p,useState as c}from"../snowpack/pkg/haunted.js";import{nothing as g}from"../snowpack/pkg/lit-html.js";import{repeat as U}from"../snowpack/pkg/lit-html/directives/repeat.js";import{setLocalAuth as V}from"../auth.js";import{authStore as X,hasUnreadNotificationsStore as D,notificationsEnabledStore as Y,setLocalNotificationsEnabled as w,useStore as E}from"../ctx.js";import{request as y}from"../http.js";import{navigate as Z}from"../router.js";import"./intersectable-comp.js";import"./relative-datetime.js";import"./toast-item.js";const L=10;export default function(){return o`<notifications-page></notifications-page>`}function tt(){const[s,f]=E(X),[a,i]=E(Y),[m,d]=c([]),[$,b]=c(null),[S,N]=c(m.length===0),[k,_]=c(null),[n,l]=c(!1),[v,R]=c(!1),[z,B]=c(!1),[A,C]=c([]),[H,j]=c(!1),[st,W]=E(D),[I,h]=c(null),F=u(t=>{t.currentTarget.checked=!1,i(e=>!e)},[]),G=u(t=>{d(e=>e.findIndex(r=>r.id===t.id)===-1?(C(r=>[t,...r]),e):e.map(r=>r.id===t.id?{...r,...t}:r))},[]),K=u(()=>{d(t=>[...A,...t]),C([])},[A]),Q=u(()=>{n||v||(l(!0),O($).then(({items:t,endCursor:e})=>{d(r=>[...r,...t]),b(e),t.length<L&&(R(!0),B(!0))},t=>{const e="could not fetch more notifications: "+t.message;console.error(e),h({type:"error",content:e})}).finally(()=>{l(!1)}))},[n,v,$]),J=u(()=>{j(!0),it().then(()=>{d(t=>t.map(e=>({...e,read:!0}))),W(!1)},t=>{const e="could not mark all notifications as read: "+t.message;console.error(e),h({type:"error",content:e})}).finally(()=>{j(!1)})},[]),T=u(t=>{const{id:e}=t.detail;d(r=>r.map(M=>M.id===e?{...M,read:!0}:M))},[]);p(()=>{if(a&&typeof window.Notification=="undefined"){h({type:"error",content:"no notifications support"}),w(!1),i(!1);return}if(a&&Notification.permission==="denied"){h({type:"error",content:"notification permissions denied"}),w(!1),i(!1);return}if(a&&Notification.permission==="default"){Notification.requestPermission().then(t=>{const e=t==="granted";w(e),i(e)}).catch(t=>{const e="could not request notification permissions: "+t.message;console.error(e),h({type:"error",content:e}),w(!1),i(!1)});return}w(a)},[a]);const x=t=>{const e="could not save web push subscription: "+t.message;console.error(e),h({type:"error",content:e})};return p(()=>{!a||typeof window.Notification=="undefined"||Notification.permission!=="granted"||navigator.serviceWorker.ready.then(t=>{t.pushManager.getSubscription().then(e=>{if(e===null){t.pushManager.subscribe({applicationServerKey:window.vapidPubKey,userVisibleOnly:!0}).then(r=>{q(r).catch(x)});return}q(e).catch(x)})})},[a]),p(()=>{N(!0),O().then(({items:t,endCursor:e})=>{d(t),b(e),t.length<L&&R(!0)},t=>{console.error("could not fetch notifications:",t),t.name==="UnauthenticatedError"&&(f(null),V(null),Z("/")),_(t)}).finally(()=>{N(!1)})},[]),p(()=>(addEventListener("notification-read",T),()=>{removeEventListener("notification-read",T)}),[]),p(()=>nt(G),[]),o`
        <main class="container notifications-page">
            <div class="notifications-heading">
                <h1>Notifications</h1>
                <div class="notifications-controls">
                    ${window.Notification?o`
                    <label class="switch-wrapper">
                        <input type="checkbox" role="switch" name="notifications_enabled" .checked=${a}
                            @change=${F}>
                        <span>Notify?</span>
                    </label>
                    `:g}
                    <button .disabled=${H} @click=${J}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g data-name="Layer 2">
                                <g data-name="checkmark-circle">
                                    <rect width="24" height="24" opacity="0" />
                                    <path
                                        d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z" />
                                    <path
                                        d="M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z" />
                                </g>
                            </g>
                        </svg>
                        <span>Read all</span>
                    </button>
                </div>
            </div>
            ${k!==null?o`
            <p class="error" role="alert">Could not fetch notifications: ${k.message}</p>
            `:S?o`
            <p class="loader" aria-busy="true" aria-live="polite">Loading notifications... please wait.<p>
                    `:o`
                    ${A.length!==0?o`
                    <button class="queue-btn" @click=${K}>${A.length} new notifications</button>
                    `:g}
                    ${m.length===0?o`
                    <p>0 notifications</p>
                    `:o`
                    <div class="notifications" role="feed">
                        ${U(m,t=>t.id,t=>o`<notification-item .notification=${t}></notification-item>
                        `)}
                    </div>
                    ${v?z?o`
                            <p>End reached.</p>
                            `:g:o`
                    <intersectable-comp @is-intersecting=${Q}></intersectable-comp>
                    <p class="loader" aria-busy="true" aria-live="polite">Loading notifications... please wait.<p>
                            `}
                            `}
                            `}
        </main>
        ${I!==null?o`<toast-item .toast=${I}></toast-item>`:g}
    `}customElements.define("notifications-page",P(tt,{useShadowDOM:!1}));function et({notification:s}){const[f,a]=E(D),[i,m]=c(s),[d,$]=c(!1),[b,S]=c(null),N=()=>{const n=i.actors;switch(n.length){case 0:return"Someone";case 1:return o`<a href="/@${n[0]}">${n[0]}</a>`;case 2:return o`<a href="/@${n[0]}">${n[0]}</a> and <a href="/@${n[1]}">${n[1]}</a>`;default:return i.type==="follow"?o`${U(n.slice(0,n.length-1),l=>l,(l,v)=>o`${v>0?", ":""}<a href="/@${l}">${l}</a>`)} and <a
    href="/@${n[n.length-1]}">${n[n.length-1]}</a>`:o`<a href="/@${n[0]}">${n[0]}</a> and ${n.length-1} others`}},k=()=>{switch(i.type){case"follow":return"followed you";case"comment":return o`commented in a <a href="/posts/${i.postID}">post</a>`;case"post_mention":return o`mentioned you in a <a href="/posts/${i.postID}">post</a>`;case"comment_mention":return o`mentioned you in a <a href="/posts/${i.postID}">comment</a>`;default:return"did something"}},_=u(()=>{$(!0),ot(i.id).then(()=>{m(n=>({...n,read:!0}))},n=>{const l="could not mark notification as read: "+n.message;console.error(l),S({type:"error",content:l})}).finally(()=>{$(!1)}).then(()=>{at().then(a,n=>{console.error("could not fetch has unread notifications:",n)})})},[i]);return p(()=>{i.read?this.setAttribute("read",""):this.removeAttribute("read")},[i]),p(()=>{m(s)},[s]),o`
        <div class="notification" @click=${_}>
            <div>
                <p>${N()} ${k()}.</p>
                <relative-datetime .datetime=${i.issuedAt}></relative-datetime>
            </div>
            ${i.read?g:o`
            <button .disabled=${d}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                        <g data-name="checkmark-circle">
                            <rect width="24" height="24" opacity="0" />
                            <path
                                d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z" />
                            <path
                                d="M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z" />
                        </g>
                    </g>
                </svg>
                <span>Read</span>
            </button>
            `}
        </div>
        ${b!==null?o`<toast-item .toast=${b}></toast-item>`:g}
    `}customElements.define("notification-item",P(et,{useShadowDOM:!1}));function O(s="",f=L){return y("GET",`/api/notifications?last=${encodeURIComponent(f)}&before=${encodeURIComponent(s)}`).then(a=>a.body).then(a=>(a.items=a.items.map(i=>({...i,issuedAt:new Date(i.issuedAt)})),a))}function nt(s){const f=a=>{s(a.detail)};return addEventListener("new-notification-arrived",f),()=>{removeEventListener("new-notification-arrived",f)}}function ot(s){return y("POST",`/api/notifications/${encodeURIComponent(s)}/mark_as_read`).then(()=>{})}function it(){return y("POST","/api/mark_notifications_as_read").then(()=>{})}function at(){return y("GET","/api/has_unread_notifications").then(s=>s.body).then(s=>Boolean(s))}function q(s){return y("POST","/api/web_push_subscriptions",{body:s.toJSON()})}
