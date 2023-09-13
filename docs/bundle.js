(()=>{"use strict";new Set;const t="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;class e{_listeners="WeakMap"in t?new WeakMap:void 0;_observer=void 0;options;constructor(t){this.options=t}observe(t,e){return this._listeners.set(t,e),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver((t=>{for(const n of t)e.entries.set(n.target,n),this._listeners.get(n.target)?.(n)})))}}e.entries="WeakMap"in t?new WeakMap:void 0;let n,s=!1;function o(t,e){t.appendChild(e)}function r(t,e,n){const s=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}(t);if(!s.getElementById(e)){const t=l("style");t.id=e,t.textContent=n,function(t,e){o(t.head||t,e),e.sheet}(s,t)}}function i(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function c(t){return document.createTextNode(t)}function u(){return c(" ")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e,n,s){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function p(){}function f(t){return t()}function h(){return Object.create(null)}function b(t){t.forEach(f)}function g(t){return"function"==typeof t}function m(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function v(t){n=t}new Map;const x=[],_=[];let w=[];const y=[],k=Promise.resolve();let j=!1;function E(t){w.push(t)}const C=new Set;let M=0;function S(){if(0!==M)return;const t=n;do{try{for(;M<x.length;){const t=x[M];M++,v(t),A(t.$$)}}catch(t){throw x.length=0,M=0,t}for(v(null),x.length=0,M=0;_.length;)_.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];C.has(e)||(C.add(e),e())}w.length=0}while(x.length);for(;y.length;)y.pop()();j=!1,C.clear(),v(t)}function A(t){if(null!==t.fragment){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const N=new Set;let O,L;function P(t,e){t&&t.i&&(N.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(N.has(t))return;N.add(t),O.c.push((()=>{N.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function H(t){t&&t.c()}function z(t,e,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),E((()=>{const e=t.$$.on_mount.map(f).filter(g);t.$$.on_destroy?t.$$.on_destroy.push(...e):b(e),t.$$.on_mount=[]})),o.forEach(E)}function B(t,e){const n=t.$$;null!==n.fragment&&(function(t){const e=[],n=[];w.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),w=e}(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e,o,r,i,l,c,u=[-1]){const $=n;v(t);const d=t.$$={fragment:null,ctx:[],props:l,update:p,not_equal:i,bound:h(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||($?$.$$.context:[])),callbacks:h(),dirty:u,skip_bound:!1,root:e.target||$.$$.root};c&&c(d.root);let f=!1;if(d.ctx=o?o(t,e.props||{},((e,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),f&&function(t,e){-1===t.$$.dirty[0]&&(x.push(t),j||(j=!0,k.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],d.update(),f=!0,b(d.before_update),d.fragment=!!r&&r(d.ctx),e.target){if(e.hydrate){s=!0;const t=(g=e.target,Array.from(g.childNodes));d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();e.intro&&P(t.$$.fragment),z(t,e.target,e.anchor),s=!1,S()}var g;v($)}function R(t,e,n,s){const o=n[t]?.type;if(e="Boolean"===o&&"boolean"!=typeof e?null!=e:e,!s||!n[t])return e;if("toAttribute"===s)switch(o){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return null==e?null:e;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(L=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){if(await Promise.resolve(),!this.$$cn)return;function t(t){return()=>{let e;return{c:function(){e=l("slot"),"default"!==t&&$(e,"name",t)},m:function(t,n){i(t,e,n)},d:function(t){t&&a(e)}}}}const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const o of this.$$s)o in n&&(e[o]=[t(o)]);for(const r of this.attributes){const c=this.$$g_p(r.name);c in this.$$d||(this.$$d[c]=R(c,r.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=R(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const u in this.$$l)for(const d of this.$$l[u]){const p=this.$$c.$on(u,d);this.$$l_u.set(d,p)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=R(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class q{$$=void 0;$$set=void 0;$destroy(){B(this,1),this.$destroy=p}$on(t,e){if(!g(e))return p;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(t){r(t,"svelte-bobfh8",".thumb.svelte-bobfh8{flex-grow:1;padding:30px 50px;cursor:pointer;color:#fff;text-align:center;font-size:1.5em;font-family:'Comic Sans MS', cursive, sans-serif;text-shadow:-1px -1px 0 #000,\r\n\t\t\t1px -1px 0 #000,\r\n\t\t\t-1px 1px 0 #000,\r\n\t\t\t1px 1px 0 #000;border:1px solid rgba(0,0,0,0.5);border-bottom:3px solid rgba(0,0,0,0.5);border-radius:3px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.199),\r\n\t\t\tinset 0 1px rgba(255,255,255,0.3),\r\n\t\t\tinset 0 10px rgba(255,255,255,0.2),\r\n\t\t\tinset 0 10px 20px rgba(255,255,255,0.25),\r\n\t\t\tinset 0 -15px 30px rgba(0, 0, 0, 0.144);background-image:linear-gradient(\r\n\t\t\t-45deg,\r\n\t\t\trgba(255, 255, 255, .3) 25%, transparent 25%, transparent 50%,\r\n\t\t\trgba(255, 255, 255, .3) 50%,\r\n\t\t\trgba(255, 255, 255, .3) 75%, transparent 75%, transparent);background-size:100px 100px;background-position:0 0;transition:all 0.5s ease-in-out}.thumb.svelte-bobfh8:hover{background-position:0 100px}")}function D(t){let e,n,s;return{c(){e=l("div"),n=l("span"),s=c(t[0]),$(e,"class","thumb svelte-bobfh8"),d(e,"background-color",t[1])},m(t,r){i(t,e,r),o(e,n),o(n,s)},p(t,[n]){var o,r;1&n&&(o=s,r=""+(r=t[0]),o.data!==r&&(o.data=r)),2&n&&d(e,"background-color",t[1])},i:p,o:p,d(t){t&&a(e)}}}function J(t,e=80){let n=e;for(let e=0;e<t.length;e++)n=t.charCodeAt(e)+((n<<5)-n);return"#"+(16777215&n).toString(16).padEnd(6,"0")}function F(t,e,n){let{project:s}=e,{color:o=J(s)}=e;return t.$$set=t=>{"project"in t&&n(0,s=t.project),"color"in t&&n(1,o=t.color)},[s,o]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");const G=class extends q{constructor(t){super(),W(this,t,F,D,m,{project:0,color:1},I)}};function K(t){r(t,"svelte-1u4t13b","body{background-color:rgb(245, 239, 229);color:black}main.svelte-1u4t13b.svelte-1u4t13b{width:100%;max-width:900px;margin:0 auto}.presentation.svelte-1u4t13b.svelte-1u4t13b{text-align:center}.presentation.svelte-1u4t13b h1.svelte-1u4t13b{font-family:'Comic Sans MS', cursive, sans-serif;font-size:3rem}.presentation.svelte-1u4t13b p.svelte-1u4t13b{font-family:'Courier New', Courier, monospace;font-size:1.2rem}.external-links.svelte-1u4t13b.svelte-1u4t13b{display:flex;justify-content:center;gap:2rem;margin:30px 0 50px 0}.external-links.svelte-1u4t13b a.svelte-1u4t13b{border-bottom:2px dashed rgba(0, 0, 0, 0.267)}.external-links.svelte-1u4t13b img.svelte-1u4t13b{width:80px}.projects.svelte-1u4t13b.svelte-1u4t13b{display:flex;flex-wrap:wrap;gap:10px}.credits.svelte-1u4t13b.svelte-1u4t13b{position:fixed;bottom:0;right:0;padding:10px}")}function Q(t){let e,n,s,r,c,d,f,h,b,g,m,v,x,_;return c=new G({props:{project:"Perfect Circle"}}),f=new G({props:{project:"Project two asdasdasd asdasdasdasd"}}),b=new G({props:{project:"Hello sailor"}}),m=new G({props:{project:"Hello from no wher asd asd asdasdasdasdasdae"}}),{c(){e=l("main"),n=l("header"),n.innerHTML='<h1 class="svelte-1u4t13b">Elloramir</h1> <p class="svelte-1u4t13b">What is a programmer?<br/>A miserable little pile of code.</p> <nav class="external-links svelte-1u4t13b"><a href="https://twitter.com/elloramir" target="_blank" class="svelte-1u4t13b"><img alt="icon" src="/images/ladybird.png" class="svelte-1u4t13b"/></a> <a href="mailto:ellorakat@gmail.com" class="svelte-1u4t13b"><img alt="icon" src="/images/mail.png" class="svelte-1u4t13b"/></a> <a href="https://github.com/elloramir" target="_blank" class="svelte-1u4t13b"><img alt="icon" src="/images/octopus.png" class="svelte-1u4t13b"/></a></nav>',s=u(),r=l("section"),H(c.$$.fragment),d=u(),H(f.$$.fragment),h=u(),H(b.$$.fragment),g=u(),H(m.$$.fragment),v=u(),x=l("div"),x.innerHTML='<span>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></span>',$(n,"class","presentation svelte-1u4t13b"),$(r,"class","projects svelte-1u4t13b"),$(e,"class","svelte-1u4t13b"),$(x,"class","credits svelte-1u4t13b")},m(t,a){i(t,e,a),o(e,n),o(e,s),o(e,r),z(c,r,null),o(r,d),z(f,r,null),o(r,h),z(b,r,null),o(r,g),z(m,r,null),i(t,v,a),i(t,x,a),_=!0},p,i(t){_||(P(c.$$.fragment,t),P(f.$$.fragment,t),P(b.$$.fragment,t),P(m.$$.fragment,t),_=!0)},o(t){T(c.$$.fragment,t),T(f.$$.fragment,t),T(b.$$.fragment,t),T(m.$$.fragment,t),_=!1},d(t){t&&(a(e),a(v),a(x)),B(c),B(f),B(b),B(m)}}}const U=new class extends q{constructor(t){super(),W(this,t,null,Q,m,{},K)}}({target:document.body,props:{name:"world"}});window.app=U})();