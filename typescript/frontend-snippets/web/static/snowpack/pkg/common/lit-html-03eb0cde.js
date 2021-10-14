/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const L=new WeakMap,D=n=>(...t)=>{const e=n(...t);return L.set(e,!0),e},N=n=>typeof n=="function"&&L.has(n);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,j=(n,t,e=null,s=null)=>{for(;t!==e;){const i=t.nextSibling;n.insertBefore(t,s),t=i}},k=(n,t,e=null)=>{for(;t!==e;){const s=t.nextSibling;n.removeChild(t),t=s}};/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const h={},A={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=`{{lit-${String(Math.random()).slice(2)}}}`,I=`<!--${f}-->`,M=new RegExp(`${f}|${I}`),w="$lit$";class q{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,r=-1,a=0;const{strings:y,values:{length:W}}=t;for(;a<W;){const l=o.nextNode();if(l===null){o.currentNode=i.pop();continue}if(r++,l.nodeType===1){if(l.hasAttributes()){const d=l.attributes,{length:b}=d;let _=0;for(let u=0;u<b;u++)H(d[u].name,w)&&_++;for(;_-- >0;){const u=y[a],x=E.exec(u)[2],v=x.toLowerCase()+w,g=l.getAttribute(v);l.removeAttribute(v);const p=g.split(M);this.parts.push({type:"attribute",index:r,name:x,strings:p}),a+=p.length-1}}l.tagName==="TEMPLATE"&&(i.push(l),o.currentNode=l.content)}else if(l.nodeType===3){const d=l.data;if(d.indexOf(f)>=0){const b=l.parentNode,_=d.split(M),u=_.length-1;for(let x=0;x<u;x++){let v,g=_[x];if(g==="")v=m();else{const p=E.exec(g);p!==null&&H(p[2],w)&&(g=g.slice(0,p.index)+p[1]+p[2].slice(0,-w.length)+p[3]),v=document.createTextNode(g)}b.insertBefore(v,l),this.parts.push({type:"node",index:++r})}_[u]===""?(b.insertBefore(m(),l),s.push(l)):l.data=_[u],a+=u}}else if(l.nodeType===8)if(l.data===f){const d=l.parentNode;(l.previousSibling===null||r===c)&&(r++,d.insertBefore(m(),l)),c=r,this.parts.push({type:"node",index:r}),l.nextSibling===null?l.data="":(s.push(l),r--),a++}else{let d=-1;for(;(d=l.data.indexOf(f,d+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}for(const l of s)l.parentNode.removeChild(l)}}const H=(n,t)=>{const e=n.length-t.length;return e>=0&&n.slice(e)===t},z=n=>n.index!==-1,m=()=>document.createComment(""),E=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class B{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)s!==void 0&&s.setValue(t[e]),e++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const t=C?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o=0,c=0,r,a=i.nextNode();for(;o<s.length;){if(r=s[o],!z(r)){this.__parts.push(void 0),o++;continue}for(;c<r.index;)c++,a.nodeName==="TEMPLATE"&&(e.push(a),i.currentNode=a.content),(a=i.nextNode())===null&&(i.currentNode=e.pop(),a=i.nextNode());if(r.type==="node"){const y=this.processor.handleTextExpression(this.options);y.insertAfterNode(a.previousSibling),this.__parts.push(y)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));o++}return C&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),G=` ${f} `;class ${constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const o=this.strings[i],c=o.lastIndexOf("<!--");s=(c>-1||s)&&o.indexOf("-->",c+1)===-1;const r=E.exec(o);r===null?e+=o+(s?G:I):e+=o.substr(0,r.index)+r[1]+r[2]+w+r[3]+f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return R!==void 0&&(e=R.createHTML(e)),t.innerHTML=e,t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=n=>n===null||!(typeof n=="object"||typeof n=="function"),P=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]);class O{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let i=0;i<s.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(e===1&&t[0]===""&&t[1]===""){const o=s[0].value;if(typeof o=="symbol")return String(o);if(typeof o=="string"||!P(o))return o}let i="";for(let o=0;o<e;o++){i+=t[o];const c=s[o];if(c!==void 0){const r=c.value;if(V(r)||!P(r))i+=typeof r=="string"?r:String(r);else for(const a of r)i+=typeof a=="string"?a:String(a)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==h&&(!V(t)||t!==this.value)&&(this.value=t,N(t)||(this.committer.dirty=!0))}commit(){for(;N(this.value);){const t=this.value;this.value=h,t(this)}this.value!==h&&this.committer.commit()}}class T{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;N(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=h,e(this)}const t=this.__pendingValue;t!==h&&(V(t)?t!==this.value&&this.__commitText(t):t instanceof $?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):P(t)?this.__commitIterable(t):t===A?(this.value=A,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;t=t??"";const s=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof B&&this.value.template===e)this.value.update(t.values);else{const s=new B(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s=0,i;for(const o of t)i=e[s],i===void 0&&(i=new T(this.options),e.push(i),s===0?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(o),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){k(this.startNode.parentNode,t.nextSibling,this.endNode)}}class J{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=h,e(this)}if(this.__pendingValue===h)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=h}}class K extends O{constructor(t,e,s){super(t,e,s);this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new Q(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Q extends S{}let F=!1;(()=>{try{const n={get capture(){return F=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch(n){}})();class U{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=h,o(this)}if(this.__pendingValue===h)return;const t=this.__pendingValue,e=this.value,s=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=t!=null&&(e==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=X(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=h}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const X=n=>n&&(F?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Y{handleAttributeExpressions(t,e,s,i){const o=e[0];return o==="."?new K(t,e.slice(1),s).parts:o==="@"?[new U(t,e.slice(1),i.eventContext)]:o==="?"?[new J(t,e.slice(1),s)]:new O(t,e,s).parts}handleTextExpression(t){return new T(t)}}const Z=new Y;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const tt=(n,...t)=>new $(n,t,"html",Z);export{S as A,T as N,q as T,j as a,m as c,D as d,tt as h,V as i,f as m,A as n,k as r};
