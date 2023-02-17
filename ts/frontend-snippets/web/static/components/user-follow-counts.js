import{component as o,html as e}from"../snowpack/pkg/haunted.js";function l({user:s}){return e`
        <div class="user-counts">
            <a href="/@${s.username}/followers">
                <span>${s.followersCount}</span>
                <span class="label">followers</span>
            </a>
            <a href="/@${s.username}/followees">
                <span>${s.followeesCount}</span>
                <span class="label">followees</span>
            </a>
        </div>
    `}customElements.define("user-follow-counts",o(l,{useShadowDOM:!1}));
