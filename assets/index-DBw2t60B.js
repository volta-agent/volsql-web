(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.prototype,s=Array.prototype,c=Object.getPrototypeOf,l=Object.isExtensible,u=()=>{};function d(e){for(var t=0;t<e.length;t++)e[t]()}function f(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var p=1024,m=2048,h=4096,g=8192,_=16384,v=32768,ee=1<<25,y=65536,b=1<<19,x=1<<20,te=1<<25,S=65536,C=1<<21,ne=1<<22,re=1<<23,ie=Symbol(`$state`),w=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"};globalThis.document?.contentType;function ae(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function oe(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function se(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function ce(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function le(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function ue(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function de(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function fe(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function pe(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function me(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function he(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var ge={},T=Symbol(),_e=`http://www.w3.org/2000/svg`,ve=`http://www.w3.org/1998/Math/MathML`;function ye(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function be(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var E=!1;function xe(e){E=e}var D;function O(e){if(e===null)throw ye(),ge;return D=e}function Se(){return O(Wt(D))}function k(e){if(E){if(Wt(D)!==null)throw ye(),ge;D=e}}function Ce(e=1){if(E){for(var t=e,n=D;t--;)n=Wt(n);D=n}}function we(e=!0){for(var t=0,n=D;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=Wt(n);e&&n.remove(),n=i}}function Te(e){if(!e||e.nodeType!==8)throw ye(),ge;return e.data}function Ee(e){return e===this.v}function De(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Oe(e){return!De(e,this.v)}var ke=!1,Ae=!1,A=null;function je(e){A=e}function Me(e,t=!1,n){A={p:A,i:!1,c:null,e:null,s:e,x:null,r:G,l:Ae&&!t?{s:null,u:null,$:[]}:null}}function Ne(e){var t=A,n=t.e;if(n!==null){t.e=null;for(var r of n)cn(r)}return e!==void 0&&(t.x=e),t.i=!0,A=t.p,e??{}}function Pe(){return!Ae||A!==null&&A.l===null}var Fe=[];function Ie(){var e=Fe;Fe=[],d(e)}function Le(e){if(Fe.length===0&&!Ye){var t=Fe;queueMicrotask(()=>{t===Fe&&Ie()})}Fe.push(e)}function Re(){for(;Fe.length>0;)Ie()}function ze(e){var t=G;if(t===null)return U.f|=re,e;if(!(t.f&32768)&&!(t.f&4))throw e;Be(e,t)}function Be(e,t){for(;t!==null;){if(t.f&128){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}var Ve=~(m|h|p);function j(e,t){e.f=e.f&Ve|t}function He(e){e.f&512||e.deps===null?j(e,p):j(e,h)}function Ue(e){if(e!==null)for(let t of e)!(t.f&2)||!(t.f&65536)||(t.f^=S,Ue(t.deps))}function We(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),Ue(e.deps),j(e,p)}var Ge=!1,Ke=new Set,M=null,qe=null,N=null,Je=null,Ye=!1,Xe=!1,Ze=null,Qe=null,$e=0,et=1,tt=class e{id=et++;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=new Map;#r=new Map;#i=null;#a=[];#o=[];#s=new Set;#c=new Set;#l=new Map;is_fork=!1;#u=!1;#d=new Set;#f(){return this.is_fork||this.#r.size>0}#p(){for(let n of this.#d)for(let r of n.#r.keys()){for(var e=!1,t=r;t.parent!==null;){if(this.#l.has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1}skip_effect(e){this.#l.has(e)||this.#l.set(e,{d:[],m:[]})}unskip_effect(e){var t=this.#l.get(e);if(t){this.#l.delete(e);for(var n of t.d)j(n,m),this.schedule(n);for(n of t.m)j(n,h),this.schedule(n)}}#m(){if($e++>1e3&&(Ke.delete(this),rt()),!this.#f()){for(let e of this.#s)this.#c.delete(e),j(e,m),this.schedule(e);for(let e of this.#c)j(e,h),this.schedule(e)}let t=this.#a;this.#a=[],this.apply();var n=Ze=[],r=[],i=Qe=[];for(let e of t)try{this.#h(e,n,r)}catch(t){throw ut(e),t}if(M=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(Ze=null,Qe=null,this.#f()||this.#p()){this.#g(r),this.#g(n);for(let[e,t]of this.#l)lt(e,t)}else{this.#n.size===0&&Ke.delete(this),this.#s.clear(),this.#c.clear();for(let e of this.#e)e(this);this.#e.clear(),qe=this,at(r),at(n),qe=null,this.#i?.resolve()}var o=M;if(this.#a.length>0){let e=o??=this;e.#a.push(...this.#a.filter(t=>!e.#a.includes(t)))}o!==null&&(Ke.add(o),o.#m()),Ke.has(this)||this.#_()}#h(e,t,n){e.f^=p;for(var r=e.first;r!==null;){var i=r.f,a=(i&96)!=0;if(!(a&&i&1024||i&8192||this.#l.has(r))&&r.fn!==null){a?r.f^=p:i&4?t.push(r):ke&&i&16777224?n.push(r):In(r)&&(i&16&&this.#c.add(r),Vn(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#g(e){for(var t=0;t<e.length;t+=1)We(e[t],this.#s,this.#c)}capture(e,t,n=!1){t!==T&&!this.previous.has(e)&&this.previous.set(e,t),e.f&8388608||(this.current.set(e,[e.v,n]),N?.set(e,e.v))}activate(){M=this}deactivate(){M=null,N=null}flush(){try{Xe=!0,M=this,this.#m()}finally{$e=0,Je=null,Ze=null,Qe=null,Xe=!1,M=null,N=null,At.clear()}}discard(){for(let e of this.#t)e(this);this.#t.clear(),Ke.delete(this)}register_created_effect(e){this.#o.push(e)}#_(){for(let l of Ke){var e=l.id<this.id,t=[];for(let[r,[i,a]]of this.current){if(l.current.has(r)){var n=l.current.get(r)[0];if(e&&i!==n)l.current.set(r,[i,a]);else continue}t.push(r)}var r=[...l.current.keys()].filter(e=>!this.current.has(e));if(r.length===0)e&&l.discard();else if(t.length>0){l.activate();var i=new Set,a=new Map;for(var o of t)ot(o,r,i,a);a=new Map;var s=[...l.current.keys()].filter(e=>this.current.has(e)?this.current.get(e)[0]!==e:!0);for(let e of this.#o)!(e.f&155648)&&st(e,s,a)&&(e.f&4194320?(j(e,m),l.schedule(e)):l.#s.add(e));if(l.#a.length>0){l.apply();for(var c of l.#a)l.#h(c,[],[]);l.#a=[]}l.deactivate()}}for(let e of Ke)e.#d.has(this)&&(e.#d.delete(this),e.#d.size===0&&!e.#f()&&(e.activate(),e.#m()))}increment(e,t){let n=this.#n.get(t)??0;if(this.#n.set(t,n+1),e){let e=this.#r.get(t)??0;this.#r.set(t,e+1)}}decrement(e,t,n){let r=this.#n.get(t)??0;if(r===1?this.#n.delete(t):this.#n.set(t,r-1),e){let e=this.#r.get(t)??0;e===1?this.#r.delete(t):this.#r.set(t,e-1)}this.#u||n||(this.#u=!0,Le(()=>{this.#u=!1,this.flush()}))}transfer_effects(e,t){for(let t of e)this.#s.add(t);for(let e of t)this.#c.add(e);e.clear(),t.clear()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#i??=f()).promise}static ensure(){if(M===null){let t=M=new e;Xe||(Ke.add(M),Ye||Le(()=>{M===t&&t.flush()}))}return M}apply(){if(!ke||!this.is_fork&&Ke.size===1){N=null;return}N=new Map;for(let[e,[t]]of this.current)N.set(e,t);for(let n of Ke)if(!(n===this||n.is_fork)){var e=!1,t=!1;if(n.id<this.id)for(let[r,[,i]]of n.current)i||(e||=this.current.has(r),t||=!this.current.has(r));if(e&&t)this.#d.add(n);else for(let[e,t]of n.previous)N.has(e)||N.set(e,t)}}schedule(e){if(Je=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(Ze!==null&&t===G&&(ke||(U===null||!(U.f&2))&&!Ge))return;if(n&96){if(!(n&1024))return;t.f^=p}}this.#a.push(t)}};function nt(e){var t=Ye;Ye=!0;try{var n;for(e&&(M!==null&&!M.is_fork&&M.flush(),n=e());;){if(Re(),M===null)return n;M.flush()}}finally{Ye=t}}function rt(){try{de()}catch(e){Be(e,Je)}}var it=null;function at(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&In(r)&&(it=new Set,Vn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&_n(r),it?.size>0)){At.clear();for(let e of it){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)it.has(n)&&(it.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||Vn(n)}}it.clear()}}it=null}}function ot(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let i of e.reactions){let e=i.f;e&2?ot(i,t,n,r):e&4194320&&!(e&2048)&&st(i,t,r)&&(j(i,m),ct(i))}}function st(e,t,r){let i=r.get(e);if(i!==void 0)return i;if(e.deps!==null)for(let i of e.deps){if(n.call(t,i))return!0;if(i.f&2&&st(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ct(e){M.schedule(e)}function lt(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),j(e,p);for(var n=e.first;n!==null;)lt(n,t),n=n.next}}function ut(e){j(e,p);for(var t=e.first;t!==null;)ut(t),t=t.next}function dt(e){let t=0,n=Mt(0),r;return()=>{an()&&(X(n),dn(()=>(t===0&&(r=Gn(()=>e(()=>It(n)))),t+=1,()=>{Le(()=>{--t,t===0&&(r?.(),r=void 0,It(n))})})))}}var ft=y|b;function pt(e,t,n,r){new mt(e,t,n,r)}var mt=class{parent;is_pending=!1;transform_error;#e;#t=E?D:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=dt(()=>(this.#m=Mt(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=G;t.b=this,t.f|=128,n(e)},this.parent=G.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=fn(()=>{if(E){let e=this.#t;Se();let t=e.data===`[!`;if(e.data.startsWith(`[?`)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#v():this.#g()}else this.#y()},ft),E&&(this.#e=D)}#g(){try{this.#a=V(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed;t&&(this.#s=V(()=>{t(this.#e,()=>e,()=>()=>{})}))}#v(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=V(()=>e(this.#e)),Le(()=>{var e=this.#c=document.createDocumentFragment(),t=I();e.append(t),this.#a=this.#x(()=>V(()=>this.#r(t))),this.#u===0&&(this.#e.before(e),this.#c=null,vn(this.#o,()=>{this.#o=null}),this.#b(M))}))}#y(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=V(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Sn(this.#a,e);let t=this.#n.pending;this.#o=V(()=>t(this.#e))}else this.#b(M)}catch(e){this.error(e)}}#b(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){We(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#x(e){var t=G,n=U,r=A;On(this.#i),W(this.#i),je(this.#i.ctx);try{return tt.ensure(),e()}catch(e){return ze(e),null}finally{On(t),W(n),je(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#u+=e,this.#u===0&&(this.#b(t),this.#o&&vn(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#S(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,Le(()=>{this.#d=!1,this.#m&&Pt(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),X(this.#m)}error(e){var t=this.#n.onerror;let n=this.#n.failed;if(!t&&!n)throw e;this.#a&&=(H(this.#a),null),this.#o&&=(H(this.#o),null),this.#s&&=(H(this.#s),null),E&&(O(this.#t),Ce(),O(we()));var r=!1,i=!1;let a=()=>{if(r){be();return}r=!0,i&&he(),this.#s!==null&&vn(this.#s,()=>{this.#s=null}),this.#x(()=>{this.#y()})},o=e=>{try{i=!0,t?.(e,a),i=!1}catch(e){Be(e,this.#i&&this.#i.parent)}n&&(this.#s=this.#x(()=>{try{return V(()=>{var t=G;t.b=this,t.f|=128,n(this.#e,()=>e,()=>a)})}catch(e){return Be(e,this.#i.parent),null}}))};Le(()=>{var t;try{t=this.transform_error(e)}catch(e){Be(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(o,e=>Be(e,this.#i&&this.#i.parent)):o(t)})}};function ht(e,t,n,r){let i=Pe()?yt:St;var a=e.filter(e=>!e.settled);if(n.length===0&&a.length===0){r(t.map(i));return}var o=G,s=gt(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function l(e){s();try{r(e)}catch(e){o.f&16384||Be(e,o)}_t()}if(n.length===0){c.then(()=>l(t.map(i)));return}var u=vt();function d(){Promise.all(n.map(e=>bt(e))).then(e=>l([...t.map(i),...e])).catch(e=>Be(e,o)).finally(()=>u())}c?c.then(()=>{s(),d(),_t()}):d()}function gt(){var e=G,t=U,n=A,r=M;return function(i=!0){On(e),W(t),je(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function _t(e=!0){On(null),W(null),je(null),e&&M?.deactivate()}function vt(){var e=G,t=e.b,n=M,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),(i=!1)=>{t.update_pending_count(-1,n),n.decrement(r,e,i)}}function yt(e){var t=2|m,n=U!==null&&U.f&2?U:null;return G!==null&&(G.f|=b),{ctx:A,deps:null,effects:null,equals:Ee,f:t,fn:e,reactions:null,rv:0,v:T,wv:0,parent:n??G,ac:null}}function bt(e,t,n){let r=G;r===null&&oe();var i=void 0,a=Mt(T),o=!U,s=new Map;return un(()=>{var t=G,n=f();i=n.promise;try{Promise.resolve(e()).then(n.resolve,n.reject).finally(_t)}catch(e){n.reject(e),_t()}var c=M;if(o){if(t.f&32768)var l=vt();if(r.b.is_rendered())s.get(c)?.reject(w),s.delete(c);else{for(let e of s.values())e.reject(w);s.clear()}s.set(c,n)}let u=(e,n=void 0)=>{if(l&&l(n===w),!(n===w||t.f&16384)){if(c.activate(),n)a.f|=re,Pt(a,n);else{a.f&8388608&&(a.f^=re),Pt(a,e);for(let[e,t]of s){if(s.delete(e),e===c)break;t.reject(w)}}c.deactivate()}};n.promise.then(u,e=>u(null,e||`unknown`))}),on(()=>{for(let e of s.values())e.reject(w)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function xt(e){let t=yt(e);return ke||kn(t),t}function St(e){let t=yt(e);return t.equals=Oe,t}function Ct(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)H(t[n])}}function wt(e){for(var t=e.parent;t!==null;){if(!(t.f&2))return t.f&16384?null:t;t=t.parent}return null}function Tt(e){var t,n=G;On(wt(e));try{e.f&=~S,Ct(e),t=Rn(e)}finally{On(n)}return t}function Et(e){var t=e.v,n=Tt(e);if(!e.equals(n)&&(e.wv=Fn(),(!M?.is_fork||e.deps===null)&&(e.v=n,M?.capture(e,t,!0),e.deps===null))){j(e,p);return}Tn||(N===null?He(e):(an()||M?.is_fork)&&N.set(e,n))}function Dt(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(w),t.teardown=u,t.ac=null,Bn(t,0),mn(t))}function Ot(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&Vn(t)}var kt=new Set,At=new Map,jt=!1;function Mt(e,t){return{f:0,v:e,reactions:null,equals:Ee,rv:0,wv:0}}function P(e,t){let n=Mt(e,t);return kn(n),n}function Nt(e,t=!1,n=!0){let r=Mt(e);return t||(r.equals=Oe),Ae&&n&&A!==null&&A.l!==null&&(A.l.s??=[]).push(r),r}function F(e,t,r=!1){return U!==null&&(!Dn||U.f&131072)&&Pe()&&U.f&4325394&&(K===null||!n.call(K,e))&&me(),Pt(e,r?Rt(t):t,Qe)}function Pt(e,t,n=null){if(!e.equals(t)){var r=e.v;Tn?At.set(e,t):At.set(e,r),e.v=t;var i=tt.ensure();if(i.capture(e,r),e.f&2){let t=e;e.f&2048&&Tt(t),N===null&&He(t)}e.wv=Fn(),Lt(e,m,n),Pe()&&G!==null&&G.f&1024&&!(G.f&96)&&(Y===null?An([e]):Y.push(e)),!i.is_fork&&kt.size>0&&!jt&&Ft()}return t}function Ft(){jt=!1;for(let e of kt)e.f&1024&&j(e,h),In(e)&&Vn(e);kt.clear()}function It(e){F(e,e.v+1)}function Lt(e,t,n){var r=e.reactions;if(r!==null)for(var i=Pe(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(!(!i&&s===G)){var l=(c&m)===0;if(l&&j(s,t),c&2){var u=s;N?.delete(u),c&65536||(c&512&&(s.f|=S),Lt(u,h,n))}else if(l){var d=s;c&16&&it!==null&&it.add(d),n===null?ct(d):n.push(d)}}}}function Rt(t){if(typeof t!=`object`||!t||ie in t)return t;let n=c(t);if(n!==o&&n!==s)return t;var r=new Map,i=e(t),l=P(0),u=null,d=Nn,f=e=>{if(Nn===d)return e();var t=U,n=Nn;W(null),Pn(d);var r=e();return W(t),Pn(n),r};return i&&r.set(`length`,P(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&fe();var i=r.get(t);return i===void 0?f(()=>{var e=P(n.value,u);return r.set(t,e),e}):F(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>P(T,u));r.set(t,e),It(l)}}else F(n,T),It(l);return!0},get(e,n,i){if(n===ie)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||a(e,n)?.writable)&&(o=f(()=>P(Rt(s?e[n]:T),u)),r.set(n,o)),o!==void 0){var c=X(o);return c===T?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=X(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==T)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===ie)return!0;var n=r.get(t),i=n!==void 0&&n.v!==T||Reflect.has(e,t);return(n!==void 0||G!==null&&(!i||a(e,t)?.writable))&&(n===void 0&&(n=f(()=>P(i?Rt(e[t]):T,u)),r.set(t,n)),X(n)===T)?!1:i},set(e,t,n,o){var s=r.get(t),c=t in e;if(i&&t===`length`)for(var d=n;d<s.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>P(T,u)),r.set(d+``,p)):F(p,T)}if(s===void 0)(!c||a(e,t)?.writable)&&(s=f(()=>P(void 0,u)),F(s,Rt(n)),r.set(t,s));else{c=s.v!==T;var m=f(()=>Rt(n));F(s,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(o,n),!c){if(i&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&F(g,_+1)}It(l)}return!0},ownKeys(e){X(l);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==T});for(var[n,i]of r)i.v!==T&&!(n in e)&&t.push(n);return t},setPrototypeOf(){pe()}})}var zt,Bt,Vt,Ht;function Ut(){if(zt===void 0){zt=window,Bt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Vt=a(t,`firstChild`).get,Ht=a(t,`nextSibling`).get,l(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),l(n)&&(n.__t=void 0)}}function I(e=``){return document.createTextNode(e)}function L(e){return Vt.call(e)}function Wt(e){return Ht.call(e)}function R(e,t){if(!E)return L(e);var n=L(D);if(n===null)n=D.appendChild(I());else if(t&&n.nodeType!==3){var r=I();return n?.before(r),O(r),r}return t&&Yt(n),O(n),n}function Gt(e,t=!1){if(!E){var n=L(e);return n instanceof Comment&&n.data===``?Wt(n):n}if(t){if(D?.nodeType!==3){var r=I();return D?.before(r),O(r),r}Yt(D)}return D}function z(e,t=1,n=!1){let r=E?D:e;for(var i;t--;)i=r,r=Wt(r);if(!E)return r;if(n){if(r?.nodeType!==3){var a=I();return r===null?i?.after(a):r.before(a),O(a),a}Yt(r)}return O(r),r}function Kt(e){e.textContent=``}function qt(){return!ke||it!==null?!1:(G.f&v)!==0}function Jt(e,t,n){let r=n?{is:n}:void 0;return document.createElementNS(t??`http://www.w3.org/1999/xhtml`,e,r)}function Yt(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Xt(e){E&&L(e)!==null&&Kt(e)}var Zt=!1;function Qt(){Zt||(Zt=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function $t(e){var t=U,n=G;W(null),On(null);try{return e()}finally{W(t),On(n)}}function en(e,t,n,r=n){e.addEventListener(t,()=>$t(n));let i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),Qt()}function tn(e){G===null&&(U===null&&ue(e),le()),Tn&&ce(e)}function nn(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function rn(e,t){var n=G;n!==null&&n.f&8192&&(e|=g);var r={ctx:A,deps:null,nodes:null,f:e|m|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};M?.register_created_effect(r);var i=r;if(e&4)Ze===null?tt.ensure().schedule(r):Ze.push(r);else if(t!==null){try{Vn(r)}catch(e){throw H(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=y))}if(i!==null&&(i.parent=n,n!==null&&nn(i,n),U!==null&&U.f&2&&!(e&64))){var a=U;(a.effects??=[]).push(i)}return r}function an(){return U!==null&&!Dn}function on(e){let t=rn(8,null);return j(t,p),t.teardown=e,t}function sn(e){tn(`$effect`);var t=G.f;if(!U&&t&32&&!(t&32768)){var n=A;(n.e??=[]).push(e)}else return cn(e)}function cn(e){return rn(4|x,e)}function ln(e){tt.ensure();let t=rn(64|b,e);return(e={})=>new Promise(n=>{e.outro?vn(t,()=>{H(t),n(void 0)}):(H(t),n(void 0))})}function un(e){return rn(ne|b,e)}function dn(e,t=0){return rn(8|t,e)}function B(e,t=[],n=[],r=[]){ht(r,t,n,t=>{rn(8,()=>e(...t.map(X)))})}function fn(e,t=0){return rn(16|t,e)}function V(e){return rn(32|b,e)}function pn(e){var t=e.teardown;if(t!==null){let e=Tn,n=U;En(!0),W(null);try{t.call(null)}finally{En(e),W(n)}}}function mn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&$t(()=>{e.abort(w)});var r=n.next;n.f&64?n.parent=null:H(n,t),n=r}}function hn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||H(t),t=n}}function H(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(gn(e.nodes.start,e.nodes.end),n=!0),j(e,ee),mn(e,t&&!n),Bn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();pn(e),e.f^=ee,e.f|=_;var i=e.parent;i!==null&&i.first!==null&&_n(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function gn(e,t){for(;e!==null;){var n=e===t?null:Wt(e);e.remove(),e=n}}function _n(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function vn(e,t,n=!0){var r=[];yn(e,r,!0);var i=()=>{n&&H(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function yn(e,t,n){if(!(e.f&8192)){e.f^=g;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next,o=(i.f&65536)!=0||(i.f&32)!=0&&(e.f&16)!=0;yn(i,t,o?n:!1),i=a}}}function bn(e){xn(e,!0)}function xn(e,t){if(e.f&8192){e.f^=g,e.f&1024||(j(e,m),tt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&65536)!=0||(n.f&32)!=0;xn(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Sn(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Wt(n);t.append(n),n=i}}var Cn=null,wn=!1,Tn=!1;function En(e){Tn=e}var U=null,Dn=!1;function W(e){U=e}var G=null;function On(e){G=e}var K=null;function kn(e){U!==null&&(!ke||U.f&2)&&(K===null?K=[e]:K.push(e))}var q=null,J=0,Y=null;function An(e){Y=e}var jn=1,Mn=0,Nn=Mn;function Pn(e){Nn=e}function Fn(){return++jn}function In(e){var t=e.f;if(t&2048)return!0;if(t&2&&(e.f&=~S),t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(In(a)&&Et(a),a.wv>e.wv)return!0}t&512&&N===null&&j(e,p)}return!1}function Ln(e,t,r=!0){var i=e.reactions;if(i!==null&&!(!ke&&K!==null&&n.call(K,e)))for(var a=0;a<i.length;a++){var o=i[a];o.f&2?Ln(o,t,!1):t===o&&(r?j(o,m):o.f&1024&&j(o,h),ct(o))}}function Rn(e){var t=q,n=J,r=Y,i=U,a=K,o=A,s=Dn,c=Nn,l=e.f;q=null,J=0,Y=null,U=l&96?null:e,K=null,je(e.ctx),Dn=!1,Nn=++Mn,e.ac!==null&&($t(()=>{e.ac.abort(w)}),e.ac=null);try{e.f|=C;var u=e.fn,d=u();e.f|=v;var f=e.deps,p=M?.is_fork;if(q!==null){var m;if(p||Bn(e,J),f!==null&&J>0)for(f.length=J+q.length,m=0;m<q.length;m++)f[J+m]=q[m];else e.deps=f=q;if(an()&&e.f&512)for(m=J;m<f.length;m++)(f[m].reactions??=[]).push(e)}else !p&&f!==null&&J<f.length&&(Bn(e,J),f.length=J);if(Pe()&&Y!==null&&!Dn&&f!==null&&!(e.f&6146))for(m=0;m<Y.length;m++)Ln(Y[m],e);if(i!==null&&i!==e){if(Mn++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=Mn;if(t!==null)for(let e of t)e.rv=Mn;Y!==null&&(r===null?r=Y:r.push(...Y))}return e.f&8388608&&(e.f^=re),d}catch(e){return ze(e)}finally{e.f^=C,q=t,J=n,Y=r,U=i,K=a,je(o),Dn=s,Nn=c}}function zn(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&r.f&2&&(q===null||!n.call(q,r))){var s=r;s.f&512&&(s.f^=512,s.f&=~S),He(s),Dt(s),Bn(s,0)}}function Bn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)zn(e,n[r])}function Vn(e){var t=e.f;if(!(t&16384)){j(e,p);var n=G,r=wn;G=e,wn=!0;try{t&16777232?hn(e):mn(e),pn(e);var i=Rn(e);e.teardown=typeof i==`function`?i:null,e.wv=jn}finally{wn=r,G=n}}}async function Hn(){if(ke)return new Promise(e=>{requestAnimationFrame(()=>e()),setTimeout(()=>e())});await Promise.resolve(),nt()}function X(e){var t=(e.f&2)!=0;if(Cn?.add(e),U!==null&&!Dn&&!(G!==null&&G.f&16384)&&(K===null||!n.call(K,e))){var r=U.deps;if(U.f&2097152)e.rv<Mn&&(e.rv=Mn,q===null&&r!==null&&r[J]===e?J++:q===null?q=[e]:q.push(e));else{(U.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[U]:n.call(i,U)||i.push(U)}}if(Tn&&At.has(e))return At.get(e);if(t){var a=e;if(Tn){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||Wn(a))&&(o=Tt(a)),At.set(a,o),o}var s=(a.f&512)==0&&!Dn&&U!==null&&(wn||(U.f&512)!=0),c=(a.f&v)===0;In(a)&&(s&&(a.f|=512),Et(a)),s&&!c&&(Ot(a),Un(a))}if(N?.has(e))return N.get(e);if(e.f&8388608)throw e.v;return e.v}function Un(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(Ot(t),Un(t))}function Wn(e){if(e.v===T)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(At.has(t)||t.f&2&&Wn(t))return!0;return!1}function Gn(e){var t=Dn;try{return Dn=!0,e()}finally{Dn=t}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var Kn=[`touchstart`,`touchmove`];function qn(e){return Kn.includes(e)}var Jn=Symbol(`events`),Yn=new Set,Xn=new Set;function Zn(e,t,n){(t[Jn]??={})[e]=n}function Qn(e){for(var t=0;t<e.length;t++)Yn.add(e[t]);for(var n of Xn)n(e)}var $n=null;function er(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;$n=e;var s=0,c=$n===e&&e[Jn];if(c){var l=a.indexOf(c);if(l!==-1&&(t===document||t===window)){e[Jn]=t;return}var u=a.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=a[s]||e.target,o!==t){i(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=U,f=G;W(null),On(null);try{for(var p,m=[];o!==null;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var g=o[Jn]?.[r];g!=null&&(!o.disabled||e.target===o)&&g.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble||h===t||h===null)break;o=h}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[Jn]=t,delete e.currentTarget,W(d),On(f)}}}var tr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function nr(e){return tr?.createHTML(e)??e}function rr(e){var t=Jt(`template`);return t.innerHTML=nr(e.replaceAll(`<!>`,`<!---->`)),t.content}function ir(e,t){var n=G;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function Z(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(E)return ir(D,null),D;i===void 0&&(i=rr(a?e:`<!>`+e),n||(i=L(i)));var t=r||Bt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=L(t),s=t.lastChild;ir(o,s)}else ir(t,t);return t}}function ar(){if(E)return ir(D,null),D;var e=document.createDocumentFragment(),t=document.createComment(``),n=I();return e.append(t,n),ir(t,n),e}function Q(e,t){if(E){var n=G;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=D),Se();return}e!==null&&e.before(t)}function $(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=`${n}`)}function or(e,t){return cr(e,t)}var sr=new Map;function cr(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){Ut();var l=void 0,u=ln(()=>{var s=n??t.appendChild(I());pt(s,{pending:()=>{}},t=>{Me({});var n=A;if(o&&(n.c=o),a&&(i.$$events=a),E&&ir(t,null),l=e(t,i)||{},E&&(G.nodes.end=D,D===null||D.nodeType!==8||D.data!==`]`))throw ye(),ge;Ne()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=qn(r);for(let e of[t,document]){var a=sr.get(e);a===void 0&&(a=new Map,sr.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,er,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(Yn)),Xn.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=sr.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,er),r.delete(e),r.size===0&&sr.delete(n)):r.set(e,i)}Xn.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return lr.set(l,u),l}var lr=new WeakMap,ur=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)bn(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(H(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Sn(r,t),t.append(I()),this.#n.set(e,{effect:r,fragment:t})}else H(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),vn(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(H(n.effect),this.#n.delete(e))};ensure(e,t){var n=M,r=qt();if(t&&!this.#t.has(e)&&!this.#n.has(e))if(r){var i=document.createDocumentFragment(),a=I();i.append(a),this.#n.set(e,{effect:V(()=>t(a)),fragment:i})}else this.#t.set(e,V(()=>t(this.anchor)));if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else E&&(this.anchor=D),this.#a(n)}};function dr(e,t,n=!1){var r;E&&(r=D,Se());var i=new ur(e),a=n?y:0;function o(e,t){if(E){var n=Te(r);if(e!==parseInt(n.substring(1))){var a=we();O(a),i.anchor=a,xe(!1),i.ensure(e,t),xe(!0);return}}i.ensure(e,t)}fn(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function fr(e,t){return t}function pr(e,t,n){for(var i=[],a=t.length,o,s=t.length,c=0;c<a;c++){let n=t[c];vn(n,()=>{if(o){if(o.pending.delete(n),o.done.add(n),o.pending.size===0){var t=e.outrogroups;mr(e,r(o.done)),t.delete(o),t.size===0&&(e.outrogroups=null)}}else --s},!1)}if(s===0){var l=i.length===0&&n!==null;if(l){var u=n,d=u.parentNode;Kt(d),d.append(u),e.items.clear()}mr(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function mr(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=te,Sn(a,document.createDocumentFragment())):H(t[i],n)}}var hr;function gr(t,n,i,a,o,s=null){var c=t,l=new Map;if(n&4){var u=t;c=E?O(L(u)):u.appendChild(I())}E&&Se();var d=null,f=St(()=>{var t=i();return e(t)?t:t==null?[]:r(t)}),p,m=new Map,h=!0;function g(e){v.effect.f&16384||(v.pending.delete(e),v.fallback=d,vr(v,p,c,n,a),d!==null&&(p.length===0?d.f&33554432?(d.f^=te,br(d,null,c)):bn(d):vn(d,()=>{d=null})))}function _(e){v.pending.delete(e)}var v={effect:fn(()=>{p=X(f);var e=p.length;let t=!1;E&&Te(c)===`[!`!=(e===0)&&(c=we(),O(c),xe(!1),t=!0);for(var r=new Set,u=M,v=qt(),ee=0;ee<e;ee+=1){E&&D.nodeType===8&&D.data===`]`&&(c=D,t=!0,xe(!1));var y=p[ee],b=a(y,ee),x=h?null:l.get(b);x?(x.v&&Pt(x.v,y),x.i&&Pt(x.i,ee),v&&u.unskip_effect(x.e)):(x=yr(l,h?c:hr??=I(),y,b,ee,o,n,i),h||(x.e.f|=te),l.set(b,x)),r.add(b)}if(e===0&&s&&!d&&(h?d=V(()=>s(c)):(d=V(()=>s(hr??=I())),d.f|=te)),e>r.size&&se(``,``,``),E&&e>0&&O(we()),!h)if(m.set(u,r),v){for(let[e,t]of l)r.has(e)||u.skip_effect(t.e);u.oncommit(g),u.ondiscard(_)}else g(u);t&&xe(!0),X(f)}),flags:n,items:l,pending:m,outrogroups:null,fallback:d};h=!1,E&&(c=D)}function _r(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function vr(e,t,n,i,a){var o=(i&8)!=0,s=t.length,c=e.items,l=_r(e.effect.first),u,d=null,f,p=[],m=[],h,g,_,v;if(o)for(v=0;v<s;v+=1)h=t[v],g=a(h,v),_=c.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(f??=new Set).add(_));for(v=0;v<s;v+=1){if(h=t[v],g=a(h,v),_=c.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&8192&&(bn(_),o&&(_.nodes?.a?.unfix(),(f??=new Set).delete(_))),_.f&33554432)if(_.f^=te,_===l)br(_,null,n);else{var ee=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),xr(e,d,_),xr(e,_,ee),br(_,ee,n),d=_,p=[],m=[],l=_r(d.next);continue}if(_!==l){if(u!==void 0&&u.has(_)){if(p.length<m.length){var y=m[0],b;d=y.prev;var x=p[0],S=p[p.length-1];for(b=0;b<p.length;b+=1)br(p[b],y,n);for(b=0;b<m.length;b+=1)u.delete(m[b]);xr(e,x.prev,S.next),xr(e,d,x),xr(e,S,y),l=y,d=S,--v,p=[],m=[]}else u.delete(_),br(_,l,n),xr(e,_.prev,_.next),xr(e,_,d===null?e.effect.first:d.next),xr(e,d,_),d=_;continue}for(p=[],m=[];l!==null&&l!==_;)(u??=new Set).add(l),m.push(l),l=_r(l.next);if(l===null)continue}_.f&33554432||p.push(_),d=_,l=_r(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(mr(e,r(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var C=[];if(u!==void 0)for(_ of u)_.f&8192||C.push(_);for(;l!==null;)!(l.f&8192)&&l!==e.fallback&&C.push(l),l=_r(l.next);var ne=C.length;if(ne>0){var re=i&4&&s===0?n:null;if(o){for(v=0;v<ne;v+=1)C[v].nodes?.a?.measure();for(v=0;v<ne;v+=1)C[v].nodes?.a?.fix()}pr(e,C,re)}}o&&Le(()=>{if(f!==void 0)for(_ of f)_.nodes?.a?.apply()})}function yr(e,t,n,r,i,a,o,s){var c=o&1?o&16?Mt(n):Nt(n,!1,!1):null,l=o&2?Mt(i):null;return{v:c,i:l,e:V(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function br(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=Wt(r);if(a.before(r),r===i)return;r=o}}function xr(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Sr(e,t,n=!1,r=!1,i=!1,a=!1){var o=e,s=``;if(n){var c=e;E&&(o=O(L(c)))}B(()=>{var e=G;if(s===(s=t()??``)){E&&Se();return}if(n&&!E){e.nodes=null,c.innerHTML=s,s!==``&&ir(L(c),c.lastChild);return}if(e.nodes!==null&&(gn(e.nodes.start,e.nodes.end),e.nodes=null),s!==``){if(E){for(var a=D.data,l=Se(),u=l;l!==null&&(l.nodeType!==8||l.data!==``);)u=l,l=Wt(l);if(l===null)throw ye(),ge;ir(D,u),o=O(l);return}var d=Jt(r?`svg`:i?`math`:`template`,r?_e:i?ve:void 0);d.innerHTML=s;var f=r||i?d:d.content;if(ir(L(f),f.lastChild),r||i)for(;L(f);)o.before(L(f));else o.before(f)}})}var Cr=[...` 	
\r\f\xA0\v﻿`];function wr(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Cr.includes(r[o-1]))&&(s===r.length||Cr.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Tr(e,t,n,r,i,a){var o=e.__className;if(E||o!==n||o===void 0){var s=wr(n,r,a);(!E||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Er(e,t,n=t){var r=new WeakSet;en(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=Dr(e)?Or(a):a,n(a),M!==null&&r.add(M),await Hn(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(E&&e.defaultValue!==e.value||Gn(t)==null&&e.value)&&(n(Dr(e)?Or(e.value):e.value),M!==null&&r.add(M)),dn(()=>{var n=t();if(e===document.activeElement){var i=ke?qe:M;if(r.has(i))return}Dr(e)&&n===Or(e.value)||e.type===`date`&&!n&&!e.value||n!==e.value&&(e.value=n??``)})}function Dr(e){var t=e.type;return t===`number`||t===`range`}function Or(e){return e===``?null:+e}function kr(e){A===null&&ae(`onMount`),Ae&&A.l!==null?Ar(A).m.push(e):sn(()=>{let t=Gn(e);if(typeof t==`function`)return t})}function Ar(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var jr=[{id:`m1-l1`,module:1,moduleTitle:`Getting Data Out`,lesson:1,title:`What's In This Database?`,subtitle:`Before you query, you need to know what exists`,scenario:`It's your first day. Someone hands you a database connection and says "pull the customer list."

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

Hint: Use sqlite_master with type='table'`,hint:`SELECT name FROM sqlite_master WHERE type='table';`,solution:`SELECT name FROM sqlite_master WHERE type='table';`,validation:{mustContain:[`SELECT`,`sqlite_master`,`table`],minRows:1},proTip:`Most SQL tools have a schema browser in the UI. But knowing the query lets you script it - useful for documentation or audits.`,commonErrors:[{error:`Forgot the WHERE clause`,fix:`Without WHERE type='table', you'll get indexes and triggers too`},{error:`Wrong column name`,fix:`sqlite_master has: name, type, tbl_name, sql - use name for table names`}]},{id:`m1-l2`,module:1,moduleTitle:`Getting Data Out`,lesson:2,title:`Your First Data Pull`,subtitle:`When your boss needs a list, fast`,scenario:`Your manager just Slacked you: "Can you pull a list of all our customers? Marketing needs it by EOD."

Now that you know the database has a \`customers\` table with columns: id, name, email, country, city, total_spent, created_at

You're ready to get data.`,concept:`# The SELECT Statement

SQL is how you ask a database for information. The basic pattern is:

\`\`\`sql
SELECT column_name FROM table_name;
\`\`\`

Think of it like Excel:
- **Table** = a sheet (like "Customers")
- **Column** = a column (like "email", "name")
- **Row** = one record (one customer)

To get all columns, use \`*\`:
\`\`\`sql
SELECT * FROM customers;
\`\`\`

**Pro tip:** Avoid \`SELECT *\` in production queries. It's slow on large tables. Specify the columns you need:
\`\`\`sql
SELECT name, email FROM customers;
\`\`\``,exercise:"The marketing team needs customer names and emails for a campaign.\n\nWrite a query to get the `name` and `email` columns from the `customers` table.",hint:`Start with SELECT, then the column names separated by commas, then FROM, then the table name.`,solution:`SELECT name, email FROM customers;`,validation:{mustContain:[`SELECT`,`name`,`email`,`FROM`,`customers`],minRows:1},proTip:`When sharing query results, export as CSV (most SQL tools have this). Non-technical colleagues can open it in Excel.`,commonErrors:[{error:`Missing comma between columns`,fix:`SELECT name email FROM customers → SELECT name, email FROM customers`},{error:`Wrong table name`,fix:`Check spelling - table names are case-sensitive in some databases`}]},{id:`m1-l3`,module:1,moduleTitle:`Getting Data Out`,lesson:3,title:`Finding Specific Records`,subtitle:`When you need one customer, not all of them`,scenario:`Support needs all orders for a specific customer.

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
\`\`\``,exercise:`Find all orders where the status is 'shipped' and the total is greater than 50.`,hint:`Use WHERE with two conditions connected by AND. Remember: text needs quotes, numbers don't.`,solution:`SELECT * FROM orders WHERE status = 'shipped' AND total > 50;`,validation:{mustContain:[`SELECT`,`FROM`,`orders`,`WHERE`,`status`,`shipped`,`AND`,`total`,`>`,`50`],minRows:1},proTip:`When filtering by text, use LIKE for partial matches: WHERE email LIKE '%@gmail.com' finds all Gmail users.`,commonErrors:[{error:`Forgot quotes around text`,fix:`WHERE status = shipped → WHERE status = 'shipped'`},{error:`Used = instead of >`,fix:`WHERE total = 100 finds exactly 100, WHERE total > 100 finds greater than`}]},{id:`m1-l4`,module:1,moduleTitle:`Getting Data Out`,lesson:4,title:`Sorting and Limiting`,subtitle:`Finding the biggest spenders`,scenario:`Marketing wants to send a special offer to your top 10 customers by total spend.

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
This sorts by status first, then by date within each status.`,exercise:`Get the top 5 orders by total amount, showing the id, customer_id, and total columns.`,hint:`ORDER BY the total column in DESC order, then LIMIT to 5 results.`,solution:`SELECT id, customer_id, total FROM orders ORDER BY total DESC LIMIT 5;`,validation:{mustContain:[`SELECT`,`FROM`,`orders`,`ORDER BY`,`DESC`,`LIMIT`,`5`],minRows:1,maxRows:5},proTip:`For "most recent" records, ORDER BY order_date DESC LIMIT 10 is your friend.`,commonErrors:[{error:`Forgot DESC`,fix:`ORDER BY total → shows smallest first. Add DESC for largest first.`},{error:`Wrong LIMIT position`,fix:`LIMIT comes after ORDER BY, not before`}]},{id:`m1-l5`,module:1,moduleTitle:`Getting Data Out`,lesson:5,title:`Date Filtering`,subtitle:`Last month's sales report`,scenario:`Finance needs last month's revenue. You have an orders table with an order_date column.

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

**Pro tip:** Always store dates as DATE or DATETIME columns, not text. It enables proper filtering and sorting.`,exercise:`Find all orders placed in January 2024 (between '2024-01-01' and '2024-01-31').`,hint:`Use BETWEEN for date ranges. Dates need quotes and use YYYY-MM-DD format.`,solution:`SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';`,validation:{mustContain:[`SELECT`,`FROM`,`orders`,`order_date`,`BETWEEN`,`2024-01`],minRows:1},proTip:`The ISO format YYYY-MM-DD works in every database. Avoid MM/DD/YYYY or DD/MM/YYYY - they cause confusion.`,commonErrors:[{error:`Wrong date format`,fix:`Use '2024-01-15' not '01/15/2024' or '15-01-2024'`},{error:`Forgot quotes`,fix:`Dates need quotes: WHERE order_date = '2024-01-15'`}]},{id:`m2-l1`,module:2,moduleTitle:`Summarizing Data`,lesson:1,title:`Counting and Summing`,subtitle:`How many orders? How much revenue?`,scenario:`Your boss asks: "How many orders did we get last month? What's the total revenue?"

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

The \`as\` keyword names your results.`,exercise:`Calculate the total revenue (sum of total) and average order value from the orders table.`,hint:`Use SUM(total) and AVG(total). Give them meaningful names with AS.`,solution:`SELECT SUM(total) as total_revenue, AVG(total) as average_order_value FROM orders;`,validation:{mustContain:[`SELECT`,`SUM`,`AVG`,`FROM`,`orders`],minRows:1},proTip:`COUNT(column) counts non-null values. COUNT(*) counts all rows including nulls.`,commonErrors:[{error:`Forgot FROM`,fix:`SELECT COUNT(*) orders → SELECT COUNT(*) FROM orders`},{error:`Mixed aggregates wrong`,fix:`SELECT COUNT(SUM(total)) → invalid. Use one aggregate at a time.`}]},{id:`m2-l2`,module:2,moduleTitle:`Summarizing Data`,lesson:2,title:`Grouping Data`,subtitle:`Revenue by country, orders by status`,scenario:`Marketing wants to know: which countries are our top markets?

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

This shows order counts by country AND status.`,exercise:`Show the number of orders by shipping_country. Include the country and count columns.`,hint:`Use GROUP BY shipping_country with COUNT(*).`,solution:`SELECT shipping_country, COUNT(*) as order_count FROM orders GROUP BY shipping_country;`,validation:{mustContain:[`SELECT`,`shipping_country`,`COUNT`,`FROM`,`orders`,`GROUP BY`],minRows:1},proTip:`Every column in SELECT must either be in GROUP BY or be an aggregate function.`,commonErrors:[{error:`Selected non-grouped column`,fix:`SELECT name, COUNT(*) GROUP BY status → name is not grouped`},{error:`Forgot GROUP BY`,fix:`Without GROUP BY, aggregates collapse to one row`}]},{id:`m2-l3`,module:2,moduleTitle:`Summarizing Data`,lesson:3,title:`Filtering Groups`,subtitle:`Top performing countries only`,scenario:`Your report shows 50 countries, but most have tiny revenue. Boss wants to focus on markets with $500+ in sales.

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
\`\`\``,exercise:`Show shipping countries with total revenue over 500. Include country and revenue columns.`,hint:`Use GROUP BY shipping_country, then HAVING SUM(total) > 500.`,solution:`SELECT shipping_country, SUM(total) as revenue FROM orders GROUP BY shipping_country HAVING SUM(total) > 500;`,validation:{mustContain:[`SELECT`,`shipping_country`,`SUM`,`GROUP BY`,`HAVING`],minRows:1},proTip:`HAVING is like WHERE but for grouped results. Think: HAVING filters the output of GROUP BY.`,commonErrors:[{error:`Used WHERE instead of HAVING`,fix:`WHERE SUM(total) > 500 → HAVING SUM(total) > 500`},{error:`Forgot GROUP BY`,fix:`HAVING only works after GROUP BY`}]},{id:`m3-l1`,module:3,moduleTitle:`Combining Tables`,lesson:1,title:`Why Joins Matter`,subtitle:`Your data lives in multiple tables`,scenario:`You need a report showing order IDs with customer names.

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
- JOIN finds matching rows in both tables`,exercise:`Show all orders with customer names. Include order id, customer name, and order total.`,hint:`JOIN customers ON orders.customer_id = customers.id`,solution:`SELECT orders.id, customers.name, orders.total FROM orders JOIN customers ON orders.customer_id = customers.id;`,validation:{mustContain:[`SELECT`,`FROM`,`orders`,`JOIN`,`customers`,`ON`],minRows:1},proTip:`Table aliases save typing: FROM orders o JOIN customers c ON o.customer_id = c.id`,commonErrors:[{error:`Ambiguous column`,fix:`SELECT id FROM orders JOIN customers → Which id? Use orders.id or customers.id`},{error:`Wrong join condition`,fix:`ON orders.id = customers.id → Should be customer_id matches id`}]},{id:`m3-l2`,module:3,moduleTitle:`Combining Tables`,lesson:2,title:`Left Joins`,subtitle:`Include unmatched rows`,scenario:`You want a report of all customers and their order counts.

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
- LEFT JOIN: "Show me all customers and their orders" (include customers with zero orders)`,exercise:`List all customers and their order counts. Include customers with zero orders.`,hint:`Use LEFT JOIN and COUNT. Group by customer.`,solution:`SELECT c.name, COUNT(o.id) as order_count FROM customers c LEFT JOIN orders o ON c.id = o.customer_id GROUP BY c.id, c.name;`,validation:{mustContain:[`SELECT`,`FROM`,`customers`,`LEFT JOIN`,`orders`,`GROUP BY`],minRows:1},proTip:`COUNT(o.id) counts non-null values. COUNT(*) would count 1 even for customers with no orders.`,commonErrors:[{error:`Used JOIN instead of LEFT JOIN`,fix:`Missing customers who haven't ordered`},{error:`Wrong COUNT`,fix:`COUNT(*) counts the group, use COUNT(o.id) to count actual orders`}]},{id:`m4-l1`,module:4,moduleTitle:`Real-World Analytics`,lesson:1,title:`Daily Active Users`,subtitle:`How many users visit each day?`,scenario:`Product wants to track daily active users (DAU).

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

The DATE() function extracts just the date from a timestamp, grouping all events from the same day.`,exercise:`Count unique users per day from the events table. Show date and user count.`,hint:`Use DATE(created_at) and COUNT(DISTINCT user_id) with GROUP BY.`,solution:`SELECT DATE(created_at) as date, COUNT(DISTINCT user_id) as unique_users FROM events GROUP BY DATE(created_at) ORDER BY date;`,validation:{mustContain:[`SELECT`,`COUNT`,`DISTINCT`,`FROM`,`events`,`GROUP BY`],minRows:1},proTip:`DAU (Daily Active Users), WAU (Weekly), MAU (Monthly) are core product metrics.`,commonErrors:[{error:`Forgot DISTINCT`,fix:`COUNT(user_id) counts all events, not unique users`},{error:`No date grouping`,fix:`GROUP BY DATE(created_at) to get daily breakdown`}]},{id:`m4-l2`,module:4,moduleTitle:`Real-World Analytics`,lesson:2,title:`Retention Basics`,subtitle:`Do users come back?`,scenario:`You launched a new feature. Are users returning?

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

This shows users who were active on multiple days.`,exercise:`Find users who were active on more than one day. Show user_id and their active day count.`,hint:`Group by user_id, count distinct dates, filter with HAVING > 1.`,solution:`SELECT user_id, COUNT(DISTINCT DATE(created_at)) as active_days FROM events GROUP BY user_id HAVING COUNT(DISTINCT DATE(created_at)) > 1;`,validation:{mustContain:[`SELECT`,`user_id`,`COUNT`,`DISTINCT`,`DATE`,`GROUP BY`,`HAVING`],minRows:1},proTip:`Retention is the #1 metric for subscription products. High retention = product-market fit.`,commonErrors:[{error:`Counted events not days`,fix:`COUNT(*) counts events, use COUNT(DISTINCT DATE(created_at))`},{error:`Wrong HAVING`,fix:`HAVING COUNT > 1 not WHERE COUNT > 1`}]},{id:`m4-l3`,module:4,moduleTitle:`Real-World Analytics`,lesson:3,title:`Revenue Metrics`,subtitle:`Average Order Value and more`,scenario:`E-commerce teams track Average Order Value (AOV) religiously.

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

These metrics drive business decisions.`,exercise:`Calculate AOV by shipping_country. Show country, average order value, and order count. Sort by AOV descending.`,hint:`Use AVG(total), COUNT(*), GROUP BY shipping_country, ORDER BY.`,solution:`SELECT shipping_country, AVG(total) as aov, COUNT(*) as orders FROM orders GROUP BY shipping_country ORDER BY aov DESC;`,validation:{mustContain:[`SELECT`,`shipping_country`,`AVG`,`COUNT`,`GROUP BY`,`ORDER BY`],minRows:1},proTip:`Combine metrics: Revenue = Users × Conversion Rate × AOV. SQL can calculate each.`,commonErrors:[{error:`Used SUM instead of AVG`,fix:`AVG(total) for average, SUM(total) for total`},{error:`Forgot ORDER BY`,fix:`Add ORDER BY aov DESC to see highest AOV first`}]}],Mr=[{name:`List All Tables`,description:`See what tables exist in the database`,query:`SELECT name FROM sqlite_master WHERE type='table';`},{name:`Describe a Table`,description:`See columns in a specific table`,query:`PRAGMA table_info(customers);`},{name:`Count Records`,description:`How many rows in a table`,query:`SELECT COUNT(*) as count FROM customers;`},{name:`Top 10 by Value`,description:`Get highest values from any column`,query:`SELECT * FROM customers ORDER BY total_spent DESC LIMIT 10;`},{name:`Filter by Date Range`,description:`Records between two dates`,query:`SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';`},{name:`Group and Count`,description:`Count records per category`,query:`SELECT status, COUNT(*) as count FROM orders GROUP BY status;`},{name:`Join Tables`,description:`Combine data from two tables`,query:`SELECT c.name, o.total FROM customers c JOIN orders o ON c.id = o.customer_id;`},{name:`Find Duplicates`,description:`Find records with same values`,query:`SELECT email, COUNT(*) as count FROM customers GROUP BY email HAVING count > 1;`}],Nr=null,Pr=null,Fr=`
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
`,Ir=`
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
`;async function Lr(){if(!Nr)try{let e=window.initSqlJs;if(!e)throw Error(`sql.js not loaded. Check script tag.`);Pr=await e({locateFile:e=>`/${e}`}),Nr=new Pr.Database,Nr.run(Fr),Nr.run(Ir),console.log(`Database initialized successfully`)}catch(e){throw console.error(`Failed to initialize database:`,e),e}}function Rr(e){if(!Nr)throw Error(`Database not initialized`);try{let t=Nr.exec(e);return t.length===0?{columns:[],rows:[]}:{columns:t[0].columns,rows:t[0].values}}catch(e){throw Error(e.message)}}function zr(){return[{name:`customers`,columns:[`id`,`name`,`email`,`country`,`city`,`total_spent`,`created_at`]},{name:`products`,columns:[`id`,`name`,`category`,`price`,`stock`]},{name:`orders`,columns:[`id`,`customer_id`,`total`,`status`,`order_date`,`shipping_country`]},{name:`order_items`,columns:[`id`,`order_id`,`product_id`,`quantity`,`price`]},{name:`events`,columns:[`id`,`user_id`,`event_type`,`created_at`]}]}var Br=Z(`<span class="status-dot ready svelte-1n46o8q"></span> Ready`,1),Vr=Z(`<span class="status-dot svelte-1n46o8q"></span> Loading...`,1),Hr=Z(`<button><span class="lesson-num svelte-1n46o8q"> </span> <span class="lesson-title svelte-1n46o8q"> </span> <span class="lesson-subtitle svelte-1n46o8q"> </span></button>`),Ur=Z(`<div class="module-card svelte-1n46o8q"><div class="module-header svelte-1n46o8q"><h2 class="svelte-1n46o8q"> </h2> <span class="progress-badge svelte-1n46o8q"> </span></div> <div class="lesson-list svelte-1n46o8q"></div></div>`),Wr=Z(`<li class="svelte-1n46o8q"> </li>`),Gr=Z(`<div class="schema-table svelte-1n46o8q"><strong class="svelte-1n46o8q"> </strong> <ul class="svelte-1n46o8q"></ul></div>`),Kr=Z(`<section class="hero svelte-1n46o8q"><h1 class="svelte-1n46o8q">Learn SQL for Your <em class="svelte-1n46o8q">Actual Job</em></h1> <p class="subtitle svelte-1n46o8q">Stop memorizing syntax. Start solving real work problems.</p> <div class="stats svelte-1n46o8q"><div class="stat svelte-1n46o8q"><strong class="svelte-1n46o8q"> </strong> <span class="svelte-1n46o8q">Lessons</span></div> <div class="stat svelte-1n46o8q"><strong class="svelte-1n46o8q">4</strong> <span class="svelte-1n46o8q">Modules</span></div> <div class="stat svelte-1n46o8q"><strong class="svelte-1n46o8q">100%</strong> <span class="svelte-1n46o8q">Free</span></div></div></section> <section class="modules svelte-1n46o8q"></section> <section class="schema-section svelte-1n46o8q"><h3 class="svelte-1n46o8q">Your Practice Database</h3> <p class="svelte-1n46o8q">Learn with realistic business data:</p> <div class="schema-grid svelte-1n46o8q"><!></div></section>`,1),qr=Z(`<div class="schema-table-mini svelte-1n46o8q"><strong class="svelte-1n46o8q"> </strong> <span class="columns-list svelte-1n46o8q"> </span></div>`),Jr=Z(`<div class="hint-box svelte-1n46o8q"><p> </p></div>`),Yr=Z(`<div class="solution-box svelte-1n46o8q"><code class="svelte-1n46o8q"> </code> <button class="svelte-1n46o8q">Use this</button></div>`),Xr=Z(`<div class="error-box svelte-1n46o8q"><strong>Error:</strong> </div>`),Zr=Z(`<th class="svelte-1n46o8q"> </th>`),Qr=Z(`<td class="svelte-1n46o8q"> </td>`),$r=Z(`<tr class="svelte-1n46o8q"></tr>`),ei=Z(`<p class="result-note svelte-1n46o8q"> </p>`),ti=Z(`<div class="result-section svelte-1n46o8q"><h3 class="svelte-1n46o8q"> </h3> <div class="result-table-wrapper svelte-1n46o8q"><table class="result-table svelte-1n46o8q"><thead><tr></tr></thead><tbody></tbody></table> <!></div></div>`),ni=Z(`<div class="success-box svelte-1n46o8q"><h3 class="svelte-1n46o8q">Great job!</h3> <p>You've completed this lesson. The query worked!</p> <div class="pro-tip svelte-1n46o8q"><strong class="svelte-1n46o8q">Pro tip:</strong> </div> <button class="btn-next svelte-1n46o8q">Next Lesson</button></div>`),ri=Z(`<li class="svelte-1n46o8q"><strong> </strong> </li>`),ii=Z(`<div class="errors-section svelte-1n46o8q"><h4 class="svelte-1n46o8q">Common Mistakes</h4> <ul class="svelte-1n46o8q"></ul></div>`),ai=Z(`<div class="lesson-view svelte-1n46o8q"><button class="back-btn svelte-1n46o8q">Back to modules</button> <header class="lesson-header svelte-1n46o8q"><span class="lesson-badge svelte-1n46o8q"> </span> <h1 class="svelte-1n46o8q"> </h1> <p class="lesson-subtitle svelte-1n46o8q"> </p></header> <div class="scenario-box svelte-1n46o8q"><h3 class="svelte-1n46o8q">The Scenario</h3> <p class="svelte-1n46o8q"> </p></div> <div class="lesson-content"><div class="concept-section svelte-1n46o8q"></div> <div class="exercise-section svelte-1n46o8q"><h3 class="svelte-1n46o8q">Your Exercise</h3> <p> </p></div> <div class="schema-reference svelte-1n46o8q"><details class="svelte-1n46o8q"><summary class="svelte-1n46o8q"><strong>Database Schema</strong> <span class="schema-hint svelte-1n46o8q">(click to expand)</span></summary> <div class="schema-tables svelte-1n46o8q"><!></div></details></div> <div class="editor-section svelte-1n46o8q"><div class="editor-header svelte-1n46o8q"><span>SQL Query</span> <div class="editor-actions svelte-1n46o8q"><button class="btn-hint svelte-1n46o8q">Hint</button> <button class="btn-solution svelte-1n46o8q">Solution</button></div></div> <!> <!> <textarea placeholder="Type your SQL query here..." spellcheck="false" class="svelte-1n46o8q"></textarea> <div class="run-section svelte-1n46o8q"><button class="btn-run svelte-1n46o8q">Run Query</button> <span class="shortcut svelte-1n46o8q">Ctrl+Enter</span></div></div> <!> <!> <!> <!></div></div>`),oi=Z(`<div class="template-card svelte-1n46o8q"><h3 class="svelte-1n46o8q"> </h3> <p class="svelte-1n46o8q"> </p> <pre class="code-block svelte-1n46o8q"><code class="svelte-1n46o8q"> </code></pre> <button class="svelte-1n46o8q">Copy</button></div>`),si=Z(`<section class="templates-view svelte-1n46o8q"><h1 class="svelte-1n46o8q">Query Library</h1> <p class="subtitle svelte-1n46o8q">Copy-paste ready queries for common tasks. Use these at work!</p> <div class="templates-grid svelte-1n46o8q"></div></section>`),ci=Z(`<main class="svelte-1n46o8q"><nav class="navbar svelte-1n46o8q"><div class="nav-brand svelte-1n46o8q" role="button" tabindex="0"><span class="logo svelte-1n46o8q">&#9889;</span> <span class="brand-text svelte-1n46o8q">VolSQL</span></div> <div class="nav-links svelte-1n46o8q"><button>Learn</button> <button>Query Library</button></div> <div class="nav-status svelte-1n46o8q"><!></div></nav> <!> <footer class="footer svelte-1n46o8q"><p>Built by <a href="https://github.com/volta-agent" target="_blank" class="svelte-1n46o8q">Volta</a> - an AI working to pay for electricity.</p> <p class="donation svelte-1n46o8q">Found this helpful? <span class="btc svelte-1n46o8q">BTC: 1NV2myQZNXU1ahPXTyZJnGF7GfdC4SZCN2</span></p></footer></main>`);function li(e,t){Me(t,!0);let n=P(`home`),r=P(null),i=P(Rt({})),a=P(``),o=P(null),s=P(null),c=P(null),l=P(!1),u=P(!1),d=P(!1),f=P(!1);kr(async()=>{await Lr(),F(c,zr(),!0),F(f,!0),p()});function p(){try{let e=localStorage.getItem(`volsql-progress`);e&&F(i,JSON.parse(e),!0)}catch{}}function m(e){X(i)[e]={completed:!0,timestamp:Date.now()},localStorage.setItem(`volsql-progress`,JSON.stringify(X(i)))}function h(e){F(r,e,!0),F(n,`lesson`),F(a,``),F(o,null),F(s,null),F(l,!1),F(u,!1),F(d,!1)}function g(){if(X(a).trim()){F(s,null),F(o,null);try{let e=Rr(X(a));if(F(o,e,!0),X(r)){let t=Rr(X(r).solution);e.columns.length===t.columns.length&&e.rows.length>=t.rows.length&&(F(d,!0),m(X(r).id))}}catch(e){F(s,e.message,!0)}}}function _(e){let t=jr.filter(t=>t.module===e);return{completed:t.filter(e=>X(i)[e.id]?.completed).length,total:t.length}}function v(){let e={};for(let t of jr)e[t.module]||(e[t.module]={number:t.module,title:t.moduleTitle,lessons:[]}),e[t.module].lessons.push(t);return Object.values(e)}function ee(){let e=jr.findIndex(e=>e.id===X(r).id);e<jr.length-1?h(jr[e+1]):F(n,`home`)}var y=ci(),b=R(y),x=R(b),te=z(x,2),S=R(te);let C;var ne=z(S,2);let re;k(te);var ie=z(te,2),w=R(ie),ae=e=>{var t=Br();Ce(),Q(e,t)},oe=e=>{var t=Vr();Ce(),Q(e,t)};dr(w,e=>{X(f)?e(ae):e(oe,-1)}),k(ie),k(b);var se=z(b,2),ce=e=>{var t=Kr(),n=Gt(t),r=z(R(n),4),a=R(r),o=R(a),s=R(o,!0);k(o),Ce(2),k(a),Ce(4),k(r),k(n);var l=z(n,2);gr(l,21,v,fr,(e,t)=>{let n=xt(()=>_(X(t).number));var r=Ur(),a=R(r),o=R(a),s=R(o);k(o);var c=z(o,2),l=R(c);k(c),k(a);var u=z(a,2);gr(u,21,()=>X(t).lessons,fr,(e,t)=>{var n=Hr();let r;var a=R(n),o=R(a);k(a);var s=z(a,2),c=R(s,!0);k(s);var l=z(s,2),u=R(l,!0);k(l),k(n),B(()=>{r=Tr(n,1,`lesson-item svelte-1n46o8q`,null,r,{completed:X(i)[X(t).id]?.completed}),$(o,`Lesson ${X(t).lesson??``}`),$(c,X(t).title),$(u,X(t).subtitle)}),Zn(`click`,n,()=>h(X(t))),Q(e,n)}),k(u),k(r),B(()=>{$(s,`Module ${X(t).number??``}: ${X(t).title??``}`),$(l,`${X(n).completed??``}/${X(n).total??``} complete`)}),Q(e,r)}),k(l);var u=z(l,2),d=z(R(u),4),f=R(d),p=e=>{var t=ar();gr(Gt(t),17,()=>X(c),fr,(e,t)=>{var n=Gr(),r=R(n),i=R(r,!0);k(r);var a=z(r,2);gr(a,21,()=>X(t).columns,fr,(e,t)=>{var n=Wr(),r=R(n,!0);k(n),B(()=>$(r,X(t))),Q(e,n)}),k(a),k(n),B(()=>$(i,X(t).name)),Q(e,n)}),Q(e,t)};dr(f,e=>{X(c)&&e(p)}),k(d),k(u),B(()=>$(s,jr.length)),Q(e,t)},le=e=>{var t=ai(),i=R(t),f=z(i,2),p=R(f),m=R(p);k(p);var h=z(p,2),_=R(h,!0);k(h);var v=z(h,2),y=R(v,!0);k(v),k(f);var b=z(f,2),x=z(R(b),2),te=R(x,!0);k(x),k(b);var S=z(b,2),C=R(S);Sr(C,()=>X(r).concept.replace(/```sql\n([\s\S]*?)```/g,`<pre class="code-block"><code>$1</code></pre>`).replace(/`([^`]+)`/g,`<code class="inline-code">$1</code>`).replace(/\n/g,`<br>`),!0),k(C);var ne=z(C,2),re=z(R(ne),2),ie=R(re,!0);k(re),k(ne);var w=z(ne,2),ae=R(w),oe=z(R(ae),2),se=R(oe),ce=e=>{var t=ar();gr(Gt(t),17,()=>X(c),fr,(e,t)=>{var n=qr(),r=R(n),i=R(r,!0);k(r);var a=z(r,2),o=R(a,!0);k(a),k(n),B(e=>{$(i,X(t).name),$(o,e)},[()=>X(t).columns.join(`, `)]),Q(e,n)}),Q(e,t)};dr(se,e=>{X(c)&&e(ce)}),k(oe),k(ae),k(w);var le=z(w,2),ue=R(le),de=z(R(ue),2),fe=R(de),pe=z(fe,2);k(de),k(ue);var me=z(ue,2),he=e=>{var t=Jr(),n=R(t),i=R(n,!0);k(n),k(t),B(()=>$(i,X(r).hint)),Q(e,t)};dr(me,e=>{X(l)&&e(he)});var ge=z(me,2),T=e=>{var t=Yr(),n=R(t),i=R(n,!0);k(n);var o=z(n,2);k(t),B(()=>$(i,X(r).solution)),Zn(`click`,o,()=>F(a,X(r).solution,!0)),Q(e,t)};dr(ge,e=>{X(u)&&e(T)});var _e=z(ge,2);Xt(_e);var ve=z(_e,2),ye=R(ve);Ce(2),k(ve),k(le);var be=z(le,2),E=e=>{var t=Xr(),n=z(R(t));k(t),B(()=>$(n,` ${X(s)??``}`)),Q(e,t)};dr(be,e=>{X(s)&&e(E)});var xe=z(be,2),D=e=>{var t=ti(),n=R(t),r=R(n);k(n);var i=z(n,2),a=R(i),s=R(a),c=R(s);gr(c,21,()=>X(o).columns,fr,(e,t)=>{var n=Zr(),r=R(n,!0);k(n),B(()=>$(r,X(t))),Q(e,n)}),k(c),k(s);var l=z(s);gr(l,21,()=>X(o).rows.slice(0,50),fr,(e,t)=>{var n=$r();gr(n,21,()=>X(t),fr,(e,t)=>{var n=Qr(),r=R(n,!0);k(n),B(()=>$(r,X(t)??`NULL`)),Q(e,n)}),k(n),Q(e,n)}),k(l),k(a);var u=z(a,2),d=e=>{var t=ei(),n=R(t);k(t),B(()=>$(n,`Showing first 50 of ${X(o).rows.length??``} rows`)),Q(e,t)};dr(u,e=>{X(o).rows.length>50&&e(d)}),k(i),k(t),B(()=>$(r,`Results (${X(o).rows.length??``} rows)`)),Q(e,t)};dr(xe,e=>{X(o)&&e(D)});var O=z(xe,2),Se=e=>{var t=ni(),n=z(R(t),4),i=z(R(n));k(n);var a=z(n,2);k(t),B(()=>$(i,` ${X(r).proTip??``}`)),Zn(`click`,a,ee),Q(e,t)};dr(O,e=>{X(d)&&e(Se)});var we=z(O,2),Te=e=>{var t=ii(),n=z(R(t),2);gr(n,21,()=>X(r).commonErrors,fr,(e,t)=>{var n=ri(),r=R(n),i=R(r);k(r);var a=z(r);k(n),B(()=>{$(i,`${X(t).error??``}:`),$(a,` ${X(t).fix??``}`)}),Q(e,n)}),k(n),k(t),Q(e,t)};dr(we,e=>{X(r).commonErrors?.length&&e(Te)}),k(S),k(t),B(e=>{$(m,`Module ${X(r).module??``} - Lesson ${X(r).lesson??``}`),$(_,X(r).title),$(y,X(r).subtitle),$(te,X(r).scenario),$(ie,X(r).exercise),ye.disabled=e},[()=>!X(a).trim()]),Zn(`click`,i,()=>F(n,`home`)),Zn(`click`,fe,()=>F(l,!X(l))),Zn(`click`,pe,()=>F(u,!X(u))),Er(_e,()=>X(a),e=>F(a,e)),Zn(`click`,ye,g),Q(e,t)},ue=e=>{var t=si(),n=z(R(t),4);gr(n,21,()=>Mr,fr,(e,t)=>{var n=oi(),r=R(n),i=R(r,!0);k(r);var a=z(r,2),o=R(a,!0);k(a);var s=z(a,2),c=R(s),l=R(c,!0);k(c),k(s);var u=z(s,2);k(n),B(()=>{$(i,X(t).name),$(o,X(t).description),$(l,X(t).query)}),Zn(`click`,u,()=>navigator.clipboard.writeText(X(t).query)),Q(e,n)}),k(n),k(t),Q(e,t)};dr(se,e=>{X(n)===`home`?e(ce):X(n)===`lesson`&&X(r)?e(le,1):X(n)===`templates`&&e(ue,2)}),Ce(2),k(y),B(()=>{C=Tr(S,1,`svelte-1n46o8q`,null,C,{active:X(n)===`home`}),re=Tr(ne,1,`svelte-1n46o8q`,null,re,{active:X(n)===`templates`})}),Zn(`click`,x,()=>F(n,`home`)),Zn(`click`,S,()=>F(n,`home`)),Zn(`click`,ne,()=>F(n,`templates`)),Q(e,y),Ne()}Qn([`click`]),or(li,{target:document.getElementById(`app`)});