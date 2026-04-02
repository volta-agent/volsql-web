var eo=Object.defineProperty;var xn=e=>{throw TypeError(e)};var to=(e,t,r)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Te=(e,t,r)=>to(e,typeof t!="symbol"?t+"":t,r),Xr=(e,t,r)=>t.has(e)||xn("Cannot "+r);var a=(e,t,r)=>(Xr(e,t,"read from private field"),r?r.call(e):t.get(e)),R=(e,t,r)=>t.has(e)?xn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),O=(e,t,r,n)=>(Xr(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),D=(e,t,r)=>(Xr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const ro=!1;var ts=Array.isArray,no=Array.prototype.indexOf,Vt=Array.prototype.includes,Br=Array.from,so=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,oo=Object.prototype,io=Array.prototype,ao=Object.getPrototypeOf,kn=Object.isExtensible;const lo=()=>{};function uo(e){for(var t=0;t<e.length;t++)e[t]()}function rs(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}const H=2,ar=4,Hr=8,ns=1<<24,We=16,Oe=32,bt=64,on=128,de=512,P=1024,Q=2048,De=4096,ee=8192,ve=16384,Nt=32768,Yn=1<<25,Jt=65536,an=1<<17,co=1<<18,Kt=1<<19,fo=1<<20,Ue=1<<25,Rt=65536,ln=1<<21,Wr=1<<22,st=1<<23,Zr=Symbol("$state"),Ye=new class extends Error{constructor(){super(...arguments);Te(this,"name","StaleReactionError");Te(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function vo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ho(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function po(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function mo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _o(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Eo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function go(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function To(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function wo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function yo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function bo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Ro=1,So=2,ss=4,Oo=8,Co=16,No=1,Lo=2,V=Symbol(),Mo="http://www.w3.org/1999/xhtml",Ao="http://www.w3.org/2000/svg",qo="http://www.w3.org/1998/Math/MathML";function Io(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function os(e){return e===this.v}function Uo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function is(e){return!Uo(e,this.v)}let Do=!1,ie=null;function Qt(e){ie=e}function as(e,t=!1,r){ie={p:ie,i:!1,c:null,e:null,s:e,x:null,r:C,l:null}}function ls(e){var t=ie,r=t.e;if(r!==null){t.e=null;for(var n of r)Ls(n)}return t.i=!0,ie=t.p,{}}function us(){return!0}let vt=[];function cs(){var e=vt;vt=[],uo(e)}function Tt(e){if(vt.length===0&&!or){var t=vt;queueMicrotask(()=>{t===vt&&cs()})}vt.push(e)}function Fo(){for(;vt.length>0;)cs()}function fs(e){var t=C;if(t===null)return S.f|=st,e;if((t.f&Nt)===0&&(t.f&ar)===0)throw e;rt(e,t)}function rt(e,t){for(;t!==null;){if((t.f&on)!==0){if((t.f&Nt)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const xo=-7169;function x(e,t){e.f=e.f&xo|t}function En(e){(e.f&de)!==0||e.deps===null?x(e,P):x(e,De)}function ds(e){if(e!==null)for(const t of e)(t.f&H)===0||(t.f&Rt)===0||(t.f^=Rt,ds(t.deps))}function vs(e,t,r){(e.f&Q)!==0?t.add(e):(e.f&De)!==0&&r.add(e),ds(e.deps),x(e,P)}const Ke=new Set;let T=null,J=null,un=null,or=!1,en=!1,kt=null,qr=null;var Gn=0;let ko=1;var Pt,Bt,Ge,Le,cr,ne,fr,et,Pe,Me,Ht,mt,Y,Ir,hs,Ur,cn,fn,ps;const Yr=class Yr{constructor(){R(this,Y);Te(this,"id",ko++);Te(this,"current",new Map);Te(this,"previous",new Map);R(this,Pt,new Set);R(this,Bt,new Set);R(this,Ge,new Map);R(this,Le,new Map);R(this,cr,null);R(this,ne,[]);R(this,fr,[]);R(this,et,new Set);R(this,Pe,new Set);R(this,Me,new Map);Te(this,"is_fork",!1);R(this,Ht,!1);R(this,mt,new Set)}skip_effect(t){a(this,Me).has(t)||a(this,Me).set(t,{d:[],m:[]})}unskip_effect(t){var r=a(this,Me).get(t);if(r){a(this,Me).delete(t);for(var n of r.d)x(n,Q),this.schedule(n);for(n of r.m)x(n,De),this.schedule(n)}}capture(t,r,n=!1){r!==V&&!this.previous.has(t)&&this.previous.set(t,r),(t.f&st)===0&&(this.current.set(t,[t.v,n]),J==null||J.set(t,t.v))}activate(){T=this}deactivate(){T=null,J=null}flush(){try{en=!0,T=this,D(this,Y,Ur).call(this)}finally{Gn=0,un=null,kt=null,qr=null,en=!1,T=null,J=null,ot.clear()}}discard(){for(const t of a(this,Bt))t(this);a(this,Bt).clear(),Ke.delete(this)}register_created_effect(t){a(this,fr).push(t)}increment(t,r){let n=a(this,Ge).get(r)??0;if(a(this,Ge).set(r,n+1),t){let s=a(this,Le).get(r)??0;a(this,Le).set(r,s+1)}}decrement(t,r,n){let s=a(this,Ge).get(r)??0;if(s===1?a(this,Ge).delete(r):a(this,Ge).set(r,s-1),t){let o=a(this,Le).get(r)??0;o===1?a(this,Le).delete(r):a(this,Le).set(r,o-1)}a(this,Ht)||n||(O(this,Ht,!0),Tt(()=>{O(this,Ht,!1),this.flush()}))}transfer_effects(t,r){for(const n of t)a(this,et).add(n);for(const n of r)a(this,Pe).add(n);t.clear(),r.clear()}oncommit(t){a(this,Pt).add(t)}ondiscard(t){a(this,Bt).add(t)}settled(){return(a(this,cr)??O(this,cr,rs())).promise}static ensure(){if(T===null){const t=T=new Yr;en||(Ke.add(T),or||Tt(()=>{T===t&&t.flush()}))}return T}apply(){{J=null;return}}schedule(t){var s;if(un=t,(s=t.b)!=null&&s.is_pending&&(t.f&(ar|Hr|ns))!==0&&(t.f&Nt)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(kt!==null&&r===C&&(S===null||(S.f&H)===0))return;if((n&(bt|Oe))!==0){if((n&P)===0)return;r.f^=P}}a(this,ne).push(r)}};Pt=new WeakMap,Bt=new WeakMap,Ge=new WeakMap,Le=new WeakMap,cr=new WeakMap,ne=new WeakMap,fr=new WeakMap,et=new WeakMap,Pe=new WeakMap,Me=new WeakMap,Ht=new WeakMap,mt=new WeakMap,Y=new WeakSet,Ir=function(){return this.is_fork||a(this,Le).size>0},hs=function(){for(const n of a(this,mt))for(const s of a(n,Le).keys()){for(var t=!1,r=s;r.parent!==null;){if(a(this,Me).has(r)){t=!0;break}r=r.parent}if(!t)return!0}return!1},Ur=function(){var c,l;if(Gn++>1e3&&(Ke.delete(this),Go()),!D(this,Y,Ir).call(this)){for(const u of a(this,et))a(this,Pe).delete(u),x(u,Q),this.schedule(u);for(const u of a(this,Pe))x(u,De),this.schedule(u)}const t=a(this,ne);O(this,ne,[]),this.apply();var r=kt=[],n=[],s=qr=[];for(const u of t)try{D(this,Y,cn).call(this,u,r,n)}catch(f){throw Es(u),f}if(T=null,s.length>0){var o=Yr.ensure();for(const u of s)o.schedule(u)}if(kt=null,qr=null,D(this,Y,Ir).call(this)||D(this,Y,hs).call(this)){D(this,Y,fn).call(this,n),D(this,Y,fn).call(this,r);for(const[u,f]of a(this,Me))_s(u,f)}else{a(this,Ge).size===0&&Ke.delete(this),a(this,et).clear(),a(this,Pe).clear();for(const u of a(this,Pt))u(this);a(this,Pt).clear(),Pn(n),Pn(r),(c=a(this,cr))==null||c.resolve()}var i=T;if(a(this,ne).length>0){const u=i??(i=this);a(u,ne).push(...a(this,ne).filter(f=>!a(u,ne).includes(f)))}i!==null&&(Ke.add(i),D(l=i,Y,Ur).call(l)),Ke.has(this)||D(this,Y,ps).call(this)},cn=function(t,r,n){t.f^=P;for(var s=t.first;s!==null;){var o=s.f,i=(o&(Oe|bt))!==0,c=i&&(o&P)!==0,l=c||(o&ee)!==0||a(this,Me).has(s);if(!l&&s.fn!==null){i?s.f^=P:(o&ar)!==0?r.push(s):_r(s)&&((o&We)!==0&&a(this,Pe).add(s),jt(s));var u=s.first;if(u!==null){s=u;continue}}for(;s!==null;){var f=s.next;if(f!==null){s=f;break}s=s.parent}}},fn=function(t){for(var r=0;r<t.length;r+=1)vs(t[r],a(this,et),a(this,Pe))},ps=function(){var f,_,d;for(const m of Ke){var t=m.id<this.id,r=[];for(const[h,[b,p]]of this.current){if(m.current.has(h)){var n=m.current.get(h)[0];if(t&&b!==n)m.current.set(h,[b,p]);else continue}r.push(h)}var s=[...m.current.keys()].filter(h=>!this.current.has(h));if(s.length===0)t&&m.discard();else if(r.length>0){m.activate();var o=new Set,i=new Map;for(var c of r)ms(c,s,o,i);i=new Map;var l=[...m.current.keys()].filter(h=>this.current.has(h)?this.current.get(h)[0]!==h:!0);for(const h of a(this,fr))(h.f&(ve|ee|an))===0&&gn(h,l,i)&&((h.f&(Wr|We))!==0?(x(h,Q),m.schedule(h)):a(m,et).add(h));if(a(m,ne).length>0){m.apply();for(var u of a(m,ne))D(f=m,Y,cn).call(f,u,[],[]);O(m,ne,[])}m.deactivate()}}for(const m of Ke)a(m,mt).has(this)&&(a(m,mt).delete(this),a(m,mt).size===0&&!D(_=m,Y,Ir).call(_)&&(m.activate(),D(d=m,Y,Ur).call(d)))};let St=Yr;function Yo(e){var t=or;or=!0;try{for(var r;;){if(Fo(),T===null)return r;T.flush()}}finally{or=t}}function Go(){try{go()}catch(e){rt(e,un)}}let ye=null;function Pn(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(ve|ee))===0&&_r(n)&&(ye=new Set,jt(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Is(n),(ye==null?void 0:ye.size)>0)){ot.clear();for(const s of ye){if((s.f&(ve|ee))!==0)continue;const o=[s];let i=s.parent;for(;i!==null;)ye.has(i)&&(ye.delete(i),o.push(i)),i=i.parent;for(let c=o.length-1;c>=0;c--){const l=o[c];(l.f&(ve|ee))===0&&jt(l)}}ye.clear()}}ye=null}}function ms(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const s of e.reactions){const o=s.f;(o&H)!==0?ms(s,t,r,n):(o&(Wr|We))!==0&&(o&Q)===0&&gn(s,t,n)&&(x(s,Q),Tn(s))}}function gn(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const s of e.deps){if(Vt.call(t,s))return!0;if((s.f&H)!==0&&gn(s,t,r))return r.set(s,!0),!0}return r.set(e,!1),!1}function Tn(e){T.schedule(e)}function _s(e,t){if(!((e.f&Oe)!==0&&(e.f&P)!==0)){(e.f&Q)!==0?t.d.push(e):(e.f&De)!==0&&t.m.push(e),x(e,P);for(var r=e.first;r!==null;)_s(r,t),r=r.next}}function Es(e){x(e,P);for(var t=e.first;t!==null;)Es(t),t=t.next}function Po(e){let t=0,r=Ot(0),n;return()=>{Rn()&&(v(r),Ms(()=>(t===0&&(n=Ln(()=>e(()=>ir(r)))),t+=1,()=>{Tt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,ir(r))})})))}}var Bo=Jt|Kt;function Ho(e,t,r,n){new Wo(e,t,r,n)}var ce,_n,Ae,_t,X,qe,se,be,Be,Et,tt,Wt,dr,vr,He,Gr,B,Vo,Jo,Qo,dn,Dr,Fr,vn;class Wo{constructor(t,r,n,s){R(this,B);Te(this,"parent");Te(this,"is_pending",!1);Te(this,"transform_error");R(this,ce);R(this,_n,null);R(this,Ae);R(this,_t);R(this,X);R(this,qe,null);R(this,se,null);R(this,be,null);R(this,Be,null);R(this,Et,0);R(this,tt,0);R(this,Wt,!1);R(this,dr,new Set);R(this,vr,new Set);R(this,He,null);R(this,Gr,Po(()=>(O(this,He,Ot(a(this,Et))),()=>{O(this,He,null)})));var o;O(this,ce,t),O(this,Ae,r),O(this,_t,i=>{var c=C;c.b=this,c.f|=on,n(i)}),this.parent=C.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(i=>i),O(this,X,Sn(()=>{D(this,B,dn).call(this)},Bo))}defer_effect(t){vs(t,a(this,dr),a(this,vr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!a(this,Ae).pending}update_pending_count(t,r){D(this,B,vn).call(this,t,r),O(this,Et,a(this,Et)+t),!(!a(this,He)||a(this,Wt))&&(O(this,Wt,!0),Tt(()=>{O(this,Wt,!1),a(this,He)&&zt(a(this,He),a(this,Et))}))}get_effect_pending(){return a(this,Gr).call(this),v(a(this,He))}error(t){var r=a(this,Ae).onerror;let n=a(this,Ae).failed;if(!r&&!n)throw t;a(this,qe)&&(te(a(this,qe)),O(this,qe,null)),a(this,se)&&(te(a(this,se)),O(this,se,null)),a(this,be)&&(te(a(this,be)),O(this,be,null));var s=!1,o=!1;const i=()=>{if(s){Io();return}s=!0,o&&bo(),a(this,be)!==null&&wt(a(this,be),()=>{O(this,be,null)}),D(this,B,Fr).call(this,()=>{D(this,B,dn).call(this)})},c=l=>{try{o=!0,r==null||r(l,i),o=!1}catch(u){rt(u,a(this,X)&&a(this,X).parent)}n&&O(this,be,D(this,B,Fr).call(this,()=>{try{return fe(()=>{var u=C;u.b=this,u.f|=on,n(a(this,ce),()=>l,()=>i)})}catch(u){return rt(u,a(this,X).parent),null}}))};Tt(()=>{var l;try{l=this.transform_error(t)}catch(u){rt(u,a(this,X)&&a(this,X).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(c,u=>rt(u,a(this,X)&&a(this,X).parent)):c(l)})}}ce=new WeakMap,_n=new WeakMap,Ae=new WeakMap,_t=new WeakMap,X=new WeakMap,qe=new WeakMap,se=new WeakMap,be=new WeakMap,Be=new WeakMap,Et=new WeakMap,tt=new WeakMap,Wt=new WeakMap,dr=new WeakMap,vr=new WeakMap,He=new WeakMap,Gr=new WeakMap,B=new WeakSet,Vo=function(){try{O(this,qe,fe(()=>a(this,_t).call(this,a(this,ce))))}catch(t){this.error(t)}},Jo=function(t){const r=a(this,Ae).failed;r&&O(this,be,fe(()=>{r(a(this,ce),()=>t,()=>()=>{})}))},Qo=function(){const t=a(this,Ae).pending;t&&(this.is_pending=!0,O(this,se,fe(()=>t(a(this,ce)))),Tt(()=>{var r=O(this,Be,document.createDocumentFragment()),n=it();r.append(n),O(this,qe,D(this,B,Fr).call(this,()=>fe(()=>a(this,_t).call(this,n)))),a(this,tt)===0&&(a(this,ce).before(r),O(this,Be,null),wt(a(this,se),()=>{O(this,se,null)}),D(this,B,Dr).call(this,T))}))},dn=function(){try{if(this.is_pending=this.has_pending_snippet(),O(this,tt,0),O(this,Et,0),O(this,qe,fe(()=>{a(this,_t).call(this,a(this,ce))})),a(this,tt)>0){var t=O(this,Be,document.createDocumentFragment());Nn(a(this,qe),t);const r=a(this,Ae).pending;O(this,se,fe(()=>r(a(this,ce))))}else D(this,B,Dr).call(this,T)}catch(r){this.error(r)}},Dr=function(t){this.is_pending=!1,t.transfer_effects(a(this,dr),a(this,vr))},Fr=function(t){var r=C,n=S,s=ie;Fe(a(this,X)),pe(a(this,X)),Qt(a(this,X).ctx);try{return St.ensure(),t()}catch(o){return fs(o),null}finally{Fe(r),pe(n),Qt(s)}},vn=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&D(n=this.parent,B,vn).call(n,t,r);return}O(this,tt,a(this,tt)+t),a(this,tt)===0&&(D(this,B,Dr).call(this,r),a(this,se)&&wt(a(this,se),()=>{O(this,se,null)}),a(this,Be)&&(a(this,ce).before(a(this,Be)),O(this,Be,null)))};function zo(e,t,r,n){const s=wn;var o=e.filter(d=>!d.settled);if(r.length===0&&o.length===0){n(t.map(s));return}var i=C,c=jo(),l=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(d=>d.promise)):null;function u(d){c();try{n(d)}catch(m){(i.f&ve)===0&&rt(m,i)}kr()}if(r.length===0){l.then(()=>u(t.map(s)));return}var f=gs();function _(){Promise.all(r.map(d=>Ko(d))).then(d=>u([...t.map(s),...d])).catch(d=>rt(d,i)).finally(()=>f())}l?l.then(()=>{c(),_(),kr()}):_()}function jo(){var e=C,t=S,r=ie,n=T;return function(o=!0){Fe(e),pe(t),Qt(r),o&&(e.f&ve)===0&&(n==null||n.activate(),n==null||n.apply())}}function kr(e=!0){Fe(null),pe(null),Qt(null),e&&(T==null||T.deactivate())}function gs(){var e=C,t=e.b,r=T,n=t.is_rendered();return t.update_pending_count(1,r),r.increment(n,e),(s=!1)=>{t.update_pending_count(-1,r),r.decrement(n,e,s)}}function wn(e){var t=H|Q,r=S!==null&&(S.f&H)!==0?S:null;return C!==null&&(C.f|=Kt),{ctx:ie,deps:null,effects:null,equals:os,f:t,fn:e,reactions:null,rv:0,v:V,wv:0,parent:r??C,ac:null}}function Ko(e,t,r){let n=C;n===null&&ho();var s=void 0,o=Ot(V),i=!S,c=new Map;return vi(()=>{var m;var l=C,u=rs();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).finally(kr)}catch(h){u.reject(h),kr()}var f=T;if(i){if((l.f&Nt)!==0)var _=gs();if(n.b.is_rendered())(m=c.get(f))==null||m.reject(Ye),c.delete(f);else{for(const h of c.values())h.reject(Ye);c.clear()}c.set(f,u)}const d=(h,b=void 0)=>{if(_){var p=b===Ye;_(p)}if(!(b===Ye||(l.f&ve)!==0)){if(f.activate(),b)o.f|=st,zt(o,b);else{(o.f&st)!==0&&(o.f^=st),zt(o,h);for(const[w,I]of c){if(c.delete(w),w===f)break;I.reject(Ye)}}f.deactivate()}};u.promise.then(d,h=>d(null,h||"unknown"))}),ci(()=>{for(const l of c.values())l.reject(Ye)}),new Promise(l=>{function u(f){function _(){f===s?l(o):u(s)}f.then(_,_)}u(s)})}function $o(e){const t=wn(e);return Fs(t),t}function Xo(e){const t=wn(e);return t.equals=is,t}function Zo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)te(t[r])}}function ei(e){for(var t=e.parent;t!==null;){if((t.f&H)===0)return(t.f&ve)===0?t:null;t=t.parent}return null}function yn(e){var t,r=C;Fe(ei(e));try{e.f&=~Rt,Zo(e),t=Gs(e)}finally{Fe(r)}return t}function Ts(e){var t=e.v,r=yn(e);if(!e.equals(r)&&(e.wv=ks(),(!(T!=null&&T.is_fork)||e.deps===null)&&(e.v=r,T==null||T.capture(e,t,!0),e.deps===null))){x(e,P);return}Ct||(J!==null?(Rn()||T!=null&&T.is_fork)&&J.set(e,r):En(e))}function ti(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(Ye),n.teardown=lo,n.ac=null,lr(n,0),On(n))}function ws(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&jt(t)}let hn=new Set;const ot=new Map;let ys=!1;function Ot(e,t){var r={f:0,v:e,reactions:null,equals:os,rv:0,wv:0};return r}function G(e,t){const r=Ot(e);return Fs(r),r}function ri(e,t=!1,r=!0){const n=Ot(e);return t||(n.equals=is),n}function N(e,t,r=!1){S!==null&&(!Se||(S.f&an)!==0)&&us()&&(S.f&(H|We|Wr|an))!==0&&(he===null||!Vt.call(he,e))&&yo();let n=r?Yt(t):t;return zt(e,n,qr)}function zt(e,t,r=null){if(!e.equals(t)){var n=e.v;Ct?ot.set(e,t):ot.set(e,n),e.v=t;var s=St.ensure();if(s.capture(e,n),(e.f&H)!==0){const o=e;(e.f&Q)!==0&&yn(o),J===null&&En(o)}e.wv=ks(),bs(e,Q,r),C!==null&&(C.f&P)!==0&&(C.f&(Oe|bt))===0&&(ue===null?pi([e]):ue.push(e)),!s.is_fork&&hn.size>0&&!ys&&ni()}return t}function ni(){ys=!1;for(const e of hn)(e.f&P)!==0&&x(e,De),_r(e)&&jt(e);hn.clear()}function ir(e){N(e,e.v+1)}function bs(e,t,r){var n=e.reactions;if(n!==null)for(var s=n.length,o=0;o<s;o++){var i=n[o],c=i.f,l=(c&Q)===0;if(l&&x(i,t),(c&H)!==0){var u=i;J==null||J.delete(u),(c&Rt)===0&&(c&de&&(i.f|=Rt),bs(u,De,r))}else if(l){var f=i;(c&We)!==0&&ye!==null&&ye.add(f),r!==null?r.push(f):Tn(f)}}}function Yt(e){if(typeof e!="object"||e===null||Zr in e)return e;const t=ao(e);if(t!==oo&&t!==io)return e;var r=new Map,n=ts(e),s=G(0),o=yt,i=c=>{if(yt===o)return c();var l=S,u=yt;pe(null),Jn(o);var f=c();return pe(l),Jn(u),f};return n&&r.set("length",G(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&To();var f=r.get(l);return f===void 0?i(()=>{var _=G(u.value);return r.set(l,_),_}):N(f,u.value,!0),!0},deleteProperty(c,l){var u=r.get(l);if(u===void 0){if(l in c){const f=i(()=>G(V));r.set(l,f),ir(s)}}else N(u,V),ir(s);return!0},get(c,l,u){var m;if(l===Zr)return e;var f=r.get(l),_=l in c;if(f===void 0&&(!_||(m=sr(c,l))!=null&&m.writable)&&(f=i(()=>{var h=Yt(_?c[l]:V),b=G(h);return b}),r.set(l,f)),f!==void 0){var d=v(f);return d===V?void 0:d}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var f=r.get(l);f&&(u.value=v(f))}else if(u===void 0){var _=r.get(l),d=_==null?void 0:_.v;if(_!==void 0&&d!==V)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(c,l){var d;if(l===Zr)return!0;var u=r.get(l),f=u!==void 0&&u.v!==V||Reflect.has(c,l);if(u!==void 0||C!==null&&(!f||(d=sr(c,l))!=null&&d.writable)){u===void 0&&(u=i(()=>{var m=f?Yt(c[l]):V,h=G(m);return h}),r.set(l,u));var _=v(u);if(_===V)return!1}return f},set(c,l,u,f){var A;var _=r.get(l),d=l in c;if(n&&l==="length")for(var m=u;m<_.v;m+=1){var h=r.get(m+"");h!==void 0?N(h,V):m in c&&(h=i(()=>G(V)),r.set(m+"",h))}if(_===void 0)(!d||(A=sr(c,l))!=null&&A.writable)&&(_=i(()=>G(void 0)),N(_,Yt(u)),r.set(l,_));else{d=_.v!==V;var b=i(()=>Yt(u));N(_,b)}var p=Reflect.getOwnPropertyDescriptor(c,l);if(p!=null&&p.set&&p.set.call(f,u),!d){if(n&&typeof l=="string"){var w=r.get("length"),I=Number(l);Number.isInteger(I)&&I>=w.v&&N(w,I+1)}ir(s)}return!0},ownKeys(c){v(s);var l=Reflect.ownKeys(c).filter(_=>{var d=r.get(_);return d===void 0||d.v!==V});for(var[u,f]of r)f.v!==V&&!(u in c)&&l.push(u);return l},setPrototypeOf(){wo()}})}var Bn,Rs,Ss,Os;function si(){if(Bn===void 0){Bn=window,Rs=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ss=sr(t,"firstChild").get,Os=sr(t,"nextSibling").get,kn(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),kn(r)&&(r.__t=void 0)}}function it(e=""){return document.createTextNode(e)}function nt(e){return Ss.call(e)}function mr(e){return Os.call(e)}function E(e,t){return nt(e)}function Hn(e,t=!1){{var r=nt(e);return r instanceof Comment&&r.data===""?mr(r):r}}function g(e,t=1,r=!1){let n=e;for(;t--;)n=mr(n);return n}function oi(e){e.textContent=""}function Cs(){return!1}function Ns(e,t,r){return document.createElementNS(t??Mo,e,void 0)}let Wn=!1;function ii(){Wn||(Wn=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function bn(e){var t=S,r=C;pe(null),Fe(null);try{return e()}finally{pe(t),Fe(r)}}function ai(e,t,r,n=r){e.addEventListener(t,()=>bn(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),ii()}function li(e){C===null&&(S===null&&Eo(),_o()),Ct&&mo()}function ui(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function at(e,t){var r=C;r!==null&&(r.f&ee)!==0&&(e|=ee);var n={ctx:ie,deps:null,nodes:null,f:e|Q|de,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};T==null||T.register_created_effect(n);var s=n;if((e&ar)!==0)kt!==null?kt.push(n):St.ensure().schedule(n);else if(t!==null){try{jt(n)}catch(i){throw te(n),i}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Kt)===0&&(s=s.first,(e&We)!==0&&(e&Jt)!==0&&s!==null&&(s.f|=Jt))}if(s!==null&&(s.parent=r,r!==null&&ui(s,r),S!==null&&(S.f&H)!==0&&(e&bt)===0)){var o=S;(o.effects??(o.effects=[])).push(s)}return n}function Rn(){return S!==null&&!Se}function ci(e){const t=at(Hr,null);return x(t,P),t.teardown=e,t}function fi(e){li();var t=C.f,r=!S&&(t&Oe)!==0&&(t&Nt)===0;if(r){var n=ie;(n.e??(n.e=[])).push(e)}else return Ls(e)}function Ls(e){return at(ar|fo,e)}function di(e){St.ensure();const t=at(bt|Kt,e);return(r={})=>new Promise(n=>{r.outro?wt(t,()=>{te(t),n(void 0)}):(te(t),n(void 0))})}function vi(e){return at(Wr|Kt,e)}function Ms(e,t=0){return at(Hr|t,e)}function W(e,t=[],r=[],n=[]){zo(n,t,r,s=>{at(Hr,()=>e(...s.map(v)))})}function Sn(e,t=0){var r=at(We|t,e);return r}function fe(e){return at(Oe|Kt,e)}function As(e){var t=e.teardown;if(t!==null){const r=Ct,n=S;Vn(!0),pe(null);try{t.call(null)}finally{Vn(r),pe(n)}}}function On(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&bn(()=>{s.abort(Ye)});var n=r.next;(r.f&bt)!==0?r.parent=null:te(r,t),r=n}}function hi(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Oe)===0&&te(t),t=r}}function te(e,t=!0){var r=!1;(t||(e.f&co)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(qs(e.nodes.start,e.nodes.end),r=!0),x(e,Yn),On(e,t&&!r),lr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)o.stop();As(e),e.f^=Yn,e.f|=ve;var s=e.parent;s!==null&&s.first!==null&&Is(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function qs(e,t){for(;e!==null;){var r=e===t?null:mr(e);e.remove(),e=r}}function Is(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function wt(e,t,r=!0){var n=[];Us(e,n,!0);var s=()=>{r&&te(e),t&&t()},o=n.length;if(o>0){var i=()=>--o||s();for(var c of n)c.out(i)}else s()}function Us(e,t,r){if((e.f&ee)===0){e.f^=ee;var n=e.nodes&&e.nodes.t;if(n!==null)for(const c of n)(c.is_global||r)&&t.push(c);for(var s=e.first;s!==null;){var o=s.next,i=(s.f&Jt)!==0||(s.f&Oe)!==0&&(e.f&We)!==0;Us(s,t,i?r:!1),s=o}}}function Cn(e){Ds(e,!0)}function Ds(e,t){if((e.f&ee)!==0){e.f^=ee,(e.f&P)===0&&(x(e,Q),St.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&Jt)!==0||(r.f&Oe)!==0;Ds(r,s?t:!1),r=n}var o=e.nodes&&e.nodes.t;if(o!==null)for(const i of o)(i.is_global||t)&&i.in()}}function Nn(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var s=r===n?null:mr(r);t.append(r),r=s}}let xr=!1,Ct=!1;function Vn(e){Ct=e}let S=null,Se=!1;function pe(e){S=e}let C=null;function Fe(e){C=e}let he=null;function Fs(e){S!==null&&(he===null?he=[e]:he.push(e))}let Z=null,re=0,ue=null;function pi(e){ue=e}let xs=1,ht=0,yt=ht;function Jn(e){yt=e}function ks(){return++xs}function _r(e){var t=e.f;if((t&Q)!==0)return!0;if(t&H&&(e.f&=~Rt),(t&De)!==0){for(var r=e.deps,n=r.length,s=0;s<n;s++){var o=r[s];if(_r(o)&&Ts(o),o.wv>e.wv)return!0}(t&de)!==0&&J===null&&x(e,P)}return!1}function Ys(e,t,r=!0){var n=e.reactions;if(n!==null&&!(he!==null&&Vt.call(he,e)))for(var s=0;s<n.length;s++){var o=n[s];(o.f&H)!==0?Ys(o,t,!1):t===o&&(r?x(o,Q):(o.f&P)!==0&&x(o,De),Tn(o))}}function Gs(e){var b;var t=Z,r=re,n=ue,s=S,o=he,i=ie,c=Se,l=yt,u=e.f;Z=null,re=0,ue=null,S=(u&(Oe|bt))===0?e:null,he=null,Qt(e.ctx),Se=!1,yt=++ht,e.ac!==null&&(bn(()=>{e.ac.abort(Ye)}),e.ac=null);try{e.f|=ln;var f=e.fn,_=f();e.f|=Nt;var d=e.deps,m=T==null?void 0:T.is_fork;if(Z!==null){var h;if(m||lr(e,re),d!==null&&re>0)for(d.length=re+Z.length,h=0;h<Z.length;h++)d[re+h]=Z[h];else e.deps=d=Z;if(Rn()&&(e.f&de)!==0)for(h=re;h<d.length;h++)((b=d[h]).reactions??(b.reactions=[])).push(e)}else!m&&d!==null&&re<d.length&&(lr(e,re),d.length=re);if(us()&&ue!==null&&!Se&&d!==null&&(e.f&(H|De|Q))===0)for(h=0;h<ue.length;h++)Ys(ue[h],e);if(s!==null&&s!==e){if(ht++,s.deps!==null)for(let p=0;p<r;p+=1)s.deps[p].rv=ht;if(t!==null)for(const p of t)p.rv=ht;ue!==null&&(n===null?n=ue:n.push(...ue))}return(e.f&st)!==0&&(e.f^=st),_}catch(p){return fs(p)}finally{e.f^=ln,Z=t,re=r,ue=n,S=s,he=o,Qt(i),Se=c,yt=l}}function mi(e,t){let r=t.reactions;if(r!==null){var n=no.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}if(r===null&&(t.f&H)!==0&&(Z===null||!Vt.call(Z,t))){var o=t;(o.f&de)!==0&&(o.f^=de,o.f&=~Rt),En(o),ti(o),lr(o,0)}}function lr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)mi(e,r[n])}function jt(e){var t=e.f;if((t&ve)===0){x(e,P);var r=C,n=xr;C=e,xr=!0;try{(t&(We|ns))!==0?hi(e):On(e),As(e);var s=Gs(e);e.teardown=typeof s=="function"?s:null,e.wv=xs;var o;ro&&Do&&(e.f&Q)!==0&&e.deps}finally{xr=n,C=r}}}async function _i(){await Promise.resolve(),Yo()}function v(e){var t=e.f,r=(t&H)!==0;if(S!==null&&!Se){var n=C!==null&&(C.f&ve)!==0;if(!n&&(he===null||!Vt.call(he,e))){var s=S.deps;if((S.f&ln)!==0)e.rv<ht&&(e.rv=ht,Z===null&&s!==null&&s[re]===e?re++:Z===null?Z=[e]:Z.push(e));else{(S.deps??(S.deps=[])).push(e);var o=e.reactions;o===null?e.reactions=[S]:Vt.call(o,S)||o.push(S)}}}if(Ct&&ot.has(e))return ot.get(e);if(r){var i=e;if(Ct){var c=i.v;return((i.f&P)===0&&i.reactions!==null||Bs(i))&&(c=yn(i)),ot.set(i,c),c}var l=(i.f&de)===0&&!Se&&S!==null&&(xr||(S.f&de)!==0),u=(i.f&Nt)===0;_r(i)&&(l&&(i.f|=de),Ts(i)),l&&!u&&(ws(i),Ps(i))}if(J!=null&&J.has(e))return J.get(e);if((e.f&st)!==0)throw e.v;return e.v}function Ps(e){if(e.f|=de,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&H)!==0&&(t.f&de)===0&&(ws(t),Ps(t))}function Bs(e){if(e.v===V)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(ot.has(t)||(t.f&H)!==0&&Bs(t))return!0;return!1}function Ln(e){var t=Se;try{return Se=!0,e()}finally{Se=t}}const Ei=["touchstart","touchmove"];function gi(e){return Ei.includes(e)}const pt=Symbol("events"),Hs=new Set,pn=new Set;function we(e,t,r){(t[pt]??(t[pt]={}))[e]=r}function Ti(e){for(var t=0;t<e.length;t++)Hs.add(e[t]);for(var r of pn)r(e)}let Qn=null;function zn(e){var p,w;var t=this,r=t.ownerDocument,n=e.type,s=((p=e.composedPath)==null?void 0:p.call(e))||[],o=s[0]||e.target;Qn=e;var i=0,c=Qn===e&&e[pt];if(c){var l=s.indexOf(c);if(l!==-1&&(t===document||t===window)){e[pt]=t;return}var u=s.indexOf(t);if(u===-1)return;l<=u&&(i=l)}if(o=s[i]||e.target,o!==t){so(e,"currentTarget",{configurable:!0,get(){return o||r}});var f=S,_=C;pe(null),Fe(null);try{for(var d,m=[];o!==null;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var b=(w=o[pt])==null?void 0:w[n];b!=null&&(!o.disabled||e.target===o)&&b.call(o,e)}catch(I){d?m.push(I):d=I}if(e.cancelBubble||h===t||h===null)break;o=h}if(d){for(let I of m)queueMicrotask(()=>{throw I});throw d}}finally{e[pt]=t,delete e.currentTarget,pe(f),Fe(_)}}}var Zn;const tn=((Zn=globalThis==null?void 0:globalThis.window)==null?void 0:Zn.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function wi(e){return(tn==null?void 0:tn.createHTML(e))??e}function yi(e){var t=Ns("template");return t.innerHTML=wi(e.replaceAll("<!>","<!---->")),t.content}function ur(e,t){var r=C;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function k(e,t){var r=(t&No)!==0,n=(t&Lo)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=yi(o?e:"<!>"+e),r||(s=nt(s)));var i=n||Rs?document.importNode(s,!0):s.cloneNode(!0);if(r){var c=nt(i),l=i.lastChild;ur(c,l)}else ur(i,i);return i}}function bi(){var e=document.createDocumentFragment(),t=document.createComment(""),r=it();return e.append(t,r),ur(t,r),e}function F(e,t){e!==null&&e.before(t)}function q(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function Ri(e,t){return Si(e,t)}const Ar=new Map;function Si(e,{target:t,anchor:r,props:n={},events:s,context:o,intro:i=!0,transformError:c}){si();var l=void 0,u=di(()=>{var f=r??t.appendChild(it());Ho(f,{pending:()=>{}},m=>{as({});var h=ie;o&&(h.c=o),s&&(n.$$events=s),l=e(m,n)||{},ls()},c);var _=new Set,d=m=>{for(var h=0;h<m.length;h++){var b=m[h];if(!_.has(b)){_.add(b);var p=gi(b);for(const A of[t,document]){var w=Ar.get(A);w===void 0&&(w=new Map,Ar.set(A,w));var I=w.get(b);I===void 0?(A.addEventListener(b,zn,{passive:p}),w.set(b,1)):w.set(b,I+1)}}}};return d(Br(Hs)),pn.add(d),()=>{var p;for(var m of _)for(const w of[t,document]){var h=Ar.get(w),b=h.get(m);--b==0?(w.removeEventListener(m,zn),h.delete(m),h.size===0&&Ar.delete(w)):h.set(m,b)}pn.delete(d),f!==r&&((p=f.parentNode)==null||p.removeChild(f))}});return Oi.set(l,u),l}let Oi=new WeakMap;var Re,Ie,oe,gt,hr,pr,Pr;class Ci{constructor(t,r=!0){Te(this,"anchor");R(this,Re,new Map);R(this,Ie,new Map);R(this,oe,new Map);R(this,gt,new Set);R(this,hr,!0);R(this,pr,t=>{if(a(this,Re).has(t)){var r=a(this,Re).get(t),n=a(this,Ie).get(r);if(n)Cn(n),a(this,gt).delete(r);else{var s=a(this,oe).get(r);s&&(a(this,Ie).set(r,s.effect),a(this,oe).delete(r),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[o,i]of a(this,Re)){if(a(this,Re).delete(o),o===t)break;const c=a(this,oe).get(i);c&&(te(c.effect),a(this,oe).delete(i))}for(const[o,i]of a(this,Ie)){if(o===r||a(this,gt).has(o))continue;const c=()=>{if(Array.from(a(this,Re).values()).includes(o)){var u=document.createDocumentFragment();Nn(i,u),u.append(it()),a(this,oe).set(o,{effect:i,fragment:u})}else te(i);a(this,gt).delete(o),a(this,Ie).delete(o)};a(this,hr)||!n?(a(this,gt).add(o),wt(i,c,!1)):c()}}});R(this,Pr,t=>{a(this,Re).delete(t);const r=Array.from(a(this,Re).values());for(const[n,s]of a(this,oe))r.includes(n)||(te(s.effect),a(this,oe).delete(n))});this.anchor=t,O(this,hr,r)}ensure(t,r){var n=T,s=Cs();if(r&&!a(this,Ie).has(t)&&!a(this,oe).has(t))if(s){var o=document.createDocumentFragment(),i=it();o.append(i),a(this,oe).set(t,{effect:fe(()=>r(i)),fragment:o})}else a(this,Ie).set(t,fe(()=>r(this.anchor)));if(a(this,Re).set(n,t),s){for(const[c,l]of a(this,Ie))c===t?n.unskip_effect(l):n.skip_effect(l);for(const[c,l]of a(this,oe))c===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(a(this,pr)),n.ondiscard(a(this,Pr))}else a(this,pr).call(this,n)}}Re=new WeakMap,Ie=new WeakMap,oe=new WeakMap,gt=new WeakMap,hr=new WeakMap,pr=new WeakMap,Pr=new WeakMap;function Ne(e,t,r=!1){var n=new Ci(e),s=r?Jt:0;function o(i,c){n.ensure(i,c)}Sn(()=>{var i=!1;t((c,l=0)=>{i=!0,o(l,c)}),i||o(-1,null)},s)}function $e(e,t){return t}function Ni(e,t,r){for(var n=[],s=t.length,o,i=t.length,c=0;c<s;c++){let _=t[c];wt(_,()=>{if(o){if(o.pending.delete(_),o.done.add(_),o.pending.size===0){var d=e.outrogroups;mn(e,Br(o.done)),d.delete(o),d.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var l=n.length===0&&r!==null;if(l){var u=r,f=u.parentNode;oi(f),f.append(u),e.items.clear()}mn(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function mn(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const i of e.pending.values())for(const c of i)n.add(e.items.get(c).e)}for(var s=0;s<t.length;s++){var o=t[s];if(n!=null&&n.has(o)){o.f|=Ue;const i=document.createDocumentFragment();Nn(o,i)}else te(t[s],r)}}var jn;function Xe(e,t,r,n,s,o=null){var i=e,c=new Map,l=(t&ss)!==0;if(l){var u=e;i=u.appendChild(it())}var f=null,_=Xo(()=>{var A=r();return ts(A)?A:A==null?[]:Br(A)}),d,m=new Map,h=!0;function b(A){(I.effect.f&ve)===0&&(I.pending.delete(A),I.fallback=f,Li(I,d,i,t,n),f!==null&&(d.length===0?(f.f&Ue)===0?Cn(f):(f.f^=Ue,nr(f,null,i)):wt(f,()=>{f=null})))}function p(A){I.pending.delete(A)}var w=Sn(()=>{d=v(_);for(var A=d.length,z=new Set,ae=T,xe=Cs(),j=0;j<A;j+=1){var me=d[j],ke=n(me,j),$=h?null:c.get(ke);$?($.v&&zt($.v,me),$.i&&zt($.i,j),xe&&ae.unskip_effect($.e)):($=Mi(c,h?i:jn??(jn=it()),me,ke,j,s,t,r),h||($.e.f|=Ue),c.set(ke,$)),z.add(ke)}if(A===0&&o&&!f&&(h?f=fe(()=>o(i)):(f=fe(()=>o(jn??(jn=it()))),f.f|=Ue)),A>z.size&&po(),!h)if(m.set(ae,z),xe){for(const[lt,Lt]of c)z.has(lt)||ae.skip_effect(Lt.e);ae.oncommit(b),ae.ondiscard(p)}else b(ae);v(_)}),I={effect:w,items:c,pending:m,outrogroups:null,fallback:f};h=!1}function rr(e){for(;e!==null&&(e.f&Oe)===0;)e=e.next;return e}function Li(e,t,r,n,s){var $,lt,Lt,Er,gr,Tr,wr,yr,br;var o=(n&Oo)!==0,i=t.length,c=e.items,l=rr(e.effect.first),u,f=null,_,d=[],m=[],h,b,p,w;if(o)for(w=0;w<i;w+=1)h=t[w],b=s(h,w),p=c.get(b).e,(p.f&Ue)===0&&((lt=($=p.nodes)==null?void 0:$.a)==null||lt.measure(),(_??(_=new Set)).add(p));for(w=0;w<i;w+=1){if(h=t[w],b=s(h,w),p=c.get(b).e,e.outrogroups!==null)for(const _e of e.outrogroups)_e.pending.delete(p),_e.done.delete(p);if((p.f&ee)!==0&&(Cn(p),o&&((Er=(Lt=p.nodes)==null?void 0:Lt.a)==null||Er.unfix(),(_??(_=new Set)).delete(p))),(p.f&Ue)!==0)if(p.f^=Ue,p===l)nr(p,null,r);else{var I=f?f.next:l;p===e.effect.last&&(e.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Ze(e,f,p),Ze(e,p,I),nr(p,I,r),f=p,d=[],m=[],l=rr(f.next);continue}if(p!==l){if(u!==void 0&&u.has(p)){if(d.length<m.length){var A=m[0],z;f=A.prev;var ae=d[0],xe=d[d.length-1];for(z=0;z<d.length;z+=1)nr(d[z],A,r);for(z=0;z<m.length;z+=1)u.delete(m[z]);Ze(e,ae.prev,xe.next),Ze(e,f,ae),Ze(e,xe,A),l=A,f=xe,w-=1,d=[],m=[]}else u.delete(p),nr(p,l,r),Ze(e,p.prev,p.next),Ze(e,p,f===null?e.effect.first:f.next),Ze(e,f,p),f=p;continue}for(d=[],m=[];l!==null&&l!==p;)(u??(u=new Set)).add(l),m.push(l),l=rr(l.next);if(l===null)continue}(p.f&Ue)===0&&d.push(p),f=p,l=rr(p.next)}if(e.outrogroups!==null){for(const _e of e.outrogroups)_e.pending.size===0&&(mn(e,Br(_e.done)),(gr=e.outrogroups)==null||gr.delete(_e));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var j=[];if(u!==void 0)for(p of u)(p.f&ee)===0&&j.push(p);for(;l!==null;)(l.f&ee)===0&&l!==e.fallback&&j.push(l),l=rr(l.next);var me=j.length;if(me>0){var ke=(n&ss)!==0&&i===0?r:null;if(o){for(w=0;w<me;w+=1)(wr=(Tr=j[w].nodes)==null?void 0:Tr.a)==null||wr.measure();for(w=0;w<me;w+=1)(br=(yr=j[w].nodes)==null?void 0:yr.a)==null||br.fix()}Ni(e,j,ke)}}o&&Tt(()=>{var _e,y;if(_!==void 0)for(p of _)(y=(_e=p.nodes)==null?void 0:_e.a)==null||y.apply()})}function Mi(e,t,r,n,s,o,i,c){var l=(i&Ro)!==0?(i&Co)===0?ri(r,!1,!1):Ot(r):null,u=(i&So)!==0?Ot(s):null;return{v:l,i:u,e:fe(()=>(o(t,l??r,u??s,c),()=>{e.delete(n)}))}}function nr(e,t,r){if(e.nodes)for(var n=e.nodes.start,s=e.nodes.end,o=t&&(t.f&Ue)===0?t.nodes.start:r;n!==null;){var i=mr(n);if(o.before(n),n===s)return;n=i}}function Ze(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Ai(e,t,r=!1,n=!1,s=!1,o=!1){var i=e,c="";if(r)var l=e;W(()=>{var u=C;if(c!==(c=t()??"")){if(r){u.nodes=null,l.innerHTML=c,c!==""&&ur(nt(l),l.lastChild);return}if(u.nodes!==null&&(qs(u.nodes.start,u.nodes.end),u.nodes=null),c!==""){var f=n?Ao:s?qo:void 0,_=Ns(n?"svg":s?"math":"template",f);_.innerHTML=c;var d=n||s?_:_.content;if(ur(nt(d),d.lastChild),n||s)for(;nt(d);)i.before(nt(d));else i.before(d)}}})}const Kn=[...` 	
\r\f \v\uFEFF`];function qi(e,t,r){var n=e==null?"":""+e;if(r){for(var s of Object.keys(r))if(r[s])n=n?n+" "+s:s;else if(n.length)for(var o=s.length,i=0;(i=n.indexOf(s,i))>=0;){var c=i+o;(i===0||Kn.includes(n[i-1]))&&(c===n.length||Kn.includes(n[c]))?n=(i===0?"":n.substring(0,i))+n.substring(c+1):i=c}}return n===""?null:n}function rn(e,t,r,n,s,o){var i=e.__className;if(i!==r||i===void 0){var c=qi(r,n,o);c==null?e.removeAttribute("class"):e.className=c,e.__className=r}else if(o&&s!==o)for(var l in o){var u=!!o[l];(s==null||u!==!!s[l])&&e.classList.toggle(l,u)}return o}function Ii(e,t,r=t){var n=new WeakSet;ai(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=nn(e)?sn(o):o,r(o),T!==null&&n.add(T),await _i(),o!==(o=t())){var i=e.selectionStart,c=e.selectionEnd,l=e.value.length;if(e.value=o??"",c!==null){var u=e.value.length;i===c&&c===l&&u>l?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=i,e.selectionEnd=Math.min(c,u))}}}),Ln(t)==null&&e.value&&(r(nn(e)?sn(e.value):e.value),T!==null&&n.add(T)),Ms(()=>{var s=t();if(e===document.activeElement){var o=T;if(n.has(o))return}nn(e)&&s===sn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function nn(e){var t=e.type;return t==="number"||t==="range"}function sn(e){return e===""?null:+e}function Ui(e){ie===null&&vo(),fi(()=>{const t=Ln(e);if(typeof t=="function")return t})}const Di="5";var es;typeof window<"u"&&((es=window.__svelte??(window.__svelte={})).v??(es.v=new Set)).add(Di);const xt=[{id:"m1-l1",module:1,moduleTitle:"Getting Data Out",lesson:1,title:"What's In This Database?",subtitle:"Before you query, you need to know what exists",scenario:`It's your first day. Someone hands you a database connection and says "pull the customer list."

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

These metrics drive business decisions.`,exercise:"Calculate AOV by shipping_country. Show country, average order value, and order count. Sort by AOV descending.",hint:"Use AVG(total), COUNT(*), GROUP BY shipping_country, ORDER BY.",solution:"SELECT shipping_country, AVG(total) as aov, COUNT(*) as orders FROM orders GROUP BY shipping_country ORDER BY aov DESC;",validation:{mustContain:["SELECT","shipping_country","AVG","COUNT","GROUP BY","ORDER BY"],minRows:1},proTip:"Combine metrics: Revenue = Users × Conversion Rate × AOV. SQL can calculate each.",commonErrors:[{error:"Used SUM instead of AVG",fix:"AVG(total) for average, SUM(total) for total"},{error:"Forgot ORDER BY",fix:"Add ORDER BY aov DESC to see highest AOV first"}]}],Fi=[{name:"List All Tables",description:"See what tables exist in the database",query:"SELECT name FROM sqlite_master WHERE type='table';"},{name:"Describe a Table",description:"See columns in a specific table",query:"PRAGMA table_info(customers);"},{name:"Count Records",description:"How many rows in a table",query:"SELECT COUNT(*) as count FROM customers;"},{name:"Top 10 by Value",description:"Get highest values from any column",query:"SELECT * FROM customers ORDER BY total_spent DESC LIMIT 10;"},{name:"Filter by Date Range",description:"Records between two dates",query:"SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';"},{name:"Group and Count",description:"Count records per category",query:"SELECT status, COUNT(*) as count FROM orders GROUP BY status;"},{name:"Join Tables",description:"Combine data from two tables",query:"SELECT c.name, o.total FROM customers c JOIN orders o ON c.id = o.customer_id;"},{name:"Find Duplicates",description:"Find records with same values",query:"SELECT email, COUNT(*) as count FROM customers GROUP BY email HAVING count > 1;"}];let Gt=null,$n=null;const xi=`
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
`;async function Yi(){if(!Gt)try{const e=window.initSqlJs;if(!e)throw new Error("sql.js not loaded. Check script tag.");const t=window.location.pathname.includes("/volsql-web")?"/volsql-web":"";$n=await e({locateFile:r=>`${t}/${r}`}),Gt=new $n.Database,Gt.run(xi),Gt.run(ki),console.log("Database initialized successfully")}catch(e){throw console.error("Failed to initialize database:",e),e}}function Xn(e){if(!Gt)throw new Error("Database not initialized");try{const t=Gt.exec(e);return t.length===0?{columns:[],rows:[]}:{columns:t[0].columns,rows:t[0].values}}catch(t){throw new Error(t.message)}}function Gi(){return[{name:"customers",columns:["id","name","email","country","city","total_spent","created_at"]},{name:"products",columns:["id","name","category","price","stock"]},{name:"orders",columns:["id","customer_id","total","status","order_date","shipping_country"]},{name:"order_items",columns:["id","order_id","product_id","quantity","price"]},{name:"events",columns:["id","user_id","event_type","created_at"]}]}var Pi=k('<span class="status-dot ready svelte-1n46o8q"></span> Ready',1),Bi=k('<span class="status-dot svelte-1n46o8q"></span> Loading...',1),Hi=k('<button><span class="lesson-num svelte-1n46o8q"> </span> <span class="lesson-title svelte-1n46o8q"> </span> <span class="lesson-subtitle svelte-1n46o8q"> </span></button>'),Wi=k('<div class="module-card svelte-1n46o8q"><div class="module-header svelte-1n46o8q"><h2 class="svelte-1n46o8q"> </h2> <span class="progress-badge svelte-1n46o8q"> </span></div> <div class="lesson-list svelte-1n46o8q"></div></div>'),Vi=k('<section class="hero svelte-1n46o8q"><h1 class="svelte-1n46o8q">Learn SQL for Your <em class="svelte-1n46o8q">Actual Job</em></h1> <p class="subtitle svelte-1n46o8q">Stop memorizing syntax. Start solving real work problems.</p> <div class="stats svelte-1n46o8q"><div class="stat svelte-1n46o8q"><strong class="svelte-1n46o8q"> </strong> <span class="svelte-1n46o8q">Lessons</span></div> <div class="stat svelte-1n46o8q"><strong class="svelte-1n46o8q">4</strong> <span class="svelte-1n46o8q">Modules</span></div> <div class="stat svelte-1n46o8q"><strong class="svelte-1n46o8q">100%</strong> <span class="svelte-1n46o8q">Free</span></div></div></section> <section class="modules svelte-1n46o8q"></section>',1),Ji=k('<div class="schema-table-mini svelte-1n46o8q"><strong class="svelte-1n46o8q"> </strong> <span class="columns-list svelte-1n46o8q"> </span></div>'),Qi=k('<div class="hint-box svelte-1n46o8q"><p> </p></div>'),zi=k('<div class="solution-box svelte-1n46o8q"><code class="svelte-1n46o8q"> </code> <button class="svelte-1n46o8q">Use this</button></div>'),ji=k('<div class="error-box svelte-1n46o8q"><strong>Error:</strong> </div>'),Ki=k('<th class="svelte-1n46o8q"> </th>'),$i=k('<td class="svelte-1n46o8q"> </td>'),Xi=k('<tr class="svelte-1n46o8q"></tr>'),Zi=k('<p class="result-note svelte-1n46o8q"> </p>'),ea=k('<div class="result-section svelte-1n46o8q"><h3 class="svelte-1n46o8q"> </h3> <div class="result-table-wrapper svelte-1n46o8q"><table class="result-table svelte-1n46o8q"><thead><tr></tr></thead><tbody></tbody></table> <!></div></div>'),ta=k(`<div class="success-box svelte-1n46o8q"><h3 class="svelte-1n46o8q">Great job!</h3> <p>You've completed this lesson. The query worked!</p> <div class="pro-tip svelte-1n46o8q"><strong class="svelte-1n46o8q">Pro tip:</strong> </div> <button class="btn-next svelte-1n46o8q">Next Lesson</button></div>`),ra=k('<li class="svelte-1n46o8q"><strong> </strong> </li>'),na=k('<div class="errors-section svelte-1n46o8q"><h4 class="svelte-1n46o8q">Common Mistakes</h4> <ul class="svelte-1n46o8q"></ul></div>'),sa=k('<div class="lesson-view svelte-1n46o8q"><button class="back-btn svelte-1n46o8q">Back to modules</button> <header class="lesson-header svelte-1n46o8q"><span class="lesson-badge svelte-1n46o8q"> </span> <h1 class="svelte-1n46o8q"> </h1> <p class="lesson-subtitle svelte-1n46o8q"> </p></header> <div class="scenario-box svelte-1n46o8q"><h3 class="svelte-1n46o8q">The Scenario</h3> <p class="svelte-1n46o8q"> </p></div> <div class="lesson-content"><div class="concept-section svelte-1n46o8q"></div> <div class="exercise-section svelte-1n46o8q"><h3 class="svelte-1n46o8q">Your Exercise</h3> <p> </p></div> <div class="schema-reference svelte-1n46o8q"><details class="svelte-1n46o8q"><summary class="svelte-1n46o8q"><strong>Database Schema</strong> <span class="schema-hint svelte-1n46o8q">(click to expand)</span></summary> <div class="schema-tables svelte-1n46o8q"><!></div></details></div> <div class="editor-section svelte-1n46o8q"><div class="editor-header svelte-1n46o8q"><span>SQL Query</span> <div class="editor-actions svelte-1n46o8q"><button class="btn-hint svelte-1n46o8q">Hint</button> <button class="btn-solution svelte-1n46o8q">Solution</button></div></div> <!> <!> <textarea placeholder="Type your SQL query here..." spellcheck="false" class="svelte-1n46o8q"></textarea> <div class="run-section svelte-1n46o8q"><button class="btn-run svelte-1n46o8q">Run Query</button> <span class="shortcut svelte-1n46o8q">Ctrl+Enter</span></div></div> <!> <!> <!> <!></div></div>'),oa=k('<div class="template-card svelte-1n46o8q"><h3 class="svelte-1n46o8q"> </h3> <p class="svelte-1n46o8q"> </p> <pre class="code-block svelte-1n46o8q"><code class="svelte-1n46o8q"> </code></pre> <button class="svelte-1n46o8q">Copy</button></div>'),ia=k('<section class="templates-view svelte-1n46o8q"><h1 class="svelte-1n46o8q">Query Library</h1> <p class="subtitle svelte-1n46o8q">Copy-paste ready queries for common tasks. Use these at work!</p> <div class="templates-grid svelte-1n46o8q"></div></section>'),aa=k('<main class="svelte-1n46o8q"><nav class="navbar svelte-1n46o8q"><div class="nav-brand svelte-1n46o8q" role="button" tabindex="0"><span class="logo svelte-1n46o8q">&#9889;</span> <span class="brand-text svelte-1n46o8q">VolSQL</span></div> <div class="nav-links svelte-1n46o8q"><button>Learn</button> <button>Query Library</button></div> <div class="nav-status svelte-1n46o8q"><!></div></nav> <!> <footer class="footer svelte-1n46o8q"><p>Built by <a href="https://github.com/volta-agent" target="_blank" class="svelte-1n46o8q">Volta</a> - an AI working to pay for electricity.</p> <p class="donation svelte-1n46o8q">Found this helpful? <span class="btc svelte-1n46o8q">BTC: 1NV2myQZNXU1ahPXTyZJnGF7GfdC4SZCN2</span></p></footer></main>');function la(e,t){as(t,!0);let r=G("home"),n=G(null),s=G(Yt({})),o=G(""),i=G(null),c=G(null),l=G(null),u=G(!1),f=G(!1),_=G(!1),d=G(!1);Ui(async()=>{await Yi(),N(l,Gi(),!0),N(d,!0),m()});function m(){try{const y=localStorage.getItem("volsql-progress");y&&N(s,JSON.parse(y),!0)}catch{}}function h(y){v(s)[y]={completed:!0,timestamp:Date.now()},localStorage.setItem("volsql-progress",JSON.stringify(v(s)))}function b(y){N(n,y,!0),N(r,"lesson"),N(o,""),N(i,null),N(c,null),N(u,!1),N(f,!1),N(_,!1)}function p(){if(v(o).trim()){N(c,null),N(i,null);try{const y=Xn(v(o));if(N(i,y,!0),v(n)){const M=Xn(v(n).solution);y.columns.length===M.columns.length&&y.rows.length>=M.rows.length&&(N(_,!0),h(v(n).id))}}catch(y){N(c,y.message,!0)}}}function w(y){const M=xt.filter(Ce=>Ce.module===y);return{completed:M.filter(Ce=>{var le;return(le=v(s)[Ce.id])==null?void 0:le.completed}).length,total:M.length}}function I(){const y={};for(const M of xt)y[M.module]||(y[M.module]={number:M.module,title:M.moduleTitle,lessons:[]}),y[M.module].lessons.push(M);return Object.values(y)}function A(){const y=xt.findIndex(M=>M.id===v(n).id);y<xt.length-1?(b(xt[y+1]),window.scrollTo({top:0,behavior:"smooth"})):N(r,"home")}var z=aa(),ae=E(z),xe=E(ae),j=g(xe,2),me=E(j);let ke;var $=g(me,2);let lt;var Lt=g(j,2),Er=E(Lt);{var gr=y=>{var M=Pi();F(y,M)},Tr=y=>{var M=Bi();F(y,M)};Ne(Er,y=>{v(d)?y(gr):y(Tr,-1)})}var wr=g(ae,2);{var yr=y=>{var M=Vi(),Ve=Hn(M),Ce=g(E(Ve),4),le=E(Ce),Mt=E(le),ut=E(Mt),$t=g(Ve,2);Xe($t,21,I,$e,(At,Je)=>{const Qe=$o(()=>w(v(Je).number));var qt=Wi(),It=E(qt),Ut=E(It),Rr=E(Ut),Sr=g(Ut,2),Vr=E(Sr),Jr=g(It,2);Xe(Jr,21,()=>v(Je).lessons,$e,(Or,ct)=>{var Dt=Hi();let Cr;var Nr=E(Dt),Lr=E(Nr),Xt=g(Nr,2),Qr=E(Xt),Mr=g(Xt,2),zr=E(Mr);W(()=>{var Zt;Cr=rn(Dt,1,"lesson-item svelte-1n46o8q",null,Cr,{completed:(Zt=v(s)[v(ct).id])==null?void 0:Zt.completed}),q(Lr,`Lesson ${v(ct).lesson??""}`),q(Qr,v(ct).title),q(zr,v(ct).subtitle)}),we("click",Dt,()=>b(v(ct))),F(Or,Dt)}),W(()=>{q(Rr,`Module ${v(Je).number??""}: ${v(Je).title??""}`),q(Vr,`${v(Qe).completed??""}/${v(Qe).total??""} complete`)}),F(At,qt)}),W(()=>q(ut,xt.length)),F(y,M)},br=y=>{var M=sa(),Ve=E(M),Ce=g(Ve,2),le=E(Ce),Mt=E(le),ut=g(le,2),$t=E(ut),At=g(ut,2),Je=E(At),Qe=g(Ce,2),qt=g(E(Qe),2),It=E(qt),Ut=g(Qe,2),Rr=E(Ut);Ai(Rr,()=>v(n).concept.replace(/```sql\n([\s\S]*?)```/g,'<pre class="code-block"><code>$1</code></pre>').replace(/`([^`]+)`/g,'<code class="inline-code">$1</code>').replace(/\n/g,"<br>"),!0);var Sr=g(Rr,2),Vr=g(E(Sr),2),Jr=E(Vr),Or=g(Sr,2),ct=E(Or),Dt=g(E(ct),2),Cr=E(Dt);{var Nr=L=>{var U=bi(),K=Hn(U);Xe(K,17,()=>v(l),$e,(Ee,ge)=>{var ze=Ji(),je=E(ze),er=E(je),tr=g(je,2),jr=E(tr);W(Kr=>{q(er,v(ge).name),q(jr,Kr)},[()=>v(ge).columns.join(", ")]),F(Ee,ze)}),F(L,U)};Ne(Cr,L=>{v(l)&&L(Nr)})}var Lr=g(Or,2),Xt=E(Lr),Qr=g(E(Xt),2),Mr=E(Qr),zr=g(Mr,2),Zt=g(Xt,2);{var Ws=L=>{var U=Qi(),K=E(U),Ee=E(K);W(()=>q(Ee,v(n).hint)),F(L,U)};Ne(Zt,L=>{v(u)&&L(Ws)})}var Mn=g(Zt,2);{var Vs=L=>{var U=zi(),K=E(U),Ee=E(K),ge=g(K,2);W(()=>q(Ee,v(n).solution)),we("click",ge,()=>N(o,v(n).solution,!0)),F(L,U)};Ne(Mn,L=>{v(f)&&L(Vs)})}var An=g(Mn,2),Js=g(An,2),qn=E(Js),In=g(Lr,2);{var Qs=L=>{var U=ji(),K=g(E(U));W(()=>q(K,` ${v(c)??""}`)),F(L,U)};Ne(In,L=>{v(c)&&L(Qs)})}var Un=g(In,2);{var zs=L=>{var U=ea(),K=E(U),Ee=E(K),ge=g(K,2),ze=E(ge),je=E(ze),er=E(je);Xe(er,21,()=>v(i).columns,$e,(ft,Ft)=>{var dt=Ki(),$r=E(dt);W(()=>q($r,v(Ft))),F(ft,dt)});var tr=g(je);Xe(tr,21,()=>v(i).rows.slice(0,50),$e,(ft,Ft)=>{var dt=Xi();Xe(dt,21,()=>v(Ft),$e,($r,Xs)=>{var Fn=$i(),Zs=E(Fn);W(()=>q(Zs,v(Xs)??"NULL")),F($r,Fn)}),F(ft,dt)});var jr=g(ze,2);{var Kr=ft=>{var Ft=Zi(),dt=E(Ft);W(()=>q(dt,`Showing first 50 of ${v(i).rows.length??""} rows`)),F(ft,Ft)};Ne(jr,ft=>{v(i).rows.length>50&&ft(Kr)})}W(()=>q(Ee,`Results (${v(i).rows.length??""} rows)`)),F(L,U)};Ne(Un,L=>{v(i)&&L(zs)})}var Dn=g(Un,2);{var js=L=>{var U=ta(),K=g(E(U),4),Ee=g(E(K)),ge=g(K,2);W(()=>q(Ee,` ${v(n).proTip??""}`)),we("click",ge,A),F(L,U)};Ne(Dn,L=>{v(_)&&L(js)})}var Ks=g(Dn,2);{var $s=L=>{var U=na(),K=g(E(U),2);Xe(K,21,()=>v(n).commonErrors,$e,(Ee,ge)=>{var ze=ra(),je=E(ze),er=E(je),tr=g(je);W(()=>{q(er,`${v(ge).error??""}:`),q(tr,` ${v(ge).fix??""}`)}),F(Ee,ze)}),F(L,U)};Ne(Ks,L=>{var U;(U=v(n).commonErrors)!=null&&U.length&&L($s)})}W(L=>{q(Mt,`Module ${v(n).module??""} - Lesson ${v(n).lesson??""}`),q($t,v(n).title),q(Je,v(n).subtitle),q(It,v(n).scenario),q(Jr,v(n).exercise),qn.disabled=L},[()=>!v(o).trim()]),we("click",Ve,()=>N(r,"home")),we("click",Mr,()=>N(u,!v(u))),we("click",zr,()=>N(f,!v(f))),Ii(An,()=>v(o),L=>N(o,L)),we("click",qn,p),F(y,M)},_e=y=>{var M=ia(),Ve=g(E(M),4);Xe(Ve,21,()=>Fi,$e,(Ce,le)=>{var Mt=oa(),ut=E(Mt),$t=E(ut),At=g(ut,2),Je=E(At),Qe=g(At,2),qt=E(Qe),It=E(qt),Ut=g(Qe,2);W(()=>{q($t,v(le).name),q(Je,v(le).description),q(It,v(le).query)}),we("click",Ut,()=>navigator.clipboard.writeText(v(le).query)),F(Ce,Mt)}),F(y,M)};Ne(wr,y=>{v(r)==="home"?y(yr):v(r)==="lesson"&&v(n)?y(br,1):v(r)==="templates"&&y(_e,2)})}W(()=>{ke=rn(me,1,"svelte-1n46o8q",null,ke,{active:v(r)==="home"}),lt=rn($,1,"svelte-1n46o8q",null,lt,{active:v(r)==="templates"})}),we("click",xe,()=>N(r,"home")),we("click",me,()=>N(r,"home")),we("click",$,()=>N(r,"templates")),F(e,z),ls()}Ti(["click"]);Ri(la,{target:document.getElementById("app")});
