import{d as c,i as r}from"../../common/lit-html-03eb0cde.js";/**
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
 */const f=new WeakMap,a=2147483647,v=c((...s)=>i=>{let e=f.get(i);e===void 0&&(e={lastRenderedIndex:a,values:[]},f.set(i,e));const l=e.values;let o=l.length;e.values=s;for(let n=0;n<s.length&&!(n>e.lastRenderedIndex);n++){const t=s[n];if(r(t)||typeof t.then!="function"){i.setValue(t),e.lastRenderedIndex=n;break}n<o&&t===l[n]||(e.lastRenderedIndex=a,o=0,Promise.resolve(t).then(u=>{const d=e.values.indexOf(t);d>-1&&d<e.lastRenderedIndex&&(e.lastRenderedIndex=d,i.setValue(u),i.commit())}))}});export{v as until};
