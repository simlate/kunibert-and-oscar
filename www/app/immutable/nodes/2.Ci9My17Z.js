import{c as Gt,a as Mt,f as ls}from"../chunks/DEd8yWw-.js";import{i as yv}from"../chunks/BQNEruL8.js";import{h as ba,N as bv,b as Sv,i as Pe,ar as Mv,P as Tv,a2 as kf,a0 as zf,ae as Ou,f as Oo,O as wv,aj as Av,$ as Gf,c as Ev,e as zh,aO as Cv,s as Rv,aG as sr,aP as Pv,ah as bd,aQ as Iv,k as Vf,aR as Dv,aS as Lv,au as Uv,a as Hf,aT as lr,r as Zm,p as Jm,aU as Bu,aV as Nv,ag as Fv,d as Ov,ac as Bv,g as kv,aW as Dn,aX as an,t as ut,v as no,u as Qm,aN as jt,aL as $m,B as Ln,n as Ct,D as Un,F as Gh,G as Vh,av as Hh,aM as Wh,I as Wn,H as Rn}from"../chunks/D4Jo7ZfF.js";import{r as jn,i as xo,b as Wf,s as ei,p as qe,c as Ys,a as Sd,d as Md}from"../chunks/Cqx8K5rH.js";import{g as zv,w as es,d as Lc,a as vr,o as Gv,r as Td}from"../chunks/BTkCedgZ.js";import{c as Vv}from"../chunks/DTkoL9Yw.js";import{s as Sn}from"../chunks/CBeXvB6p.js";function Hv(s,e){return e}function Wv(s,e,t){for(var i=[],n=e.length,r,a=e.length,o=0;o<n;o++){let h=e[o];Jm(h,()=>{if(r){if(r.pending.delete(h),r.done.add(h),r.pending.size===0){var d=s.outrogroups;Xh(bd(r.done)),d.delete(r),d.size===0&&(s.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&t!==null;if(l){var c=t,u=c.parentNode;Fv(u),u.append(c),s.items.clear()}Xh(e,!l)}else r={pending:new Set(e),done:new Set},(s.outrogroups??=new Set).add(r)}function Xh(s,e=!0){for(var t=0;t<s.length;t++)Ov(s[t],e)}var Xf;function Xv(s,e,t,i,n,r=null){var a=s,o=new Map;ba&&bv();var l=null,c=sr(()=>{var v=t();return Pv(v)?v:v==null?[]:bd(v)}),u,h=!0;function d(){p.fallback=l,Yv(p,u,a,e,i),l!==null&&(u.length===0?(l.f&lr)===0?Zm(l):(l.f^=lr,ka(l,null,a)):Jm(l,()=>{l=null}))}var f=Sv(()=>{u=Pe(c);var v=u.length;let m=!1;if(ba){var g=Mv(a)===Tv;g!==(v===0)&&(a=kf(),zf(a),Ou(!1),m=!0)}for(var y=new Set,x=Ev,_=Rv(),S=0;S<v;S+=1){ba&&Oo.nodeType===wv&&Oo.data===Av&&(a=Oo,m=!0,Ou(!1));var w=u[S],A=i(w,S),E=h?null:o.get(A);E?(E.v&&Gf(E.v,w),E.i&&Gf(E.i,S),_&&x.unskip_effect(E.e)):(E=qv(o,h?a:Xf??=Hf(),w,A,S,n,e,t),h||(E.e.f|=lr),o.set(A,E)),y.add(A)}if(v===0&&r&&!l&&(h?l=zh(()=>r(a)):(l=zh(()=>r(Xf??=Hf())),l.f|=lr)),v>y.size&&Cv(),ba&&v>0&&zf(kf()),!h)if(_){for(const[b,M]of o)y.has(b)||x.skip_effect(M.e);x.oncommit(d),x.ondiscard(()=>{})}else d();m&&Ou(!0),Pe(c)}),p={effect:f,items:o,outrogroups:null,fallback:l};h=!1,ba&&(a=Oo)}function Sa(s){for(;s!==null&&(s.f&Nv)===0;)s=s.next;return s}function Yv(s,e,t,i,n){var r=e.length,a=s.items,o=Sa(s.effect.first),l,c=null,u=[],h=[],d,f,p,v;for(v=0;v<r;v+=1){if(d=e[v],f=n(d,v),p=a.get(f).e,s.outrogroups!==null)for(const E of s.outrogroups)E.pending.delete(p),E.done.delete(p);if((p.f&lr)!==0)if(p.f^=lr,p===o)ka(p,null,t);else{var m=c?c.next:o;p===s.effect.last&&(s.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Zi(s,c,p),Zi(s,p,m),ka(p,m,t),c=p,u=[],h=[],o=Sa(c.next);continue}if((p.f&Bu)!==0&&Zm(p),p!==o){if(l!==void 0&&l.has(p)){if(u.length<h.length){var g=h[0],y;c=g.prev;var x=u[0],_=u[u.length-1];for(y=0;y<u.length;y+=1)ka(u[y],g,t);for(y=0;y<h.length;y+=1)l.delete(h[y]);Zi(s,x.prev,_.next),Zi(s,c,x),Zi(s,_,g),o=g,c=_,v-=1,u=[],h=[]}else l.delete(p),ka(p,o,t),Zi(s,p.prev,p.next),Zi(s,p,c===null?s.effect.first:c.next),Zi(s,c,p),c=p;continue}for(u=[],h=[];o!==null&&o!==p;)(l??=new Set).add(o),h.push(o),o=Sa(o.next);if(o===null)continue}(p.f&lr)===0&&u.push(p),c=p,o=Sa(p.next)}if(s.outrogroups!==null){for(const E of s.outrogroups)E.pending.size===0&&(Xh(bd(E.done)),s.outrogroups?.delete(E));s.outrogroups.size===0&&(s.outrogroups=null)}if(o!==null||l!==void 0){var S=[];if(l!==void 0)for(p of l)(p.f&Bu)===0&&S.push(p);for(;o!==null;)(o.f&Bu)===0&&o!==s.fallback&&S.push(o),o=Sa(o.next);var w=S.length;if(w>0){var A=null;Wv(s,S,A)}}}function qv(s,e,t,i,n,r,a,o){var l=(a&Dv)!==0?(a&Lv)===0?Uv(t,!1,!1):Vf(t):null,c=(a&Iv)!==0?Vf(n):null;return{v:l,i:c,e:zh(()=>(r(e,l??t,c??n,o),()=>{s.delete(i)}))}}function ka(s,e,t){if(s.nodes)for(var i=s.nodes.start,n=s.nodes.end,r=e&&(e.f&lr)===0?e.nodes.start:t;i!==null;){var a=Bv(i);if(r.before(i),i===n)return;i=a}}function Zi(s,e,t){e===null?s.effect.first=t:e.next=t,t===null?s.effect.last=e:t.prev=e}function kl(s){let e;const t=Vv(n=>{let r=!1;const a=s.subscribe(o=>{e=o,r&&n()});return r=!0,a});function i(){return kv()?(t(),e):zv(s)}return"set"in s?{get current(){return i()},set current(n){s.set(n)}}:{get current(){return i()}}}const Yf=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let i=0;i<t;i++)if(s[i]!==e[i])return!1;return!0},jv=()=>{const s=[],i={items:s,remember:(n,r)=>{for(let o=0;o<s.length;o++){const l=s[o];if(Yf(r,l.keys)&&l.promise)return l.promise}const a={promise:n(),keys:r};return s.push(a),a.promise},clear:n=>{for(let r=0;r<s.length;r++){const a=s[r];if(Yf(n,a.keys)){s.splice(r,1);return}}}};return Dn("threlte-cache",i),i},Kv=()=>{const s=an("threlte-cache");if(!s)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return s};const Uc="182",Kr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eg=0,Yh=1,tg=2,Zv=3,Jv=0,Wa=1,Xa=2,zs=3,mi=0,hn=1,kn=2,Ci=0,Zr=1,qh=2,jh=3,Kh=4,ng=5,or=100,ig=101,rg=102,sg=103,ag=104,og=200,lg=201,cg=202,ug=203,zl=204,Gl=205,hg=206,dg=207,fg=208,pg=209,mg=210,gg=211,vg=212,_g=213,xg=214,Vl=0,Hl=1,Wl=2,ts=3,Xl=4,Yl=5,ql=6,jl=7,yo=0,yg=1,bg=2,fi=0,wd=1,Ad=2,Ed=3,Cd=4,Rd=5,io=6,Pd=7,Zh="attached",Sg="detached",Nc=300,Ri=301,fr=302,ro=303,so=304,aa=306,pr=1e3,_n=1001,qs=1002,Dt=1003,Fc=1004,Qv=1004,Xr=1005,$v=1005,yt=1006,Hs=1007,e_=1007,zn=1008,t_=1008,Pn=1009,Id=1010,Dd=1011,js=1012,Oc=1013,ti=1014,xn=1015,gi=1016,Bc=1017,kc=1018,Ks=1020,Ld=35902,Ud=35899,Nd=1021,Fd=1022,yn=1023,Pi=1026,cr=1027,zc=1028,bo=1029,ns=1030,Gc=1031,n_=1032,Vc=1033,Ya=33776,qa=33777,ja=33778,Ka=33779,Kl=35840,Zl=35841,Jl=35842,Ql=35843,$l=36196,ec=37492,tc=37496,nc=37488,ic=37489,rc=37490,sc=37491,ac=37808,oc=37809,lc=37810,cc=37811,uc=37812,hc=37813,dc=37814,fc=37815,pc=37816,mc=37817,gc=37818,vc=37819,_c=37820,xc=37821,yc=36492,bc=36494,Sc=36495,Mc=36283,Tc=36284,wc=36285,Ac=36286,Mg=2200,Tg=2201,wg=2202,Zs=2300,Js=2301,Ul=2302,Yr=2400,qr=2401,ao=2402,Hc=2500,Od=2501,Ag=0,Bd=1,Ec=2,Eg=3200,Cg=3201,i_=3202,r_=3203,_r=0,Rg=1,ki="",Nt="srgb",sn="srgb-linear",oo="linear",xt="srgb",s_="",a_="rg",o_="ga",l_=0,Vr=7680,c_=7681,u_=7682,h_=7683,d_=34055,f_=34056,p_=5386,m_=512,g_=513,v_=514,__=515,x_=516,y_=517,b_=518,Jh=519,Pg=512,Ig=513,Dg=514,Wc=515,Lg=516,Ug=517,Xc=518,Ng=519,lo=35044,Qh=35048,S_=35040,M_=35045,T_=35049,w_=35041,A_=35046,E_=35050,C_=35042,R_="100",$h="300 es",Gn=2e3,Qs=2001,P_={COMPUTE:"compute",RENDER:"render"},I_={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},D_={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function Fg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const L_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Gs(s,e){return new L_[s](e)}function Og(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bg(){const s=co("canvas");return s.style.display="block",s}const qf={};let mr=null;function U_(s){mr=s}function N_(){return mr}function uo(...s){const e="THREE."+s.shift();mr?mr("log",e,...s):console.log(e,...s)}function Oe(...s){const e="THREE."+s.shift();mr?mr("warn",e,...s):console.warn(e,...s)}function je(...s){const e="THREE."+s.shift();mr?mr("error",e,...s):console.error(e,...s)}function $s(...s){const e=s.join(" ");e in qf||(qf[e]=!0,Oe(...s))}function F_(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jf=1234567;const Jr=Math.PI/180,ea=180/Math.PI;function Vn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function nt(s,e,t){return Math.max(e,Math.min(t,s))}function kd(s,e){return(s%e+e)%e}function O_(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function B_(s,e,t){return s!==e?(t-s)/(e-s):0}function Za(s,e,t){return(1-t)*s+t*e}function k_(s,e,t,i){return Za(s,e,1-Math.exp(-t*i))}function z_(s,e=1){return e-Math.abs(kd(s,e*2)-e)}function G_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function V_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function H_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function W_(s,e){return s+Math.random()*(e-s)}function X_(s){return s*(.5-Math.random())}function Y_(s){s!==void 0&&(jf=s);let e=jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q_(s){return s*Jr}function j_(s){return s*ea}function K_(s){return(s&s-1)===0&&s!==0}function Z_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function J_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Q_(s,e,t,i,n){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(n){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*u,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ta={DEG2RAD:Jr,RAD2DEG:ea,generateUUID:Vn,clamp:nt,euclideanModulo:kd,mapLinear:O_,inverseLerp:B_,lerp:Za,damp:k_,pingpong:z_,smoothstep:G_,smootherstep:V_,randInt:H_,randFloat:W_,randFloatSpread:X_,seededRandom:Y_,degToRad:q_,radToDeg:j_,isPowerOfTwo:K_,ceilPowerOfTwo:Z_,floorPowerOfTwo:J_,setQuaternionFromProperEuler:Q_,normalize:at,denormalize:vn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3],d=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*v;m<0&&(d=-d,f=-f,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){const y=Math.acos(m),x=Math.sin(y);g=Math.sin(g*y)/x,o=Math.sin(o*y)/x,l=l*g+d*o,c=c*g+f*o,u=u*g+p*o,h=h*g+v*o}else{l=l*g+d*o,c=c*g+f*o,u=u*g+p*o,h=h*g+v*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(r/2),d=l(i/2),f=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-r*n),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=n+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ku=new D,Kf=new Kt;class rt{constructor(e,t,i,n,r,a,o,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],v=n[0],m=n[3],g=n[6],y=n[1],x=n[4],_=n[7],S=n[2],w=n[5],A=n[8];return r[0]=a*v+o*y+l*S,r[3]=a*m+o*x+l*w,r[6]=a*g+o*_+l*A,r[1]=c*v+u*y+h*S,r[4]=c*m+u*x+h*w,r[7]=c*g+u*_+h*A,r[2]=d*v+f*y+p*S,r[5]=d*m+f*x+p*w,r[8]=d*g+f*_+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,p=t*h+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=h*v,e[1]=(n*c-u*i)*v,e[2]=(o*i-n*a)*v,e[3]=d*v,e[4]=(u*t-n*l)*v,e[5]=(n*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zu.makeScale(e,t)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zu=new rt,Zf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jf=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $_(){const s={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(n.r=Gi(n.r),n.g=Gi(n.g),n.b=Gi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(n.r=Ws(n.r),n.g=Ws(n.g),n.b=Ws(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ki?oo:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[sn]:{primaries:e,whitePoint:i,transfer:oo,toXYZ:Zf,fromXYZ:Jf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Zf,fromXYZ:Jf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),s}const lt=$_();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _s;class kg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=co("canvas")),_s.width=e.width,_s.height=e.height;const n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ex=0;class ur{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Gu(n[a].image)):r.push(Gu(n[a]))}else r=Gu(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Gu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let tx=0;const Vu=new D;class Rt extends Ii{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=_n,n=_n,r=yt,a=zn,o=yn,l=Pn,c=Rt.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Vn(),this.name="",this.source=new ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Nc;Rt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,n=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(f+1)/2,S=(g+1)/2,w=(u+d)/4,A=(h+v)/4,E=(p+m)/4;return x>_&&x>S?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=w/i,r=A/i):_>S?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=w/n,r=E/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=A/r,n=E/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zd extends Ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const n={width:e,height:t,depth:i.depth},r=new Rt(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new ur(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends zd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yc extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nx extends Hn{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Yc(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class qc extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ix extends Hn{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new qc(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class Lt{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bo.copy(i.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),ko.subVectors(this.max,Ma),xs.subVectors(e.a,Ma),ys.subVectors(e.b,Ma),bs.subVectors(e.c,Ma),Ji.subVectors(ys,xs),Qi.subVectors(bs,ys),wr.subVectors(xs,bs);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-wr.z,wr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,wr.z,0,-wr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-wr.y,wr.x,0];return!Hu(t,xs,ys,bs,ko)||(t=[1,0,0,0,1,0,0,0,1],!Hu(t,xs,ys,bs,ko))?!1:(zo.crossVectors(Ji,Qi),t=[zo.x,zo.y,zo.z],Hu(t,xs,ys,bs,ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new D,new D,new D,new D,new D,new D,new D,new D],ci=new D,Bo=new Lt,xs=new D,ys=new D,bs=new D,Ji=new D,Qi=new D,wr=new D,Ma=new D,ko=new D,zo=new D,Ar=new D;function Hu(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Ar.fromArray(s,r);const o=n.x*Math.abs(Ar.x)+n.y*Math.abs(Ar.y)+n.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rx=new Lt,Ta=new D,Wu=new D;class Ft{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rx.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ta,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(Wu)),this.expandByPoint(Ta.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Li=new D,Xu=new D,Go=new D,$i=new D,Yu=new D,Vo=new D,qu=new D;class Wi{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Xu.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Xu);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=$i.dot(this.direction),l=-$i.dot(Go),c=$i.lengthSq(),u=Math.abs(1-a*a);let h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=r*u,h>=0)if(d>=-p)if(d<=p){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Xu).addScaledVector(Go,d),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),n=Li.dot(Li)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,n,r){Yu.subVectors(t,e),Vo.subVectors(i,e),qu.crossVectors(Yu,Vo);let a=this.direction.dot(qu),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$i.subVectors(this.origin,e);const l=o*this.direction.dot(Vo.crossVectors($i,Vo));if(l<0)return null;const c=o*this.direction.dot(Yu.cross($i));if(c<0||l+c>a)return null;const u=-o*$i.dot(qu);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,i,n,r,a,o,l,c,u,h,d,f,p,v,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,u,h,d,f,p,v,m)}set(e,t,i,n,r,a,o,l,c,u,h,d,f,p,v,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,n=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,p=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,p=o*u,v=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sx,e,ax)}lookAt(e,t,i){const n=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),er.crossVectors(i,On),er.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),er.crossVectors(i,On)),er.normalize(),Ho.crossVectors(On,er),n[0]=er.x,n[4]=Ho.x,n[8]=On.x,n[1]=er.y,n[5]=Ho.y,n[9]=On.y,n[2]=er.z,n[6]=Ho.z,n[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],v=i[6],m=i[10],g=i[14],y=i[3],x=i[7],_=i[11],S=i[15],w=n[0],A=n[4],E=n[8],b=n[12],M=n[1],L=n[5],I=n[9],U=n[13],F=n[2],V=n[6],B=n[10],H=n[14],Y=n[3],q=n[7],X=n[11],N=n[15];return r[0]=a*w+o*M+l*F+c*Y,r[4]=a*A+o*L+l*V+c*q,r[8]=a*E+o*I+l*B+c*X,r[12]=a*b+o*U+l*H+c*N,r[1]=u*w+h*M+d*F+f*Y,r[5]=u*A+h*L+d*V+f*q,r[9]=u*E+h*I+d*B+f*X,r[13]=u*b+h*U+d*H+f*N,r[2]=p*w+v*M+m*F+g*Y,r[6]=p*A+v*L+m*V+g*q,r[10]=p*E+v*I+m*B+g*X,r[14]=p*b+v*U+m*H+g*N,r[3]=y*w+x*M+_*F+S*Y,r[7]=y*A+x*L+_*V+S*q,r[11]=y*E+x*I+_*B+S*X,r[15]=y*b+x*U+_*H+S*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],y=l*f-c*d,x=o*f-c*h,_=o*d-l*h,S=a*f-c*u,w=a*d-l*u,A=a*h-o*u;return t*(v*y-m*x+g*_)-i*(p*y-m*S+g*w)+n*(p*x-v*S+g*A)-r*(p*_-v*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],y=h*m*c-v*d*c+v*l*f-o*m*f-h*l*g+o*d*g,x=p*d*c-u*m*c-p*l*f+a*m*f+u*l*g-a*d*g,_=u*v*c-p*h*c+p*o*f-a*v*f-u*o*g+a*h*g,S=p*h*l-u*v*l-p*o*d+a*v*d+u*o*m-a*h*m,w=t*y+i*x+n*_+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(v*d*r-h*m*r-v*n*f+i*m*f+h*n*g-i*d*g)*A,e[2]=(o*m*r-v*l*r+v*n*c-i*m*c-o*n*g+i*l*g)*A,e[3]=(h*l*r-o*d*r-h*n*c+i*d*c+o*n*f-i*l*f)*A,e[4]=x*A,e[5]=(u*m*r-p*d*r+p*n*f-t*m*f-u*n*g+t*d*g)*A,e[6]=(p*l*r-a*m*r-p*n*c+t*m*c+a*n*g-t*l*g)*A,e[7]=(a*d*r-u*l*r+u*n*c-t*d*c-a*n*f+t*l*f)*A,e[8]=_*A,e[9]=(p*h*r-u*v*r-p*i*f+t*v*f+u*i*g-t*h*g)*A,e[10]=(a*v*r-p*o*r+p*i*c-t*v*c-a*i*g+t*o*g)*A,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*f-t*o*f)*A,e[12]=S*A,e[13]=(u*v*n-p*h*n+p*i*d-t*v*d-u*i*m+t*h*m)*A,e[14]=(p*o*n-a*v*n-p*i*l+t*v*l+a*i*m-t*o*m)*A,e[15]=(a*h*n-u*o*n+u*i*l-t*h*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,p=r*h,v=a*u,m=a*h,g=o*h,y=l*c,x=l*u,_=l*h,S=i.x,w=i.y,A=i.z;return n[0]=(1-(v+g))*S,n[1]=(f+_)*S,n[2]=(p-x)*S,n[3]=0,n[4]=(f-_)*w,n[5]=(1-(d+g))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(p+x)*A,n[9]=(m-y)*A,n[10]=(1-(d+v))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;if(e.x=n[12],e.y=n[13],e.z=n[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Ss.set(n[0],n[1],n[2]).length();const a=Ss.set(n[4],n[5],n[6]).length(),o=Ss.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),ui.copy(this);const c=1/r,u=1/a,h=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,t.setFromRotationMatrix(ui),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=Gn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n);let p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===Gn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Qs)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Gn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n);let p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===Gn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===Qs)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ss=new D,ui=new Ye,sx=new D(0,0,0),ax=new D(1,1,1),er=new D,Ho=new D,On=new D,Qf=new Ye,$f=new Kt;class Xn{constructor(e=0,t=0,i=0,n=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $f.setFromEuler(this),this.setFromQuaternion($f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ox=0;const ep=new D,Ms=new Kt,Ui=new Ye,Wo=new D,wa=new D,lx=new D,cx=new Kt,tp=new D(1,0,0),np=new D(0,1,0),ip=new D(0,0,1),rp={type:"added"},ux={type:"removed"},Ts={type:"childadded",child:null},ju={type:"childremoved",child:null};class ht extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new D,t=new Xn,i=new Kt,n=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ye},normalMatrix:{value:new rt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(tp,e)}rotateY(e){return this.rotateOnAxis(np,e)}rotateZ(e){return this.rotateOnAxis(ip,e)}translateOnAxis(e,t){return ep.copy(e).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tp,e)}translateY(e){return this.translateOnAxis(np,e)}translateZ(e){return this.translateOnAxis(ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wo.copy(e):Wo.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(wa,Wo,this.up):Ui.lookAt(Wo,wa,this.up),this.quaternion.setFromRotationMatrix(Ui),n&&(Ui.extractRotation(n.matrixWorld),Ms.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rp),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ux),ju.child=e,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rp),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ht.DEFAULT_UP=new D(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new D,Ni=new D,Ku=new D,Fi=new D,ws=new D,As=new D,sp=new D,Zu=new D,Ju=new D,Qu=new D,$u=new pt,eh=new pt,th=new pt;class In{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),hi.subVectors(e,t),n.cross(hi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){hi.subVectors(n,t),Ni.subVectors(i,t),Ku.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(Ni),l=hi.dot(Ku),c=Ni.dot(Ni),u=Ni.dot(Ku),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return $u.setScalar(0),eh.setScalar(0),th.setScalar(0),$u.fromBufferAttribute(e,t),eh.fromBufferAttribute(e,i),th.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector($u,r.x),a.addScaledVector(eh,r.y),a.addScaledVector(th,r.z),a}static isFrontFacing(e,t,i,n){return hi.subVectors(i,t),Ni.subVectors(e,t),hi.cross(Ni).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),hi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;ws.subVectors(n,i),As.subVectors(r,i),Zu.subVectors(e,i);const l=ws.dot(Zu),c=As.dot(Zu);if(l<=0&&c<=0)return t.copy(i);Ju.subVectors(e,n);const u=ws.dot(Ju),h=As.dot(Ju);if(u>=0&&h<=u)return t.copy(n);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ws,a);Qu.subVectors(e,r);const f=ws.dot(Qu),p=As.dot(Qu);if(p>=0&&f<=p)return t.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(As,o);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return sp.subVectors(r,n),o=(h-u)/(h-u+(f-p)),t.copy(n).addScaledVector(sp,o);const g=1/(m+v+d);return a=v*g,o=d*g,t.copy(i).addScaledVector(ws,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function nh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=lt.workingColorSpace){if(e=kd(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=nh(a,r,e+1/3),this.g=nh(a,r,e),this.b=nh(a,r,e-1/3)}return lt.colorSpaceToWorking(this,n),this}setStyle(e,t=Nt){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=zg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return lt.workingToColorSpace(cn.copy(this),e),Math.round(nt(cn.r*255,0,255))*65536+Math.round(nt(cn.g*255,0,255))*256+Math.round(nt(cn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(cn.copy(this),t);const i=cn.r,n=cn.g,r=cn.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Nt){lt.workingToColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,n=cn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(Xo);const i=Za(tr.h,Xo.h,t),n=Za(tr.s,Xo.s,t),r=Za(tr.l,Xo.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Ie;Ie.NAMES=zg;let hx=0;class Zt extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Zr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Gl,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Gl&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bn extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zi=dx();function dx(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}function Cn(s){Math.abs(s)>65504&&Oe("DataUtils.toHalfFloat(): Value out of range."),s=nt(s,-65504,65504),zi.floatView[0]=s;const e=zi.uint32View[0],t=e>>23&511;return zi.baseTable[t]+((e&8388607)>>zi.shiftTable[t])}function za(s){const e=s>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[e]+(s&1023)]+zi.exponentTable[e],zi.floatView[0]}class fx{static toHalfFloat(e){return Cn(e)}static fromHalfFloat(e){return za(e)}}const kt=new D,Yo=new fe;let px=0;class gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:px++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lo,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}}class mx extends gt{constructor(e,t,i){super(new Int8Array(e),t,i)}}class gx extends gt{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class vx extends gt{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class _x extends gt{constructor(e,t,i){super(new Int16Array(e),t,i)}}class Gd extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xx extends gt{constructor(e,t,i){super(new Int32Array(e),t,i)}}class Vd extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yx extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=za(this.array[e*this.itemSize]);return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=Cn(t),this}getY(e){let t=za(this.array[e*this.itemSize+1]);return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=Cn(t),this}getZ(e){let t=za(this.array[e*this.itemSize+2]);return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=Cn(t),this}getW(e){let t=za(this.array[e*this.itemSize+3]);return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=Cn(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=Cn(t),this.array[e+1]=Cn(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.array[e+0]=Cn(t),this.array[e+1]=Cn(i),this.array[e+2]=Cn(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=Cn(t),this.array[e+1]=Cn(i),this.array[e+2]=Cn(n),this.array[e+3]=Cn(r),this}}class He extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bx=0;const Zn=new Ye,ih=new ht,Es=new D,Bn=new Lt,Aa=new Lt,en=new D;class it extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?Vd:Gd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new He(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Bn.min,Aa.min),Bn.expandByPoint(en),en.addVectors(Bn.max,Aa.max),Bn.expandByPoint(en)):(Bn.expandByPoint(Aa.min),Bn.expandByPoint(Aa.max))}Bn.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(en));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),en.add(Es)),n=Math.max(n,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let E=0;E<i.count;E++)o[E]=new D,l[E]=new D;const c=new D,u=new D,h=new D,d=new fe,f=new fe,p=new fe,v=new D,m=new D;function g(E,b,M){c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(L),o[E].add(v),o[b].add(v),o[M].add(v),l[E].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let E=0,b=y.length;E<b;++E){const M=y[E],L=M.start,I=M.count;for(let U=L,F=L+I;U<F;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new D,_=new D,S=new D,w=new D;function A(E){S.fromBufferAttribute(n,E),w.copy(S);const b=o[E];x.copy(b),x.sub(S.multiplyScalar(S.dot(b))).normalize(),_.crossVectors(w,b);const L=_.dot(l[E])<0?-1:1;a.setXYZW(E,x.x,x.y,x.z,L)}for(let E=0,b=y.length;E<b;++E){const M=y[E],L=M.start,I=M.count;for(let U=L,F=L+I;U<F;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new gt(d,u,h)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new it,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ap=new Ye,Er=new Wi,qo=new Ft,op=new D,jo=new D,Ko=new D,Zo=new D,rh=new D,Jo=new D,lp=new D,Qo=new D;class Tt extends ht{constructor(e=new it,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){Jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(rh.fromBufferAttribute(h,e),a?Jo.addScaledVector(rh,u):Jo.addScaledVector(rh.sub(t),u))}t.add(Jo)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),Er.copy(e.ray).recast(e.near),!(qo.containsPoint(Er.origin)===!1&&(Er.intersectSphere(qo,op)===null||Er.origin.distanceToSquared(op)>(e.far-e.near)**2))&&(ap.copy(r).invert(),Er.copy(e.ray).applyMatrix4(ap),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const m=d[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,S=x;_<S;_+=3){const w=o.getX(_),A=o.getX(_+1),E=o.getX(_+2);n=$o(this,g,e,i,c,u,h,w,A,E),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);n=$o(this,a,e,i,c,u,h,y,x,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const m=d[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,S=x;_<S;_+=3){const w=_,A=_+1,E=_+2;n=$o(this,g,e,i,c,u,h,w,A,E),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const y=m,x=m+1,_=m+2;n=$o(this,a,e,i,c,u,h,y,x,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Sx(s,e,t,i,n,r,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===mi,o),l===null)return null;Qo.copy(o),Qo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Qo);return c<t.near||c>t.far?null:{distance:c,point:Qo.clone(),object:s}}function $o(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,jo),s.getVertexPosition(l,Ko),s.getVertexPosition(c,Zo);const u=Sx(s,e,t,i,jo,Ko,Zo,lp);if(u){const h=new D;In.getBarycoord(lp,jo,Ko,Zo,h),n&&(u.uv=In.getInterpolatedAttribute(n,o,l,c,h,new fe)),r&&(u.uv1=In.getInterpolatedAttribute(r,o,l,c,h,new fe)),a&&(u.normal=In.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};In.getNormal(jo,Ko,Zo,d.normal),u.face=d,u.barycoord=h}return u}class xr extends it{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,n,a,2),p("x","z","y",1,-1,e,i,-t,n,a,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(h,2));function p(v,m,g,y,x,_,S,w,A,E,b){const M=_/A,L=S/E,I=_/2,U=S/2,F=w/2,V=A+1,B=E+1;let H=0,Y=0;const q=new D;for(let X=0;X<B;X++){const N=X*L-U;for(let W=0;W<V;W++){const K=W*M-I;q[v]=K*y,q[m]=N*x,q[g]=F,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=w>0?1:-1,u.push(q.x,q.y,q.z),h.push(W/A),h.push(1-X/E),H+=1}}for(let X=0;X<E;X++)for(let N=0;N<A;N++){const W=d+N+V*X,K=d+N+V*(X+1),re=d+(N+1)+V*(X+1),te=d+(N+1)+V*X;l.push(W,K,te),l.push(K,re,te),Y+=6}o.addGroup(f,Y,b),f+=Y,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function na(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function gn(s){const e={};for(let t=0;t<s.length;t++){const i=na(s[t]);for(const n in i)e[n]=i[n]}return e}function Mx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const So={clone:na,merge:gn};var Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=Mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kc extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new D,cp=new fe,up=new fe;class Yt extends Kc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,t){return this.getViewBounds(e,cp,up),t.subVectors(up,cp)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Rs=1;class Hd extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Yt(Cs,Rs,e,t);n.layers=this.layers,this.add(n);const r=new Yt(Cs,Rs,e,t);r.layers=this.layers,this.add(r);const a=new Yt(Cs,Rs,e,t);a.layers=this.layers,this.add(a);const o=new Yt(Cs,Rs,e,t);o.layers=this.layers,this.add(o);const l=new Yt(Cs,Rs,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Cs,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Mo extends Rt{constructor(e=[],t=Ri,i,n,r,a,o,l,c,u){super(e,t,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zc extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Mo(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new xr(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ci});r.uniforms.tEquirect.value=t;const a=new Tt(n,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=yt),new Hd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}class Ai extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ax={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ax)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Jc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new Jc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=i}clone(){return new Qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Wd=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class oa{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lo,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new D;class Vi{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xd extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ps;const Ea=new D,Is=new D,Ds=new D,Ls=new fe,Ca=new fe,Vg=new Ye,el=new D,Ra=new D,tl=new D,hp=new fe,sh=new fe,dp=new fe;class Hg extends ht{constructor(e=new Xd){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new it;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oa(t,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new Vi(i,3,0,!1)),Ps.setAttribute("uv",new Vi(i,2,3,!1))}this.geometry=Ps,this.material=e,this.center=new fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Vg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Ds.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;nl(el.set(-.5,-.5,0),Ds,a,Is,n,r),nl(Ra.set(.5,-.5,0),Ds,a,Is,n,r),nl(tl.set(.5,.5,0),Ds,a,Is,n,r),hp.set(0,0),sh.set(1,0),dp.set(1,1);let o=e.ray.intersectTriangle(el,Ra,tl,!1,Ea);if(o===null&&(nl(Ra.set(-.5,.5,0),Ds,a,Is,n,r),sh.set(0,1),o=e.ray.intersectTriangle(el,tl,Ra,!1,Ea),o===null))return;const l=e.ray.origin.distanceTo(Ea);l<e.near||l>e.far||t.push({distance:l,point:Ea.clone(),uv:In.getInterpolation(Ea,el,Ra,tl,hp,sh,dp,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nl(s,e,t,i,n,r){Ls.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Ca.x=r*Ls.x-n*Ls.y,Ca.y=n*Ls.x+r*Ls.y):Ca.copy(Ls),s.copy(e),s.x+=Ca.x,s.y+=Ca.y,s.applyMatrix4(Vg)}const il=new D,fp=new D;class Wg extends ht{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){il.setFromMatrixPosition(this.matrixWorld);const n=e.ray.origin.distanceTo(il);this.getObjectForDistance(n).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){il.setFromMatrixPosition(e.matrixWorld),fp.setFromMatrixPosition(this.matrixWorld);const i=il.distanceTo(fp)/e.zoom;t[0].object.visible=!0;let n,r;for(n=1,r=t.length;n<r;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),i>=a)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<r;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let n=0,r=i.length;n<r;n++){const a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const pp=new D,mp=new pt,gp=new pt,Ex=new D,vp=new Ye,rl=new D,ah=new Ft,_p=new Ye,oh=new Wi;class Yd extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zh,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,rl),this.boundingBox.expandByPoint(rl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ft),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,rl),this.boundingSphere.expandByPoint(rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ah.copy(this.boundingSphere),ah.applyMatrix4(n),e.ray.intersectsSphere(ah)!==!1&&(_p.copy(n).invert(),oh.copy(e.ray).applyMatrix4(_p),!(this.boundingBox!==null&&oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;mp.fromBufferAttribute(n.attributes.skinIndex,e),gp.fromBufferAttribute(n.attributes.skinWeight,e),pp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=gp.getComponent(r);if(a!==0){const o=mp.getComponent(r);vp.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Ex.copy(pp).applyMatrix4(vp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $c extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pi extends Rt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Dt,u=Dt,h,d){super(null,a,o,l,c,u,n,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xp=new Ye,Cx=new Ye;class To{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Cx;xp.multiplyMatrices(o,t[r]),xp.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new To(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new pi(t,e,e,yn,xn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Oe("Skeleton: No bone found with UUID:",r),a=new $c),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class gr extends gt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new Ye,yp=new Ye,sl=[],bp=new Lt,Rx=new Ye,Pa=new Tt,Ia=new Ft;class eu extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Rx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Us),bp.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(bp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ft),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Us),Ia.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(i),e.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Us),yp.multiplyMatrices(i,Us),Pa.matrixWorld=yp,Pa.raycast(e,sl);for(let a=0,o=sl.length;a<o;a++){const l=sl[a];l.instanceId=r,l.object=this,t.push(l)}sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(n*this.count),n,this.count,zc,xn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lh=new D,Px=new D,Ix=new rt;class wi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=lh.subVectors(i,t).cross(Px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(lh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ix.getNormalMatrix(e),n=this.coplanarPoint(lh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Ft,Dx=new fe(.5,.5),al=new D;class la{constructor(e=new wi,t=new wi,i=new wi,n=new wi,r=new wi,a=new wi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){const n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],y=r[12],x=r[13],_=r[14],S=r[15];if(n[0].setComponents(c-a,f-u,g-p,S-y).normalize(),n[1].setComponents(c+a,f+u,g+p,S+y).normalize(),n[2].setComponents(c+o,f+h,g+v,S+x).normalize(),n[3].setComponents(c-o,f-h,g-v,S-x).normalize(),i)n[4].setComponents(l,d,m,_).normalize(),n[5].setComponents(c-l,f-d,g-m,S-_).normalize();else if(n[4].setComponents(c-l,f-d,g-m,S-_).normalize(),t===Gn)n[5].setComponents(c+l,f+d,g+m,S+_).normalize();else if(t===Qs)n[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const t=Dx.distanceTo(e.center);return Cr.radius=.7071067811865476+t,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(al.x=n.normal.x>0?e.max.x:e.min.x,al.y=n.normal.y>0?e.max.y:e.min.y,al.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bi=new Ye,Si=new la;class tu{constructor(){this.coordinateSystem=Gn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Si.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Si.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Si.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Si.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Si.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Si.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Si.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Si.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Si.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Si.containsPoint(e))return!0}return!1}clone(){return new tu}}function ch(s,e){return s-e}function Lx(s,e){return s.z-e.z}function Ux(s,e){return e.z-s.z}class Nx{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}}const An=new Ye,Fx=new Ie(1,1,1),Sp=new la,Ox=new tu,ol=new Lt,Rr=new Ft,Da=new D,Mp=new D,Bx=new D,uh=new Nx,un=new Tt,ll=[];function kx(s,e,t=0){const i=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const n=s.count;for(let r=0;r<n;r++)for(let a=0;a<i;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*i);e.needsUpdate=!0}function Pr(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let i=0;i<t;i++)e[i]=s[i]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class Xg extends Tt{constructor(e,t,i=t*2,n){super(new it,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new pi(t,e,e,yn,xn);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new pi(t,e,e,bo,ti);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new pi(t,e,e,yn,xn);i.colorSpace=lt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(i*l),h=new gt(u,l,c);t.setAttribute(r,h)}if(e.getIndex()!==null){const r=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new gt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=e.getAttribute(i),r=t.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,An),this.getBoundingBoxAt(r,ol).applyMatrix4(An),e.union(ol)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,An),this.getBoundingSphereAt(r,Rr).applyMatrix4(An),e.union(Rr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const i={visible:!0,active:!0,geometryIndex:e};let n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(ch),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=i):(n=this._instanceInfo.length,this._instanceInfo.push(i));const r=this._matricesTexture;An.identity().toArray(r.image.data,n*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Fx.toArray(a.image.data,n*4),a.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?a.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(ch),l=this._availableGeometryIds.shift(),r[l]=n):(l=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(l,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(n&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const u in i.attributes){const h=t.getAttribute(u),d=i.getAttribute(u);kx(h,d,l);const f=h.itemSize;for(let p=h.count,v=c;p<v;p++){const m=l+p;for(let g=0;g<f;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(n){const u=o.indexStart,h=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(u+d,l+a.getX(d));for(let d=a.count,f=h;d<f;d++)r.setX(u+d,l);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,n=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),r=this.geometry;for(let a=0,o=i.length;a<o;a++){const l=n[a],c=i[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:h,reservedIndexCount:d}=c,f=r.index,p=f.array,v=e-h;for(let m=u;m<u+d;m++)p[m]=p[m]+v;f.array.copyWithin(t,u,u+d),f.addUpdateRange(t,d),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:h}=c,d=r.attributes;for(const f in d){const p=d[f],{array:v,itemSize:m}=p;v.copyWithin(e*m,u*m,(u+h)*m),p.addUpdateRange(e*m,h*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){const r=new Lt,a=i.index,o=i.attributes.position;for(let l=n.start,c=n.start+n.count;l<c;l++){let u=l;a&&(u=a.getX(u)),r.expandByPoint(Da.fromBufferAttribute(o,u))}n.boundingBox=r}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){const r=new Ft;this.getBoundingBoxAt(e,ol),ol.getCenter(r.center);const a=i.index,o=i.attributes.position;let l=0;for(let c=n.start,u=n.start+n.count;c<u;c++){let h=c;a&&(h=a.getX(h)),Da.fromBufferAttribute(o,h),l=Math.max(l,r.center.distanceToSquared(Da))}r.radius=Math.sqrt(l),n.boundingSphere=r}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(ch);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const n=new Int32Array(e),r=new Int32Array(e);Pr(this._multiDrawCounts,n),Pr(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Pr(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Pr(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Pr(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new it,this._initializeGeometry(r));const a=this.geometry;r.index&&Pr(r.index.array,a.index.array);for(const o in r.attributes)Pr(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,a=this.geometry;un.material=this.material,un.geometry.index=a.index,un.geometry.attributes=a.attributes,un.geometry.boundingBox===null&&(un.geometry.boundingBox=new Lt),un.geometry.boundingSphere===null&&(un.geometry.boundingSphere=new Ft);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,u=n[c];un.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,un.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,un.geometry.boundingBox),this.getBoundingSphereAt(c,un.geometry.boundingSphere),un.raycast(e,ll);for(let h=0,d=ll.length;h<d;h++){const f=ll[h];f.object=this,f.batchId=o,t.push(f)}ll.length=0}un.material=null,un.geometry.index=null,un.geometry.attributes={},un.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,n,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=n.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data,v=i.isArrayCamera?Ox:Sp;d&&!i.isArrayCamera&&(An.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Sp.setFromProjectionMatrix(An,i.coordinateSystem,i.reversedDepth));let m=0;if(this.sortObjects){An.copy(this.matrixWorld).invert(),Da.setFromMatrixPosition(i.matrixWorld).applyMatrix4(An),Mp.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(An);for(let x=0,_=l.length;x<_;x++)if(l[x].visible&&l[x].active){const S=l[x].geometryIndex;this.getMatrixAt(x,An),this.getBoundingSphereAt(S,Rr).applyMatrix4(An);let w=!1;if(d&&(w=!v.intersectsSphere(Rr,i)),!w){const A=h[S],E=Bx.subVectors(Rr.center,Da).dot(Mp);uh.push(A.start,A.count,E,x)}}const g=uh.list,y=this.customSort;y===null?g.sort(r.transparent?Ux:Lx):y.call(this,g,i);for(let x=0,_=g.length;x<_;x++){const S=g[x];c[m]=S.start*o,u[m]=S.count,p[m]=S.index,m++}uh.reset()}else for(let g=0,y=l.length;g<y;g++)if(l[g].visible&&l[g].active){const x=l[g].geometryIndex;let _=!1;if(d&&(this.getMatrixAt(g,An),this.getBoundingSphereAt(x,Rr).applyMatrix4(An),_=!v.intersectsSphere(Rr,i)),!_){const S=h[x];c[m]=S.start*o,u[m]=S.count,p[m]=g,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,r,a){this.onBeforeRender(e,null,n,r,a)}}class dn extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new D,Rc=new D,Tp=new Ye,La=new Wi,cl=new Ft,hh=new D,wp=new D;class Hi extends ht{constructor(e=new it,t=new dn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Cc.fromBufferAttribute(t,n-1),Rc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Cc.distanceTo(Rc);e.setAttribute("lineDistance",new He(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(n),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;Tp.copy(n).invert(),La.copy(e.ray).applyMatrix4(Tp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){const g=u.getX(v),y=u.getX(v+1),x=ul(this,e,La,l,g,y,v);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(p-1),m=u.getX(f),g=ul(this,e,La,l,v,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){const g=ul(this,e,La,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){const v=ul(this,e,La,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ul(s,e,t,i,n,r,a){const o=s.geometry.attributes.position;if(Cc.fromBufferAttribute(o,n),Rc.fromBufferAttribute(o,r),t.distanceSqToSegment(Cc,Rc,hh,wp)>i)return;hh.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hh);if(!(c<e.near||c>e.far))return{distance:c,point:wp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Ap=new D,Ep=new D;class vi extends Hi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Ap.fromBufferAttribute(t,n),Ep.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ap.distanceTo(Ep);e.setAttribute("lineDistance",new He(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qd extends Hi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let nu=class extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Cp=new Ye,ed=new Wi,hl=new Ft,dl=new D;class jd extends ht{constructor(e=new it,t=new nu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(n),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;Cp.copy(n).invert(),ed.copy(e.ray).applyMatrix4(Cp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){const m=c.getX(p);dl.fromBufferAttribute(h,m),Rp(dl,m,l,n,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,v=f;p<v;p++)dl.fromBufferAttribute(h,p),Rp(dl,p,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rp(s,e,t,i,n,r,a){const o=ed.distanceSqToPoint(s);if(o<t){const l=new D;ed.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Yg extends Rt{constructor(e,t,i,n,r=yt,a=yt,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class zx extends Yg{constructor(e,t,i,n,r,a,o,l){super({},e,t,i,n,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Gx extends Rt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Dt,this.minFilter=Dt,this.generateMipmaps=!1,this.needsUpdate=!0}}class iu extends Rt{constructor(e,t,i,n,r,a,o,l,c,u,h,d){super(null,a,o,l,c,u,n,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Vx extends iu{constructor(e,t,i,n,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=_n,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hx extends iu{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,Ri),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Wx extends Rt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ia extends Rt{constructor(e,t,i=ti,n,r,a,o=Dt,l=Dt,c,u=Pi,h=1){if(u!==Pi&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qg extends ia{constructor(e,t=ti,i=Ri,n,r,a=Dt,o=Dt,l,c=Pi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,n,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kd extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ru extends it{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=i*2+r,v=n+1,m=new D,g=new D;for(let y=0;y<=p;y++){let x=0,_=0,S=0,w=0;if(y<=i){const b=y/i,M=b*Math.PI/2;_=-u-e*Math.cos(M),S=e*Math.sin(M),w=-e*Math.cos(M),x=b*h}else if(y<=i+r){const b=(y-i)/r;_=-u+b*t,S=e,w=0,x=h+b*d}else{const b=(y-i-r)/i,M=b*Math.PI/2;_=u+e*Math.sin(M),S=e*Math.cos(M),w=e*Math.sin(M),x=h+d+b*h}const A=Math.max(0,Math.min(1,x/f));let E=0;y===0?E=.5/n:y===p&&(E=-.5/n);for(let b=0;b<=n;b++){const M=b/n,L=M*Math.PI*2,I=Math.sin(L),U=Math.cos(L);g.x=-S*U,g.y=_,g.z=S*I,o.push(g.x,g.y,g.z),m.set(-S*U,w,S*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+E,A)}if(y>0){const b=(y-1)*v;for(let M=0;M<n;M++){const L=b+M,I=b+M+1,U=y*v+M,F=y*v+M+1;a.push(L,I,U),a.push(I,F,U)}}}this.setIndex(a),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class su extends it{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new D,u=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(o,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wo extends it{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const v=[],m=i/2;let g=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function y(){const _=new D,S=new D;let w=0;const A=(t-e)/i;for(let E=0;E<=r;E++){const b=[],M=E/r,L=M*(t-e)+e;for(let I=0;I<=n;I++){const U=I/n,F=U*l+o,V=Math.sin(F),B=Math.cos(F);S.x=L*V,S.y=-M*i+m,S.z=L*B,h.push(S.x,S.y,S.z),_.set(V,A,B).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-M),b.push(p++)}v.push(b)}for(let E=0;E<n;E++)for(let b=0;b<r;b++){const M=v[b][E],L=v[b+1][E],I=v[b+1][E+1],U=v[b][E+1];(e>0||b!==0)&&(u.push(M,L,U),w+=3),(t>0||b!==r-1)&&(u.push(L,I,U),w+=3)}c.addGroup(g,w,0),g+=w}function x(_){const S=p,w=new fe,A=new D;let E=0;const b=_===!0?e:t,M=_===!0?1:-1;for(let I=1;I<=n;I++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),p++;const L=p;for(let I=0;I<=n;I++){const F=I/n*l+o,V=Math.cos(F),B=Math.sin(F);A.x=b*B,A.y=m*M,A.z=b*V,h.push(A.x,A.y,A.z),d.push(0,M,0),w.x=V*.5+.5,w.y=B*.5*M+.5,f.push(w.x,w.y),p++}for(let I=0;I<n;I++){const U=S+I,F=L+I;_===!0?u.push(F,F+1,U):u.push(F+1,F,U),E+=3}c.addGroup(g,E,_===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends wo{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ao(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yr extends it{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const r=[],a=[];o(n),c(i),u(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new D,_=new D,S=new D;for(let w=0;w<t.length;w+=3)f(t[w+0],x),f(t[w+1],_),f(t[w+2],S),l(x,_,S,y)}function l(y,x,_,S){const w=S+1,A=[];for(let E=0;E<=w;E++){A[E]=[];const b=y.clone().lerp(_,E/w),M=x.clone().lerp(_,E/w),L=w-E;for(let I=0;I<=L;I++)I===0&&E===w?A[E][I]=b:A[E][I]=b.clone().lerp(M,I/L)}for(let E=0;E<w;E++)for(let b=0;b<2*(w-E)-1;b++){const M=Math.floor(b/2);b%2===0?(d(A[E][M+1]),d(A[E+1][M]),d(A[E][M])):(d(A[E][M+1]),d(A[E+1][M+1]),d(A[E+1][M]))}}function c(y){const x=new D;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){const y=new D;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=m(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;a.push(_,1-S)}p(),h()}function h(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],S=a[y+4],w=Math.max(x,_,S),A=Math.min(x,_,S);w>.9&&A<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function p(){const y=new D,x=new D,_=new D,S=new D,w=new fe,A=new fe,E=new fe;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),w.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),E.set(a[M+4],a[M+5]),S.copy(y).add(x).add(_).divideScalar(3);const L=m(S);v(w,M+0,y,L),v(A,M+2,x,L),v(E,M+4,_,L)}}function v(y,x,_,S){S<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.vertices,e.indices,e.radius,e.detail)}}class au extends yr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new au(e.radius,e.detail)}}const fl=new D,pl=new D,dh=new D,ml=new In;class jg extends it{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos(Jr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:m,c:g}=ml;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ml.getNormal(dh),h[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,h[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,_=h[y],S=h[x],w=ml[u[y]],A=ml[u[x]],E=`${_}_${S}`,b=`${S}_${_}`;b in d&&d[b]?(dh.dot(d[b].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),d[b]=null):E in d||(d[E]={index0:c[y],index1:c[x],normal:dh.clone()})}}for(const p in d)if(d[p]){const{index0:v,index1:m}=d[p];fl.fromBufferAttribute(o,v),pl.fromBufferAttribute(o,m),f.push(fl.x,fl.y,fl.z),f.push(pl.x,pl.y,pl.z)}this.setAttribute("position",new He(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const u=i[n],d=i[n+1]-u,f=(a-u)/d;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new fe:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new D,n=[],r=[],a=[],o=new D,l=new Ye;for(let f=0;f<=e;f++){const p=f/e;n[f]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),d=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(nt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ou extends _i{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kg extends ou{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zd(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,n(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+i*o}}}const gl=new D,fh=new Zd,ph=new Zd,mh=new Zd;class Zg extends _i{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new D){const i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=n[(o-1)%r]:(gl.subVectors(n[0],n[1]).add(n[0]),c=gl);const h=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?u=n[(o+2)%r]:(gl.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=gl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),fh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,v,m),ph.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,v,m),mh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(fh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ph.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),mh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(fh.calc(l),ph.calc(l),mh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new D().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pp(s,e,t,i,n){const r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function Xx(s,e){const t=1-s;return t*t*e}function Yx(s,e){return 2*(1-s)*s*e}function qx(s,e){return s*s*e}function Ja(s,e,t,i){return Xx(s,e)+Yx(s,t)+qx(s,i)}function jx(s,e){const t=1-s;return t*t*t*e}function Kx(s,e){const t=1-s;return 3*t*t*s*e}function Zx(s,e){return 3*(1-s)*s*s*e}function Jx(s,e){return s*s*s*e}function Qa(s,e,t,i,n){return jx(s,e)+Kx(s,t)+Zx(s,i)+Jx(s,n)}class Jd extends _i{constructor(e=new fe,t=new fe,i=new fe,n=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new fe){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qa(e,n.x,r.x,a.x,o.x),Qa(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jg extends _i{constructor(e=new D,t=new D,i=new D,n=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new D){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qa(e,n.x,r.x,a.x,o.x),Qa(e,n.y,r.y,a.y,o.y),Qa(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qd extends _i{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qg extends _i{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends _i{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Ja(e,n.x,r.x,a.x),Ja(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ef extends _i{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Ja(e,n.x,r.x,a.x),Ja(e,n.y,r.y,a.y),Ja(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tf extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],u=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return i.set(Pp(o,l.x,c.x,u.x,h.x),Pp(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new fe().fromArray(n))}return this}}var Pc=Object.freeze({__proto__:null,ArcCurve:Kg,CatmullRomCurve3:Zg,CubicBezierCurve:Jd,CubicBezierCurve3:Jg,EllipseCurve:ou,LineCurve:Qd,LineCurve3:Qg,QuadraticBezierCurve:$d,QuadraticBezierCurve3:ef,SplineCurve:tf});class $g extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Pc[n.type]().fromJSON(n))}return this}}class Ic extends $g{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Qd(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new $d(this.currentPoint.clone(),new fe(e,t),new fe(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){const o=new Jd(this.currentPoint.clone(),new fe(e,t),new fe(i,n),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new tf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){const c=new ou(e,t,i,n,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qr extends Ic{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Ic().fromJSON(n))}return this}}function Qx(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=e0(s,0,n,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=iy(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let u=o,h=l;for(let d=t;d<n;d+=t){const f=s[d],p=s[d+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return ho(r,a,t,o,l,c,0),a}function e0(s,e,t,i,n){let r;if(n===py(s,e,t,i)>0)for(let a=e;a<t;a+=i)r=Ip(a/i|0,s[a],s[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Ip(a/i|0,s[a],s[a+1],r);return r&&ra(r,r.next)&&(po(r),r=r.next),r}function is(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(ra(t,t.next)||Pt(t.prev,t,t.next)===0)){if(po(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ho(s,e,t,i,n,r,a){if(!s)return;!a&&r&&ly(s,i,n,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?ey(s,i,n,r):$x(s)){e.push(l.i,s.i,c.i),po(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=ty(is(s),e),ho(s,e,t,i,n,r,2)):a===2&&ny(s,e,t,i,n,r):ho(is(s),e,t,i,n,r,1);break}}}function $x(s){const e=s.prev,t=s,i=s.next;if(Pt(e,t,i)>=0)return!1;const n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(n,r,a),h=Math.min(o,l,c),d=Math.max(n,r,a),f=Math.max(o,l,c);let p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Ga(n,o,r,l,a,c,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ey(s,e,t,i){const n=s.prev,r=s,a=s.next;if(Pt(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,u=n.y,h=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(u,h,d),v=Math.max(o,l,c),m=Math.max(u,h,d),g=td(f,p,e,t,i),y=td(v,m,e,t,i);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=g&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Ga(o,u,l,h,c,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Ga(o,u,l,h,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Ga(o,u,l,h,c,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Ga(o,u,l,h,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ty(s,e){let t=s;do{const i=t.prev,n=t.next.next;!ra(i,n)&&n0(i,t,t.next,n)&&fo(i,n)&&fo(n,i)&&(e.push(i.i,t.i,n.i),po(t),po(t.next),t=s=n),t=t.next}while(t!==s);return is(t)}function ny(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hy(a,o)){let l=i0(a,o);a=is(a,a.next),l=is(l,l.next),ho(a,e,t,i,n,r,0),ho(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function iy(s,e,t,i){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=e0(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(uy(c))}n.sort(ry);for(let r=0;r<n.length;r++)t=sy(n[r],t);return t}function ry(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function sy(s,e){const t=ay(s,e);if(!t)return e;const i=i0(t,s);return is(i,i.next),is(t,t.next)}function ay(s,e){let t=e;const i=s.x,n=s.y;let r=-1/0,a;if(ra(s,t))return t;do{if(ra(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const h=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&t0(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){const h=Math.abs(n-t.y)/(i-t.x);fo(t,s)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&oy(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function oy(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function ly(s,e,t,i){let n=s;do n.z===0&&(n.z=td(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,cy(n)}function cy(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,t*=2}while(e>1);return s}function td(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function uy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function t0(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function Ga(s,e,t,i,n,r,a,o){return!(s===a&&e===o)&&t0(s,e,t,i,n,r,a,o)}function hy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!dy(s,e)&&(fo(s,e)&&fo(e,s)&&fy(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||ra(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ra(s,e){return s.x===e.x&&s.y===e.y}function n0(s,e,t,i){const n=_l(Pt(s,e,t)),r=_l(Pt(s,e,i)),a=_l(Pt(t,i,s)),o=_l(Pt(t,i,e));return!!(n!==r&&a!==o||n===0&&vl(s,t,e)||r===0&&vl(s,i,e)||a===0&&vl(t,s,i)||o===0&&vl(t,e,i))}function vl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function _l(s){return s>0?1:s<0?-1:0}function dy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&n0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function fo(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function fy(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function i0(s,e){const t=nd(s.i,s.x,s.y),i=nd(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ip(s,e,t,i){const n=nd(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function po(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function nd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function py(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class my{static triangulate(e,t,i=2){return Qx(e,t,i)}}class di{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return di.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];Dp(e),Lp(i,e);let a=e.length;t.forEach(Dp);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Lp(i,t[l]);const o=my.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Dp(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Lp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class lu extends it{constructor(e=new Qr([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new He(n,3)),this.setAttribute("uv",new He(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:gy;let x,_=!1,S,w,A,E;if(g){x=g.getSpacedPoints(u),_=!0,d=!1;const se=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(u,se),w=new D,A=new D,E=new D}d||(m=0,f=0,p=0,v=0);const b=o.extractPoints(c);let M=b.shape;const L=b.holes;if(!di.isClockWise(M)){M=M.reverse();for(let se=0,ie=L.length;se<ie;se++){const ne=L[se];di.isClockWise(ne)&&(L[se]=ne.reverse())}}function U(se){const ne=10000000000000001e-36;let de=se[0];for(let R=1;R<=se.length;R++){const Ae=R%se.length,he=se[Ae],ae=he.x-de.x,me=he.y-de.y,C=ae*ae+me*me,T=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(de.x),Math.abs(de.y)),O=ne*T*T;if(C<=O){se.splice(Ae,1),R--;continue}de=he}}U(M),L.forEach(U);const F=L.length,V=M;for(let se=0;se<F;se++){const ie=L[se];M=M.concat(ie)}function B(se,ie,ne){return ie||je("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ie,ne)}const H=M.length;function Y(se,ie,ne){let de,R,Ae;const he=se.x-ie.x,ae=se.y-ie.y,me=ne.x-se.x,C=ne.y-se.y,T=he*he+ae*ae,O=he*C-ae*me;if(Math.abs(O)>Number.EPSILON){const $=Math.sqrt(T),Q=Math.sqrt(me*me+C*C),j=ie.x-ae/$,we=ie.y+he/$,_e=ne.x-C/Q,Re=ne.y+me/Q,ke=((_e-j)*C-(Re-we)*me)/(he*C-ae*me);de=j+he*ke-se.x,R=we+ae*ke-se.y;const ue=de*de+R*R;if(ue<=2)return new fe(de,R);Ae=Math.sqrt(ue/2)}else{let $=!1;he>Number.EPSILON?me>Number.EPSILON&&($=!0):he<-Number.EPSILON?me<-Number.EPSILON&&($=!0):Math.sign(ae)===Math.sign(C)&&($=!0),$?(de=-ae,R=he,Ae=Math.sqrt(T)):(de=he,R=ae,Ae=Math.sqrt(T/2))}return new fe(de/Ae,R/Ae)}const q=[];for(let se=0,ie=V.length,ne=ie-1,de=se+1;se<ie;se++,ne++,de++)ne===ie&&(ne=0),de===ie&&(de=0),q[se]=Y(V[se],V[ne],V[de]);const X=[];let N,W=q.concat();for(let se=0,ie=F;se<ie;se++){const ne=L[se];N=[];for(let de=0,R=ne.length,Ae=R-1,he=de+1;de<R;de++,Ae++,he++)Ae===R&&(Ae=0),he===R&&(he=0),N[de]=Y(ne[de],ne[Ae],ne[he]);X.push(N),W=W.concat(N)}let K;if(m===0)K=di.triangulateShape(V,L);else{const se=[],ie=[];for(let ne=0;ne<m;ne++){const de=ne/m,R=f*Math.cos(de*Math.PI/2),Ae=p*Math.sin(de*Math.PI/2)+v;for(let he=0,ae=V.length;he<ae;he++){const me=B(V[he],q[he],Ae);ve(me.x,me.y,-R),de===0&&se.push(me)}for(let he=0,ae=F;he<ae;he++){const me=L[he];N=X[he];const C=[];for(let T=0,O=me.length;T<O;T++){const $=B(me[T],N[T],Ae);ve($.x,$.y,-R),de===0&&C.push($)}de===0&&ie.push(C)}}K=di.triangulateShape(se,ie)}const re=K.length,te=p+v;for(let se=0;se<H;se++){const ie=d?B(M[se],W[se],te):M[se];_?(A.copy(S.normals[0]).multiplyScalar(ie.x),w.copy(S.binormals[0]).multiplyScalar(ie.y),E.copy(x[0]).add(A).add(w),ve(E.x,E.y,E.z)):ve(ie.x,ie.y,0)}for(let se=1;se<=u;se++)for(let ie=0;ie<H;ie++){const ne=d?B(M[ie],W[ie],te):M[ie];_?(A.copy(S.normals[se]).multiplyScalar(ne.x),w.copy(S.binormals[se]).multiplyScalar(ne.y),E.copy(x[se]).add(A).add(w),ve(E.x,E.y,E.z)):ve(ne.x,ne.y,h/u*se)}for(let se=m-1;se>=0;se--){const ie=se/m,ne=f*Math.cos(ie*Math.PI/2),de=p*Math.sin(ie*Math.PI/2)+v;for(let R=0,Ae=V.length;R<Ae;R++){const he=B(V[R],q[R],de);ve(he.x,he.y,h+ne)}for(let R=0,Ae=L.length;R<Ae;R++){const he=L[R];N=X[R];for(let ae=0,me=he.length;ae<me;ae++){const C=B(he[ae],N[ae],de);_?ve(C.x,C.y+x[u-1].y,x[u-1].x+ne):ve(C.x,C.y,h+ne)}}}z(),k();function z(){const se=n.length/3;if(d){let ie=0,ne=H*ie;for(let de=0;de<re;de++){const R=K[de];pe(R[2]+ne,R[1]+ne,R[0]+ne)}ie=u+m*2,ne=H*ie;for(let de=0;de<re;de++){const R=K[de];pe(R[0]+ne,R[1]+ne,R[2]+ne)}}else{for(let ie=0;ie<re;ie++){const ne=K[ie];pe(ne[2],ne[1],ne[0])}for(let ie=0;ie<re;ie++){const ne=K[ie];pe(ne[0]+H*u,ne[1]+H*u,ne[2]+H*u)}}i.addGroup(se,n.length/3-se,0)}function k(){const se=n.length/3;let ie=0;J(V,ie),ie+=V.length;for(let ne=0,de=L.length;ne<de;ne++){const R=L[ne];J(R,ie),ie+=R.length}i.addGroup(se,n.length/3-se,1)}function J(se,ie){let ne=se.length;for(;--ne>=0;){const de=ne;let R=ne-1;R<0&&(R=se.length-1);for(let Ae=0,he=u+m*2;Ae<he;Ae++){const ae=H*Ae,me=H*(Ae+1),C=ie+de+ae,T=ie+R+ae,O=ie+R+me,$=ie+de+me;be(C,T,O,$)}}}function ve(se,ie,ne){l.push(se),l.push(ie),l.push(ne)}function pe(se,ie,ne){ge(se),ge(ie),ge(ne);const de=n.length/3,R=y.generateTopUV(i,n,de-3,de-2,de-1);De(R[0]),De(R[1]),De(R[2])}function be(se,ie,ne,de){ge(se),ge(ie),ge(de),ge(ie),ge(ne),ge(de);const R=n.length/3,Ae=y.generateSideWallUV(i,n,R-6,R-3,R-2,R-1);De(Ae[0]),De(Ae[1]),De(Ae[3]),De(Ae[1]),De(Ae[2]),De(Ae[3])}function ge(se){n.push(l[se*3+0]),n.push(l[se*3+1]),n.push(l[se*3+2])}function De(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return vy(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Pc[n.type]().fromJSON(n)),new lu(i,e.options)}}const gy={generateTopUV:function(s,e,t,i,n){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],u=e[n*3+1];return[new fe(r,a),new fe(o,l),new fe(c,u)]},generateSideWallUV:function(s,e,t,i,n,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[n*3],f=e[n*3+1],p=e[n*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-h),new fe(d,1-p),new fe(v,1-g)]:[new fe(o,1-l),new fe(u,1-h),new fe(f,1-p),new fe(m,1-g)]}};function vy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class cu extends yr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cu(e.radius,e.detail)}}class uu extends it{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=nt(n,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new D,d=new fe,f=new D,p=new D,v=new D;let m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let y=0;y<=t;y++){const x=i+y*u*n,_=Math.sin(x),S=Math.cos(x);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*_,h.y=e[w].y,h.z=e[w].x*S,a.push(h.x,h.y,h.z),d.x=y/t,d.y=w/(e.length-1),o.push(d.x,d.y);const A=l[3*w+0]*_,E=l[3*w+1],b=l[3*w+0]*S;c.push(A,E,b)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const _=x+y*e.length,S=_,w=_+e.length,A=_+e.length+1,E=_+1;r.push(S,w,E),r.push(A,E,w)}this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("uv",new He(o,2)),this.setAttribute("normal",new He(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.points,e.segments,e.phiStart,e.phiLength)}}class Eo extends yr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Eo(e.radius,e.detail)}}class Xi extends it{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<u;g++){const y=g*d-a;for(let x=0;x<c;x++){const _=x*h-r;p.push(_,-y,0),v.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const x=y+c*g,_=y+c*(g+1),S=y+1+c*(g+1),w=y+1+c*g;f.push(x,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class hu extends it{constructor(e=.5,t=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/n,f=new D,p=new fe;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const g=r+m/i*a;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let v=0;v<n;v++){const m=v*(i+1);for(let g=0;g<i;g++){const y=g+m,x=y,_=y+i+1,S=y+i+2,w=y+1;o.push(x,_,w),o.push(_,S,w)}}this.setIndex(o),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class du extends it{constructor(e=new Qr([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new He(n,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(a,2));function c(u){const h=n.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;di.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const y=p[m];di.isClockWise(y)===!0&&(p[m]=y.reverse())}const v=di.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const y=p[m];f=f.concat(y)}for(let m=0,g=f.length;m<g;m++){const y=f[m];n.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,g=v.length;m<g;m++){const y=v[m],x=y[0]+h,_=y[1]+h,S=y[2]+h;i.push(x,_,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _y(t,e)}static fromJSON(e,t){const i=[];for(let n=0,r=e.shapes.length;n<r;n++){const a=t[e.shapes[n]];i.push(a)}return new du(i,e.curveSegments)}}function _y(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}class Co extends it{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){const y=[],x=g/i;let _=0;g===0&&a===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const w=S/t;h.x=-e*Math.cos(n+w*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(n+w*r)*Math.sin(a+x*o),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(w+_,1-x),y.push(c++)}u.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){const x=u[g][y+1],_=u[g][y],S=u[g+1][y],w=u[g+1][y+1];(g!==0||a>0)&&f.push(x,_,w),(g!==i-1||l<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fu extends yr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fu(e.radius,e.detail)}}class pu extends it{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],u=new D,h=new D,d=new D;for(let f=0;f<=i;f++)for(let p=0;p<=n;p++){const v=p/n*r,m=f/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=n;p++){const v=(n+1)*f+p-1,m=(n+1)*(f-1)+p-1,g=(n+1)*(f-1)+p,y=(n+1)*f+p;a.push(v,m,y),a.push(m,g,y)}this.setIndex(a),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mu extends it{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],c=[],u=[],h=new D,d=new D,f=new D,p=new D,v=new D,m=new D,g=new D;for(let x=0;x<=i;++x){const _=x/i*r*Math.PI*2;y(_,r,a,e,f),y(_+.01,r,a,e,p),m.subVectors(p,f),g.addVectors(p,f),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let S=0;S<=n;++S){const w=S/n*Math.PI*2,A=-t*Math.cos(w),E=t*Math.sin(w);h.x=f.x+(A*g.x+E*v.x),h.y=f.y+(A*g.y+E*v.y),h.z=f.z+(A*g.z+E*v.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(x/i),u.push(S/n)}}for(let x=1;x<=i;x++)for(let _=1;_<=n;_++){const S=(n+1)*(x-1)+(_-1),w=(n+1)*x+(_-1),A=(n+1)*x+_,E=(n+1)*(x-1)+_;o.push(S,w,E),o.push(w,A,E)}this.setIndex(o),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(u,2));function y(x,_,S,w,A){const E=Math.cos(x),b=Math.sin(x),M=S/_*x,L=Math.cos(M);A.x=w*(2+L)*.5*E,A.y=w*(2+L)*b*.5,A.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class gu extends it{constructor(e=new ef(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new fe;let u=new D;const h=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function v(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),g()}function m(x){u=e.getPointAt(x/t,u);const _=a.normals[x],S=a.binormals[x];for(let w=0;w<=n;w++){const A=w/n*Math.PI*2,E=Math.sin(A),b=-Math.cos(A);l.x=b*_.x+E*S.x,l.y=b*_.y+E*S.y,l.z=b*_.z+E*S.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function g(){for(let x=1;x<=t;x++)for(let _=1;_<=n;_++){const S=(n+1)*(x-1)+(_-1),w=(n+1)*x+(_-1),A=(n+1)*x+_,E=(n+1)*(x-1)+_;p.push(S,w,E),p.push(w,A,E)}}function y(){for(let x=0;x<=t;x++)for(let _=0;_<=n;_++)c.x=x/t,c.y=_/n,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gu(new Pc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class r0 extends it{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new D,r=new D;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let p=d,v=d+f;p<v;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),y=o.getX(p+(m+1)%3);n.fromBufferAttribute(a,g),r.fromBufferAttribute(a,y),Up(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;n.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),Up(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new He(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Up(s,e,t){const i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)===!0||t.has(n)===!0?!1:(t.add(i),t.add(n),!0)}var Np=Object.freeze({__proto__:null,BoxGeometry:xr,CapsuleGeometry:ru,CircleGeometry:su,ConeGeometry:Ao,CylinderGeometry:wo,DodecahedronGeometry:au,EdgesGeometry:jg,ExtrudeGeometry:lu,IcosahedronGeometry:cu,LatheGeometry:uu,OctahedronGeometry:Eo,PlaneGeometry:Xi,PolyhedronGeometry:yr,RingGeometry:hu,ShapeGeometry:du,SphereGeometry:Co,TetrahedronGeometry:fu,TorusGeometry:pu,TorusKnotGeometry:mu,TubeGeometry:gu,WireframeGeometry:r0});class s0 extends Zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class nf extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ro extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends Ro{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class a0 extends Zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o0 extends Zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class l0 extends Zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class c0 extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vu extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _u extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class u0 extends Zt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h0 extends dn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function jr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function d0(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function id(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function rf(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}function xy(s,e,t,i,n=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*n;if(!(p<t||p>=i)){h.push(c.times[f]);for(let v=0;v<u;++v)d.push(c.values[f*u+v])}}h.length!==0&&(c.times=jr(h,c.times.constructor),c.values=jr(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function yy(s,e=0,t=s,i=30){i<=0&&(i=30);const n=t.tracks.length,r=e/i;for(let a=0;a<n;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let v;if(r<=o.times[0]){const g=u,y=h-u;v=o.values.slice(g,y)}else if(r>=o.times[p]){const g=p*h+u,y=g+h-u;v=o.values.slice(g,y)}else{const g=o.createInterpolant(),y=u,x=h-u;g.evaluate(r),v=g.resultBuffer.slice(y,x)}l==="quaternion"&&new Kt().fromArray(v).normalize().conjugate().toArray(v);const m=c.times.length;for(let g=0;g<m;++g){const y=g*f+d;if(l==="quaternion")Kt.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const x=f-d*2;for(let _=0;_<x;++_)c.values[y+_]-=v[_]}}}return s.blendMode=Od,s}class by{static convertArray(e,t){return jr(e,t)}static isTypedArray(e){return Og(e)}static getKeyframeOrder(e){return d0(e)}static sortedArray(e,t,i){return id(e,t,i)}static flattenJSON(e,t,i,n){rf(e,t,i,n)}static subclip(e,t,i,n,r=30){return xy(e,t,i,n,r)}static makeClipAdditive(e,t=0,i=e,n=30){return yy(e,t,i,n)}}class ca{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class f0 extends ca{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case qr:r=e,o=2*t-i;break;case ao:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qr:a=e,l=2*i-t;break;case ao:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,x=(-1-f)*m+(1.5+f)*v+.5*p,_=f*m-f*v;for(let S=0;S!==o;++S)r[S]=g*a[u+S]+y*a[c+S]+x*a[l+S]+_*a[h+S];return r}}class sf extends ca{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class p0 extends ca{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new p0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new f0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case Ul:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Og(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ul,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{const h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){const v=t[h+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Js;class cs extends ii{constructor(e,t,i){super(e,t,i)}}cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Zs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class af extends ii{constructor(e,t,i,n){super(e,t,i,n)}}af.prototype.ValueTypeName="color";class rs extends ii{constructor(e,t,i,n){super(e,t,i,n)}}rs.prototype.ValueTypeName="number";class m0 extends ca{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Kt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ss extends ii{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new m0(this.times,this.values,this.getValueSize(),e)}}ss.prototype.ValueTypeName="quaternion";ss.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends ii{constructor(e,t,i){super(e,t,i)}}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Zs;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends ii{constructor(e,t,i,n){super(e,t,i,n)}}as.prototype.ValueTypeName="vector";class sa{constructor(e="",t=-1,i=[],n=Hc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(My(i[a]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(ii.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=d0(l);l=id(l,1,u),c=id(c,1,u),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=n[h];d||(n[h]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(Oe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return je("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,p,v){if(f.length!==0){const m=[],g=[];rf(f,m,g,p),m.length!==0&&v.push(new h(d,m,g))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(const v in f){const m=[],g=[];for(let y=0;y!==d[p].morphTargets.length;++y){const x=d[p];m.push(x.time),g.push(x.morphTarget===v?1:0)}n.push(new rs(".morphTargetInfluence["+v+"]",m,g))}l=f.length*a}else{const f=".bones["+t[h].name+"]";i(as,f+".position",d,"pos",n),i(ss,f+".quaternion",d,"rot",n),i(as,f+".scale",d,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Sy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return af;case"quaternion":return ss;case"bool":case"boolean":return cs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function My(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sy(s.type);if(s.times===void 0){const t=[],i=[];rf(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ei={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class of{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const hs=new of;class fn{constructor(e){this.manager=e!==void 0?e:hs,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}fn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class Ty extends Error{constructor(e,t){super(e),this.response=t}}class qn extends fn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ei.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:i,onError:n});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Oi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let v=0;const m=new ReadableStream({start(g){y();function y(){h.read().then(({done:x,value:_})=>{if(x)g.close();else{v+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let w=0,A=u.length;w<A;w++){const E=u[w];E.onProgress&&E.onProgress(S)}g.enqueue(_),y()}},x=>{g.error(x)})}}});return new Response(m)}else throw new Ty(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ei.add(`file:${e}`,c);const u=Oi[e];delete Oi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Oi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class wy extends fn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new qn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):je(l),r.manager.itemError(e)}},i,n)}parse(e){const t=[];for(let i=0;i<e.length;i++){const n=sa.parse(e[i]);t.push(n)}return t}}class Ay extends fn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=[],o=new iu,l=new qn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(h){l.load(e[h],function(d){const f=r.parse(d,!0);a[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=yt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},i,n)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else l.load(e,function(h){const d=r.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+v]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=yt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},i,n);return o}}const Ns=new WeakMap;class mo extends fn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ei.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ns.get(a);h===void 0&&(h=[],Ns.set(a,h)),h.push({onLoad:t,onError:n})}return a}const o=co("img");function l(){u(),t&&t(this);const h=Ns.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Ns.delete(this),r.manager.itemEnd(e)}function c(h){u(),n&&n(h),Ei.remove(`image:${e}`);const d=Ns.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}Ns.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ei.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Ey extends fn{constructor(e){super(e)}load(e,t,i,n){const r=new Mo;r.colorSpace=Nt;const a=new mo(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return r}}class Cy extends fn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new pi,o=new qn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(n!==void 0)n(u);else{u(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:_n,a.wrapT=c.wrapT!==void 0?c.wrapT:_n,a.magFilter=c.magFilter!==void 0?c.magFilter:yt,a.minFilter=c.minFilter!==void 0?c.minFilter:yt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=zn),c.mipmapCount===1&&(a.minFilter=yt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,n),a}}class g0 extends fn{constructor(e){super(e)}load(e,t,i,n){const r=new Rt,a=new mo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class br extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class v0 extends br{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const gh=new Ye,Fp=new D,Op=new D;class lf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fp),Op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Op),t.updateMatrixWorld(),gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ry extends lf{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ea*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cf extends br{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ry}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Py extends lf{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class uf extends br{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Py}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ds extends Kc{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Iy extends lf{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hf extends br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Iy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class _0 extends br{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class x0 extends br{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class df{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*n)),t.addScaledVector(a[5],1.092548*(n*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(i*r)),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*n),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*n),t.addScaledVector(a[5],2*.429043*n*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*i*r),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}}class y0 extends br{constructor(e=new df,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class xu extends fn{constructor(e){super(e),this.textures={}}load(e,t,i,n){const r=this,a=new qn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):je(l),r.manager.itemError(e)}},i,n)}parse(e){const t=this.textures;function i(r){return t[r]===void 0&&Oe("MaterialLoader: Undefined texture",r),t[r]}const n=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=e.sheen),e.sheenColor!==void 0&&(n.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(n.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&n.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular!==void 0&&n.specular.setHex(e.specular),e.specularIntensity!==void 0&&(n.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&n.specularColor!==void 0&&n.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(n.dispersion=e.dispersion),e.iridescence!==void 0&&(n.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(n.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(n.transmission=e.transmission),e.thickness!==void 0&&(n.thickness=e.thickness),e.attenuationDistance!==void 0&&(n.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&n.attenuationColor!==void 0&&n.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(n.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.shadowSide!==void 0&&(n.shadowSide=e.shadowSide),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(n.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(n.depthFunc=e.depthFunc),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(n.blendSrc=e.blendSrc),e.blendDst!==void 0&&(n.blendDst=e.blendDst),e.blendEquation!==void 0&&(n.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(n.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(n.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(n.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&n.blendColor!==void 0&&n.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(n.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==void 0&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(n.dithering=e.dithering),e.alphaToCoverage!==void 0&&(n.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(n.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(n.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(n.allowOverride=e.allowOverride),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(n.uniforms[r]={},a.type){case"t":n.uniforms[r].value=i(a.value);break;case"c":n.uniforms[r].value=new Ie().setHex(a.value);break;case"v2":n.uniforms[r].value=new fe().fromArray(a.value);break;case"v3":n.uniforms[r].value=new D().fromArray(a.value);break;case"v4":n.uniforms[r].value=new pt().fromArray(a.value);break;case"m3":n.uniforms[r].value=new rt().fromArray(a.value);break;case"m4":n.uniforms[r].value=new Ye().fromArray(a.value);break;default:n.uniforms[r].value=a.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(n.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)n.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(n.lights=e.lights),e.clipping!==void 0&&(n.clipping=e.clipping),e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=i(e.map)),e.matcap!==void 0&&(n.matcap=i(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),n.normalScale=new fe().fromArray(r)}return e.displacementMap!==void 0&&(n.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(n.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(n.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(n.envMap=i(e.envMap)),e.envMapRotation!==void 0&&n.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(n.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(n.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(n.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(n.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(n.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(n.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(n.sheenRoughnessMap=i(e.sheenRoughnessMap)),n}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return xu.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:s0,SpriteMaterial:Xd,RawShaderMaterial:nf,ShaderMaterial:Yn,PointsMaterial:nu,MeshPhysicalMaterial:ni,MeshStandardMaterial:Ro,MeshPhongMaterial:a0,MeshToonMaterial:o0,MeshNormalMaterial:l0,MeshLambertMaterial:c0,MeshDepthMaterial:vu,MeshDistanceMaterial:_u,MeshBasicMaterial:bn,MeshMatcapMaterial:u0,LineDashedMaterial:h0,LineBasicMaterial:dn,Material:Zt};return new t[e]}}class dr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ff extends it{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class b0 extends fn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new qn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):je(l),r.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(f,p){if(t[p]!==void 0)return t[p];const m=f.interleavedBuffers[p],g=r(f,m.buffer),y=Gs(m.type,g),x=new oa(y,m.stride);return x.uuid=m.uuid,t[p]=x,x}function r(f,p){if(i[p]!==void 0)return i[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return i[p]=g,g}const a=e.isInstancedBufferGeometry?new ff:new it,o=e.data.index;if(o!==void 0){const f=Gs(o.type,o.array);a.setIndex(new gt(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let v;if(p.isInterleavedBufferAttribute){const m=n(e.data,p.data);v=new Vi(m,p.itemSize,p.offset,p.normalized)}else{const m=Gs(p.type,p.array),g=p.isInstancedBufferAttribute?gr:gt;v=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],v=[];for(let m=0,g=p.length;m<g;m++){const y=p[m];let x;if(y.isInterleavedBufferAttribute){const _=n(e.data,y.data);x=new Vi(_,y.itemSize,y.offset,y.normalized)}else{const _=Gs(y.type,y.array);x=new gt(_,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),v.push(x)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,p=h.length;f!==p;++f){const v=h[f];a.addGroup(v.start,v.count,v.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new Ft().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Dy extends fn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=this.path===""?dr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new qn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){n!==void 0&&n(h),h("ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),je("ObjectLoader: Can't load "+e);return}r.parse(c,t)},i,n)}async loadAsync(e,t){const i=this,n=this.path===""?dr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const r=new qn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,i),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let h=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,n,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){const r=new Qr().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){const i={},n={};if(t.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new To().fromJSON(e[r],n);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const n=new b0;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in Np?o=Np[l.type].fromJSON(l,t):Oe(`ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},n={};if(e!==void 0){const r=new xu;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=r.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const n=e[i],r=sa.parse(n);t[r.uuid]=r}return t}parseImages(e,t){const i=this,n={};let r;function a(l){return i.manager.itemStart(l),r.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(u)}else return l.data?{data:Gs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new of(t);r=new mo(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.url;if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const m=d[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new pi(g.data,g.width,g.height)))}n[h.uuid]=new ur(f)}else{const f=o(h.url);n[h.uuid]=new ur(f)}}}return n}async parseImagesAsync(e){const t=this,i={};let n;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await n.loadAsync(l)}else return a.data?{data:Gs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){n=new mo(this.manager),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=await r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new pi(p.data,p.width,p.height)))}i[l.uuid]=new ur(u)}else{const u=await r(l.url);i[l.uuid]=new ur(u)}}}return i}parseTextures(e,t){function i(r,a){return typeof r=="number"?r:(Oe("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const n={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&Oe('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Oe("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new Mo,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new pi:u=new Rt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=i(o.mapping,Ly)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=i(o.wrap[0],Bp),u.wrapT=i(o.wrap[1],Bp)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=i(o.minFilter,kp)),o.magFilter!==void 0&&(u.magFilter=i(o.magFilter,kp)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),n[o.uuid]=u}return n}parseObject(e,t,i,n,r){let a;function o(d){return t[d]===void 0&&Oe("ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const m=d[p];i[m]===void 0&&Oe("ObjectLoader: Undefined material",m),f.push(i[m])}return f}return i[d]===void 0&&Oe("ObjectLoader: Undefined material",d),i[d]}}function c(d){return n[d]===void 0&&Oe("ObjectLoader: Undefined texture",d),n[d]}let u,h;switch(e.type){case"Scene":a=new Wd,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ie(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Qc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Jc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Yt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new ds(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new _0(e.color,e.intensity);break;case"DirectionalLight":a=new hf(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new uf(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new x0(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new cf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new v0(e.color,e.groundColor,e.intensity);break;case"LightProbe":const d=new df().fromArray(e.sh);a=new y0(d,e.intensity);break;case"SkinnedMesh":u=o(e.geometry),h=l(e.material),a=new Yd(u,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),h=l(e.material),a=new Tt(u,h);break;case"InstancedMesh":u=o(e.geometry),h=l(e.material);const f=e.count,p=e.instanceMatrix,v=e.instanceColor;a=new eu(u,h,f),a.instanceMatrix=new gr(new Float32Array(p.array),16),v!==void 0&&(a.instanceColor=new gr(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":u=o(e.geometry),h=l(e.material),a=new Xg(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,y=null;return m.boundingBox!==void 0&&(g=new Lt().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(y=new Ft().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:y}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Ft().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Lt().fromJSON(e.boundingBox));break;case"LOD":a=new Wg;break;case"Line":a=new Hi(o(e.geometry),l(e.material));break;case"LineLoop":a=new qd(o(e.geometry),l(e.material));break;case"LineSegments":a=new vi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new jd(o(e.geometry),l(e.material));break;case"Sprite":a=new Hg(l(e.material));break;case"Group":a=new Ai;break;case"Bone":a=new $c;break;default:a=new ht}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,i,n,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=t[i.skeleton];n===void 0?Oe("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new ht}})}}const Ly={UVMapping:Nc,CubeReflectionMapping:Ri,CubeRefractionMapping:fr,EquirectangularReflectionMapping:ro,EquirectangularRefractionMapping:so,CubeUVReflectionMapping:aa},Bp={RepeatWrapping:pr,ClampToEdgeWrapping:_n,MirroredRepeatWrapping:qs},kp={NearestFilter:Dt,NearestMipmapNearestFilter:Fc,NearestMipmapLinearFilter:Xr,LinearFilter:yt,LinearMipmapNearestFilter:Hs,LinearMipmapLinearFilter:zn},vh=new WeakMap;class S0 extends fn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ei.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(vh.has(a)===!0)n&&n(vh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ei.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),vh.set(l,c),Ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let xl;class pf{static getContext(){return xl===void 0&&(xl=new(window.AudioContext||window.webkitAudioContext)),xl}static setContext(e){xl=e}}class Uy extends fn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new qn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);pf.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},i,n);function o(l){n?n(l):je(l),r.manager.itemError(e)}}}const zp=new Ye,Gp=new Ye,Ir=new Ye;class Ny{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Yt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Yt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Ir.copy(e.projectionMatrix);const n=t.eyeSep/2,r=n*t.near/t.focus,a=t.near*Math.tan(Jr*t.fov*.5)/t.zoom;let o,l;Gp.elements[12]=-n,zp.elements[12]=n,o=-a*t.aspect+r,l=a*t.aspect+r,Ir.elements[0]=2*t.near/(l-o),Ir.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Ir),o=-a*t.aspect-r,l=a*t.aspect-r,Ir.elements[0]=2*t.near/(l-o),Ir.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Ir)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Gp),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(zp)}}class M0 extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class T0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Dr=new D,_h=new Kt,Fy=new D,Lr=new D,Ur=new D;class Oy extends ht{constructor(){super(),this.type="AudioListener",this.context=pf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new T0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Dr,_h,Fy),Lr.set(0,0,-1).applyQuaternion(_h),Ur.set(0,1,0).applyQuaternion(_h),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Dr.x,i),t.positionY.linearRampToValueAtTime(Dr.y,i),t.positionZ.linearRampToValueAtTime(Dr.z,i),t.forwardX.linearRampToValueAtTime(Lr.x,i),t.forwardY.linearRampToValueAtTime(Lr.y,i),t.forwardZ.linearRampToValueAtTime(Lr.z,i),t.upX.linearRampToValueAtTime(Ur.x,i),t.upY.linearRampToValueAtTime(Ur.y,i),t.upZ.linearRampToValueAtTime(Ur.z,i)}else t.setPosition(Dr.x,Dr.y,Dr.z),t.setOrientation(Lr.x,Lr.y,Lr.z,Ur.x,Ur.y,Ur.z)}}class w0 extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Oe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Oe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Oe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Oe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Nr=new D,Vp=new Kt,By=new D,Fr=new D;class ky extends w0{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Nr,Vp,By),Fr.set(0,0,1).applyQuaternion(Vp);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Nr.x,i),t.positionY.linearRampToValueAtTime(Nr.y,i),t.positionZ.linearRampToValueAtTime(Nr.z,i),t.orientationX.linearRampToValueAtTime(Fr.x,i),t.orientationY.linearRampToValueAtTime(Fr.y,i),t.orientationZ.linearRampToValueAtTime(Fr.z,i)}else t.setPosition(Nr.x,Nr.y,Nr.z),t.setOrientation(Fr.x,Fr.y,Fr.z)}}class zy{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class A0{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,a;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,a=n;r!==a;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Kt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const a=this._workIndex*r;Kt.multiplyQuaternionsFlat(e,a,e,t,e,i),Kt.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,r){const a=1-n;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*n}}}const mf="\\[\\]\\.:\\/",Gy=new RegExp("["+mf+"]","g"),gf="[^"+mf+"]",Vy="[^"+mf.replace("\\.","")+"]",Hy=/((?:WC+[\/:])*)/.source.replace("WC",gf),Wy=/(WCOD+)?/.source.replace("WCOD",Vy),Xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gf),Yy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gf),qy=new RegExp("^"+Hy+Wy+Xy+Yy+"$"),jy=["material","materials","bones","map"];class Ky{constructor(e,t,i){const n=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gy,"")}static parseTrackName(e){const t=qy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);jy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=Ky;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zy{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Vn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let v=0,m=a;v!==m;++v)r[v].push(new ft(d,i[v],n[v]))}else if(p<c){o=e[p];const v=--c,m=e[v];t[m.uuid]=p,e[p]=m,t[f]=v,e[v]=d;for(let g=0,y=a;g!==y;++g){const x=r[g],_=x[v];let S=x[p];x[p]=_,S===void 0&&(S=new ft(d,i[g],n[g])),x[v]=S}}else e[p]!==o&&je("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){const h=r++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,p=n;f!==p;++f){const v=i[f],m=v[h],g=v[u];v[u]=m,v[h]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<r){const d=--r,f=e[d],p=--a,v=e[p];t[f.uuid]=h,e[h]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let m=0,g=n;m!==g;++m){const y=i[m],x=y[d],_=y[p];y[h]=x,y[d]=_,y.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let p=0,v=n;p!==v;++p){const m=i[p];m[h]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const i=this._bindingsIndicesByPath;let n=i[e];const r=this._bindings;if(n!==void 0)return r[n];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);n=r.length,i[e]=n,a.push(e),o.push(t),r.push(h);for(let d=u,f=l.length;d!==f;++d){const p=l[d];h[d]=new ft(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const n=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=i,a[i]=l,a.pop(),r[i]=r[o],r.pop(),n[i]=n[o],n.pop()}}}class E0{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Yr,endingEnd:Yr};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const n=this._clip.duration,r=e._clip.duration,a=r/n,o=n/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Od:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Hc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const a=i===wg;if(e===0)return r===-1?n:a&&(r&1)===1?t-n:n;if(i===Mg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=qr,n.endingEnd=qr):(e?n.endingStart=this.zeroSlopeAtStart?qr:Yr:n.endingStart=ao,t?n.endingEnd=this.zeroSlopeAtEnd?qr:Yr:n.endingEnd=ao)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const Jy=new Float32Array(1);class Qy extends Ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=n[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,a[h]=p;else{if(p=a[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;p=new A0(ft.create(i,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[h]=p}o[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new sf(new Float32Array(2),new Float32Array(2),1,Jy),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let a=typeof e=="string"?sa.findByName(n,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Hc),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new E0(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?sa.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class $y extends zd{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isRenderTarget3D=!0,this.depth=i,this.texture=new qc(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class vf{constructor(e){this.value=e}clone(){return new vf(this.value.clone===void 0?this.value:this.value.clone())}}let eb=0;class tb extends Ii{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:eb++}),this.name="",this.usage=lo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){const r=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class nb extends oa{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class ib{constructor(e,t,i,n,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Hp=new Ye;class rb{constructor(e,t,i=0,n=1/0){this.ray=new Wi(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hp),this}intersectObject(e,t=!0,i=[]){return rd(e,this,i,t),i.sort(Wp),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)rd(e[n],this,i,t);return i.sort(Wp),i}}function Wp(s,e){return s.distance-e.distance}function rd(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)rd(r[a],e,t,!0)}}class sb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ab.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ab(){this._document.hidden===!1&&this.reset()}class sd{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ob{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}class _f{constructor(e,t,i,n){_f.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}const Xp=new fe;class lb{constructor(e=new fe(1/0,1/0),t=new fe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yp=new D,yl=new D,Fs=new D,Os=new D,xh=new D,cb=new D,ub=new D;class C0{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Yp.subVectors(e,this.start),yl.subVectors(this.end,this.start);const i=yl.dot(yl);let r=yl.dot(Yp)/i;return t&&(r=nt(r,0,1)),r}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=cb,i=ub){const n=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,u=e.end;Fs.subVectors(c,o),Os.subVectors(u,l),xh.subVectors(o,l);const h=Fs.dot(Fs),d=Os.dot(Os),f=Os.dot(xh);if(h<=n&&d<=n)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(h<=n)r=0,a=f/d,a=nt(a,0,1);else{const p=Fs.dot(xh);if(d<=n)a=0,r=nt(-p/h,0,1);else{const v=Fs.dot(Os),m=h*d-v*v;m!==0?r=nt((v*f-p*d)/m,0,1):r=0,a=(v*r+f)/d,a<0?(a=0,r=nt(-p/h,0,1)):a>1&&(a=1,r=nt((v-p)/h,0,1))}}return t.copy(o).add(Fs.multiplyScalar(r)),i.copy(l).add(Os.multiplyScalar(a)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const qp=new D;class hb extends ht{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new it,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new He(n,3));const r=new dn({fog:!1,toneMapped:!1});this.cone=new vi(i,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),qp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(qp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ir=new D,bl=new Ye,yh=new Ye;class db extends vi{constructor(e){const t=R0(e),i=new it,n=[],r=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new He(n,3)),i.setAttribute("color",new He(r,3));const a=new dn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new Ie(255),l=new Ie(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");yh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(bl.multiplyMatrices(yh,o.matrixWorld),ir.setFromMatrixPosition(bl),n.setXYZ(a,ir.x,ir.y,ir.z),bl.multiplyMatrices(yh,o.parent.matrixWorld),ir.setFromMatrixPosition(bl),n.setXYZ(a+1,ir.x,ir.y,ir.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const n=this.geometry.getAttribute("color");for(let r=0;r<n.count;r+=2)n.setXYZ(r,e.r,e.g,e.b),n.setXYZ(r+1,t.r,t.g,t.b);return n.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function R0(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...R0(s.children[t]));return e}class fb extends Tt{constructor(e,t,i){const n=new Co(t,4,2),r=new bn({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const pb=new D,jp=new Ie,Kp=new Ie;class mb extends ht{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new Eo(t);n.rotateY(Math.PI*.5),this.material=new bn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),a=new Float32Array(r.count*3);n.setAttribute("color",new gt(a,3)),this.add(new Tt(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");jp.copy(this.light.color),Kp.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){const r=i<n/2?jp:Kp;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(pb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class gb extends vi{constructor(e=10,t=10,i=4473924,n=8947848){i=new Ie(i),n=new Ie(n);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=d===r?i:n;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new it;u.setAttribute("position",new He(l,3)),u.setAttribute("color",new He(c,3));const h=new dn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class vb extends vi{constructor(e=10,t=16,i=8,n=64,r=4473924,a=8947848){r=new Ie(r),a=new Ie(a);const o=[],l=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,p);const v=h&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let h=0;h<i;h++){const d=h&1?r:a,f=e-e/i*h;for(let p=0;p<n;p++){let v=p/n*(Math.PI*2),m=Math.sin(v)*f,g=Math.cos(v)*f;o.push(m,0,g),l.push(d.r,d.g,d.b),v=(p+1)/n*(Math.PI*2),m=Math.sin(v)*f,g=Math.cos(v)*f,o.push(m,0,g),l.push(d.r,d.g,d.b)}}const c=new it;c.setAttribute("position",new He(o,3)),c.setAttribute("color",new He(l,3));const u=new dn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Zp=new D,Sl=new D,Jp=new D;class _b extends ht{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new it;n.setAttribute("position",new He([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new dn({fog:!1,toneMapped:!1});this.lightPlane=new Hi(n,r),this.add(this.lightPlane),n=new it,n.setAttribute("position",new He([0,0,0,0,0,1],3)),this.targetLine=new Hi(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Zp.setFromMatrixPosition(this.light.matrixWorld),Sl.setFromMatrixPosition(this.light.target.matrixWorld),Jp.subVectors(Sl,Zp),this.lightPlane.lookAt(Sl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Sl),this.targetLine.scale.z=Jp.length()}}const Ml=new D,Ut=new Kc;class xb extends vi{constructor(e){const t=new it,i=new dn({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){n.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(n.length/3-1)}t.setAttribute("position",new He(n,3)),t.setAttribute("color",new He(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Ie(16755200),u=new Ie(16711680),h=new Ie(43775),d=new Ie(16777215),f=new Ie(3355443);this.setColors(c,u,h,d,f)}setColors(e,t,i,n,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,n.r,n.g,n.b),o.setXYZ(39,n.r,n.g,n.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,n=1;let r,a;if(Ut.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Gn)r=-1,a=1;else if(this.camera.coordinateSystem===Qs)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Bt("c",t,e,Ut,0,0,r),Bt("t",t,e,Ut,0,0,a),Bt("n1",t,e,Ut,-i,-n,r),Bt("n2",t,e,Ut,i,-n,r),Bt("n3",t,e,Ut,-i,n,r),Bt("n4",t,e,Ut,i,n,r),Bt("f1",t,e,Ut,-i,-n,a),Bt("f2",t,e,Ut,i,-n,a),Bt("f3",t,e,Ut,-i,n,a),Bt("f4",t,e,Ut,i,n,a),Bt("u1",t,e,Ut,i*.7,n*1.1,r),Bt("u2",t,e,Ut,-i*.7,n*1.1,r),Bt("u3",t,e,Ut,0,n*2,r),Bt("cf1",t,e,Ut,-i,0,a),Bt("cf2",t,e,Ut,i,0,a),Bt("cf3",t,e,Ut,0,-n,a),Bt("cf4",t,e,Ut,0,n,a),Bt("cn1",t,e,Ut,-i,0,r),Bt("cn2",t,e,Ut,i,0,r),Bt("cn3",t,e,Ut,0,-n,r),Bt("cn4",t,e,Ut,0,n,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Bt(s,e,t,i,n,r,a){Ml.set(n,r,a).unproject(i);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],Ml.x,Ml.y,Ml.z)}}const Tl=new Lt;class yb extends vi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new it;r.setIndex(new gt(i,1)),r.setAttribute("position",new gt(n,3)),super(r,new dn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Tl.setFromObject(this.object),Tl.isEmpty())return;const e=Tl.min,t=Tl.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class bb extends vi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new it;r.setIndex(new gt(i,1)),r.setAttribute("position",new He(n,3)),super(r,new dn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sb extends Hi{constructor(e,t=1,i=16776960){const n=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new it;a.setAttribute("position",new He(r,3)),a.computeBoundingSphere(),super(a,new dn({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new it;l.setAttribute("position",new He(o,3)),l.computeBoundingSphere(),this.add(new Tt(l,new bn({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Qp=new D;let wl,bh;class Mb extends ht{constructor(e=new D(0,0,1),t=new D(0,0,0),i=1,n=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",wl===void 0&&(wl=new it,wl.setAttribute("position",new He([0,0,0,0,1,0],3)),bh=new Ao(.5,1,5,1),bh.translate(0,-.5,0)),this.position.copy(t),this.line=new Hi(wl,new dn({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Tt(bh,new bn({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Qp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Qp,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Tb extends vi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new it;n.setAttribute("position",new He(t,3)),n.setAttribute("color",new He(i,3));const r=new dn({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){const n=new Ie,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wb{constructor(){this.type="ShapePath",this.color=new Ie,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ic,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,a){return this.currentPath.bezierCurveTo(e,t,i,n,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const y=[];for(let x=0,_=g.length;x<_;x++){const S=g[x],w=new Qr;w.curves=S.curves,y.push(w)}return y}function i(g,y){const x=y.length;let _=!1;for(let S=x-1,w=0;w<x;S=w++){let A=y[S],E=y[w],b=E.x-A.x,M=E.y-A.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(A=y[w],b=-b,E=y[S],M=-M),g.y<A.y||g.y>E.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const L=M*(g.x-A.x)-b*(g.y-A.y);if(L===0)return!0;if(L<0)continue;_=!_}}else{if(g.y!==A.y)continue;if(E.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=E.x)return!0}}return _}const n=di.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Qr,l.curves=o.curves,c.push(l),c;let u=!n(r[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],p=0,v;d[p]=void 0,f[p]=[];for(let g=0,y=r.length;g<y;g++)o=r[g],v=o.getPoints(),a=n(v),a=e?!a:a,a?(!u&&d[p]&&p++,d[p]={s:new Qr,p:v},d[p].s.curves=o.curves,u&&p++,f[p]=[]):f[p].push({h:o,p:v[0]});if(!d[0])return t(r);if(d.length>1){let g=!1,y=0;for(let x=0,_=d.length;x<_;x++)h[x]=[];for(let x=0,_=d.length;x<_;x++){const S=f[x];for(let w=0;w<S.length;w++){const A=S[w];let E=!0;for(let b=0;b<d.length;b++)i(A.p,d[b].p)&&(x!==b&&y++,E?(E=!1,h[b].push(A)):g=!0);E&&h[x].push(A)}}y>0&&g===!1&&(f=h)}let m;for(let g=0,y=d.length;g<y;g++){l=d[g].s,c.push(l),m=f[g];for(let x=0,_=m.length;x<_;x++)l.holes.push(m[x].h)}return c}}class P0 extends Ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ab(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Eb(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Cb(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function ad(s,e,t,i){const n=Rb(i);switch(t){case Nd:return s*e;case zc:return s*e/n.components*n.byteLength;case bo:return s*e/n.components*n.byteLength;case ns:return s*e*2/n.components*n.byteLength;case Gc:return s*e*2/n.components*n.byteLength;case Fd:return s*e*3/n.components*n.byteLength;case yn:return s*e*4/n.components*n.byteLength;case Vc:return s*e*4/n.components*n.byteLength;case Ya:case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ja:case Ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Ql:return Math.max(s,16)*Math.max(e,8)/4;case Kl:case Jl:return Math.max(s,8)*Math.max(e,8)/2;case $l:case ec:case nc:case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tc:case rc:case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _c:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case yc:case bc:case Sc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Mc:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wc:case Ac:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rb(s){switch(s){case Pn:case Id:return{byteLength:1,components:1};case js:case Dd:case gi:return{byteLength:2,components:1};case Bc:case kc:return{byteLength:2,components:4};case ti:case Oc:case xn:return{byteLength:4,components:1};case Ld:case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class Pb{static contain(e,t){return Ab(e,t)}static cover(e,t){return Eb(e,t)}static fill(e){return Cb(e)}static getByteLength(e,t,i,n){return ad(e,t,i,n)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);function I0(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ib(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],v=h[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const v=h[f];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lS="gl_FragColor = linearToOutputTexel( gl_FragColor );",cS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ES=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,US=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_M=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$M=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Db,alphahash_pars_fragment:Lb,alphamap_fragment:Ub,alphamap_pars_fragment:Nb,alphatest_fragment:Fb,alphatest_pars_fragment:Ob,aomap_fragment:Bb,aomap_pars_fragment:kb,batching_pars_vertex:zb,batching_vertex:Gb,begin_vertex:Vb,beginnormal_vertex:Hb,bsdfs:Wb,iridescence_fragment:Xb,bumpmap_pars_fragment:Yb,clipping_planes_fragment:qb,clipping_planes_pars_fragment:jb,clipping_planes_pars_vertex:Kb,clipping_planes_vertex:Zb,color_fragment:Jb,color_pars_fragment:Qb,color_pars_vertex:$b,color_vertex:eS,common:tS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:rS,displacementmap_vertex:sS,emissivemap_fragment:aS,emissivemap_pars_fragment:oS,colorspace_fragment:lS,colorspace_pars_fragment:cS,envmap_fragment:uS,envmap_common_pars_fragment:hS,envmap_pars_fragment:dS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:TS,envmap_vertex:pS,fog_vertex:mS,fog_pars_vertex:gS,fog_fragment:vS,fog_pars_fragment:_S,gradientmap_pars_fragment:xS,lightmap_pars_fragment:yS,lights_lambert_fragment:bS,lights_lambert_pars_fragment:SS,lights_pars_begin:MS,lights_toon_fragment:wS,lights_toon_pars_fragment:AS,lights_phong_fragment:ES,lights_phong_pars_fragment:CS,lights_physical_fragment:RS,lights_physical_pars_fragment:PS,lights_fragment_begin:IS,lights_fragment_maps:DS,lights_fragment_end:LS,logdepthbuf_fragment:US,logdepthbuf_pars_fragment:NS,logdepthbuf_pars_vertex:FS,logdepthbuf_vertex:OS,map_fragment:BS,map_pars_fragment:kS,map_particle_fragment:zS,map_particle_pars_fragment:GS,metalnessmap_fragment:VS,metalnessmap_pars_fragment:HS,morphinstance_vertex:WS,morphcolor_vertex:XS,morphnormal_vertex:YS,morphtarget_pars_vertex:qS,morphtarget_vertex:jS,normal_fragment_begin:KS,normal_fragment_maps:ZS,normal_pars_fragment:JS,normal_pars_vertex:QS,normal_vertex:$S,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:rM,opaque_fragment:sM,packing:aM,premultiplied_alpha_fragment:oM,project_vertex:lM,dithering_fragment:cM,dithering_pars_fragment:uM,roughnessmap_fragment:hM,roughnessmap_pars_fragment:dM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:gM,skinbase_vertex:vM,skinning_pars_vertex:_M,skinning_vertex:xM,skinnormal_vertex:yM,specularmap_fragment:bM,specularmap_pars_fragment:SM,tonemapping_fragment:MM,tonemapping_pars_fragment:TM,transmission_fragment:wM,transmission_pars_fragment:AM,uv_pars_fragment:EM,uv_pars_vertex:CM,uv_vertex:RM,worldpos_vertex:PM,background_vert:IM,background_frag:DM,backgroundCube_vert:LM,backgroundCube_frag:UM,cube_vert:NM,cube_frag:FM,depth_vert:OM,depth_frag:BM,distance_vert:kM,distance_frag:zM,equirect_vert:GM,equirect_frag:VM,linedashed_vert:HM,linedashed_frag:WM,meshbasic_vert:XM,meshbasic_frag:YM,meshlambert_vert:qM,meshlambert_frag:jM,meshmatcap_vert:KM,meshmatcap_frag:ZM,meshnormal_vert:JM,meshnormal_frag:QM,meshphong_vert:$M,meshphong_frag:e1,meshphysical_vert:t1,meshphysical_frag:n1,meshtoon_vert:i1,meshtoon_frag:r1,points_vert:s1,points_frag:a1,shadow_vert:o1,shadow_frag:l1,sprite_vert:c1,sprite_frag:u1},Ne={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Qn={basic:{uniforms:gn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:gn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:gn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:gn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:gn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:gn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:gn([Ne.points,Ne.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:gn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:gn([Ne.common,Ne.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:gn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:gn([Ne.sprite,Ne.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:gn([Ne.common,Ne.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:gn([Ne.lights,Ne.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Qn.physical={uniforms:gn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Al={r:0,b:0,g:0},Or=new Xn,h1=new Ye;function d1(s,e,t,i,n,r,a){const o=new Ie(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const S=p(x);S===null?g(o,l):S&&S.isColor&&(g(S,1),_=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){const S=p(_);S&&(S.isCubeTexture||S.mapping===aa)?(u===void 0&&(u=new Tt(new xr(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:na(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Or.copy(_.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(Or)),u.material.toneMapped=lt.getTransfer(S.colorSpace)!==xt,(h!==S||d!==S.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Tt(new Xi(2,2),new Yn({name:"BackgroundMaterial",uniforms:na(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=lt.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,_){x.getRGB(Al,Gg(s)),i.buffers.color.setClear(Al.r,Al.g,Al.b,_,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(o,l)},render:v,addToRenderList:m,dispose:y}}function f1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,a=!1;function o(M,L,I,U,F){let V=!1;const B=h(U,I,L);r!==B&&(r=B,c(r.object)),V=f(M,U,I,F),V&&p(M,U,I,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(M,L,I,U),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,L,I){const U=I.wireframe===!0;let F=i[M.id];F===void 0&&(F={},i[M.id]=F);let V=F[L.id];V===void 0&&(V={},F[L.id]=V);let B=V[U];return B===void 0&&(B=d(l()),V[U]=B),B}function d(M){const L=[],I=[],U=[];for(let F=0;F<t;F++)L[F]=0,I[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,L,I,U){const F=r.attributes,V=L.attributes;let B=0;const H=I.getAttributes();for(const Y in H)if(H[Y].location>=0){const X=F[Y];let N=V[Y];if(N===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(N=M.instanceColor)),X===void 0||X.attribute!==N||N&&X.data!==N.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function p(M,L,I,U){const F={},V=L.attributes;let B=0;const H=I.getAttributes();for(const Y in H)if(H[Y].location>=0){let X=V[Y];X===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(X=M.instanceColor));const N={};N.attribute=X,X&&X.data&&(N.data=X.data),F[Y]=N,B++}r.attributes=F,r.attributesNum=B,r.index=U}function v(){const M=r.newAttributes;for(let L=0,I=M.length;L<I;L++)M[L]=0}function m(M){g(M,0)}function g(M,L){const I=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;I[M]=1,U[M]===0&&(s.enableVertexAttribArray(M),U[M]=1),F[M]!==L&&(s.vertexAttribDivisor(M,L),F[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let I=0,U=L.length;I<U;I++)L[I]!==M[I]&&(s.disableVertexAttribArray(I),L[I]=0)}function x(M,L,I,U,F,V,B){B===!0?s.vertexAttribIPointer(M,L,I,F,V):s.vertexAttribPointer(M,L,I,U,F,V)}function _(M,L,I,U){v();const F=U.attributes,V=I.getAttributes(),B=L.defaultAttributeValues;for(const H in V){const Y=V[H];if(Y.location>=0){let q=F[H];if(q===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const X=q.normalized,N=q.itemSize,W=e.get(q);if(W===void 0)continue;const K=W.buffer,re=W.type,te=W.bytesPerElement,z=re===s.INT||re===s.UNSIGNED_INT||q.gpuType===Oc;if(q.isInterleavedBufferAttribute){const k=q.data,J=k.stride,ve=q.offset;if(k.isInstancedInterleavedBuffer){for(let pe=0;pe<Y.locationSize;pe++)g(Y.location+pe,k.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);s.bindBuffer(s.ARRAY_BUFFER,K);for(let pe=0;pe<Y.locationSize;pe++)x(Y.location+pe,N/Y.locationSize,re,X,J*te,(ve+N/Y.locationSize*pe)*te,z)}else{if(q.isInstancedBufferAttribute){for(let k=0;k<Y.locationSize;k++)g(Y.location+k,q.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let k=0;k<Y.locationSize;k++)m(Y.location+k);s.bindBuffer(s.ARRAY_BUFFER,K);for(let k=0;k<Y.locationSize;k++)x(Y.location+k,N/Y.locationSize,re,X,N*te,N/Y.locationSize*k*te,z)}}else if(B!==void 0){const X=B[H];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(Y.location,X);break;case 3:s.vertexAttrib3fv(Y.location,X);break;case 4:s.vertexAttrib4fv(Y.location,X);break;default:s.vertexAttrib1fv(Y.location,X)}}}}y()}function S(){E();for(const M in i){const L=i[M];for(const I in L){const U=L[I];for(const F in U)u(U[F].object),delete U[F];delete L[I]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const I in L){const U=L[I];for(const F in U)u(U[F].object),delete U[F];delete L[I]}delete i[M.id]}function A(M){for(const L in i){const I=i[L];if(I[M.id]===void 0)continue;const U=I[M.id];for(const F in U)u(U[F].object),delete U[F];delete I[M.id]}}function E(){b(),a=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:E,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function p1(s,e,t){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v]*d[v];t.update(p,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function m1(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==yn&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const E=A===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pn&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xn&&!E)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,maxSamples:S,samples:w}}function g1(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new wi,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||n;return n=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,g=s.get(h);if(!n||p===null||p.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,x=y*4;let _=g.clippingState||null;l.value=_,_=u(p,d,x,f);for(let S=0;S!==x;++S)_[S]=t[S];g.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,_=f;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function v1(s){let e=new WeakMap;function t(a,o){return o===ro?a.mapping=Ri:o===so&&(a.mapping=fr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ro||o===so)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zc(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const hr=4,$p=[.125,.215,.35,.446,.526,.582],Hr=20,_1=256,Ua=new ds,em=new Ie;let Sh=null,Mh=0,Th=0,wh=!1;const x1=new D;class od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){const{size:a=256,position:o=x1}=r;Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Mh,Th),this._renderer.xr.enabled=wh,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:gi,format:yn,colorSpace:sn,depthBuffer:!1},n=tm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=y1(r)),this._blurMaterial=S1(r,e,t),this._ggxMaterial=b1(r,e,t)}return n}_compileMaterial(e){const t=new Tt(new it,e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,n,r){const l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(em),h.toneMapping=fi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new xr,new bn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let g=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(em),g=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const S=this._cubeSize;Bs(n,_*S,x>2?S:0,S,S),h.setRenderTarget(n),g&&h.render(v,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Ri||e.mapping===fr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:p}=this,v=this._sizeLods[i],m=3*v*(i>p-hr?i-p+hr:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Bs(r,m,g,3*v,2*v),n.setRenderTarget(r),n.render(o,Ua),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Bs(e,m,g,3*v,2*v),n.setRenderTarget(e),n.render(o,Ua)}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[n];h.material=c;const d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hr-1),v=r/p,m=isFinite(r)?1+Math.floor(u*v):Hr;m>Hr&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hr}`);const g=[];let y=0;for(let A=0;A<Hr;++A){const E=A/v,b=Math.exp(-E*E/2);g.push(b),A===0?y+=b:A<m&&(y+=2*b)}for(let A=0;A<g.length;A++)g[A]=g[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-i;const _=this._sizeLods[n],S=3*_*(n>x-hr?n-x+hr:0),w=4*(this._cubeSize-_);Bs(t,S,w,3*_,2*_),l.setRenderTarget(t),l.render(h,Ua)}}function y1(s){const e=[],t=[],i=[];let n=s;const r=s-hr+1+$p.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-hr?l=$p[a-s+hr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,v=3,m=2,g=1,y=new Float32Array(v*p*f),x=new Float32Array(m*p*f),_=new Float32Array(g*p*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,E=w>2?0:-1,b=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];y.set(b,v*p*w),x.set(d,m*p*w);const M=[w,w,w,w,w,w];_.set(M,g*p*w)}const S=new it;S.setAttribute("position",new gt(y,v)),S.setAttribute("uv",new gt(x,m)),S.setAttribute("faceIndex",new gt(_,g)),i.push(new Tt(S,null)),n>hr&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function tm(s,e,t){const i=new Hn(s,e,t);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function b1(s,e,t){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function S1(s,e,t){const i=new Float32Array(Hr),n=new D(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function nm(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function im(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function yu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M1(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ro||l===so,u=l===Ri||l===fr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new od(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&n(f)?(t===null&&(t=new od(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function T1(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&$s("WebGLRenderer: "+i+" extension not supported."),n}}}function w1(s,e,t,i){const n={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete n[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,p=h.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,_=y.length;x<_;x+=3){const S=y[x+0],w=y[x+1],A=y[x+2];d.push(S,w,w,A,A,S)}}else if(p!==void 0){const y=p.array;v=p.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const S=x+0,w=x+1,A=x+2;d.push(S,w,w,A,A,S)}}else return;const m=new(Fg(d)?Vd:Gd)(d,1);m.version=v;const g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function A1(s,e,t){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(i,f,r,d*a,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,i,1)}function h(d,f,p,v){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y]*v[y];t.update(g,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function E1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function C1(s,e,t){const i=new WeakMap,n=new pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*S*4*h),A=new Yc(w,_,S,h);A.type=xn,A.needsUpdate=!0;const E=x*4;for(let M=0;M<h;M++){const L=m[M],I=g[M],U=y[M],F=_*S*4*M;for(let V=0;V<L.count;V++){const B=V*E;f===!0&&(n.fromBufferAttribute(L,V),w[F+B+0]=n.x,w[F+B+1]=n.y,w[F+B+2]=n.z,w[F+B+3]=0),p===!0&&(n.fromBufferAttribute(I,V),w[F+B+4]=n.x,w[F+B+5]=n.y,w[F+B+6]=n.z,w[F+B+7]=0),v===!0&&(n.fromBufferAttribute(U,V),w[F+B+8]=n.x,w[F+B+9]=n.y,w[F+B+10]=n.z,w[F+B+11]=U.itemSize===4?n.w:1)}}d={count:h,texture:A,size:new fe(_,S)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function R1(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const P1={[wd]:"LINEAR_TONE_MAPPING",[Ad]:"REINHARD_TONE_MAPPING",[Ed]:"CINEON_TONE_MAPPING",[Cd]:"ACES_FILMIC_TONE_MAPPING",[io]:"AGX_TONE_MAPPING",[Pd]:"NEUTRAL_TONE_MAPPING",[Rd]:"CUSTOM_TONE_MAPPING"};function I1(s,e,t,i,n){const r=new Hn(e,t,{type:s,depthBuffer:i,stencilBuffer:n}),a=new Hn(e,t,{type:gi,depthBuffer:!1,stencilBuffer:!1}),o=new it;o.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new He([0,2,0,0,2,0],2));const l=new nf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Tt(o,l),u=new ds(-1,1,1,-1,0,1);let h=null,d=null,f=!1,p,v=null,m=[],g=!1;this.setSize=function(y,x){r.setSize(y,x),a.setSize(y,x);for(let _=0;_<m.length;_++){const S=m[_];S.setSize&&S.setSize(y,x)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;const x=r.width,_=r.height;for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(x,_)}},this.begin=function(y,x){if(f||y.toneMapping===fi&&m.length===0)return!1;if(v=x,x!==null){const _=x.width,S=x.height;(r.width!==_||r.height!==S)&&this.setSize(_,S)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=fi,!0},this.hasRenderPass=function(){return g},this.end=function(y,x){y.toneMapping=p,f=!0;let _=r,S=a;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(y,S,_,x),A.needsSwap!==!1)){const E=_;_=S,S=E}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},lt.getTransfer(h)===xt&&(l.defines.SRGB_TRANSFER="");const w=P1[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,y.setRenderTarget(v),y.render(c,u),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const D0=new Rt,ld=new ia(1,1),L0=new Yc,U0=new qc,N0=new Mo,rm=[],sm=[],am=new Float32Array(16),om=new Float32Array(9),lm=new Float32Array(4);function ua(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=rm[n];if(r===void 0&&(r=new Float32Array(n),rm[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function bu(s,e){let t=sm[e];t===void 0&&(t=new Int32Array(e),sm[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function D1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function L1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function U1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function N1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function F1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,i))return;lm.set(i),s.uniformMatrix2fv(this.addr,!1,lm),Qt(t,i)}}function O1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,i))return;om.set(i),s.uniformMatrix3fv(this.addr,!1,om),Qt(t,i)}}function B1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,i))return;am.set(i),s.uniformMatrix4fv(this.addr,!1,am),Qt(t,i)}}function k1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function V1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function H1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function q1(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(ld.compareFunction=t.isReversedDepthBuffer()?Xc:Wc,r=ld):r=D0,t.setTexture2D(e||r,n)}function j1(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||U0,n)}function K1(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||N0,n)}function Z1(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||L0,n)}function J1(s){switch(s){case 5126:return D1;case 35664:return L1;case 35665:return U1;case 35666:return N1;case 35674:return F1;case 35675:return O1;case 35676:return B1;case 5124:case 35670:return k1;case 35667:case 35671:return z1;case 35668:case 35672:return G1;case 35669:case 35673:return V1;case 5125:return H1;case 36294:return W1;case 36295:return X1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}function Q1(s,e){s.uniform1fv(this.addr,e)}function $1(s,e){const t=ua(e,this.size,2);s.uniform2fv(this.addr,t)}function eT(s,e){const t=ua(e,this.size,3);s.uniform3fv(this.addr,t)}function tT(s,e){const t=ua(e,this.size,4);s.uniform4fv(this.addr,t)}function nT(s,e){const t=ua(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function iT(s,e){const t=ua(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function rT(s,e){const t=ua(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sT(s,e){s.uniform1iv(this.addr,e)}function aT(s,e){s.uniform2iv(this.addr,e)}function oT(s,e){s.uniform3iv(this.addr,e)}function lT(s,e){s.uniform4iv(this.addr,e)}function cT(s,e){s.uniform1uiv(this.addr,e)}function uT(s,e){s.uniform2uiv(this.addr,e)}function hT(s,e){s.uniform3uiv(this.addr,e)}function dT(s,e){s.uniform4uiv(this.addr,e)}function fT(s,e,t){const i=this.cache,n=e.length,r=bu(t,n);Jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ld:a=D0;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function pT(s,e,t){const i=this.cache,n=e.length,r=bu(t,n);Jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||U0,r[a])}function mT(s,e,t){const i=this.cache,n=e.length,r=bu(t,n);Jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||N0,r[a])}function gT(s,e,t){const i=this.cache,n=e.length,r=bu(t,n);Jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||L0,r[a])}function vT(s){switch(s){case 5126:return Q1;case 35664:return $1;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return aT;case 35668:case 35672:return oT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return hT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}class _T{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=J1(t.type)}}class xT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vT(t.type)}}class yT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function cm(s,e){s.seq.push(e),s.map[e.id]=e}function bT(s,e,t){const i=s.name,n=i.length;for(Ah.lastIndex=0;;){const r=Ah.exec(i),a=Ah.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){cm(t,c===void 0?new _T(o,s,e):new xT(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new yT(o),cm(t,h)),t=h}}}class Fl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);bT(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function um(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const ST=37297;let MT=0;function TT(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const hm=new rt;function wT(s){lt._getMatrix(hm,lt.workingColorSpace,s);const e=`mat3( ${hm.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(s)){case oo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function dm(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+TT(s.getShaderSource(e),o)}else return r}function AT(s,e){const t=wT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ET={[wd]:"Linear",[Ad]:"Reinhard",[Ed]:"Cineon",[Cd]:"ACESFilmic",[io]:"AgX",[Pd]:"Neutral",[Rd]:"Custom"};function CT(s,e){const t=ET[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const El=new D;function RT(){lt.getLuminanceCoefficients(El);const s=El.x.toFixed(4),e=El.y.toFixed(4),t=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function IT(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DT(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Va(s){return s!==""}function fm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LT=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(s){return s.replace(LT,NT)}const UT=new Map;function NT(s,e){let t=et[e];if(t===void 0){const i=UT.get(e);if(i!==void 0)t=et[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cd(t)}const FT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(s){return s.replace(FT,OT)}function OT(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function gm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const BT={[Wa]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function kT(s){return BT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zT={[Ri]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE_UV"};function GT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":zT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const VT={[fr]:"ENVMAP_MODE_REFRACTION"};function HT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":VT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WT={[yo]:"ENVMAP_BLENDING_MULTIPLY",[yg]:"ENVMAP_BLENDING_MIX",[bg]:"ENVMAP_BLENDING_ADD"};function XT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":WT[s.combine]||"ENVMAP_BLENDING_NONE"}function YT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qT(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=kT(t),c=GT(t),u=HT(t),h=XT(t),d=YT(t),f=PT(t),p=IT(r),v=n.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Va).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Va).join(`
`),g.length>0&&(g+=`
`)):(m=[gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),g=[gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?et.tonemapping_pars_fragment:"",t.toneMapping!==fi?CT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,AT("linearToOutputTexel",t.outputColorSpace),RT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),a=cd(a),a=fm(a,t),a=pm(a,t),o=cd(o),o=fm(o,t),o=pm(o,t),a=mm(a),o=mm(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=y+m+a,_=y+g+o,S=um(n,n.VERTEX_SHADER,x),w=um(n,n.FRAGMENT_SHADER,_);n.attachShader(v,S),n.attachShader(v,w),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(L){if(s.debug.checkShaderErrors){const I=n.getProgramInfoLog(v)||"",U=n.getShaderInfoLog(S)||"",F=n.getShaderInfoLog(w)||"",V=I.trim(),B=U.trim(),H=F.trim();let Y=!0,q=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,S,w);else{const X=dm(n,S,"vertex"),N=dm(n,w,"fragment");je("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+X+`
`+N)}else V!==""?Oe("WebGLProgram: Program Info Log:",V):(B===""||H==="")&&(q=!1);q&&(L.diagnostics={runnable:Y,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:g}})}n.deleteShader(S),n.deleteShader(w),E=new Fl(n,v),b=DT(n,v)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,ST)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}let jT=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZT(e),t.set(e,i)),i}}class ZT{constructor(e){this.id=jT++,this.code=e,this.usedTimes=0}}function JT(s,e,t,i,n,r,a){const o=new jc,l=new KT,c=new Set,u=[],h=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,I,U){const F=I.fog,V=U.geometry,B=b.isMeshStandardMaterial?I.environment:null,H=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),Y=H&&H.mapping===aa?H.image.height:null,q=p[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Oe("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const X=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,N=X!==void 0?X.length:0;let W=0;V.morphAttributes.position!==void 0&&(W=1),V.morphAttributes.normal!==void 0&&(W=2),V.morphAttributes.color!==void 0&&(W=3);let K,re,te,z;if(q){const $e=Qn[q];K=$e.vertexShader,re=$e.fragmentShader}else K=b.vertexShader,re=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),z=l.getFragmentShaderID(b);const k=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),ve=U.isInstancedMesh===!0,pe=U.isBatchedMesh===!0,be=!!b.map,ge=!!b.matcap,De=!!H,se=!!b.aoMap,ie=!!b.lightMap,ne=!!b.bumpMap,de=!!b.normalMap,R=!!b.displacementMap,Ae=!!b.emissiveMap,he=!!b.metalnessMap,ae=!!b.roughnessMap,me=b.anisotropy>0,C=b.clearcoat>0,T=b.dispersion>0,O=b.iridescence>0,$=b.sheen>0,Q=b.transmission>0,j=me&&!!b.anisotropyMap,we=C&&!!b.clearcoatMap,_e=C&&!!b.clearcoatNormalMap,Re=C&&!!b.clearcoatRoughnessMap,ke=O&&!!b.iridescenceMap,ue=O&&!!b.iridescenceThicknessMap,Me=$&&!!b.sheenColorMap,Te=$&&!!b.sheenRoughnessMap,Le=!!b.specularMap,Ee=!!b.specularColorMap,Qe=!!b.specularIntensityMap,G=Q&&!!b.transmissionMap,ye=Q&&!!b.thicknessMap,Se=!!b.gradientMap,Be=!!b.alphaMap,xe=b.alphaTest>0,ce=!!b.alphaHash,Ce=!!b.extensions;let Ge=fi;b.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const Ve={shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:re,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:pe,batchingColor:pe&&U._colorsTexture!==null,instancing:ve,instancingColor:ve&&U.instanceColor!==null,instancingMorph:ve&&U.morphTexture!==null,outputColorSpace:k===null?s.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:sn,alphaToCoverage:!!b.alphaToCoverage,map:be,matcap:ge,envMap:De,envMapMode:De&&H.mapping,envMapCubeUVHeight:Y,aoMap:se,lightMap:ie,bumpMap:ne,normalMap:de,displacementMap:R,emissiveMap:Ae,normalMapObjectSpace:de&&b.normalMapType===Rg,normalMapTangentSpace:de&&b.normalMapType===_r,metalnessMap:he,roughnessMap:ae,anisotropy:me,anisotropyMap:j,clearcoat:C,clearcoatMap:we,clearcoatNormalMap:_e,clearcoatRoughnessMap:Re,dispersion:T,iridescence:O,iridescenceMap:ke,iridescenceThicknessMap:ue,sheen:$,sheenColorMap:Me,sheenRoughnessMap:Te,specularMap:Le,specularColorMap:Ee,specularIntensityMap:Qe,transmission:Q,transmissionMap:G,thicknessMap:ye,gradientMap:Se,opaque:b.transparent===!1&&b.blending===Zr&&b.alphaToCoverage===!1,alphaMap:Be,alphaTest:xe,alphaHash:ce,combine:b.combine,mapUv:be&&v(b.map.channel),aoMapUv:se&&v(b.aoMap.channel),lightMapUv:ie&&v(b.lightMap.channel),bumpMapUv:ne&&v(b.bumpMap.channel),normalMapUv:de&&v(b.normalMap.channel),displacementMapUv:R&&v(b.displacementMap.channel),emissiveMapUv:Ae&&v(b.emissiveMap.channel),metalnessMapUv:he&&v(b.metalnessMap.channel),roughnessMapUv:ae&&v(b.roughnessMap.channel),anisotropyMapUv:j&&v(b.anisotropyMap.channel),clearcoatMapUv:we&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(b.sheenRoughnessMap.channel),specularMapUv:Le&&v(b.specularMap.channel),specularColorMapUv:Ee&&v(b.specularColorMap.channel),specularIntensityMapUv:Qe&&v(b.specularIntensityMap.channel),transmissionMapUv:G&&v(b.transmissionMap.channel),thicknessMapUv:ye&&v(b.thicknessMap.channel),alphaMapUv:Be&&v(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(de||me),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(be||Be),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:J,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:Ae&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===kn,flipSided:b.side===hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function g(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(M,b),x(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const M=p[b.type];let L;if(M){const I=Qn[M];L=So.clone(I.uniforms)}else L=b.uniforms;return L}function S(b,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new qT(s,M,b,r),u.push(L),h.set(M,L)),L}function w(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),h.delete(b.cacheKey),b.destroy()}}function A(b){l.remove(b)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:E}}function QT(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function $T(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _m(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(h,d,f,p,v,m){let g=s[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:v,group:m},s[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=v,g.group=m),e++,g}function o(h,d,f,p,v,m){const g=a(h,d,f,p,v,m);f.transmission>0?i.push(g):f.transparent===!0?n.push(g):t.push(g)}function l(h,d,f,p,v,m){const g=a(h,d,f,p,v,m);f.transmission>0?i.unshift(g):f.transparent===!0?n.unshift(g):t.unshift(g)}function c(h,d){t.length>1&&t.sort(h||$T),i.length>1&&i.sort(d||vm),n.length>1&&n.sort(d||vm)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function ew(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new _m,s.set(i,[a])):n>=r.length?(a=new _m,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function tw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function nw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let iw=0;function rw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sw(s){const e=new tw,t=nw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,r=new Ye,a=new Ye;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,y=0,x=0,_=0,S=0,w=0,A=0;c.sort(rw);for(let b=0,M=c.length;b<M;b++){const L=c[b],I=L.color,U=L.intensity,F=L.distance;let V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ns?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=I.r*U,h+=I.g*U,d+=I.b*U;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],U);A++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,Y=t.get(L);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=L.shadow.matrix,y++}i.directional[f]=B,f++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(I).multiplyScalar(U),B.distance=F,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[v]=B;const H=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,H.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[v]=H.matrix,L.castShadow){const Y=t.get(L);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=V,_++}v++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(I).multiplyScalar(U),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=B,m++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const H=L.shadow,Y=t.get(L);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=L.shadow.matrix,x++}i.point[p]=B,p++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(U),B.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[g]=B,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const E=i.hash;(E.directionalLength!==f||E.pointLength!==p||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==g||E.numDirectionalShadows!==y||E.numPointShadows!==x||E.numSpotShadows!==_||E.numSpotMaps!==S||E.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,E.directionalLength=f,E.pointLength=p,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=g,E.numDirectionalShadows=y,E.numPointShadows=x,E.numSpotShadows=_,E.numSpotMaps=S,E.numLightProbes=A,i.version=iw++)}function l(c,u){let h=0,d=0,f=0,p=0,v=0;const m=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const x=c[g];if(x.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),h++}else if(x.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=i.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function xm(s){const e=new sw(s),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function aw(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new xm(s),e.set(n,[o])):r>=a.length?(o=new xm(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cw=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],uw=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ym=new Ye,Na=new D,Eh=new D;function hw(s,e,t){let i=new la;const n=new fe,r=new fe,a=new pt,o=new vu,l=new _u,c={},u=t.maxTextureSize,h={[mi]:hn,[hn]:mi,[kn]:kn},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:ow,fragmentShader:lw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new it;p.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let g=this.type;this.render=function(w,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Xa&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Wa);const b=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Ci),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=g!==this.type;U&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=w.length;F<V;F++){const B=w[F],H=B.shadow;if(H===void 0){Oe("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const Y=H.getFrameExtents();if(n.multiply(Y),r.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/Y.x),n.x=r.x*Y.x,H.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/Y.y),n.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null||U===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===zs){if(B.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Hn(n.x,n.y,{format:ns,type:gi,minFilter:yt,magFilter:yt,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new ia(n.x,n.y,xn),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Pi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt}else{B.isPointLight?(H.map=new Zc(n.x),H.map.depthTexture=new qg(n.x,ti)):(H.map=new Hn(n.x,n.y),H.map.depthTexture=new ia(n.x,n.y,ti)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Pi;const X=s.state.buffers.depth.getReversed();this.type===Wa?(H.map.depthTexture.compareFunction=X?Xc:Wc,H.map.depthTexture.minFilter=yt,H.map.depthTexture.magFilter=yt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt)}H.camera.updateProjectionMatrix()}const q=H.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<q;X++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,X),s.clear();else{X===0&&(s.setRenderTarget(H.map),s.clear());const N=H.getViewport(X);a.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),I.viewport(a)}if(B.isPointLight){const N=H.camera,W=H.matrix,K=B.distance||N.far;K!==N.far&&(N.far=K,N.updateProjectionMatrix()),Na.setFromMatrixPosition(B.matrixWorld),N.position.copy(Na),Eh.copy(N.position),Eh.add(cw[X]),N.up.copy(uw[X]),N.lookAt(Eh),N.updateMatrixWorld(),W.makeTranslation(-Na.x,-Na.y,-Na.z),ym.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ym,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(B);i=H.getFrustum(),_(A,E,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===zs&&y(H,E),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,L)};function y(w,A){const E=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hn(n.x,n.y,{format:ns,type:gi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,E,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,E,f,v,null)}function x(w,A,E,b){let M=null;const L=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=E.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=M.uuid,U=A.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let V=F[U];V===void 0&&(V=M.clone(),F[U]=V,A.addEventListener("dispose",S)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,b===zs?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=s.properties.get(M);I.light=E}return M}function _(w,A,E,b,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===zs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const U=e.update(w),F=w.material;if(Array.isArray(F)){const V=U.groups;for(let B=0,H=V.length;B<H;B++){const Y=V[B],q=F[Y.materialIndex];if(q&&q.visible){const X=x(w,q,b,M);w.onBeforeShadow(s,w,A,E,U,X,Y),s.renderBufferDirect(E,null,U,X,w,Y),w.onAfterShadow(s,w,A,E,U,X,Y)}}}else if(F.visible){const V=x(w,F,b,M);w.onBeforeShadow(s,w,A,E,U,V,null),s.renderBufferDirect(E,null,U,V,w,null),w.onAfterShadow(s,w,A,E,U,V,null)}}const I=w.children;for(let U=0,F=I.length;U<F;U++)_(I[U],A,E,b,M)}function S(w){w.target.removeEventListener("dispose",S);for(const E in c){const b=c[E],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const dw={[Vl]:Hl,[Wl]:ql,[Xl]:jl,[ts]:Yl,[Hl]:Vl,[ql]:Wl,[jl]:Xl,[Yl]:ts};function fw(s,e){function t(){let G=!1;const ye=new pt;let Se=null;const Be=new pt(0,0,0,0);return{setMask:function(xe){Se!==xe&&!G&&(s.colorMask(xe,xe,xe,xe),Se=xe)},setLocked:function(xe){G=xe},setClear:function(xe,ce,Ce,Ge,Ve){Ve===!0&&(xe*=Ge,ce*=Ge,Ce*=Ge),ye.set(xe,ce,Ce,Ge),Be.equals(ye)===!1&&(s.clearColor(xe,ce,Ce,Ge),Be.copy(ye))},reset:function(){G=!1,Se=null,Be.set(-1,0,0,0)}}}function i(){let G=!1,ye=!1,Se=null,Be=null,xe=null;return{setReversed:function(ce){if(ye!==ce){const Ce=e.get("EXT_clip_control");ce?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ye=ce;const Ge=xe;xe=null,this.setClear(Ge)}},getReversed:function(){return ye},setTest:function(ce){ce?k(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(ce){Se!==ce&&!G&&(s.depthMask(ce),Se=ce)},setFunc:function(ce){if(ye&&(ce=dw[ce]),Be!==ce){switch(ce){case Vl:s.depthFunc(s.NEVER);break;case Hl:s.depthFunc(s.ALWAYS);break;case Wl:s.depthFunc(s.LESS);break;case ts:s.depthFunc(s.LEQUAL);break;case Xl:s.depthFunc(s.EQUAL);break;case Yl:s.depthFunc(s.GEQUAL);break;case ql:s.depthFunc(s.GREATER);break;case jl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=ce}},setLocked:function(ce){G=ce},setClear:function(ce){xe!==ce&&(ye&&(ce=1-ce),s.clearDepth(ce),xe=ce)},reset:function(){G=!1,Se=null,Be=null,xe=null,ye=!1}}}function n(){let G=!1,ye=null,Se=null,Be=null,xe=null,ce=null,Ce=null,Ge=null,Ve=null;return{setTest:function($e){G||($e?k(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function($e){ye!==$e&&!G&&(s.stencilMask($e),ye=$e)},setFunc:function($e,wt,At){(Se!==$e||Be!==wt||xe!==At)&&(s.stencilFunc($e,wt,At),Se=$e,Be=wt,xe=At)},setOp:function($e,wt,At){(ce!==$e||Ce!==wt||Ge!==At)&&(s.stencilOp($e,wt,At),ce=$e,Ce=wt,Ge=At)},setLocked:function($e){G=$e},setClear:function($e){Ve!==$e&&(s.clearStencil($e),Ve=$e)},reset:function(){G=!1,ye=null,Se=null,Be=null,xe=null,ce=null,Ce=null,Ge=null,Ve=null}}}const r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,v=!1,m=null,g=null,y=null,x=null,_=null,S=null,w=null,A=new Ie(0,0,0),E=0,b=!1,M=null,L=null,I=null,U=null,F=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=H>=2);let q=null,X={};const N=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),K=new pt().fromArray(N),re=new pt().fromArray(W);function te(G,ye,Se,Be){const xe=new Uint8Array(4),ce=s.createTexture();s.bindTexture(G,ce),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<Se;Ce++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(ye+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return ce}const z={};z[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),z[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),z[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(s.DEPTH_TEST),a.setFunc(ts),ne(!1),de(Yh),k(s.CULL_FACE),se(Ci);function k(G){u[G]!==!0&&(s.enable(G),u[G]=!0)}function J(G){u[G]!==!1&&(s.disable(G),u[G]=!1)}function ve(G,ye){return h[G]!==ye?(s.bindFramebuffer(G,ye),h[G]=ye,G===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ye),G===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function pe(G,ye){let Se=f,Be=!1;if(G){Se=d.get(ye),Se===void 0&&(Se=[],d.set(ye,Se));const xe=G.textures;if(Se.length!==xe.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,Ce=xe.length;ce<Ce;ce++)Se[ce]=s.COLOR_ATTACHMENT0+ce;Se.length=xe.length,Be=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,Be=!0);Be&&s.drawBuffers(Se)}function be(G){return p!==G?(s.useProgram(G),p=G,!0):!1}const ge={[or]:s.FUNC_ADD,[ig]:s.FUNC_SUBTRACT,[rg]:s.FUNC_REVERSE_SUBTRACT};ge[sg]=s.MIN,ge[ag]=s.MAX;const De={[og]:s.ZERO,[lg]:s.ONE,[cg]:s.SRC_COLOR,[zl]:s.SRC_ALPHA,[mg]:s.SRC_ALPHA_SATURATE,[fg]:s.DST_COLOR,[hg]:s.DST_ALPHA,[ug]:s.ONE_MINUS_SRC_COLOR,[Gl]:s.ONE_MINUS_SRC_ALPHA,[pg]:s.ONE_MINUS_DST_COLOR,[dg]:s.ONE_MINUS_DST_ALPHA,[gg]:s.CONSTANT_COLOR,[vg]:s.ONE_MINUS_CONSTANT_COLOR,[_g]:s.CONSTANT_ALPHA,[xg]:s.ONE_MINUS_CONSTANT_ALPHA};function se(G,ye,Se,Be,xe,ce,Ce,Ge,Ve,$e){if(G===Ci){v===!0&&(J(s.BLEND),v=!1);return}if(v===!1&&(k(s.BLEND),v=!0),G!==ng){if(G!==m||$e!==b){if((g!==or||_!==or)&&(s.blendEquation(s.FUNC_ADD),g=or,_=or),$e)switch(G){case Zr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFunc(s.ONE,s.ONE);break;case jh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:je("WebGLState: Invalid blending: ",G);break}else switch(G){case Zr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jh:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",G);break}y=null,x=null,S=null,w=null,A.set(0,0,0),E=0,m=G,b=$e}return}xe=xe||ye,ce=ce||Se,Ce=Ce||Be,(ye!==g||xe!==_)&&(s.blendEquationSeparate(ge[ye],ge[xe]),g=ye,_=xe),(Se!==y||Be!==x||ce!==S||Ce!==w)&&(s.blendFuncSeparate(De[Se],De[Be],De[ce],De[Ce]),y=Se,x=Be,S=ce,w=Ce),(Ge.equals(A)===!1||Ve!==E)&&(s.blendColor(Ge.r,Ge.g,Ge.b,Ve),A.copy(Ge),E=Ve),m=G,b=!1}function ie(G,ye){G.side===kn?J(s.CULL_FACE):k(s.CULL_FACE);let Se=G.side===hn;ye&&(Se=!Se),ne(Se),G.blending===Zr&&G.transparent===!1?se(Ci):se(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const Be=G.stencilWrite;o.setTest(Be),Be&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ae(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?k(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(G){M!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),M=G)}function de(G){G!==eg?(k(s.CULL_FACE),G!==L&&(G===Yh?s.cullFace(s.BACK):G===tg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),L=G}function R(G){G!==I&&(B&&s.lineWidth(G),I=G)}function Ae(G,ye,Se){G?(k(s.POLYGON_OFFSET_FILL),(U!==ye||F!==Se)&&(s.polygonOffset(ye,Se),U=ye,F=Se)):J(s.POLYGON_OFFSET_FILL)}function he(G){G?k(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function ae(G){G===void 0&&(G=s.TEXTURE0+V-1),q!==G&&(s.activeTexture(G),q=G)}function me(G,ye,Se){Se===void 0&&(q===null?Se=s.TEXTURE0+V-1:Se=q);let Be=X[Se];Be===void 0&&(Be={type:void 0,texture:void 0},X[Se]=Be),(Be.type!==G||Be.texture!==ye)&&(q!==Se&&(s.activeTexture(Se),q=Se),s.bindTexture(G,ye||z[G]),Be.type=G,Be.texture=ye)}function C(){const G=X[q];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function $(){try{s.texSubImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function Q(){try{s.texSubImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function _e(){try{s.texStorage2D(...arguments)}catch(G){je("WebGLState:",G)}}function Re(){try{s.texStorage3D(...arguments)}catch(G){je("WebGLState:",G)}}function ke(){try{s.texImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function ue(){try{s.texImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function Me(G){K.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),K.copy(G))}function Te(G){re.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),re.copy(G))}function Le(G,ye){let Se=c.get(ye);Se===void 0&&(Se=new WeakMap,c.set(ye,Se));let Be=Se.get(G);Be===void 0&&(Be=s.getUniformBlockIndex(ye,G.name),Se.set(G,Be))}function Ee(G,ye){const Be=c.get(ye).get(G);l.get(ye)!==Be&&(s.uniformBlockBinding(ye,Be,G.__bindingPointIndex),l.set(ye,Be))}function Qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},q=null,X={},h={},d=new WeakMap,f=[],p=null,v=!1,m=null,g=null,y=null,x=null,_=null,S=null,w=null,A=new Ie(0,0,0),E=0,b=!1,M=null,L=null,I=null,U=null,F=null,K.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:k,disable:J,bindFramebuffer:ve,drawBuffers:pe,useProgram:be,setBlending:se,setMaterial:ie,setFlipSided:ne,setCullFace:de,setLineWidth:R,setPolygonOffset:Ae,setScissorTest:he,activeTexture:ae,bindTexture:me,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:O,texImage2D:ke,texImage3D:ue,updateUBOMapping:Le,uniformBlockBinding:Ee,texStorage2D:_e,texStorage3D:Re,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:we,scissor:Me,viewport:Te,reset:Qe}}function pw(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,T){return f?new OffscreenCanvas(C,T):co("canvas")}function v(C,T,O){let $=1;const Q=me(C);if((Q.width>O||Q.height>O)&&($=O/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor($*Q.width),we=Math.floor($*Q.height);h===void 0&&(h=p(j,we));const _e=T?p(j,we):h;return _e.width=j,_e.height=we,_e.getContext("2d").drawImage(C,0,0,j,we),Oe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+we+")."),_e}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function g(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,T,O,$,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=T;if(T===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8)),T===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),T===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8)),T===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),T===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),T===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),T===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),T===s.RGBA){const we=Q?oo:lt.getTransfer($);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=we===xt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(C,T){let O;return C?T===null||T===ti||T===Ks?O=s.DEPTH24_STENCIL8:T===xn?O=s.DEPTH32F_STENCIL8:T===js&&(O=s.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ti||T===Ks?O=s.DEPTH_COMPONENT24:T===xn?O=s.DEPTH_COMPONENT32F:T===js&&(O=s.DEPTH_COMPONENT16),O}function S(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==yt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function w(C){const T=C.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&u.delete(T)}function A(C){const T=C.target;T.removeEventListener("dispose",A),M(T)}function E(C){const T=i.get(C);if(T.__webglInit===void 0)return;const O=C.source,$=d.get(O);if($){const Q=$[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys($).length===0&&d.delete(O)}i.remove(C)}function b(C){const T=i.get(C);s.deleteTexture(T.__webglTexture);const O=C.source,$=d.get(O);delete $[T.__cacheKey],a.memory.textures--}function M(C){const T=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let Q=0;Q<T.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(T.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)s.deleteFramebuffer(T.__webglFramebuffer[$]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const O=C.textures;for(let $=0,Q=O.length;$<Q;$++){const j=i.get(O[$]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[$])}i.remove(C)}let L=0;function I(){L=0}function U(){const C=L;return C>=n.maxTextures&&Oe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),L+=1,C}function F(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function V(C,T){const O=i.get(C);if(C.isVideoTexture&&he(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const $=C.image;if($===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{z(O,C,T);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+T)}function B(C,T){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){z(O,C,T);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+T)}function H(C,T){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){z(O,C,T);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+T)}function Y(C,T){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){k(O,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+T)}const q={[pr]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[qs]:s.MIRRORED_REPEAT},X={[Dt]:s.NEAREST,[Fc]:s.NEAREST_MIPMAP_NEAREST,[Xr]:s.NEAREST_MIPMAP_LINEAR,[yt]:s.LINEAR,[Hs]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},N={[Pg]:s.NEVER,[Ng]:s.ALWAYS,[Ig]:s.LESS,[Wc]:s.LEQUAL,[Dg]:s.EQUAL,[Xc]:s.GEQUAL,[Lg]:s.GREATER,[Ug]:s.NOTEQUAL};function W(C,T){if(T.type===xn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yt||T.magFilter===Hs||T.magFilter===Xr||T.magFilter===zn||T.minFilter===yt||T.minFilter===Hs||T.minFilter===Xr||T.minFilter===zn)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,q[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,q[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,q[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,X[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,X[T.minFilter]),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dt||T.minFilter!==Xr&&T.minFilter!==zn||T.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function K(C,T){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",w));const $=T.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const j=F(T);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[j].usedTimes++;const we=Q[C.__cacheKey];we!==void 0&&(Q[C.__cacheKey].usedTimes--,we.usedTimes===0&&b(T)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return O}function re(C,T,O){return Math.floor(Math.floor(C/O)/T)}function te(C,T,O,$){const j=C.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,O,$,T.data);else{j.sort((ue,Me)=>ue.start-Me.start);let we=0;for(let ue=1;ue<j.length;ue++){const Me=j[we],Te=j[ue],Le=Me.start+Me.count,Ee=re(Te.start,T.width,4),Qe=re(Me.start,T.width,4);Te.start<=Le+1&&Ee===Qe&&re(Te.start+Te.count-1,T.width,4)===Ee?Me.count=Math.max(Me.count,Te.start+Te.count-Me.start):(++we,j[we]=Te)}j.length=we+1;const _e=s.getParameter(s.UNPACK_ROW_LENGTH),Re=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let ue=0,Me=j.length;ue<Me;ue++){const Te=j[ue],Le=Math.floor(Te.start/4),Ee=Math.ceil(Te.count/4),Qe=Le%T.width,G=Math.floor(Le/T.width),ye=Ee,Se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,Qe,G,ye,Se,O,$,T.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,_e),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function z(C,T,O){let $=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=s.TEXTURE_3D);const Q=K(C,T),j=T.source;t.bindTexture($,C.__webglTexture,s.TEXTURE0+O);const we=i.get(j);if(j.version!==we.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const _e=lt.getPrimaries(lt.workingColorSpace),Re=T.colorSpace===ki?null:lt.getPrimaries(T.colorSpace),ke=T.colorSpace===ki||_e===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ue=v(T.image,!1,n.maxTextureSize);ue=ae(T,ue);const Me=r.convert(T.format,T.colorSpace),Te=r.convert(T.type);let Le=x(T.internalFormat,Me,Te,T.colorSpace,T.isVideoTexture);W($,T);let Ee;const Qe=T.mipmaps,G=T.isVideoTexture!==!0,ye=we.__version===void 0||Q===!0,Se=j.dataReady,Be=S(T,ue);if(T.isDepthTexture)Le=_(T.format===cr,T.type),ye&&(G?t.texStorage2D(s.TEXTURE_2D,1,Le,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,Le,ue.width,ue.height,0,Me,Te,null));else if(T.isDataTexture)if(Qe.length>0){G&&ye&&t.texStorage2D(s.TEXTURE_2D,Be,Le,Qe[0].width,Qe[0].height);for(let xe=0,ce=Qe.length;xe<ce;xe++)Ee=Qe[xe],G?Se&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ee.width,Ee.height,Me,Te,Ee.data):t.texImage2D(s.TEXTURE_2D,xe,Le,Ee.width,Ee.height,0,Me,Te,Ee.data);T.generateMipmaps=!1}else G?(ye&&t.texStorage2D(s.TEXTURE_2D,Be,Le,ue.width,ue.height),Se&&te(T,ue,Me,Te)):t.texImage2D(s.TEXTURE_2D,0,Le,ue.width,ue.height,0,Me,Te,ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Le,Qe[0].width,Qe[0].height,ue.depth);for(let xe=0,ce=Qe.length;xe<ce;xe++)if(Ee=Qe[xe],T.format!==yn)if(Me!==null)if(G){if(Se)if(T.layerUpdates.size>0){const Ce=ad(Ee.width,Ee.height,T.format,T.type);for(const Ge of T.layerUpdates){const Ve=Ee.data.subarray(Ge*Ce/Ee.data.BYTES_PER_ELEMENT,(Ge+1)*Ce/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Ge,Ee.width,Ee.height,1,Me,Ve)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ee.width,Ee.height,ue.depth,Me,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Le,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ee.width,Ee.height,ue.depth,Me,Te,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,Le,Ee.width,Ee.height,ue.depth,0,Me,Te,Ee.data)}else{G&&ye&&t.texStorage2D(s.TEXTURE_2D,Be,Le,Qe[0].width,Qe[0].height);for(let xe=0,ce=Qe.length;xe<ce;xe++)Ee=Qe[xe],T.format!==yn?Me!==null?G?Se&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,Le,Ee.width,Ee.height,0,Ee.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Se&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ee.width,Ee.height,Me,Te,Ee.data):t.texImage2D(s.TEXTURE_2D,xe,Le,Ee.width,Ee.height,0,Me,Te,Ee.data)}else if(T.isDataArrayTexture)if(G){if(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Le,ue.width,ue.height,ue.depth),Se)if(T.layerUpdates.size>0){const xe=ad(ue.width,ue.height,T.format,T.type);for(const ce of T.layerUpdates){const Ce=ue.data.subarray(ce*xe/ue.data.BYTES_PER_ELEMENT,(ce+1)*xe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,Me,Te,Ce)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,Te,ue.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,ue.width,ue.height,ue.depth,0,Me,Te,ue.data);else if(T.isData3DTexture)G?(ye&&t.texStorage3D(s.TEXTURE_3D,Be,Le,ue.width,ue.height,ue.depth),Se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,Te,ue.data)):t.texImage3D(s.TEXTURE_3D,0,Le,ue.width,ue.height,ue.depth,0,Me,Te,ue.data);else if(T.isFramebufferTexture){if(ye)if(G)t.texStorage2D(s.TEXTURE_2D,Be,Le,ue.width,ue.height);else{let xe=ue.width,ce=ue.height;for(let Ce=0;Ce<Be;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,Le,xe,ce,0,Me,Te,null),xe>>=1,ce>>=1}}else if(Qe.length>0){if(G&&ye){const xe=me(Qe[0]);t.texStorage2D(s.TEXTURE_2D,Be,Le,xe.width,xe.height)}for(let xe=0,ce=Qe.length;xe<ce;xe++)Ee=Qe[xe],G?Se&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Me,Te,Ee):t.texImage2D(s.TEXTURE_2D,xe,Le,Me,Te,Ee);T.generateMipmaps=!1}else if(G){if(ye){const xe=me(ue);t.texStorage2D(s.TEXTURE_2D,Be,Le,xe.width,xe.height)}Se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Te,ue)}else t.texImage2D(s.TEXTURE_2D,0,Le,Me,Te,ue);m(T)&&g($),we.__version=j.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function k(C,T,O){if(T.image.length!==6)return;const $=K(C,T),Q=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const j=i.get(Q);if(Q.version!==j.__version||$===!0){t.activeTexture(s.TEXTURE0+O);const we=lt.getPrimaries(lt.workingColorSpace),_e=T.colorSpace===ki?null:lt.getPrimaries(T.colorSpace),Re=T.colorSpace===ki||we===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,ue=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!ke&&!ue?Me[ce]=v(T.image[ce],!0,n.maxCubemapSize):Me[ce]=ue?T.image[ce].image:T.image[ce],Me[ce]=ae(T,Me[ce]);const Te=Me[0],Le=r.convert(T.format,T.colorSpace),Ee=r.convert(T.type),Qe=x(T.internalFormat,Le,Ee,T.colorSpace),G=T.isVideoTexture!==!0,ye=j.__version===void 0||$===!0,Se=Q.dataReady;let Be=S(T,Te);W(s.TEXTURE_CUBE_MAP,T);let xe;if(ke){G&&ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,Qe,Te.width,Te.height);for(let ce=0;ce<6;ce++){xe=Me[ce].mipmaps;for(let Ce=0;Ce<xe.length;Ce++){const Ge=xe[Ce];T.format!==yn?Le!==null?G?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,Ge.width,Ge.height,Le,Ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,Qe,Ge.width,Ge.height,0,Ge.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,Ge.width,Ge.height,Le,Ee,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,Qe,Ge.width,Ge.height,0,Le,Ee,Ge.data)}}}else{if(xe=T.mipmaps,G&&ye){xe.length>0&&Be++;const ce=me(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,Qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,Le,Ee,Me[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,Me[ce].width,Me[ce].height,0,Le,Ee,Me[ce].data);for(let Ce=0;Ce<xe.length;Ce++){const Ve=xe[Ce].image[ce].image;G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,Ve.width,Ve.height,Le,Ee,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,Qe,Ve.width,Ve.height,0,Le,Ee,Ve.data)}}else{G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Le,Ee,Me[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,Le,Ee,Me[ce]);for(let Ce=0;Ce<xe.length;Ce++){const Ge=xe[Ce];G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,Le,Ee,Ge.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,Qe,Le,Ee,Ge.image[ce])}}}m(T)&&g(s.TEXTURE_CUBE_MAP),j.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function J(C,T,O,$,Q,j){const we=r.convert(O.format,O.colorSpace),_e=r.convert(O.type),Re=x(O.internalFormat,we,_e,O.colorSpace),ke=i.get(T),ue=i.get(O);if(ue.__renderTarget=T,!ke.__hasExternalTextures){const Me=Math.max(1,T.width>>j),Te=Math.max(1,T.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Re,Me,Te,T.depth,0,we,_e,null):t.texImage2D(Q,j,Re,Me,Te,0,we,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ae(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,ue.__webglTexture,0,R(T)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,ue.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(C,T,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer){const $=T.depthTexture,Q=$&&$.isDepthTexture?$.type:null,j=_(T.stencilBuffer,Q),we=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(T),j,T.width,T.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(T),j,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,j,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,C)}else{const $=T.textures;for(let Q=0;Q<$.length;Q++){const j=$[Q],we=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Re=x(j.internalFormat,we,_e,j.colorSpace);Ae(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(T),Re,T.width,T.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(T),Re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Re,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(C,T,O){const $=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(T.depthTexture);if(Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),W(s.TEXTURE_CUBE_MAP,T.depthTexture);const ke=r.convert(T.depthTexture.format),ue=r.convert(T.depthTexture.type);let Me;T.depthTexture.format===Pi?Me=s.DEPTH_COMPONENT24:T.depthTexture.format===cr&&(Me=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Me,T.width,T.height,0,ke,ue,null)}}else V(T.depthTexture,0);const j=Q.__webglTexture,we=R(T),_e=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Re=T.depthTexture.format===cr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Pi)Ae(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,_e,j,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,Re,_e,j,0);else if(T.depthTexture.format===cr)Ae(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,_e,j,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,Re,_e,j,0);else throw new Error("Unknown depthTexture format")}function be(C){const T=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=$}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(O)for(let $=0;$<6;$++)pe(T.__webglFramebuffer[$],C,$);else{const $=C.texture.mipmaps;$&&$.length>0?pe(T.__webglFramebuffer[0],C,0):pe(T.__webglFramebuffer,C,0)}else if(O){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[$],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(C,T,O){const $=i.get(C);T!==void 0&&J($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&be(C)}function De(C){const T=C.texture,O=i.get(C),$=i.get(T);C.addEventListener("dispose",A);const Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=T.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0){O.__webglFramebuffer[_e]=[];for(let Re=0;Re<T.mipmaps.length;Re++)O.__webglFramebuffer[_e][Re]=s.createFramebuffer()}else O.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){O.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)O.__webglFramebuffer[_e]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(we)for(let _e=0,Re=Q.length;_e<Re;_e++){const ke=i.get(Q[_e]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ae(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<Q.length;_e++){const Re=Q[_e];O.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);const ke=r.convert(Re.format,Re.colorSpace),ue=r.convert(Re.type),Me=x(Re.internalFormat,ke,ue,Re.colorSpace,C.isXRRenderTarget===!0),Te=R(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Me,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),W(s.TEXTURE_CUBE_MAP,T);for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)J(O.__webglFramebuffer[_e][Re],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re);else J(O.__webglFramebuffer[_e],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(T)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let _e=0,Re=Q.length;_e<Re;_e++){const ke=Q[_e],ue=i.get(ke);let Me=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,ue.__webglTexture),W(Me,ke),J(O.__webglFramebuffer,C,ke,s.COLOR_ATTACHMENT0+_e,Me,0),m(ke)&&g(Me)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,$.__webglTexture),W(_e,T),T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)J(O.__webglFramebuffer[Re],C,T,s.COLOR_ATTACHMENT0,_e,Re);else J(O.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,_e,0);m(T)&&g(_e),t.unbindTexture()}C.depthBuffer&&be(C)}function se(C){const T=C.textures;for(let O=0,$=T.length;O<$;O++){const Q=T[O];if(m(Q)){const j=y(C),we=i.get(Q).__webglTexture;t.bindTexture(j,we),g(j),t.unbindTexture()}}}const ie=[],ne=[];function de(C){if(C.samples>0){if(Ae(C)===!1){const T=C.textures,O=C.width,$=C.height;let Q=s.COLOR_BUFFER_BIT;const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=i.get(C),_e=T.length>1;if(_e)for(let ke=0;ke<T.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[ke]);const ue=i.get(T[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ue,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,Q,s.NEAREST),l===!0&&(ie.length=0,ne.length=0,ie.push(s.COLOR_ATTACHMENT0+ke),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(j),ne.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let ke=0;ke<T.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,we.__webglColorRenderbuffer[ke]);const ue=i.get(T[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function R(C){return Math.min(n.maxSamples,C.samples)}function Ae(C){const T=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function he(C){const T=a.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function ae(C,T){const O=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==sn&&O!==ki&&(lt.getTransfer(O)===xt?($!==yn||Q!==Pn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",O)),T}function me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=ge,this.setupRenderTarget=De,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function F0(s,e){function t(i,n=ki){let r;const a=lt.getTransfer(n);if(i===Pn)return s.UNSIGNED_BYTE;if(i===Bc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===kc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Ld)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Id)return s.BYTE;if(i===Dd)return s.SHORT;if(i===js)return s.UNSIGNED_SHORT;if(i===Oc)return s.INT;if(i===ti)return s.UNSIGNED_INT;if(i===xn)return s.FLOAT;if(i===gi)return s.HALF_FLOAT;if(i===Nd)return s.ALPHA;if(i===Fd)return s.RGB;if(i===yn)return s.RGBA;if(i===Pi)return s.DEPTH_COMPONENT;if(i===cr)return s.DEPTH_STENCIL;if(i===zc)return s.RED;if(i===bo)return s.RED_INTEGER;if(i===ns)return s.RG;if(i===Gc)return s.RG_INTEGER;if(i===Vc)return s.RGBA_INTEGER;if(i===Ya||i===qa||i===ja||i===Ka)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Zl||i===Jl||i===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$l||i===ec)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===nc)return r.COMPRESSED_R11_EAC;if(i===ic)return r.COMPRESSED_SIGNED_R11_EAC;if(i===rc)return r.COMPRESSED_RG11_EAC;if(i===sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ac||i===oc||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===vc||i===_c||i===xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ac)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_c)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===bc||i===Sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yc)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mc||i===Tc||i===wc||i===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Kd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yn({vertexShader:mw,fragmentShader:gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _w extends Ii{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",m=new vw,g={},y=t.getContextAttributes();let x=null,_=null;const S=[],w=[],A=new fe;let E=null;const b=new Yt;b.viewport=new pt;const M=new Yt;M.viewport=new pt;const L=[b,M],I=new M0;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let k=S[z];return k===void 0&&(k=new Nl,S[z]=k),k.getTargetRaySpace()},this.getControllerGrip=function(z){let k=S[z];return k===void 0&&(k=new Nl,S[z]=k),k.getGripSpace()},this.getHand=function(z){let k=S[z];return k===void 0&&(k=new Nl,S[z]=k),k.getHandSpace()};function V(z){const k=w.indexOf(z.inputSource);if(k===-1)return;const J=S[k];J!==void 0&&(J.update(z.inputSource,z.frame,c||a),J.dispatchEvent({type:z.type,data:z.inputSource}))}function B(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",H);for(let z=0;z<S.length;z++){const k=w[z];k!==null&&(w[z]=null,S[z].disconnect(k))}U=null,F=null,m.reset();for(const z in g)delete g[z];e.setRenderTarget(x),f=null,d=null,h=null,n=null,_=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(x=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",B),n.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ve=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=y.stencil?cr:Pi,ve=y.stencil?Ks:ti);const be={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(be),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Hn(d.textureWidth,d.textureHeight,{format:yn,type:Pn,depthTexture:new ia(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const J={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,J),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Hn(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(z){for(let k=0;k<z.removed.length;k++){const J=z.removed[k],ve=w.indexOf(J);ve>=0&&(w[ve]=null,S[ve].disconnect(J))}for(let k=0;k<z.added.length;k++){const J=z.added[k];let ve=w.indexOf(J);if(ve===-1){for(let be=0;be<S.length;be++)if(be>=w.length){w.push(J),ve=be;break}else if(w[be]===null){w[be]=J,ve=be;break}if(ve===-1)break}const pe=S[ve];pe&&pe.connect(J)}}const Y=new D,q=new D;function X(z,k,J){Y.setFromMatrixPosition(k.matrixWorld),q.setFromMatrixPosition(J.matrixWorld);const ve=Y.distanceTo(q),pe=k.projectionMatrix.elements,be=J.projectionMatrix.elements,ge=pe[14]/(pe[10]-1),De=pe[14]/(pe[10]+1),se=(pe[9]+1)/pe[5],ie=(pe[9]-1)/pe[5],ne=(pe[8]-1)/pe[0],de=(be[8]+1)/be[0],R=ge*ne,Ae=ge*de,he=ve/(-ne+de),ae=he*-ne;if(k.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ae),z.translateZ(he),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),pe[10]===-1)z.projectionMatrix.copy(k.projectionMatrix),z.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const me=ge+he,C=De+he,T=R-ae,O=Ae+(ve-ae),$=se*De/C*me,Q=ie*De/C*me;z.projectionMatrix.makePerspective(T,O,$,Q,me,C),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function N(z,k){k===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(k.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;let k=z.near,J=z.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(J=m.depthFar)),I.near=M.near=b.near=k,I.far=M.far=b.far=J,(U!==I.near||F!==I.far)&&(n.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,F=I.far),I.layers.mask=z.layers.mask|6,b.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const ve=z.parent,pe=I.cameras;N(I,ve);for(let be=0;be<pe.length;be++)N(pe[be],ve);pe.length===2?X(I,b,M):I.projectionMatrix.copy(b.projectionMatrix),W(z,I,ve)};function W(z,k,J){J===null?z.matrix.copy(k.matrixWorld):(z.matrix.copy(J.matrixWorld),z.matrix.invert(),z.matrix.multiply(k.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(k.projectionMatrix),z.projectionMatrixInverse.copy(k.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ea*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(z){return g[z]};let K=null;function re(z,k){if(u=k.getViewerPose(c||a),p=k,u!==null){const J=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ve=!1;J.length!==I.cameras.length&&(I.cameras.length=0,ve=!0);for(let De=0;De<J.length;De++){const se=J[De];let ie=null;if(f!==null)ie=f.getViewport(se);else{const de=h.getViewSubImage(d,se);ie=de.viewport,De===0&&(e.setRenderTargetTextures(_,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(_))}let ne=L[De];ne===void 0&&(ne=new Yt,ne.layers.enable(De),ne.viewport=new pt,L[De]=ne),ne.matrix.fromArray(se.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(se.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ie.x,ie.y,ie.width,ie.height),De===0&&(I.matrix.copy(ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ve===!0&&I.cameras.push(ne)}const pe=n.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const De=h.getDepthInformation(J[0]);De&&De.isValid&&De.texture&&m.init(De,n.renderState)}if(pe&&pe.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let De=0;De<J.length;De++){const se=J[De].camera;if(se){let ie=g[se];ie||(ie=new Kd,g[se]=ie);const ne=h.getCameraImage(se);ie.sourceTexture=ne}}}}for(let J=0;J<S.length;J++){const ve=w[J],pe=S[J];ve!==null&&pe!==void 0&&pe.update(ve,k,c||a)}K&&K(z,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),p=null}const te=new I0;te.setAnimationLoop(re),this.setAnimationLoop=function(z){K=z},this.dispose=function(){}}}const Br=new Xn,xw=new Ye;function yw(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Gg(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,y,x,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===hn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===hn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,Br.copy(_),Br.x*=-1,Br.y*=-1,Br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(Br)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=x*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===hn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function bw(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function c(y,x){let _=n[y.id];_===void 0&&(p(y),_=u(y),n[y.id]=_,y.addEventListener("dispose",m));const S=x.program;i.updateUBOMapping(y,S);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function u(y){const x=h();y.__bindingPointIndex=x;const _=s.createBuffer(),S=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=n[y.id],_=y.uniforms,S=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,A=_.length;w<A;w++){const E=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,M=E.length;b<M;b++){const L=E[b];if(f(L,w,b,S)===!0){const I=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let V=0;V<U.length;V++){const B=U[V],H=v(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,I+F,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,F),F+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,_,S){const w=y.value,A=x+"_"+_;if(S[A]===void 0)return typeof w=="number"||typeof w=="boolean"?S[A]=w:S[A]=w.clone(),!0;{const E=S[A];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return S[A]=w,!0}else if(E.equals(w)===!1)return E.copy(w),!0}return!1}function p(y){const x=y.uniforms;let _=0;const S=16;for(let A=0,E=x.length;A<E;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,L=b.length;M<L;M++){const I=b[M],U=Array.isArray(I.value)?I.value:[I.value];for(let F=0,V=U.length;F<V;F++){const B=U[F],H=v(B),Y=_%S,q=Y%H.boundary,X=Y+q;_+=q,X!==0&&S-X<H.storage&&(_+=S-X),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=H.storage}}}const w=_%S;return w>0&&(_+=S-w),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function g(){for(const y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:g}}const Sw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function Mw(){return Mi===null&&(Mi=new pi(Sw,16,16,ns,gi),Mi.name="DFG_LUT",Mi.minFilter=yt,Mi.magFilter=yt,Mi.wrapS=_n,Mi.wrapT=_n,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class O0{constructor(e={}){const{canvas:t=Bg(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Pn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const v=f,m=new Set([Vc,Gc,bo]),g=new Set([Pn,ti,js,Ks,Bc,kc]),y=new Uint32Array(4),x=new Int32Array(4);let _=null,S=null;const w=[],A=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let M=!1;this._outputColorSpace=Nt;let L=0,I=0,U=null,F=-1,V=null;const B=new pt,H=new pt;let Y=null;const q=new Ie(0);let X=0,N=t.width,W=t.height,K=1,re=null,te=null;const z=new pt(0,0,N,W),k=new pt(0,0,N,W);let J=!1;const ve=new la;let pe=!1,be=!1;const ge=new Ye,De=new D,se=new pt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function de(){return U===null?K:1}let R=i;function Ae(P,Z){return t.getContext(P,Z)}try{const P={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",$e,!1),R===null){const Z="webgl2";if(R=Ae(Z,P),R===null)throw Ae(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw je("WebGLRenderer: "+P.message),P}let he,ae,me,C,T,O,$,Q,j,we,_e,Re,ke,ue,Me,Te,Le,Ee,Qe,G,ye,Se,Be,xe;function ce(){he=new T1(R),he.init(),Se=new F0(R,he),ae=new m1(R,he,e,Se),me=new fw(R,he),ae.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),C=new E1(R),T=new QT,O=new pw(R,he,me,T,ae,Se,C),$=new v1(b),Q=new M1(b),j=new Ib(R),Be=new f1(R,j),we=new w1(R,j,C,Be),_e=new R1(R,we,j,C),Qe=new C1(R,ae,O),Te=new g1(T),Re=new JT(b,$,Q,he,ae,Be,Te),ke=new yw(b,T),ue=new ew,Me=new aw(he),Ee=new d1(b,$,Q,me,_e,p,l),Le=new hw(b,_e,ae),xe=new bw(R,C,ae,me),G=new p1(R,he,C),ye=new A1(R,he,C),C.programs=Re.programs,b.capabilities=ae,b.extensions=he,b.properties=T,b.renderLists=ue,b.shadowMap=Le,b.state=me,b.info=C}ce(),v!==Pn&&(E=new I1(v,t.width,t.height,n,r));const Ce=new _w(b,R);this.xr=Ce,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=he.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=he.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(P){P!==void 0&&(K=P,this.setSize(N,W,!1))},this.getSize=function(P){return P.set(N,W)},this.setSize=function(P,Z,le=!0){if(Ce.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}N=P,W=Z,t.width=Math.floor(P*K),t.height=Math.floor(Z*K),le===!0&&(t.style.width=P+"px",t.style.height=Z+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(N*K,W*K).floor()},this.setDrawingBufferSize=function(P,Z,le){N=P,W=Z,K=le,t.width=Math.floor(P*le),t.height=Math.floor(Z*le),this.setViewport(0,0,P,Z)},this.setEffects=function(P){if(v===Pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Z=0;Z<P.length;Z++)if(P[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(z)},this.setViewport=function(P,Z,le,oe){P.isVector4?z.set(P.x,P.y,P.z,P.w):z.set(P,Z,le,oe),me.viewport(B.copy(z).multiplyScalar(K).round())},this.getScissor=function(P){return P.copy(k)},this.setScissor=function(P,Z,le,oe){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,Z,le,oe),me.scissor(H.copy(k).multiplyScalar(K).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(P){me.setScissorTest(J=P)},this.setOpaqueSort=function(P){re=P},this.setTransparentSort=function(P){te=P},this.getClearColor=function(P){return P.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(P=!0,Z=!0,le=!0){let oe=0;if(P){let ee=!1;if(U!==null){const Ue=U.texture.format;ee=m.has(Ue)}if(ee){const Ue=U.texture.type,ze=g.has(Ue),Fe=Ee.getClearColor(),We=Ee.getClearAlpha(),Xe=Fe.r,tt=Fe.g,Ze=Fe.b;ze?(y[0]=Xe,y[1]=tt,y[2]=Ze,y[3]=We,R.clearBufferuiv(R.COLOR,0,y)):(x[0]=Xe,x[1]=tt,x[2]=Ze,x[3]=We,R.clearBufferiv(R.COLOR,0,x))}else oe|=R.COLOR_BUFFER_BIT}Z&&(oe|=R.DEPTH_BUFFER_BIT),le&&(oe|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),Ee.dispose(),ue.dispose(),Me.dispose(),T.dispose(),$.dispose(),Q.dispose(),_e.dispose(),Be.dispose(),xe.dispose(),Re.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",si),Ce.removeEventListener("sessionend",xi),tn.stop()};function Ge(P){P.preventDefault(),uo("WebGLRenderer: Context Lost."),M=!0}function Ve(){uo("WebGLRenderer: Context Restored."),M=!1;const P=C.autoReset,Z=Le.enabled,le=Le.autoUpdate,oe=Le.needsUpdate,ee=Le.type;ce(),C.autoReset=P,Le.enabled=Z,Le.autoUpdate=le,Le.needsUpdate=oe,Le.type=ee}function $e(P){je("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function wt(P){const Z=P.target;Z.removeEventListener("dispose",wt),At(Z)}function At(P){Ot(P),T.remove(P)}function Ot(P){const Z=T.get(P).programs;Z!==void 0&&(Z.forEach(function(le){Re.releaseProgram(le)}),P.isShaderMaterial&&Re.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,le,oe,ee,Ue){Z===null&&(Z=ie);const ze=ee.isMesh&&ee.matrixWorld.determinant()<0,Fe=Cu(P,Z,le,oe,ee);me.setMaterial(oe,ze);let We=le.index,Xe=1;if(oe.wireframe===!0){if(We=we.getWireframeAttribute(le),We===void 0)return;Xe=2}const tt=le.drawRange,Ze=le.attributes.position;let ot=tt.start*Xe,dt=(tt.start+tt.count)*Xe;Ue!==null&&(ot=Math.max(ot,Ue.start*Xe),dt=Math.min(dt,(Ue.start+Ue.count)*Xe)),We!==null?(ot=Math.max(ot,0),dt=Math.min(dt,We.count)):Ze!=null&&(ot=Math.max(ot,0),dt=Math.min(dt,Ze.count));const Et=dt-ot;if(Et<0||Et===1/0)return;Be.setup(ee,oe,Fe,le,We);let bt,vt=G;if(We!==null&&(bt=j.get(We),vt=ye,vt.setIndex(bt)),ee.isMesh)oe.wireframe===!0?(me.setLineWidth(oe.wireframeLinewidth*de()),vt.setMode(R.LINES)):vt.setMode(R.TRIANGLES);else if(ee.isLine){let Je=oe.linewidth;Je===void 0&&(Je=1),me.setLineWidth(Je*de()),ee.isLineSegments?vt.setMode(R.LINES):ee.isLineLoop?vt.setMode(R.LINE_LOOP):vt.setMode(R.LINE_STRIP)}else ee.isPoints?vt.setMode(R.POINTS):ee.isSprite&&vt.setMode(R.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)$s("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))vt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Je=ee._multiDrawStarts,mt=ee._multiDrawCounts,st=ee._multiDrawCount,pn=We?j.get(We).bytesPerElement:1,ai=T.get(oe).currentProgram.getUniforms();for(let Ht=0;Ht<st;Ht++)ai.setValue(R,"_gl_DrawID",Ht),vt.render(Je[Ht]/pn,mt[Ht])}else if(ee.isInstancedMesh)vt.renderInstances(ot,Et,ee.count);else if(le.isInstancedBufferGeometry){const Je=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,mt=Math.min(le.instanceCount,Je);vt.renderInstances(ot,Et,mt)}else vt.render(ot,Et)};function Mn(P,Z,le){P.transparent===!0&&P.side===kn&&P.forceSinglePass===!1?(P.side=hn,P.needsUpdate=!0,Sr(P,Z,le),P.side=mi,P.needsUpdate=!0,Sr(P,Z,le),P.side=kn):Sr(P,Z,le)}this.compile=function(P,Z,le=null){le===null&&(le=P),S=Me.get(le),S.init(Z),A.push(S),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),P!==le&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),S.setupLights();const oe=new Set;return P.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ue=ee.material;if(Ue)if(Array.isArray(Ue))for(let ze=0;ze<Ue.length;ze++){const Fe=Ue[ze];Mn(Fe,le,ee),oe.add(Fe)}else Mn(Ue,le,ee),oe.add(Ue)}),S=A.pop(),oe},this.compileAsync=function(P,Z,le=null){const oe=this.compile(P,Z,le);return new Promise(ee=>{function Ue(){if(oe.forEach(function(ze){T.get(ze).currentProgram.isReady()&&oe.delete(ze)}),oe.size===0){ee(P);return}setTimeout(Ue,10)}he.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Kn=null;function ri(P){Kn&&Kn(P)}function si(){tn.stop()}function xi(){tn.start()}const tn=new I0;tn.setAnimationLoop(ri),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(P){Kn=P,Ce.setAnimationLoop(P),P===null?tn.stop():tn.start()},Ce.addEventListener("sessionstart",si),Ce.addEventListener("sessionend",xi),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const le=Ce.enabled===!0&&Ce.isPresenting===!0,oe=E!==null&&(U===null||le)&&E.begin(b,U);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(Z),Z=Ce.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,Z,U),S=Me.get(P,A.length),S.init(Z),A.push(S),ge.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ve.setFromProjectionMatrix(ge,Gn,Z.reversedDepth),be=this.localClippingEnabled,pe=Te.init(this.clippingPlanes,be),_=ue.get(P,w.length),_.init(),w.push(_),Ce.enabled===!0&&Ce.isPresenting===!0){const ze=b.xr.getDepthSensingMesh();ze!==null&&Vt(ze,Z,-1/0,b.sortObjects)}Vt(P,Z,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(re,te),ne=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ne&&Ee.addToRenderList(_,P),this.info.render.frame++,pe===!0&&Te.beginShadows();const ee=S.state.shadowsArray;if(Le.render(ee,P,Z),pe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&E.hasRenderPass())===!1){const ze=_.opaque,Fe=_.transmissive;if(S.setupLights(),Z.isArrayCamera){const We=Z.cameras;if(Fe.length>0)for(let Xe=0,tt=We.length;Xe<tt;Xe++){const Ze=We[Xe];da(ze,Fe,P,Ze)}ne&&Ee.render(P);for(let Xe=0,tt=We.length;Xe<tt;Xe++){const Ze=We[Xe];yi(_,P,Ze,Ze.viewport)}}else Fe.length>0&&da(ze,Fe,P,Z),ne&&Ee.render(P),yi(_,P,Z)}U!==null&&I===0&&(O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U)),oe&&E.end(b),P.isScene===!0&&P.onAfterRender(b,P,Z),Be.resetDefaultState(),F=-1,V=null,A.pop(),A.length>0?(S=A[A.length-1],pe===!0&&Te.setGlobalState(b.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function Vt(P,Z,le,oe){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ve.intersectsSprite(P)){oe&&se.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);const ze=_e.update(P),Fe=P.material;Fe.visible&&_.push(P,ze,Fe,le,se.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ve.intersectsObject(P))){const ze=_e.update(P),Fe=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),se.copy(P.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),se.copy(ze.boundingSphere.center)),se.applyMatrix4(P.matrixWorld).applyMatrix4(ge)),Array.isArray(Fe)){const We=ze.groups;for(let Xe=0,tt=We.length;Xe<tt;Xe++){const Ze=We[Xe],ot=Fe[Ze.materialIndex];ot&&ot.visible&&_.push(P,ze,ot,le,se.z,Ze)}}else Fe.visible&&_.push(P,ze,Fe,le,se.z,null)}}const Ue=P.children;for(let ze=0,Fe=Ue.length;ze<Fe;ze++)Vt(Ue[ze],Z,le,oe)}function yi(P,Z,le,oe){const{opaque:ee,transmissive:Ue,transparent:ze}=P;S.setupLightsView(le),pe===!0&&Te.setGlobalState(b.clippingPlanes,le),oe&&me.viewport(B.copy(oe)),ee.length>0&&Yi(ee,Z,le),Ue.length>0&&Yi(Ue,Z,le),ze.length>0&&Yi(ze,Z,le),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function da(P,Z,le,oe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[oe.id]===void 0){const ot=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[oe.id]=new Hn(1,1,{generateMipmaps:!0,type:ot?gi:Pn,minFilter:zn,samples:ae.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Ue=S.state.transmissionRenderTarget[oe.id],ze=oe.viewport||B;Ue.setSize(ze.z*b.transmissionResolutionScale,ze.w*b.transmissionResolutionScale);const Fe=b.getRenderTarget(),We=b.getActiveCubeFace(),Xe=b.getActiveMipmapLevel();b.setRenderTarget(Ue),b.getClearColor(q),X=b.getClearAlpha(),X<1&&b.setClearColor(16777215,.5),b.clear(),ne&&Ee.render(le);const tt=b.toneMapping;b.toneMapping=fi;const Ze=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),S.setupLightsView(oe),pe===!0&&Te.setGlobalState(b.clippingPlanes,oe),Yi(P,le,oe),O.updateMultisampleRenderTarget(Ue),O.updateRenderTargetMipmap(Ue),he.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let dt=0,Et=Z.length;dt<Et;dt++){const bt=Z[dt],{object:vt,geometry:Je,material:mt,group:st}=bt;if(mt.side===kn&&vt.layers.test(oe.layers)){const pn=mt.side;mt.side=hn,mt.needsUpdate=!0,Io(vt,le,oe,Je,mt,st),mt.side=pn,mt.needsUpdate=!0,ot=!0}}ot===!0&&(O.updateMultisampleRenderTarget(Ue),O.updateRenderTargetMipmap(Ue))}b.setRenderTarget(Fe,We,Xe),b.setClearColor(q,X),Ze!==void 0&&(oe.viewport=Ze),b.toneMapping=tt}function Yi(P,Z,le){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let ee=0,Ue=P.length;ee<Ue;ee++){const ze=P[ee],{object:Fe,geometry:We,group:Xe}=ze;let tt=ze.material;tt.allowOverride===!0&&oe!==null&&(tt=oe),Fe.layers.test(le.layers)&&Io(Fe,Z,le,We,tt,Xe)}}function Io(P,Z,le,oe,ee,Ue){P.onBeforeRender(b,Z,le,oe,ee,Ue),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(b,Z,le,oe,P,Ue),ee.transparent===!0&&ee.side===kn&&ee.forceSinglePass===!1?(ee.side=hn,ee.needsUpdate=!0,b.renderBufferDirect(le,Z,oe,ee,P,Ue),ee.side=mi,ee.needsUpdate=!0,b.renderBufferDirect(le,Z,oe,ee,P,Ue),ee.side=kn):b.renderBufferDirect(le,Z,oe,ee,P,Ue),P.onAfterRender(b,Z,le,oe,ee,Ue)}function Sr(P,Z,le){Z.isScene!==!0&&(Z=ie);const oe=T.get(P),ee=S.state.lights,Ue=S.state.shadowsArray,ze=ee.state.version,Fe=Re.getParameters(P,ee.state,Ue,Z,le),We=Re.getProgramCacheKey(Fe);let Xe=oe.programs;oe.environment=P.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(P.isMeshStandardMaterial?Q:$).get(P.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,Xe===void 0&&(P.addEventListener("dispose",wt),Xe=new Map,oe.programs=Xe);let tt=Xe.get(We);if(tt!==void 0){if(oe.currentProgram===tt&&oe.lightsStateVersion===ze)return ps(P,Fe),tt}else Fe.uniforms=Re.getUniforms(P),P.onBeforeCompile(Fe,b),tt=Re.acquireProgram(Fe,We),Xe.set(We,tt),oe.uniforms=Fe.uniforms;const Ze=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=Te.uniform),ps(P,Fe),oe.needsLights=ms(P),oe.lightsStateVersion=ze,oe.needsLights&&(Ze.ambientLightColor.value=ee.state.ambient,Ze.lightProbe.value=ee.state.probe,Ze.directionalLights.value=ee.state.directional,Ze.directionalLightShadows.value=ee.state.directionalShadow,Ze.spotLights.value=ee.state.spot,Ze.spotLightShadows.value=ee.state.spotShadow,Ze.rectAreaLights.value=ee.state.rectArea,Ze.ltc_1.value=ee.state.rectAreaLTC1,Ze.ltc_2.value=ee.state.rectAreaLTC2,Ze.pointLights.value=ee.state.point,Ze.pointLightShadows.value=ee.state.pointShadow,Ze.hemisphereLights.value=ee.state.hemi,Ze.directionalShadowMap.value=ee.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ze.spotShadowMap.value=ee.state.spotShadowMap,Ze.spotLightMatrix.value=ee.state.spotLightMatrix,Ze.spotLightMap.value=ee.state.spotLightMap,Ze.pointShadowMap.value=ee.state.pointShadowMap,Ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),oe.currentProgram=tt,oe.uniformsList=null,tt}function Mr(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Fl.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function ps(P,Z){const le=T.get(P);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function Cu(P,Z,le,oe,ee){Z.isScene!==!0&&(Z=ie),O.resetTextureUnits();const Ue=Z.fog,ze=oe.isMeshStandardMaterial?Z.environment:null,Fe=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:sn,We=(oe.isMeshStandardMaterial?Q:$).get(oe.envMap||ze),Xe=oe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,tt=!!le.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ze=!!le.morphAttributes.position,ot=!!le.morphAttributes.normal,dt=!!le.morphAttributes.color;let Et=fi;oe.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Et=b.toneMapping);const bt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,vt=bt!==void 0?bt.length:0,Je=T.get(oe),mt=S.state.lights;if(pe===!0&&(be===!0||P!==V)){const $t=P===V&&oe.id===F;Te.setState(oe,P,$t)}let st=!1;oe.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==mt.state.version||Je.outputColorSpace!==Fe||ee.isBatchedMesh&&Je.batching===!1||!ee.isBatchedMesh&&Je.batching===!0||ee.isBatchedMesh&&Je.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Je.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Je.instancing===!1||!ee.isInstancedMesh&&Je.instancing===!0||ee.isSkinnedMesh&&Je.skinning===!1||!ee.isSkinnedMesh&&Je.skinning===!0||ee.isInstancedMesh&&Je.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Je.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Je.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Je.instancingMorph===!1&&ee.morphTexture!==null||Je.envMap!==We||oe.fog===!0&&Je.fog!==Ue||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Te.numPlanes||Je.numIntersection!==Te.numIntersection)||Je.vertexAlphas!==Xe||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==ot||Je.morphColors!==dt||Je.toneMapping!==Et||Je.morphTargetsCount!==vt)&&(st=!0):(st=!0,Je.__version=oe.version);let pn=Je.currentProgram;st===!0&&(pn=Sr(oe,Z,ee));let ai=!1,Ht=!1,qi=!1;const _t=pn.getUniforms(),Wt=Je.uniforms;if(me.useProgram(pn.program)&&(ai=!0,Ht=!0,qi=!0),oe.id!==F&&(F=oe.id,Ht=!0),ai||V!==P){me.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),_t.setValue(R,"projectionMatrix",P.projectionMatrix),_t.setValue(R,"viewMatrix",P.matrixWorldInverse);const nn=_t.map.cameraPosition;nn!==void 0&&nn.setValue(R,De.setFromMatrixPosition(P.matrixWorld)),ae.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&_t.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),V!==P&&(V=P,Ht=!0,qi=!0)}if(Je.needsLights&&(mt.state.directionalShadowMap.length>0&&_t.setValue(R,"directionalShadowMap",mt.state.directionalShadowMap,O),mt.state.spotShadowMap.length>0&&_t.setValue(R,"spotShadowMap",mt.state.spotShadowMap,O),mt.state.pointShadowMap.length>0&&_t.setValue(R,"pointShadowMap",mt.state.pointShadowMap,O)),ee.isSkinnedMesh){_t.setOptional(R,ee,"bindMatrix"),_t.setOptional(R,ee,"bindMatrixInverse");const $t=ee.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),_t.setValue(R,"boneTexture",$t.boneTexture,O))}ee.isBatchedMesh&&(_t.setOptional(R,ee,"batchingTexture"),_t.setValue(R,"batchingTexture",ee._matricesTexture,O),_t.setOptional(R,ee,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",ee._indirectTexture,O),_t.setOptional(R,ee,"batchingColorTexture"),ee._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",ee._colorsTexture,O));const on=le.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Qe.update(ee,le,pn),(Ht||Je.receiveShadow!==ee.receiveShadow)&&(Je.receiveShadow=ee.receiveShadow,_t.setValue(R,"receiveShadow",ee.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Wt.envMap.value=We,Wt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(Wt.envMapIntensity.value=Z.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Mw()),Ht&&(_t.setValue(R,"toneMappingExposure",b.toneMappingExposure),Je.needsLights&&Do(Wt,qi),Ue&&oe.fog===!0&&ke.refreshFogUniforms(Wt,Ue),ke.refreshMaterialUniforms(Wt,oe,K,W,S.state.transmissionRenderTarget[P.id]),Fl.upload(R,Mr(Je),Wt,O)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Fl.upload(R,Mr(Je),Wt,O),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&_t.setValue(R,"center",ee.center),_t.setValue(R,"modelViewMatrix",ee.modelViewMatrix),_t.setValue(R,"normalMatrix",ee.normalMatrix),_t.setValue(R,"modelMatrix",ee.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const $t=oe.uniformsGroups;for(let nn=0,Tr=$t.length;nn<Tr;nn++){const Nn=$t[nn];xe.update(Nn,pn),xe.bind(Nn,pn)}}return pn}function Do(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function ms(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,Z,le){const oe=T.get(P);oe.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),T.get(P.texture).__webglTexture=Z,T.get(P.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:le,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Z){const le=T.get(P);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0};const fa=R.createFramebuffer();this.setRenderTarget=function(P,Z=0,le=0){U=P,L=Z,I=le;let oe=null,ee=!1,Ue=!1;if(P){const Fe=T.get(P);if(Fe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(R.FRAMEBUFFER,Fe.__webglFramebuffer),B.copy(P.viewport),H.copy(P.scissor),Y=P.scissorTest,me.viewport(B),me.scissor(H),me.setScissorTest(Y),F=-1;return}else if(Fe.__webglFramebuffer===void 0)O.setupRenderTarget(P);else if(Fe.__hasExternalTextures)O.rebindTextures(P,T.get(P.texture).__webglTexture,T.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const tt=P.depthTexture;if(Fe.__boundDepthTexture!==tt){if(tt!==null&&T.has(tt)&&(P.width!==tt.image.width||P.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(P)}}const We=P.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ue=!0);const Xe=T.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Xe[Z])?oe=Xe[Z][le]:oe=Xe[Z],ee=!0):P.samples>0&&O.useMultisampledRTT(P)===!1?oe=T.get(P).__webglMultisampledFramebuffer:Array.isArray(Xe)?oe=Xe[le]:oe=Xe,B.copy(P.viewport),H.copy(P.scissor),Y=P.scissorTest}else B.copy(z).multiplyScalar(K).floor(),H.copy(k).multiplyScalar(K).floor(),Y=J;if(le!==0&&(oe=fa),me.bindFramebuffer(R.FRAMEBUFFER,oe)&&me.drawBuffers(P,oe),me.viewport(B),me.scissor(H),me.setScissorTest(Y),ee){const Fe=T.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,le)}else if(Ue){const Fe=Z;for(let We=0;We<P.textures.length;We++){const Xe=T.get(P.textures[We]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+We,Xe.__webglTexture,le,Fe)}}else if(P!==null&&le!==0){const Fe=T.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Fe.__webglTexture,le)}F=-1},this.readRenderTargetPixels=function(P,Z,le,oe,ee,Ue,ze,Fe=0){if(!(P&&P.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=T.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We){me.bindFramebuffer(R.FRAMEBUFFER,We);try{const Xe=P.textures[Fe],tt=Xe.format,Ze=Xe.type;if(!ae.textureFormatReadable(tt)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ze)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-oe&&le>=0&&le<=P.height-ee&&(P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe),R.readPixels(Z,le,oe,ee,Se.convert(tt),Se.convert(Ze),Ue))}finally{const Xe=U!==null?T.get(U).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(P,Z,le,oe,ee,Ue,ze,Fe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=T.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We)if(Z>=0&&Z<=P.width-oe&&le>=0&&le<=P.height-ee){me.bindFramebuffer(R.FRAMEBUFFER,We);const Xe=P.textures[Fe],tt=Xe.format,Ze=Xe.type;if(!ae.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ot),R.bufferData(R.PIXEL_PACK_BUFFER,Ue.byteLength,R.STREAM_READ),P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe),R.readPixels(Z,le,oe,ee,Se.convert(tt),Se.convert(Ze),0);const dt=U!==null?T.get(U).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,dt);const Et=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await F_(R,Et,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ot),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ue),R.deleteBuffer(ot),R.deleteSync(Et),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Z=null,le=0){const oe=Math.pow(2,-le),ee=Math.floor(P.image.width*oe),Ue=Math.floor(P.image.height*oe),ze=Z!==null?Z.x:0,Fe=Z!==null?Z.y:0;O.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,le,0,0,ze,Fe,ee,Ue),me.unbindTexture()};const pa=R.createFramebuffer(),Ke=R.createFramebuffer();this.copyTextureToTexture=function(P,Z,le=null,oe=null,ee=0,Ue=null){Ue===null&&(ee!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=ee,ee=0):Ue=0);let ze,Fe,We,Xe,tt,Ze,ot,dt,Et;const bt=P.isCompressedTexture?P.mipmaps[Ue]:P.image;if(le!==null)ze=le.max.x-le.min.x,Fe=le.max.y-le.min.y,We=le.isBox3?le.max.z-le.min.z:1,Xe=le.min.x,tt=le.min.y,Ze=le.isBox3?le.min.z:0;else{const on=Math.pow(2,-ee);ze=Math.floor(bt.width*on),Fe=Math.floor(bt.height*on),P.isDataArrayTexture?We=bt.depth:P.isData3DTexture?We=Math.floor(bt.depth*on):We=1,Xe=0,tt=0,Ze=0}oe!==null?(ot=oe.x,dt=oe.y,Et=oe.z):(ot=0,dt=0,Et=0);const vt=Se.convert(Z.format),Je=Se.convert(Z.type);let mt;Z.isData3DTexture?(O.setTexture3D(Z,0),mt=R.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(O.setTexture2DArray(Z,0),mt=R.TEXTURE_2D_ARRAY):(O.setTexture2D(Z,0),mt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,Z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,Z.unpackAlignment);const st=R.getParameter(R.UNPACK_ROW_LENGTH),pn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ai=R.getParameter(R.UNPACK_SKIP_PIXELS),Ht=R.getParameter(R.UNPACK_SKIP_ROWS),qi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,bt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,bt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Xe),R.pixelStorei(R.UNPACK_SKIP_ROWS,tt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ze);const _t=P.isDataArrayTexture||P.isData3DTexture,Wt=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isDepthTexture){const on=T.get(P),$t=T.get(Z),nn=T.get(on.__renderTarget),Tr=T.get($t.__renderTarget);me.bindFramebuffer(R.READ_FRAMEBUFFER,nn.__webglFramebuffer),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Nn=0;Nn<We;Nn++)_t&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,T.get(P).__webglTexture,ee,Ze+Nn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,T.get(Z).__webglTexture,Ue,Et+Nn)),R.blitFramebuffer(Xe,tt,ze,Fe,ot,dt,ze,Fe,R.DEPTH_BUFFER_BIT,R.NEAREST);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(ee!==0||P.isRenderTargetTexture||T.has(P)){const on=T.get(P),$t=T.get(Z);me.bindFramebuffer(R.READ_FRAMEBUFFER,pa),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ke);for(let nn=0;nn<We;nn++)_t?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,on.__webglTexture,ee,Ze+nn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,on.__webglTexture,ee),Wt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$t.__webglTexture,Ue,Et+nn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$t.__webglTexture,Ue),ee!==0?R.blitFramebuffer(Xe,tt,ze,Fe,ot,dt,ze,Fe,R.COLOR_BUFFER_BIT,R.NEAREST):Wt?R.copyTexSubImage3D(mt,Ue,ot,dt,Et+nn,Xe,tt,ze,Fe):R.copyTexSubImage2D(mt,Ue,ot,dt,Xe,tt,ze,Fe);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Wt?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(mt,Ue,ot,dt,Et,ze,Fe,We,vt,Je,bt.data):Z.isCompressedArrayTexture?R.compressedTexSubImage3D(mt,Ue,ot,dt,Et,ze,Fe,We,vt,bt.data):R.texSubImage3D(mt,Ue,ot,dt,Et,ze,Fe,We,vt,Je,bt):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Ue,ot,dt,ze,Fe,vt,Je,bt.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Ue,ot,dt,bt.width,bt.height,vt,bt.data):R.texSubImage2D(R.TEXTURE_2D,Ue,ot,dt,ze,Fe,vt,Je,bt);R.pixelStorei(R.UNPACK_ROW_LENGTH,st),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ai),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qi),Ue===0&&Z.generateMipmaps&&R.generateMipmap(mt),me.unbindTexture()},this.initRenderTarget=function(P){T.get(P).__webglFramebuffer===void 0&&O.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?O.setTextureCube(P,0):P.isData3DTexture?O.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?O.setTexture2DArray(P,0):O.setTexture2D(P,0),me.unbindTexture()},this.resetState=function(){L=0,I=0,U=null,me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Tw=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Cd,AddEquation:or,AddOperation:bg,AdditiveAnimationBlendMode:Od,AdditiveBlending:qh,AgXToneMapping:io,AlphaFormat:Nd,AlwaysCompare:Ng,AlwaysDepth:Hl,AlwaysStencilFunc:Jh,AmbientLight:_0,AnimationAction:E0,AnimationClip:sa,AnimationLoader:wy,AnimationMixer:Qy,AnimationObjectGroup:Zy,AnimationUtils:by,ArcCurve:Kg,ArrayCamera:M0,ArrowHelper:Mb,AttachedBindMode:Zh,Audio:w0,AudioAnalyser:zy,AudioContext:pf,AudioListener:Oy,AudioLoader:Uy,AxesHelper:Tb,BackSide:hn,BasicDepthPacking:Eg,BasicShadowMap:Jv,BatchedMesh:Xg,Bone:$c,BooleanKeyframeTrack:cs,Box2:lb,Box3:Lt,Box3Helper:bb,BoxGeometry:xr,BoxHelper:yb,BufferAttribute:gt,BufferGeometry:it,BufferGeometryLoader:b0,ByteType:Id,Cache:Ei,Camera:Kc,CameraHelper:xb,CanvasTexture:Wx,CapsuleGeometry:ru,CatmullRomCurve3:Zg,CineonToneMapping:Ed,CircleGeometry:su,ClampToEdgeWrapping:_n,Clock:T0,Color:Ie,ColorKeyframeTrack:af,ColorManagement:lt,CompressedArrayTexture:Vx,CompressedCubeTexture:Hx,CompressedTexture:iu,CompressedTextureLoader:Ay,ConeGeometry:Ao,ConstantAlphaFactor:_g,ConstantColorFactor:gg,Controls:P0,CubeCamera:Hd,CubeDepthTexture:qg,CubeReflectionMapping:Ri,CubeRefractionMapping:fr,CubeTexture:Mo,CubeTextureLoader:Ey,CubeUVReflectionMapping:aa,CubicBezierCurve:Jd,CubicBezierCurve3:Jg,CubicInterpolant:f0,CullFaceBack:Yh,CullFaceFront:tg,CullFaceFrontBack:Zv,CullFaceNone:eg,Curve:_i,CurvePath:$g,CustomBlending:ng,CustomToneMapping:Rd,CylinderGeometry:wo,Cylindrical:ob,Data3DTexture:qc,DataArrayTexture:Yc,DataTexture:pi,DataTextureLoader:Cy,DataUtils:fx,DecrementStencilOp:h_,DecrementWrapStencilOp:f_,DefaultLoadingManager:hs,DepthFormat:Pi,DepthStencilFormat:cr,DepthTexture:ia,DetachedBindMode:Sg,DirectionalLight:hf,DirectionalLightHelper:_b,DiscreteInterpolant:p0,DodecahedronGeometry:au,DoubleSide:kn,DstAlphaFactor:hg,DstColorFactor:fg,DynamicCopyUsage:E_,DynamicDrawUsage:Qh,DynamicReadUsage:T_,EdgesGeometry:jg,EllipseCurve:ou,EqualCompare:Dg,EqualDepth:Xl,EqualStencilFunc:v_,EquirectangularReflectionMapping:ro,EquirectangularRefractionMapping:so,Euler:Xn,EventDispatcher:Ii,ExternalTexture:Kd,ExtrudeGeometry:lu,FileLoader:qn,Float16BufferAttribute:yx,Float32BufferAttribute:He,FloatType:xn,Fog:Qc,FogExp2:Jc,FramebufferTexture:Gx,FrontSide:mi,Frustum:la,FrustumArray:tu,GLBufferAttribute:ib,GLSL1:R_,GLSL3:$h,GreaterCompare:Lg,GreaterDepth:ql,GreaterEqualCompare:Xc,GreaterEqualDepth:Yl,GreaterEqualStencilFunc:b_,GreaterStencilFunc:x_,GridHelper:gb,Group:Ai,HalfFloatType:gi,HemisphereLight:v0,HemisphereLightHelper:mb,IcosahedronGeometry:cu,ImageBitmapLoader:S0,ImageLoader:mo,ImageUtils:kg,IncrementStencilOp:u_,IncrementWrapStencilOp:d_,InstancedBufferAttribute:gr,InstancedBufferGeometry:ff,InstancedInterleavedBuffer:nb,InstancedMesh:eu,Int16BufferAttribute:_x,Int32BufferAttribute:xx,Int8BufferAttribute:mx,IntType:Oc,InterleavedBuffer:oa,InterleavedBufferAttribute:Vi,Interpolant:ca,InterpolateDiscrete:Zs,InterpolateLinear:Js,InterpolateSmooth:Ul,InterpolationSamplingMode:D_,InterpolationSamplingType:I_,InvertStencilOp:p_,KeepStencilOp:Vr,KeyframeTrack:ii,LOD:Wg,LatheGeometry:uu,Layers:jc,LessCompare:Ig,LessDepth:Wl,LessEqualCompare:Wc,LessEqualDepth:ts,LessEqualStencilFunc:__,LessStencilFunc:g_,Light:br,LightProbe:y0,Line:Hi,Line3:C0,LineBasicMaterial:dn,LineCurve:Qd,LineCurve3:Qg,LineDashedMaterial:h0,LineLoop:qd,LineSegments:vi,LinearFilter:yt,LinearInterpolant:sf,LinearMipMapLinearFilter:t_,LinearMipMapNearestFilter:e_,LinearMipmapLinearFilter:zn,LinearMipmapNearestFilter:Hs,LinearSRGBColorSpace:sn,LinearToneMapping:wd,LinearTransfer:oo,Loader:fn,LoaderUtils:dr,LoadingManager:of,LoopOnce:Mg,LoopPingPong:wg,LoopRepeat:Tg,MOUSE:Kr,Material:Zt,MaterialLoader:xu,MathUtils:ta,Matrix2:_f,Matrix3:rt,Matrix4:Ye,MaxEquation:ag,Mesh:Tt,MeshBasicMaterial:bn,MeshDepthMaterial:vu,MeshDistanceMaterial:_u,MeshLambertMaterial:c0,MeshMatcapMaterial:u0,MeshNormalMaterial:l0,MeshPhongMaterial:a0,MeshPhysicalMaterial:ni,MeshStandardMaterial:Ro,MeshToonMaterial:o0,MinEquation:sg,MirroredRepeatWrapping:qs,MixOperation:yg,MultiplyBlending:Kh,MultiplyOperation:yo,NearestFilter:Dt,NearestMipMapLinearFilter:$v,NearestMipMapNearestFilter:Qv,NearestMipmapLinearFilter:Xr,NearestMipmapNearestFilter:Fc,NeutralToneMapping:Pd,NeverCompare:Pg,NeverDepth:Vl,NeverStencilFunc:m_,NoBlending:Ci,NoColorSpace:ki,NoNormalPacking:s_,NoToneMapping:fi,NormalAnimationBlendMode:Hc,NormalBlending:Zr,NormalGAPacking:o_,NormalRGPacking:a_,NotEqualCompare:Ug,NotEqualDepth:jl,NotEqualStencilFunc:y_,NumberKeyframeTrack:rs,Object3D:ht,ObjectLoader:Dy,ObjectSpaceNormalMap:Rg,OctahedronGeometry:Eo,OneFactor:lg,OneMinusConstantAlphaFactor:xg,OneMinusConstantColorFactor:vg,OneMinusDstAlphaFactor:dg,OneMinusDstColorFactor:pg,OneMinusSrcAlphaFactor:Gl,OneMinusSrcColorFactor:ug,OrthographicCamera:ds,PCFShadowMap:Wa,PCFSoftShadowMap:Xa,PMREMGenerator:od,Path:Ic,PerspectiveCamera:Yt,Plane:wi,PlaneGeometry:Xi,PlaneHelper:Sb,PointLight:uf,PointLightHelper:fb,Points:jd,PointsMaterial:nu,PolarGridHelper:vb,PolyhedronGeometry:yr,PositionalAudio:ky,PropertyBinding:ft,PropertyMixer:A0,QuadraticBezierCurve:$d,QuadraticBezierCurve3:ef,Quaternion:Kt,QuaternionKeyframeTrack:ss,QuaternionLinearInterpolant:m0,R11_EAC_Format:nc,RED_GREEN_RGTC2_Format:wc,RED_RGTC1_Format:Mc,REVISION:Uc,RG11_EAC_Format:rc,RGBADepthPacking:Cg,RGBAFormat:yn,RGBAIntegerFormat:Vc,RGBA_ASTC_10x10_Format:vc,RGBA_ASTC_10x5_Format:pc,RGBA_ASTC_10x6_Format:mc,RGBA_ASTC_10x8_Format:gc,RGBA_ASTC_12x10_Format:_c,RGBA_ASTC_12x12_Format:xc,RGBA_ASTC_4x4_Format:ac,RGBA_ASTC_5x4_Format:oc,RGBA_ASTC_5x5_Format:lc,RGBA_ASTC_6x5_Format:cc,RGBA_ASTC_6x6_Format:uc,RGBA_ASTC_8x5_Format:hc,RGBA_ASTC_8x6_Format:dc,RGBA_ASTC_8x8_Format:fc,RGBA_BPTC_Format:yc,RGBA_ETC2_EAC_Format:tc,RGBA_PVRTC_2BPPV1_Format:Ql,RGBA_PVRTC_4BPPV1_Format:Jl,RGBA_S3TC_DXT1_Format:qa,RGBA_S3TC_DXT3_Format:ja,RGBA_S3TC_DXT5_Format:Ka,RGBDepthPacking:i_,RGBFormat:Fd,RGBIntegerFormat:n_,RGB_BPTC_SIGNED_Format:bc,RGB_BPTC_UNSIGNED_Format:Sc,RGB_ETC1_Format:$l,RGB_ETC2_Format:ec,RGB_PVRTC_2BPPV1_Format:Zl,RGB_PVRTC_4BPPV1_Format:Kl,RGB_S3TC_DXT1_Format:Ya,RGDepthPacking:r_,RGFormat:ns,RGIntegerFormat:Gc,RawShaderMaterial:nf,Ray:Wi,Raycaster:rb,RectAreaLight:x0,RedFormat:zc,RedIntegerFormat:bo,ReinhardToneMapping:Ad,RenderTarget:zd,RenderTarget3D:$y,RepeatWrapping:pr,ReplaceStencilOp:c_,ReverseSubtractEquation:rg,RingGeometry:hu,SIGNED_R11_EAC_Format:ic,SIGNED_RED_GREEN_RGTC2_Format:Ac,SIGNED_RED_RGTC1_Format:Tc,SIGNED_RG11_EAC_Format:sc,SRGBColorSpace:Nt,SRGBTransfer:xt,Scene:Wd,ShaderChunk:et,ShaderLib:Qn,ShaderMaterial:Yn,ShadowMaterial:s0,Shape:Qr,ShapeGeometry:du,ShapePath:wb,ShapeUtils:di,ShortType:Dd,Skeleton:To,SkeletonHelper:db,SkinnedMesh:Yd,Source:ur,Sphere:Ft,SphereGeometry:Co,Spherical:sd,SphericalHarmonics3:df,SplineCurve:tf,SpotLight:cf,SpotLightHelper:hb,Sprite:Hg,SpriteMaterial:Xd,SrcAlphaFactor:zl,SrcAlphaSaturateFactor:mg,SrcColorFactor:cg,StaticCopyUsage:A_,StaticDrawUsage:lo,StaticReadUsage:M_,StereoCamera:Ny,StreamCopyUsage:C_,StreamDrawUsage:S_,StreamReadUsage:w_,StringKeyframeTrack:us,SubtractEquation:ig,SubtractiveBlending:jh,TOUCH:Wr,TangentSpaceNormalMap:_r,TetrahedronGeometry:fu,Texture:Rt,TextureLoader:g0,TextureUtils:Pb,Timer:sb,TimestampQuery:P_,TorusGeometry:pu,TorusKnotGeometry:mu,Triangle:In,TriangleFanDrawMode:Ec,TriangleStripDrawMode:Bd,TrianglesDrawMode:Ag,TubeGeometry:gu,UVMapping:Nc,Uint16BufferAttribute:Gd,Uint32BufferAttribute:Vd,Uint8BufferAttribute:gx,Uint8ClampedBufferAttribute:vx,Uniform:vf,UniformsGroup:tb,UniformsLib:Ne,UniformsUtils:So,UnsignedByteType:Pn,UnsignedInt101111Type:Ud,UnsignedInt248Type:Ks,UnsignedInt5999Type:Ld,UnsignedIntType:ti,UnsignedShort4444Type:Bc,UnsignedShort5551Type:kc,UnsignedShortType:js,VSMShadowMap:zs,Vector2:fe,Vector3:D,Vector4:pt,VectorKeyframeTrack:as,VideoFrameTexture:zx,VideoTexture:Yg,WebGL3DRenderTarget:ix,WebGLArrayRenderTarget:nx,WebGLCoordinateSystem:Gn,WebGLCubeRenderTarget:Zc,WebGLRenderTarget:Hn,WebGLRenderer:O0,WebGLUtils:F0,WebGPUCoordinateSystem:Qs,WebXRController:Nl,WireframeGeometry:r0,WrapAroundEnding:ao,ZeroCurvatureEnding:Yr,ZeroFactor:og,ZeroSlopeEnding:qr,ZeroStencilOp:l_,createCanvasElement:Bg,error:je,getConsoleFunction:N_,log:uo,setConsoleFunction:U_,warn:Oe,warnOnce:$s},Symbol.toStringTag,{value:"Module"})),bm=Symbol(),ww=s=>typeof s?.subscribe=="function",B0=(s,e,t)=>{const i=s().map(a=>ww(a)?kl(a):bm),n=jt(()=>s().map((a,o)=>i[o]===bm?a:i[o].current)),r=()=>{Pe(n);let a;return Qm(()=>{a=e(Pe(n))}),a};t?ut(r):no(r)},Aw=(s,e)=>B0(s,e,!1),Ew=(s,e)=>B0(s,e,!0),k0=Object.assign(Aw,{pre:Ew}),$n=(s,e)=>s?.[`is${e}`]===!0,Ch=s=>{const e=es(void 0),t=es(void 0);return s.then(i=>{e.set(i)}).catch(i=>{console.error("Error in asyncWritable:",i.message),t.set(i)}),Object.assign(Object.assign(s,e),{error:t,promise:s})},Cw=typeof window<"u",Bi=(s,e)=>{const t=Lc(s,r=>r);let i;const n=t.subscribe(async r=>{i&&i();const a=await e(r);a&&(i=a)});vr(()=>{n(),i&&i()})},zt=s=>{const e=es(s),t={set:i=>{t.current=i,e.set(i)},subscribe:e.subscribe,update:i=>{const n=i(t.current);t.current=n,e.set(n)},current:s};return t},Rw=s=>({subscribe:s.subscribe,get current(){return s.current}}),z0=(s,e)=>{if(e.includes(".")){const t=e.split("."),i=t.pop();for(let n=0;n<t.length;n+=1)s=s[t[n]];return{target:s,key:i}}else return{target:s,key:e}},Pw=s=>{const{dom:e,canvas:t}=s,i=zt({width:e.offsetWidth,height:e.offsetHeight});Gv(()=>{const r=new ResizeObserver(()=>{const{offsetWidth:a,offsetHeight:o}=e;(i.current.width!==a||i.current.height!==o)&&i.set({width:a,height:o})});return r.observe(e),()=>{r.disconnect()}});const n={dom:e,canvas:t,size:Rw(i)};return Dn("threlte-dom-context",n),n},xf=()=>{const s=an("threlte-dom-context");if(!s)throw new Error("useDOM can only be used in a child component to <Canvas>.");return s};function Iw(s){return{all:s=s||new Map,on:function(e,t){var i=s.get(e);i?i.push(t):s.set(e,[t])},off:function(e,t){var i=s.get(e);i&&(t?i.splice(i.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var i=s.get(e);i&&i.slice().map(function(n){n(t)}),(i=s.get("*"))&&i.slice().map(function(n){n(e,t)})}}}class ar{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=Iw();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,i){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let n=this.allVertices[e];n?n.value===void 0&&(n.value=t):(n={value:t,previous:new Set,next:new Set},this.allVertices[e]=n);const r=n.next.size>0||n.previous.size>0;if(!i?.after&&!i?.before&&!r){this.isolatedVertices[e]=n,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=n;if(i?.after){const a=Array.isArray(i.after)?i.after:[i.after];a.forEach(o=>{n.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(i?.before){const a=Array.isArray(i.before)?i.before:[i.before];a.forEach(o=>{n.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const n=this.connectedVertices[t];n&&(n.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),n.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((i,n)=>{t.push(e(i,n))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(i=>{const n=this.isolatedVertices[i];n.value!==void 0&&e(n.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],i=[],n=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(n.forEach(a=>{e.set(a,0)}),n.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,o)=>{a===0&&t.push(o)});t.length>0;){const a=t.shift();i.push(a);const o=n.find(l=>l===a);o&&this.connectedVertices[o]?.next.forEach(l=>{const c=(e.get(l)||0)-1;e.set(l,c),c===0&&t.push(l)})}if(i.length!==n.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=a=>a!==void 0;this.sortedConnectedValues=i.map(a=>this.connectedVertices[a].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class Dw{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,i){this.stage=e,this.key=t,this.callback=i}run(e){this.runTask&&this.callback(e)}}class Lw extends ar{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,i){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),i&&(this.callback=i.bind(this))}createTask(e,t,i){const n=new Dw(this,e,t);return this.add(e,n,i),n}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(i=>{i.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,i=>{this.forEachNode(n=>{const r=performance.now();n.run(i??e);const a=performance.now()-r;t[n.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class Uw extends ar{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const i=new Lw(this,e,t?.callback);return this.add(e,i,{after:t?.after,before:t?.before}),i}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(i=>{i.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,i={},n=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-a;i[r.key.toString()]={duration:l,tasks:o}}),{total:performance.now()-n,stages:i}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const Nw=s=>{const e=new Uw,t=e.createStage(Symbol("threlte-main-stage")),i={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{i.shouldAdvance=!0},autoRender:zt(s.autoRender??!0),renderMode:zt(s.renderMode??"on-demand"),invalidate(){i.frameInvalidated=!0},mainStage:t,shouldRender:()=>i.renderMode.current==="always"||i.renderMode.current==="on-demand"&&(i.frameInvalidated||i.autoInvalidations.size>0)||i.renderMode.current==="manual"&&i.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(n,r){i.shouldRender()&&r()}}),resetFrameInvalidation(){i.frameInvalidated=!1,i.shouldAdvance=!1}};return no(()=>{i.autoRender.set(s.autoRender??!0)}),no(()=>{i.renderMode.set(s.renderMode??"on-demand")}),vr(()=>{i.scheduler.dispose()}),Dn("threlte-scheduler-context",i),i},Su=()=>{const s=an("threlte-scheduler-context");if(!s)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return s},Fw=()=>{const{size:s}=xf(),{invalidate:e}=Su(),t=new Yt(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const i=zt(t);Bi(s,r=>{if(i.current===t){const a=i.current;a.aspect=r.width/r.height,a.updateProjectionMatrix(),e()}}),Bi(i,r=>{r===void 0&&i.set(t)});const n={camera:i};return Dn("threlte-camera-context",n),n},G0=()=>{const s=an("threlte-camera-context");if(!s)throw new Error("useCamera can only be used in a child component to <Canvas>.");return s},Ow=()=>{const s={removeObjectFromDisposal:e=>{s.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=s.disposableObjects.get(e);t?s.disposableObjects.set(e,t+1):s.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=s.disposableObjects.get(e);t&&t>0&&(s.disposableObjects.set(e,t-1),t-1<=0&&(s.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await $m(),!(!s.shouldDispose&&!e)&&(s.disposableObjects.forEach((t,i)=>{(t===0||e)&&(i?.dispose?.(),s.disposableObjects.delete(i))}),s.shouldDispose=!1)}};return vr(()=>{s.dispose(!0)}),Dn("threlte-disposal-context",s),s},V0=()=>{const s=an("threlte-disposal-context");if(!s)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return s},H0=Symbol("threlte-parent-context"),W0=s=>{const e=zt(s);return Dn(H0,e),e},X0=()=>an(H0),Dc=Symbol("threlte-parent-object3d-context"),Bw=s=>{const e=Td(s);return Dn(Dc,e),e},kw=s=>{const e=an(Dc),t=es(s),i=Lc([t,e],([n,r])=>n??r);return Dn(Dc,i),t},zw=()=>an(Dc);function Po(s,e,t){if(!Cw)return{task:void 0,start:()=>{},stop:()=>{},started:Td(!1)};let i,n,r;ar.isKey(s)?(i=s,n=e,r=t):(i=Symbol("useTask"),n=s,r=e);const a=Su();let o=a.mainStage;if(r){if(r.stage)if(ar.isValue(r.stage))o=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);o=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const f=r.after[d];if(ar.isValue(f)){o=f.stage;break}}else ar.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const f=r.before[d];if(ar.isValue(f)){o=f.stage;break}}else ar.isValue(r.before)&&(o=r.before.stage)}const l=es(!1),c=o.createTask(i,n,r),u=()=>{l.set(!0),(r?.autoInvalidate??!0)&&a.autoInvalidations.add(n),c.start()},h=()=>{l.set(!1),(r?.autoInvalidate??!0)&&a.autoInvalidations.delete(n),c.stop()};return r?.autoStart??!0?u():h(),vr(()=>{h(),o.removeTask(i)}),{task:c,start:u,stop:h,started:{subscribe:l.subscribe}}}const Gw=s=>{const e={scene:new Wd};return Dn("threlte-scene-context",e),e},Y0=()=>{const s=an("threlte-scene-context");if(!s)throw new Error("useScene can only be used in a child component to <Canvas>.");return s},Vw=s=>{const{dispose:e}=V0(),{camera:t}=G0(),{scene:i}=Y0(),{invalidate:n,renderStage:r,autoRender:a,scheduler:o,resetFrameInvalidation:l}=Su(),{size:c,canvas:u}=xf(),h=s.createRenderer?s.createRenderer(u):new O0({canvas:u,powerPreference:"high-performance",antialias:!0,alpha:!0}),d=r.createTask(Symbol("threlte-auto-render-task"),()=>{h.render(i,t.current)}),f={renderer:h,colorManagementEnabled:zt(s.colorManagementEnabled??!0),colorSpace:zt(s.colorSpace??"srgb"),dpr:zt(s.dpr??window.devicePixelRatio),shadows:zt(s.shadows??Xa),toneMapping:zt(s.toneMapping??io),autoRenderTask:d};Dn("threlte-renderer-context",f),Bi([f.colorManagementEnabled],([m])=>{lt.enabled=m}),Bi([f.colorSpace],([m])=>{"outputColorSpace"in h&&(h.outputColorSpace=m)}),Bi([f.dpr],([m])=>{"setPixelRatio"in h&&h.setPixelRatio(m)});const{start:p,stop:v}=Po(()=>{!("xr"in h)||h.xr?.isPresenting||(h.setSize(c.current.width,c.current.height),n(),v())},{before:d,autoStart:!1,autoInvalidate:!1});return Bi([c],()=>{p()}),Bi([f.shadows],([m])=>{"shadowMap"in h&&(h.shadowMap.enabled=!!m,m&&m!==!0?h.shadowMap.type=m:m===!0&&(h.shadowMap.type=Xa))}),Bi([f.toneMapping],([m])=>{"toneMapping"in h&&(h.toneMapping=m)}),Bi([a],([m])=>(m?f.autoRenderTask.start():f.autoRenderTask.stop(),()=>{f.autoRenderTask.stop()})),"setAnimationLoop"in f.renderer&&f.renderer.setAnimationLoop(g=>{e(),o.run(g),l()}),vr(()=>{if("dispose"in f.renderer){const m=f.renderer.dispose;m()}}),ut(()=>{f.colorManagementEnabled.set(s.colorManagementEnabled??!0)}),ut(()=>{f.colorSpace.set(s.colorSpace??"srgb")}),ut(()=>{f.toneMapping.set(s.toneMapping??io)}),ut(()=>{f.shadows.set(s.shadows??Xa)}),ut(()=>{f.dpr.set(s.dpr??window.devicePixelRatio)}),f},Hw=()=>{const s=an("threlte-renderer-context");if(!s)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return s},Ww=()=>{const s=zt({});return Dn("threlte-user-context",s),s},Xw=()=>{const s=an("threlte-user-context");if(!s)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return s},Yw=s=>{const{scene:e}=Gw();return{scene:e,...Pw(s),...jv(),...W0(e),...Bw(e),...Ow(),...Nw(s),...Fw(),...Vw(s),...Ww()}};function qw(s,e){Ln(e,!0);let t=jn(e,["$$slots","$$events","$$legacy","children"]);Yw(t);var i=Gt(),n=Ct(i);Sn(n,()=>e.children),Mt(s,i),Un()}var jw=ls('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function Kw(s,e){let t=jn(e,["$$slots","$$events","$$legacy","children"]),i=Wh(void 0),n=Wh(void 0);var r=jw(),a=Gh(r),o=Gh(a);{var l=c=>{qw(c,ei({get dom(){return Pe(n)},get canvas(){return Pe(i)}},()=>t,{children:(u,h)=>{var d=Gt(),f=Ct(d);Sn(f,()=>e.children??Wn),Mt(u,d)},$$slots:{default:!0}}))};xo(o,c=>{Pe(i)&&Pe(n)&&c(l)})}Vh(a),Wf(a,c=>Hh(i,c),()=>Pe(i)),Vh(r),Wf(r,c=>Hh(n,c),()=>Pe(n)),Mt(s,r)}const fs=()=>{const s=Su(),e=Hw(),t=G0(),i=Y0(),n=xf();return{advance:s.advance,autoRender:s.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:s.invalidate,mainStage:s.mainStage,renderer:e.renderer,renderMode:s.renderMode,renderStage:s.renderStage,scheduler:s.scheduler,shadows:e.shadows,shouldRender:s.shouldRender,dom:n.dom,canvas:n.canvas,size:n.size,toneMapping:e.toneMapping,get scene(){return i.scene},set scene(a){i.scene=a}}},Zw=s=>typeof s=="object"&&s!==null,Jw=(s,e)=>{const{invalidate:t}=fs(),i=jt(s),n=jt(e),r=kl(X0()),a=kl(zw()),o=W0(),l=kw();ut(()=>{o.set(Pe(i)),$n(Pe(i),"Object3D")&&l.set(Pe(i)),t()}),ut(()=>{t();const c=Pe(i);if(Pe(n)===void 0&&$n(c,"Object3D"))return a.current?.add(c),()=>{t(),a.current?.remove(c)};if(Pe(n)===void 0&&Zw(r.current)){const u=r.current;if($n(c,"Material")){const h=u.material;return u.material=c,()=>{t(),u.material=h}}else if($n(c,"BufferGeometry")){const h=u.geometry;return u.geometry=c,()=>{t(),u.geometry=h}}}if(Pe(n)===!1)return()=>{t()};if(typeof Pe(n)=="function"){const u=Pe(n)({ref:c,parent:r.current,parentObject3D:a.current});return()=>{t(),u?.()}}if(typeof Pe(n)=="string"){const{target:u,key:h}=z0(r.current,Pe(n));if(h in u){const d=u[h];return u[h]=c,()=>{t(),u[h]=d}}else return u[h]=c,()=>{t(),delete u[h]}}if($n(Pe(n),"Object3D")&&$n(c,"Object3D"))return Pe(n).add(c),()=>{t(),Pe(n).remove(c)}})},Rh=new Set,Qw=(s,e,t)=>{const{invalidate:i,size:n,camera:r}=fs(),a=jt(s),o=kl(n);ut(()=>{if(!t())return;const l=Pe(a);return Rh.add(l),r.set(l),i(),()=>{Rh.delete(l),Rh.size===0&&(r.set(void 0),i())}}),ut(()=>{if(e())return;const{width:l,height:c}=o.current;$n(Pe(a),"PerspectiveCamera")?Pe(a).aspect=l/c:$n(Pe(a),"OrthographicCamera")&&(Pe(a).left=l/-2,Pe(a).right=l/2,Pe(a).top=c/2,Pe(a).bottom=c/-2),Pe(a).updateProjectionMatrix(),Pe(a).updateMatrixWorld(),i()})},ud=Symbol("threlte-disposable-object-context"),$w=s=>typeof s?.dispose=="function",eA=s=>{const e=an(ud),t=jt(()=>s()??e?.()??!0);Dn(ud,()=>Pe(t))},tA=s=>{const e=jt(s),{disposableObjectMounted:t,disposableObjectUnmounted:i,removeObjectFromDisposal:n}=V0(),r=an(ud),a=jt(()=>r?.()??!0);no(()=>{if(Pe(a))return t(Pe(e)),()=>i(Pe(e));n(Pe(e))})},nA=s=>s!==null&&typeof s=="object"&&"addEventListener"in s&&"removeEventListener"in s,iA=(s,e,t)=>{const i=jt(s);for(const n of e){const r=jt(()=>t[n]);n.startsWith("on")&&ut(()=>{if(typeof Pe(r)!="function"||!nA(Pe(i)))return;const a=n.slice(2);return Pe(i).addEventListener(a,Pe(r)),()=>Pe(i).removeEventListener(a,Pe(r))})}};let hd;const rA=s=>{hd=s},sA=()=>{const s=hd;return hd=void 0,s},aA="threlte-plugin-context",oA=s=>{const e=an(aA);if(!e)return;const t=[],i=Object.values(e);if(i.length>0){const n=s();for(let r=0;r<i.length;r++){const a=i[r],o=a(n);o&&o.pluginProps&&t.push(...o.pluginProps)}}return{pluginsProps:t}},lA=new Set(["$$scope","$$slots","type","args","attach","instance"]),cA=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),uA=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,Sm=(s,e,t)=>!Array.isArray(t)&&typeof t=="number"&&typeof s[e]=="object"&&s[e]!==null&&typeof s[e]?.setScalar=="function"&&!s[e]?.isColor?(i,n,r)=>{i[n].setScalar(r)}:typeof s[e]?.set=="function"&&typeof s[e]=="object"&&s[e]!==null?Array.isArray(t)?(i,n,r)=>{i[n].set(...r)}:(i,n,r)=>{i[n].set(r)}:(i,n,r)=>{i[n]=r},hA=()=>{const{invalidate:s}=fs(),e=new Map,t=new Map,i=(r,a,o,l)=>{if(uA(o)){const h=e.get(a);if(h&&h.instance===r&&h.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:u}=z0(r,a);if(o!=null){const h=t.get(a);if(h)h(u,c,o);else{const d=Sm(u,c,o);t.set(a,d),d(u,c,o)}}else Sm(u,c,o)(u,c,o);l||cA.has(c)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProp:(r,a,o,l,c)=>{!lA.has(a)&&!l?.includes(a)&&i(r,a,o,c),s()}}},dA=s=>typeof s=="function"&&Function.prototype.toString.call(s).startsWith("class "),fA=(s,e)=>dA(s)?Array.isArray(e)?new s(...e):new s:s;function Ph(s,e){Ln(e,!0);let t=qe(e,"is",19,sA),i=qe(e,"manual",3,!1),n=qe(e,"makeDefault",3,!1),r=qe(e,"ref",15),a=jn(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const o=jt(()=>fA(t(),e.args));ut(()=>{r()!==Pe(o)&&r(Pe(o))});const l=oA(()=>({get ref(){return Pe(o)},get args(){return e.args},get attach(){return e.attach},get manual(){return i()},get makeDefault(){return n()},get dispose(){return e.dispose},get props(){return a}})),c=Object.keys(a),{updateProp:u}=hA();c.forEach(f=>{const p=jt(()=>a[f]);ut(()=>{u(Pe(o),f,Pe(p),l?.pluginsProps,i())})}),Jw(()=>Pe(o),()=>e.attach),ut(()=>{($n(Pe(o),"PerspectiveCamera")||$n(Pe(o),"OrthographicCamera"))&&Qw(()=>Pe(o),()=>i(),()=>n())}),eA(()=>e.dispose),ut(()=>{$w(Pe(o))&&tA(()=>Pe(o))}),iA(()=>Pe(o),c,a),no(()=>{Pe(o);let f;return Qm(()=>{f=e.oncreate?.(Pe(o))}),f});var h=Gt(),d=Ct(h);Sn(d,()=>e.children??Wn,()=>({ref:Pe(o)})),Mt(s,h),Un()}const pA={},qt=new Proxy(Ph,{get(s,e){if(typeof e!="string")return Ph;const t=pA[e]||Tw[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return rA(t),Ph}});function mA(s,e,t){const i=Xw();if(!i)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(i.update(n=>{if(s in n)return n;const r=typeof e=="function"?e():e;return n[s]=r,n}),i.current[s]):Lc(i,n=>n[s])}function gA(s,e){const{remember:t,clear:i}=Kv();let n;const r=()=>{const l=new s(...e?.args??[]);return e?.extend?.(l),l};return{load:(l,c)=>{const u=async h=>{if(n||(n=r()),"loadAsync"in n){const d=await n.loadAsync(h,c?.onProgress);return c?.transform?.(d)??d}else return new Promise((d,f)=>{n.load(h,p=>d(c?.transform?.(p)??p),p=>c?.onProgress?.(p),f)})};if(Array.isArray(l)){const h=l.map(f=>t(()=>u(f),[s,f]));return Ch(Promise.all(h))}else if(typeof l=="string"){const h=t(()=>u(l),[s,l]);return Ch(h)}else{const h=Object.values(l).map(f=>t(()=>u(f),[s,f]));return Ch(Promise.all(h).then(f=>Object.fromEntries(Object.entries(l).map(([p],v)=>[p,f[v]]))))}},clear:l=>{Array.isArray(l)?l.forEach(c=>{i([s,c])}):typeof l=="string"?i([s,l]):Object.entries(l).forEach(([c,u])=>{i([s,c,u])})},loader:n}}function Mm(s,e){if(e===Ag)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ec||e===Bd){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,n=[];if(e===Ec)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class vA extends fn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new SA(t)}),this.register(function(t){return new MA(t)}),this.register(function(t){return new DA(t)}),this.register(function(t){return new LA(t)}),this.register(function(t){return new UA(t)}),this.register(function(t){return new wA(t)}),this.register(function(t){return new AA(t)}),this.register(function(t){return new EA(t)}),this.register(function(t){return new CA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new RA(t)}),this.register(function(t){return new TA(t)}),this.register(function(t){return new IA(t)}),this.register(function(t){return new PA(t)}),this.register(function(t){return new xA(t)}),this.register(function(t){return new NA(t)}),this.register(function(t){return new FA(t)})}load(e,t,i,n){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=dr.extractUrlBase(e);a=dr.resolveURL(c,this.path)}else a=dr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===q0){try{a[ct.KHR_BINARY_GLTF]=new OA(e)}catch(h){n&&n(h);return}r=JSON.parse(a[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ZA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:a[h]=new yA;break;case ct.KHR_DRACO_MESH_COMPRESSION:a[h]=new BA(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:a[h]=new kA;break;case ct.KHR_MESH_QUANTIZATION:a[h]=new zA;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function _A(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xA{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],sn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new uf(u),c.distance=h;break;case"spot":c=new cf(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class yA{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return bn}extendParams(e,t,i){const n=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(n)}}class bA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class SA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(o,o)}return Promise.all(r)}}class MA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class TA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class wA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],sn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Nt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class AA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class EA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(o[0],o[1],o[2],sn),Promise.all(r)}}class CA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class RA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(o[0],o[1],o[2],sn),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Nt)),Promise.all(r)}}class PA{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class IA{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class DA{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class LA{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class UA{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class NA{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,u=n.count,h=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,n.mode,n.filter),f})})}else return null}}class FA{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==Jn.TRIANGLES&&c.mode!==Jn.TRIANGLE_STRIP&&c.mode!==Jn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const p of h){const v=new Ye,m=new D,g=new Kt,y=new D(1,1,1),x=new eu(p.geometry,p.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,v.compose(m,g,y));for(const _ in l)if(_==="_COLOR_0"){const S=l[_];x.instanceColor=new gr(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,l[_]);ht.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const q0="glTF",Fa=12,Tm={JSON:1313821514,BIN:5130562};class OA{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==q0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Fa,r=new DataView(e,Fa);let a=0;for(;a<n;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Tm.JSON){const c=new Uint8Array(e,Fa+a,o);this.content=i.decode(c)}else if(l===Tm.BIN){const c=Fa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class BA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=dd[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=dd[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],f=Xs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){n.decodeDracoFile(u,function(f){for(const p in f.attributes){const v=f.attributes[p],m=l[p];m!==void 0&&(v.normalized=m)}h(f)},o,c,sn,d)})})}}class kA{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zA{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class j0 extends ca{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=n-t,h=(i-t)/u,d=h*h,f=d*h,p=e*c,v=p-c,m=-2*f+3*d,g=f-d,y=1-m,x=g-d+h;for(let _=0;_!==o;_++){const S=a[v+_+o],w=a[v+_+l]*u,A=a[p+_+o],E=a[p+_]*u;r[_]=y*S+x*w+m*A+g*E}return r}}const GA=new Kt;class VA extends j0{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return GA.fromArray(r).normalize().toArray(r),r}}const Jn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wm={9728:Dt,9729:yt,9984:Fc,9985:Hs,9986:Xr,9987:zn},Am={33071:_n,33648:qs,10497:pr},Ih={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HA={CUBICSPLINE:void 0,LINEAR:Js,STEP:Zs},Dh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WA(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ro({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),s.DefaultMaterial}function kr(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function XA(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(n=!0),h.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(n){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(s.morphAttributes.position=u),n&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function YA(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qA(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lh(t.attributes):e=s.indices+":"+Lh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+Lh(s.targets[i]);return e}function Lh(s){let e="";const t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function fd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const KA=new Ye;class ZA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _A,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?this.textureLoader=new g0(this.options.manager):this.textureLoader=new S0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return kr(r,o,n),Ti(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,a){i.load(dr.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=Ih[n.type],o=Xs[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new gt(c,a,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ih[n.type],c=Xs[n.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,p=n.normalized===!0;let v,m;if(f&&f!==h){const g=Math.floor(d/f),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let x=t.cache.get(y);x||(v=new c(o,g*f,n.count*f/u),x=new oa(v,f/u),t.cache.add(y,x)),m=new Vi(x,l,d%f/u,p)}else o===null?v=new c(n.count*l):v=new c(o,d,n.count*l),m=new gt(v,l,p);if(n.sparse!==void 0){const g=Ih.SCALAR,y=Xs[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,_=n.sparse.values.byteOffset||0,S=new y(a[1],x,n.sparse.count*g),w=new c(a[2],_,n.sparse.count*l);o!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,E=S.length;A<E;A++){const b=S[A];if(m.setX(b,w[A*l]),l>=2&&m.setY(b,w[A*l+1]),l>=3&&m.setZ(b,w[A*l+2]),l>=4&&m.setW(b,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=wm[d.magFilter]||yt,u.minFilter=wm[d.minFilter]||zn,u.wrapS=Am[d.wrapS]||pr,u.wrapT=Am[d.wrapT]||pr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Dt&&u.minFilter!==yt,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(v){const m=new Rt(v);m.needsUpdate=!0,d(m)}),t.load(dr.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Ti(h,a),h.userData.mimeType=a.mimeType||jA(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new nu,Zt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new dn,Zt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ro}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const h=n[ct.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],sn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Nt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=kn);const u=r.alphaMode||Dh.OPAQUE;if(u===Dh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Dh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==bn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==bn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==bn){const h=r.emissiveFactor;o.emissive=new Ie().setRGB(h[0],h[1],h[2],sn)}return r.emissiveTexture!==void 0&&a!==bn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Ti(h,r),t.associations.set(h,{materials:e}),r.extensions&&kr(n,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Em(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=qA(c),h=n[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Em(new it,c,t),n[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?WA(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){const v=u[f],m=a[f];let g;const y=c[f];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new Yd(v,y):new Tt(v,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Jn.TRIANGLE_STRIP?g.geometry=Mm(g.geometry,Bd):m.mode===Jn.TRIANGLE_FAN&&(g.geometry=Mm(g.geometry,Ec));else if(m.mode===Jn.LINES)g=new vi(v,y);else if(m.mode===Jn.LINE_STRIP)g=new Hi(v,y);else if(m.mode===Jn.LINE_LOOP)g=new qd(v,y);else if(m.mode===Jn.POINTS)g=new jd(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&YA(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ti(g,r),m.extensions&&kr(n,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&kr(n,h[0],r),h[0];const d=new Ai;r.extensions&&kr(n,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Yt(ta.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new ds(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ti(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),a=n,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new To(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=n.channels.length;h<d;h++){const f=n.channels[h],p=n.samplers[f.sampler],v=f.target,m=v.node,g=n.parameters!==void 0?n.parameters[p.input]:p.input,y=n.parameters!==void 0?n.parameters[p.output]:p.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],p=h[2],v=h[3],m=h[4],g=[];for(let x=0,_=d.length;x<_;x++){const S=d[x],w=f[x],A=p[x],E=v[x],b=m[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=i._createAnimationTracks(S,w,A,E,b);if(M)for(let L=0;L<M.length;L++)g.push(M[L])}const y=new sa(r,void 0,g);return Ti(y,n),y})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,KA)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new $c:c.length>1?u=new Ai:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Ti(u,r),r.extensions&&kr(i,u,r),r.matrix!==void 0){const h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!n.associations.has(u))n.associations.set(u,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){const h=n.associations.get(u);n.associations.set(u,{...h})}return n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new Ai;i.name&&(r.name=n.createUniqueName(i.name)),Ti(r,i),i.extensions&&kr(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of n.associations)(d instanceof Zt||d instanceof Rt)&&h.set(d,f);return u.traverse(d=>{const f=n.associations.get(d);f!=null&&h.set(d,f)}),h};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const a=[],o=e.name?e.name:e.uuid,l=[];rr[r.path]===rr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(rr[r.path]){case rr.weights:c=rs;break;case rr.rotation:c=ss;break;case rr.translation:case rr.scale:c=as;break;default:i.itemSize===1?c=rs:c=as;break}const u=n.interpolation!==void 0?HA[n.interpolation]:Js,h=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+rr[r.path],t.array,h,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=fd(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof ss?VA:j0;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function JA(s,e,t){const i=e.attributes,n=new Lt;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const u=fd(Xs[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const v=fd(Xs[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;const a=new Ft;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function Em(s,e,t){const i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in i){const o=dd[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return lt.workingColorSpace!==sn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Ti(s,e),JA(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?XA(s,e.targets,t):s})}const QA=s=>{const e={nodes:{},materials:{}};return s&&s.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e};function K0(s,e){const t=typeof s=="string"?e:s,i=gA(vA,{extend(a){t?.dracoLoader&&a.setDRACOLoader(t.dracoLoader),t?.meshoptDecoder&&a.setMeshoptDecoder(t.meshoptDecoder),t?.ktx2Loader&&a.setKTX2Loader(t.ktx2Loader)}}),n=a=>i.load(a,{transform(o){return{...o,...QA(o.scene)}}}),r=typeof s=="string"?s:void 0;return r?n(r):{load:n}}const Uh=new WeakMap;class $A extends fn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const r=new qn(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,Nt,i).catch(i)}decodeDracoFile(e,t,i,n,r=sn,a=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const i=JSON.stringify(t);if(Uh.has(e)){const l=Uh.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(n=l,new Promise((c,u)=>{n._callbacks[r]={resolve:c,reject:u},n.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{n&&r&&this._releaseTask(n,r)}),Uh.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new it;e.index&&t.setIndex(new gt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const{name:n,array:r,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[i];let c;if(a===o)c=new gt(r,a);else{const u=new oa(r,o);c=new Vi(u,a,0)}n==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(n,c)}return t}_assignVertexColorSpace(e,t){if(t!==Nt)return;const i=new Ie;for(let n=0,r=e.count;n<r;n++)i.fromBufferAttribute(e,n),lt.colorSpaceToWorking(i,Nt),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new qn(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,r)=>{i.load(e,n,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const r=eE.toString(),a=["/* draco decoder */",n,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){const a=r.data;switch(a.type){case"decode":n._callbacks[a.id].resolve(a);break;case"error":n._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,r){return n._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function eE(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(l),c),p=f.attributes.map(v=>v.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(a,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const p=o.GetEncodedGeometryType(l);if(p===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(p===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const m in u){const g=self[h[m]];let y,x;if(c.useUniqueIDs)x=u[m],y=o.GetAttributeByUniqueId(d,x);else{if(x=o.GetAttributeId(d,a[u[m]]),x===-1)continue;y=o.GetAttribute(d,x)}const _=n(a,o,d,m,g,y);m==="color"&&(_.vertexColorSpace=c.vertexColorSpace),v.attributes.push(_)}return p===a.TRIANGULAR_MESH&&(v.index=i(a,o,d)),a.destroy(d),v}function i(a,o,l){const u=l.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:f,itemSize:1}}function n(a,o,l,c,u,h){const d=l.num_points(),f=h.num_components(),p=r(a,u),v=f*u.BYTES_PER_ELEMENT,m=Math.ceil(v/4)*4,g=m/u.BYTES_PER_ELEMENT,y=d*v,x=d*m,_=a._malloc(y);o.GetAttributeDataArrayForAllPoints(l,h,p,y,_);const S=new u(a.HEAPF32.buffer,_,y/u.BYTES_PER_ELEMENT);let w;if(v===m)w=S.slice();else{w=new u(x/u.BYTES_PER_ELEMENT);let A=0;for(let E=0,b=S.length;E<b;E++){for(let M=0;M<f;M++)w[A+M]=S[E*f+M];A+=g}}return a._free(_),{name:c,count:d,itemSize:f,array:w,stride:g}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const tE="https://www.gstatic.com/draco/versioned/decoders/1.4.3/",Cm={},nE=(s=tE)=>{const e=Cm[s];if(e)return e;const t=new $A().setDecoderPath(s);return Cm[s]=t,t},zr=s=>({subscribe:s.subscribe,get current(){return s.current}});let $a=0;const yf=zt(!1),Mu=zt(!1),bf=zt(void 0),Sf=zt(0),Mf=zt(0),Z0=zt([]),Tf=zt(0),{onStart:iE,onLoad:rE,onError:sE}=hs;hs.onStart=(s,e,t)=>{iE?.(s,e,t),Mu.set(!0),bf.set(s),Sf.set(e),Mf.set(t);const i=(e-$a)/(t-$a);Tf.set(i),i===1&&yf.set(!0)};hs.onLoad=()=>{rE?.(),Mu.set(!1)};hs.onError=s=>{sE?.(s),Z0.update(e=>[...e,s])};hs.onProgress=(s,e,t)=>{e===t&&($a=t),Mu.set(!0),bf.set(s),Sf.set(e),Mf.set(t);const i=(e-$a)/(t-$a)||1;Tf.set(i),i===1&&yf.set(!0)};zr(Mu),zr(bf),zr(Sf),zr(Mf),zr(Z0),zr(Tf),zr(yf);new D;new D;new D;new Ft;new Ye;new Wi;new D;const aE=Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER"),J0=()=>{const s=an(aE),e=new Set,t=n=>(s&&(s.suspend(n),e.add(n)),n),i={suspended:Lc(s?.suspended??Td(!1),n=>n)};return vr(()=>{if(s){for(const n of e)s.onComponentDestroy(n);e.clear()}}),Object.assign(t,i)};new D;new Ye;new D;new D;new ht;new D;new D;new D;new fe;function Rm(s,e){Ln(e,!0);let t=qe(e,"gltf",15),i=qe(e,"scene",15),n=qe(e,"animations",15),r=qe(e,"asset",15),a=qe(e,"cameras",15),o=qe(e,"scenes",15),l=qe(e,"userData",15),c=qe(e,"parser",15),u=qe(e,"materials",15),h=qe(e,"nodes",15),d=jn(e,["$$slots","$$events","$$legacy","url","dracoLoader","meshoptDecoder","ktx2Loader","gltf","scene","animations","asset","cameras","scenes","userData","parser","materials","nodes","onload","onunload","onerror","children"]);const f=K0({dracoLoader:e.dracoLoader,meshoptDecoder:e.meshoptDecoder,ktx2Loader:e.ktx2Loader}),p=S=>{t()&&e.onunload?.(),t(S),i(S.scene),n(S.animations),r(S.asset),a(S.cameras),o(S.scenes),l(S.userData),c(S.parser),u(S.materials),h(S.nodes),e.onload?.(t())},v=S=>{t(void 0),i(void 0),n(void 0),r(void 0),a(void 0),o(void 0),l(void 0),c(void 0),h(void 0),u(void 0),e.onerror?.(S)},m=J0(),g=async S=>{try{const w=await m(f.load(S));p(w)}catch(w){v(w)}};ut(()=>{g(e.url)});var y=Gt(),x=Ct(y);{var _=S=>{qt(S,ei({get is(){return i()}},()=>d,{children:(w,A)=>{var E=Gt(),b=Ct(E);Sn(b,()=>e.children??Wn,()=>({ref:i()})),Mt(w,E)},$$slots:{default:!0}}))};xo(x,S=>{i()&&S(_)})}Mt(s,y),Un()}const oE="Right",lE="Top",cE="Front",uE="Left",hE="Bottom",dE="Back";[oE,lE,cE,uE,hE,dE].map(s=>s.toLocaleLowerCase());new Lt;new D;Ne.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new fe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Qn.line={uniforms:So.merge([Ne.common,Ne.fog,Ne.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new pt;new D;new D;new pt;new pt;new pt;new D;new Ye;new C0;new D;new Lt;new Ft;new pt;const Pm={type:"change"},wf={type:"start"},Q0={type:"end"},Cl=new Wi,Im=new wi,fE=Math.cos(70*ta.DEG2RAD),Xt=new D,En=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nh=1e-6;let pE=class extends P0{constructor(e,t=null){super(e,t),this.state=St.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kr.ROTATE,MIDDLE:Kr.DOLLY,RIGHT:Kr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Kt,this._lastTargetPosition=new D,this._quat=new Kt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sd,this._sphericalDelta=new sd,this._scale=1,this._panOffset=new D,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new D,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gE.bind(this),this._onPointerDown=mE.bind(this),this._onPointerUp=vE.bind(this),this._onContextMenu=TE.bind(this),this._onMouseWheel=yE.bind(this),this._onKeyDown=bE.bind(this),this._onTouchStart=SE.bind(this),this._onTouchMove=ME.bind(this),this._onMouseDown=_E.bind(this),this._onMouseMove=xE.bind(this),this._interceptControlDown=wE.bind(this),this._interceptControlUp=AE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pm),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;Xt.copy(t).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=En:i>Math.PI&&(i-=En),n<-Math.PI?n+=En:n>Math.PI&&(n-=En),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Xt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Cl.origin.copy(this.object.position),Cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cl.direction))<fE?this.object.lookAt(this.target):(Im.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cl.intersectPlane(Im,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nh||this._lastTargetPosition.distanceToSquared(this.target)>Nh?(this.dispatchEvent(Pm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xt.setFromMatrixColumn(t,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,t){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(t,1):(Xt.setFromMatrixColumn(t,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Xt.copy(n).sub(this.target);let r=Xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function mE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function gE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function vE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q0),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _E(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=St.DOLLY;break;case Kr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=St.ROTATE}break;case Kr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(wf)}function xE(s){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function yE(s){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(s.preventDefault(),this.dispatchEvent(wf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Q0))}function bE(s){this.enabled!==!1&&this._handleKeyDown(s)}function SE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=St.TOUCH_ROTATE;break;case Wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=St.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(wf)}function ME(s){switch(this._trackPointer(s),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=St.NONE}}function TE(s){this.enabled!==!1&&s.preventDefault()}function wE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const EE=`
  varying vec3 localPosition;
  varying vec4 worldPosition;

  uniform vec3 worldCamProjPosition;
	uniform vec3 worldPlanePosition;
	uniform float fadeDistance;
	uniform bool infiniteGrid;
	uniform bool followCamera;

	uniform int coord0;
	uniform int coord1;
	uniform int coord2;

	void main() {
		localPosition = vec3(
		  position[coord0],
			position[coord1],
			position[coord2]
		);

		if (infiniteGrid) {
		  localPosition *= 1.0 + fadeDistance;
		}

		worldPosition = modelMatrix * vec4(localPosition, 1.0);
		if (followCamera) {
		  worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
      localPosition = (inverse(modelMatrix) * worldPosition).xyz;
		}

		gl_Position = projectionMatrix * viewMatrix * worldPosition;
	}
`,CE=`
  #define PI 3.141592653589793

	varying vec3 localPosition;
	varying vec4 worldPosition;

	uniform vec3 worldCamProjPosition;
	uniform float cellSize;
	uniform float sectionSize;
	uniform vec3 cellColor;
	uniform vec3 sectionColor;
	uniform float fadeDistance;
	uniform float fadeStrength;
	uniform vec3 fadeOrigin;
	uniform float cellThickness;
	uniform float sectionThickness;
	uniform vec3 backgroundColor;
	uniform float backgroundOpacity;

	uniform bool infiniteGrid;

	uniform int coord0;
	uniform int coord1;
	uniform int coord2;

	// 0 - default; 1 - lines; 2 - circles; 3 - polar
	uniform int gridType;

  // lineGrid coord for lines
	uniform int lineGridCoord;

	// circlegrid max radius
	uniform float circleGridMaxRadius;

	// polar grid dividers
	uniform float polarCellDividers;
	uniform float polarSectionDividers;

	float getSquareGrid(float size, float thickness, vec3 localPos) {
		vec2 coord = localPos.xy / size;

		vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
		float line = min(grid.x, grid.y) + 1.0 - thickness;

		return 1.0 - min(line, 1.0);
	}

	float getLinesGrid(float size, float thickness, vec3 localPos) {
		float coord = localPos[lineGridCoord] / size;
		float line = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) - thickness * 0.2;

		return 1.0 - min(line, 1.0);
	}

	float getCirclesGrid(float size, float thickness, vec3 localPos) {
		float coord = length(localPos.xy) / size;
		float line = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) - thickness * 0.2;

		if (!infiniteGrid && circleGridMaxRadius > 0. && coord > circleGridMaxRadius + thickness * 0.05) {
		  discard;
		}

		return 1.0 - min(line, 1.0);
	}

	float getPolarGrid(float size, float thickness, float polarDividers, vec3 localPos) {
		float rad = length(localPos.xy) / size;
		vec2 coord = vec2(rad, atan(localPos.x, localPos.y) * polarDividers / PI) ;

		vec2 wrapped = vec2(coord.x, fract(coord.y / (2.0 * polarDividers)) * (2.0 * polarDividers));
		vec2 coordWidth = fwidth(coord);
		vec2 wrappedWidth = fwidth(wrapped);
		vec2 width = (coord.y < -polarDividers * 0.5 || coord.y > polarDividers * 0.5 ? wrappedWidth : coordWidth) * (1.+thickness*0.25);

		// Compute anti-aliased world-space grid lines
		vec2 grid = abs(fract(coord - 0.5) - 0.5) / width;
		float line = min(grid.x, grid.y);

if (!infiniteGrid && circleGridMaxRadius > 0.0 && rad > circleGridMaxRadius + thickness * 0.05) {
		  discard;
		}

		return 1.0 - min(line, 1.0);
	}

	void main() {
		float g1 = 0.0;
		float g2 = 0.0;

		vec3 localPos = vec3(localPosition[coord0], localPosition[coord1], localPosition[coord2]);

		if (gridType == 0) {
			g1 = getSquareGrid(cellSize, cellThickness, localPos);
			g2 = getSquareGrid(sectionSize, sectionThickness, localPos);

		} else if (gridType == 1) {
			g1 = getLinesGrid(cellSize, cellThickness, localPos);
			g2 = getLinesGrid(sectionSize, sectionThickness, localPos);

		} else if (gridType == 2) {
			g1 = getCirclesGrid(cellSize, cellThickness, localPos);
			g2 = getCirclesGrid(sectionSize, sectionThickness, localPos);

		} else if (gridType == 3) {
			g1 = getPolarGrid(cellSize, cellThickness, polarCellDividers, localPos);
			g2 = getPolarGrid(sectionSize, sectionThickness, polarSectionDividers, localPos);
		}

		float dist = distance(fadeOrigin, worldPosition.xyz);
		float d = 1.0 - min(dist / fadeDistance, 1.0);
		float fadeFactor = pow(d, fadeStrength) * 0.95;

		vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

		if (backgroundOpacity > 0.0) {
			float linesAlpha = clamp((g1 + g2) * fadeFactor, 0.0,1.0);
			vec3 finalColor = mix(backgroundColor, color, linesAlpha);
			float blendedAlpha = max(linesAlpha, backgroundOpacity * fadeFactor);
			gl_FragColor = vec4(finalColor, blendedAlpha);

		} else {
			gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
			gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
		}

		if (gl_FragColor.a <= 0.0) {
		  discard;
		}

		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`;var RE=ls("<!> <!>",1);function PE(s,e){Ln(e,!0);let t=qe(e,"cellColor",3,"#000000"),i=qe(e,"sectionColor",3,"#0000ee"),n=qe(e,"cellSize",3,1),r=qe(e,"backgroundColor",3,"#dadada"),a=qe(e,"backgroundOpacity",3,0),o=qe(e,"sectionSize",3,10),l=qe(e,"plane",3,"xz"),c=qe(e,"gridSize",19,()=>[20,20]),u=qe(e,"followCamera",3,!1),h=qe(e,"infiniteGrid",3,!1),d=qe(e,"fadeDistance",3,100),f=qe(e,"fadeStrength",3,1),p=qe(e,"fadeOrigin",3,void 0),v=qe(e,"cellThickness",3,1),m=qe(e,"sectionThickness",3,2),g=qe(e,"side",3,kn),y=qe(e,"type",3,"grid"),x=qe(e,"axis",3,"x"),_=qe(e,"maxRadius",3,0),S=qe(e,"cellDividers",3,6),w=qe(e,"sectionDividers",3,2),A=qe(e,"ref",15),E=jn(e,["$$slots","$$events","$$legacy","cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","fadeOrigin","cellThickness","sectionThickness","side","type","axis","maxRadius","cellDividers","sectionDividers","ref","children"]);const b=new Tt,{invalidate:M,camera:L}=fs(),I=new wi,U=new D(0,1,0),F=new D(0,0,0),V={x:0,y:1,z:2},B={xz:"xzy",xy:"xyz",zy:"zyx"},H={grid:0,lines:1,circular:2,polar:3},Y={cellSize:{value:n()},sectionSize:{value:o()},cellColor:{value:new Ie(t())},sectionColor:{value:new Ie(i())},backgroundColor:{value:new Ie(r())},backgroundOpacity:{value:a()},fadeDistance:{value:d()},fadeStrength:{value:f()},fadeOrigin:{value:new D},cellThickness:{value:v()},sectionThickness:{value:m()},infiniteGrid:{value:h()},followCamera:{value:u()},coord0:{value:0},coord1:{value:2},coord2:{value:1},gridType:{value:H.grid},lineGridCoord:{value:V[x()]},circleGridMaxRadius:{value:_()},polarCellDividers:{value:S()},polarSectionDividers:{value:w()},worldCamProjPosition:{value:new D},worldPlanePosition:{value:new D}};ut(()=>{const q=B[l()],X=q.charAt(0),N=q.charAt(1),W=q.charAt(2);Y.coord0.value=V[X],Y.coord1.value=V[N],Y.coord2.value=V[W],M()}),ut(()=>{Y.cellSize.value=n(),M()}),ut(()=>{Y.sectionSize.value=o(),M()}),ut(()=>{Y.cellColor.value.set(t()),M()}),ut(()=>{Y.sectionColor.value.set(i()),M()}),ut(()=>{Y.backgroundColor.value.set(r()),M()}),ut(()=>{Y.backgroundOpacity.value=a(),M()}),ut(()=>{Y.fadeDistance.value=d(),M()}),ut(()=>{Y.fadeStrength.value=f(),M()}),ut(()=>{p()&&(Y.fadeOrigin.value=p(),M())}),ut(()=>{Y.cellThickness.value=v(),M()}),ut(()=>{Y.sectionThickness.value=m(),M()}),ut(()=>{Y.followCamera.value=u(),M()}),ut(()=>{Y.infiniteGrid.value=h(),M()}),ut(()=>{switch(y()){case"grid":{Y.gridType.value=H.grid;break}case"lines":{Y.gridType.value=H.lines,Y.lineGridCoord.value=V[x()];break}case"circular":{Y.gridType.value=H.circular,Y.circleGridMaxRadius.value=_();break}case"polar":{Y.gridType.value=H.polar,Y.circleGridMaxRadius.value=_(),Y.polarCellDividers.value=S(),Y.polarSectionDividers.value=w();break}}M()}),Po(()=>{I.setFromNormalAndCoplanarPoint(U,F).applyMatrix4(b.matrixWorld);const q=b.material,X=q.uniforms.worldCamProjPosition,N=q.uniforms.worldPlanePosition,W=q.uniforms.fadeOrigin,K=I.projectPoint(L.current.position,X.value);p()||(W.value=K),N.value.set(0,0,0).applyMatrix4(b.matrixWorld)},{autoInvalidate:!1}),qt(s,ei({get is(){return b},frustumCulled:!1},()=>E,{get ref(){return A()},set ref(q){A(q)},children:(q,X)=>{var N=RE(),W=Ct(N);Ys(W,()=>qt.ShaderMaterial,(z,k)=>{k(z,{get fragmentShader(){return CE},get vertexShader(){return EE},get uniforms(){return Y},transparent:!0,get side(){return g()}})});var K=Rn(W,2);{var re=z=>{var k=Gt(),J=Ct(k);Sn(J,()=>e.children,()=>({ref:b})),Mt(z,k)},te=z=>{var k=Gt(),J=Ct(k);{let ve=jt(()=>typeof c()=="number"?[c(),c()]:c());Ys(J,()=>qt.PlaneGeometry,(pe,be)=>{be(pe,{get args(){return Pe(ve)}})})}Mt(z,k)};xo(K,z=>{e.children?z(re):z(te,!1)})}Mt(q,N)},$$slots:{default:!0}})),Un()}const IE=()=>mA("threlte-controls",{orbitControls:es(void 0),trackballControls:es(void 0)});function DE(s,e){Ln(e,!0);const t=()=>Sd(o,"$parent",i),[i,n]=Md();let r=qe(e,"ref",15),a=jn(e,["$$slots","$$events","$$legacy","ref","children"]);const o=X0(),{dom:l,invalidate:c}=fs();if(!$n(t(),"Camera"))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const u=new pE(t(),l),{orbitControls:h}=IE(),{start:d,stop:f}=Po(()=>{u.update()},{autoStart:!1,autoInvalidate:!1});ut(()=>{e.autoRotate||e.enableDamping?d():f()}),ut(()=>{const p=v=>{c(),e.onchange?.(v)};return h.set(u),u.addEventListener("change",p),()=>{h.set(void 0),u.removeEventListener("change",p)}}),qt(s,ei({get is(){return u}},()=>a,{get ref(){return r()},set ref(p){r(p)},children:(p,v)=>{var m=Gt(),g=Ct(m);Sn(g,()=>e.children??Wn,()=>({ref:u})),Mt(p,m)},$$slots:{default:!0}})),Un(),n()}const $0=s=>`threlte-instanced-mesh-${s}`,LE=(s,e)=>{const t={instancedMesh:zt(s),addInstance(i){t.instances.update(n=>(n.push(i),n))},removeInstance(i){t.instances.update(n=>{const r=n.indexOf(i);return r>-1&&n.splice(r,1),n})},instances:zt([])};return Dn($0(e),t),t},UE=s=>{const e=an($0(s));if(!e)throw new Error(`No <InstancedMesh> component found for id ${s}`);return e};var NE=ls("<!> <!> <!>",1);function FE(s,e){Ln(e,!0);const t=()=>Sd(a,"$instances",i),[i,n]=Md();let r=qe(e,"instancedMesh",7);const{instances:a}=LE(r(),e.id),o=new Ye,l=new Float32Array(e.limit*16);for(let _=0;_<e.limit;_++)o.identity().toArray(l,_*16);const c=new Float32Array(e.limit*3).fill(1),u=new Ye,h=new Ye,d=new D,f=new Kt,p=new D;let v=!1;Po(()=>{if(r().updateMatrix(),e.update||!v){r().updateMatrixWorld(),u.copy(r().matrixWorld).invert(),r().instanceColor&&(r().instanceColor.needsUpdate=!0),r().instanceMatrix.needsUpdate=!0;for(let _=0,S=a.current.length;_<S;_++){const w=a.current[_];w.matrixWorld.decompose(d,f,p),h.compose(d,f,p).premultiply(u),h.toArray(l,_*16),w.color.toArray(c,_*3)}v=!0}}),ut(()=>{const _=Math.min(e.limit,e.range!==void 0?e.range:e.limit,t().length);r().count=_,r().instanceMatrix.clearUpdateRanges(),r().instanceMatrix.addUpdateRange(0,_*16),r().instanceColor&&(r().instanceColor.clearUpdateRanges(),r().instanceColor.addUpdateRange(0,_*3))});var m=NE(),g=Ct(m);{let _=jt(()=>l.length/16);Ys(g,()=>qt.InstancedBufferAttribute,(S,w)=>{w(S,{attach:"instanceMatrix",get count(){return Pe(_)},get array(){return l},itemSize:16,get usage(){return Qh}})})}var y=Rn(g,2);{let _=jt(()=>c.length/3);Ys(y,()=>qt.InstancedBufferAttribute,(S,w)=>{w(S,{attach:"instanceColor",get count(){return Pe(_)},get array(){return c},itemSize:3,get usage(){return Qh}})})}var x=Rn(y,2);Sn(x,()=>e.children??Wn),Mt(s,m),Un(),n()}function OE(s,e){Ln(e,!0);let t=qe(e,"id",3,"default"),i=qe(e,"limit",3,1e3),n=qe(e,"range",3,1e3),r=qe(e,"update",3,!0),a=qe(e,"ref",15),o=jn(e,["$$slots","$$events","$$legacy","id","limit","range","update","ref","children"]);const l=new eu(void 0,void 0,0);qt(s,ei({get is(){return l},raycast:()=>null,matrixAutoUpdate:!1},()=>o,{get ref(){return a()},set ref(c){a(c)},children:(c,u)=>{FE(c,{get instancedMesh(){return l},get id(){return t()},get limit(){return i()},get range(){return n()},get update(){return r()},children:(h,d)=>{var f=Gt(),p=Ct(f);Sn(p,()=>e.children??Wn,()=>({ref:l})),Mt(h,f)},$$slots:{default:!0}})},$$slots:{default:!0}})),Un()}const Dm=new Ye,Lm=new Ye,Rl=[],Oa=new Tt;class BE extends Ai{color;instancedMesh;instances;constructor(e,t){super(),this.color=new Ie("white"),this.instancedMesh=e,this.instances=t}get geometry(){return this.instancedMesh.current?.geometry}raycast(e,t){const i=this.instancedMesh.current;if(i===void 0||i.geometry===void 0||i.material===void 0)return;Oa.geometry=i.geometry;const n=i.matrixWorld,r=this.instances.current.indexOf(this);if(!(r===-1||r>i.count)){i.getMatrixAt(r,Dm),Lm.multiplyMatrices(n,Dm),Oa.matrixWorld=Lm,$n(i.material,"Material")?Oa.material.side=i.material.side:Oa.material.side=i.material[0]?.side??mi,Oa.raycast(e,Rl);for(let a=0,o=Rl.length;a<o;a++){const l=Rl[a];l.instanceId=r,l.object=this,t.push(l)}Rl.length=0}}}const ev=Symbol("threlte-instance-id"),kE=s=>{Dn(ev,s)},zE=()=>an(ev)??"default";function GE(s,e){Ln(e,!0);let t=qe(e,"id",19,zE),i=qe(e,"ref",15),n=jn(e,["$$slots","$$events","$$legacy","id","ref","children"]);const{addInstance:r,removeInstance:a,instancedMesh:o,instances:l}=UE(t()),c=new BE(o,l);r(c),vr(()=>{a(c)}),qt(s,ei({get is(){return c}},()=>n,{get ref(){return i()},set ref(u){i(u)},children:(u,h)=>{var d=Gt(),f=Ct(d);Sn(f,()=>e.children??Wn,()=>({ref:c})),Mt(u,d)},$$slots:{default:!0}})),Un()}function tv(s,e){Ln(e,!0);let t=qe(e,"index",19,()=>e.meshes.length-1),i=jn(e,["$$slots","$$events","$$legacy","meshes","index","children"]);const n=e.meshes[t()];var r=Gt(),a=Ct(r);{var o=c=>{OE(c,ei({get geometry(){return n.geometry},get material(){return n.material},get id(){return n.uuid}},()=>i,{children:(u,h)=>{{let d=jt(()=>t()-1);tv(u,ei({get meshes(){return e.meshes},get index(){return Pe(d)}},()=>i,{children:(f,p)=>{var v=Gt(),m=Ct(v);Sn(m,()=>e.children??Wn),Mt(f,v)},$$slots:{default:!0}}))}},$$slots:{default:!0}}))},l=c=>{var u=Gt(),h=Ct(u);Sn(h,()=>e.children??Wn),Mt(c,u)};xo(a,c=>{t()>-1?c(o):c(l,!1)})}Mt(s,r),Un()}function VE(s,e){Ln(e,!0);let t=jn(e,["$$slots","$$events","$$legacy","meshes","children"]);const i=c=>(...u)=>(kE(c),GE(...u)),n=c=>c.filter(u=>u.isMesh).map(u=>i(u.uuid)),r=c=>Object.entries(c).reduce((u,[h,d])=>(d.isMesh&&(u[h]=i(d.uuid)),u),{});let a=jt(()=>Array.isArray(e.meshes)?n(e.meshes):r(e.meshes)),o=jt(()=>Array.isArray(e.meshes)?e.meshes:Object.values(e.meshes)),l=jt(()=>Pe(o).filter(c=>c.isMesh));tv(s,ei({get meshes(){return Pe(l)}},()=>t,{children:(c,u)=>{var h=Gt(),d=Ct(h);Sn(d,()=>e.children??Wn,()=>({components:Pe(a)})),Mt(c,h)},$$slots:{default:!0}})),Un()}`${et.logdepthbuf_pars_vertex}${et.fog_pars_vertex}${et.logdepthbuf_vertex}${et.fog_vertex}`;class Tu extends Tt{constructor(){const e=Tu.SkyShader,t=new Yn({name:e.name,uniforms:So.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:hn,depthWrite:!1});super(new xr(1,1,1),t),this.isSky=!0}}Tu.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function HE(s,e){Ln(e,!0);let t=qe(e,"scale",3,1e3),i=qe(e,"turbidity",3,10),n=qe(e,"rayleigh",3,3),r=qe(e,"mieCoefficient",3,.005),a=qe(e,"mieDirectionalG",3,.7),o=qe(e,"elevation",3,2),l=qe(e,"azimuth",3,180),c=qe(e,"setEnvironment",3,!0),u=qe(e,"cubeMapSize",3,128),h=qe(e,"webGLRenderTargetOptions",19,()=>({})),d=qe(e,"ref",15),f=jn(e,["$$slots","$$events","$$legacy","scale","turbidity","rayleigh","mieCoefficient","mieDirectionalG","elevation","azimuth","setEnvironment","cubeMapSize","webGLRenderTargetOptions","ref","children"]);const p=new Tu,v=new D,{uniforms:m}=p.material,{renderer:g,scene:y,invalidate:x}=fs();let _=Wh(void 0),S;const w=()=>{Hh(_,new Zc(u(),{type:gi,generateMipmaps:!0,minFilter:zn,...h()}),!0),S=new Hd(1,1.1,Pe(_))},A=y.environment;ut(()=>{c()&&Pe(_)?(y.environment=Pe(_).texture,x()):c()||(y.environment=A,x())});const{start:E,stop:b}=Po(()=>{p.scale.setScalar(t()),m.turbidity.value=i(),m.rayleigh.value=n(),m.mieCoefficient.value=r(),m.mieDirectionalG.value=a();const M=ta.degToRad(90-o()),L=ta.degToRad(l());v.setFromSphericalCoords(1,M,L),m.sunPosition.value.copy(v),c()&&((!Pe(_)||!S)&&w(),S?.update(g,p)),x(),b()},{autoStart:!1,autoInvalidate:!1});k0.pre(()=>[t(),i(),n(),r(),a(),o(),l()],()=>E()),vr(()=>{p.material.dispose(),y.environment=A;try{Pe(_)?.dispose()}catch(M){console.warn("Could not dispose renderTarget:",M)}}),qt(s,ei({get is(){return p}},()=>f,{get ref(){return d()},set ref(M){d(M)},children:(M,L)=>{var I=Gt(),U=Ct(I);Sn(U,()=>e.children??Wn,()=>({ref:p,sunPosition:v,renderTarget:Pe(_)})),Mt(M,I)},$$slots:{default:!0}})),Un()}`${et.tonemapping_fragment}${et.colorspace_fragment}`;`${et.tonemapping_fragment}${et.colorspace_fragment}`;const WE=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,XE=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`,YE=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,qE=YE,jE=`
	${WE}
	${XE}
`;`${qE}${jE}${et.tonemapping_fragment}${et.colorspace_fragment}`;function KE(){var s=Object.create(null);function e(n,r){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(d){return d&&d.isWorkerModule&&(e(d,function(f){if(f instanceof Error)throw f}),d=s[d.id].value),d}),c=i("<"+o+">.init",c),u&&(u=i("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},r(h)}catch(d){d&&d.noLog||console.error(d),r(d)}}function t(n,r){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var d=s[o].getTransferables&&s[o].getTransferables(h);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),r(h,d)}catch(f){console.error(f),r(f)}}}function i(n,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var r=n.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function ZE(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var nv=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return nv=function(){return s},s},JE=0,QE=0,Fh=!1,eo=Object.create(null),to=Object.create(null),pd=Object.create(null);function ha(s){if((!s||typeof s.init!="function")&&!Fh)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId,r=ZE(s);n==null&&(n="#default");var a="workerModule"+ ++JE,o=s.name||a,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Fh=!0,u=ha({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Ol(u)+`
)}`}),Fh=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!nv())return r.apply(void 0,u);if(!l){l=Um(n,"registerModule",c.workerModuleData);var d=function(){l=null,to[n].delete(d)};(to[n]||(to[n]=new Set)).add(d)}return l.then(function(f){var p=f.isCallable;if(p)return Um(n,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:Ol(t),getTransferables:i&&Ol(i)},c.onMainThread=r,c}function $E(s){to[s]&&to[s].forEach(function(e){e()}),eo[s]&&(eo[s].terminate(),delete eo[s])}function Ol(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function eC(s){var e=eo[s];if(!e){var t=Ol(KE);e=eo[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,a=pd[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete pd[r],a(n)}}return e}function Um(s,e,t){return new Promise(function(i,n){var r=++QE;pd[r]=function(a){a.success?i(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},eC(s).postMessage({messageId:r,action:e,data:t})})}function iv(){var s=(function(e){function t(q,X,N,W,K,re,te,z){var k=1-te;z.x=k*k*q+2*k*te*N+te*te*K,z.y=k*k*X+2*k*te*W+te*te*re}function i(q,X,N,W,K,re,te,z,k,J){var ve=1-k;J.x=ve*ve*ve*q+3*ve*ve*k*N+3*ve*k*k*K+k*k*k*te,J.y=ve*ve*ve*X+3*ve*ve*k*W+3*ve*k*k*re+k*k*k*z}function n(q,X){for(var N=/([MLQCZ])([^MLQCZ]*)/g,W,K,re,te,z;W=N.exec(q);){var k=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(J){return parseFloat(J)});switch(W[1]){case"M":te=K=k[0],z=re=k[1];break;case"L":(k[0]!==te||k[1]!==z)&&X("L",te,z,te=k[0],z=k[1]);break;case"Q":{X("Q",te,z,te=k[2],z=k[3],k[0],k[1]);break}case"C":{X("C",te,z,te=k[4],z=k[5],k[0],k[1],k[2],k[3]);break}case"Z":(te!==K||z!==re)&&X("L",te,z,K,re);break}}}function r(q,X,N){N===void 0&&(N=16);var W={x:0,y:0};n(q,function(K,re,te,z,k,J,ve,pe,be){switch(K){case"L":X(re,te,z,k);break;case"Q":{for(var ge=re,De=te,se=1;se<N;se++)t(re,te,J,ve,z,k,se/(N-1),W),X(ge,De,W.x,W.y),ge=W.x,De=W.y;break}case"C":{for(var ie=re,ne=te,de=1;de<N;de++)i(re,te,J,ve,pe,be,z,k,de/(N-1),W),X(ie,ne,W.x,W.y),ie=W.x,ne=W.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(q,X){var N=q.getContext?q.getContext("webgl",c):q,W=l.get(N);if(!W){let ve=function(ie){var ne=re[ie];if(!ne&&(ne=re[ie]=N.getExtension(ie),!ne))throw new Error(ie+" not supported");return ne},pe=function(ie,ne){var de=N.createShader(ne);return N.shaderSource(de,ie),N.compileShader(de),de},be=function(ie,ne,de,R){if(!te[ie]){var Ae={},he={},ae=N.createProgram();N.attachShader(ae,pe(ne,N.VERTEX_SHADER)),N.attachShader(ae,pe(de,N.FRAGMENT_SHADER)),N.linkProgram(ae),te[ie]={program:ae,transaction:function(C){N.useProgram(ae),C({setUniform:function(O,$){for(var Q=[],j=arguments.length-2;j-- >0;)Q[j]=arguments[j+2];var we=he[$]||(he[$]=N.getUniformLocation(ae,$));N["uniform"+O].apply(N,[we].concat(Q))},setAttribute:function(O,$,Q,j,we){var _e=Ae[O];_e||(_e=Ae[O]={buf:N.createBuffer(),loc:N.getAttribLocation(ae,O),data:null}),N.bindBuffer(N.ARRAY_BUFFER,_e.buf),N.vertexAttribPointer(_e.loc,$,N.FLOAT,!1,0,0),N.enableVertexAttribArray(_e.loc),K?N.vertexAttribDivisor(_e.loc,j):ve("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(_e.loc,j),we!==_e.data&&(N.bufferData(N.ARRAY_BUFFER,we,Q),_e.data=we)}})}}}te[ie].transaction(R)},ge=function(ie,ne){k++;try{N.activeTexture(N.TEXTURE0+k);var de=z[ie];de||(de=z[ie]=N.createTexture(),N.bindTexture(N.TEXTURE_2D,de),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MIN_FILTER,N.NEAREST),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MAG_FILTER,N.NEAREST)),N.bindTexture(N.TEXTURE_2D,de),ne(de,k)}finally{k--}},De=function(ie,ne,de){var R=N.createFramebuffer();J.push(R),N.bindFramebuffer(N.FRAMEBUFFER,R),N.activeTexture(N.TEXTURE0+ne),N.bindTexture(N.TEXTURE_2D,ie),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ie,0);try{de(R)}finally{N.deleteFramebuffer(R),N.bindFramebuffer(N.FRAMEBUFFER,J[--J.length-1]||null)}},se=function(){re={},te={},z={},k=-1,J.length=0};var K=typeof WebGL2RenderingContext<"u"&&N instanceof WebGL2RenderingContext,re={},te={},z={},k=-1,J=[];N.canvas.addEventListener("webglcontextlost",function(ie){se(),ie.preventDefault()},!1),l.set(N,W={gl:N,isWebGL2:K,getExtension:ve,withProgram:be,withTexture:ge,withTextureFramebuffer:De,handleContextLoss:se})}X(W)}function h(q,X,N,W,K,re,te,z){te===void 0&&(te=15),z===void 0&&(z=null),u(q,function(k){var J=k.gl,ve=k.withProgram,pe=k.withTexture;pe("copy",function(be,ge){J.texImage2D(J.TEXTURE_2D,0,J.RGBA,K,re,0,J.RGBA,J.UNSIGNED_BYTE,X),ve("copy",a,o,function(De){var se=De.setUniform,ie=De.setAttribute;ie("aUV",2,J.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),se("1i","image",ge),J.bindFramebuffer(J.FRAMEBUFFER,z||null),J.disable(J.BLEND),J.colorMask(te&8,te&4,te&2,te&1),J.viewport(N,W,K,re),J.scissor(N,W,K,re),J.drawArrays(J.TRIANGLES,0,3)})})})}function d(q,X,N){var W=q.width,K=q.height;u(q,function(re){var te=re.gl,z=new Uint8Array(W*K*4);te.readPixels(0,0,W,K,te.RGBA,te.UNSIGNED_BYTE,z),q.width=X,q.height=N,h(te,z,0,0,W,K)})}var f=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:d});function p(q,X,N,W,K,re){re===void 0&&(re=1);var te=new Uint8Array(q*X),z=W[2]-W[0],k=W[3]-W[1],J=[];r(N,function(ie,ne,de,R){J.push({x1:ie,y1:ne,x2:de,y2:R,minX:Math.min(ie,de),minY:Math.min(ne,R),maxX:Math.max(ie,de),maxY:Math.max(ne,R)})}),J.sort(function(ie,ne){return ie.maxX-ne.maxX});for(var ve=0;ve<q;ve++)for(var pe=0;pe<X;pe++){var be=De(W[0]+z*(ve+.5)/q,W[1]+k*(pe+.5)/X),ge=Math.pow(1-Math.abs(be)/K,re)/2;be<0&&(ge=1-ge),ge=Math.max(0,Math.min(255,Math.round(ge*255))),te[pe*q+ve]=ge}return te;function De(ie,ne){for(var de=1/0,R=1/0,Ae=J.length;Ae--;){var he=J[Ae];if(he.maxX+R<=ie)break;if(ie+R>he.minX&&ne-R<he.maxY&&ne+R>he.minY){var ae=g(ie,ne,he.x1,he.y1,he.x2,he.y2);ae<de&&(de=ae,R=Math.sqrt(de))}}return se(ie,ne)&&(R=-R),R}function se(ie,ne){for(var de=0,R=J.length;R--;){var Ae=J[R];if(Ae.maxX<=ie)break;var he=Ae.y1>ne!=Ae.y2>ne&&ie<(Ae.x2-Ae.x1)*(ne-Ae.y1)/(Ae.y2-Ae.y1)+Ae.x1;he&&(de+=Ae.y1<Ae.y2?1:-1)}return de!==0}}function v(q,X,N,W,K,re,te,z,k,J){re===void 0&&(re=1),z===void 0&&(z=0),k===void 0&&(k=0),J===void 0&&(J=0),m(q,X,N,W,K,re,te,null,z,k,J)}function m(q,X,N,W,K,re,te,z,k,J,ve){re===void 0&&(re=1),k===void 0&&(k=0),J===void 0&&(J=0),ve===void 0&&(ve=0);for(var pe=p(q,X,N,W,K,re),be=new Uint8Array(pe.length*4),ge=0;ge<pe.length;ge++)be[ge*4+ve]=pe[ge];h(te,be,k,J,q,X,1<<3-ve,z)}function g(q,X,N,W,K,re){var te=K-N,z=re-W,k=te*te+z*z,J=k?Math.max(0,Math.min(1,((q-N)*te+(X-W)*z)/k)):0,ve=q-(N+J*te),pe=X-(W+J*z);return ve*ve+pe*pe}var y=Object.freeze({__proto__:null,generate:p,generateIntoCanvas:v,generateIntoFramebuffer:m}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",_="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",S="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),A=null,E=!1,b={},M=new WeakMap;function L(q){if(!E&&!V(q))throw new Error("WebGL generation not supported")}function I(q,X,N,W,K,re,te){if(re===void 0&&(re=1),te===void 0&&(te=null),!te&&(te=A,!te)){var z=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!z)throw new Error("OffscreenCanvas or DOM canvas not supported");te=A=z.getContext("webgl",{depth:!1})}L(te);var k=new Uint8Array(q*X*4);u(te,function(be){var ge=be.gl,De=be.withTexture,se=be.withTextureFramebuffer;De("readable",function(ie,ne){ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,q,X,0,ge.RGBA,ge.UNSIGNED_BYTE,null),se(ie,ne,function(de){F(q,X,N,W,K,re,ge,de,0,0,0),ge.readPixels(0,0,q,X,ge.RGBA,ge.UNSIGNED_BYTE,k)})})});for(var J=new Uint8Array(q*X),ve=0,pe=0;ve<k.length;ve+=4)J[pe++]=k[ve];return J}function U(q,X,N,W,K,re,te,z,k,J){re===void 0&&(re=1),z===void 0&&(z=0),k===void 0&&(k=0),J===void 0&&(J=0),F(q,X,N,W,K,re,te,null,z,k,J)}function F(q,X,N,W,K,re,te,z,k,J,ve){re===void 0&&(re=1),k===void 0&&(k=0),J===void 0&&(J=0),ve===void 0&&(ve=0),L(te);var pe=[];r(N,function(be,ge,De,se){pe.push(be,ge,De,se)}),pe=new Float32Array(pe),u(te,function(be){var ge=be.gl,De=be.isWebGL2,se=be.getExtension,ie=be.withProgram,ne=be.withTexture,de=be.withTextureFramebuffer,R=be.handleContextLoss;if(ne("rawDistances",function(Ae,he){(q!==Ae._lastWidth||X!==Ae._lastHeight)&&ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,Ae._lastWidth=q,Ae._lastHeight=X,0,ge.RGBA,ge.UNSIGNED_BYTE,null),ie("main",x,_,function(ae){var me=ae.setAttribute,C=ae.setUniform,T=!De&&se("ANGLE_instanced_arrays"),O=!De&&se("EXT_blend_minmax");me("aUV",2,ge.STATIC_DRAW,0,w),me("aLineSegment",4,ge.DYNAMIC_DRAW,1,pe),C.apply(void 0,["4f","uGlyphBounds"].concat(W)),C("1f","uMaxDistance",K),C("1f","uExponent",re),de(Ae,he,function($){ge.enable(ge.BLEND),ge.colorMask(!0,!0,!0,!0),ge.viewport(0,0,q,X),ge.scissor(0,0,q,X),ge.blendFunc(ge.ONE,ge.ONE),ge.blendEquationSeparate(ge.FUNC_ADD,De?ge.MAX:O.MAX_EXT),ge.clear(ge.COLOR_BUFFER_BIT),De?ge.drawArraysInstanced(ge.TRIANGLES,0,3,pe.length/4):T.drawArraysInstancedANGLE(ge.TRIANGLES,0,3,pe.length/4)})}),ie("post",a,S,function(ae){ae.setAttribute("aUV",2,ge.STATIC_DRAW,0,w),ae.setUniform("1i","tex",he),ge.bindFramebuffer(ge.FRAMEBUFFER,z),ge.disable(ge.BLEND),ge.colorMask(ve===0,ve===1,ve===2,ve===3),ge.viewport(k,J,q,X),ge.scissor(k,J,q,X),ge.drawArrays(ge.TRIANGLES,0,3)})}),ge.isContextLost())throw R(),new Error("webgl context lost")})}function V(q){var X=!q||q===A?b:q.canvas||q,N=M.get(X);if(N===void 0){E=!0;var W=null;try{var K=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],re=I(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,q);N=re&&K.length===re.length&&re.every(function(te,z){return te===K[z]}),N||(W="bad trial run results",console.info(K,re))}catch(te){N=!1,W=te.message}W&&console.warn("WebGL SDF generation not supported:",W),E=!1,M.set(X,N)}return N}var B=Object.freeze({__proto__:null,generate:I,generateIntoCanvas:U,generateIntoFramebuffer:F,isSupported:V});function H(q,X,N,W,K,re){K===void 0&&(K=Math.max(W[2]-W[0],W[3]-W[1])/2),re===void 0&&(re=1);try{return I.apply(B,arguments)}catch(te){return console.info("WebGL SDF generation failed, falling back to JS",te),p.apply(y,arguments)}}function Y(q,X,N,W,K,re,te,z,k,J){K===void 0&&(K=Math.max(W[2]-W[0],W[3]-W[1])/2),re===void 0&&(re=1),z===void 0&&(z=0),k===void 0&&(k=0),J===void 0&&(J=0);try{return U.apply(B,arguments)}catch(ve){return console.info("WebGL SDF generation failed, falling back to JS",ve),v.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=H,e.generateIntoCanvas=Y,e.javascript=y,e.pathToLineSegments=r,e.webgl=B,e.webglUtils=f,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}function tC(){var s=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(R,Ae){i[R]=1<<Ae+1,n[i[R]]=R}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,a=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function h(){if(!u){u=new Map;var R=function(he){if(t.hasOwnProperty(he)){var ae=0;t[he].split(",").forEach(function(me){var C=me.split("+"),T=C[0],O=C[1];T=parseInt(T,36),O=O?parseInt(O,36):0,u.set(ae+=T,i[he]);for(var $=0;$<O;$++)u.set(++ae,i[he])})}};for(var Ae in t)R(Ae)}}function d(R){return h(),u.get(R.codePointAt(0))||i.L}function f(R){return n[d(R)]}var p={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(R,Ae){var he=36,ae=0,me=new Map,C=Ae&&new Map,T;return R.split(",").forEach(function O($){if($.indexOf("+")!==-1)for(var Q=+$;Q--;)O(T);else{T=$;var j=$.split(">"),we=j[0],_e=j[1];we=String.fromCodePoint(ae+=parseInt(we,he)),_e=String.fromCodePoint(ae+=parseInt(_e,he)),me.set(we,_e),Ae&&C.set(_e,we)}}),{map:me,reverseMap:C}}var m,g,y;function x(){if(!m){var R=v(p.pairs,!0),Ae=R.map,he=R.reverseMap;m=Ae,g=he,y=v(p.canonical,!1).map}}function _(R){return x(),m.get(R)||null}function S(R){return x(),g.get(R)||null}function w(R){return x(),y.get(R)||null}var A=i.L,E=i.R,b=i.EN,M=i.ES,L=i.ET,I=i.AN,U=i.CS,F=i.B,V=i.S,B=i.ON,H=i.BN,Y=i.NSM,q=i.AL,X=i.LRO,N=i.RLO,W=i.LRE,K=i.RLE,re=i.PDF,te=i.LRI,z=i.RLI,k=i.FSI,J=i.PDI;function ve(R,Ae){for(var he=125,ae=new Uint32Array(R.length),me=0;me<R.length;me++)ae[me]=d(R[me]);var C=new Map;function T(Tn,li){var wn=ae[Tn];ae[Tn]=li,C.set(wn,C.get(wn)-1),wn&o&&C.set(o,C.get(o)-1),C.set(li,(C.get(li)||0)+1),li&o&&C.set(o,(C.get(o)||0)+1)}for(var O=new Uint8Array(R.length),$=new Map,Q=[],j=null,we=0;we<R.length;we++)j||Q.push(j={start:we,end:R.length-1,level:Ae==="rtl"?1:Ae==="ltr"?0:Of(we,!1)}),ae[we]&F&&(j.end=we,j=null);for(var _e=K|W|N|X|r|J|re|F,Re=function(Tn){return Tn+(Tn&1?1:2)},ke=function(Tn){return Tn+(Tn&1?2:1)},ue=0;ue<Q.length;ue++){j=Q[ue];var Me=[{_level:j.level,_override:0,_isolate:0}],Te=void 0,Le=0,Ee=0,Qe=0;C.clear();for(var G=j.start;G<=j.end;G++){var ye=ae[G];if(Te=Me[Me.length-1],C.set(ye,(C.get(ye)||0)+1),ye&o&&C.set(o,(C.get(o)||0)+1),ye&_e)if(ye&(K|W)){O[G]=Te._level;var Se=(ye===K?ke:Re)(Te._level);Se<=he&&!Le&&!Ee?Me.push({_level:Se,_override:0,_isolate:0}):Le||Ee++}else if(ye&(N|X)){O[G]=Te._level;var Be=(ye===N?ke:Re)(Te._level);Be<=he&&!Le&&!Ee?Me.push({_level:Be,_override:ye&N?E:A,_isolate:0}):Le||Ee++}else if(ye&r){ye&k&&(ye=Of(G+1,!0)===1?z:te),O[G]=Te._level,Te._override&&T(G,Te._override);var xe=(ye===z?ke:Re)(Te._level);xe<=he&&Le===0&&Ee===0?(Qe++,Me.push({_level:xe,_override:0,_isolate:1,_isolInitIndex:G})):Le++}else if(ye&J){if(Le>0)Le--;else if(Qe>0){for(Ee=0;!Me[Me.length-1]._isolate;)Me.pop();var ce=Me[Me.length-1]._isolInitIndex;ce!=null&&($.set(ce,G),$.set(G,ce)),Me.pop(),Qe--}Te=Me[Me.length-1],O[G]=Te._level,Te._override&&T(G,Te._override)}else ye&re?(Le===0&&(Ee>0?Ee--:!Te._isolate&&Me.length>1&&(Me.pop(),Te=Me[Me.length-1])),O[G]=Te._level):ye&F&&(O[G]=j.level);else O[G]=Te._level,Te._override&&ye!==H&&T(G,Te._override)}for(var Ce=[],Ge=null,Ve=j.start;Ve<=j.end;Ve++){var $e=ae[Ve];if(!($e&l)){var wt=O[Ve],At=$e&r,Ot=$e===J;Ge&&wt===Ge._level?(Ge._end=Ve,Ge._endsWithIsolInit=At):Ce.push(Ge={_start:Ve,_end:Ve,_level:wt,_startsWithPDI:Ot,_endsWithIsolInit:At})}}for(var Mn=[],Kn=0;Kn<Ce.length;Kn++){var ri=Ce[Kn];if(!ri._startsWithPDI||ri._startsWithPDI&&!$.has(ri._start)){for(var si=[Ge=ri],xi=void 0;Ge&&Ge._endsWithIsolInit&&(xi=$.get(Ge._end))!=null;)for(var tn=Kn+1;tn<Ce.length;tn++)if(Ce[tn]._start===xi){si.push(Ge=Ce[tn]);break}for(var Vt=[],yi=0;yi<si.length;yi++)for(var da=si[yi],Yi=da._start;Yi<=da._end;Yi++)Vt.push(Yi);for(var Io=O[Vt[0]],Sr=j.level,Mr=Vt[0]-1;Mr>=0;Mr--)if(!(ae[Mr]&l)){Sr=O[Mr];break}var ps=Vt[Vt.length-1],Cu=O[ps],Do=j.level;if(!(ae[ps]&r)){for(var ms=ps+1;ms<=j.end;ms++)if(!(ae[ms]&l)){Do=O[ms];break}}Mn.push({_seqIndices:Vt,_sosType:Math.max(Sr,Io)%2?E:A,_eosType:Math.max(Do,Cu)%2?E:A})}}for(var fa=0;fa<Mn.length;fa++){var pa=Mn[fa],Ke=pa._seqIndices,P=pa._sosType,Z=pa._eosType,le=O[Ke[0]]&1?E:A;if(C.get(Y))for(var oe=0;oe<Ke.length;oe++){var ee=Ke[oe];if(ae[ee]&Y){for(var Ue=P,ze=oe-1;ze>=0;ze--)if(!(ae[Ke[ze]]&l)){Ue=ae[Ke[ze]];break}T(ee,Ue&(r|J)?B:Ue)}}if(C.get(b))for(var Fe=0;Fe<Ke.length;Fe++){var We=Ke[Fe];if(ae[We]&b)for(var Xe=Fe-1;Xe>=-1;Xe--){var tt=Xe===-1?P:ae[Ke[Xe]];if(tt&a){tt===q&&T(We,I);break}}}if(C.get(q))for(var Ze=0;Ze<Ke.length;Ze++){var ot=Ke[Ze];ae[ot]&q&&T(ot,E)}if(C.get(M)||C.get(U))for(var dt=1;dt<Ke.length-1;dt++){var Et=Ke[dt];if(ae[Et]&(M|U)){for(var bt=0,vt=0,Je=dt-1;Je>=0&&(bt=ae[Ke[Je]],!!(bt&l));Je--);for(var mt=dt+1;mt<Ke.length&&(vt=ae[Ke[mt]],!!(vt&l));mt++);bt===vt&&(ae[Et]===M?bt===b:bt&(b|I))&&T(Et,bt)}}if(C.get(b))for(var st=0;st<Ke.length;st++){var pn=Ke[st];if(ae[pn]&b){for(var ai=st-1;ai>=0&&ae[Ke[ai]]&(L|l);ai--)T(Ke[ai],b);for(st++;st<Ke.length&&ae[Ke[st]]&(L|l|b);st++)ae[Ke[st]]!==b&&T(Ke[st],b)}}if(C.get(L)||C.get(M)||C.get(U))for(var Ht=0;Ht<Ke.length;Ht++){var qi=Ke[Ht];if(ae[qi]&(L|M|U)){T(qi,B);for(var _t=Ht-1;_t>=0&&ae[Ke[_t]]&l;_t--)T(Ke[_t],B);for(var Wt=Ht+1;Wt<Ke.length&&ae[Ke[Wt]]&l;Wt++)T(Ke[Wt],B)}}if(C.get(b))for(var on=0,$t=P;on<Ke.length;on++){var nn=Ke[on],Tr=ae[nn];Tr&b?$t===A&&T(nn,A):Tr&a&&($t=Tr)}if(C.get(o)){var Nn=E|b|I,Ef=Nn|A,Lo=[];{for(var gs=[],vs=0;vs<Ke.length;vs++)if(ae[Ke[vs]]&o){var ma=R[Ke[vs]],Cf=void 0;if(_(ma)!==null)if(gs.length<63)gs.push({char:ma,seqIndex:vs});else break;else if((Cf=S(ma))!==null)for(var ga=gs.length-1;ga>=0;ga--){var Ru=gs[ga].char;if(Ru===Cf||Ru===S(w(ma))||_(w(Ru))===ma){Lo.push([gs[ga].seqIndex,vs]),gs.length=ga;break}}}Lo.sort(function(Tn,li){return Tn[0]-li[0]})}for(var Pu=0;Pu<Lo.length;Pu++){for(var Rf=Lo[Pu],Uo=Rf[0],Iu=Rf[1],Pf=!1,oi=0,Du=Uo+1;Du<Iu;Du++){var If=Ke[Du];if(ae[If]&Ef){Pf=!0;var Df=ae[If]&Nn?E:A;if(Df===le){oi=Df;break}}}if(Pf&&!oi){oi=P;for(var Lu=Uo-1;Lu>=0;Lu--){var Lf=Ke[Lu];if(ae[Lf]&Ef){var Uf=ae[Lf]&Nn?E:A;Uf!==le?oi=Uf:oi=le;break}}}if(oi){if(ae[Ke[Uo]]=ae[Ke[Iu]]=oi,oi!==le){for(var va=Uo+1;va<Ke.length;va++)if(!(ae[Ke[va]]&l)){d(R[Ke[va]])&Y&&(ae[Ke[va]]=oi);break}}if(oi!==le){for(var _a=Iu+1;_a<Ke.length;_a++)if(!(ae[Ke[_a]]&l)){d(R[Ke[_a]])&Y&&(ae[Ke[_a]]=oi);break}}}}for(var ji=0;ji<Ke.length;ji++)if(ae[Ke[ji]]&o){for(var Nf=ji,Uu=ji,Nu=P,xa=ji-1;xa>=0;xa--)if(ae[Ke[xa]]&l)Nf=xa;else{Nu=ae[Ke[xa]]&Nn?E:A;break}for(var Ff=Z,ya=ji+1;ya<Ke.length;ya++)if(ae[Ke[ya]]&(o|l))Uu=ya;else{Ff=ae[Ke[ya]]&Nn?E:A;break}for(var Fu=Nf;Fu<=Uu;Fu++)ae[Ke[Fu]]=Nu===Ff?Nu:le;ji=Uu}}}for(var Fn=j.start;Fn<=j.end;Fn++){var _v=O[Fn],No=ae[Fn];if(_v&1?No&(A|b|I)&&O[Fn]++:No&E?O[Fn]++:No&(I|b)&&(O[Fn]+=2),No&l&&(O[Fn]=Fn===0?j.level:O[Fn-1]),Fn===j.end||d(R[Fn])&(V|F))for(var Fo=Fn;Fo>=0&&d(R[Fo])&c;Fo--)O[Fo]=j.level}}return{levels:O,paragraphs:Q};function Of(Tn,li){for(var wn=Tn;wn<R.length;wn++){var Ki=ae[wn];if(Ki&(E|q))return 1;if(Ki&(F|A)||li&&Ki===J)return 0;if(Ki&r){var Bf=xv(wn);wn=Bf===-1?R.length:Bf}}return 0}function xv(Tn){for(var li=1,wn=Tn+1;wn<R.length;wn++){var Ki=ae[wn];if(Ki&F)break;if(Ki&J){if(--li===0)return wn}else Ki&r&&li++}return-1}}var pe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",be;function ge(){if(!be){var R=v(pe,!0),Ae=R.map,he=R.reverseMap;he.forEach(function(ae,me){Ae.set(me,ae)}),be=Ae}}function De(R){return ge(),be.get(R)||null}function se(R,Ae,he,ae){var me=R.length;he=Math.max(0,he==null?0:+he),ae=Math.min(me-1,ae==null?me-1:+ae);for(var C=new Map,T=he;T<=ae;T++)if(Ae[T]&1){var O=De(R[T]);O!==null&&C.set(T,O)}return C}function ie(R,Ae,he,ae){var me=R.length;he=Math.max(0,he==null?0:+he),ae=Math.min(me-1,ae==null?me-1:+ae);var C=[];return Ae.paragraphs.forEach(function(T){var O=Math.max(he,T.start),$=Math.min(ae,T.end);if(O<$){for(var Q=Ae.levels.slice(O,$+1),j=$;j>=O&&d(R[j])&c;j--)Q[j]=T.level;for(var we=T.level,_e=1/0,Re=0;Re<Q.length;Re++){var ke=Q[Re];ke>we&&(we=ke),ke<_e&&(_e=ke|1)}for(var ue=we;ue>=_e;ue--)for(var Me=0;Me<Q.length;Me++)if(Q[Me]>=ue){for(var Te=Me;Me+1<Q.length&&Q[Me+1]>=ue;)Me++;Me>Te&&C.push([Te+O,Me+O])}}}),C}function ne(R,Ae,he,ae){var me=de(R,Ae,he,ae),C=[].concat(R);return me.forEach(function(T,O){C[O]=(Ae.levels[T]&1?De(R[T]):null)||R[T]}),C.join("")}function de(R,Ae,he,ae){for(var me=ie(R,Ae,he,ae),C=[],T=0;T<R.length;T++)C[T]=T;return me.forEach(function(O){for(var $=O[0],Q=O[1],j=C.slice($,Q+1),we=j.length;we--;)C[Q-we]=j[we]}),C}return e.closingToOpeningBracket=S,e.getBidiCharType=d,e.getBidiCharTypeName=f,e.getCanonicalBracket=w,e.getEmbeddingLevels=ve,e.getMirroredCharacter=De,e.getMirroredCharactersMap=se,e.getReorderSegments=ie,e.getReorderedIndices=de,e.getReorderedString=ne,e.openingToClosingBracket=_,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}const rv=/\bvoid\s+main\s*\(\s*\)\s*{/g;function md(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=et[n];return r?md(r):i}return s.replace(e,t)}const rn=[];for(let s=0;s<256;s++)rn[s]=(s<16?"0":"")+s.toString(16);function nC(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toUpperCase()}const Gr=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},iC=Date.now(),Nm=new WeakMap,Fm=new Map;let rC=1e10;function gd(s,e){const t=lC(e);let i=Nm.get(s);if(i||Nm.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let d=Fm[h];if(!d){const f=sC(this,c,e,t);d=Fm[h]=f}c.vertexShader=d.vertexShader,c.fragmentShader=d.fragmentShader,Gr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-iC}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:rC++}),u.uuid=nC(),u.uniforms=Gr({},c.uniforms,e.uniforms),u.defines=Gr({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Gr({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Gr(this.extensions,c.extensions),Gr(this.defines,c.defines),Gr(this.uniforms,So.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=gd(s.isDerivedMaterial?s.getDepthMaterial():new vu({depthPacking:Cg}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=gd(s.isDerivedMaterial?s.getDistanceMaterial():new _u,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=a,new a}function sC(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:d,customRewriter:f,timeUniform:p}=i;if(r=r||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||f)&&(e=md(e)),(d||f)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=md(t)),f){let v=f({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(d){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),h=`${d}
${v.join(`
`)}
${h}`}if(p){const v=`
uniform float ${p};
`;r=v+r,c=v+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,g,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,g))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Om(e,n,r,a,o),t=Om(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function Om(s,e,t,i,n){return(i||n||t)&&(s=s.replace(rv,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function aC(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let oC=0;const Bm=new Map;function lC(s){const e=JSON.stringify(s,aC);let t=Bm.get(e);return t==null&&Bm.set(e,t=++oC),t}function cC(){return typeof window>"u"&&(self.window=self),(function(s){var e={parse:function(n){var r=e._bin,a=new Uint8Array(n);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(n,r){var a=e._bin,o=r;a.readFixed(n,r),r+=4;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},d=0;d<l;d++){var f=a.readASCII(n,r,4);r+=4,a.readUint(n,r),r+=4;var p=a.readUint(n,r);r+=4;var v=a.readUint(n,r);r+=4,h[f]={offset:p,length:v}}for(d=0;d<c.length;d++){var m=c[d];h[m]&&(u[m.trim()]=e[m.trim()].parse(n,h[m].offset,h[m].length,u))}return u},_tabOffset:function(n,r,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var d=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==r)return d}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,a){for(var o="",l=0;l<a;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,a){var o=e._bin._tdec;return o&&r==0&&a==n.length?o.decode(n):e._bin.readASCII(n,r,a)},readBytes:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,a,o,l){var c=e._bin,u={},h=r;c.readFixed(n,r),r+=4;var d=c.readUshort(n,r);r+=2;var f=c.readUshort(n,r);r+=2;var p=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+d),u.featureList=e._lctf.readFeatureList(n,h+f),u.lookupList=e._lctf.readLookupList(n,h+p,l),u},e._lctf.readLookupList=function(n,r,a){var o=e._bin,l=r,c=[],u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var d=o.readUshort(n,r);r+=2;var f=e._lctf.readLookupTable(n,l+d,a);c.push(f)}return c},e._lctf.readLookupTable=function(n,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var h=c.ltype,d=0;d<u;d++){var f=o.readUshort(n,r);r+=2;var p=a(n,h,l+f,c);c.tabs.push(p)}return c},e._lctf.numOfOnes=function(n){for(var r=0,a=0;a<32;a++)(n>>>a&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var a=e._bin,o=[],l=a.readUshort(n,r);if(r+=2,l==1){var c=a.readUshort(n,r);r+=2;var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(n,r)),r+=2}if(l==2){var d=a.readUshort(n,r);for(r+=2,h=0;h<d;h++)o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(n,r){var a=e._bin,o={};o.fmt=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(n,r,l)),o.fmt==2&&(o.tab=a.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var a=n.tab;if(n.fmt==1)return a.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,r,4);r+=4;var d=a.readUshort(n,r);r+=2;var f=e._lctf.readFeatureTable(n,o+d);f.tag=h.trim(),l.push(f)}return l},e._lctf.readFeatureTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(n,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(n,r+2*h));return l},e._lctf.readScriptList=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,r,4);r+=4;var d=a.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+d)}return l},e._lctf.readScriptTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var d=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2,l[d.trim()]=e._lctf.readLangSysTable(n,o+f)}return l},e._lctf.readLangSysTable=function(n,r){var a=e._bin,o={};a.readUshort(n,r),r+=2,o.reqFeature=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.features=a.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,a){var o=e._bin;(n=new Uint8Array(n.buffer,r,a))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var d=[];for(u=0;u<h.length-1;u++)d.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var f=d[0],p=[];r=e.CFF.readIndex(n,r,p);var v=[];for(u=0;u<p.length-1;u++)v.push(o.readASCII(n,r+p[u],p[u+1]-p[u]));if(r+=p[p.length-1],e.CFF.readSubrs(n,r,f),f.CharStrings){r=f.CharStrings,p=[],r=e.CFF.readIndex(n,r,p);var m=[];for(u=0;u<p.length-1;u++)m.push(o.readBytes(n,r+p[u],p[u+1]-p[u]));f.CharStrings=m}if(f.ROS){r=f.FDArray;var g=[];for(r=e.CFF.readIndex(n,r,g),f.FDArray=[],u=0;u<g.length-1;u++){var y=e.CFF.readDict(n,r+g[u],r+g[u+1]);e.CFF._readFDict(n,y,v),f.FDArray.push(y)}r+=g[g.length-1],r=f.FDSelect,f.FDSelect=[];var x=n[r];if(r++,x!=3)throw x;var _=o.readUshort(n,r);for(r+=2,u=0;u<_+1;u++)f.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(n,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(n,f.charset,f.CharStrings.length)),e.CFF._readFDict(n,f,v),f},e.CFF._readFDict=function(n,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(n,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(n,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,a){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,a){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(n,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(n,r),r+=2;var d=0;for(c==1?(d=n[r],r++):(d=o.readUshort(n,r),r+=2),u=0;u<=d;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,r,a){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)a.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,a){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,d=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(d=o.readShort(n,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(d=l-139,u=1),247<=l&&l<=250&&(d=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(d=256*-(l-251)-c-108,u=2),l==255&&(d=o.readInt(n,r+1)/65535,u=5),a.val=d??"o"+h,a.size=u},e.CFF.readCharString=function(n,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var d=1,f=null,p=null;u<=20&&(f=u,d=1),u==12&&(f=100*u+h,d=2),u!=19&&u!=20||(f=u,d=2),21<=u&&u<=27&&(f=u,d=1),u==28&&(p=l.readShort(n,r+1),d=3),29<=u&&u<=31&&(f=u,d=1),32<=u&&u<=246&&(p=u-139,d=1),247<=u&&u<=250&&(p=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(p=256*-(u-251)-h-108,d=2),u==255&&(p=l.readInt(n,r+1)/65535,d=5),c.push(p??"o"+f),r+=d}return c},e.CFF.readDict=function(n,r,a){for(var o=e._bin,l={},c=[];r<a;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var d=1,f=null,p=null;if(u==28&&(p=o.readShort(n,r+1),d=3),u==29&&(p=o.readInt(n,r+1),d=5),32<=u&&u<=246&&(p=u-139,d=1),247<=u&&u<=250&&(p=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(p=256*-(u-251)-h-108,d=2),u==255)throw p=o.readInt(n,r+1)/65535,d=5,"unknown number";if(u==30){var v=[];for(d=1;;){var m=n[r+d];d++;var g=m>>4,y=15&m;if(g!=15&&v.push(g),y!=15&&v.push(y),y==15)break}for(var x="",_=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],S=0;S<v.length;S++)x+=_[v[S]];p=parseFloat(x)}u<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],d=1,u==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],d=2)),f!=null?(l[f]=c.length==1?c[0]:c,c=[]):c.push(p),r+=d}return l},e.cmap={},e.cmap.parse=function(n,r,a){n=new Uint8Array(n.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var d=o.readUshort(n,r);r+=2;var f=o.readUshort(n,r);r+=2;var p=o.readUint(n,r);r+=4;var v="p"+d+"e"+f,m=u.indexOf(p);if(m==-1){var g;m=l.tables.length,u.push(p);var y=o.readUshort(n,p);y==0?g=e.cmap.parse0(n,p):y==4?g=e.cmap.parse4(n,p):y==6?g=e.cmap.parse6(n,p):y==12?g=e.cmap.parse12(n,p):console.debug("unknown format: "+y,d,f,p),l.tables.push(g)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var a=e._bin,o=r,l={};l.format=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;var h=u/2;l.searchRange=a.readUshort(n,r),r+=2,l.entrySelector=a.readUshort(n,r),r+=2,l.rangeShift=a.readUshort(n,r),r+=2,l.endCount=a.readUshorts(n,r,h),r+=2*h,r+=2,l.startCount=a.readUshorts(n,r,h),r+=2*h,l.idDelta=[];for(var d=0;d<h;d++)l.idDelta.push(a.readShort(n,r)),r+=2;for(l.idRangeOffset=a.readUshorts(n,r,h),r+=2*h,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,o.firstCode=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,r+=2,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4;var l=a.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=a.readUint(n,u+0),d=a.readUint(n,u+4),f=a.readUint(n,u+8);o.groups.push([h,d,f])}return o},e.glyf={},e.glyf.parse=function(n,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var d=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<d;u++){var f=o[l];if(l++,c.flags.push(f),(8&f)!=0){var p=o[l];l++;for(var v=0;v<p;v++)c.flags.push(f),u++}}for(c.xs=[],u=0;u<d;u++){var m=(2&c.flags[u])!=0,g=(16&c.flags[u])!=0;m?(c.xs.push(g?o[l]:-o[l]),l++):g?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<d;u++)m=(4&c.flags[u])!=0,g=(32&c.flags[u])!=0,m?(c.ys.push(g?o[l]:-o[l]),l++):g?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var y=0,x=0;for(u=0;u<d;u++)y+=c.xs[u],x+=c.ys[u],c.xs[u]=y,c.ys[u]=x}else{var _;c.parts=[];do{_=a.readUshort(o,l),l+=2;var S={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(S),S.glyphIndex=a.readUshort(o,l),l+=2,1&_){var w=a.readShort(o,l);l+=2;var A=a.readShort(o,l);l+=2}else w=a.readInt8(o,l),l++,A=a.readInt8(o,l),l++;2&_?(S.m.tx=w,S.m.ty=A):(S.p1=w,S.p2=A),8&_?(S.m.a=S.m.d=a.readF2dot14(o,l),l+=2):64&_?(S.m.a=a.readF2dot14(o,l),l+=2,S.m.d=a.readF2dot14(o,l),l+=2):128&_&&(S.m.a=a.readF2dot14(o,l),l+=2,S.m.b=a.readF2dot14(o,l),l+=2,S.m.c=a.readF2dot14(o,l),l+=2,S.m.d=a.readF2dot14(o,l),l+=2)}while(32&_);if(256&_){var E=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<E;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(r==1&&u.fmt==1){var d=l.readUshort(n,a);a+=2,d!=0&&(u.pos=e.GPOS.readValueRecord(n,a,d))}else if(r==2&&u.fmt>=1&&u.fmt<=2){d=l.readUshort(n,a),a+=2;var f=l.readUshort(n,a);a+=2;var p=e._lctf.numOfOnes(d),v=e._lctf.numOfOnes(f);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,a);a+=2;for(var g=0;g<m;g++){var y=c+l.readUshort(n,a);a+=2;var x=l.readUshort(n,y);y+=2;for(var _=[],S=0;S<x;S++){var w=l.readUshort(n,y);y+=2,d!=0&&(I=e.GPOS.readValueRecord(n,y,d),y+=2*p),f!=0&&(U=e.GPOS.readValueRecord(n,y,f),y+=2*v),_.push({gid2:w,val1:I,val2:U})}u.pairsets.push(_)}}if(u.fmt==2){var A=l.readUshort(n,a);a+=2;var E=l.readUshort(n,a);a+=2;var b=l.readUshort(n,a);a+=2;var M=l.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,c+A),u.classDef2=e._lctf.readClassDef(n,c+E),u.matrix=[],g=0;g<b;g++){var L=[];for(S=0;S<M;S++){var I=null,U=null;d!=0&&(I=e.GPOS.readValueRecord(n,a,d),a+=2*p),f!=0&&(U=e.GPOS.readValueRecord(n,a,f),a+=2*v),L.push({val1:I,val2:U})}u.matrix.push(L)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var F=l.readUshort(n,a);a+=2;var V=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+V)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(n,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(n,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(n,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,r,a){var o=e._bin,l=[],c=r,u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){for(var d=[],f=0;f<a;f++)d.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(d)}return l},e.GPOS.readMarkArray=function(n,r){var a=e._bin,o=[],l=r,c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,r+2)+l);h.markClass=a.readUshort(n,r),o.push(h),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var a=e._bin,o={};return o.fmt=a.readUshort(n,r),o.x=a.readShort(n,r+2),o.y=a.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,a),a+=2;else if(u.fmt==2){var d=l.readUshort(n,a);a+=2,u.newg=l.readUshorts(n,a,d),a+=2*u.newg.length}}else if(r==2&&u.fmt==1){d=l.readUshort(n,a),a+=2,u.seqs=[];for(var f=0;f<d;f++){var p=l.readUshort(n,a)+c;a+=2;var v=l.readUshort(n,p);u.seqs.push(l.readUshorts(n,p+2,v))}}else if(r==4)for(u.vals=[],d=l.readUshort(n,a),a+=2,f=0;f<d;f++){var m=l.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(r==5&&u.fmt==2){if(u.fmt==2){var g=l.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,c+g),u.scset=[];var y=l.readUshort(n,a);for(a+=2,f=0;f<y;f++){var x=l.readUshort(n,a);a+=2,u.scset.push(x==0?null:e.GSUB.readSubClassSet(n,c+x))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(f=0;f<3;f++){d=l.readUshort(n,a),a+=2;for(var _=[],S=0;S<d;S++)_.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*S)));a+=2*d,f==0&&(u.backCvg=_),f==1&&(u.inptCvg=_),f==2&&(u.ahedCvg=_)}d=l.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,d)}}else{if(r==7&&u.fmt==1){var w=l.readUshort(n,a);a+=2;var A=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+A)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var a=e._bin.readUshort,o=r,l=[],c=a(n,r);r+=2;for(var u=0;u<c;u++){var h=a(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,r){var a=e._bin.readUshort,o={},l=a(n,r),c=a(n,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(n,r);r+=2,c==1&&u--,o[l[c]]=a.readUshorts(n,r,u),r+=2*o[l[c]].length}return u=a.readUshort(n,r),r+=2,o.subst=a.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,d=0;d<o.maxp.numGlyphs;d++)d<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,h=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,r,a,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,a,o);var u=l.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},d=0;d<u;d++){r+=2,a=l.readUshort(n,r),r+=2;var f=l.readUshort(n,r);r+=2;var p=f>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,a,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,r),r+=4;var d=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var f=d>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,a){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var f=o.readShort(n,r);r+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var p=a.rval[a.rval.length-1];p.glyph2.push(d),p.vals.push(f),l=h}return r},e.loca={},e.loca.parse=function(n,r,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var d=0;d<h;d++)c.push(l.readUshort(n,r+(d<<1))<<1);if(u==1)for(d=0;d<h;d++)c.push(l.readUint(n,r+(d<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,a){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,a){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,f=0;f<c;f++){var p=o.readUshort(n,r);r+=2;var v=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var g=o.readUshort(n,r);r+=2;var y=o.readUshort(n,r);r+=2;var x=o.readUshort(n,r);r+=2;var _,S=h[g],w=d+12*c+x;if(p==0)_=o.readUnicode(n,w,y/2);else if(p==3&&v==0)_=o.readUnicode(n,w,y/2);else if(v==0)_=o.readASCII(n,w,y);else if(v==1)_=o.readUnicode(n,w,y/2);else if(v==3)_=o.readUnicode(n,w,y/2);else{if(p!=1)throw"unknown encoding "+v+", platformID: "+p;_=o.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var A="p"+p+","+m.toString(16);l[A]==null&&(l[A]={}),l[A][S!==void 0?S:g]=_,l[A]._lang=m}for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==1033)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==0)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==3084)return l[E];for(var E in l)if(l[E].postScriptName!=null)return l[E];for(var E in l){u=E;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,a){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,r),r+=2,a.usWeightClass=o.readUshort(n,r),r+=2,a.usWidthClass=o.readUshort(n,r),r+=2,a.fsType=o.readUshort(n,r),r+=2,a.ySubscriptXSize=o.readShort(n,r),r+=2,a.ySubscriptYSize=o.readShort(n,r),r+=2,a.ySubscriptXOffset=o.readShort(n,r),r+=2,a.ySubscriptYOffset=o.readShort(n,r),r+=2,a.ySuperscriptXSize=o.readShort(n,r),r+=2,a.ySuperscriptYSize=o.readShort(n,r),r+=2,a.ySuperscriptXOffset=o.readShort(n,r),r+=2,a.ySuperscriptYOffset=o.readShort(n,r),r+=2,a.yStrikeoutSize=o.readShort(n,r),r+=2,a.yStrikeoutPosition=o.readShort(n,r),r+=2,a.sFamilyClass=o.readShort(n,r),r+=2,a.panose=o.readBytes(n,r,10),r+=10,a.ulUnicodeRange1=o.readUint(n,r),r+=4,a.ulUnicodeRange2=o.readUint(n,r),r+=4,a.ulUnicodeRange3=o.readUint(n,r),r+=4,a.ulUnicodeRange4=o.readUint(n,r),r+=4,a.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,a.fsSelection=o.readUshort(n,r),r+=2,a.usFirstCharIndex=o.readUshort(n,r),r+=2,a.usLastCharIndex=o.readUshort(n,r),r+=2,a.sTypoAscender=o.readShort(n,r),r+=2,a.sTypoDescender=o.readShort(n,r),r+=2,a.sTypoLineGap=o.readShort(n,r),r+=2,a.usWinAscent=o.readUshort(n,r),r+=2,a.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,a){var o=e._bin;return r=e["OS/2"].version0(n,r,a),a.ulCodePageRange1=o.readUint(n,r),r+=4,a.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,a){var o=e._bin;return r=e["OS/2"].version1(n,r,a),a.sxHeight=o.readShort(n,r),r+=2,a.sCapHeight=o.readShort(n,r),r+=2,a.usDefault=o.readUshort(n,r),r+=2,a.usBreak=o.readUshort(n,r),r+=2,a.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,a){var o=e._bin;return r=e["OS/2"].version2(n,r,a),a.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,a){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,a)}else n.glyf&&e.U._drawGlyf(r,n,a);return a},e.U._drawGlyf=function(n,r,a){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(n,r){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,d=1&n.flags[c],f=1&n.flags[u],p=1&n.flags[h],v=n.xs[c],m=n.ys[c];if(c==o)if(d){if(!f){e.U.P.moveTo(r,v,m);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else f?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+v)/2,(n.ys[u]+m)/2);d?f&&e.U.P.lineTo(r,v,m):p?e.U.P.qcurveTo(r,v,m,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,v,m,(v+n.xs[h])/2,(m+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var d=l.crds[h],f=l.crds[h+1];a.crds.push(d*u.a+f*u.b+u.tx),a.crds.push(d*u.c+f*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,r){var a=e._lctf.getInterval(r,n);return a==-1?0:r[a+2]},e.U._applySubs=function(n,r,a,o){for(var l=n.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(a.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(a.ltype==4)for(var d=h.vals[u],f=0;f<d.length;f++){var p=d[f],v=p.chain.length;if(!(v>l)){for(var m=!0,g=0,y=0;y<v;y++){for(;n[r+g+(1+y)]==-1;)g++;p.chain[y]!=n[r+g+(1+y)]&&(m=!1)}if(m){for(n[r]=p.nglyph,y=0;y<v+g;y++)n[r+y+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var x=e._lctf.getInterval(h.cDef,n[r]),_=h.cDef[x+2],S=h.scset[_],w=0;w<S.length;w++){var A=S[w],E=A.input;if(!(E.length>l)){for(m=!0,y=0;y<E.length;y++){var b=e._lctf.getInterval(h.cDef,n[r+1+y]);if(x==-1&&h.cDef[b+2]!=E[y]){m=!1;break}}if(m){var M=A.substLookupRecords;for(f=0;f<M.length;f+=2)M[f],M[f+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var L=h.lookupRec;for(w=0;w<L.length;w+=2){x=L[w];var I=o[L[w+1]];e.U._applySubs(n,r+x,I,o)}}}}},e.U._glsCovered=function(n,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,d=e.U.glyphToPath(n,u),f=0;f<d.crds.length;f+=2)o.crds.push(d.crds[f]+l),o.crds.push(d.crds[f+1]);for(a&&o.cmds.push(a),f=0;f<d.cmds.length;f++)o.cmds.push(d.cmds[f]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,a){n.cmds.push("M"),n.crds.push(r,a)},e.U.P.lineTo=function(n,r,a){n.cmds.push("L"),n.crds.push(r,a)},e.U.P.curveTo=function(n,r,a,o,l,c,u){n.cmds.push("C"),n.crds.push(r,a,o,l,c,u)},e.U.P.qcurveTo=function(n,r,a,o,l){n.cmds.push("Q"),n.crds.push(r,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,a,o,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,d=r.width,f=r.open,p=0,v=r.x,m=r.y,g=0,y=0,x=0,_=0,S=0,w=0,A=0,E=0,b=0,M=0,L={val:0,size:0};p<n.length;){e.CFF.getCharString(n,p,L);var I=L.val;if(p+=L.size,I=="o1"||I=="o18")c.length%2!=0&&!h&&(d=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(I=="o3"||I=="o23")c.length%2!=0&&!h&&(d=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(I=="o4")c.length>1&&!h&&(d=c.shift()+o.nominalWidthX,h=!0),f&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),f=!0;else if(I=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(I=="o6"||I=="o7")for(var U=c.length,F=I=="o6",V=0;V<U;V++){var B=c.shift();F?v+=B:m+=B,F=!F,e.U.P.lineTo(l,v,m)}else if(I=="o8"||I=="o24"){U=c.length;for(var H=0;H+6<=U;)g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),v=x+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,g,y,x,_,v,m),H+=6;I=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(I=="o11")break;if(I=="o1234"||I=="o1235"||I=="o1236"||I=="o1237")I=="o1234"&&(y=m,x=(g=v+c.shift())+c.shift(),M=_=y+c.shift(),w=_,E=m,v=(A=(S=(b=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,y,x,_,b,M),e.U.P.curveTo(l,S,w,A,E,v,m)),I=="o1235"&&(g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),b=x+c.shift(),M=_+c.shift(),S=b+c.shift(),w=M+c.shift(),A=S+c.shift(),E=w+c.shift(),v=A+c.shift(),m=E+c.shift(),c.shift(),e.U.P.curveTo(l,g,y,x,_,b,M),e.U.P.curveTo(l,S,w,A,E,v,m)),I=="o1236"&&(g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),M=_=y+c.shift(),w=_,A=(S=(b=x+c.shift())+c.shift())+c.shift(),E=w+c.shift(),v=A+c.shift(),e.U.P.curveTo(l,g,y,x,_,b,M),e.U.P.curveTo(l,S,w,A,E,v,m)),I=="o1237"&&(g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),b=x+c.shift(),M=_+c.shift(),S=b+c.shift(),w=M+c.shift(),A=S+c.shift(),E=w+c.shift(),Math.abs(A-v)>Math.abs(E-m)?v=A+c.shift():m=E+c.shift(),e.U.P.curveTo(l,g,y,x,_,b,M),e.U.P.curveTo(l,S,w,A,E,v,m));else if(I=="o14"){if(c.length>0&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),c.length==4){var Y=c.shift(),q=c.shift(),X=c.shift(),N=c.shift(),W=e.CFF.glyphBySE(a,X),K=e.CFF.glyphBySE(a,N);e.U._drawCFF(a.CharStrings[W],r,a,o,l),r.x=Y,r.y=q,e.U._drawCFF(a.CharStrings[K],r,a,o,l)}f&&(e.U.P.closePath(l),f=!1)}else if(I=="o19"||I=="o20")c.length%2!=0&&!h&&(d=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,p+=u+7>>3;else if(I=="o21")c.length>2&&!h&&(d=c.shift()+o.nominalWidthX,h=!0),m+=c.pop(),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),f=!0;else if(I=="o22")c.length>1&&!h&&(d=c.shift()+o.nominalWidthX,h=!0),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),f=!0;else if(I=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),v=x+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,g,y,x,_,v,m)}else if(I=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)g=v,y=m+c.shift(),v=x=g+c.shift(),m=(_=y+c.shift())+c.shift(),e.U.P.curveTo(l,g,y,x,_,v,m);else if(I=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)y=m,x=(g=v+c.shift())+c.shift(),_=y+c.shift(),v=x+c.shift(),m=_,e.U.P.curveTo(l,g,y,x,_,v,m);else if(I=="o10"||I=="o29"){var re=I=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var te=c.pop(),z=re.Subrs[te+re.Bias];r.x=v,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=f,e.U._drawCFF(z,r,a,o,l),v=r.x,m=r.y,u=r.nStems,h=r.haveWidth,d=r.width,f=r.open}}else if(I=="o30"||I=="o31"){var k=c.length,J=(H=0,I=="o31");for(H+=k-(U=-3&k);H<U;)J?(y=m,x=(g=v+c.shift())+c.shift(),m=(_=y+c.shift())+c.shift(),U-H==5?(v=x+c.shift(),H++):v=x,J=!1):(g=v,y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),v=x+c.shift(),U-H==5?(m=_+c.shift(),H++):m=_,J=!0),e.U.P.curveTo(l,g,y,x,_,v,m),H+=4}else{if((I+"").charAt(0)=="o")throw console.debug("Unknown operation: "+I,n),I;c.push(I)}}}r.x=v,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=f};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr}function uC(){return(function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(I,U){for(var F=new t(31),V=0;V<31;++V)F[V]=U+=1<<I[V-1];var B=new i(F[30]);for(V=1;V<30;++V)for(var H=F[V];H<F[V+1];++H)B[H]=H-F[V]<<5|V;return[F,B]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(r,0)[0],d=new t(32768),f=0;f<32768;++f){var p=(43690&f)>>>1|(21845&f)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,d[f]=((65280&p)>>>8|(255&p)<<8)>>>1}var v=function(I,U,F){for(var V=I.length,B=0,H=new t(U);B<V;++B)++H[I[B]-1];var Y,q=new t(U);for(B=0;B<U;++B)q[B]=q[B-1]+H[B-1]<<1;{Y=new t(1<<U);var X=15-U;for(B=0;B<V;++B)if(I[B])for(var N=B<<4|I[B],W=U-I[B],K=q[I[B]-1]++<<W,re=K|(1<<W)-1;K<=re;++K)Y[d[K]>>>X]=N}return Y},m=new e(288);for(f=0;f<144;++f)m[f]=8;for(f=144;f<256;++f)m[f]=9;for(f=256;f<280;++f)m[f]=7;for(f=280;f<288;++f)m[f]=8;var g=new e(32);for(f=0;f<32;++f)g[f]=5;var y=v(m,9),x=v(g,5),_=function(I){for(var U=I[0],F=1;F<I.length;++F)I[F]>U&&(U=I[F]);return U},S=function(I,U,F){var V=U/8|0;return(I[V]|I[V+1]<<8)>>(7&U)&F},w=function(I,U){var F=U/8|0;return(I[F]|I[F+1]<<8|I[F+2]<<16)>>(7&U)},A=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(I,U,F){var V=new Error(U||A[I]);if(V.code=I,Error.captureStackTrace&&Error.captureStackTrace(V,E),!F)throw V;return V},b=function(I,U,F){var V=I.length;if(!V||F&&!F.l&&V<5)return U||new e(0);var B=!U||F,H=!F||F.i;F||(F={}),U||(U=new e(3*V));var Y,q=function(Te){var Le=U.length;if(Te>Le){var Ee=new e(Math.max(2*Le,Te));Ee.set(U),U=Ee}},X=F.f||0,N=F.p||0,W=F.b||0,K=F.l,re=F.d,te=F.m,z=F.n,k=8*V;do{if(!K){F.f=X=S(I,N,1);var J=S(I,N+1,3);if(N+=3,!J){var ve=I[(he=((Y=N)/8|0)+(7&Y&&1)+4)-4]|I[he-3]<<8,pe=he+ve;if(pe>V){H&&E(0);break}B&&q(W+ve),U.set(I.subarray(he,pe),W),F.b=W+=ve,F.p=N=8*pe;continue}if(J==1)K=y,re=x,te=9,z=5;else if(J==2){var be=S(I,N,31)+257,ge=S(I,N+10,15)+4,De=be+S(I,N+5,31)+1;N+=14;for(var se=new e(De),ie=new e(19),ne=0;ne<ge;++ne)ie[a[ne]]=S(I,N+3*ne,7);N+=3*ge;var de=_(ie),R=(1<<de)-1,Ae=v(ie,de);for(ne=0;ne<De;){var he,ae=Ae[S(I,N,R)];if(N+=15&ae,(he=ae>>>4)<16)se[ne++]=he;else{var me=0,C=0;for(he==16?(C=3+S(I,N,3),N+=2,me=se[ne-1]):he==17?(C=3+S(I,N,7),N+=3):he==18&&(C=11+S(I,N,127),N+=7);C--;)se[ne++]=me}}var T=se.subarray(0,be),O=se.subarray(be);te=_(T),z=_(O),K=v(T,te),re=v(O,z)}else E(1);if(N>k){H&&E(0);break}}B&&q(W+131072);for(var $=(1<<te)-1,Q=(1<<z)-1,j=N;;j=N){var we=(me=K[w(I,N)&$])>>>4;if((N+=15&me)>k){H&&E(0);break}if(me||E(2),we<256)U[W++]=we;else{if(we==256){j=N,K=null;break}var _e=we-254;if(we>264){var Re=n[ne=we-257];_e=S(I,N,(1<<Re)-1)+c[ne],N+=Re}var ke=re[w(I,N)&Q],ue=ke>>>4;if(ke||E(3),N+=15&ke,O=h[ue],ue>3&&(Re=r[ue],O+=w(I,N)&(1<<Re)-1,N+=Re),N>k){H&&E(0);break}B&&q(W+131072);for(var Me=W+_e;W<Me;W+=4)U[W]=U[W-O],U[W+1]=U[W+1-O],U[W+2]=U[W+2-O],U[W+3]=U[W+3-O];W=Me}}F.l=K,F.p=j,F.b=W,K&&(X=1,F.m=te,F.d=re,F.n=z)}while(!X);return W==U.length?U:(function(Te,Le,Ee){(Ee==null||Ee>Te.length)&&(Ee=Te.length);var Qe=new(Te instanceof t?t:Te instanceof i?i:e)(Ee-Le);return Qe.set(Te.subarray(Le,Ee)),Qe})(U,0,W)},M=new e(0),L=typeof TextDecoder<"u"&&new TextDecoder;try{L.decode(M,{stream:!0})}catch{}return s.convert_streams=function(I){var U=new DataView(I),F=0;function V(){var be=U.getUint16(F);return F+=2,be}function B(){var be=U.getUint32(F);return F+=4,be}function H(be){ve.setUint16(pe,be),pe+=2}function Y(be){ve.setUint32(pe,be),pe+=4}for(var q={signature:B(),flavor:B(),length:B(),numTables:V(),reserved:V(),totalSfntSize:B(),majorVersion:V(),minorVersion:V(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},X=0;Math.pow(2,X)<=q.numTables;)X++;X--;for(var N=16*Math.pow(2,X),W=16*q.numTables-N,K=12,re=[],te=0;te<q.numTables;te++)re.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),K+=16;var z,k=new Uint8Array(12+16*re.length+re.reduce((function(be,ge){return be+ge.origLength+4}),0)),J=k.buffer,ve=new DataView(J),pe=0;return Y(q.flavor),H(q.numTables),H(N),H(X),H(W),re.forEach((function(be){Y(be.tag),Y(be.origChecksum),Y(K),Y(be.origLength),be.outOffset=K,(K+=be.origLength)%4!=0&&(K+=4-K%4)})),re.forEach((function(be){var ge,De=I.slice(be.offset,be.offset+be.compLength);if(be.compLength!=be.origLength){var se=new Uint8Array(be.origLength);ge=new Uint8Array(De,2),b(ge,se)}else se=new Uint8Array(De);k.set(se,be.outOffset);var ie=0;(K=be.outOffset+be.origLength)%4!=0&&(ie=4-K%4),k.set(new Uint8Array(ie).buffer,be.outOffset+be.origLength),z=K+ie})),J.slice(0,z)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams}function hC(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,a=4,o=8,l=16,c=32;let u;function h(A){if(!u){const E={R:r,L:n,D:a,C:l,U:c,T:o};u=new Map;for(let b in i){let M=0;i[b].split(",").forEach(L=>{let[I,U]=L.split("+");I=parseInt(I,36),U=U?parseInt(U,36):0,u.set(M+=I,E[b]);for(let F=U;F--;)u.set(++M,E[b])})}}return u.get(A)||c}const d=1,f=2,p=3,v=4,m=[null,"isol","init","fina","medi"];function g(A){const E=new Uint8Array(A.length);let b=c,M=d,L=-1;for(let I=0;I<A.length;I++){const U=A.codePointAt(I);let F=h(U)|0,V=d;F&o||(b&(n|a|l)?F&(r|a|l)?(V=p,(M===d||M===p)&&E[L]++):F&(n|c)&&(M===f||M===v)&&E[L]--:b&(r|c)&&(M===f||M===v)&&E[L]--,M=E[I]=V,b=F,L=I,U>65535&&I++)}return E}function y(A,E){const b=[];for(let L=0;L<E.length;L++){const I=E.codePointAt(L);I>65535&&L++,b.push(s.U.codeToGlyph(A,I))}const M=A.GSUB;if(M){const{lookupList:L,featureList:I}=M;let U;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];I.forEach(B=>{if(F.test(B.tag))for(let H=0;H<B.tab.length;H++){if(V[B.tab[H]])continue;V[B.tab[H]]=!0;const Y=L[B.tab[H]],q=/^(isol|init|fina|medi)$/.test(B.tag);q&&!U&&(U=g(E));for(let X=0;X<b.length;X++)(!U||!q||m[U[X]]===B.tag)&&s.U._applySubs(b,X,Y,L)}})}return b}function x(A,E){const b=new Int16Array(E.length*3);let M=0;for(;M<E.length;M++){const F=E[M];if(F===-1)continue;b[M*3+2]=A.hmtx.aWidth[F];const V=A.GPOS;if(V){const B=V.lookupList;for(let H=0;H<B.length;H++){const Y=B[H];for(let q=0;q<Y.tabs.length;q++){const X=Y.tabs[q];if(Y.ltype===1){if(s._lctf.coverageIndex(X.coverage,F)!==-1&&X.pos){U(X.pos,M);break}}else if(Y.ltype===2){let N=null,W=L();if(W!==-1){const K=s._lctf.coverageIndex(X.coverage,E[W]);if(K!==-1){if(X.fmt===1){const re=X.pairsets[K];for(let te=0;te<re.length;te++)re[te].gid2===F&&(N=re[te])}else if(X.fmt===2){const re=s.U._getGlyphClass(E[W],X.classDef1),te=s.U._getGlyphClass(F,X.classDef2);N=X.matrix[re][te]}if(N){N.val1&&U(N.val1,W),N.val2&&U(N.val2,M);break}}}}else if(Y.ltype===4){const N=s._lctf.coverageIndex(X.markCoverage,F);if(N!==-1){const W=L(I),K=W===-1?-1:s._lctf.coverageIndex(X.baseCoverage,E[W]);if(K!==-1){const re=X.markArray[N],te=X.baseArray[K][re.markClass];b[M*3]=te.x-re.x+b[W*3]-b[W*3+2],b[M*3+1]=te.y-re.y+b[W*3+1];break}}}else if(Y.ltype===6){const N=s._lctf.coverageIndex(X.mark1Coverage,F);if(N!==-1){const W=L();if(W!==-1){const K=E[W];if(_(A,K)===3){const re=s._lctf.coverageIndex(X.mark2Coverage,K);if(re!==-1){const te=X.mark1Array[N],z=X.mark2Array[re][te.markClass];b[M*3]=z.x-te.x+b[W*3]-b[W*3+2],b[M*3+1]=z.y-te.y+b[W*3+1];break}}}}}}}}else if(A.kern&&!A.cff){const B=L();if(B!==-1){const H=A.kern.glyph1.indexOf(E[B]);if(H!==-1){const Y=A.kern.rval[H].glyph2.indexOf(F);Y!==-1&&(b[B*3+2]+=A.kern.rval[H].vals[Y])}}}}return b;function L(F){for(let V=M-1;V>=0;V--)if(E[V]!==-1&&(!F||F(E[V])))return V;return-1}function I(F){return _(A,F)===1}function U(F,V){for(let B=0;B<3;B++)b[V*3+B]+=F[B]||0}}function _(A,E){const b=A.GDEF&&A.GDEF.glyphClassDef;return b?s.U._getGlyphClass(E,b):0}function S(...A){for(let E=0;E<A.length;E++)if(typeof A[E]=="number")return A[E]}function w(A){const E=Object.create(null),b=A["OS/2"],M=A.hhea,L=A.head.unitsPerEm,I=S(b&&b.sTypoAscender,M&&M.ascender,L),U={unitsPerEm:L,ascender:I,descender:S(b&&b.sTypoDescender,M&&M.descender,0),capHeight:S(b&&b.sCapHeight,I),xHeight:S(b&&b.sxHeight,I),lineGap:S(b&&b.sTypoLineGap,M&&M.lineGap),supportsCodePoint(F){return s.U.codeToGlyph(A,F)>0},forEachGlyph(F,V,B,H){let Y=0;const q=1/U.unitsPerEm*V,X=y(A,F);let N=0;const W=x(A,X);return X.forEach((K,re)=>{if(K!==-1){let te=E[K];if(!te){const{cmds:z,crds:k}=s.U.glyphToPath(A,K);let J="",ve=0;for(let se=0,ie=z.length;se<ie;se++){const ne=t[z[se]];J+=z[se];for(let de=1;de<=ne;de++)J+=(de>1?",":"")+k[ve++]}let pe,be,ge,De;if(k.length){pe=be=1/0,ge=De=-1/0;for(let se=0,ie=k.length;se<ie;se+=2){let ne=k[se],de=k[se+1];ne<pe&&(pe=ne),de<be&&(be=de),ne>ge&&(ge=ne),de>De&&(De=de)}}else pe=ge=be=De=0;te=E[K]={index:K,advanceWidth:A.hmtx.aWidth[K],xMin:pe,yMin:be,xMax:ge,yMax:De,path:J}}H.call(null,te,Y+W[re*3]*q,W[re*3+1]*q,N),Y+=W[re*3+2]*q,B&&(Y+=B*V)}N+=F.codePointAt(N)>65535?2:1}),Y}};return U}return function(E){const b=new Uint8Array(E,0,4),M=s._bin.readASCII(b,0,4);if(M==="wOFF")E=e(E);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return w(s.parse(E)[0])}}const dC=ha({name:"Typr Font Parser",dependencies:[cC,uC,hC],init(s,e,t){const i=s(),n=e();return t(i,n)}});function fC(){return(function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(x){var _=x>>5;this.buckets.set(_,(this.buckets.get(_)||0)|1<<(31&x))},e.prototype.has=function(x){var _=this.buckets.get(x>>5);return _!==void 0&&(_&1<<(31&x))!=0},e.prototype.serialize=function(){var x=[];return this.buckets.forEach((function(_,S){x.push((+S).toString(36)+":"+_.toString(36))})),x.join(",")},e.prototype.deserialize=function(x){var _=this;this.buckets.clear(),x.split(",").forEach((function(S){var w=S.split(":");_.buckets.set(parseInt(w[0],36),parseInt(w[1],36))}))};var t=Math.pow(2,8),i=t-1,n=~i;function r(x){var _=(function(w){return w&n})(x).toString(16),S=(function(w){return(w&n)+t-1})(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+_+"-"+S+".json"}function a(x,_){var S=x&i,w=_.codePointAt(S/6|0);return((w=(w||48)-48)&1<<S%6)!=0}function o(x,_){var S;(S=x,S.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(w){return w.split("-").map((function(A){return parseInt(A.trim(),16)}))}))).forEach((function(w){var A=w[0],E=w[1];E===void 0&&(E=A),_(A,E)}))}function l(x,_){o(x,(function(S,w){for(var A=S;A<=w;A++)_(A)}))}var c={},u={},h=new WeakMap,d="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function f(x){var _=h.get(x);return _||(_=new e,l(x.ranges,(function(S){return _.add(S)})),h.set(x,_)),_}var p,v=new Map;function m(x,_,S){return x[_]?_:x[S]?S:(function(w){for(var A in w)return A})(x)}function g(x,_){var S=_;if(!x.includes(S)){S=1/0;for(var w=0;w<x.length;w++)Math.abs(x[w]-_)<Math.abs(S-_)&&(S=x[w])}return S}function y(x){return p||(p=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(_){p.add(_)}))),p.has(x)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(x,_){_===void 0&&(_={});var S,w=_.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(S=x)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(S)?"ja":"en");var A=_.category;A===void 0&&(A="sans-serif");var E=_.style;E===void 0&&(E="normal");var b=_.weight;b===void 0&&(b=400);var M=(_.dataUrl||d).replace(/\/$/g,""),L=new Map,I=new Uint8Array(x.length),U={},F={},V=new Array(x.length),B=new Map,H=!1;function Y(N){var W=v.get(N);return W||(W=fetch(M+"/"+N).then((function(K){if(!K.ok)throw new Error(K.statusText);return K.json().then((function(re){if(!Array.isArray(re)||re[0]!==1)throw new Error("Incorrect schema version; need 1, got "+re[0]);return re[1]}))})).catch((function(K){if(M!==d)return H||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+K.message),H=!0),M=d,v.delete(N),Y(N);throw K})),v.set(N,W)),W}for(var q=function(N){var W=x.codePointAt(N),K=r(W);V[N]=K,c[K]||B.has(K)||B.set(K,Y(K).then((function(re){c[K]=re}))),W>65535&&(N++,X=N)},X=0;X<x.length;X++)q(X);return Promise.all(B.values()).then((function(){B.clear();for(var N=function(K){var re=x.codePointAt(K),te=null,z=c[V[K]],k=void 0;for(var J in z){var ve=F[J];if(ve===void 0&&(ve=F[J]=new RegExp(J).test(w||"en")),ve){for(var pe in k=J,z[J])if(a(re,z[J][pe])){te=pe;break}break}}if(!te){e:for(var be in z)if(be!==k){for(var ge in z[be])if(a(re,z[be][ge])){te=ge;break e}}}te||(console.debug("No font coverage for U+"+re.toString(16)),te="latin"),V[K]=te,u[te]||B.has(te)||B.set(te,Y("font-meta/"+te+".json").then((function(De){u[te]=De}))),re>65535&&(K++,W=K)},W=0;W<x.length;W++)N(W);return Promise.all(B.values())})).then((function(){for(var N,W=null,K=0;K<x.length;K++){var re=x.codePointAt(K);if(W&&(y(re)||f(W).has(re)))I[K]=I[K-1];else{W=u[V[K]];var te=U[W.id];if(!te){var z=W.typeforms,k=m(z,A,"sans-serif"),J=m(z[k],E,"normal"),ve=g((N=z[k])===null||N===void 0?void 0:N[J],b);te=U[W.id]=M+"/font-files/"+W.id+"/"+k+"."+J+"."+ve+".woff"}var pe=L.get(te);pe==null&&(pe=L.size,L.set(te,pe)),I[K]=pe}re>65535&&(K++,I[K]=I[K-1])}return{fontUrls:Array.from(L.keys()),chars:I}}))},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}function pC(s,e){const t=Object.create(null),i=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):i[a]?i[a].push(o):(i[a]=[o],n(a,c=>{c.src=a,t[a]=c,i[a].forEach(u=>u(c)),delete i[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:d}={}){const f=new Uint8Array(a.length),p=[];a.length||y();const v=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(_=>!_.lang||_.lang.test(l)).reverse(),c.length){let A=0;(function E(b=0){for(let M=b,L=a.length;M<L;M++){const I=a.codePointAt(M);if(A===1&&p[f[M-1]].supportsCodePoint(I)||M>0&&/\s/.test(a[M]))f[M]=f[M-1],A===2&&(m[m.length-1][1]=M);else for(let U=f[M],F=c.length;U<=F;U++)if(U===F){const V=A===2?m[m.length-1]:m[m.length]=[M,M];V[1]=M,A=2}else{f[M]=U;const{src:V,unicodeRange:B}=c[U];if(!B||x(I,B)){const H=t[V];if(!H){r(V,()=>{E(M)});return}if(H.supportsCodePoint(I)){let Y=v.get(H);typeof Y!="number"&&(Y=p.length,p.push(H),v.set(H,Y)),f[M]=Y,A=1;break}}}I>65535&&M+1<L&&(f[M+1]=f[M],M++,A===2&&(m[m.length-1][1]=M))}g()})()}else m.push([0,a.length-1]),g();function g(){if(m.length){const _=m.map(S=>a.substring(S[0],S[1]+1)).join(`
`);e.getFontsForString(_,{lang:l||void 0,style:u,weight:h,dataUrl:d}).then(({fontUrls:S,chars:w})=>{const A=p.length;let E=0;m.forEach(M=>{for(let L=0,I=M[1]-M[0];L<=I;L++)f[M[0]+L]=w[E++]+A;E++});let b=0;S.forEach((M,L)=>{r(M,I=>{p[L+A]=I,++b===S.length&&y()})})})}else y()}function y(){o({chars:f,fonts:p})}function x(_,S){for(let w=0;w<S.length;w++){const[A,E=A]=S[w];if(A<=_&&_<=E)return!0}return!1}}}const mC=ha({name:"FontResolver",dependencies:[pC,dC,fC],init(s,e,t){return s(e,t())}});function gC(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:p,lang:v,fonts:m,style:g,weight:y,preResolvedFonts:x,unicodeFontsURL:_},S){const w=({chars:A,fonts:E})=>{let b,M;const L=[];for(let I=0;I<A.length;I++)A[I]!==M?(M=A[I],L.push(b={start:I,end:I,fontObj:E[A[I]]})):b.end=I;S(L)};x?w(x):s(p,w,{lang:v,fonts:m,style:g,weight:y,unicodeFontsURL:_})}function o({text:p="",font:v,lang:m,sdfGlyphSize:g=64,fontSize:y=400,fontWeight:x=1,fontStyle:_="normal",letterSpacing:S=0,lineHeight:w="normal",maxWidth:A=1/0,direction:E,textAlign:b="left",textIndent:M=0,whiteSpace:L="normal",overflowWrap:I="normal",anchorX:U=0,anchorY:F=0,metricsOnly:V=!1,unicodeFontsURL:B,preResolvedFonts:H=null,includeCaretPositions:Y=!1,chunkedBoundsSize:q=8192,colorRanges:X=null},N){const W=h(),K={fontLoad:0,typesetting:0};p.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,S=+S,A=+A,w=w||"normal",M=+M,a({text:p,lang:m,style:_,weight:x,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:B,preResolvedFonts:H},re=>{K.fontLoad=h()-W;const te=isFinite(A);let z=null,k=null,J=null,ve=null,pe=null,be=null,ge=null,De=null,se=0,ie=0,ne=L!=="nowrap";const de=new Map,R=h();let Ae=M,he=0,ae=new d;const me=[ae];re.forEach(Q=>{const{fontObj:j}=Q,{ascender:we,descender:_e,unitsPerEm:Re,lineGap:ke,capHeight:ue,xHeight:Me}=j;let Te=de.get(j);if(!Te){const ye=y/Re,Se=w==="normal"?(we-_e+ke)*ye:w*y,Be=(Se-(we-_e)*ye)/2,xe=Math.min(Se,(we-_e)*ye),ce=(we+_e)/2*ye+xe/2;Te={index:de.size,src:j.src,fontObj:j,fontSizeMult:ye,unitsPerEm:Re,ascender:we*ye,descender:_e*ye,capHeight:ue*ye,xHeight:Me*ye,lineHeight:Se,baseline:-Be-we*ye,caretTop:ce,caretBottom:ce-xe},de.set(j,Te)}const{fontSizeMult:Le}=Te,Ee=p.slice(Q.start,Q.end+1);let Qe,G;j.forEachGlyph(Ee,y,S,(ye,Se,Be,xe)=>{Se+=he,xe+=Q.start,Qe=Se,G=ye;const ce=p.charAt(xe),Ce=ye.advanceWidth*Le,Ge=ae.count;let Ve;if("isEmpty"in ye||(ye.isWhitespace=!!ce&&new RegExp(n).test(ce),ye.canBreakAfter=!!ce&&r.test(ce),ye.isEmpty=ye.xMin===ye.xMax||ye.yMin===ye.yMax||i.test(ce)),!ye.isWhitespace&&!ye.isEmpty&&ie++,ne&&te&&!ye.isWhitespace&&Se+Ce+Ae>A&&Ge){if(ae.glyphAt(Ge-1).glyphObj.canBreakAfter)Ve=new d,Ae=-Se;else for(let wt=Ge;wt--;)if(wt===0&&I==="break-word"){Ve=new d,Ae=-Se;break}else if(ae.glyphAt(wt).glyphObj.canBreakAfter){Ve=ae.splitAt(wt+1);const At=Ve.glyphAt(0).x;Ae-=At;for(let Ot=Ve.count;Ot--;)Ve.glyphAt(Ot).x-=At;break}Ve&&(ae.isSoftWrapped=!0,ae=Ve,me.push(ae),se=A)}let $e=ae.glyphAt(ae.count);$e.glyphObj=ye,$e.x=Se+Ae,$e.y=Be,$e.width=Ce,$e.charIndex=xe,$e.fontData=Te,ce===`
`&&(ae=new d,me.push(ae),Ae=-(Se+Ce+S*y)+M)}),he=Qe+G.advanceWidth*Le+S*y});let C=0;me.forEach(Q=>{let j=!0;for(let we=Q.count;we--;){const _e=Q.glyphAt(we);j&&!_e.glyphObj.isWhitespace&&(Q.width=_e.x+_e.width,Q.width>se&&(se=Q.width),j=!1);let{lineHeight:Re,capHeight:ke,xHeight:ue,baseline:Me}=_e.fontData;Re>Q.lineHeight&&(Q.lineHeight=Re);const Te=Me-Q.baseline;Te<0&&(Q.baseline+=Te,Q.cap+=Te,Q.ex+=Te),Q.cap=Math.max(Q.cap,Q.baseline+ke),Q.ex=Math.max(Q.ex,Q.baseline+ue)}Q.baseline-=C,Q.cap-=C,Q.ex-=C,C+=Q.lineHeight});let T=0,O=0;if(U&&(typeof U=="number"?T=-U:typeof U=="string"&&(T=-se*(U==="left"?0:U==="center"?.5:U==="right"?1:c(U)))),F&&(typeof F=="number"?O=-F:typeof F=="string"&&(O=F==="top"?0:F==="top-baseline"?-me[0].baseline:F==="top-cap"?-me[0].cap:F==="top-ex"?-me[0].ex:F==="middle"?C/2:F==="bottom"?C:F==="bottom-baseline"?-me[me.length-1].baseline:c(F)*C)),!V){const Q=e.getEmbeddingLevels(p,E);z=new Uint16Array(ie),k=new Uint8Array(ie),J=new Float32Array(ie*2),ve={},ge=[1/0,1/0,-1/0,-1/0],De=[],Y&&(be=new Float32Array(p.length*4)),X&&(pe=new Uint8Array(ie*3));let j=0,we=-1,_e=-1,Re,ke;if(me.forEach((ue,Me)=>{let{count:Te,width:Le}=ue;if(Te>0){let Ee=0;for(let xe=Te;xe--&&ue.glyphAt(xe).glyphObj.isWhitespace;)Ee++;let Qe=0,G=0;if(b==="center")Qe=(se-Le)/2;else if(b==="right")Qe=se-Le;else if(b==="justify"&&ue.isSoftWrapped){let xe=0;for(let ce=Te-Ee;ce--;)ue.glyphAt(ce).glyphObj.isWhitespace&&xe++;G=(se-Le)/xe}if(G||Qe){let xe=0;for(let ce=0;ce<Te;ce++){let Ce=ue.glyphAt(ce);const Ge=Ce.glyphObj;Ce.x+=Qe+xe,G!==0&&Ge.isWhitespace&&ce<Te-Ee&&(xe+=G,Ce.width+=G)}}const ye=e.getReorderSegments(p,Q,ue.glyphAt(0).charIndex,ue.glyphAt(ue.count-1).charIndex);for(let xe=0;xe<ye.length;xe++){const[ce,Ce]=ye[xe];let Ge=1/0,Ve=-1/0;for(let $e=0;$e<Te;$e++)if(ue.glyphAt($e).charIndex>=ce){let wt=$e,At=$e;for(;At<Te;At++){let Ot=ue.glyphAt(At);if(Ot.charIndex>Ce)break;At<Te-Ee&&(Ge=Math.min(Ge,Ot.x),Ve=Math.max(Ve,Ot.x+Ot.width))}for(let Ot=wt;Ot<At;Ot++){const Mn=ue.glyphAt(Ot);Mn.x=Ve-(Mn.x+Mn.width-Ge)}break}}let Se;const Be=xe=>Se=xe;for(let xe=0;xe<Te;xe++){const ce=ue.glyphAt(xe);Se=ce.glyphObj;const Ce=Se.index,Ge=Q.levels[ce.charIndex]&1;if(Ge){const Ve=e.getMirroredCharacter(p[ce.charIndex]);Ve&&ce.fontData.fontObj.forEachGlyph(Ve,0,0,Be)}if(Y){const{charIndex:Ve,fontData:$e}=ce,wt=ce.x+T,At=ce.x+ce.width+T;be[Ve*4]=Ge?At:wt,be[Ve*4+1]=Ge?wt:At,be[Ve*4+2]=ue.baseline+$e.caretBottom+O,be[Ve*4+3]=ue.baseline+$e.caretTop+O;const Ot=Ve-we;Ot>1&&u(be,we,Ot),we=Ve}if(X){const{charIndex:Ve}=ce;for(;Ve>_e;)_e++,X.hasOwnProperty(_e)&&(ke=X[_e])}if(!Se.isWhitespace&&!Se.isEmpty){const Ve=j++,{fontSizeMult:$e,src:wt,index:At}=ce.fontData,Ot=ve[wt]||(ve[wt]={});Ot[Ce]||(Ot[Ce]={path:Se.path,pathBounds:[Se.xMin,Se.yMin,Se.xMax,Se.yMax]});const Mn=ce.x+T,Kn=ce.y+ue.baseline+O;J[Ve*2]=Mn,J[Ve*2+1]=Kn;const ri=Mn+Se.xMin*$e,si=Kn+Se.yMin*$e,xi=Mn+Se.xMax*$e,tn=Kn+Se.yMax*$e;ri<ge[0]&&(ge[0]=ri),si<ge[1]&&(ge[1]=si),xi>ge[2]&&(ge[2]=xi),tn>ge[3]&&(ge[3]=tn),Ve%q===0&&(Re={start:Ve,end:Ve,rect:[1/0,1/0,-1/0,-1/0]},De.push(Re)),Re.end++;const Vt=Re.rect;if(ri<Vt[0]&&(Vt[0]=ri),si<Vt[1]&&(Vt[1]=si),xi>Vt[2]&&(Vt[2]=xi),tn>Vt[3]&&(Vt[3]=tn),z[Ve]=Ce,k[Ve]=At,X){const yi=Ve*3;pe[yi]=ke>>16&255,pe[yi+1]=ke>>8&255,pe[yi+2]=ke&255}}}}}),be){const ue=p.length-we;ue>1&&u(be,we,ue)}}const $=[];de.forEach(({index:Q,src:j,unitsPerEm:we,ascender:_e,descender:Re,lineHeight:ke,capHeight:ue,xHeight:Me})=>{$[Q]={src:j,unitsPerEm:we,ascender:_e,descender:Re,lineHeight:ke,capHeight:ue,xHeight:Me}}),K.typesetting=h()-R,N({glyphIds:z,glyphFontIndices:k,glyphPositions:J,glyphData:ve,fontData:$,caretPositions:be,glyphColors:pe,chunkedBounds:De,fontSize:y,topBaseline:O+me[0].baseline,blockBounds:[T,O-C,T+se,O],visibleBounds:ge,timings:K})})}function l(p,v){o({...p,metricsOnly:!0},m=>{const[g,y,x,_]=m.blockBounds;v({width:x-g,height:_-y})})}function c(p){let v=p.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function u(p,v,m){const g=p[v*4],y=p[v*4+1],x=p[v*4+2],_=p[v*4+3],S=(y-g)/m;for(let w=0;w<m;w++){const A=(v+w)*4;p[A]=g+S*w,p[A+1]=g+S*(w+1),p[A+2]=x,p[A+3]=_}}function h(){return(self.performance||Date).now()}function d(){this.data=[]}const f=["glyphObj","x","y","width","charIndex","fontData"];return d.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(p){let v=d.flyweight;return v.data=this.data,v.index=p,v},splitAt(p){let v=new d;return v.data=this.data.splice(p*f.length),v}},d.flyweight=f.reduce((p,v,m,g)=>(Object.defineProperty(p,v,{get(){return this.data[this.index*f.length+m]},set(y){this.data[this.index*f.length+m]=y}}),p),{data:null,index:0}),{typeset:o,measure:l}}const $r=()=>(self.performance||Date).now(),wu=iv();let km;function vC(s,e,t,i,n,r,a,o,l,c,u=!0){return u?xC(s,e,t,i,n,r,a,o,l,c).then(null,h=>(km||(console.warn("WebGL SDF generation failed, falling back to JS",h),km=!0),Gm(s,e,t,i,n,r,a,o,l,c))):Gm(s,e,t,i,n,r,a,o,l,c)}const Bl=[],_C=5;let vd=0;function sv(){const s=$r();for(;Bl.length&&$r()-s<_C;)Bl.shift()();vd=Bl.length?setTimeout(sv,0):0}const xC=(...s)=>new Promise((e,t)=>{Bl.push(()=>{const i=$r();try{wu.webgl.generateIntoCanvas(...s),e({timing:$r()-i})}catch(n){t(n)}}),vd||(vd=setTimeout(sv,0))}),yC=4,bC=2e3,zm={};let SC=0;function Gm(s,e,t,i,n,r,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+SC++%yC;let h=zm[u];return h||(h=zm[u]={workerModule:ha({name:u,workerId:u,dependencies:[iv,$r],init(d,f){const p=d().javascript.generate;return function(...v){const m=f();return{textureData:p(...v),timing:f()-m}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,i,n,r).then(({textureData:d,timing:f})=>{const p=$r(),v=new Uint8Array(d.length*4);for(let m=0;m<d.length;m++)v[m*4+c]=d[m];return wu.webglUtils.renderImageData(a,v,o,l,s,e,1<<3-c),f+=$r()-p,--h.requests===0&&(h.idleTimer=setTimeout(()=>{$E(u)},bC)),{timing:f}})}function MC(s){s._warm||(wu.webgl.isSupported(s),s._warm=!0)}const TC=wu.webglUtils.resizeWebGLCanvasWithoutClearing,Ha={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},wC=new Ie;function ks(){return(self.performance||Date).now()}const Vm=Object.create(null);function av(s,e){s=CC({},s);const t=ks(),i=[];if(s.font&&i.push({label:"user",src:RC(s.font)}),s.font=i,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Ha.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Ha.unicodeFontsURL,s.colorRanges!=null){let d={};for(let f in s.colorRanges)if(s.colorRanges.hasOwnProperty(f)){let p=s.colorRanges[f];typeof p!="number"&&(p=wC.set(p).getHex()),d[f]=p}s.colorRanges=d}Object.freeze(s);const{textureWidth:n,sdfExponent:r}=Ha,{sdfGlyphSize:a}=s,o=n/a*4;let l=Vm[a];if(!l){const d=document.createElement("canvas");d.width=n,d.height=a*256/o,l=Vm[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:d,sdfTexture:new Rt(d,void 0,void 0,void 0,yt,yt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,AC(l)}const{sdfTexture:c,sdfCanvas:u}=l;cv(s).then(d=>{const{glyphIds:f,glyphFontIndices:p,fontData:v,glyphPositions:m,fontSize:g,timings:y}=d,x=[],_=new Float32Array(f.length*4);let S=0,w=0;const A=ks(),E=v.map(U=>{let F=l.glyphsByFont.get(U.src);return F||l.glyphsByFont.set(U.src,F=new Map),F});f.forEach((U,F)=>{const V=p[F],{src:B,unitsPerEm:H}=v[V];let Y=E[V].get(U);if(!Y){const{path:K,pathBounds:re}=d.glyphData[B][U],te=Math.max(re[2]-re[0],re[3]-re[1])/a*(Ha.sdfMargin*a+.5),z=l.glyphCount++,k=[re[0]-te,re[1]-te,re[2]+te,re[3]+te];E[V].set(U,Y={path:K,atlasIndex:z,sdfViewBox:k}),x.push(Y)}const{sdfViewBox:q}=Y,X=m[w++],N=m[w++],W=g/H;_[S++]=X+q[0]*W,_[S++]=N+q[1]*W,_[S++]=X+q[2]*W,_[S++]=N+q[3]*W,f[F]=Y.atlasIndex}),y.quads=(y.quads||0)+(ks()-A);const b=ks();y.sdf={};const M=u.height,L=Math.ceil(l.glyphCount/o),I=Math.pow(2,Math.ceil(Math.log2(L*a)));I>M&&(console.info(`Increasing SDF texture size ${M}->${I}`),TC(u,n,I),c.dispose()),Promise.all(x.map(U=>ov(U,l,s.gpuAccelerateSDF).then(({timing:F})=>{y.sdf[U.atlasIndex]=F}))).then(()=>{x.length&&!l.contextLost&&(lv(l),c.needsUpdate=!0),y.sdfTotal=ks()-b,y.total=ks()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:a,sdfExponent:r,glyphBounds:_,glyphAtlasIndices:f,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{l.contextLost||MC(u)})}function ov({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Ha,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/i)*i,d=Math.floor(u/(o/i))*i,f=e%4;return vC(i,i,s,t,c,l,n,h,d,f,a)}function AC(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(ov(r,s,!0))})}),Promise.all(i).then(()=>{lv(s),s.sdfTexture.needsUpdate=!0})})}function EC({font:s,characters:e,sdfGlyphSize:t},i){let n=Array.isArray(e)?e.join(`
`):""+e;av({font:s,sdfGlyphSize:t,text:n},i)}function CC(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Pl;function RC(s){return Pl||(Pl=typeof document>"u"?{}:document.createElement("a")),Pl.href=s,Pl.href}function lv(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==i*n*4)&&(a=new Uint8Array(i*n*4),t.image={width:i,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,a)}}const PC=ha({name:"Typesetter",dependencies:[gC,mC,tC],init(s,e,t){return s(e,t())}}),cv=ha({name:"Typesetter",dependencies:[PC],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});cv.onMainThread;const Hm={};function IC(s){let e=Hm[s];return e||(e=Hm[s]=new Xi(1,1,s,s).translate(.5,.5,0)),e}const DC="aTroikaGlyphBounds",Wm="aTroikaGlyphIndex",LC="aTroikaGlyphColor";class UC extends ff{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Ft,this.boundingBox=new Lt}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=IC(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(DC,e,4),this.updateAttributeData(Wm,t,1),this.updateAttributeData(LC,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:a,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,d=Math.abs(t),f=e[0]/d,p=e[2]/d,v=r((f+u)/h)!==r((p+u)/h)?-d:a(l(f)*d,l(p)*d),m=r((f-u)/h)!==r((p-u)/h)?d:o(l(f)*d,l(p)*d),g=r((f+n)/h)!==r((p+n)/h)?d*2:o(d-c(f)*d,d-c(p)*d);i.min.set(v,e[1],t<0?-g:0),i.max.set(m,e[3],t<0?0:g)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Wm).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new gr(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const NC=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,FC=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,OC=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,BC=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function kC(s){const e=gd(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new fe},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new pt(0,0,0,0)},uTroikaClipRect:{value:new pt(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new fe},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ie},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new rt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:NC,vertexTransform:FC,fragmentDefs:OC,fragmentColorTransform:BC,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(rv,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Af=new bn({color:16777215,side:kn,transparent:!0}),Xm=8421504,Ym=new Ye,Il=new D,Oh=new D,Ba=[],zC=new D,Bh="+x+y";function qm(s){return Array.isArray(s)?s[0]:s}let uv=()=>{const s=new Tt(new Xi(1,1),Af);return uv=()=>s,s},hv=()=>{const s=new Tt(new Xi(1,1,32,1),Af);return hv=()=>s,s};const GC={type:"syncstart"},VC={type:"synccomplete"},dv=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],HC=dv.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");let fv=class extends Tt{constructor(){const e=new UC;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Xm,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Bh,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(GC),av({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(VC),e&&e()})))}onBeforeRender(e,t,i,n,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return kC(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Af.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return qm(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return qm(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,d,f,p,v=0,m=0;if(t){let{outlineWidth:y,outlineOffsetX:x,outlineOffsetY:_,outlineBlur:S,outlineOpacity:w}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(S)||0),d=w,v=this._parsePercent(x)||0,m=this._parsePercent(_)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(p=this.strokeColor,i.uTroikaStrokeColor.value.set(p??Xm),f=this.strokeOpacity,f==null&&(f=1)),d=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(v,m),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=f,i.uTroikaFillOpacity.value=d??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let g=this.clipRect;if(g&&Array.isArray(g)&&g.length===4)i.uTroikaClipRect.value.fromArray(g);else{const y=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ie;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||Bh;if(a!==e._orientation){let o=i.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==Bh&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,d]=l;Il.set(0,0,0)[u]=c==="-"?1:-1,Oh.set(0,0,0)[d]=h==="-"?-1:1,Ym.lookAt(zC,Il.cross(Oh),Oh),o.setFromMatrix4(Ym)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new fe){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new fe){return Il.copy(e),this.localPositionToTextCoords(this.worldToLocal(Il),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,a=n?hv():uv(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const d=r[1]+c.getY(u)*(r[3]-r[1]);let f=0;n&&(f=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,d,f)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Ba.length=0,a.raycast(e,Ba);for(let u=0;u<Ba.length;u++)Ba[u].object=this,t.push(Ba[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,HC.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}};dv.forEach(s=>{const e="_private_"+s;Object.defineProperty(fv.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Lt;new Ie;new Lt;typeof window<"u"&&document.createElement("div");function WC(s,e){Ln(e,!0);let t=qe(e,"font",3,null),i=qe(e,"characters",3,null),n=qe(e,"sdfGlyphSize",3,null),r=qe(e,"ref",15),a=jn(e,["$$slots","$$events","$$legacy","font","characters","sdfGlyphSize","ref","onsync","children"]);const o=new fv,{invalidate:l}=fs(),c=async()=>{await $m(),o.sync(()=>{l(),e.onsync?.()})},u=["text","anchorX","anchorY","curveRadius","direction","font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","textAlign","textIndent","whiteSpace","material","color","depthOffset","clipRect","glyphGeometryDetail","sdfGlyphSize","outlineWidth","outlineColor","outlineOpacity","outlineBlur","outlineOffsetX","outlineOffsetY","strokeWidth","strokeColor","strokeOpacity","fillOpacity","characters","colorRanges"];k0(()=>u.map(d=>a[d]),()=>{c()});const h=J0();ut(()=>{h(new Promise(d=>EC({font:t(),characters:i(),sdfGlyphSize:n()},d)))}),qt(s,ei({get is(){return o}},()=>a,{get font(){return t()},get characters(){return i()},get sdfGlyphSize(){return n()},get ref(){return r()},set ref(d){r(d)},children:(d,f)=>{var p=Gt(),v=Ct(p);Sn(v,()=>e.children??Wn,()=>({ref:o})),Mt(d,p)},$$slots:{default:!0}})),Un()}for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);new ds(-1,1,1,-1,0,1);class XC extends it{constructor(){super(),this.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new He([0,2,0,0,2,0],2))}}new XC;var pv={exports:{}};pv.exports=Au;pv.exports.default=Au;function Au(s,e,t){t=t||2;var i=e&&e.length,n=i?e[0]*t:s.length,r=mv(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,u,h,d,f;if(i&&(r=ZC(s,e,r,t)),s.length>80*t){o=c=s[0],l=u=s[1];for(var p=t;p<n;p+=t)h=s[p],d=s[p+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return go(r,a,t,o,l,f,0),a}function mv(s,e,t,i,n){var r,a;if(n===yd(s,e,t,i)>0)for(r=e;r<t;r+=i)a=jm(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=jm(r,s[r],s[r+1],a);return a&&Eu(a,a.next)&&(_o(a),a=a.next),a}function os(s,e){if(!s)return s;e||(e=s);var t=s,i;do if(i=!1,!t.steiner&&(Eu(t,t.next)||It(t.prev,t,t.next)===0)){if(_o(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function go(s,e,t,i,n,r,a){if(s){!a&&r&&t2(s,i,n,r);for(var o=s,l,c;s.prev!==s.next;){if(l=s.prev,c=s.next,r?qC(s,i,n,r):YC(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),_o(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=jC(os(s),e,t),go(s,e,t,i,n,r,2)):a===2&&KC(s,e,t,i,n,r):go(os(s),e,t,i,n,r,1);break}}}}function YC(s){var e=s.prev,t=s,i=s.next;if(It(e,t,i)>=0)return!1;for(var n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=n<r?n<a?n:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=n>r?n>a?n:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,p=i.next;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Vs(n,o,r,l,a,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function qC(s,e,t,i){var n=s.prev,r=s,a=s.next;if(It(n,r,a)>=0)return!1;for(var o=n.x,l=r.x,c=a.x,u=n.y,h=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,v=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,g=_d(f,p,e,t,i),y=_d(v,m,e,t,i),x=s.prevZ,_=s.nextZ;x&&x.z>=g&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Vs(o,u,l,h,c,d,x.x,x.y)&&It(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Vs(o,u,l,h,c,d,_.x,_.y)&&It(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Vs(o,u,l,h,c,d,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Vs(o,u,l,h,c,d,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function jC(s,e,t){var i=s;do{var n=i.prev,r=i.next.next;!Eu(n,r)&&gv(n,i,i.next,r)&&vo(n,r)&&vo(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),_o(i),_o(i.next),i=s=r),i=i.next}while(i!==s);return os(i)}function KC(s,e,t,i,n,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&r2(a,o)){var l=vv(a,o);a=os(a,a.next),l=os(l,l.next),go(a,e,t,i,n,r,0),go(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function ZC(s,e,t,i){var n=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=mv(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(i2(c));for(n.sort(JC),r=0;r<n.length;r++)t=QC(n[r],t);return t}function JC(s,e){return s.x-e.x}function QC(s,e){var t=$C(s,e);if(!t)return e;var i=vv(t,s);return os(i,i.next),os(t,t.next)}function $C(s,e){var t=e,i=s.x,n=s.y,r=-1/0,a;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){var o=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=i&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===i))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,u=a.y,h=1/0,d;t=a;do i>=t.x&&t.x>=c&&i!==t.x&&Vs(n<u?i:r,n,c,u,n<u?r:i,n,t.x,t.y)&&(d=Math.abs(n-t.y)/(i-t.x),vo(t,s)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&e2(a,t)))&&(a=t,h=d)),t=t.next;while(t!==l);return a}function e2(s,e){return It(s.prev,s,e.prev)<0&&It(e.next,s,s.next)<0}function t2(s,e,t,i){var n=s;do n.z===0&&(n.z=_d(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,n2(n)}function n2(s){var e,t,i,n,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(a>1);return s}function _d(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function i2(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Vs(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function r2(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!s2(s,e)&&(vo(s,e)&&vo(e,s)&&a2(s,e)&&(It(s.prev,s,e.prev)||It(s,e.prev,e))||Eu(s,e)&&It(s.prev,s,s.next)>0&&It(e.prev,e,e.next)>0)}function It(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Eu(s,e){return s.x===e.x&&s.y===e.y}function gv(s,e,t,i){var n=Ll(It(s,e,t)),r=Ll(It(s,e,i)),a=Ll(It(t,i,s)),o=Ll(It(t,i,e));return!!(n!==r&&a!==o||n===0&&Dl(s,t,e)||r===0&&Dl(s,i,e)||a===0&&Dl(t,s,i)||o===0&&Dl(t,e,i))}function Dl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ll(s){return s>0?1:s<0?-1:0}function s2(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&gv(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function vo(s,e){return It(s.prev,s,s.next)<0?It(s,e,s.next)>=0&&It(s,s.prev,e)>=0:It(s,e,s.prev)<0||It(s,s.next,e)<0}function a2(s,e){var t=s,i=!1,n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function vv(s,e){var t=new xd(s.i,s.x,s.y),i=new xd(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function jm(s,e,t,i){var n=new xd(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function _o(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xd(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Au.deviation=function(s,e,t,i){var n=e&&e.length,r=n?e[0]*t:s.length,a=Math.abs(yd(s,0,r,t));if(n)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,u=o<l-1?e[o+1]*t:s.length;a-=Math.abs(yd(s,c,u,t))}var h=0;for(o=0;o<i.length;o+=3){var d=i[o]*t,f=i[o+1]*t,p=i[o+2]*t;h+=Math.abs((s[d]-s[p])*(s[f+1]-s[d+1])-(s[d]-s[f])*(s[p+1]-s[d+1]))}return a===0&&h===0?0:Math.abs((h-a)/a)};function yd(s,e,t,i){for(var n=0,r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}Au.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},i=0,n=0;n<s.length;n++){for(var r=0;r<s[n].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[n][r][a]);n>0&&(i+=s[n-1].length,t.holes.push(i))}return t};new fe;new fe;var Km;(s=>{function e(n){let r=n.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(n){if(n.length<=1)return n.slice();let r=[];for(let o=0;o<n.length;o++){const l=n[o];for(;r.length>=2;){const c=r[r.length-1],u=r[r.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=n.length-1;o>=0;o--){const l=n[o];for(;a.length>=2;){const c=a[a.length-1],u=a[a.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function i(n,r){return n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0}s.POINT_COMPARATOR=i})(Km||(Km={}));new bn;new D;new Ye;new Wi;new Ft;new Lt;new D;new D;const kh=Math.PI/180;function o2(s,e){Ln(e,!0);let t=jn(e,["$$slots","$$events","$$legacy","children"]);var i=Gt(),n=Ct(i);Ys(n,()=>qt.Group,(r,a)=>{a(r,ei(()=>t,{children:(o,l)=>{var c=Gt(),u=Ct(c);{let h=jt(()=>ta.DEG2RAD*90);Ys(u,()=>qt.Group,(d,f)=>{f(d,{get"rotation.x"(){return Pe(h)},children:(p,v)=>{var m=Gt(),g=Ct(m);Sn(g,()=>e.children??Wn),Mt(p,m)},$$slots:{default:!0}})})}Mt(o,c)},$$slots:{default:!0}}))}),Mt(s,i),Un()}var l2=ls("<!> <!>",1),c2=ls("<!> <!>",1),u2=ls("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function h2(s,e){Ln(e,!1);const t=()=>Sd(l,"$flowerGltf",i),[i,n]=Md(),a=new URLSearchParams(window.location.search).get("text")||`Kunibert\r
and Oscar`,o=nE(),l=K0("./flower.glb");function c(){const A=Math.random()*16777215,E=.5,b=(A>>16&255)*(1-E)+255*E,M=(A>>8&255)*(1-E)+255*E,L=(A&255)*(1-E)+255*E;return b<<16|M<<8|L}const u=Array.from({length:100},()=>{const A=Math.random()*2*Math.PI,E=.5,b=E+(1-E)*(1-Math.pow(Math.random(),3));return{x:Math.cos(A)*b,z:Math.sin(A)*b,scale:Math.random()*.5+.5,color:c(),rotation:{x:Math.random()*8,y:Math.random()*360,z:Math.random()*8}}});yv();var h=u2(),d=Ct(h);qt.PerspectiveCamera(d,{makeDefault:!0,position:[0,1,1],children:(A,E)=>{{let b=sr(()=>85*kh);DE(A,{target:[0,0,0],enablePan:!1,enableDamping:!0,get maxPolarAngle(){return Pe(b)}})}},$$slots:{default:!0}});var f=Rn(d,2);qt.AmbientLight(f,{color:"#bbb"});var p=Rn(f,2);qt.DirectionalLight(p,{color:"#fff",intensity:.6,position:[-.15,1,-1],castShadow:!0,"shadow.camera.left":-2.5,"shadow.camera.right":2.5,"shadow.camera.top":2.5,"shadow.camera.bottom":-2.5,"shadow.mapSize.width":1024,"shadow.mapSize.height":1024});var v=Rn(p,2);{let A=sr(()=>new D);PE(v,{"position.y":-.005,infiniteGrid:!0,cellColor:"#fff",sectionColor:"#fff",cellSize:.1,fadeDistance:1,type:"circular",get fadeOrigin(){return Pe(A)}})}var m=Rn(v,2);{let A=sr(()=>0*kh);qt.Mesh(m,{"position.y":-.022,get"rotation.x"(){return Pe(A)},receiveShadow:!0,children:(E,b)=>{var M=l2(),L=Ct(M);qt.CylinderGeometry(L,{args:[1.05,1.05,.02,32]});var I=Rn(L,2);qt.MeshStandardMaterial(I,{color:"#288278"}),Mt(E,M)},$$slots:{default:!0}})}var g=Rn(m,2);HE(g,{elevation:.5});var y=Rn(g,2);Rm(y,{url:"./kunibert2.glb",castShadow:!0,position:[-.05,0,-.2],rotation:[0,Math.PI+.15,0],get dracoLoader(){return o}});var x=Rn(y,2);Rm(x,{url:"./oscar2.glb",castShadow:!0,position:[0,0,0],rotation:[0,0,0],scale:.6,get dracoLoader(){return o}});var _=Rn(x,2);{var S=A=>{VE(A,{castShadow:!0,get meshes(){return t().nodes},children:(b,M)=>{let L=()=>M?.().components.Blossom,I=()=>M?.().components.Stem;var U=Gt(),F=Ct(U);Xv(F,1,()=>u,Hv,(V,B)=>{{let H=sr(()=>Pe(B).rotation.y*Math.PI/180),Y=sr(()=>Pe(B).rotation.x*Math.PI/180),q=sr(()=>Pe(B).rotation.z*Math.PI/180);o2(V,{get"position.x"(){return Pe(B).x},get"position.z"(){return Pe(B).z},get scale(){return Pe(B).scale},get"rotation.y"(){return Pe(H)},get"rotation.x"(){return Pe(Y)},get"rotation.z"(){return Pe(q)},get color(){return Pe(B).color},children:(X,N)=>{var W=c2(),K=Ct(W);L()(K,{get color(){return Pe(B).color}});var re=Rn(K,2);I()(re,{}),Mt(X,W)},$$slots:{default:!0}})}}),Mt(b,U)},$$slots:{default:!0}})};xo(_,A=>{t()&&A(S)})}var w=Rn(_,2);{let A=sr(()=>-90*kh);WC(w,{get text(){return a},color:"white",textAlign:"center",anchorX:"50%",anchorY:"100%",fontSize:.1,"position.z":.45,get"rotation.x"(){return Pe(A)}})}Mt(s,h),Un(),n()}var d2=ls('<div class="viewport svelte-1uha8ag"><!></div>');function T2(s){var e=d2(),t=Gh(e);Kw(t,{children:(i,n)=>{h2(i,{})},$$slots:{default:!0}}),Vh(e),Mt(s,e)}export{T2 as component};
