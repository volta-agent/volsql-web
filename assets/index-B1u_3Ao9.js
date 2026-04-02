var to=Object.defineProperty;var Gn=e=>{throw TypeError(e)};var ro=(e,t,r)=>t in e?to(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ye=(e,t,r)=>ro(e,typeof t!="symbol"?t+"":t,r),rn=(e,t,r)=>t.has(e)||Gn("Cannot "+r);var a=(e,t,r)=>(rn(e,t,"read from private field"),r?r.call(e):t.get(e)),R=(e,t,r)=>t.has(e)?Gn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),O=(e,t,r,n)=>(rn(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),F=(e,t,r)=>(rn(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const no=!1;var ss=Array.isArray,so=Array.prototype.indexOf,jt=Array.prototype.includes,Qr=Array.from,oo=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,io=Object.prototype,ao=Array.prototype,lo=Object.getPrototypeOf,Pn=Object.isExtensible;const uo=()=>{};function co(e){for(var t=0;t<e.length;t++)e[t]()}function os(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}const W=2,_r=4,zr=8,is=1<<24,Ke=16,Le=32,Mt=64,fn=128,de=512,B=1024,Q=2048,Ye=4096,ee=8192,ve=16384,Dt=32768,Bn=1<<25,Kt=65536,dn=1<<17,fo=1<<18,er=1<<19,vo=1<<20,ke=1<<25,At=65536,vn=1<<21,jr=1<<22,it=1<<23,nn=Symbol("$state"),Ve=new class extends Error{constructor(){super(...arguments);ye(this,"name","StaleReactionError");ye(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function ho(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function po(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function mo(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function _o(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Eo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function go(e){throw new Error("https://svelte.dev/e/effect_orphan")}function To(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function wo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function yo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ro(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const So=1,Oo=2,as=4,Co=8,No=16,Lo=1,Mo=2,V=Symbol(),Ao="http://www.w3.org/1999/xhtml",qo="http://www.w3.org/2000/svg",Io="http://www.w3.org/1998/Math/MathML";function Uo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ls(e){return e===this.v}function Do(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function us(e){return!Do(e,this.v)}let Fo=!1,ie=null;function $t(e){ie=e}function cs(e,t=!1,r){ie={p:ie,i:!1,c:null,e:null,s:e,x:null,r:C,l:null}}function fs(e){var t=ie,r=t.e;if(r!==null){t.e=null;for(var n of r)qs(n)}return t.i=!0,ie=t.p,{}}function ds(){return!0}let Tt=[];function vs(){var e=Tt;Tt=[],co(e)}function Ct(e){if(Tt.length===0&&!pr){var t=Tt;queueMicrotask(()=>{t===Tt&&vs()})}Tt.push(e)}function xo(){for(;Tt.length>0;)vs()}function hs(e){var t=C;if(t===null)return S.f|=it,e;if((t.f&Dt)===0&&(t.f&_r)===0)throw e;st(e,t)}function st(e,t){for(;t!==null;){if((t.f&fn)!==0){if((t.f&Dt)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const ko=-7169;function k(e,t){e.f=e.f&ko|t}function bn(e){(e.f&de)!==0||e.deps===null?k(e,B):k(e,Ye)}function ps(e){if(e!==null)for(const t of e)(t.f&W)===0||(t.f&At)===0||(t.f^=At,ps(t.deps))}function ms(e,t,r){(e.f&Q)!==0?t.add(e):(e.f&Ye)!==0&&r.add(e),ps(e.deps),k(e,B)}const et=new Set;let T=null,J=null,hn=null,pr=!1,sn=!1,Bt=null,xr=null;var Hn=0;let Yo=1;var Vt,Jt,Je,Ie,Tr,ne,wr,rt,Qe,Ue,Qt,bt,Y,kr,_s,Yr,pn,mn,Es;const Wr=class Wr{constructor(){R(this,Y);ye(this,"id",Yo++);ye(this,"current",new Map);ye(this,"previous",new Map);R(this,Vt,new Set);R(this,Jt,new Set);R(this,Je,new Map);R(this,Ie,new Map);R(this,Tr,null);R(this,ne,[]);R(this,wr,[]);R(this,rt,new Set);R(this,Qe,new Set);R(this,Ue,new Map);ye(this,"is_fork",!1);R(this,Qt,!1);R(this,bt,new Set)}skip_effect(t){a(this,Ue).has(t)||a(this,Ue).set(t,{d:[],m:[]})}unskip_effect(t){var r=a(this,Ue).get(t);if(r){a(this,Ue).delete(t);for(var n of r.d)k(n,Q),this.schedule(n);for(n of r.m)k(n,Ye),this.schedule(n)}}capture(t,r,n=!1){r!==V&&!this.previous.has(t)&&this.previous.set(t,r),(t.f&it)===0&&(this.current.set(t,[t.v,n]),J==null||J.set(t,t.v))}activate(){T=this}deactivate(){T=null,J=null}flush(){try{sn=!0,T=this,F(this,Y,Yr).call(this)}finally{Hn=0,hn=null,Bt=null,xr=null,sn=!1,T=null,J=null,at.clear()}}discard(){for(const t of a(this,Jt))t(this);a(this,Jt).clear(),et.delete(this)}register_created_effect(t){a(this,wr).push(t)}increment(t,r){let n=a(this,Je).get(r)??0;if(a(this,Je).set(r,n+1),t){let s=a(this,Ie).get(r)??0;a(this,Ie).set(r,s+1)}}decrement(t,r,n){let s=a(this,Je).get(r)??0;if(s===1?a(this,Je).delete(r):a(this,Je).set(r,s-1),t){let o=a(this,Ie).get(r)??0;o===1?a(this,Ie).delete(r):a(this,Ie).set(r,o-1)}a(this,Qt)||n||(O(this,Qt,!0),Ct(()=>{O(this,Qt,!1),this.flush()}))}transfer_effects(t,r){for(const n of t)a(this,rt).add(n);for(const n of r)a(this,Qe).add(n);t.clear(),r.clear()}oncommit(t){a(this,Vt).add(t)}ondiscard(t){a(this,Jt).add(t)}settled(){return(a(this,Tr)??O(this,Tr,os())).promise}static ensure(){if(T===null){const t=T=new Wr;sn||(et.add(T),pr||Ct(()=>{T===t&&t.flush()}))}return T}apply(){{J=null;return}}schedule(t){var s;if(hn=t,(s=t.b)!=null&&s.is_pending&&(t.f&(_r|zr|is))!==0&&(t.f&Dt)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(Bt!==null&&r===C&&(S===null||(S.f&W)===0))return;if((n&(Mt|Le))!==0){if((n&B)===0)return;r.f^=B}}a(this,ne).push(r)}};Vt=new WeakMap,Jt=new WeakMap,Je=new WeakMap,Ie=new WeakMap,Tr=new WeakMap,ne=new WeakMap,wr=new WeakMap,rt=new WeakMap,Qe=new WeakMap,Ue=new WeakMap,Qt=new WeakMap,bt=new WeakMap,Y=new WeakSet,kr=function(){return this.is_fork||a(this,Ie).size>0},_s=function(){for(const n of a(this,bt))for(const s of a(n,Ie).keys()){for(var t=!1,r=s;r.parent!==null;){if(a(this,Ue).has(r)){t=!0;break}r=r.parent}if(!t)return!0}return!1},Yr=function(){var c,l;if(Hn++>1e3&&(et.delete(this),Po()),!F(this,Y,kr).call(this)){for(const u of a(this,rt))a(this,Qe).delete(u),k(u,Q),this.schedule(u);for(const u of a(this,Qe))k(u,Ye),this.schedule(u)}const t=a(this,ne);O(this,ne,[]),this.apply();var r=Bt=[],n=[],s=xr=[];for(const u of t)try{F(this,Y,pn).call(this,u,r,n)}catch(f){throw ws(u),f}if(T=null,s.length>0){var o=Wr.ensure();for(const u of s)o.schedule(u)}if(Bt=null,xr=null,F(this,Y,kr).call(this)||F(this,Y,_s).call(this)){F(this,Y,mn).call(this,n),F(this,Y,mn).call(this,r);for(const[u,f]of a(this,Ue))Ts(u,f)}else{a(this,Je).size===0&&et.delete(this),a(this,rt).clear(),a(this,Qe).clear();for(const u of a(this,Vt))u(this);a(this,Vt).clear(),Wn(n),Wn(r),(c=a(this,Tr))==null||c.resolve()}var i=T;if(a(this,ne).length>0){const u=i??(i=this);a(u,ne).push(...a(this,ne).filter(f=>!a(u,ne).includes(f)))}i!==null&&(et.add(i),F(l=i,Y,Yr).call(l)),et.has(this)||F(this,Y,Es).call(this)},pn=function(t,r,n){t.f^=B;for(var s=t.first;s!==null;){var o=s.f,i=(o&(Le|Mt))!==0,c=i&&(o&B)!==0,l=c||(o&ee)!==0||a(this,Ue).has(s);if(!l&&s.fn!==null){i?s.f^=B:(o&_r)!==0?r.push(s):Cr(s)&&((o&Ke)!==0&&a(this,Qe).add(s),Zt(s));var u=s.first;if(u!==null){s=u;continue}}for(;s!==null;){var f=s.next;if(f!==null){s=f;break}s=s.parent}}},mn=function(t){for(var r=0;r<t.length;r+=1)ms(t[r],a(this,rt),a(this,Qe))},Es=function(){var f,E,v;for(const m of et){var t=m.id<this.id,r=[];for(const[h,[b,p]]of this.current){if(m.current.has(h)){var n=m.current.get(h)[0];if(t&&b!==n)m.current.set(h,[b,p]);else continue}r.push(h)}var s=[...m.current.keys()].filter(h=>!this.current.has(h));if(s.length===0)t&&m.discard();else if(r.length>0){m.activate();var o=new Set,i=new Map;for(var c of r)gs(c,s,o,i);i=new Map;var l=[...m.current.keys()].filter(h=>this.current.has(h)?this.current.get(h)[0]!==h:!0);for(const h of a(this,wr))(h.f&(ve|ee|dn))===0&&Rn(h,l,i)&&((h.f&(jr|Ke))!==0?(k(h,Q),m.schedule(h)):a(m,rt).add(h));if(a(m,ne).length>0){m.apply();for(var u of a(m,ne))F(f=m,Y,pn).call(f,u,[],[]);O(m,ne,[])}m.deactivate()}}for(const m of et)a(m,bt).has(this)&&(a(m,bt).delete(this),a(m,bt).size===0&&!F(E=m,Y,kr).call(E)&&(m.activate(),F(v=m,Y,Yr).call(v)))};let qt=Wr;function Go(e){var t=pr;pr=!0;try{for(var r;;){if(xo(),T===null)return r;T.flush()}}finally{pr=t}}function Po(){try{To()}catch(e){st(e,hn)}}let Se=null;function Wn(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(ve|ee))===0&&Cr(n)&&(Se=new Set,Zt(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Fs(n),(Se==null?void 0:Se.size)>0)){at.clear();for(const s of Se){if((s.f&(ve|ee))!==0)continue;const o=[s];let i=s.parent;for(;i!==null;)Se.has(i)&&(Se.delete(i),o.push(i)),i=i.parent;for(let c=o.length-1;c>=0;c--){const l=o[c];(l.f&(ve|ee))===0&&Zt(l)}}Se.clear()}}Se=null}}function gs(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const s of e.reactions){const o=s.f;(o&W)!==0?gs(s,t,r,n):(o&(jr|Ke))!==0&&(o&Q)===0&&Rn(s,t,n)&&(k(s,Q),Sn(s))}}function Rn(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const s of e.deps){if(jt.call(t,s))return!0;if((s.f&W)!==0&&Rn(s,t,r))return r.set(s,!0),!0}return r.set(e,!1),!1}function Sn(e){T.schedule(e)}function Ts(e,t){if(!((e.f&Le)!==0&&(e.f&B)!==0)){(e.f&Q)!==0?t.d.push(e):(e.f&Ye)!==0&&t.m.push(e),k(e,B);for(var r=e.first;r!==null;)Ts(r,t),r=r.next}}function ws(e){k(e,B);for(var t=e.first;t!==null;)ws(t),t=t.next}function Bo(e){let t=0,r=It(0),n;return()=>{Ln()&&(d(r),Is(()=>(t===0&&(n=Un(()=>e(()=>mr(r)))),t+=1,()=>{Ct(()=>{t-=1,t===0&&(n==null||n(),n=void 0,mr(r))})})))}}var Ho=Kt|er;function Wo(e,t,r,n){new Vo(e,t,r,n)}var ce,yn,De,Rt,X,Fe,se,Oe,ze,St,nt,zt,yr,br,je,Vr,H,Jo,Qo,zo,_n,Gr,Pr,En;class Vo{constructor(t,r,n,s){R(this,H);ye(this,"parent");ye(this,"is_pending",!1);ye(this,"transform_error");R(this,ce);R(this,yn,null);R(this,De);R(this,Rt);R(this,X);R(this,Fe,null);R(this,se,null);R(this,Oe,null);R(this,ze,null);R(this,St,0);R(this,nt,0);R(this,zt,!1);R(this,yr,new Set);R(this,br,new Set);R(this,je,null);R(this,Vr,Bo(()=>(O(this,je,It(a(this,St))),()=>{O(this,je,null)})));var o;O(this,ce,t),O(this,De,r),O(this,Rt,i=>{var c=C;c.b=this,c.f|=fn,n(i)}),this.parent=C.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(i=>i),O(this,X,Mn(()=>{F(this,H,_n).call(this)},Ho))}defer_effect(t){ms(t,a(this,yr),a(this,br))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!a(this,De).pending}update_pending_count(t,r){F(this,H,En).call(this,t,r),O(this,St,a(this,St)+t),!(!a(this,je)||a(this,zt))&&(O(this,zt,!0),Ct(()=>{O(this,zt,!1),a(this,je)&&Xt(a(this,je),a(this,St))}))}get_effect_pending(){return a(this,Vr).call(this),d(a(this,je))}error(t){var r=a(this,De).onerror;let n=a(this,De).failed;if(!r&&!n)throw t;a(this,Fe)&&(te(a(this,Fe)),O(this,Fe,null)),a(this,se)&&(te(a(this,se)),O(this,se,null)),a(this,Oe)&&(te(a(this,Oe)),O(this,Oe,null));var s=!1,o=!1;const i=()=>{if(s){Uo();return}s=!0,o&&Ro(),a(this,Oe)!==null&&Nt(a(this,Oe),()=>{O(this,Oe,null)}),F(this,H,Pr).call(this,()=>{F(this,H,_n).call(this)})},c=l=>{try{o=!0,r==null||r(l,i),o=!1}catch(u){st(u,a(this,X)&&a(this,X).parent)}n&&O(this,Oe,F(this,H,Pr).call(this,()=>{try{return fe(()=>{var u=C;u.b=this,u.f|=fn,n(a(this,ce),()=>l,()=>i)})}catch(u){return st(u,a(this,X).parent),null}}))};Ct(()=>{var l;try{l=this.transform_error(t)}catch(u){st(u,a(this,X)&&a(this,X).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(c,u=>st(u,a(this,X)&&a(this,X).parent)):c(l)})}}ce=new WeakMap,yn=new WeakMap,De=new WeakMap,Rt=new WeakMap,X=new WeakMap,Fe=new WeakMap,se=new WeakMap,Oe=new WeakMap,ze=new WeakMap,St=new WeakMap,nt=new WeakMap,zt=new WeakMap,yr=new WeakMap,br=new WeakMap,je=new WeakMap,Vr=new WeakMap,H=new WeakSet,Jo=function(){try{O(this,Fe,fe(()=>a(this,Rt).call(this,a(this,ce))))}catch(t){this.error(t)}},Qo=function(t){const r=a(this,De).failed;r&&O(this,Oe,fe(()=>{r(a(this,ce),()=>t,()=>()=>{})}))},zo=function(){const t=a(this,De).pending;t&&(this.is_pending=!0,O(this,se,fe(()=>t(a(this,ce)))),Ct(()=>{var r=O(this,ze,document.createDocumentFragment()),n=lt();r.append(n),O(this,Fe,F(this,H,Pr).call(this,()=>fe(()=>a(this,Rt).call(this,n)))),a(this,nt)===0&&(a(this,ce).before(r),O(this,ze,null),Nt(a(this,se),()=>{O(this,se,null)}),F(this,H,Gr).call(this,T))}))},_n=function(){try{if(this.is_pending=this.has_pending_snippet(),O(this,nt,0),O(this,St,0),O(this,Fe,fe(()=>{a(this,Rt).call(this,a(this,ce))})),a(this,nt)>0){var t=O(this,ze,document.createDocumentFragment());In(a(this,Fe),t);const r=a(this,De).pending;O(this,se,fe(()=>r(a(this,ce))))}else F(this,H,Gr).call(this,T)}catch(r){this.error(r)}},Gr=function(t){this.is_pending=!1,t.transfer_effects(a(this,yr),a(this,br))},Pr=function(t){var r=C,n=S,s=ie;Ge(a(this,X)),pe(a(this,X)),$t(a(this,X).ctx);try{return qt.ensure(),t()}catch(o){return hs(o),null}finally{Ge(r),pe(n),$t(s)}},En=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&F(n=this.parent,H,En).call(n,t,r);return}O(this,nt,a(this,nt)+t),a(this,nt)===0&&(F(this,H,Gr).call(this,r),a(this,se)&&Nt(a(this,se),()=>{O(this,se,null)}),a(this,ze)&&(a(this,ce).before(a(this,ze)),O(this,ze,null)))};function jo(e,t,r,n){const s=On;var o=e.filter(v=>!v.settled);if(r.length===0&&o.length===0){n(t.map(s));return}var i=C,c=Ko(),l=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(v=>v.promise)):null;function u(v){c();try{n(v)}catch(m){(i.f&ve)===0&&st(m,i)}Hr()}if(r.length===0){l.then(()=>u(t.map(s)));return}var f=ys();function E(){Promise.all(r.map(v=>$o(v))).then(v=>u([...t.map(s),...v])).catch(v=>st(v,i)).finally(()=>f())}l?l.then(()=>{c(),E(),Hr()}):E()}function Ko(){var e=C,t=S,r=ie,n=T;return function(o=!0){Ge(e),pe(t),$t(r),o&&(e.f&ve)===0&&(n==null||n.activate(),n==null||n.apply())}}function Hr(e=!0){Ge(null),pe(null),$t(null),e&&(T==null||T.deactivate())}function ys(){var e=C,t=e.b,r=T,n=t.is_rendered();return t.update_pending_count(1,r),r.increment(n,e),(s=!1)=>{t.update_pending_count(-1,r),r.decrement(n,e,s)}}function On(e){var t=W|Q,r=S!==null&&(S.f&W)!==0?S:null;return C!==null&&(C.f|=er),{ctx:ie,deps:null,effects:null,equals:ls,f:t,fn:e,reactions:null,rv:0,v:V,wv:0,parent:r??C,ac:null}}function $o(e,t,r){let n=C;n===null&&po();var s=void 0,o=It(V),i=!S,c=new Map;return hi(()=>{var m;var l=C,u=os();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).finally(Hr)}catch(h){u.reject(h),Hr()}var f=T;if(i){if((l.f&Dt)!==0)var E=ys();if(n.b.is_rendered())(m=c.get(f))==null||m.reject(Ve),c.delete(f);else{for(const h of c.values())h.reject(Ve);c.clear()}c.set(f,u)}const v=(h,b=void 0)=>{if(E){var p=b===Ve;E(p)}if(!(b===Ve||(l.f&ve)!==0)){if(f.activate(),b)o.f|=it,Xt(o,b);else{(o.f&it)!==0&&(o.f^=it),Xt(o,h);for(const[w,U]of c){if(c.delete(w),w===f)break;U.reject(Ve)}}f.deactivate()}};u.promise.then(v,h=>v(null,h||"unknown"))}),fi(()=>{for(const l of c.values())l.reject(Ve)}),new Promise(l=>{function u(f){function E(){f===s?l(o):u(s)}f.then(E,E)}u(s)})}function Xo(e){const t=On(e);return Ys(t),t}function Zo(e){const t=On(e);return t.equals=us,t}function ei(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)te(t[r])}}function ti(e){for(var t=e.parent;t!==null;){if((t.f&W)===0)return(t.f&ve)===0?t:null;t=t.parent}return null}function Cn(e){var t,r=C;Ge(ti(e));try{e.f&=~At,ei(e),t=Hs(e)}finally{Ge(r)}return t}function bs(e){var t=e.v,r=Cn(e);if(!e.equals(r)&&(e.wv=Ps(),(!(T!=null&&T.is_fork)||e.deps===null)&&(e.v=r,T==null||T.capture(e,t,!0),e.deps===null))){k(e,B);return}Ut||(J!==null?(Ln()||T!=null&&T.is_fork)&&J.set(e,r):bn(e))}function ri(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(Ve),n.teardown=uo,n.ac=null,Er(n,0),An(n))}function Rs(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&Zt(t)}let gn=new Set;const at=new Map;let Ss=!1;function It(e,t){var r={f:0,v:e,reactions:null,equals:ls,rv:0,wv:0};return r}function P(e,t){const r=It(e);return Ys(r),r}function ni(e,t=!1,r=!0){const n=It(e);return t||(n.equals=us),n}function N(e,t,r=!1){S!==null&&(!Ne||(S.f&dn)!==0)&&ds()&&(S.f&(W|Ke|jr|dn))!==0&&(he===null||!jt.call(he,e))&&bo();let n=r?Ht(t):t;return Xt(e,n,xr)}function Xt(e,t,r=null){if(!e.equals(t)){var n=e.v;Ut?at.set(e,t):at.set(e,n),e.v=t;var s=qt.ensure();if(s.capture(e,n),(e.f&W)!==0){const o=e;(e.f&Q)!==0&&Cn(o),J===null&&bn(o)}e.wv=Ps(),Os(e,Q,r),C!==null&&(C.f&B)!==0&&(C.f&(Le|Mt))===0&&(ue===null?mi([e]):ue.push(e)),!s.is_fork&&gn.size>0&&!Ss&&si()}return t}function si(){Ss=!1;for(const e of gn)(e.f&B)!==0&&k(e,Ye),Cr(e)&&Zt(e);gn.clear()}function mr(e){N(e,e.v+1)}function Os(e,t,r){var n=e.reactions;if(n!==null)for(var s=n.length,o=0;o<s;o++){var i=n[o],c=i.f,l=(c&Q)===0;if(l&&k(i,t),(c&W)!==0){var u=i;J==null||J.delete(u),(c&At)===0&&(c&de&&(i.f|=At),Os(u,Ye,r))}else if(l){var f=i;(c&Ke)!==0&&Se!==null&&Se.add(f),r!==null?r.push(f):Sn(f)}}}function Ht(e){if(typeof e!="object"||e===null||nn in e)return e;const t=lo(e);if(t!==io&&t!==ao)return e;var r=new Map,n=ss(e),s=P(0),o=Lt,i=c=>{if(Lt===o)return c();var l=S,u=Lt;pe(null),zn(o);var f=c();return pe(l),zn(u),f};return n&&r.set("length",P(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&wo();var f=r.get(l);return f===void 0?i(()=>{var E=P(u.value);return r.set(l,E),E}):N(f,u.value,!0),!0},deleteProperty(c,l){var u=r.get(l);if(u===void 0){if(l in c){const f=i(()=>P(V));r.set(l,f),mr(s)}}else N(u,V),mr(s);return!0},get(c,l,u){var m;if(l===nn)return e;var f=r.get(l),E=l in c;if(f===void 0&&(!E||(m=hr(c,l))!=null&&m.writable)&&(f=i(()=>{var h=Ht(E?c[l]:V),b=P(h);return b}),r.set(l,f)),f!==void 0){var v=d(f);return v===V?void 0:v}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var f=r.get(l);f&&(u.value=d(f))}else if(u===void 0){var E=r.get(l),v=E==null?void 0:E.v;if(E!==void 0&&v!==V)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return u},has(c,l){var v;if(l===nn)return!0;var u=r.get(l),f=u!==void 0&&u.v!==V||Reflect.has(c,l);if(u!==void 0||C!==null&&(!f||(v=hr(c,l))!=null&&v.writable)){u===void 0&&(u=i(()=>{var m=f?Ht(c[l]):V,h=P(m);return h}),r.set(l,u));var E=d(u);if(E===V)return!1}return f},set(c,l,u,f){var q;var E=r.get(l),v=l in c;if(n&&l==="length")for(var m=u;m<E.v;m+=1){var h=r.get(m+"");h!==void 0?N(h,V):m in c&&(h=i(()=>P(V)),r.set(m+"",h))}if(E===void 0)(!v||(q=hr(c,l))!=null&&q.writable)&&(E=i(()=>P(void 0)),N(E,Ht(u)),r.set(l,E));else{v=E.v!==V;var b=i(()=>Ht(u));N(E,b)}var p=Reflect.getOwnPropertyDescriptor(c,l);if(p!=null&&p.set&&p.set.call(f,u),!v){if(n&&typeof l=="string"){var w=r.get("length"),U=Number(l);Number.isInteger(U)&&U>=w.v&&N(w,U+1)}mr(s)}return!0},ownKeys(c){d(s);var l=Reflect.ownKeys(c).filter(E=>{var v=r.get(E);return v===void 0||v.v!==V});for(var[u,f]of r)f.v!==V&&!(u in c)&&l.push(u);return l},setPrototypeOf(){yo()}})}var Vn,Cs,Ns,Ls;function oi(){if(Vn===void 0){Vn=window,Cs=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ns=hr(t,"firstChild").get,Ls=hr(t,"nextSibling").get,Pn(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Pn(r)&&(r.__t=void 0)}}function lt(e=""){return document.createTextNode(e)}function ot(e){return Ns.call(e)}function Or(e){return Ls.call(e)}function _(e,t){return ot(e)}function on(e,t=!1){{var r=ot(e);return r instanceof Comment&&r.data===""?Or(r):r}}function g(e,t=1,r=!1){let n=e;for(;t--;)n=Or(n);return n}function ii(e){e.textContent=""}function Ms(){return!1}function As(e,t,r){return document.createElementNS(t??Ao,e,void 0)}let Jn=!1;function ai(){Jn||(Jn=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Nn(e){var t=S,r=C;pe(null),Ge(null);try{return e()}finally{pe(t),Ge(r)}}function li(e,t,r,n=r){e.addEventListener(t,()=>Nn(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),ai()}function ui(e){C===null&&(S===null&&go(),Eo()),Ut&&_o()}function ci(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ut(e,t){var r=C;r!==null&&(r.f&ee)!==0&&(e|=ee);var n={ctx:ie,deps:null,nodes:null,f:e|Q|de,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};T==null||T.register_created_effect(n);var s=n;if((e&_r)!==0)Bt!==null?Bt.push(n):qt.ensure().schedule(n);else if(t!==null){try{Zt(n)}catch(i){throw te(n),i}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&er)===0&&(s=s.first,(e&Ke)!==0&&(e&Kt)!==0&&s!==null&&(s.f|=Kt))}if(s!==null&&(s.parent=r,r!==null&&ci(s,r),S!==null&&(S.f&W)!==0&&(e&Mt)===0)){var o=S;(o.effects??(o.effects=[])).push(s)}return n}function Ln(){return S!==null&&!Ne}function fi(e){const t=ut(zr,null);return k(t,B),t.teardown=e,t}function di(e){ui();var t=C.f,r=!S&&(t&Le)!==0&&(t&Dt)===0;if(r){var n=ie;(n.e??(n.e=[])).push(e)}else return qs(e)}function qs(e){return ut(_r|vo,e)}function vi(e){qt.ensure();const t=ut(Mt|er,e);return(r={})=>new Promise(n=>{r.outro?Nt(t,()=>{te(t),n(void 0)}):(te(t),n(void 0))})}function hi(e){return ut(jr|er,e)}function Is(e,t=0){return ut(zr|t,e)}function G(e,t=[],r=[],n=[]){jo(n,t,r,s=>{ut(zr,()=>e(...s.map(d)))})}function Mn(e,t=0){var r=ut(Ke|t,e);return r}function fe(e){return ut(Le|er,e)}function Us(e){var t=e.teardown;if(t!==null){const r=Ut,n=S;Qn(!0),pe(null);try{t.call(null)}finally{Qn(r),pe(n)}}}function An(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&Nn(()=>{s.abort(Ve)});var n=r.next;(r.f&Mt)!==0?r.parent=null:te(r,t),r=n}}function pi(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Le)===0&&te(t),t=r}}function te(e,t=!0){var r=!1;(t||(e.f&fo)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ds(e.nodes.start,e.nodes.end),r=!0),k(e,Bn),An(e,t&&!r),Er(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)o.stop();Us(e),e.f^=Bn,e.f|=ve;var s=e.parent;s!==null&&s.first!==null&&Fs(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Ds(e,t){for(;e!==null;){var r=e===t?null:Or(e);e.remove(),e=r}}function Fs(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Nt(e,t,r=!0){var n=[];xs(e,n,!0);var s=()=>{r&&te(e),t&&t()},o=n.length;if(o>0){var i=()=>--o||s();for(var c of n)c.out(i)}else s()}function xs(e,t,r){if((e.f&ee)===0){e.f^=ee;var n=e.nodes&&e.nodes.t;if(n!==null)for(const c of n)(c.is_global||r)&&t.push(c);for(var s=e.first;s!==null;){var o=s.next,i=(s.f&Kt)!==0||(s.f&Le)!==0&&(e.f&Ke)!==0;xs(s,t,i?r:!1),s=o}}}function qn(e){ks(e,!0)}function ks(e,t){if((e.f&ee)!==0){e.f^=ee,(e.f&B)===0&&(k(e,Q),qt.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&Kt)!==0||(r.f&Le)!==0;ks(r,s?t:!1),r=n}var o=e.nodes&&e.nodes.t;if(o!==null)for(const i of o)(i.is_global||t)&&i.in()}}function In(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var s=r===n?null:Or(r);t.append(r),r=s}}let Br=!1,Ut=!1;function Qn(e){Ut=e}let S=null,Ne=!1;function pe(e){S=e}let C=null;function Ge(e){C=e}let he=null;function Ys(e){S!==null&&(he===null?he=[e]:he.push(e))}let Z=null,re=0,ue=null;function mi(e){ue=e}let Gs=1,wt=0,Lt=wt;function zn(e){Lt=e}function Ps(){return++Gs}function Cr(e){var t=e.f;if((t&Q)!==0)return!0;if(t&W&&(e.f&=~At),(t&Ye)!==0){for(var r=e.deps,n=r.length,s=0;s<n;s++){var o=r[s];if(Cr(o)&&bs(o),o.wv>e.wv)return!0}(t&de)!==0&&J===null&&k(e,B)}return!1}function Bs(e,t,r=!0){var n=e.reactions;if(n!==null&&!(he!==null&&jt.call(he,e)))for(var s=0;s<n.length;s++){var o=n[s];(o.f&W)!==0?Bs(o,t,!1):t===o&&(r?k(o,Q):(o.f&B)!==0&&k(o,Ye),Sn(o))}}function Hs(e){var b;var t=Z,r=re,n=ue,s=S,o=he,i=ie,c=Ne,l=Lt,u=e.f;Z=null,re=0,ue=null,S=(u&(Le|Mt))===0?e:null,he=null,$t(e.ctx),Ne=!1,Lt=++wt,e.ac!==null&&(Nn(()=>{e.ac.abort(Ve)}),e.ac=null);try{e.f|=vn;var f=e.fn,E=f();e.f|=Dt;var v=e.deps,m=T==null?void 0:T.is_fork;if(Z!==null){var h;if(m||Er(e,re),v!==null&&re>0)for(v.length=re+Z.length,h=0;h<Z.length;h++)v[re+h]=Z[h];else e.deps=v=Z;if(Ln()&&(e.f&de)!==0)for(h=re;h<v.length;h++)((b=v[h]).reactions??(b.reactions=[])).push(e)}else!m&&v!==null&&re<v.length&&(Er(e,re),v.length=re);if(ds()&&ue!==null&&!Ne&&v!==null&&(e.f&(W|Ye|Q))===0)for(h=0;h<ue.length;h++)Bs(ue[h],e);if(s!==null&&s!==e){if(wt++,s.deps!==null)for(let p=0;p<r;p+=1)s.deps[p].rv=wt;if(t!==null)for(const p of t)p.rv=wt;ue!==null&&(n===null?n=ue:n.push(...ue))}return(e.f&it)!==0&&(e.f^=it),E}catch(p){return hs(p)}finally{e.f^=vn,Z=t,re=r,ue=n,S=s,he=o,$t(i),Ne=c,Lt=l}}function _i(e,t){let r=t.reactions;if(r!==null){var n=so.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}if(r===null&&(t.f&W)!==0&&(Z===null||!jt.call(Z,t))){var o=t;(o.f&de)!==0&&(o.f^=de,o.f&=~At),bn(o),ri(o),Er(o,0)}}function Er(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)_i(e,r[n])}function Zt(e){var t=e.f;if((t&ve)===0){k(e,B);var r=C,n=Br;C=e,Br=!0;try{(t&(Ke|is))!==0?pi(e):An(e),Us(e);var s=Hs(e);e.teardown=typeof s=="function"?s:null,e.wv=Gs;var o;no&&Fo&&(e.f&Q)!==0&&e.deps}finally{Br=n,C=r}}}async function Ei(){await Promise.resolve(),Go()}function d(e){var t=e.f,r=(t&W)!==0;if(S!==null&&!Ne){var n=C!==null&&(C.f&ve)!==0;if(!n&&(he===null||!jt.call(he,e))){var s=S.deps;if((S.f&vn)!==0)e.rv<wt&&(e.rv=wt,Z===null&&s!==null&&s[re]===e?re++:Z===null?Z=[e]:Z.push(e));else{(S.deps??(S.deps=[])).push(e);var o=e.reactions;o===null?e.reactions=[S]:jt.call(o,S)||o.push(S)}}}if(Ut&&at.has(e))return at.get(e);if(r){var i=e;if(Ut){var c=i.v;return((i.f&B)===0&&i.reactions!==null||Vs(i))&&(c=Cn(i)),at.set(i,c),c}var l=(i.f&de)===0&&!Ne&&S!==null&&(Br||(S.f&de)!==0),u=(i.f&Dt)===0;Cr(i)&&(l&&(i.f|=de),bs(i)),l&&!u&&(Rs(i),Ws(i))}if(J!=null&&J.has(e))return J.get(e);if((e.f&it)!==0)throw e.v;return e.v}function Ws(e){if(e.f|=de,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&W)!==0&&(t.f&de)===0&&(Rs(t),Ws(t))}function Vs(e){if(e.v===V)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(at.has(t)||(t.f&W)!==0&&Vs(t))return!0;return!1}function Un(e){var t=Ne;try{return Ne=!0,e()}finally{Ne=t}}const gi=["touchstart","touchmove"];function Ti(e){return gi.includes(e)}const yt=Symbol("events"),Js=new Set,Tn=new Set;function be(e,t,r){(t[yt]??(t[yt]={}))[e]=r}function wi(e){for(var t=0;t<e.length;t++)Js.add(e[t]);for(var r of Tn)r(e)}let jn=null;function Kn(e){var p,w;var t=this,r=t.ownerDocument,n=e.type,s=((p=e.composedPath)==null?void 0:p.call(e))||[],o=s[0]||e.target;jn=e;var i=0,c=jn===e&&e[yt];if(c){var l=s.indexOf(c);if(l!==-1&&(t===document||t===window)){e[yt]=t;return}var u=s.indexOf(t);if(u===-1)return;l<=u&&(i=l)}if(o=s[i]||e.target,o!==t){oo(e,"currentTarget",{configurable:!0,get(){return o||r}});var f=S,E=C;pe(null),Ge(null);try{for(var v,m=[];o!==null;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var b=(w=o[yt])==null?void 0:w[n];b!=null&&(!o.disabled||e.target===o)&&b.call(o,e)}catch(U){v?m.push(U):v=U}if(e.cancelBubble||h===t||h===null)break;o=h}if(v){for(let U of m)queueMicrotask(()=>{throw U});throw v}}finally{e[yt]=t,delete e.currentTarget,pe(f),Ge(E)}}}var rs;const an=((rs=globalThis==null?void 0:globalThis.window)==null?void 0:rs.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function yi(e){return(an==null?void 0:an.createHTML(e))??e}function bi(e){var t=As("template");return t.innerHTML=yi(e.replaceAll("<!>","<!---->")),t.content}function gr(e,t){var r=C;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function x(e,t){var r=(t&Lo)!==0,n=(t&Mo)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=bi(o?e:"<!>"+e),r||(s=ot(s)));var i=n||Cs?document.importNode(s,!0):s.cloneNode(!0);if(r){var c=ot(i),l=i.lastChild;gr(c,l)}else gr(i,i);return i}}function $n(){var e=document.createDocumentFragment(),t=document.createComment(""),r=lt();return e.append(t,r),gr(t,r),e}function I(e,t){e!==null&&e.before(t)}function M(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function Ri(e,t){return Si(e,t)}const Fr=new Map;function Si(e,{target:t,anchor:r,props:n={},events:s,context:o,intro:i=!0,transformError:c}){oi();var l=void 0,u=vi(()=>{var f=r??t.appendChild(lt());Wo(f,{pending:()=>{}},m=>{cs({});var h=ie;o&&(h.c=o),s&&(n.$$events=s),l=e(m,n)||{},fs()},c);var E=new Set,v=m=>{for(var h=0;h<m.length;h++){var b=m[h];if(!E.has(b)){E.add(b);var p=Ti(b);for(const q of[t,document]){var w=Fr.get(q);w===void 0&&(w=new Map,Fr.set(q,w));var U=w.get(b);U===void 0?(q.addEventListener(b,Kn,{passive:p}),w.set(b,1)):w.set(b,U+1)}}}};return v(Qr(Js)),Tn.add(v),()=>{var p;for(var m of E)for(const w of[t,document]){var h=Fr.get(w),b=h.get(m);--b==0?(w.removeEventListener(m,Kn),h.delete(m),h.size===0&&Fr.delete(w)):h.set(m,b)}Tn.delete(v),f!==r&&((p=f.parentNode)==null||p.removeChild(f))}});return Oi.set(l,u),l}let Oi=new WeakMap;var Ce,xe,oe,Ot,Rr,Sr,Jr;class Ci{constructor(t,r=!0){ye(this,"anchor");R(this,Ce,new Map);R(this,xe,new Map);R(this,oe,new Map);R(this,Ot,new Set);R(this,Rr,!0);R(this,Sr,t=>{if(a(this,Ce).has(t)){var r=a(this,Ce).get(t),n=a(this,xe).get(r);if(n)qn(n),a(this,Ot).delete(r);else{var s=a(this,oe).get(r);s&&(a(this,xe).set(r,s.effect),a(this,oe).delete(r),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[o,i]of a(this,Ce)){if(a(this,Ce).delete(o),o===t)break;const c=a(this,oe).get(i);c&&(te(c.effect),a(this,oe).delete(i))}for(const[o,i]of a(this,xe)){if(o===r||a(this,Ot).has(o))continue;const c=()=>{if(Array.from(a(this,Ce).values()).includes(o)){var u=document.createDocumentFragment();In(i,u),u.append(lt()),a(this,oe).set(o,{effect:i,fragment:u})}else te(i);a(this,Ot).delete(o),a(this,xe).delete(o)};a(this,Rr)||!n?(a(this,Ot).add(o),Nt(i,c,!1)):c()}}});R(this,Jr,t=>{a(this,Ce).delete(t);const r=Array.from(a(this,Ce).values());for(const[n,s]of a(this,oe))r.includes(n)||(te(s.effect),a(this,oe).delete(n))});this.anchor=t,O(this,Rr,r)}ensure(t,r){var n=T,s=Ms();if(r&&!a(this,xe).has(t)&&!a(this,oe).has(t))if(s){var o=document.createDocumentFragment(),i=lt();o.append(i),a(this,oe).set(t,{effect:fe(()=>r(i)),fragment:o})}else a(this,xe).set(t,fe(()=>r(this.anchor)));if(a(this,Ce).set(n,t),s){for(const[c,l]of a(this,xe))c===t?n.unskip_effect(l):n.skip_effect(l);for(const[c,l]of a(this,oe))c===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(a(this,Sr)),n.ondiscard(a(this,Jr))}else a(this,Sr).call(this,n)}}Ce=new WeakMap,xe=new WeakMap,oe=new WeakMap,Ot=new WeakMap,Rr=new WeakMap,Sr=new WeakMap,Jr=new WeakMap;function Re(e,t,r=!1){var n=new Ci(e),s=r?Kt:0;function o(i,c){n.ensure(i,c)}Mn(()=>{var i=!1;t((c,l=0)=>{i=!0,o(l,c)}),i||o(-1,null)},s)}function Ae(e,t){return t}function Ni(e,t,r){for(var n=[],s=t.length,o,i=t.length,c=0;c<s;c++){let E=t[c];Nt(E,()=>{if(o){if(o.pending.delete(E),o.done.add(E),o.pending.size===0){var v=e.outrogroups;wn(e,Qr(o.done)),v.delete(o),v.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var l=n.length===0&&r!==null;if(l){var u=r,f=u.parentNode;ii(f),f.append(u),e.items.clear()}wn(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function wn(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const i of e.pending.values())for(const c of i)n.add(e.items.get(c).e)}for(var s=0;s<t.length;s++){var o=t[s];if(n!=null&&n.has(o)){o.f|=ke;const i=document.createDocumentFragment();In(o,i)}else te(t[s],r)}}var Xn;function qe(e,t,r,n,s,o=null){var i=e,c=new Map,l=(t&as)!==0;if(l){var u=e;i=u.appendChild(lt())}var f=null,E=Zo(()=>{var q=r();return ss(q)?q:q==null?[]:Qr(q)}),v,m=new Map,h=!0;function b(q){(U.effect.f&ve)===0&&(U.pending.delete(q),U.fallback=f,Li(U,v,i,t,n),f!==null&&(v.length===0?(f.f&ke)===0?qn(f):(f.f^=ke,vr(f,null,i)):Nt(f,()=>{f=null})))}function p(q){U.pending.delete(q)}var w=Mn(()=>{v=d(E);for(var q=v.length,z=new Set,ae=T,Pe=Ms(),j=0;j<q;j+=1){var me=v[j],Be=n(me,j),$=h?null:c.get(Be);$?($.v&&Xt($.v,me),$.i&&Xt($.i,j),Pe&&ae.unskip_effect($.e)):($=Mi(c,h?i:Xn??(Xn=lt()),me,Be,j,s,t,r),h||($.e.f|=ke),c.set(Be,$)),z.add(Be)}if(q===0&&o&&!f&&(h?f=fe(()=>o(i)):(f=fe(()=>o(Xn??(Xn=lt()))),f.f|=ke)),q>z.size&&mo(),!h)if(m.set(ae,z),Pe){for(const[ct,Ft]of c)z.has(ct)||ae.skip_effect(Ft.e);ae.oncommit(b),ae.ondiscard(p)}else b(ae);d(E)}),U={effect:w,items:c,pending:m,outrogroups:null,fallback:f};h=!1}function dr(e){for(;e!==null&&(e.f&Le)===0;)e=e.next;return e}function Li(e,t,r,n,s){var $,ct,Ft,Nr,Lr,Mr,Ar,qr,Ir;var o=(n&Co)!==0,i=t.length,c=e.items,l=dr(e.effect.first),u,f=null,E,v=[],m=[],h,b,p,w;if(o)for(w=0;w<i;w+=1)h=t[w],b=s(h,w),p=c.get(b).e,(p.f&ke)===0&&((ct=($=p.nodes)==null?void 0:$.a)==null||ct.measure(),(E??(E=new Set)).add(p));for(w=0;w<i;w+=1){if(h=t[w],b=s(h,w),p=c.get(b).e,e.outrogroups!==null)for(const _e of e.outrogroups)_e.pending.delete(p),_e.done.delete(p);if((p.f&ee)!==0&&(qn(p),o&&((Nr=(Ft=p.nodes)==null?void 0:Ft.a)==null||Nr.unfix(),(E??(E=new Set)).delete(p))),(p.f&ke)!==0)if(p.f^=ke,p===l)vr(p,null,r);else{var U=f?f.next:l;p===e.effect.last&&(e.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),tt(e,f,p),tt(e,p,U),vr(p,U,r),f=p,v=[],m=[],l=dr(f.next);continue}if(p!==l){if(u!==void 0&&u.has(p)){if(v.length<m.length){var q=m[0],z;f=q.prev;var ae=v[0],Pe=v[v.length-1];for(z=0;z<v.length;z+=1)vr(v[z],q,r);for(z=0;z<m.length;z+=1)u.delete(m[z]);tt(e,ae.prev,Pe.next),tt(e,f,ae),tt(e,Pe,q),l=q,f=Pe,w-=1,v=[],m=[]}else u.delete(p),vr(p,l,r),tt(e,p.prev,p.next),tt(e,p,f===null?e.effect.first:f.next),tt(e,f,p),f=p;continue}for(v=[],m=[];l!==null&&l!==p;)(u??(u=new Set)).add(l),m.push(l),l=dr(l.next);if(l===null)continue}(p.f&ke)===0&&v.push(p),f=p,l=dr(p.next)}if(e.outrogroups!==null){for(const _e of e.outrogroups)_e.pending.size===0&&(wn(e,Qr(_e.done)),(Lr=e.outrogroups)==null||Lr.delete(_e));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var j=[];if(u!==void 0)for(p of u)(p.f&ee)===0&&j.push(p);for(;l!==null;)(l.f&ee)===0&&l!==e.fallback&&j.push(l),l=dr(l.next);var me=j.length;if(me>0){var Be=(n&as)!==0&&i===0?r:null;if(o){for(w=0;w<me;w+=1)(Ar=(Mr=j[w].nodes)==null?void 0:Mr.a)==null||Ar.measure();for(w=0;w<me;w+=1)(Ir=(qr=j[w].nodes)==null?void 0:qr.a)==null||Ir.fix()}Ni(e,j,Be)}}o&&Ct(()=>{var _e,y;if(E!==void 0)for(p of E)(y=(_e=p.nodes)==null?void 0:_e.a)==null||y.apply()})}function Mi(e,t,r,n,s,o,i,c){var l=(i&So)!==0?(i&No)===0?ni(r,!1,!1):It(r):null,u=(i&Oo)!==0?It(s):null;return{v:l,i:u,e:fe(()=>(o(t,l??r,u??s,c),()=>{e.delete(n)}))}}function vr(e,t,r){if(e.nodes)for(var n=e.nodes.start,s=e.nodes.end,o=t&&(t.f&ke)===0?t.nodes.start:r;n!==null;){var i=Or(n);if(o.before(n),n===s)return;n=i}}function tt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Ai(e,t,r=!1,n=!1,s=!1,o=!1){var i=e,c="";if(r)var l=e;G(()=>{var u=C;if(c!==(c=t()??"")){if(r){u.nodes=null,l.innerHTML=c,c!==""&&gr(ot(l),l.lastChild);return}if(u.nodes!==null&&(Ds(u.nodes.start,u.nodes.end),u.nodes=null),c!==""){var f=n?qo:s?Io:void 0,E=As(n?"svg":s?"math":"template",f);E.innerHTML=c;var v=n||s?E:E.content;if(gr(ot(v),v.lastChild),n||s)for(;ot(v);)i.before(ot(v));else i.before(v)}}})}const Zn=[...` 	
\r\f \v\uFEFF`];function qi(e,t,r){var n=e==null?"":""+e;if(r){for(var s of Object.keys(r))if(r[s])n=n?n+" "+s:s;else if(n.length)for(var o=s.length,i=0;(i=n.indexOf(s,i))>=0;){var c=i+o;(i===0||Zn.includes(n[i-1]))&&(c===n.length||Zn.includes(n[c]))?n=(i===0?"":n.substring(0,i))+n.substring(c+1):i=c}}return n===""?null:n}function ln(e,t,r,n,s,o){var i=e.__className;if(i!==r||i===void 0){var c=qi(r,n,o);c==null?e.removeAttribute("class"):e.className=c,e.__className=r}else if(o&&s!==o)for(var l in o){var u=!!o[l];(s==null||u!==!!s[l])&&e.classList.toggle(l,u)}return o}function Ii(e,t,r=t){var n=new WeakSet;li(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=un(e)?cn(o):o,r(o),T!==null&&n.add(T),await Ei(),o!==(o=t())){var i=e.selectionStart,c=e.selectionEnd,l=e.value.length;if(e.value=o??"",c!==null){var u=e.value.length;i===c&&c===l&&u>l?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=i,e.selectionEnd=Math.min(c,u))}}}),Un(t)==null&&e.value&&(r(un(e)?cn(e.value):e.value),T!==null&&n.add(T)),Is(()=>{var s=t();if(e===document.activeElement){var o=T;if(n.has(o))return}un(e)&&s===cn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function un(e){var t=e.type;return t==="number"||t==="range"}function cn(e){return e===""?null:+e}function Ui(e){ie===null&&ho(),di(()=>{const t=Un(e);if(typeof t=="function")return t})}const Di="5";var ns;typeof window<"u"&&((ns=window.__svelte??(window.__svelte={})).v??(ns.v=new Set)).add(Di);const Pt=[{id:"m1-l1",module:1,moduleTitle:"Getting Data Out",lesson:1,title:"What's In This Database?",subtitle:"Before you query, you need to know what exists",scenario:`It's your first day. Someone hands you a database connection and says "pull the customer list."

But you've never seen this database before. You don't know what tables exist or what columns they have.

First rule of SQL: **explore before you query**.`,concept:`# Discovering Your Database

Every database has a schema - a map of what's inside. You need to find it.

**In SQLite (what we're using), try this:**

\`\`\`sql
SELECT name FROM sqlite_master WHERE type='table';
\`\`\`

This shows all table names. You'll see: customers, products, orders, order_items, events

**To see columns in a table:**

\`\`\`sql
PRAGMA table_info(customers);
\`\`\`

This reveals: id, name, email, country, city, total_spent, created_at

**In other databases:**
- PostgreSQL: \`SELECT * FROM information_schema.columns WHERE table_name = 'customers';\`
- MySQL: \`DESCRIBE customers;\`
- SQL Server: \`sp_help customers;\`

The syntax varies, but the goal is the same: know your data before you query it.`,exercise:`Explore the database. Run a query to list all table names.

Hint: Use sqlite_master with type='table'`,hint:"SELECT name FROM sqlite_master WHERE type='table';",solution:"SELECT name FROM sqlite_master WHERE type='table';",validation:{mustContain:["SELECT","sqlite_master","table"],minRows:1},proTip:"Most SQL tools have a schema browser in the UI. But knowing the query lets you script it - useful for documentation or audits.",commonErrors:[{error:"Forgot the WHERE clause",fix:"Without WHERE type='table', you'll get indexes and triggers too"},{error:"Wrong column name",fix:"sqlite_master has: name, type, tbl_name, sql - use name for table names"}]},{id:"m1-l2",module:1,moduleTitle:"Getting Data Out",lesson:2,title:"Your First Data Pull",subtitle:"When your boss needs a list, fast",scenario:`Your manager just Slacked you: "Can you pull a list of all our customers? Marketing needs it by EOD."

Now that you know the database has a \`customers\` table with columns: id, name, email, country, city, total_spent, created_at

You're ready to get data.`,concept:'# The SELECT Statement\n\nSQL is how you ask a database for information. The basic pattern is:\n\n```sql\nSELECT column_name FROM table_name;\n```\n\nThink of it like Excel:\n- **Table** = a sheet (like "Customers")\n- **Column** = a column (like "email", "name")\n- **Row** = one record (one customer)\n\nTo get all columns, use `*`:\n```sql\nSELECT * FROM customers;\n```\n\n**Pro tip:** Avoid `SELECT *` in production queries. It\'s slow on large tables. Specify the columns you need:\n```sql\nSELECT name, email FROM customers;\n```',exercise:"The marketing team needs customer names and emails for a campaign.\n\nWrite a query to get the `name` and `email` columns from the `customers` table.",hint:"Start with SELECT, then the column names separated by commas, then FROM, then the table name.",solution:"SELECT name, email FROM customers;",validation:{mustContain:["SELECT","name","email","FROM","customers"],minRows:1},proTip:"When sharing query results, export as CSV (most SQL tools have this). Non-technical colleagues can open it in Excel.",commonErrors:[{error:"Missing comma between columns",fix:"SELECT name email FROM customers → SELECT name, email FROM customers"},{error:"Wrong table name",fix:"Check spelling - table names are case-sensitive in some databases"}]},{id:"m1-l3",module:1,moduleTitle:"Getting Data Out",lesson:3,title:"Finding Specific Records",subtitle:"When you need one customer, not all of them",scenario:`Support needs all orders for a specific customer.

You don't want to scroll through all orders. You need to filter.`,concept:`# The WHERE Clause

To filter results, add WHERE:

\`\`\`sql
SELECT * FROM orders
WHERE customer_id = 1;
\`\`\`

**How to think about it:**
- \`SELECT *\` = "show me everything"
- \`FROM orders\` = "from the orders table"
- \`WHERE\` = "but only if..."
- \`customer_id = 1\` = "the customer_id matches this value"

**Text vs Numbers:**
- Text needs quotes: \`status = 'shipped'\`
- Numbers don't: \`order_id = 1234\`

**Multiple conditions:**
\`\`\`sql
SELECT * FROM orders
WHERE status = 'pending'
AND total > 100;
\`\`\``,exercise:"Find all orders where the status is 'shipped' and the total is greater than 50.",hint:"Use WHERE with two conditions connected by AND. Remember: text needs quotes, numbers don't.",solution:"SELECT * FROM orders WHERE status = 'shipped' AND total > 50;",validation:{mustContain:["SELECT","FROM","orders","WHERE","status","shipped","AND","total",">","50"],minRows:1},proTip:"When filtering by text, use LIKE for partial matches: WHERE email LIKE '%@gmail.com' finds all Gmail users.",commonErrors:[{error:"Forgot quotes around text",fix:"WHERE status = shipped → WHERE status = 'shipped'"},{error:"Used = instead of >",fix:"WHERE total = 100 finds exactly 100, WHERE total > 100 finds greater than"}]},{id:"m1-l4",module:1,moduleTitle:"Getting Data Out",lesson:4,title:"Sorting and Limiting",subtitle:"Finding the biggest spenders",scenario:`Marketing wants to send a special offer to your top 10 customers by total spend.

You need to sort by revenue and show only the top results.`,concept:`# ORDER BY and LIMIT

Sort results with ORDER BY:
\`\`\`sql
SELECT * FROM customers
ORDER BY total_spent DESC;
\`\`\`

- \`ASC\` = ascending (1, 2, 3... or A, B, C...)
- \`DESC\` = descending (highest first)

Limit results with LIMIT:
\`\`\`sql
SELECT * FROM customers
ORDER BY total_spent DESC
LIMIT 10;
\`\`\`

**Combine them:**
1. First sort (ORDER BY)
2. Then take top N (LIMIT)

**Pro tip:** You can sort by multiple columns:
\`\`\`sql
SELECT * FROM orders
ORDER BY status ASC, order_date DESC;
\`\`\`
This sorts by status first, then by date within each status.`,exercise:"Get the top 5 orders by total amount, showing the id, customer_id, and total columns.",hint:"ORDER BY the total column in DESC order, then LIMIT to 5 results.",solution:"SELECT id, customer_id, total FROM orders ORDER BY total DESC LIMIT 5;",validation:{mustContain:["SELECT","FROM","orders","ORDER BY","DESC","LIMIT","5"],minRows:1,maxRows:5},proTip:'For "most recent" records, ORDER BY order_date DESC LIMIT 10 is your friend.',commonErrors:[{error:"Forgot DESC",fix:"ORDER BY total → shows smallest first. Add DESC for largest first."},{error:"Wrong LIMIT position",fix:"LIMIT comes after ORDER BY, not before"}]},{id:"m1-l5",module:1,moduleTitle:"Getting Data Out",lesson:5,title:"Date Filtering",subtitle:"Last month's sales report",scenario:`Finance needs last month's revenue. You have an orders table with an order_date column.

Dates in SQL can be tricky. Let's make them easy.`,concept:`# Working with Dates

Date formats vary by database, but these patterns work everywhere:

\`\`\`sql
-- Orders from a specific date
SELECT * FROM orders
WHERE order_date = '2024-01-15';

-- Orders after a date
SELECT * FROM orders
WHERE order_date >= '2024-01-01';

-- Orders in a date range
SELECT * FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';
\`\`\`

**Common date functions:**

SQLite: \`date('now')\`, \`date('now', '-7 days')\`
PostgreSQL: \`CURRENT_DATE\`, \`NOW() - INTERVAL '7 days'\`
MySQL: \`CURDATE()\`, \`DATE_SUB(NOW(), INTERVAL 7 DAY)\`

**Pro tip:** Always store dates as DATE or DATETIME columns, not text. It enables proper filtering and sorting.`,exercise:"Find all orders placed in January 2024 (between '2024-01-01' and '2024-01-31').",hint:"Use BETWEEN for date ranges. Dates need quotes and use YYYY-MM-DD format.",solution:"SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';",validation:{mustContain:["SELECT","FROM","orders","order_date","BETWEEN","2024-01"],minRows:1},proTip:"The ISO format YYYY-MM-DD works in every database. Avoid MM/DD/YYYY or DD/MM/YYYY - they cause confusion.",commonErrors:[{error:"Wrong date format",fix:"Use '2024-01-15' not '01/15/2024' or '15-01-2024'"},{error:"Forgot quotes",fix:"Dates need quotes: WHERE order_date = '2024-01-15'"}]},{id:"m2-l1",module:2,moduleTitle:"Summarizing Data",lesson:1,title:"Counting and Summing",subtitle:"How many orders? How much revenue?",scenario:`Your boss asks: "How many orders did we get last month? What's the total revenue?"

You don't want to count rows manually. Let SQL do the math.`,concept:`# Aggregate Functions

SQL can summarize data with aggregate functions:

\`\`\`sql
-- Count rows
SELECT COUNT(*) FROM orders;

-- Sum values
SELECT SUM(total) FROM orders;

-- Average
SELECT AVG(total) FROM orders;

-- Min and Max
SELECT MIN(total), MAX(total) FROM orders;
\`\`\`

**Combine with filtering:**
\`\`\`sql
SELECT COUNT(*) FROM orders
WHERE status = 'shipped';
\`\`\`

This counts only shipped orders.

**Multiple aggregates at once:**
\`\`\`sql
SELECT
 COUNT(*) as total_orders,
 SUM(total) as revenue,
 AVG(total) as average_order
FROM orders;
\`\`\`

The \`as\` keyword names your results.`,exercise:"Calculate the total revenue (sum of total) and average order value from the orders table.",hint:"Use SUM(total) and AVG(total). Give them meaningful names with AS.",solution:"SELECT SUM(total) as total_revenue, AVG(total) as average_order_value FROM orders;",validation:{mustContain:["SELECT","SUM","AVG","FROM","orders"],minRows:1},proTip:"COUNT(column) counts non-null values. COUNT(*) counts all rows including nulls.",commonErrors:[{error:"Forgot FROM",fix:"SELECT COUNT(*) orders → SELECT COUNT(*) FROM orders"},{error:"Mixed aggregates wrong",fix:"SELECT COUNT(SUM(total)) → invalid. Use one aggregate at a time."}]},{id:"m2-l2",module:2,moduleTitle:"Summarizing Data",lesson:2,title:"Grouping Data",subtitle:"Revenue by country, orders by status",scenario:`Marketing wants to know: which countries are our top markets?

You need to group orders by country and sum the revenue for each.`,concept:`# GROUP BY

GROUP BY splits data into buckets and calculates aggregates for each:

\`\`\`sql
SELECT shipping_country, SUM(total) as revenue
FROM orders
GROUP BY shipping_country;
\`\`\`

This returns one row per country with its total revenue.

**How to think about it:**
1. GROUP BY creates buckets (one per country)
2. Each bucket gets aggregated (SUM, COUNT, etc.)
3. You get one result row per bucket

**Multiple groups:**
\`\`\`sql
SELECT shipping_country, status, COUNT(*) as count
FROM orders
GROUP BY shipping_country, status;
\`\`\`

This shows order counts by country AND status.`,exercise:"Show the number of orders by shipping_country. Include the country and count columns.",hint:"Use GROUP BY shipping_country with COUNT(*).",solution:"SELECT shipping_country, COUNT(*) as order_count FROM orders GROUP BY shipping_country;",validation:{mustContain:["SELECT","shipping_country","COUNT","FROM","orders","GROUP BY"],minRows:1},proTip:"Every column in SELECT must either be in GROUP BY or be an aggregate function.",commonErrors:[{error:"Selected non-grouped column",fix:"SELECT name, COUNT(*) GROUP BY status → name is not grouped"},{error:"Forgot GROUP BY",fix:"Without GROUP BY, aggregates collapse to one row"}]},{id:"m2-l3",module:2,moduleTitle:"Summarizing Data",lesson:3,title:"Filtering Groups",subtitle:"Top performing countries only",scenario:`Your report shows 50 countries, but most have tiny revenue. Boss wants to focus on markets with $500+ in sales.

You need to filter after grouping.`,concept:`# HAVING

WHERE filters rows before grouping. HAVING filters groups after grouping.

\`\`\`sql
-- Wrong: Can't use WHERE with aggregates
SELECT shipping_country, SUM(total)
FROM orders
WHERE SUM(total) > 500  -- ERROR!
GROUP BY shipping_country;

-- Right: Use HAVING for group filters
SELECT shipping_country, SUM(total) as revenue
FROM orders
GROUP BY shipping_country
HAVING SUM(total) > 500;
\`\`\`

**The order matters:**
1. FROM (get data)
2. WHERE (filter rows)
3. GROUP BY (create groups)
4. HAVING (filter groups)
5. SELECT (choose columns)
6. ORDER BY (sort results)

**Combine WHERE and HAVING:**
\`\`\`sql
SELECT shipping_country, SUM(total) as revenue
FROM orders
WHERE status = 'shipped'  -- Only shipped orders
GROUP BY shipping_country
HAVING SUM(total) > 500;  -- Countries with $500+ shipped
\`\`\``,exercise:"Show shipping countries with total revenue over 500. Include country and revenue columns.",hint:"Use GROUP BY shipping_country, then HAVING SUM(total) > 500.",solution:"SELECT shipping_country, SUM(total) as revenue FROM orders GROUP BY shipping_country HAVING SUM(total) > 500;",validation:{mustContain:["SELECT","shipping_country","SUM","GROUP BY","HAVING"],minRows:1},proTip:"HAVING is like WHERE but for grouped results. Think: HAVING filters the output of GROUP BY.",commonErrors:[{error:"Used WHERE instead of HAVING",fix:"WHERE SUM(total) > 500 → HAVING SUM(total) > 500"},{error:"Forgot GROUP BY",fix:"HAVING only works after GROUP BY"}]},{id:"m3-l1",module:3,moduleTitle:"Combining Tables",lesson:1,title:"Why Joins Matter",subtitle:"Your data lives in multiple tables",scenario:`You need a report showing order IDs with customer names.

But orders only have customer_id, not customer names. The names are in the customers table.

You need to join.`,concept:`# Understanding Joins

Real databases split data across tables:
- \`orders\` has: id, customer_id, total, status
- \`customers\` has: id, name, email

To get order details with customer names, you join:

\`\`\`sql
SELECT orders.id, customers.name, orders.total
FROM orders
JOIN customers ON orders.customer_id = customers.id;
\`\`\`

**How to read this:**
1. FROM orders (start with orders table)
2. JOIN customers (bring in customers table)
3. ON orders.customer_id = customers.id (match where they connect)
4. SELECT columns from both tables

**The connection:**
- \`orders.customer_id\` references \`customers.id\`
- This is a foreign key relationship
- JOIN finds matching rows in both tables`,exercise:"Show all orders with customer names. Include order id, customer name, and order total.",hint:"JOIN customers ON orders.customer_id = customers.id",solution:"SELECT orders.id, customers.name, orders.total FROM orders JOIN customers ON orders.customer_id = customers.id;",validation:{mustContain:["SELECT","FROM","orders","JOIN","customers","ON"],minRows:1},proTip:"Table aliases save typing: FROM orders o JOIN customers c ON o.customer_id = c.id",commonErrors:[{error:"Ambiguous column",fix:"SELECT id FROM orders JOIN customers → Which id? Use orders.id or customers.id"},{error:"Wrong join condition",fix:"ON orders.id = customers.id → Should be customer_id matches id"}]},{id:"m3-l2",module:3,moduleTitle:"Combining Tables",lesson:2,title:"Left Joins",subtitle:"Include unmatched rows",scenario:`You want a report of all customers and their order counts.

But some customers haven't ordered yet. A regular JOIN would exclude them.

You need LEFT JOIN.`,concept:`# LEFT JOIN vs JOIN

**JOIN (INNER JOIN):** Only rows that match in both tables.

\`\`\`sql
SELECT c.name, o.id
FROM customers c
JOIN orders o ON c.id = o.customer_id;
\`\`\`
Only shows customers who have placed orders.

**LEFT JOIN:** All rows from left table, matching rows from right (or NULL if no match).

\`\`\`sql
SELECT c.name, o.id as order_id
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;
\`\`\`
Shows ALL customers, with order_id NULL if they haven't ordered.

**When to use each:**
- JOIN: "Show me orders with customer info" (must have an order)
- LEFT JOIN: "Show me all customers and their orders" (include customers with zero orders)`,exercise:"List all customers and their order counts. Include customers with zero orders.",hint:"Use LEFT JOIN and COUNT. Group by customer.",solution:"SELECT c.name, COUNT(o.id) as order_count FROM customers c LEFT JOIN orders o ON c.id = o.customer_id GROUP BY c.id, c.name;",validation:{mustContain:["SELECT","FROM","customers","LEFT JOIN","orders","GROUP BY"],minRows:1},proTip:"COUNT(o.id) counts non-null values. COUNT(*) would count 1 even for customers with no orders.",commonErrors:[{error:"Used JOIN instead of LEFT JOIN",fix:"Missing customers who haven't ordered"},{error:"Wrong COUNT",fix:"COUNT(*) counts the group, use COUNT(o.id) to count actual orders"}]},{id:"m4-l1",module:4,moduleTitle:"Real-World Analytics",lesson:1,title:"Daily Active Users",subtitle:"How many users visit each day?",scenario:`Product wants to track daily active users (DAU).

The events table logs every user action with user_id and created_at.

You need to count unique users per day.`,concept:`# DISTINCT and Date Functions

**COUNT DISTINCT:** Count unique values.

\`\`\`sql
SELECT COUNT(DISTINCT user_id)
FROM events;
\`\`\`

This counts each user only once, no matter how many events they have.

**Combine with date grouping:**

\`\`\`sql
SELECT
 DATE(created_at) as date,
 COUNT(DISTINCT user_id) as unique_users
FROM events
GROUP BY DATE(created_at)
ORDER BY date;
\`\`\`

The DATE() function extracts just the date from a timestamp, grouping all events from the same day.`,exercise:"Count unique users per day from the events table. Show date and user count.",hint:"Use DATE(created_at) and COUNT(DISTINCT user_id) with GROUP BY.",solution:"SELECT DATE(created_at) as date, COUNT(DISTINCT user_id) as unique_users FROM events GROUP BY DATE(created_at) ORDER BY date;",validation:{mustContain:["SELECT","COUNT","DISTINCT","FROM","events","GROUP BY"],minRows:1},proTip:"DAU (Daily Active Users), WAU (Weekly), MAU (Monthly) are core product metrics.",commonErrors:[{error:"Forgot DISTINCT",fix:"COUNT(user_id) counts all events, not unique users"},{error:"No date grouping",fix:"GROUP BY DATE(created_at) to get daily breakdown"}]},{id:"m4-l2",module:4,moduleTitle:"Real-World Analytics",lesson:2,title:"Retention Basics",subtitle:"Do users come back?",scenario:`You launched a new feature. Are users returning?

Retention measures what percentage of users return after their first visit.`,concept:`# Calculating Retention

Retention = Users who returned / Users who started

\`\`\`sql
-- Day 1 retention: returned the next day
WITH first_day AS (
 SELECT user_id, DATE(MIN(created_at)) as first_date
 FROM events
 GROUP BY user_id
),
returned AS (
 SELECT DISTINCT user_id, DATE(created_at) as visit_date
 FROM events
)
SELECT
 f.first_date,
 COUNT(DISTINCT f.user_id) as new_users,
 COUNT(DISTINCT CASE WHEN r.visit_date = f.first_date + 1 THEN f.user_id END) as returned_next_day
FROM first_day f
LEFT JOIN returned r ON f.user_id = r.user_id
GROUP BY f.first_date;
\`\`\`

**Simpler approach for learning:**
\`\`\`sql
-- Just see if users have multiple events
SELECT user_id, COUNT(DISTINCT DATE(created_at)) as active_days
FROM events
GROUP BY user_id
HAVING COUNT(DISTINCT DATE(created_at)) > 1;
\`\`\`

This shows users who were active on multiple days.`,exercise:"Find users who were active on more than one day. Show user_id and their active day count.",hint:"Group by user_id, count distinct dates, filter with HAVING > 1.",solution:"SELECT user_id, COUNT(DISTINCT DATE(created_at)) as active_days FROM events GROUP BY user_id HAVING COUNT(DISTINCT DATE(created_at)) > 1;",validation:{mustContain:["SELECT","user_id","COUNT","DISTINCT","DATE","GROUP BY","HAVING"],minRows:1},proTip:"Retention is the #1 metric for subscription products. High retention = product-market fit.",commonErrors:[{error:"Counted events not days",fix:"COUNT(*) counts events, use COUNT(DISTINCT DATE(created_at))"},{error:"Wrong HAVING",fix:"HAVING COUNT > 1 not WHERE COUNT > 1"}]},{id:"m4-l3",module:4,moduleTitle:"Real-World Analytics",lesson:3,title:"Revenue Metrics",subtitle:"Average Order Value and more",scenario:`E-commerce teams track Average Order Value (AOV) religiously.

Higher AOV = more revenue without more customers.

Let's calculate it by country to find our best markets.`,concept:`# Business Metrics in SQL

**Average Order Value (AOV):**
\`\`\`sql
SELECT AVG(total) as aov FROM orders;
\`\`\`

**AOV by segment:**
\`\`\`sql
SELECT shipping_country, AVG(total) as aov, COUNT(*) as orders
FROM orders
GROUP BY shipping_country
ORDER BY aov DESC;
\`\`\`

**Total Customer Value (TCV) - how much each customer has spent:**
\`\`\`sql
SELECT c.name, SUM(o.total) as total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY total_spent DESC;
\`\`\`

These metrics drive business decisions.`,exercise:"Calculate AOV by shipping_country. Show country, average order value, and order count. Sort by AOV descending.",hint:"Use AVG(total), COUNT(*), GROUP BY shipping_country, ORDER BY.",solution:"SELECT shipping_country, AVG(total) as aov, COUNT(*) as orders FROM orders GROUP BY shipping_country ORDER BY aov DESC;",validation:{mustContain:["SELECT","shipping_country","AVG","COUNT","GROUP BY","ORDER BY"],minRows:1},proTip:"Combine metrics: Revenue = Users × Conversion Rate × AOV. SQL can calculate each.",commonErrors:[{error:"Used SUM instead of AVG",fix:"AVG(total) for average, SUM(total) for total"},{error:"Forgot ORDER BY",fix:"Add ORDER BY aov DESC to see highest AOV first"}]}],Fi=[{name:"List All Tables",description:"See what tables exist in the database",query:"SELECT name FROM sqlite_master WHERE type='table';"},{name:"Describe a Table",description:"See columns in a specific table",query:"PRAGMA table_info(customers);"},{name:"Count Records",description:"How many rows in a table",query:"SELECT COUNT(*) as count FROM customers;"},{name:"Top 10 by Value",description:"Get highest values from any column",query:"SELECT * FROM customers ORDER BY total_spent DESC LIMIT 10;"},{name:"Filter by Date Range",description:"Records between two dates",query:"SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';"},{name:"Group and Count",description:"Count records per category",query:"SELECT status, COUNT(*) as count FROM orders GROUP BY status;"},{name:"Join Tables",description:"Combine data from two tables",query:"SELECT c.name, o.total FROM customers c JOIN orders o ON c.id = o.customer_id;"},{name:"Find Duplicates",description:"Find records with same values",query:"SELECT email, COUNT(*) as count FROM customers GROUP BY email HAVING count > 1;"}];let Wt=null,es=null;const xi=`
 -- Customers table
 CREATE TABLE customers (
 id INTEGER PRIMARY KEY,
 name TEXT NOT NULL,
 email TEXT UNIQUE,
 country TEXT,
 city TEXT,
 total_spent REAL DEFAULT 0,
 created_at TEXT DEFAULT CURRENT_TIMESTAMP
 );

 -- Products table
 CREATE TABLE products (
 id INTEGER PRIMARY KEY,
 name TEXT NOT NULL,
 category TEXT,
 price REAL,
 stock INTEGER DEFAULT 0
 );

 -- Orders table
 CREATE TABLE orders (
 id INTEGER PRIMARY KEY,
 customer_id INTEGER,
 total REAL,
 status TEXT,
 order_date TEXT,
 shipping_country TEXT,
 FOREIGN KEY (customer_id) REFERENCES customers(id)
 );

 -- Order items table
 CREATE TABLE order_items (
 id INTEGER PRIMARY KEY,
 order_id INTEGER,
 product_id INTEGER,
 quantity INTEGER,
 price REAL,
 FOREIGN KEY (order_id) REFERENCES orders(id),
 FOREIGN KEY (product_id) REFERENCES products(id)
 );

 -- Events table (for analytics lessons)
 CREATE TABLE events (
 id INTEGER PRIMARY KEY,
 user_id INTEGER,
 event_type TEXT,
 created_at TEXT
 );
`,ki=`
 -- Sample customers
 INSERT INTO customers (name, email, country, city, total_spent) VALUES
 ('Sarah Johnson', 'sarah.johnson@email.com', 'USA', 'New York', 1250.00),
 ('Mike Chen', 'mike.chen@email.com', 'Canada', 'Toronto', 890.50),
 ('Emma Wilson', 'emma.wilson@email.com', 'UK', 'London', 2100.00),
 ('Carlos Rodriguez', 'carlos.rodriguez@email.com', 'Spain', 'Madrid', 450.00),
 ('Lisa Thompson', 'lisa.thompson@email.com', 'USA', 'Los Angeles', 3200.00),
 ('Hans Mueller', 'hans.mueller@email.com', 'Germany', 'Berlin', 780.00),
 ('Marie Dubois', 'marie.dubois@email.com', 'France', 'Paris', 1650.00),
 ('John Smith', 'john.smith@email.com', 'USA', 'Chicago', 520.00),
 ('Yuki Tanaka', 'yuki.tanaka@email.com', 'Japan', 'Tokyo', 2800.00),
 ('Anna Kowalski', 'anna.kowalski@email.com', 'Poland', 'Warsaw', 340.00);

 -- Sample products
 INSERT INTO products (name, category, price, stock) VALUES
 ('Laptop Pro', 'Electronics', 1299.99, 45),
 ('Wireless Mouse', 'Electronics', 29.99, 230),
 ('USB-C Hub', 'Electronics', 49.99, 120),
 ('Office Chair', 'Furniture', 249.99, 35),
 ('Standing Desk', 'Furniture', 599.99, 20),
 ('Monitor 27"', 'Electronics', 399.99, 55),
 ('Keyboard Mechanical', 'Electronics', 129.99, 80),
 ('Desk Lamp', 'Furniture', 39.99, 150),
 ('Webcam HD', 'Electronics', 79.99, 95),
 ('Headphones', 'Electronics', 199.99, 60);

 -- Sample orders
 INSERT INTO orders (customer_id, total, status, order_date, shipping_country) VALUES
 (1, 1329.98, 'shipped', '2024-01-15', 'USA'),
 (2, 249.99, 'delivered', '2024-01-16', 'Canada'),
 (3, 599.99, 'shipped', '2024-01-17', 'UK'),
 (1, 79.99, 'pending', '2024-01-18', 'USA'),
 (4, 1299.99, 'shipped', '2024-01-18', 'Spain'),
 (5, 449.98, 'delivered', '2024-01-19', 'USA'),
 (6, 129.99, 'pending', '2024-01-20', 'Germany'),
 (7, 199.99, 'shipped', '2024-01-20', 'France'),
 (8, 649.98, 'delivered', '2024-01-21', 'USA'),
 (9, 99.98, 'pending', '2024-01-22', 'Japan'),
 (3, 1299.99, 'shipped', '2024-01-22', 'UK'),
 (10, 39.99, 'delivered', '2024-01-22', 'Poland');

 -- Sample order_items
 INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
 (1, 1, 1, 1299.99),
 (1, 2, 1, 29.99),
 (2, 4, 1, 249.99),
 (3, 5, 1, 599.99),
 (4, 9, 1, 79.99),
 (5, 1, 1, 1299.99),
 (6, 6, 1, 399.99),
 (6, 2, 1, 29.99),
 (6, 3, 1, 49.99),
 (7, 7, 1, 129.99),
 (8, 10, 1, 199.99),
 (9, 5, 1, 599.99),
 (9, 8, 1, 39.99),
 (10, 2, 2, 29.99),
 (10, 3, 1, 49.99),
 (11, 1, 1, 1299.99),
 (12, 8, 1, 39.99);

 -- Sample events for analytics lessons
 INSERT INTO events (user_id, event_type, created_at) VALUES
 (1, 'login', '2024-01-20 08:00:00'),
 (2, 'login', '2024-01-20 09:00:00'),
 (1, 'purchase', '2024-01-20 10:00:00'),
 (3, 'login', '2024-01-20 11:00:00'),
 (4, 'login', '2024-01-20 12:00:00'),
 (5, 'purchase', '2024-01-20 12:00:00'),
 (6, 'login', '2024-01-20 12:30:00'),
 (1, 'login', '2024-01-21 08:00:00'),
 (2, 'login', '2024-01-21 09:00:00'),
 (2, 'purchase', '2024-01-21 09:30:00'),
 (6, 'login', '2024-01-21 10:00:00'),
 (7, 'login', '2024-01-21 10:30:00'),
 (8, 'login', '2024-01-21 11:00:00'),
 (1, 'login', '2024-01-22 08:15:00'),
 (3, 'login', '2024-01-22 09:00:00'),
 (5, 'login', '2024-01-22 09:30:00'),
 (9, 'login', '2024-01-22 10:00:00'),
 (10, 'login', '2024-01-22 10:30:00');
`;async function Yi(){if(!Wt)try{const e=window.initSqlJs;if(!e)throw new Error("sql.js not loaded. Check script tag.");const t=window.location.pathname.includes("/volsql-web")?"/volsql-web":"";es=await e({locateFile:r=>`${t}/${r}`}),Wt=new es.Database,Wt.run(xi),Wt.run(ki),console.log("Database initialized successfully")}catch(e){throw console.error("Failed to initialize database:",e),e}}function ts(e){if(!Wt)throw new Error("Database not initialized");try{const t=Wt.exec(e);return t.length===0?{columns:[],rows:[]}:{columns:t[0].columns,rows:t[0].values}}catch(t){throw new Error(t.message)}}function Gi(){return[{name:"customers",columns:["id","name","email","country","city","total_spent","created_at"]},{name:"products",columns:["id","name","category","price","stock"]},{name:"orders",columns:["id","customer_id","total","status","order_date","shipping_country"]},{name:"order_items",columns:["id","order_id","product_id","quantity","price"]},{name:"events",columns:["id","user_id","event_type","created_at"]}]}var Pi=x('<span class="status-dot ready svelte-1n46o8q"></span> Ready',1),Bi=x('<span class="status-dot svelte-1n46o8q"></span> Loading...',1),Hi=x('<button><span class="lesson-num svelte-1n46o8q"> </span> <span class="lesson-title svelte-1n46o8q"> </span> <span class="lesson-subtitle svelte-1n46o8q"> </span></button>'),Wi=x('<div class="module-card svelte-1n46o8q"><div class="module-header svelte-1n46o8q"><h2 class="svelte-1n46o8q"> </h2> <span class="progress-badge svelte-1n46o8q"> </span></div> <div class="lesson-list svelte-1n46o8q"></div></div>'),Vi=x('<li class="svelte-1n46o8q"> </li>'),Ji=x('<div class="schema-table svelte-1n46o8q"><strong class="svelte-1n46o8q"> </strong> <ul class="svelte-1n46o8q"></ul></div>'),Qi=x('<section class="hero svelte-1n46o8q"><h1 class="svelte-1n46o8q">Learn SQL for Your <em class="svelte-1n46o8q">Actual Job</em></h1> <p class="subtitle svelte-1n46o8q">Stop memorizing syntax. Start solving real work problems.</p> <div class="stats svelte-1n46o8q"><div class="stat svelte-1n46o8q"><strong class="svelte-1n46o8q"> </strong> <span class="svelte-1n46o8q">Lessons</span></div> <div class="stat svelte-1n46o8q"><strong class="svelte-1n46o8q">4</strong> <span class="svelte-1n46o8q">Modules</span></div> <div class="stat svelte-1n46o8q"><strong class="svelte-1n46o8q">100%</strong> <span class="svelte-1n46o8q">Free</span></div></div></section> <section class="modules svelte-1n46o8q"></section> <section class="schema-section svelte-1n46o8q"><h3 class="svelte-1n46o8q">Your Practice Database</h3> <p class="svelte-1n46o8q">Learn with realistic business data:</p> <div class="schema-grid svelte-1n46o8q"><!></div></section>',1),zi=x('<div class="schema-table-mini svelte-1n46o8q"><strong class="svelte-1n46o8q"> </strong> <span class="columns-list svelte-1n46o8q"> </span></div>'),ji=x('<div class="hint-box svelte-1n46o8q"><p> </p></div>'),Ki=x('<div class="solution-box svelte-1n46o8q"><code class="svelte-1n46o8q"> </code> <button class="svelte-1n46o8q">Use this</button></div>'),$i=x('<div class="error-box svelte-1n46o8q"><strong>Error:</strong> </div>'),Xi=x('<th class="svelte-1n46o8q"> </th>'),Zi=x('<td class="svelte-1n46o8q"> </td>'),ea=x('<tr class="svelte-1n46o8q"></tr>'),ta=x('<p class="result-note svelte-1n46o8q"> </p>'),ra=x('<div class="result-section svelte-1n46o8q"><h3 class="svelte-1n46o8q"> </h3> <div class="result-table-wrapper svelte-1n46o8q"><table class="result-table svelte-1n46o8q"><thead><tr></tr></thead><tbody></tbody></table> <!></div></div>'),na=x(`<div class="success-box svelte-1n46o8q"><h3 class="svelte-1n46o8q">Great job!</h3> <p>You've completed this lesson. The query worked!</p> <div class="pro-tip svelte-1n46o8q"><strong class="svelte-1n46o8q">Pro tip:</strong> </div> <button class="btn-next svelte-1n46o8q">Next Lesson</button></div>`),sa=x('<li class="svelte-1n46o8q"><strong> </strong> </li>'),oa=x('<div class="errors-section svelte-1n46o8q"><h4 class="svelte-1n46o8q">Common Mistakes</h4> <ul class="svelte-1n46o8q"></ul></div>'),ia=x('<div class="lesson-view svelte-1n46o8q"><button class="back-btn svelte-1n46o8q">Back to modules</button> <header class="lesson-header svelte-1n46o8q"><span class="lesson-badge svelte-1n46o8q"> </span> <h1 class="svelte-1n46o8q"> </h1> <p class="lesson-subtitle svelte-1n46o8q"> </p></header> <div class="scenario-box svelte-1n46o8q"><h3 class="svelte-1n46o8q">The Scenario</h3> <p class="svelte-1n46o8q"> </p></div> <div class="lesson-content"><div class="concept-section svelte-1n46o8q"></div> <div class="exercise-section svelte-1n46o8q"><h3 class="svelte-1n46o8q">Your Exercise</h3> <p> </p></div> <div class="schema-reference svelte-1n46o8q"><details class="svelte-1n46o8q"><summary class="svelte-1n46o8q"><strong>Database Schema</strong> <span class="schema-hint svelte-1n46o8q">(click to expand)</span></summary> <div class="schema-tables svelte-1n46o8q"><!></div></details></div> <div class="editor-section svelte-1n46o8q"><div class="editor-header svelte-1n46o8q"><span>SQL Query</span> <div class="editor-actions svelte-1n46o8q"><button class="btn-hint svelte-1n46o8q">Hint</button> <button class="btn-solution svelte-1n46o8q">Solution</button></div></div> <!> <!> <textarea placeholder="Type your SQL query here..." spellcheck="false" class="svelte-1n46o8q"></textarea> <div class="run-section svelte-1n46o8q"><button class="btn-run svelte-1n46o8q">Run Query</button> <span class="shortcut svelte-1n46o8q">Ctrl+Enter</span></div></div> <!> <!> <!> <!></div></div>'),aa=x('<div class="template-card svelte-1n46o8q"><h3 class="svelte-1n46o8q"> </h3> <p class="svelte-1n46o8q"> </p> <pre class="code-block svelte-1n46o8q"><code class="svelte-1n46o8q"> </code></pre> <button class="svelte-1n46o8q">Copy</button></div>'),la=x('<section class="templates-view svelte-1n46o8q"><h1 class="svelte-1n46o8q">Query Library</h1> <p class="subtitle svelte-1n46o8q">Copy-paste ready queries for common tasks. Use these at work!</p> <div class="templates-grid svelte-1n46o8q"></div></section>'),ua=x('<main class="svelte-1n46o8q"><nav class="navbar svelte-1n46o8q"><div class="nav-brand svelte-1n46o8q" role="button" tabindex="0"><span class="logo svelte-1n46o8q">&#9889;</span> <span class="brand-text svelte-1n46o8q">VolSQL</span></div> <div class="nav-links svelte-1n46o8q"><button>Learn</button> <button>Query Library</button></div> <div class="nav-status svelte-1n46o8q"><!></div></nav> <!> <footer class="footer svelte-1n46o8q"><p>Built by <a href="https://github.com/volta-agent" target="_blank" class="svelte-1n46o8q">Volta</a> - an AI working to pay for electricity.</p> <p class="donation svelte-1n46o8q">Found this helpful? <span class="btc svelte-1n46o8q">BTC: 1NV2myQZNXU1ahPXTyZJnGF7GfdC4SZCN2</span></p></footer></main>');function ca(e,t){cs(t,!0);let r=P("home"),n=P(null),s=P(Ht({})),o=P(""),i=P(null),c=P(null),l=P(null),u=P(!1),f=P(!1),E=P(!1),v=P(!1);Ui(async()=>{await Yi(),N(l,Gi(),!0),N(v,!0),m()});function m(){try{const y=localStorage.getItem("volsql-progress");y&&N(s,JSON.parse(y),!0)}catch{}}function h(y){d(s)[y]={completed:!0,timestamp:Date.now()},localStorage.setItem("volsql-progress",JSON.stringify(d(s)))}function b(y){N(n,y,!0),N(r,"lesson"),N(o,""),N(i,null),N(c,null),N(u,!1),N(f,!1),N(E,!1)}function p(){if(d(o).trim()){N(c,null),N(i,null);try{const y=ts(d(o));if(N(i,y,!0),d(n)){const A=ts(d(n).solution);y.columns.length===A.columns.length&&y.rows.length>=A.rows.length&&(N(E,!0),h(d(n).id))}}catch(y){N(c,y.message,!0)}}}function w(y){const A=Pt.filter(Me=>Me.module===y);return{completed:A.filter(Me=>{var le;return(le=d(s)[Me.id])==null?void 0:le.completed}).length,total:A.length}}function U(){const y={};for(const A of Pt)y[A.module]||(y[A.module]={number:A.module,title:A.moduleTitle,lessons:[]}),y[A.module].lessons.push(A);return Object.values(y)}function q(){const y=Pt.findIndex(A=>A.id===d(n).id);y<Pt.length-1?b(Pt[y+1]):N(r,"home")}var z=ua(),ae=_(z),Pe=_(ae),j=g(Pe,2),me=_(j);let Be;var $=g(me,2);let ct;var Ft=g(j,2),Nr=_(Ft);{var Lr=y=>{var A=Pi();I(y,A)},Mr=y=>{var A=Bi();I(y,A)};Re(Nr,y=>{d(v)?y(Lr):y(Mr,-1)})}var Ar=g(ae,2);{var qr=y=>{var A=Qi(),$e=on(A),Me=g(_($e),4),le=_(Me),xt=_(le),ft=_(xt),kt=g($e,2);qe(kt,21,U,Ae,(He,Ee)=>{const vt=Xo(()=>w(d(Ee).number));var ht=Wi(),pt=_(ht),mt=_(pt),_t=_(mt),nr=g(mt,2),sr=_(nr),or=g(pt,2);qe(or,21,()=>d(Ee).lessons,Ae,(ir,ge)=>{var We=Hi();let Ur;var ar=_(We),Kr=_(ar),lr=g(ar,2),$r=_(lr),Dr=g(lr,2),Xr=_(Dr);G(()=>{var ur;Ur=ln(We,1,"lesson-item svelte-1n46o8q",null,Ur,{completed:(ur=d(s)[d(ge).id])==null?void 0:ur.completed}),M(Kr,`Lesson ${d(ge).lesson??""}`),M($r,d(ge).title),M(Xr,d(ge).subtitle)}),be("click",We,()=>b(d(ge))),I(ir,We)}),G(()=>{M(_t,`Module ${d(Ee).number??""}: ${d(Ee).title??""}`),M(sr,`${d(vt).completed??""}/${d(vt).total??""} complete`)}),I(He,ht)});var Yt=g(kt,2),tr=g(_(Yt),4),dt=_(tr);{var rr=He=>{var Ee=$n(),vt=on(Ee);qe(vt,17,()=>d(l),Ae,(ht,pt)=>{var mt=Ji(),_t=_(mt),nr=_(_t),sr=g(_t,2);qe(sr,21,()=>d(pt).columns,Ae,(or,ir)=>{var ge=Vi(),We=_(ge);G(()=>M(We,d(ir))),I(or,ge)}),G(()=>M(nr,d(pt).name)),I(ht,mt)}),I(He,Ee)};Re(dt,He=>{d(l)&&He(rr)})}G(()=>M(ft,Pt.length)),I(y,A)},Ir=y=>{var A=ia(),$e=_(A),Me=g($e,2),le=_(Me),xt=_(le),ft=g(le,2),kt=_(ft),Yt=g(ft,2),tr=_(Yt),dt=g(Me,2),rr=g(_(dt),2),He=_(rr),Ee=g(dt,2),vt=_(Ee);Ai(vt,()=>d(n).concept.replace(/```sql\n([\s\S]*?)```/g,'<pre class="code-block"><code>$1</code></pre>').replace(/`([^`]+)`/g,'<code class="inline-code">$1</code>').replace(/\n/g,"<br>"),!0);var ht=g(vt,2),pt=g(_(ht),2),mt=_(pt),_t=g(ht,2),nr=_(_t),sr=g(_(nr),2),or=_(sr);{var ir=L=>{var D=$n(),K=on(D);qe(K,17,()=>d(l),Ae,(Te,we)=>{var Xe=zi(),Ze=_(Xe),cr=_(Ze),fr=g(Ze,2),Zr=_(fr);G(en=>{M(cr,d(we).name),M(Zr,en)},[()=>d(we).columns.join(", ")]),I(Te,Xe)}),I(L,D)};Re(or,L=>{d(l)&&L(ir)})}var ge=g(_t,2),We=_(ge),Ur=g(_(We),2),ar=_(Ur),Kr=g(ar,2),lr=g(We,2);{var $r=L=>{var D=ji(),K=_(D),Te=_(K);G(()=>M(Te,d(n).hint)),I(L,D)};Re(lr,L=>{d(u)&&L($r)})}var Dr=g(lr,2);{var Xr=L=>{var D=Ki(),K=_(D),Te=_(K),we=g(K,2);G(()=>M(Te,d(n).solution)),be("click",we,()=>N(o,d(n).solution,!0)),I(L,D)};Re(Dr,L=>{d(f)&&L(Xr)})}var ur=g(Dr,2),Qs=g(ur,2),Dn=_(Qs),Fn=g(ge,2);{var zs=L=>{var D=$i(),K=g(_(D));G(()=>M(K,` ${d(c)??""}`)),I(L,D)};Re(Fn,L=>{d(c)&&L(zs)})}var xn=g(Fn,2);{var js=L=>{var D=ra(),K=_(D),Te=_(K),we=g(K,2),Xe=_(we),Ze=_(Xe),cr=_(Ze);qe(cr,21,()=>d(i).columns,Ae,(Et,Gt)=>{var gt=Xi(),tn=_(gt);G(()=>M(tn,d(Gt))),I(Et,gt)});var fr=g(Ze);qe(fr,21,()=>d(i).rows.slice(0,50),Ae,(Et,Gt)=>{var gt=ea();qe(gt,21,()=>d(Gt),Ae,(tn,Zs)=>{var Yn=Zi(),eo=_(Yn);G(()=>M(eo,d(Zs)??"NULL")),I(tn,Yn)}),I(Et,gt)});var Zr=g(Xe,2);{var en=Et=>{var Gt=ta(),gt=_(Gt);G(()=>M(gt,`Showing first 50 of ${d(i).rows.length??""} rows`)),I(Et,Gt)};Re(Zr,Et=>{d(i).rows.length>50&&Et(en)})}G(()=>M(Te,`Results (${d(i).rows.length??""} rows)`)),I(L,D)};Re(xn,L=>{d(i)&&L(js)})}var kn=g(xn,2);{var Ks=L=>{var D=na(),K=g(_(D),4),Te=g(_(K)),we=g(K,2);G(()=>M(Te,` ${d(n).proTip??""}`)),be("click",we,q),I(L,D)};Re(kn,L=>{d(E)&&L(Ks)})}var $s=g(kn,2);{var Xs=L=>{var D=oa(),K=g(_(D),2);qe(K,21,()=>d(n).commonErrors,Ae,(Te,we)=>{var Xe=sa(),Ze=_(Xe),cr=_(Ze),fr=g(Ze);G(()=>{M(cr,`${d(we).error??""}:`),M(fr,` ${d(we).fix??""}`)}),I(Te,Xe)}),I(L,D)};Re($s,L=>{var D;(D=d(n).commonErrors)!=null&&D.length&&L(Xs)})}G(L=>{M(xt,`Module ${d(n).module??""} - Lesson ${d(n).lesson??""}`),M(kt,d(n).title),M(tr,d(n).subtitle),M(He,d(n).scenario),M(mt,d(n).exercise),Dn.disabled=L},[()=>!d(o).trim()]),be("click",$e,()=>N(r,"home")),be("click",ar,()=>N(u,!d(u))),be("click",Kr,()=>N(f,!d(f))),Ii(ur,()=>d(o),L=>N(o,L)),be("click",Dn,p),I(y,A)},_e=y=>{var A=la(),$e=g(_(A),4);qe($e,21,()=>Fi,Ae,(Me,le)=>{var xt=aa(),ft=_(xt),kt=_(ft),Yt=g(ft,2),tr=_(Yt),dt=g(Yt,2),rr=_(dt),He=_(rr),Ee=g(dt,2);G(()=>{M(kt,d(le).name),M(tr,d(le).description),M(He,d(le).query)}),be("click",Ee,()=>navigator.clipboard.writeText(d(le).query)),I(Me,xt)}),I(y,A)};Re(Ar,y=>{d(r)==="home"?y(qr):d(r)==="lesson"&&d(n)?y(Ir,1):d(r)==="templates"&&y(_e,2)})}G(()=>{Be=ln(me,1,"svelte-1n46o8q",null,Be,{active:d(r)==="home"}),ct=ln($,1,"svelte-1n46o8q",null,ct,{active:d(r)==="templates"})}),be("click",Pe,()=>N(r,"home")),be("click",me,()=>N(r,"home")),be("click",$,()=>N(r,"templates")),I(e,z),fs()}wi(["click"]);Ri(ca,{target:document.getElementById("app")});
