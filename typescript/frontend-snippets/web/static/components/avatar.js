import{html as t}from"../snowpack/pkg/haunted.js";export function Avatar(a){return a.avatarURL!==null?t`
        <img class="avatar" src="${a.avatarURL}" alt="">
    `:t`
        <span class="avatar" data-initial="${a.username[0]}"></span>
    `}
