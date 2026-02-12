import{c as Ni,a as wn,f as oo}from"../chunks/BvE8rn5P.js";import{i as z0}from"../chunks/Cg52rFzU.js";import{g as V0,aO as Xn,aP as mn,t as ft,v as Xa,i as He,u as Sm,aN as Gn,aL as Mm,B as $r,n as Vn,D as es,F as Su,G as Mu,av as vd,aM as _d,I as lo,H as Ri,aG as Hi}from"../chunks/DZTPfT22.js";import{g as G0,w as Xr,d as bc,a as Qs,o as H0,r as Qu}from"../chunks/BKdF2UbA.js";import{c as W0}from"../chunks/C_YP7s-l.js";import{s as ts}from"../chunks/B_LXL_in.js";import{r as ns,i as $u,b as xd,s as co,p as ot,c as yd,a as X0,d as Y0}from"../chunks/Bmyz3aK8.js";function El(s){let e;const t=W0(n=>{let r=!1;const a=s.subscribe(o=>{e=o,r&&n()});return r=!0,a});function i(){return V0()?(t(),e):G0(s)}return"set"in s?{get current(){return i()},set current(n){s.set(n)}}:{get current(){return i()}}}const bd=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let i=0;i<t;i++)if(s[i]!==e[i])return!1;return!0},q0=()=>{const s=[],i={items:s,remember:(n,r)=>{for(let o=0;o<s.length;o++){const l=s[o];if(bd(r,l.keys)&&l.promise)return l.promise}const a={promise:n(),keys:r};return s.push(a),a.promise},clear:n=>{for(let r=0;r<s.length;r++){const a=s[r];if(bd(n,a.keys)){s.splice(r,1);return}}}};return Xn("threlte-cache",i),i},j0=()=>{const s=mn("threlte-cache");if(!s)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return s};const Sc="182",zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tm=0,Tu=1,wm=2,K0=3,Z0=0,La=1,Ua=2,Us=3,_i=0,pn=1,Pn=2,vi=0,Vr=1,wu=2,Au=3,Eu=4,Am=5,er=100,Em=101,Cm=102,Rm=103,Pm=104,Im=200,Dm=201,Lm=202,Um=203,Cl=204,Rl=205,Nm=206,Fm=207,Om=208,Bm=209,km=210,zm=211,Vm=212,Gm=213,Hm=214,Pl=0,Il=1,Dl=2,Yr=3,Ll=4,Ul=5,Nl=6,Fl=7,ho=0,Wm=1,Xm=2,ri=0,ef=1,tf=2,nf=3,rf=4,sf=5,Ya=6,af=7,Cu="attached",Ym="detached",Mc=300,xi=301,sr=302,qa=303,ja=304,$s=306,ar=1e3,hn=1001,zs=1002,Pt=1003,Tc=1004,J0=1004,Fr=1005,Q0=1005,yt=1006,Os=1007,$0=1007,zn=1008,ev=1008,Mn=1009,of=1010,lf=1011,Vs=1012,wc=1013,Hn=1014,un=1015,yi=1016,Ac=1017,Ec=1018,Gs=1020,cf=35902,hf=35899,uf=1021,ff=1022,fn=1023,bi=1026,tr=1027,Cc=1028,uo=1029,qr=1030,Rc=1031,tv=1032,Pc=1033,Na=33776,Fa=33777,Oa=33778,Ba=33779,Ol=35840,Bl=35841,kl=35842,zl=35843,Vl=36196,Gl=37492,Hl=37496,Wl=37488,Xl=37489,Yl=37490,ql=37491,jl=37808,Kl=37809,Zl=37810,Jl=37811,Ql=37812,$l=37813,ec=37814,tc=37815,nc=37816,ic=37817,rc=37818,sc=37819,ac=37820,oc=37821,lc=36492,cc=36494,hc=36495,uc=36283,fc=36284,dc=36285,pc=36286,qm=2200,jm=2201,Km=2202,Hs=2300,Ws=2301,Sl=2302,Or=2400,Br=2401,Ka=2402,Ic=2500,df=2501,Zm=0,pf=1,mc=2,Jm=3200,Qm=3201,nv=3202,iv=3203,hr=0,$m=1,Ii="",Vt="srgb",rn="srgb-linear",Za="linear",xt="srgb",rv="",sv="rg",av="ga",ov=0,Lr=7680,lv=7681,cv=7682,hv=7683,uv=34055,fv=34056,dv=5386,pv=512,mv=513,gv=514,vv=515,_v=516,xv=517,yv=518,Ru=519,eg=512,tg=513,ng=514,Dc=515,ig=516,rg=517,Lc=518,sg=519,Ja=35044,bv=35048,Sv=35040,Mv=35045,Tv=35049,wv=35041,Av=35046,Ev=35050,Cv=35042,Rv="100",Pu="300 es",In=2e3,Xs=2001,Pv={COMPUTE:"compute",RENDER:"render"},Iv={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Dv={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function ag(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const Lv={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ns(s,e){return new Lv[s](e)}function og(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Qa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lg(){const s=Qa("canvas");return s.style.display="block",s}const Sd={};let or=null;function Uv(s){or=s}function Nv(){return or}function $a(...s){const e="THREE."+s.shift();or?or("log",e,...s):console.log(e,...s)}function Fe(...s){const e="THREE."+s.shift();or?or("warn",e,...s):console.warn(e,...s)}function qe(...s){const e="THREE."+s.shift();or?or("error",e,...s):console.error(e,...s)}function Ys(...s){const e=s.join(" ");e in Sd||(Sd[e]=!0,Fe(...s))}function Fv(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Md=1234567;const Gr=Math.PI/180,qs=180/Math.PI;function Dn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function mf(s,e){return(s%e+e)%e}function Ov(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Bv(s,e,t){return s!==e?(t-s)/(e-s):0}function ka(s,e,t){return(1-t)*s+t*e}function kv(s,e,t,i){return ka(s,e,1-Math.exp(-t*i))}function zv(s,e=1){return e-Math.abs(mf(s,e*2)-e)}function Vv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Gv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Hv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Wv(s,e){return s+Math.random()*(e-s)}function Xv(s){return s*(.5-Math.random())}function Yv(s){s!==void 0&&(Md=s);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qv(s){return s*Gr}function jv(s){return s*qs}function Kv(s){return(s&s-1)===0&&s!==0}function Zv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qv(s,e,t,i,n){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),p=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const gf={DEG2RAD:Gr,RAD2DEG:qs,generateUUID:Dn,clamp:tt,euclideanModulo:mf,mapLinear:Ov,inverseLerp:Bv,lerp:ka,damp:kv,pingpong:zv,smoothstep:Vv,smootherstep:Gv,randInt:Hv,randFloat:Wv,randFloatSpread:Xv,seededRandom:Yv,degToRad:qv,radToDeg:jv,isPowerOfTwo:Kv,ceilPowerOfTwo:Zv,floorPowerOfTwo:Jv,setQuaternionFromProperEuler:Qv,normalize:st,denormalize:cn};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*v;m<0&&(f=-f,d=-d,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){const y=Math.acos(m),_=Math.sin(y);g=Math.sin(g*y)/_,o=Math.sin(o*y)/_,l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+v*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+v*o;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),f=l(i/2),d=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Td.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new D,Td=new Kt;class it{constructor(e,t,i,n,r,a,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],v=n[0],m=n[3],g=n[6],y=n[1],_=n[4],x=n[7],S=n[2],w=n[5],A=n[8];return r[0]=a*v+o*y+l*S,r[3]=a*m+o*_+l*w,r[6]=a*g+o*x+l*A,r[1]=c*v+h*y+u*S,r[4]=c*m+h*_+u*w,r[7]=c*g+h*x+u*A,r[2]=f*v+d*y+p*S,r[5]=f*m+d*_+p*w,r[8]=f*g+d*x+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=t*u+i*f+n*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=f*v,e[4]=(h*t-n*l)*v,e[5]=(n*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Th.makeScale(e,t)),this}rotate(e){return this.premultiply(Th.makeRotation(-e)),this}translate(e,t){return this.premultiply(Th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Th=new it,wd=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $v(){const s={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(n.r=Ui(n.r),n.g=Ui(n.g),n.b=Ui(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(n.r=Bs(n.r),n.g=Bs(n.g),n.b=Bs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ii?Za:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[rn]:{primaries:e,whitePoint:i,transfer:Za,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),s}const lt=$v();function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class cg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=Qa("canvas")),fs.width=e.width,fs.height=e.height;const n=fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class nr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(wh(n[a].image)):r.push(wh(n[a]))}else r=wh(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function wh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let t_=0;const Ah=new D;class Et extends Si{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,i=hn,n=hn,r=yt,a=zn,o=fn,l=Mn,c=Et.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Dn(),this.name="",this.source=new nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Mc;Et.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,n=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(d+1)/2,S=(g+1)/2,w=(h+f)/4,A=(u+v)/4,E=(p+m)/4;return _>x&&_>S?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=w/i,r=A/i):x>S?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=w/n,r=E/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=A/r,n=E/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vf extends Si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const n={width:e,height:t,depth:i.depth},r=new Et(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new nr(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends vf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Uc extends Et{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n_ extends Ln{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Uc(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class Nc extends Et{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i_ extends Ln{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Nc(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class It{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Co.subVectors(this.max,pa),ds.subVectors(e.a,pa),ps.subVectors(e.b,pa),ms.subVectors(e.c,pa),Wi.subVectors(ps,ds),Xi.subVectors(ms,ps),gr.subVectors(ds,ms);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-gr.z,gr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,gr.z,0,-gr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-gr.y,gr.x,0];return!Eh(t,ds,ps,ms,Co)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,ds,ps,ms,Co))?!1:(Ro.crossVectors(Wi,Xi),t=[Ro.x,Ro.y,Ro.z],Eh(t,ds,ps,ms,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new D,new D,new D,new D,new D,new D,new D,new D],$n=new D,Eo=new It,ds=new D,ps=new D,ms=new D,Wi=new D,Xi=new D,gr=new D,pa=new D,Co=new D,Ro=new D,vr=new D;function Eh(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){vr.fromArray(s,r);const o=n.x*Math.abs(vr.x)+n.y*Math.abs(vr.y)+n.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),h=i.dot(vr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const r_=new It,ma=new D,Ch=new D;class Lt{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):r_.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ma,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Ch)),this.expandByPoint(ma.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ti=new D,Rh=new D,Po=new D,Yi=new D,Ph=new D,Io=new D,Ih=new D;class Oi{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Rh.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Rh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Po),o=Yi.dot(this.direction),l=-Yi.dot(Po),c=Yi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Rh).addScaledVector(Po,f),d}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),n=Ti.dot(Ti)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,n,r){Ph.subVectors(t,e),Io.subVectors(i,e),Ih.crossVectors(Ph,Io);let a=this.direction.dot(Ih),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const l=o*this.direction.dot(Io.crossVectors(Yi,Io));if(l<0)return null;const c=o*this.direction.dot(Ph.cross(Yi));if(c<0||l+c>a)return null;const h=-o*Yi.dot(Ih);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,i,n,r,a,o,l,c,h,u,f,d,p,v,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,f,d,p,v,m)}set(e,t,i,n,r,a,o,l,c,h,u,f,d,p,v,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,n=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f+v*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s_,e,a_)}lookAt(e,t,i){const n=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),qi.crossVectors(i,Cn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),qi.crossVectors(i,Cn)),qi.normalize(),Do.crossVectors(Cn,qi),n[0]=qi.x,n[4]=Do.x,n[8]=Cn.x,n[1]=qi.y,n[5]=Do.y,n[9]=Cn.y,n[2]=qi.z,n[6]=Do.z,n[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],v=i[6],m=i[10],g=i[14],y=i[3],_=i[7],x=i[11],S=i[15],w=n[0],A=n[4],E=n[8],b=n[12],M=n[1],L=n[5],I=n[9],U=n[13],F=n[2],G=n[6],B=n[10],H=n[14],Y=n[3],q=n[7],X=n[11],N=n[15];return r[0]=a*w+o*M+l*F+c*Y,r[4]=a*A+o*L+l*G+c*q,r[8]=a*E+o*I+l*B+c*X,r[12]=a*b+o*U+l*H+c*N,r[1]=h*w+u*M+f*F+d*Y,r[5]=h*A+u*L+f*G+d*q,r[9]=h*E+u*I+f*B+d*X,r[13]=h*b+u*U+f*H+d*N,r[2]=p*w+v*M+m*F+g*Y,r[6]=p*A+v*L+m*G+g*q,r[10]=p*E+v*I+m*B+g*X,r[14]=p*b+v*U+m*H+g*N,r[3]=y*w+_*M+x*F+S*Y,r[7]=y*A+_*L+x*G+S*q,r[11]=y*E+_*I+x*B+S*X,r[15]=y*b+_*U+x*H+S*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],v=e[7],m=e[11],g=e[15],y=l*d-c*f,_=o*d-c*u,x=o*f-l*u,S=a*d-c*h,w=a*f-l*h,A=a*u-o*h;return t*(v*y-m*_+g*x)-i*(p*y-m*S+g*w)+n*(p*_-v*S+g*A)-r*(p*x-v*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],v=e[13],m=e[14],g=e[15],y=u*m*c-v*f*c+v*l*d-o*m*d-u*l*g+o*f*g,_=p*f*c-h*m*c-p*l*d+a*m*d+h*l*g-a*f*g,x=h*v*c-p*u*c+p*o*d-a*v*d-h*o*g+a*u*g,S=p*u*l-h*v*l-p*o*f+a*v*f+h*o*m-a*u*m,w=t*y+i*_+n*x+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(v*f*r-u*m*r-v*n*d+i*m*d+u*n*g-i*f*g)*A,e[2]=(o*m*r-v*l*r+v*n*c-i*m*c-o*n*g+i*l*g)*A,e[3]=(u*l*r-o*f*r-u*n*c+i*f*c+o*n*d-i*l*d)*A,e[4]=_*A,e[5]=(h*m*r-p*f*r+p*n*d-t*m*d-h*n*g+t*f*g)*A,e[6]=(p*l*r-a*m*r-p*n*c+t*m*c+a*n*g-t*l*g)*A,e[7]=(a*f*r-h*l*r+h*n*c-t*f*c-a*n*d+t*l*d)*A,e[8]=x*A,e[9]=(p*u*r-h*v*r-p*i*d+t*v*d+h*i*g-t*u*g)*A,e[10]=(a*v*r-p*o*r+p*i*c-t*v*c-a*i*g+t*o*g)*A,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*A,e[12]=S*A,e[13]=(h*v*n-p*u*n+p*i*f-t*v*f-h*i*m+t*u*m)*A,e[14]=(p*o*n-a*v*n-p*i*l+t*v*l+a*i*m-t*o*m)*A,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,v=a*h,m=a*u,g=o*u,y=l*c,_=l*h,x=l*u,S=i.x,w=i.y,A=i.z;return n[0]=(1-(v+g))*S,n[1]=(d+x)*S,n[2]=(p-_)*S,n[3]=0,n[4]=(d-x)*w,n[5]=(1-(f+g))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(p+_)*A,n[9]=(m-y)*A,n[10]=(1-(f+v))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;if(e.x=n[12],e.y=n[13],e.z=n[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=gs.set(n[0],n[1],n[2]).length();const a=gs.set(n[4],n[5],n[6]).length(),o=gs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),ei.copy(this);const c=1/r,h=1/a,u=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=In,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(i-n),f=(t+e)/(t-e),d=(i+n)/(i-n);let p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===In)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Xs)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=In,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-n),f=-(t+e)/(t-e),d=-(i+n)/(i-n);let p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===In)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===Xs)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gs=new D,ei=new Ye,s_=new D(0,0,0),a_=new D(1,1,1),qi=new D,Do=new D,Cn=new D,Ed=new Ye,Cd=new Kt;class Un{constructor(e=0,t=0,i=0,n=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o_=0;const Rd=new D,vs=new Kt,wi=new Ye,Lo=new D,ga=new D,l_=new D,c_=new Kt,Pd=new D(1,0,0),Id=new D(0,1,0),Dd=new D(0,0,1),Ld={type:"added"},h_={type:"removed"},_s={type:"childadded",child:null},Dh={type:"childremoved",child:null};class ht extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new D,t=new Un,i=new Kt,n=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ye},normalMatrix:{value:new it}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Pd,e)}rotateY(e){return this.rotateOnAxis(Id,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pd,e)}translateY(e){return this.translateOnAxis(Id,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lo.copy(e):Lo.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(ga,Lo,this.up):wi.lookAt(Lo,ga,this.up),this.quaternion.setFromRotationMatrix(wi),n&&(wi.extractRotation(n.matrixWorld),vs.setFromRotationMatrix(wi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ld),_s.child=e,this.dispatchEvent(_s),_s.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_),Dh.child=e,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ld),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ht.DEFAULT_UP=new D(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new D,Ai=new D,Lh=new D,Ei=new D,xs=new D,ys=new D,Ud=new D,Uh=new D,Nh=new D,Fh=new D,Oh=new pt,Bh=new pt,kh=new pt;class Tn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ti.subVectors(e,t),n.cross(ti);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){ti.subVectors(n,t),Ai.subVectors(i,t),Lh.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(Ai),l=ti.dot(Lh),c=Ai.dot(Ai),h=Ai.dot(Lh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Oh.setScalar(0),Bh.setScalar(0),kh.setScalar(0),Oh.fromBufferAttribute(e,t),Bh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Oh,r.x),a.addScaledVector(Bh,r.y),a.addScaledVector(kh,r.z),a}static isFrontFacing(e,t,i,n){return ti.subVectors(i,t),Ai.subVectors(e,t),ti.cross(Ai).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ti.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;xs.subVectors(n,i),ys.subVectors(r,i),Uh.subVectors(e,i);const l=xs.dot(Uh),c=ys.dot(Uh);if(l<=0&&c<=0)return t.copy(i);Nh.subVectors(e,n);const h=xs.dot(Nh),u=ys.dot(Nh);if(h>=0&&u<=h)return t.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(xs,a);Fh.subVectors(e,r);const d=xs.dot(Fh),p=ys.dot(Fh);if(p>=0&&d<=p)return t.copy(r);const v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(ys,o);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Ud.subVectors(r,n),o=(u-h)/(u-h+(d-p)),t.copy(n).addScaledVector(Ud,o);const g=1/(m+v+f);return a=v*g,o=f*g,t.copy(i).addScaledVector(xs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function zh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=lt.workingColorSpace){if(e=mf(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=zh(a,r,e+1/3),this.g=zh(a,r,e),this.b=zh(a,r,e-1/3)}return lt.colorSpaceToWorking(this,n),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=hg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return lt.workingToColorSpace(tn.copy(this),e),Math.round(tt(tn.r*255,0,255))*65536+Math.round(tt(tn.g*255,0,255))*256+Math.round(tt(tn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(tn.copy(this),t);const i=tn.r,n=tn.g,r=tn.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Vt){lt.workingToColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,n=tn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Uo);const i=ka(ji.h,Uo.h,t),n=ka(ji.s,Uo.s,t),r=ka(ji.l,Uo.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ie;Ie.NAMES=hg;let u_=0;class Ht extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Vr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Rl,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cl&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends Ht{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Di=f_();function f_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}function Sn(s){Math.abs(s)>65504&&Fe("DataUtils.toHalfFloat(): Value out of range."),s=tt(s,-65504,65504),Di.floatView[0]=s;const e=Di.uint32View[0],t=e>>23&511;return Di.baseTable[t]+((e&8388607)>>Di.shiftTable[t])}function Ra(s){const e=s>>10;return Di.uint32View[0]=Di.mantissaTable[Di.offsetTable[e]+(s&1023)]+Di.exponentTable[e],Di.floatView[0]}class d_{static toHalfFloat(e){return Sn(e)}static fromHalfFloat(e){return Ra(e)}}const Ft=new D,No=new de;let p_=0;class _t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ja,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class m_ extends _t{constructor(e,t,i){super(new Int8Array(e),t,i)}}class g_ extends _t{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class v_ extends _t{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class __ extends _t{constructor(e,t,i){super(new Int16Array(e),t,i)}}class _f extends _t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class x_ extends _t{constructor(e,t,i){super(new Int32Array(e),t,i)}}class xf extends _t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class y_ extends _t{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Ra(this.array[e*this.itemSize]);return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=Sn(t),this}getY(e){let t=Ra(this.array[e*this.itemSize+1]);return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=Sn(t),this}getZ(e){let t=Ra(this.array[e*this.itemSize+2]);return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=Sn(t),this}getW(e){let t=Ra(this.array[e*this.itemSize+3]);return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=Sn(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=Sn(t),this.array[e+1]=Sn(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array)),this.array[e+0]=Sn(t),this.array[e+1]=Sn(i),this.array[e+2]=Sn(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=Sn(t),this.array[e+1]=Sn(i),this.array[e+2]=Sn(n),this.array[e+3]=Sn(r),this}}class Ge extends _t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let b_=0;const Fn=new Ye,Vh=new ht,bs=new D,Rn=new It,va=new It,qt=new D;class nt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?xf:_f)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Rn.min,va.min),Rn.expandByPoint(qt),qt.addVectors(Rn.max,va.max),Rn.expandByPoint(qt)):(Rn.expandByPoint(va.min),Rn.expandByPoint(va.max))}Rn.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qt.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),qt.add(bs)),n=Math.max(n,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let E=0;E<i.count;E++)o[E]=new D,l[E]=new D;const c=new D,h=new D,u=new D,f=new de,d=new de,p=new de,v=new D,m=new D;function g(E,b,M){c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),o[E].add(v),o[b].add(v),o[M].add(v),l[E].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let E=0,b=y.length;E<b;++E){const M=y[E],L=M.start,I=M.count;for(let U=L,F=L+I;U<F;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new D,x=new D,S=new D,w=new D;function A(E){S.fromBufferAttribute(n,E),w.copy(S);const b=o[E];_.copy(b),_.sub(S.multiplyScalar(S.dot(b))).normalize(),x.crossVectors(w,b);const L=x.dot(l[E])<0?-1:1;a.setXYZW(E,_.x,_.y,_.z,L)}for(let E=0,b=y.length;E<b;++E){const M=y[E],L=M.start,I=M.count;for(let U=L,F=L+I;U<F;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new _t(f,h,u)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nd=new Ye,_r=new Oi,Fo=new Lt,Fd=new D,Oo=new D,Bo=new D,ko=new D,Gh=new D,zo=new D,Od=new D,Vo=new D;class At extends ht{constructor(e=new nt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Gh.fromBufferAttribute(u,e),a?zo.addScaledVector(Gh,h):zo.addScaledVector(Gh.sub(t),h))}t.add(zo)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),_r.copy(e.ray).recast(e.near),!(Fo.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Fo,Fd)===null||_r.origin.distanceToSquared(Fd)>(e.far-e.near)**2))&&(Nd.copy(r).invert(),_r.copy(e.ray).applyMatrix4(Nd),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=_;x<S;x+=3){const w=o.getX(x),A=o.getX(x+1),E=o.getX(x+2);n=Go(this,g,e,i,c,h,u,w,A,E),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);n=Go(this,a,e,i,c,h,u,y,_,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=_;x<S;x+=3){const w=x,A=x+1,E=x+2;n=Go(this,g,e,i,c,h,u,w,A,E),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const y=m,_=m+1,x=m+2;n=Go(this,a,e,i,c,h,u,y,_,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function S_(s,e,t,i,n,r,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===_i,o),l===null)return null;Vo.copy(o),Vo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:s}}function Go(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Oo),s.getVertexPosition(l,Bo),s.getVertexPosition(c,ko);const h=S_(s,e,t,i,Oo,Bo,ko,Od);if(h){const u=new D;Tn.getBarycoord(Od,Oo,Bo,ko,u),n&&(h.uv=Tn.getInterpolatedAttribute(n,o,l,c,u,new de)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,l,c,u,new de)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};Tn.getNormal(Oo,Bo,ko,f.normal),h.face=f,h.barycoord=u}return h}class is extends nt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,n,a,2),p("x","z","y",1,-1,e,i,-t,n,a,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function p(v,m,g,y,_,x,S,w,A,E,b){const M=x/A,L=S/E,I=x/2,U=S/2,F=w/2,G=A+1,B=E+1;let H=0,Y=0;const q=new D;for(let X=0;X<B;X++){const N=X*L-U;for(let W=0;W<G;W++){const Z=W*M-I;q[v]=Z*y,q[m]=N*_,q[g]=F,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(W/A),u.push(1-X/E),H+=1}}for(let X=0;X<E;X++)for(let N=0;N<A;N++){const W=f+N+G*X,Z=f+N+G*(X+1),se=f+(N+1)+G*(X+1),te=f+(N+1)+G*X;l.push(W,Z,te),l.push(Z,se,te),Y+=6}o.addGroup(d,Y,b),d+=Y,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function ln(s){const e={};for(let t=0;t<s.length;t++){const i=js(s[t]);for(const n in i)e[n]=i[n]}return e}function M_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ug(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Oc={clone:js,merge:ln};var T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Ht{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bc extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new D,Bd=new de,kd=new de;class Gt extends Bc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Bd,kd),t.subVectors(kd,Bd)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,Ms=1;class fg extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Gt(Ss,Ms,e,t);n.layers=this.layers,this.add(n);const r=new Gt(Ss,Ms,e,t);r.layers=this.layers,this.add(r);const a=new Gt(Ss,Ms,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Ss,Ms,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Ss,Ms,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Ss,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class fo extends Et{constructor(e=[],t=xi,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yf extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new fo(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new is(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:vi});r.uniforms.tEquirect.value=t;const a=new At(n,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=yt),new fg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}class Li extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A_={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class kc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new kc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=i}clone(){return new zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let bf=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class po{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new D;class lr{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sf extends Ht{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const _a=new D,ws=new D,As=new D,Es=new de,xa=new de,dg=new Ye,Ho=new D,ya=new D,Wo=new D,zd=new de,Hh=new de,Vd=new de;class pg extends ht{constructor(e=new Sf){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new po(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new lr(i,3,0,!1)),Ts.setAttribute("uv",new lr(i,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new de(.5,.5),this.count=1}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),dg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-As.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Xo(Ho.set(-.5,-.5,0),As,a,ws,n,r),Xo(ya.set(.5,-.5,0),As,a,ws,n,r),Xo(Wo.set(.5,.5,0),As,a,ws,n,r),zd.set(0,0),Hh.set(1,0),Vd.set(1,1);let o=e.ray.intersectTriangle(Ho,ya,Wo,!1,_a);if(o===null&&(Xo(ya.set(-.5,.5,0),As,a,ws,n,r),Hh.set(0,1),o=e.ray.intersectTriangle(Ho,Wo,ya,!1,_a),o===null))return;const l=e.ray.origin.distanceTo(_a);l<e.near||l>e.far||t.push({distance:l,point:_a.clone(),uv:Tn.getInterpolation(_a,Ho,ya,Wo,zd,Hh,Vd,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xo(s,e,t,i,n,r){Es.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(xa.x=r*Es.x-n*Es.y,xa.y=n*Es.x+r*Es.y):xa.copy(Es),s.copy(e),s.x+=xa.x,s.y+=xa.y,s.applyMatrix4(dg)}const Yo=new D,Gd=new D;class mg extends ht{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Yo.setFromMatrixPosition(this.matrixWorld);const n=e.ray.origin.distanceTo(Yo);this.getObjectForDistance(n).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Yo.setFromMatrixPosition(e.matrixWorld),Gd.setFromMatrixPosition(this.matrixWorld);const i=Yo.distanceTo(Gd)/e.zoom;t[0].object.visible=!0;let n,r;for(n=1,r=t.length;n<r;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),i>=a)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<r;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let n=0,r=i.length;n<r;n++){const a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Hd=new D,Wd=new pt,Xd=new pt,E_=new D,Yd=new Ye,qo=new D,Wh=new Lt,qd=new Ye,Xh=new Oi;class Mf extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cu,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new It),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Lt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wh.copy(this.boundingSphere),Wh.applyMatrix4(n),e.ray.intersectsSphere(Wh)!==!1&&(qd.copy(n).invert(),Xh.copy(e.ray).applyMatrix4(qd),!(this.boundingBox!==null&&Xh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ym?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Wd.fromBufferAttribute(n.attributes.skinIndex,e),Xd.fromBufferAttribute(n.attributes.skinWeight,e),Hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Xd.getComponent(r);if(a!==0){const o=Wd.getComponent(r);Yd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(E_.copy(Hd).applyMatrix4(Yd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vc extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class si extends Et{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Pt,h=Pt,u,f){super(null,a,o,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new Ye,C_=new Ye;class mo{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:C_;jd.multiplyMatrices(o,t[r]),jd.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new mo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new si(t,e,e,fn,un);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Fe("Skeleton: No bone found with UUID:",r),a=new Vc),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class cr extends _t{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new Ye,Kd=new Ye,jo=[],Zd=new It,R_=new Ye,ba=new At,Sa=new Lt;class Tf extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,R_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new It),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),Zd.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Zd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),Sa.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),e.ray.intersectsSphere(Sa)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Cs),Kd.multiplyMatrices(i,Cs),ba.matrixWorld=Kd,ba.raycast(e,jo);for(let a=0,o=jo.length;a<o;a++){const l=jo[a];l.instanceId=r,l.object=this,t.push(l)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(n*this.count),n,this.count,Cc,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yh=new D,P_=new D,I_=new it;class mi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Yh.subVectors(i,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||I_.getNormalMatrix(e),n=this.coplanarPoint(Yh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Lt,D_=new de(.5,.5),Ko=new D;class ea{constructor(e=new mi,t=new mi,i=new mi,n=new mi,r=new mi,a=new mi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],m=r[10],g=r[11],y=r[12],_=r[13],x=r[14],S=r[15];if(n[0].setComponents(c-a,d-h,g-p,S-y).normalize(),n[1].setComponents(c+a,d+h,g+p,S+y).normalize(),n[2].setComponents(c+o,d+u,g+v,S+_).normalize(),n[3].setComponents(c-o,d-u,g-v,S-_).normalize(),i)n[4].setComponents(l,f,m,x).normalize(),n[5].setComponents(c-l,d-f,g-m,S-x).normalize();else if(n[4].setComponents(c-l,d-f,g-m,S-x).normalize(),t===In)n[5].setComponents(c+l,d+f,g+m,S+x).normalize();else if(t===Xs)n[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const t=D_.distanceTo(e.center);return xr.radius=.7071067811865476+t,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ko.x=n.normal.x>0?e.max.x:e.min.x,Ko.y=n.normal.y>0?e.max.y:e.min.y,Ko.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ui=new Ye,fi=new ea;class Gc{constructor(){this.coordinateSystem=In}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),fi.setFromProjectionMatrix(ui,n.coordinateSystem,n.reversedDepth),fi.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),fi.setFromProjectionMatrix(ui,n.coordinateSystem,n.reversedDepth),fi.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),fi.setFromProjectionMatrix(ui,n.coordinateSystem,n.reversedDepth),fi.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),fi.setFromProjectionMatrix(ui,n.coordinateSystem,n.reversedDepth),fi.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const n=t.cameras[i];if(ui.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),fi.setFromProjectionMatrix(ui,n.coordinateSystem,n.reversedDepth),fi.containsPoint(e))return!0}return!1}clone(){return new Gc}}function qh(s,e){return s-e}function L_(s,e){return s.z-e.z}function U_(s,e){return e.z-s.z}class N_{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}}const yn=new Ye,F_=new Ie(1,1,1),Jd=new ea,O_=new Gc,Zo=new It,yr=new Lt,Ma=new D,Qd=new D,B_=new D,jh=new N_,nn=new At,Jo=[];function k_(s,e,t=0){const i=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const n=s.count;for(let r=0;r<n;r++)for(let a=0;a<i;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*i);e.needsUpdate=!0}function br(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let i=0;i<t;i++)e[i]=s[i]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class gg extends At{constructor(e,t,i=t*2,n){super(new nt,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new si(t,e,e,fn,un);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new si(t,e,e,uo,Hn);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new si(t,e,e,fn,un);i.colorSpace=lt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(i*l),u=new _t(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new _t(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=e.getAttribute(i),r=t.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,yn),this.getBoundingBoxAt(r,Zo).applyMatrix4(yn),e.union(Zo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,yn),this.getBoundingSphereAt(r,yr).applyMatrix4(yn),e.union(yr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const i={visible:!0,active:!0,geometryIndex:e};let n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(qh),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=i):(n=this._instanceInfo.length,this._instanceInfo.push(i));const r=this._matricesTexture;yn.identity().toArray(r.image.data,n*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(F_.toArray(a.image.data,n*4),a.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?a.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(qh),l=this._availableGeometryIds.shift(),r[l]=n):(l=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(l,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(n&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in i.attributes){const u=t.getAttribute(h),f=i.getAttribute(h);k_(u,f,l);const d=u.itemSize;for(let p=u.count,v=c;p<v;p++){const m=l+p;for(let g=0;g<d;g++)f.setComponent(m,g,0)}f.needsUpdate=!0,f.addUpdateRange(l*d,c*d)}if(n){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let f=0;f<a.count;f++)r.setX(h+f,l+a.getX(f));for(let f=a.count,d=u;f<d;f++)r.setX(h+f,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,n=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),r=this.geometry;for(let a=0,o=i.length;a<o;a++){const l=n[a],c=i[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:f}=c,d=r.index,p=d.array,v=e-u;for(let m=h;m<h+f;m++)p[m]=p[m]+v;d.array.copyWithin(t,h,h+f),d.addUpdateRange(t,f),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,f=r.attributes;for(const d in f){const p=f[d],{array:v,itemSize:m}=p;v.copyWithin(e*m,h*m,(h+u)*m),p.addUpdateRange(e*m,u*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){const r=new It,a=i.index,o=i.attributes.position;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Ma.fromBufferAttribute(o,h))}n.boundingBox=r}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){const r=new Lt;this.getBoundingBoxAt(e,Zo),Zo.getCenter(r.center);const a=i.index,o=i.attributes.position;let l=0;for(let c=n.start,h=n.start+n.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Ma.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(Ma))}r.radius=Math.sqrt(l),n.boundingSphere=r}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(qh);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const n=new Int32Array(e),r=new Int32Array(e);br(this._multiDrawCounts,n),br(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),br(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),br(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),br(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new nt,this._initializeGeometry(r));const a=this.geometry;r.index&&br(r.index.array,a.index.array);for(const o in r.attributes)br(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,a=this.geometry;nn.material=this.material,nn.geometry.index=a.index,nn.geometry.attributes=a.attributes,nn.geometry.boundingBox===null&&(nn.geometry.boundingBox=new It),nn.geometry.boundingSphere===null&&(nn.geometry.boundingSphere=new Lt);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,h=n[c];nn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,nn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,nn.geometry.boundingBox),this.getBoundingSphereAt(c,nn.geometry.boundingSphere),nn.raycast(e,Jo);for(let u=0,f=Jo.length;u<f;u++){const d=Jo[u];d.object=this,d.batchId=o,t.push(d)}Jo.length=0}nn.material=null,nn.geometry.index=null,nn.geometry.attributes={},nn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,n,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=n.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data,v=i.isArrayCamera?O_:Jd;f&&!i.isArrayCamera&&(yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Jd.setFromProjectionMatrix(yn,i.coordinateSystem,i.reversedDepth));let m=0;if(this.sortObjects){yn.copy(this.matrixWorld).invert(),Ma.setFromMatrixPosition(i.matrixWorld).applyMatrix4(yn),Qd.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(yn);for(let _=0,x=l.length;_<x;_++)if(l[_].visible&&l[_].active){const S=l[_].geometryIndex;this.getMatrixAt(_,yn),this.getBoundingSphereAt(S,yr).applyMatrix4(yn);let w=!1;if(f&&(w=!v.intersectsSphere(yr,i)),!w){const A=u[S],E=B_.subVectors(yr.center,Ma).dot(Qd);jh.push(A.start,A.count,E,_)}}const g=jh.list,y=this.customSort;y===null?g.sort(r.transparent?U_:L_):y.call(this,g,i);for(let _=0,x=g.length;_<x;_++){const S=g[_];c[m]=S.start*o,h[m]=S.count,p[m]=S.index,m++}jh.reset()}else for(let g=0,y=l.length;g<y;g++)if(l[g].visible&&l[g].active){const _=l[g].geometryIndex;let x=!1;if(f&&(this.getMatrixAt(g,yn),this.getBoundingSphereAt(_,yr).applyMatrix4(yn),x=!v.intersectsSphere(yr,i)),!x){const S=u[_];c[m]=S.start*o,h[m]=S.count,p[m]=g,m++}}d.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,r,a){this.onBeforeRender(e,null,n,r,a)}}class sn extends Ht{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gc=new D,vc=new D,$d=new Ye,Ta=new Oi,Qo=new Lt,Kh=new D,ep=new D;class Fi extends ht{constructor(e=new nt,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)gc.fromBufferAttribute(t,n-1),vc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=gc.distanceTo(vc);e.setAttribute("lineDistance",new Ge(i,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(n),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;$d.copy(n).invert(),Ta.copy(e.ray).applyMatrix4($d);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=d,m=p-1;v<m;v+=c){const g=h.getX(v),y=h.getX(v+1),_=$o(this,e,Ta,l,g,y,v);_&&t.push(_)}if(this.isLineLoop){const v=h.getX(p-1),m=h.getX(d),g=$o(this,e,Ta,l,v,m,p-1);g&&t.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=d,m=p-1;v<m;v+=c){const g=$o(this,e,Ta,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){const v=$o(this,e,Ta,l,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $o(s,e,t,i,n,r,a){const o=s.geometry.attributes.position;if(gc.fromBufferAttribute(o,n),vc.fromBufferAttribute(o,r),t.distanceSqToSegment(gc,vc,Kh,ep)>i)return;Kh.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Kh);if(!(c<e.near||c>e.far))return{distance:c,point:ep.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const tp=new D,np=new D;class oi extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)tp.fromBufferAttribute(t,n),np.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+tp.distanceTo(np);e.setAttribute("lineDistance",new Ge(i,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wf extends Fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Hc=class extends Ht{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const ip=new Ye,Iu=new Oi,el=new Lt,tl=new D;class Af extends ht{constructor(e=new nt,t=new Hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(n),el.radius+=r,e.ray.intersectsSphere(el)===!1)return;ip.copy(n).invert(),Iu.copy(e.ray).applyMatrix4(ip);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,v=d;p<v;p++){const m=c.getX(p);tl.fromBufferAttribute(u,m),rp(tl,m,l,n,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,v=d;p<v;p++)tl.fromBufferAttribute(u,p),rp(tl,p,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rp(s,e,t,i,n,r,a){const o=Iu.distanceSqToPoint(s);if(o<t){const l=new D;Iu.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vg extends Et{constructor(e,t,i,n,r=yt,a=yt,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class z_ extends vg{constructor(e,t,i,n,r,a,o,l){super({},e,t,i,n,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class V_ extends Et{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Wc extends Et{constructor(e,t,i,n,r,a,o,l,c,h,u,f){super(null,a,o,l,c,h,n,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class G_ extends Wc{constructor(e,t,i,n,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=hn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends Wc{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,xi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class W_ extends Et{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ks extends Et{constructor(e,t,i=Hn,n,r,a,o=Pt,l=Pt,c,h=bi,u=1){if(h!==bi&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _g extends Ks{constructor(e,t=Hn,i=xi,n,r,a=Pt,o=Pt,l,c=bi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ef extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xc extends nt{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=i*2+r,v=n+1,m=new D,g=new D;for(let y=0;y<=p;y++){let _=0,x=0,S=0,w=0;if(y<=i){const b=y/i,M=b*Math.PI/2;x=-h-e*Math.cos(M),S=e*Math.sin(M),w=-e*Math.cos(M),_=b*u}else if(y<=i+r){const b=(y-i)/r;x=-h+b*t,S=e,w=0,_=u+b*f}else{const b=(y-i-r)/i,M=b*Math.PI/2;x=h+e*Math.sin(M),S=e*Math.cos(M),w=e*Math.sin(M),_=u+f+b*u}const A=Math.max(0,Math.min(1,_/d));let E=0;y===0?E=.5/n:y===p&&(E=-.5/n);for(let b=0;b<=n;b++){const M=b/n,L=M*Math.PI*2,I=Math.sin(L),U=Math.cos(L);g.x=-S*U,g.y=x,g.z=S*I,o.push(g.x,g.y,g.z),m.set(-S*U,w,S*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+E,A)}if(y>0){const b=(y-1)*v;for(let M=0;M<n;M++){const L=b+M,I=b+M+1,U=y*v+M,F=y*v+M+1;a.push(L,I,U),a.push(I,F,U)}}}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Yc extends nt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new D,h=new de;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*n;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class go extends nt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const v=[],m=i/2;let g=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(d,2));function y(){const x=new D,S=new D;let w=0;const A=(t-e)/i;for(let E=0;E<=r;E++){const b=[],M=E/r,L=M*(t-e)+e;for(let I=0;I<=n;I++){const U=I/n,F=U*l+o,G=Math.sin(F),B=Math.cos(F);S.x=L*G,S.y=-M*i+m,S.z=L*B,u.push(S.x,S.y,S.z),x.set(G,A,B).normalize(),f.push(x.x,x.y,x.z),d.push(U,1-M),b.push(p++)}v.push(b)}for(let E=0;E<n;E++)for(let b=0;b<r;b++){const M=v[b][E],L=v[b+1][E],I=v[b+1][E+1],U=v[b][E+1];(e>0||b!==0)&&(h.push(M,L,U),w+=3),(t>0||b!==r-1)&&(h.push(L,I,U),w+=3)}c.addGroup(g,w,0),g+=w}function _(x){const S=p,w=new de,A=new D;let E=0;const b=x===!0?e:t,M=x===!0?1:-1;for(let I=1;I<=n;I++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),p++;const L=p;for(let I=0;I<=n;I++){const F=I/n*l+o,G=Math.cos(F),B=Math.sin(F);A.x=b*B,A.y=m*M,A.z=b*G,u.push(A.x,A.y,A.z),f.push(0,M,0),w.x=G*.5+.5,w.y=B*.5*M+.5,d.push(w.x,w.y),p++}for(let I=0;I<n;I++){const U=S+I,F=L+I;x===!0?h.push(F,F+1,U):h.push(F+1,F,U),E+=3}c.addGroup(g,E,x===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vo extends go{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new vo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ur extends nt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(r.slice(),3)),this.setAttribute("uv",new Ge(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new D,x=new D,S=new D;for(let w=0;w<t.length;w+=3)d(t[w+0],_),d(t[w+1],x),d(t[w+2],S),l(_,x,S,y)}function l(y,_,x,S){const w=S+1,A=[];for(let E=0;E<=w;E++){A[E]=[];const b=y.clone().lerp(x,E/w),M=_.clone().lerp(x,E/w),L=w-E;for(let I=0;I<=L;I++)I===0&&E===w?A[E][I]=b:A[E][I]=b.clone().lerp(M,I/L)}for(let E=0;E<w;E++)for(let b=0;b<2*(w-E)-1;b++){const M=Math.floor(b/2);b%2===0?(f(A[E][M+1]),f(A[E+1][M]),f(A[E][M])):(f(A[E][M+1]),f(A[E+1][M+1]),f(A[E+1][M]))}}function c(y){const _=new D;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const y=new D;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=m(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;a.push(x,1-S)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){const _=a[y+0],x=a[y+2],S=a[y+4],w=Math.max(_,x,S),A=Math.min(_,x,S);w>.9&&A<.1&&(_<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function p(){const y=new D,_=new D,x=new D,S=new D,w=new de,A=new de,E=new de;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),w.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),E.set(a[M+4],a[M+5]),S.copy(y).add(_).add(x).divideScalar(3);const L=m(S);v(w,M+0,y,L),v(A,M+2,_,L),v(E,M+4,x,L)}}function v(y,_,x,S){S<0&&y.x===1&&(a[_]=y.x-1),x.x===0&&x.z===0&&(a[_]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.vertices,e.indices,e.radius,e.detail)}}class qc extends ur{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qc(e.radius,e.detail)}}const nl=new D,il=new D,Zh=new D,rl=new Tn;class xg extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos(Gr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:m,c:g}=rl;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),rl.getNormal(Zh),u[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const _=(y+1)%3,x=u[y],S=u[_],w=rl[h[y]],A=rl[h[_]],E=`${x}_${S}`,b=`${S}_${x}`;b in f&&f[b]?(Zh.dot(f[b].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(A.x,A.y,A.z)),f[b]=null):E in f||(f[E]={index0:c[y],index1:c[_],normal:Zh.clone()})}}for(const p in f)if(f[p]){const{index0:v,index1:m}=f[p];nl.fromBufferAttribute(o,v),il.fromBufferAttribute(o,m),d.push(nl.x,nl.y,nl.z),d.push(il.x,il.y,il.z)}this.setAttribute("position",new Ge(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],f=i[n+1]-h,d=(a-h)/f;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new de:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new D,n=[],r=[],a=[],o=new D,l=new Ye;for(let d=0;d<=e;d++){const p=d/e;n[d]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(tt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(tt(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],d*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jc extends li{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new de){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yg extends jc{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Cf(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,n(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+i*o}}}const sl=new D,Jh=new Cf,Qh=new Cf,$h=new Cf;class bg extends li{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new D){const i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(sl.subVectors(n[0],n[1]).add(n[0]),c=sl);const u=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(sl.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=sl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Jh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,v,m),Qh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,v,m),$h.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Qh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),$h.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Jh.calc(l),Qh.calc(l),$h.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new D().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sp(s,e,t,i,n){const r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function X_(s,e){const t=1-s;return t*t*e}function Y_(s,e){return 2*(1-s)*s*e}function q_(s,e){return s*s*e}function za(s,e,t,i){return X_(s,e)+Y_(s,t)+q_(s,i)}function j_(s,e){const t=1-s;return t*t*t*e}function K_(s,e){const t=1-s;return 3*t*t*s*e}function Z_(s,e){return 3*(1-s)*s*s*e}function J_(s,e){return s*s*s*e}function Va(s,e,t,i,n){return j_(s,e)+K_(s,t)+Z_(s,i)+J_(s,n)}class Rf extends li{constructor(e=new de,t=new de,i=new de,n=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new de){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Va(e,n.x,r.x,a.x,o.x),Va(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sg extends li{constructor(e=new D,t=new D,i=new D,n=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new D){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Va(e,n.x,r.x,a.x,o.x),Va(e,n.y,r.y,a.y,o.y),Va(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pf extends li{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mg extends li{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class If extends li{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(za(e,n.x,r.x,a.x),za(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Df extends li{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(za(e,n.x,r.x,a.x),za(e,n.y,r.y,a.y),za(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lf extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(sp(o,l.x,c.x,h.x,u.x),sp(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new de().fromArray(n))}return this}}var _c=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:bg,CubicBezierCurve:Rf,CubicBezierCurve3:Sg,EllipseCurve:jc,LineCurve:Pf,LineCurve3:Mg,QuadraticBezierCurve:If,QuadraticBezierCurve3:Df,SplineCurve:Lf});class Tg extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new _c[n.type]().fromJSON(n))}return this}}class xc extends Tg{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Pf(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new If(this.currentPoint.clone(),new de(e,t),new de(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){const o=new Rf(this.currentPoint.clone(),new de(e,t),new de(i,n),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Lf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){const c=new jc(e,t,i,n,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hr extends xc{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new xc().fromJSON(n))}return this}}function Q_(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=wg(s,0,n,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=ix(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,u=l;for(let f=t;f<n;f+=t){const d=s[f],p=s[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return eo(r,a,t,o,l,c,0),a}function wg(s,e,t,i,n){let r;if(n===px(s,e,t,i)>0)for(let a=e;a<t;a+=i)r=ap(a/i|0,s[a],s[a+1],r);else for(let a=t-i;a>=e;a-=i)r=ap(a/i|0,s[a],s[a+1],r);return r&&Zs(r,r.next)&&(no(r),r=r.next),r}function jr(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Zs(t,t.next)||Ct(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function eo(s,e,t,i,n,r,a){if(!s)return;!a&&r&&lx(s,i,n,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?ex(s,i,n,r):$_(s)){e.push(l.i,s.i,c.i),no(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=tx(jr(s),e),eo(s,e,t,i,n,r,2)):a===2&&nx(s,e,t,i,n,r):eo(jr(s),e,t,i,n,r,1);break}}}function $_(s){const e=s.prev,t=s,i=s.next;if(Ct(e,t,i)>=0)return!1;const n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(n,r,a),u=Math.min(o,l,c),f=Math.max(n,r,a),d=Math.max(o,l,c);let p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Pa(n,o,r,l,a,c,p.x,p.y)&&Ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ex(s,e,t,i){const n=s.prev,r=s,a=s.next;if(Ct(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),v=Math.max(o,l,c),m=Math.max(h,u,f),g=Du(d,p,e,t,i),y=Du(v,m,e,t,i);let _=s.prevZ,x=s.nextZ;for(;_&&_.z>=g&&x&&x.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Pa(o,h,l,u,c,f,_.x,_.y)&&Ct(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Pa(o,h,l,u,c,f,x.x,x.y)&&Ct(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Pa(o,h,l,u,c,f,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Pa(o,h,l,u,c,f,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tx(s,e){let t=s;do{const i=t.prev,n=t.next.next;!Zs(i,n)&&Eg(i,t,t.next,n)&&to(i,n)&&to(n,i)&&(e.push(i.i,t.i,n.i),no(t),no(t.next),t=s=n),t=t.next}while(t!==s);return jr(t)}function nx(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ux(a,o)){let l=Cg(a,o);a=jr(a,a.next),l=jr(l,l.next),eo(a,e,t,i,n,r,0),eo(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function ix(s,e,t,i){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=wg(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(hx(c))}n.sort(rx);for(let r=0;r<n.length;r++)t=sx(n[r],t);return t}function rx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function sx(s,e){const t=ax(s,e);if(!t)return e;const i=Cg(t,s);return jr(i,i.next),jr(t,t.next)}function ax(s,e){let t=e;const i=s.x,n=s.y;let r=-1/0,a;if(Zs(s,t))return t;do{if(Zs(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Ag(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){const u=Math.abs(n-t.y)/(i-t.x);to(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&ox(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function ox(s,e){return Ct(s.prev,s,e.prev)<0&&Ct(e.next,s,s.next)<0}function lx(s,e,t,i){let n=s;do n.z===0&&(n.z=Du(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,cx(n)}function cx(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,t*=2}while(e>1);return s}function Du(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function hx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ag(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function Pa(s,e,t,i,n,r,a,o){return!(s===a&&e===o)&&Ag(s,e,t,i,n,r,a,o)}function ux(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!fx(s,e)&&(to(s,e)&&to(e,s)&&dx(s,e)&&(Ct(s.prev,s,e.prev)||Ct(s,e.prev,e))||Zs(s,e)&&Ct(s.prev,s,s.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Zs(s,e){return s.x===e.x&&s.y===e.y}function Eg(s,e,t,i){const n=ol(Ct(s,e,t)),r=ol(Ct(s,e,i)),a=ol(Ct(t,i,s)),o=ol(Ct(t,i,e));return!!(n!==r&&a!==o||n===0&&al(s,t,e)||r===0&&al(s,i,e)||a===0&&al(t,s,i)||o===0&&al(t,e,i))}function al(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ol(s){return s>0?1:s<0?-1:0}function fx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Eg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function to(s,e){return Ct(s.prev,s,s.next)<0?Ct(s,e,s.next)>=0&&Ct(s,s.prev,e)>=0:Ct(s,e,s.prev)<0||Ct(s,s.next,e)<0}function dx(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Cg(s,e){const t=Lu(s.i,s.x,s.y),i=Lu(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ap(s,e,t,i){const n=Lu(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function no(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Lu(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function px(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class mx{static triangulate(e,t,i=2){return Q_(e,t,i)}}class ii{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return ii.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];op(e),lp(i,e);let a=e.length;t.forEach(op);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,lp(i,t[l]);const o=mx.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function op(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function lp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Kc extends nt{constructor(e=new Hr([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ge(n,3)),this.setAttribute("uv",new Ge(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:gx;let _,x=!1,S,w,A,E;if(g){_=g.getSpacedPoints(h),x=!0,f=!1;const re=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,re),w=new D,A=new D,E=new D}f||(m=0,d=0,p=0,v=0);const b=o.extractPoints(c);let M=b.shape;const L=b.holes;if(!ii.isClockWise(M)){M=M.reverse();for(let re=0,ie=L.length;re<ie;re++){const ne=L[re];ii.isClockWise(ne)&&(L[re]=ne.reverse())}}function U(re){const ne=10000000000000001e-36;let fe=re[0];for(let R=1;R<=re.length;R++){const Ae=R%re.length,ue=re[Ae],ae=ue.x-fe.x,me=ue.y-fe.y,C=ae*ae+me*me,T=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(fe.x),Math.abs(fe.y)),O=ne*T*T;if(C<=O){re.splice(Ae,1),R--;continue}fe=ue}}U(M),L.forEach(U);const F=L.length,G=M;for(let re=0;re<F;re++){const ie=L[re];M=M.concat(ie)}function B(re,ie,ne){return ie||qe("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ie,ne)}const H=M.length;function Y(re,ie,ne){let fe,R,Ae;const ue=re.x-ie.x,ae=re.y-ie.y,me=ne.x-re.x,C=ne.y-re.y,T=ue*ue+ae*ae,O=ue*C-ae*me;if(Math.abs(O)>Number.EPSILON){const $=Math.sqrt(T),Q=Math.sqrt(me*me+C*C),j=ie.x-ae/$,we=ie.y+ue/$,_e=ne.x-C/Q,Re=ne.y+me/Q,Be=((_e-j)*C-(Re-we)*me)/(ue*C-ae*me);fe=j+ue*Be-re.x,R=we+ae*Be-re.y;const he=fe*fe+R*R;if(he<=2)return new de(fe,R);Ae=Math.sqrt(he/2)}else{let $=!1;ue>Number.EPSILON?me>Number.EPSILON&&($=!0):ue<-Number.EPSILON?me<-Number.EPSILON&&($=!0):Math.sign(ae)===Math.sign(C)&&($=!0),$?(fe=-ae,R=ue,Ae=Math.sqrt(T)):(fe=ue,R=ae,Ae=Math.sqrt(T/2))}return new de(fe/Ae,R/Ae)}const q=[];for(let re=0,ie=G.length,ne=ie-1,fe=re+1;re<ie;re++,ne++,fe++)ne===ie&&(ne=0),fe===ie&&(fe=0),q[re]=Y(G[re],G[ne],G[fe]);const X=[];let N,W=q.concat();for(let re=0,ie=F;re<ie;re++){const ne=L[re];N=[];for(let fe=0,R=ne.length,Ae=R-1,ue=fe+1;fe<R;fe++,Ae++,ue++)Ae===R&&(Ae=0),ue===R&&(ue=0),N[fe]=Y(ne[fe],ne[Ae],ne[ue]);X.push(N),W=W.concat(N)}let Z;if(m===0)Z=ii.triangulateShape(G,L);else{const re=[],ie=[];for(let ne=0;ne<m;ne++){const fe=ne/m,R=d*Math.cos(fe*Math.PI/2),Ae=p*Math.sin(fe*Math.PI/2)+v;for(let ue=0,ae=G.length;ue<ae;ue++){const me=B(G[ue],q[ue],Ae);ve(me.x,me.y,-R),fe===0&&re.push(me)}for(let ue=0,ae=F;ue<ae;ue++){const me=L[ue];N=X[ue];const C=[];for(let T=0,O=me.length;T<O;T++){const $=B(me[T],N[T],Ae);ve($.x,$.y,-R),fe===0&&C.push($)}fe===0&&ie.push(C)}}Z=ii.triangulateShape(re,ie)}const se=Z.length,te=p+v;for(let re=0;re<H;re++){const ie=f?B(M[re],W[re],te):M[re];x?(A.copy(S.normals[0]).multiplyScalar(ie.x),w.copy(S.binormals[0]).multiplyScalar(ie.y),E.copy(_[0]).add(A).add(w),ve(E.x,E.y,E.z)):ve(ie.x,ie.y,0)}for(let re=1;re<=h;re++)for(let ie=0;ie<H;ie++){const ne=f?B(M[ie],W[ie],te):M[ie];x?(A.copy(S.normals[re]).multiplyScalar(ne.x),w.copy(S.binormals[re]).multiplyScalar(ne.y),E.copy(_[re]).add(A).add(w),ve(E.x,E.y,E.z)):ve(ne.x,ne.y,u/h*re)}for(let re=m-1;re>=0;re--){const ie=re/m,ne=d*Math.cos(ie*Math.PI/2),fe=p*Math.sin(ie*Math.PI/2)+v;for(let R=0,Ae=G.length;R<Ae;R++){const ue=B(G[R],q[R],fe);ve(ue.x,ue.y,u+ne)}for(let R=0,Ae=L.length;R<Ae;R++){const ue=L[R];N=X[R];for(let ae=0,me=ue.length;ae<me;ae++){const C=B(ue[ae],N[ae],fe);x?ve(C.x,C.y+_[h-1].y,_[h-1].x+ne):ve(C.x,C.y,u+ne)}}}z(),k();function z(){const re=n.length/3;if(f){let ie=0,ne=H*ie;for(let fe=0;fe<se;fe++){const R=Z[fe];pe(R[2]+ne,R[1]+ne,R[0]+ne)}ie=h+m*2,ne=H*ie;for(let fe=0;fe<se;fe++){const R=Z[fe];pe(R[0]+ne,R[1]+ne,R[2]+ne)}}else{for(let ie=0;ie<se;ie++){const ne=Z[ie];pe(ne[2],ne[1],ne[0])}for(let ie=0;ie<se;ie++){const ne=Z[ie];pe(ne[0]+H*h,ne[1]+H*h,ne[2]+H*h)}}i.addGroup(re,n.length/3-re,0)}function k(){const re=n.length/3;let ie=0;J(G,ie),ie+=G.length;for(let ne=0,fe=L.length;ne<fe;ne++){const R=L[ne];J(R,ie),ie+=R.length}i.addGroup(re,n.length/3-re,1)}function J(re,ie){let ne=re.length;for(;--ne>=0;){const fe=ne;let R=ne-1;R<0&&(R=re.length-1);for(let Ae=0,ue=h+m*2;Ae<ue;Ae++){const ae=H*Ae,me=H*(Ae+1),C=ie+fe+ae,T=ie+R+ae,O=ie+R+me,$=ie+fe+me;be(C,T,O,$)}}}function ve(re,ie,ne){l.push(re),l.push(ie),l.push(ne)}function pe(re,ie,ne){ge(re),ge(ie),ge(ne);const fe=n.length/3,R=y.generateTopUV(i,n,fe-3,fe-2,fe-1);Pe(R[0]),Pe(R[1]),Pe(R[2])}function be(re,ie,ne,fe){ge(re),ge(ie),ge(fe),ge(ie),ge(ne),ge(fe);const R=n.length/3,Ae=y.generateSideWallUV(i,n,R-6,R-3,R-2,R-1);Pe(Ae[0]),Pe(Ae[1]),Pe(Ae[3]),Pe(Ae[1]),Pe(Ae[2]),Pe(Ae[3])}function ge(re){n.push(l[re*3+0]),n.push(l[re*3+1]),n.push(l[re*3+2])}function Pe(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return vx(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new _c[n.type]().fromJSON(n)),new Kc(i,e.options)}}const gx={generateTopUV:function(s,e,t,i,n){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new de(r,a),new de(o,l),new de(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[n*3],d=e[n*3+1],p=e[n*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-u),new de(f,1-p),new de(v,1-g)]:[new de(o,1-l),new de(h,1-u),new de(d,1-p),new de(m,1-g)]}};function vx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zc extends ur{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zc(e.radius,e.detail)}}class Jc extends nt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=tt(n,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new D,f=new de,d=new D,p=new D,v=new D;let m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(p)}for(let y=0;y<=t;y++){const _=i+y*h*n,x=Math.sin(_),S=Math.cos(_);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*x,u.y=e[w].y,u.z=e[w].x*S,a.push(u.x,u.y,u.z),f.x=y/t,f.y=w/(e.length-1),o.push(f.x,f.y);const A=l[3*w+0]*x,E=l[3*w+1],b=l[3*w+0]*S;c.push(A,E,b)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,S=x,w=x+e.length,A=x+e.length+1,E=x+1;r.push(S,w,E),r.push(A,E,w)}this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.points,e.segments,e.phiStart,e.phiLength)}}class _o extends ur{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _o(e.radius,e.detail)}}class Bi extends nt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const y=g*f-a;for(let _=0;_<c;_++){const x=_*u-r;p.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const _=y+c*g,x=y+c*(g+1),S=y+1+c*(g+1),w=y+1+c*g;d.push(_,x,w),d.push(x,S,w)}this.setIndex(d),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qc extends nt{constructor(e=.5,t=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/n,d=new D,p=new de;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const g=r+m/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let v=0;v<n;v++){const m=v*(i+1);for(let g=0;g<i;g++){const y=g+m,_=y,x=y+i+1,S=y+i+2,w=y+1;o.push(_,x,w),o.push(x,S,w)}}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $c extends nt{constructor(e=new Hr([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ge(n,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(a,2));function c(h){const u=n.length/3,f=h.extractPoints(t);let d=f.shape;const p=f.holes;ii.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const y=p[m];ii.isClockWise(y)===!0&&(p[m]=y.reverse())}const v=ii.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){const y=d[m];n.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,g=v.length;m<g;m++){const y=v[m],_=y[0]+u,x=y[1]+u,S=y[2]+u;i.push(_,x,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _x(t,e)}static fromJSON(e,t){const i=[];for(let n=0,r=e.shapes.length;n<r;n++){const a=t[e.shapes[n]];i.push(a)}return new $c(i,e.curveSegments)}}function _x(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}class xo extends nt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){const y=[],_=g/i;let x=0;g===0&&a===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const w=S/t;u.x=-e*Math.cos(n+w*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(n+w*r)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(w+x,1-_),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){const _=h[g][y+1],x=h[g][y],S=h[g+1][y],w=h[g+1][y+1];(g!==0||a>0)&&d.push(_,x,w),(g!==i-1||l<Math.PI)&&d.push(x,S,w)}this.setIndex(d),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class eh extends ur{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eh(e.radius,e.detail)}}class th extends nt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=i;d++)for(let p=0;p<=n;p++){const v=p/n*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=n;p++){const v=(n+1)*d+p-1,m=(n+1)*(d-1)+p-1,g=(n+1)*(d-1)+p,y=(n+1)*d+p;a.push(v,m,y),a.push(m,g,y)}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class nh extends nt{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],c=[],h=[],u=new D,f=new D,d=new D,p=new D,v=new D,m=new D,g=new D;for(let _=0;_<=i;++_){const x=_/i*r*Math.PI*2;y(x,r,a,e,d),y(x+.01,r,a,e,p),m.subVectors(p,d),g.addVectors(p,d),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let S=0;S<=n;++S){const w=S/n*Math.PI*2,A=-t*Math.cos(w),E=t*Math.sin(w);u.x=d.x+(A*g.x+E*v.x),u.y=d.y+(A*g.y+E*v.y),u.z=d.z+(A*g.z+E*v.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(_/i),h.push(S/n)}}for(let _=1;_<=i;_++)for(let x=1;x<=n;x++){const S=(n+1)*(_-1)+(x-1),w=(n+1)*_+(x-1),A=(n+1)*_+x,E=(n+1)*(_-1)+x;o.push(S,w,E),o.push(w,A,E)}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2));function y(_,x,S,w,A){const E=Math.cos(_),b=Math.sin(_),M=S/x*_,L=Math.cos(M);A.x=w*(2+L)*.5*E,A.y=w*(2+L)*b*.5,A.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ih extends nt{constructor(e=new Df(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new de;let h=new D;const u=[],f=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(d,2));function v(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),y(),g()}function m(_){h=e.getPointAt(_/t,h);const x=a.normals[_],S=a.binormals[_];for(let w=0;w<=n;w++){const A=w/n*Math.PI*2,E=Math.sin(A),b=-Math.cos(A);l.x=b*x.x+E*S.x,l.y=b*x.y+E*S.y,l.z=b*x.z+E*S.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let _=1;_<=t;_++)for(let x=1;x<=n;x++){const S=(n+1)*(_-1)+(x-1),w=(n+1)*_+(x-1),A=(n+1)*_+x,E=(n+1)*(_-1)+x;p.push(S,w,E),p.push(w,A,E)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=n;x++)c.x=_/t,c.y=x/n,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ih(new _c[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Rg extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new D,r=new D;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,d=u.count;for(let p=f,v=f+d;p<v;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),y=o.getX(p+(m+1)%3);n.fromBufferAttribute(a,g),r.fromBufferAttribute(a,y),cp(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),cp(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function cp(s,e,t){const i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)===!0||t.has(n)===!0?!1:(t.add(i),t.add(n),!0)}var hp=Object.freeze({__proto__:null,BoxGeometry:is,CapsuleGeometry:Xc,CircleGeometry:Yc,ConeGeometry:vo,CylinderGeometry:go,DodecahedronGeometry:qc,EdgesGeometry:xg,ExtrudeGeometry:Kc,IcosahedronGeometry:Zc,LatheGeometry:Jc,OctahedronGeometry:_o,PlaneGeometry:Bi,PolyhedronGeometry:ur,RingGeometry:Qc,ShapeGeometry:$c,SphereGeometry:xo,TetrahedronGeometry:eh,TorusGeometry:th,TorusKnotGeometry:nh,TubeGeometry:ih,WireframeGeometry:Rg});class Pg extends Ht{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Uf extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yo extends Ht{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends yo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ig extends Ht{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dg extends Ht{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Lg extends Ht{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ug extends Ht{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rh extends Ht{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sh extends Ht{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ng extends Ht{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fg extends sn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function kr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Og(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Uu(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function Nf(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}function xx(s,e,t,i,n=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],f=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*n;if(!(p<t||p>=i)){u.push(c.times[d]);for(let v=0;v<h;++v)f.push(c.values[d*h+v])}}u.length!==0&&(c.times=kr(u,c.times.constructor),c.values=kr(f,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function yx(s,e=0,t=s,i=30){i<=0&&(i=30);const n=t.tracks.length,r=e/i;for(let a=0;a<n;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=o.times.length-1;let v;if(r<=o.times[0]){const g=h,y=u-h;v=o.values.slice(g,y)}else if(r>=o.times[p]){const g=p*u+h,y=g+u-h;v=o.values.slice(g,y)}else{const g=o.createInterpolant(),y=h,_=u-h;g.evaluate(r),v=g.resultBuffer.slice(y,_)}l==="quaternion"&&new Kt().fromArray(v).normalize().conjugate().toArray(v);const m=c.times.length;for(let g=0;g<m;++g){const y=g*d+f;if(l==="quaternion")Kt.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const _=d-f*2;for(let x=0;x<_;++x)c.values[y+x]-=v[x]}}}return s.blendMode=df,s}class bx{static convertArray(e,t){return kr(e,t)}static isTypedArray(e){return og(e)}static getKeyframeOrder(e){return Og(e)}static sortedArray(e,t,i){return Uu(e,t,i)}static flattenJSON(e,t,i,n){Nf(e,t,i,n)}static subclip(e,t,i,n,r=30){return xx(e,t,i,n,r)}static makeClipAdditive(e,t=0,i=e,n=30){return yx(e,t,i,n)}}class ta{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bg extends ta{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Or,endingEnd:Or}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Br:r=e,o=2*t-i;break;case Ka:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Br:a=e,l=2*i-t;break;case Ka:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(n-t),v=p*p,m=v*p,g=-f*m+2*f*v-f*p,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,_=(-1-d)*m+(1.5+d)*v+.5*p,x=d*m-d*v;for(let S=0;S!==o;++S)r[S]=g*a[h+S]+y*a[c+S]+_*a[l+S]+x*a[u+S];return r}}class Ff extends ta{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class kg extends ta{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new kg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Sl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&og(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Sl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){const v=t[u+p];if(v!==t[f+p]||v!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ws;class rs extends qn{constructor(e,t,i){super(e,t,i)}}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Hs;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Of extends qn{constructor(e,t,i,n){super(e,t,i,n)}}Of.prototype.ValueTypeName="color";class Kr extends qn{constructor(e,t,i,n){super(e,t,i,n)}}Kr.prototype.ValueTypeName="number";class zg extends ta{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Kt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Zr extends qn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new zg(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends qn{constructor(e,t,i){super(e,t,i)}}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Hs;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends qn{constructor(e,t,i,n){super(e,t,i,n)}}Jr.prototype.ValueTypeName="vector";class Js{constructor(e="",t=-1,i=[],n=Ic){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Mx(i[a]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(qn.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Og(l);l=Uu(l,1,h),c=Uu(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Kr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=n[u];f||(n[u]=f=[]),f.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(Fe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return qe("AnimationClip: No animation in JSONLoader data."),null;const i=function(u,f,d,p,v){if(d.length!==0){const m=[],g=[];Nf(d,m,g,p),m.length!==0&&v.push(new u(f,m,g))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let v=0;v<f[p].morphTargets.length;v++)d[f[p].morphTargets[v]]=-1;for(const v in d){const m=[],g=[];for(let y=0;y!==f[p].morphTargets.length;++y){const _=f[p];m.push(_.time),g.push(_.morphTarget===v?1:0)}n.push(new Kr(".morphTargetInfluence["+v+"]",m,g))}l=d.length*a}else{const d=".bones["+t[u].name+"]";i(Jr,d+".position",f,"pos",n),i(Zr,d+".quaternion",f,"rot",n),i(Jr,d+".scale",f,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Sx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kr;case"vector":case"vector2":case"vector3":case"vector4":return Jr;case"color":return Of;case"quaternion":return Zr;case"bool":case"boolean":return rs;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Mx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sx(s.type);if(s.times===void 0){const t=[],i=[];Nf(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const gi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Bf{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const as=new Bf;class gn{constructor(e){this.manager=e!==void 0?e:as,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class Tx extends Error{constructor(e,t){super(e),this.response=t}}class ai extends gn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:i,onError:n});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ci[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let v=0;const m=new ReadableStream({start(g){y();function y(){u.read().then(({done:_,value:x})=>{if(_)g.close();else{v+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let w=0,A=h.length;w<A;w++){const E=h[w];E.onProgress&&E.onProgress(S)}g.enqueue(x),y()}},_=>{g.error(_)})}}});return new Response(m)}else throw new Tx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{gi.add(`file:${e}`,c);const h=Ci[e];delete Ci[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Ci[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class wx extends gn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new ai(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):qe(l),r.manager.itemError(e)}},i,n)}parse(e){const t=[];for(let i=0;i<e.length;i++){const n=Js.parse(e[i]);t.push(n)}return t}}class Ax extends gn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=[],o=new Wc,l=new ai(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(f){const d=r.parse(f,!0);a[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=yt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},i,n)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)h(u);else l.load(e,function(u){const f=r.parse(u,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let v=0;v<f.mipmapCount;v++)a[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+v]),a[p].format=f.format,a[p].width=f.width,a[p].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=yt),o.format=f.format,o.needsUpdate=!0,t&&t(o)},i,n);return o}}const Rs=new WeakMap;class io extends gn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=gi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Rs.get(a);u===void 0&&(u=[],Rs.set(a,u)),u.push({onLoad:t,onError:n})}return a}const o=Qa("img");function l(){h(),t&&t(this);const u=Rs.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Rs.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),gi.remove(`image:${e}`);const f=Rs.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}Rs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Ex extends gn{constructor(e){super(e)}load(e,t,i,n){const r=new fo;r.colorSpace=Vt;const a=new io(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return r}}class Cx extends gn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new si,o=new ai(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(n!==void 0)n(h);else{h(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:hn,a.wrapT=c.wrapT!==void 0?c.wrapT:hn,a.magFilter=c.magFilter!==void 0?c.magFilter:yt,a.minFilter=c.minFilter!==void 0?c.minFilter:yt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=zn),c.mipmapCount===1&&(a.minFilter=yt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,n),a}}class Vg extends gn{constructor(e){super(e)}load(e,t,i,n){const r=new Et,a=new io(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class fr extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Gg extends fr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const eu=new Ye,up=new D,fp=new D;class kf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;up.setFromMatrixPosition(e.matrixWorld),t.position.copy(up),fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fp),t.updateMatrixWorld(),eu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rx extends kf{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=qs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zf extends fr{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Rx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Px extends kf{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}}class Vf extends fr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Px}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class os extends Bc{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ix extends kf{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gf extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Ix}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Hg extends fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wg extends fr{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Hf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*n)),t.addScaledVector(a[5],1.092548*(n*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(i*r)),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*n),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*n),t.addScaledVector(a[5],2*.429043*n*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*i*r),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}}class Xg extends fr{constructor(e=new Hf,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ah extends gn{constructor(e){super(e),this.textures={}}load(e,t,i,n){const r=this,a=new ai(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):qe(l),r.manager.itemError(e)}},i,n)}parse(e){const t=this.textures;function i(r){return t[r]===void 0&&Fe("MaterialLoader: Undefined texture",r),t[r]}const n=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=e.sheen),e.sheenColor!==void 0&&(n.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(n.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&n.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular!==void 0&&n.specular.setHex(e.specular),e.specularIntensity!==void 0&&(n.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&n.specularColor!==void 0&&n.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(n.dispersion=e.dispersion),e.iridescence!==void 0&&(n.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(n.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(n.transmission=e.transmission),e.thickness!==void 0&&(n.thickness=e.thickness),e.attenuationDistance!==void 0&&(n.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&n.attenuationColor!==void 0&&n.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(n.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.shadowSide!==void 0&&(n.shadowSide=e.shadowSide),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(n.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(n.depthFunc=e.depthFunc),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(n.blendSrc=e.blendSrc),e.blendDst!==void 0&&(n.blendDst=e.blendDst),e.blendEquation!==void 0&&(n.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(n.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(n.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(n.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&n.blendColor!==void 0&&n.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(n.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==void 0&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(n.dithering=e.dithering),e.alphaToCoverage!==void 0&&(n.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(n.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(n.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(n.allowOverride=e.allowOverride),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(n.uniforms[r]={},a.type){case"t":n.uniforms[r].value=i(a.value);break;case"c":n.uniforms[r].value=new Ie().setHex(a.value);break;case"v2":n.uniforms[r].value=new de().fromArray(a.value);break;case"v3":n.uniforms[r].value=new D().fromArray(a.value);break;case"v4":n.uniforms[r].value=new pt().fromArray(a.value);break;case"m3":n.uniforms[r].value=new it().fromArray(a.value);break;case"m4":n.uniforms[r].value=new Ye().fromArray(a.value);break;default:n.uniforms[r].value=a.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(n.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)n.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(n.lights=e.lights),e.clipping!==void 0&&(n.clipping=e.clipping),e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=i(e.map)),e.matcap!==void 0&&(n.matcap=i(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),n.normalScale=new de().fromArray(r)}return e.displacementMap!==void 0&&(n.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(n.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(n.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(n.envMap=i(e.envMap)),e.envMapRotation!==void 0&&n.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(n.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(n.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(n.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(n.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(n.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(n.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(n.sheenRoughnessMap=i(e.sheenRoughnessMap)),n}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return ah.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Pg,SpriteMaterial:Sf,RawShaderMaterial:Uf,ShaderMaterial:Wn,PointsMaterial:Hc,MeshPhysicalMaterial:Yn,MeshStandardMaterial:yo,MeshPhongMaterial:Ig,MeshToonMaterial:Dg,MeshNormalMaterial:Lg,MeshLambertMaterial:Ug,MeshDepthMaterial:rh,MeshDistanceMaterial:sh,MeshBasicMaterial:dn,MeshMatcapMaterial:Ng,LineDashedMaterial:Fg,LineBasicMaterial:sn,Material:Ht};return new t[e]}}class rr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wf extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Yg extends gn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new ai(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):qe(l),r.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(d,p){if(t[p]!==void 0)return t[p];const m=d.interleavedBuffers[p],g=r(d,m.buffer),y=Ns(m.type,g),_=new po(y,m.stride);return _.uuid=m.uuid,t[p]=_,_}function r(d,p){if(i[p]!==void 0)return i[p];const m=d.arrayBuffers[p],g=new Uint32Array(m).buffer;return i[p]=g,g}const a=e.isInstancedBufferGeometry?new Wf:new nt,o=e.data.index;if(o!==void 0){const d=Ns(o.type,o.array);a.setIndex(new _t(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let v;if(p.isInterleavedBufferAttribute){const m=n(e.data,p.data);v=new lr(m,p.itemSize,p.offset,p.normalized)}else{const m=Ns(p.type,p.array),g=p.isInstancedBufferAttribute?cr:_t;v=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(d,v)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],v=[];for(let m=0,g=p.length;m<g;m++){const y=p[m];let _;if(y.isInterleavedBufferAttribute){const x=n(e.data,y.data);_=new lr(x,y.itemSize,y.offset,y.normalized)}else{const x=Ns(y.type,y.array);_=new _t(x,y.itemSize,y.normalized)}y.name!==void 0&&(_.name=y.name),v.push(_)}a.morphAttributes[d]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,p=u.length;d!==p;++d){const v=u[d];a.addGroup(v.start,v.count,v.materialIndex)}const f=e.data.boundingSphere;return f!==void 0&&(a.boundingSphere=new Lt().fromJSON(f)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Dx extends gn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=this.path===""?rr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new ai(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){n!==void 0&&n(u),u("ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),qe("ObjectLoader: Can't load "+e);return}r.parse(c,t)},i,n)}async loadAsync(e,t){const i=this,n=this.path===""?rr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const r=new ai(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,n,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){const r=new Hr().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){const i={},n={};if(t.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new mo().fromJSON(e[r],n);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const n=new Yg;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in hp?o=hp[l.type].fromJSON(l,t):Fe(`ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},n={};if(e!==void 0){const r=new ah;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=r.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const n=e[i],r=Js.parse(n);t[r.uuid]=r}return t}parseImages(e,t){const i=this,n={};let r;function a(l){return i.manager.itemStart(l),r.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(h)}else return l.data?{data:Ns(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Bf(t);r=new io(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],f=u.url;if(Array.isArray(f)){const d=[];for(let p=0,v=f.length;p<v;p++){const m=f[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new si(g.data,g.width,g.height)))}n[u.uuid]=new nr(d)}else{const d=o(u.url);n[u.uuid]=new nr(d)}}}return n}async parseImagesAsync(e){const t=this,i={};let n;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await n.loadAsync(l)}else return a.data?{data:Ns(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){n=new io(this.manager),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=await r(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new si(p.data,p.width,p.height)))}i[l.uuid]=new nr(h)}else{const h=await r(l.url);i[l.uuid]=new nr(h)}}}return i}parseTextures(e,t){function i(r,a){return typeof r=="number"?r:(Fe("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const n={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&Fe('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Fe("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new fo,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new si:h=new Et,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,Lx)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],dp),h.wrapT=i(o.wrap[1],dp)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,pp)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,pp)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),n[o.uuid]=h}return n}parseObject(e,t,i,n,r){let a;function o(f){return t[f]===void 0&&Fe("ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,v=f.length;p<v;p++){const m=f[p];i[m]===void 0&&Fe("ObjectLoader: Undefined material",m),d.push(i[m])}return d}return i[f]===void 0&&Fe("ObjectLoader: Undefined material",f),i[f]}}function c(f){return n[f]===void 0&&Fe("ObjectLoader: Undefined texture",f),n[f]}let h,u;switch(e.type){case"Scene":a=new bf,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ie(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new zc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new kc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Gt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new os(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Hg(e.color,e.intensity);break;case"DirectionalLight":a=new Gf(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Vf(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Wg(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new zf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Gg(e.color,e.groundColor,e.intensity);break;case"LightProbe":const f=new Hf().fromArray(e.sh);a=new Xg(f,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Mf(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new At(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const d=e.count,p=e.instanceMatrix,v=e.instanceColor;a=new Tf(h,u,d),a.instanceMatrix=new cr(new Float32Array(p.array),16),v!==void 0&&(a.instanceColor=new cr(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new gg(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,y=null;return m.boundingBox!==void 0&&(g=new It().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(y=new Lt().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:y}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Lt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new It().fromJSON(e.boundingBox));break;case"LOD":a=new mg;break;case"Line":a=new Fi(o(e.geometry),l(e.material));break;case"LineLoop":a=new wf(o(e.geometry),l(e.material));break;case"LineSegments":a=new oi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Af(o(e.geometry),l(e.material));break;case"Sprite":a=new pg(l(e.material));break;case"Group":a=new Li;break;case"Bone":a=new Vc;break;default:a=new ht}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,i,n,r))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=t[i.skeleton];n===void 0?Fe("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new ht}})}}const Lx={UVMapping:Mc,CubeReflectionMapping:xi,CubeRefractionMapping:sr,EquirectangularReflectionMapping:qa,EquirectangularRefractionMapping:ja,CubeUVReflectionMapping:$s},dp={RepeatWrapping:ar,ClampToEdgeWrapping:hn,MirroredRepeatWrapping:zs},pp={NearestFilter:Pt,NearestMipmapNearestFilter:Tc,NearestMipmapLinearFilter:Fr,LinearFilter:yt,LinearMipmapNearestFilter:Os,LinearMipmapLinearFilter:zn},tu=new WeakMap;class qg extends gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=gi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(tu.has(a)===!0)n&&n(tu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),tu.set(l,c),gi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let ll;class Xf{static getContext(){return ll===void 0&&(ll=new(window.AudioContext||window.webkitAudioContext)),ll}static setContext(e){ll=e}}class Ux extends gn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new ai(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Xf.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},i,n);function o(l){n?n(l):qe(l),r.manager.itemError(e)}}}const mp=new Ye,gp=new Ye,Sr=new Ye;class Nx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Gt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Gt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Sr.copy(e.projectionMatrix);const n=t.eyeSep/2,r=n*t.near/t.focus,a=t.near*Math.tan(Gr*t.fov*.5)/t.zoom;let o,l;gp.elements[12]=-n,mp.elements[12]=n,o=-a*t.aspect+r,l=a*t.aspect+r,Sr.elements[0]=2*t.near/(l-o),Sr.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Sr),o=-a*t.aspect-r,l=a*t.aspect-r,Sr.elements[0]=2*t.near/(l-o),Sr.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Sr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(gp),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(mp)}}class jg extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Kg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Mr=new D,nu=new Kt,Fx=new D,Tr=new D,wr=new D;class Ox extends ht{constructor(){super(),this.type="AudioListener",this.context=Xf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Kg}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Mr,nu,Fx),Tr.set(0,0,-1).applyQuaternion(nu),wr.set(0,1,0).applyQuaternion(nu),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Mr.x,i),t.positionY.linearRampToValueAtTime(Mr.y,i),t.positionZ.linearRampToValueAtTime(Mr.z,i),t.forwardX.linearRampToValueAtTime(Tr.x,i),t.forwardY.linearRampToValueAtTime(Tr.y,i),t.forwardZ.linearRampToValueAtTime(Tr.z,i),t.upX.linearRampToValueAtTime(wr.x,i),t.upY.linearRampToValueAtTime(wr.y,i),t.upZ.linearRampToValueAtTime(wr.z,i)}else t.setPosition(Mr.x,Mr.y,Mr.z),t.setOrientation(Tr.x,Tr.y,Tr.z,wr.x,wr.y,wr.z)}}class Zg extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Fe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Fe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Fe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Fe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Fe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Fe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Fe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Fe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Ar=new D,vp=new Kt,Bx=new D,Er=new D;class kx extends Zg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ar,vp,Bx),Er.set(0,0,1).applyQuaternion(vp);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ar.x,i),t.positionY.linearRampToValueAtTime(Ar.y,i),t.positionZ.linearRampToValueAtTime(Ar.z,i),t.orientationX.linearRampToValueAtTime(Er.x,i),t.orientationY.linearRampToValueAtTime(Er.y,i),t.orientationZ.linearRampToValueAtTime(Er.z,i)}else t.setPosition(Ar.x,Ar.y,Ar.z),t.setOrientation(Er.x,Er.y,Er.z)}}class zx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class Jg{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,a;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,a=n;r!==a;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Kt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const a=this._workIndex*r;Kt.multiplyQuaternionsFlat(e,a,e,t,e,i),Kt.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,r){const a=1-n;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*n}}}const Yf="\\[\\]\\.:\\/",Vx=new RegExp("["+Yf+"]","g"),qf="[^"+Yf+"]",Gx="[^"+Yf.replace("\\.","")+"]",Hx=/((?:WC+[\/:])*)/.source.replace("WC",qf),Wx=/(WCOD+)?/.source.replace("WCOD",Gx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qf),Yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qf),qx=new RegExp("^"+Hx+Wx+Xx+Yx+"$"),jx=["material","materials","bones","map"];class Kx{constructor(e,t,i){const n=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class dt{constructor(e,t,i){this.path=t,this.parsedPath=i||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,i):new dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vx,"")}static parseTrackName(e){const t=qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);jx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=Kx;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Dn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const f=arguments[h],d=f.uuid;let p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(f);for(let v=0,m=a;v!==m;++v)r[v].push(new dt(f,i[v],n[v]))}else if(p<c){o=e[p];const v=--c,m=e[v];t[m.uuid]=p,e[p]=m,t[d]=v,e[v]=f;for(let g=0,y=a;g!==y;++g){const _=r[g],x=_[v];let S=_[p];_[p]=x,S===void 0&&(S=new dt(f,i[g],n[g])),_[v]=S}}else e[p]!==o&&qe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,f=e[u];t[f.uuid]=h,e[h]=f,t[c]=u,e[u]=l;for(let d=0,p=n;d!==p;++d){const v=i[d],m=v[u],g=v[h];v[h]=m,v[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const f=--r,d=e[f],p=--a,v=e[p];t[d.uuid]=u,e[u]=d,t[v.uuid]=f,e[f]=v,e.pop();for(let m=0,g=n;m!==g;++m){const y=i[m],_=y[f],x=y[p];y[u]=_,y[f]=x,y.pop()}}else{const f=--a,d=e[f];f>0&&(t[d.uuid]=u),e[u]=d,e.pop();for(let p=0,v=n;p!==v;++p){const m=i[p];m[u]=m[f],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const i=this._bindingsIndicesByPath;let n=i[e];const r=this._bindings;if(n!==void 0)return r[n];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);n=r.length,i[e]=n,a.push(e),o.push(t),r.push(u);for(let f=h,d=l.length;f!==d;++f){const p=l[f];u[f]=new dt(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const n=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=i,a[i]=l,a.pop(),r[i]=r[o],r.pop(),n[i]=n[o],n.pop()}}}class Qg{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Or,endingEnd:Or};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=jm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const n=this._clip.duration,r=e._clip.duration,a=r/n,o=n/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case df:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Ic:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const a=i===Km;if(e===0)return r===-1?n:a&&(r&1)===1?t-n:n;if(i===qm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Br,n.endingEnd=Br):(e?n.endingStart=this.zeroSlopeAtStart?Br:Or:n.endingStart=Ka,t?n.endingEnd=this.zeroSlopeAtEnd?Br:Or:n.endingEnd=Ka)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const Jx=new Float32Array(1);class Qx extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=n[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;p=new Jg(dt.create(i,d,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Ff(new Float32Array(2),new Float32Array(2),1,Jx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let a=typeof e=="string"?Js.findByName(n,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Ic),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Qg(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?Js.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class $x extends vf{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isRenderTarget3D=!0,this.depth=i,this.texture=new Nc(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class jf{constructor(e){this.value=e}clone(){return new jf(this.value.clone===void 0?this.value:this.value.clone())}}let ey=0;class ty extends Si{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:ey++}),this.name="",this.usage=Ja,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){const r=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class ny extends po{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class iy{constructor(e,t,i,n,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const _p=new Ye;class ry{constructor(e,t,i=0,n=1/0){this.ray=new Oi(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _p.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_p),this}intersectObject(e,t=!0,i=[]){return Nu(e,this,i,t),i.sort(xp),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Nu(e[n],this,i,t);return i.sort(xp),i}}function xp(s,e){return s.distance-e.distance}function Nu(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Nu(r[a],e,t,!0)}}class sy{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ay.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ay(){this._document.hidden===!1&&this.reset()}class Fu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class oy{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Kf{constructor(e,t,i,n){Kf.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}const yp=new de;class ly{constructor(e=new de(1/0,1/0),t=new de(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bp=new D,cl=new D,Ps=new D,Is=new D,iu=new D,cy=new D,hy=new D;class $g{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){bp.subVectors(e,this.start),cl.subVectors(this.end,this.start);const i=cl.dot(cl);let r=cl.dot(bp)/i;return t&&(r=tt(r,0,1)),r}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=cy,i=hy){const n=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,h=e.end;Ps.subVectors(c,o),Is.subVectors(h,l),iu.subVectors(o,l);const u=Ps.dot(Ps),f=Is.dot(Is),d=Is.dot(iu);if(u<=n&&f<=n)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(u<=n)r=0,a=d/f,a=tt(a,0,1);else{const p=Ps.dot(iu);if(f<=n)a=0,r=tt(-p/u,0,1);else{const v=Ps.dot(Is),m=u*f-v*v;m!==0?r=tt((v*d-p*f)/m,0,1):r=0,a=(v*r+d)/f,a<0?(a=0,r=tt(-p/u,0,1)):a>1&&(a=1,r=tt((v-p)/u,0,1))}}return t.copy(o).add(Ps.multiplyScalar(r)),i.copy(l).add(Is.multiplyScalar(a)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Sp=new D;class uy extends ht{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new nt,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Ge(n,3));const r=new sn({fog:!1,toneMapped:!1});this.cone=new oi(i,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Sp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Sp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Zi=new D,hl=new Ye,ru=new Ye;class fy extends oi{constructor(e){const t=e0(e),i=new nt,n=[],r=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new Ge(n,3)),i.setAttribute("color",new Ge(r,3));const a=new sn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new Ie(255),l=new Ie(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");ru.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(hl.multiplyMatrices(ru,o.matrixWorld),Zi.setFromMatrixPosition(hl),n.setXYZ(a,Zi.x,Zi.y,Zi.z),hl.multiplyMatrices(ru,o.parent.matrixWorld),Zi.setFromMatrixPosition(hl),n.setXYZ(a+1,Zi.x,Zi.y,Zi.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const n=this.geometry.getAttribute("color");for(let r=0;r<n.count;r+=2)n.setXYZ(r,e.r,e.g,e.b),n.setXYZ(r+1,t.r,t.g,t.b);return n.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function e0(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...e0(s.children[t]));return e}class dy extends At{constructor(e,t,i){const n=new xo(t,4,2),r=new dn({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const py=new D,Mp=new Ie,Tp=new Ie;class my extends ht{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new _o(t);n.rotateY(Math.PI*.5),this.material=new dn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),a=new Float32Array(r.count*3);n.setAttribute("color",new _t(a,3)),this.add(new At(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Mp.copy(this.light.color),Tp.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){const r=i<n/2?Mp:Tp;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(py.setFromMatrixPosition(this.light.matrixWorld).negate())}}class gy extends oi{constructor(e=10,t=10,i=4473924,n=8947848){i=new Ie(i),n=new Ie(n);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,p=-o;f<=t;f++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=f===r?i:n;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const h=new nt;h.setAttribute("position",new Ge(l,3)),h.setAttribute("color",new Ge(c,3));const u=new sn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class vy extends oi{constructor(e=10,t=16,i=8,n=64,r=4473924,a=8947848){r=new Ie(r),a=new Ie(a);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const f=u/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,p);const v=u&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<i;u++){const f=u&1?r:a,d=e-e/i*u;for(let p=0;p<n;p++){let v=p/n*(Math.PI*2),m=Math.sin(v)*d,g=Math.cos(v)*d;o.push(m,0,g),l.push(f.r,f.g,f.b),v=(p+1)/n*(Math.PI*2),m=Math.sin(v)*d,g=Math.cos(v)*d,o.push(m,0,g),l.push(f.r,f.g,f.b)}}const c=new nt;c.setAttribute("position",new Ge(o,3)),c.setAttribute("color",new Ge(l,3));const h=new sn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const wp=new D,ul=new D,Ap=new D;class _y extends ht{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new nt;n.setAttribute("position",new Ge([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new sn({fog:!1,toneMapped:!1});this.lightPlane=new Fi(n,r),this.add(this.lightPlane),n=new nt,n.setAttribute("position",new Ge([0,0,0,0,0,1],3)),this.targetLine=new Fi(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),wp.setFromMatrixPosition(this.light.matrixWorld),ul.setFromMatrixPosition(this.light.target.matrixWorld),Ap.subVectors(ul,wp),this.lightPlane.lookAt(ul),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ul),this.targetLine.scale.z=Ap.length()}}const fl=new D,Dt=new Bc;class xy extends oi{constructor(e){const t=new nt,i=new sn({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){n.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(n.length/3-1)}t.setAttribute("position",new Ge(n,3)),t.setAttribute("color",new Ge(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Ie(16755200),h=new Ie(16711680),u=new Ie(43775),f=new Ie(16777215),d=new Ie(3355443);this.setColors(c,h,u,f,d)}setColors(e,t,i,n,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,n.r,n.g,n.b),o.setXYZ(39,n.r,n.g,n.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,n=1;let r,a;if(Dt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===In)r=-1,a=1;else if(this.camera.coordinateSystem===Xs)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Nt("c",t,e,Dt,0,0,r),Nt("t",t,e,Dt,0,0,a),Nt("n1",t,e,Dt,-i,-n,r),Nt("n2",t,e,Dt,i,-n,r),Nt("n3",t,e,Dt,-i,n,r),Nt("n4",t,e,Dt,i,n,r),Nt("f1",t,e,Dt,-i,-n,a),Nt("f2",t,e,Dt,i,-n,a),Nt("f3",t,e,Dt,-i,n,a),Nt("f4",t,e,Dt,i,n,a),Nt("u1",t,e,Dt,i*.7,n*1.1,r),Nt("u2",t,e,Dt,-i*.7,n*1.1,r),Nt("u3",t,e,Dt,0,n*2,r),Nt("cf1",t,e,Dt,-i,0,a),Nt("cf2",t,e,Dt,i,0,a),Nt("cf3",t,e,Dt,0,-n,a),Nt("cf4",t,e,Dt,0,n,a),Nt("cn1",t,e,Dt,-i,0,r),Nt("cn2",t,e,Dt,i,0,r),Nt("cn3",t,e,Dt,0,-n,r),Nt("cn4",t,e,Dt,0,n,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nt(s,e,t,i,n,r,a){fl.set(n,r,a).unproject(i);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],fl.x,fl.y,fl.z)}}const dl=new It;class yy extends oi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new nt;r.setIndex(new _t(i,1)),r.setAttribute("position",new _t(n,3)),super(r,new sn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&dl.setFromObject(this.object),dl.isEmpty())return;const e=dl.min,t=dl.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class by extends oi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new nt;r.setIndex(new _t(i,1)),r.setAttribute("position",new Ge(n,3)),super(r,new sn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sy extends Fi{constructor(e,t=1,i=16776960){const n=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new nt;a.setAttribute("position",new Ge(r,3)),a.computeBoundingSphere(),super(a,new sn({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new nt;l.setAttribute("position",new Ge(o,3)),l.computeBoundingSphere(),this.add(new At(l,new dn({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Ep=new D;let pl,su;class My extends ht{constructor(e=new D(0,0,1),t=new D(0,0,0),i=1,n=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",pl===void 0&&(pl=new nt,pl.setAttribute("position",new Ge([0,0,0,0,1,0],3)),su=new vo(.5,1,5,1),su.translate(0,-.5,0)),this.position.copy(t),this.line=new Fi(pl,new sn({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new At(su,new dn({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ep.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ep,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Ty extends oi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new nt;n.setAttribute("position",new Ge(t,3)),n.setAttribute("color",new Ge(i,3));const r=new sn({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){const n=new Ie,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wy{constructor(){this.type="ShapePath",this.color=new Ie,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new xc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,a){return this.currentPath.bezierCurveTo(e,t,i,n,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const y=[];for(let _=0,x=g.length;_<x;_++){const S=g[_],w=new Hr;w.curves=S.curves,y.push(w)}return y}function i(g,y){const _=y.length;let x=!1;for(let S=_-1,w=0;w<_;S=w++){let A=y[S],E=y[w],b=E.x-A.x,M=E.y-A.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(A=y[w],b=-b,E=y[S],M=-M),g.y<A.y||g.y>E.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const L=M*(g.x-A.x)-b*(g.y-A.y);if(L===0)return!0;if(L<0)continue;x=!x}}else{if(g.y!==A.y)continue;if(E.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=E.x)return!0}}return x}const n=ii.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Hr,l.curves=o.curves,c.push(l),c;let h=!n(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],p=0,v;f[p]=void 0,d[p]=[];for(let g=0,y=r.length;g<y;g++)o=r[g],v=o.getPoints(),a=n(v),a=e?!a:a,a?(!h&&f[p]&&p++,f[p]={s:new Hr,p:v},f[p].s.curves=o.curves,h&&p++,d[p]=[]):d[p].push({h:o,p:v[0]});if(!f[0])return t(r);if(f.length>1){let g=!1,y=0;for(let _=0,x=f.length;_<x;_++)u[_]=[];for(let _=0,x=f.length;_<x;_++){const S=d[_];for(let w=0;w<S.length;w++){const A=S[w];let E=!0;for(let b=0;b<f.length;b++)i(A.p,f[b].p)&&(_!==b&&y++,E?(E=!1,u[b].push(A)):g=!0);E&&u[_].push(A)}}y>0&&g===!1&&(d=u)}let m;for(let g=0,y=f.length;g<y;g++){l=f[g].s,c.push(l),m=d[g];for(let _=0,x=m.length;_<x;_++)l.holes.push(m[_].h)}return c}}class t0 extends Si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Fe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ay(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Ey(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Cy(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Ou(s,e,t,i){const n=Ry(i);switch(t){case uf:return s*e;case Cc:return s*e/n.components*n.byteLength;case uo:return s*e/n.components*n.byteLength;case qr:return s*e*2/n.components*n.byteLength;case Rc:return s*e*2/n.components*n.byteLength;case ff:return s*e*3/n.components*n.byteLength;case fn:return s*e*4/n.components*n.byteLength;case Pc:return s*e*4/n.components*n.byteLength;case Na:case Fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bl:case zl:return Math.max(s,16)*Math.max(e,8)/4;case Ol:case kl:return Math.max(s,8)*Math.max(e,8)/2;case Vl:case Gl:case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Yl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case uc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case dc:case pc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ry(s){switch(s){case Mn:case of:return{byteLength:1,components:1};case Vs:case lf:case yi:return{byteLength:2,components:1};case Ac:case Ec:return{byteLength:2,components:4};case Hn:case wc:case un:return{byteLength:4,components:1};case cf:case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class Py{static contain(e,t){return Ay(e,t)}static cover(e,t){return Ey(e,t)}static fill(e){return Cy(e)}static getByteLength(e,t,i,n){return Ou(e,t,i,n)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);function n0(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Iy(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],v=u[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const v=u[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
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
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,By=`#ifdef USE_AOMAP
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
#endif`,ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`#ifdef USE_BATCHING
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
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
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
#endif`,Yy=`#ifdef USE_BUMPMAP
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
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tb=`#define PI 3.141592653589793
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
} // validated`,nb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ib=`vec3 transformedNormal = objectNormal;
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
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lb="gl_FragColor = linearToOutputTexel( gl_FragColor );",cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
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
}`,yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mb=`uniform bool receiveShadow;
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
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rb=`PhysicalMaterial material;
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
#endif`,Pb=`uniform sampler2D dfgLUT;
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
}`,Ib=`
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vb=`#if defined( USE_POINTS_UV )
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
#endif`,Gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`#ifdef USE_MORPHTARGETS
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
#endif`,jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eS=`#ifdef USE_NORMALMAP
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
#endif`,tS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gS=`float getShadowMask() {
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
}`,vS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,xS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,bS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
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
#endif`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DS=`uniform sampler2D t2D;
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
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`#include <common>
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
}`,BS=`#if DEPTH_PACKING == 3200
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
}`,kS=`#define DISTANCE
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
}`,zS=`#define DISTANCE
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`uniform float scale;
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,YS=`uniform vec3 diffuse;
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
}`,qS=`#define LAMBERT
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
}`,jS=`#define LAMBERT
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
}`,KS=`#define MATCAP
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
}`,ZS=`#define MATCAP
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
}`,JS=`#define NORMAL
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
}`,QS=`#define NORMAL
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
}`,$S=`#define PHONG
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
}`,eM=`#define PHONG
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
}`,tM=`#define STANDARD
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
}`,nM=`#define STANDARD
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
}`,iM=`#define TOON
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
}`,rM=`#define TOON
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
}`,sM=`uniform float size;
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
}`,aM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,lM=`uniform vec3 color;
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
}`,cM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Dy,alphahash_pars_fragment:Ly,alphamap_fragment:Uy,alphamap_pars_fragment:Ny,alphatest_fragment:Fy,alphatest_pars_fragment:Oy,aomap_fragment:By,aomap_pars_fragment:ky,batching_pars_vertex:zy,batching_vertex:Vy,begin_vertex:Gy,beginnormal_vertex:Hy,bsdfs:Wy,iridescence_fragment:Xy,bumpmap_pars_fragment:Yy,clipping_planes_fragment:qy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:Zy,color_fragment:Jy,color_pars_fragment:Qy,color_pars_vertex:$y,color_vertex:eb,common:tb,cube_uv_reflection_fragment:nb,defaultnormal_vertex:ib,displacementmap_pars_vertex:rb,displacementmap_vertex:sb,emissivemap_fragment:ab,emissivemap_pars_fragment:ob,colorspace_fragment:lb,colorspace_pars_fragment:cb,envmap_fragment:hb,envmap_common_pars_fragment:ub,envmap_pars_fragment:fb,envmap_pars_vertex:db,envmap_physical_pars_fragment:Tb,envmap_vertex:pb,fog_vertex:mb,fog_pars_vertex:gb,fog_fragment:vb,fog_pars_fragment:_b,gradientmap_pars_fragment:xb,lightmap_pars_fragment:yb,lights_lambert_fragment:bb,lights_lambert_pars_fragment:Sb,lights_pars_begin:Mb,lights_toon_fragment:wb,lights_toon_pars_fragment:Ab,lights_phong_fragment:Eb,lights_phong_pars_fragment:Cb,lights_physical_fragment:Rb,lights_physical_pars_fragment:Pb,lights_fragment_begin:Ib,lights_fragment_maps:Db,lights_fragment_end:Lb,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Nb,logdepthbuf_pars_vertex:Fb,logdepthbuf_vertex:Ob,map_fragment:Bb,map_pars_fragment:kb,map_particle_fragment:zb,map_particle_pars_fragment:Vb,metalnessmap_fragment:Gb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:Wb,morphcolor_vertex:Xb,morphnormal_vertex:Yb,morphtarget_pars_vertex:qb,morphtarget_vertex:jb,normal_fragment_begin:Kb,normal_fragment_maps:Zb,normal_pars_fragment:Jb,normal_pars_vertex:Qb,normal_vertex:$b,normalmap_pars_fragment:eS,clearcoat_normal_fragment_begin:tS,clearcoat_normal_fragment_maps:nS,clearcoat_pars_fragment:iS,iridescence_pars_fragment:rS,opaque_fragment:sS,packing:aS,premultiplied_alpha_fragment:oS,project_vertex:lS,dithering_fragment:cS,dithering_pars_fragment:hS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:fS,shadowmap_pars_fragment:dS,shadowmap_pars_vertex:pS,shadowmap_vertex:mS,shadowmask_pars_fragment:gS,skinbase_vertex:vS,skinning_pars_vertex:_S,skinning_vertex:xS,skinnormal_vertex:yS,specularmap_fragment:bS,specularmap_pars_fragment:SS,tonemapping_fragment:MS,tonemapping_pars_fragment:TS,transmission_fragment:wS,transmission_pars_fragment:AS,uv_pars_fragment:ES,uv_pars_vertex:CS,uv_vertex:RS,worldpos_vertex:PS,background_vert:IS,background_frag:DS,backgroundCube_vert:LS,backgroundCube_frag:US,cube_vert:NS,cube_frag:FS,depth_vert:OS,depth_frag:BS,distance_vert:kS,distance_frag:zS,equirect_vert:VS,equirect_frag:GS,linedashed_vert:HS,linedashed_frag:WS,meshbasic_vert:XS,meshbasic_frag:YS,meshlambert_vert:qS,meshlambert_frag:jS,meshmatcap_vert:KS,meshmatcap_frag:ZS,meshnormal_vert:JS,meshnormal_frag:QS,meshphong_vert:$S,meshphong_frag:eM,meshphysical_vert:tM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:rM,points_vert:sM,points_frag:aM,shadow_vert:oM,shadow_frag:lM,sprite_vert:cM,sprite_frag:hM},Ue={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Bn={basic:{uniforms:ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:ln([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:ln([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:ln([Ue.points,Ue.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:ln([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:ln([Ue.common,Ue.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:ln([Ue.sprite,Ue.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:ln([Ue.common,Ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:ln([Ue.lights,Ue.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Bn.physical={uniforms:ln([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ml={r:0,b:0,g:0},Cr=new Un,uM=new Ye;function fM(s,e,t,i,n,r,a){const o=new Ie(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1;const S=p(_);S===null?g(o,l):S&&S.isColor&&(g(S,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===$s)?(h===void 0&&(h=new At(new is(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:js(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Cr.copy(x.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(Cr)),h.material.toneMapped=lt.getTransfer(S.colorSpace)!==xt,(u!==S||f!==S.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new At(new Bi(2,2),new Wn({name:"BackgroundMaterial",uniforms:js(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,x){_.getRGB(ml,ug(s)),i.buffers.color.setClear(ml.r,ml.g,ml.b,x,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(o,l)},render:v,addToRenderList:m,dispose:y}}function dM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let r=n,a=!1;function o(M,L,I,U,F){let G=!1;const B=u(U,I,L);r!==B&&(r=B,c(r.object)),G=d(M,U,I,F),G&&p(M,U,I,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(M,L,I,U),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,I){const U=I.wireframe===!0;let F=i[M.id];F===void 0&&(F={},i[M.id]=F);let G=F[L.id];G===void 0&&(G={},F[L.id]=G);let B=G[U];return B===void 0&&(B=f(l()),G[U]=B),B}function f(M){const L=[],I=[],U=[];for(let F=0;F<t;F++)L[F]=0,I[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,L,I,U){const F=r.attributes,G=L.attributes;let B=0;const H=I.getAttributes();for(const Y in H)if(H[Y].location>=0){const X=F[Y];let N=G[Y];if(N===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(N=M.instanceColor)),X===void 0||X.attribute!==N||N&&X.data!==N.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function p(M,L,I,U){const F={},G=L.attributes;let B=0;const H=I.getAttributes();for(const Y in H)if(H[Y].location>=0){let X=G[Y];X===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(X=M.instanceColor));const N={};N.attribute=X,X&&X.data&&(N.data=X.data),F[Y]=N,B++}r.attributes=F,r.attributesNum=B,r.index=U}function v(){const M=r.newAttributes;for(let L=0,I=M.length;L<I;L++)M[L]=0}function m(M){g(M,0)}function g(M,L){const I=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;I[M]=1,U[M]===0&&(s.enableVertexAttribArray(M),U[M]=1),F[M]!==L&&(s.vertexAttribDivisor(M,L),F[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let I=0,U=L.length;I<U;I++)L[I]!==M[I]&&(s.disableVertexAttribArray(I),L[I]=0)}function _(M,L,I,U,F,G,B){B===!0?s.vertexAttribIPointer(M,L,I,F,G):s.vertexAttribPointer(M,L,I,U,F,G)}function x(M,L,I,U){v();const F=U.attributes,G=I.getAttributes(),B=L.defaultAttributeValues;for(const H in G){const Y=G[H];if(Y.location>=0){let q=F[H];if(q===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const X=q.normalized,N=q.itemSize,W=e.get(q);if(W===void 0)continue;const Z=W.buffer,se=W.type,te=W.bytesPerElement,z=se===s.INT||se===s.UNSIGNED_INT||q.gpuType===wc;if(q.isInterleavedBufferAttribute){const k=q.data,J=k.stride,ve=q.offset;if(k.isInstancedInterleavedBuffer){for(let pe=0;pe<Y.locationSize;pe++)g(Y.location+pe,k.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let pe=0;pe<Y.locationSize;pe++)_(Y.location+pe,N/Y.locationSize,se,X,J*te,(ve+N/Y.locationSize*pe)*te,z)}else{if(q.isInstancedBufferAttribute){for(let k=0;k<Y.locationSize;k++)g(Y.location+k,q.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let k=0;k<Y.locationSize;k++)m(Y.location+k);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let k=0;k<Y.locationSize;k++)_(Y.location+k,N/Y.locationSize,se,X,N*te,N/Y.locationSize*k*te,z)}}else if(B!==void 0){const X=B[H];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(Y.location,X);break;case 3:s.vertexAttrib3fv(Y.location,X);break;case 4:s.vertexAttrib4fv(Y.location,X);break;default:s.vertexAttrib1fv(Y.location,X)}}}}y()}function S(){E();for(const M in i){const L=i[M];for(const I in L){const U=L[I];for(const F in U)h(U[F].object),delete U[F];delete L[I]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const I in L){const U=L[I];for(const F in U)h(U[F].object),delete U[F];delete L[I]}delete i[M.id]}function A(M){for(const L in i){const I=i[L];if(I[M.id]===void 0)continue;const U=I[M.id];for(const F in U)h(U[F].object),delete U[F];delete I[M.id]}}function E(){b(),a=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:E,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function pM(s,e,t){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*f[v];t.update(p,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mM(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==fn&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const E=A===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Mn&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==un&&!E)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,maxSamples:S,samples:w}}function gM(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new mi,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,_=y*4;let x=g.clippingState||null;l.value=x,x=h(p,f,_,d);for(let S=0;S!==_;++S)x[S]=t[S];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,x=d;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function vM(s){let e=new WeakMap;function t(a,o){return o===qa?a.mapping=xi:o===ja&&(a.mapping=sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===qa||o===ja)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new yf(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ir=4,Cp=[.125,.215,.35,.446,.526,.582],Ur=20,_M=256,wa=new os,Rp=new Ie;let au=null,ou=0,lu=0,cu=!1;const xM=new D;class Bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){const{size:a=256,position:o=xM}=r;au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(au,ou,lu),this._renderer.xr.enabled=cu,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:yi,format:fn,colorSpace:rn,depthBuffer:!1},n=Pp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yM(r)),this._blurMaterial=SM(r,e,t),this._ggxMaterial=bM(r,e,t)}return n}_compileMaterial(e){const t=new At(new nt,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,n,r){const l=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Rp),u.toneMapping=ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new is,new dn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let g=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Rp),g=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const S=this._cubeSize;Ds(n,x*S,_>2?S:0,S,S),u.setRenderTarget(n),g&&u.render(v,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===xi||e.mapping===sr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:p}=this,v=this._sizeLods[i],m=3*v*(i>p-ir?i-p+ir:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Ds(r,m,g,3*v,2*v),n.setRenderTarget(r),n.render(o,wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Ds(e,m,g,3*v,2*v),n.setRenderTarget(e),n.render(o,wa)}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ur-1),v=r/p,m=isFinite(r)?1+Math.floor(h*v):Ur;m>Ur&&Fe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const g=[];let y=0;for(let A=0;A<Ur;++A){const E=A/v,b=Math.exp(-E*E/2);g.push(b),A===0?y+=b:A<m&&(y+=2*b)}for(let A=0;A<g.length;A++)g[A]=g[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=p,f.mipInt.value=_-i;const x=this._sizeLods[n],S=3*x*(n>_-ir?n-_+ir:0),w=4*(this._cubeSize-x);Ds(t,S,w,3*x,2*x),l.setRenderTarget(t),l.render(u,wa)}}function yM(s){const e=[],t=[],i=[];let n=s;const r=s-ir+1+Cp.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-ir?l=Cp[a-s+ir-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,v=3,m=2,g=1,y=new Float32Array(v*p*d),_=new Float32Array(m*p*d),x=new Float32Array(g*p*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,E=w>2?0:-1,b=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];y.set(b,v*p*w),_.set(f,m*p*w);const M=[w,w,w,w,w,w];x.set(M,g*p*w)}const S=new nt;S.setAttribute("position",new _t(y,v)),S.setAttribute("uv",new _t(_,m)),S.setAttribute("faceIndex",new _t(x,g)),i.push(new At(S,null)),n>ir&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Pp(s,e,t){const i=new Ln(s,e,t);return i.texture.mapping=$s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function bM(s,e,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_M,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oh(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function SM(s,e,t){const i=new Float32Array(Ur),n=new D(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:oh(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ip(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Dp(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function MM(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===qa||l===ja,h=l===xi||l===sr;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Bu(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&n(d)?(t===null&&(t=new Bu(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function TM(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Ys("WebGLRenderer: "+i+" extension not supported."),n}}}function wM(s,e,t,i){const n={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete n[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,p=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let _=0,x=y.length;_<x;_+=3){const S=y[_+0],w=y[_+1],A=y[_+2];f.push(S,w,w,A,A,S)}}else if(p!==void 0){const y=p.array;v=p.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const S=_+0,w=_+1,A=_+2;f.push(S,w,w,A,A,S)}}else return;const m=new(ag(f)?xf:_f)(f,1);m.version=v;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function AM(s,e,t){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(i,d,r,f*a,p),t.update(d,i,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,i,1)}function u(f,d,p,v){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/a,d[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,p);let g=0;for(let y=0;y<p;y++)g+=d[y]*v[y];t.update(g,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function EM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function CM(s,e,t){const i=new WeakMap,n=new pt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;d===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*S*4*u),A=new Uc(w,x,S,u);A.type=un,A.needsUpdate=!0;const E=_*4;for(let M=0;M<u;M++){const L=m[M],I=g[M],U=y[M],F=x*S*4*M;for(let G=0;G<L.count;G++){const B=G*E;d===!0&&(n.fromBufferAttribute(L,G),w[F+B+0]=n.x,w[F+B+1]=n.y,w[F+B+2]=n.z,w[F+B+3]=0),p===!0&&(n.fromBufferAttribute(I,G),w[F+B+4]=n.x,w[F+B+5]=n.y,w[F+B+6]=n.z,w[F+B+7]=0),v===!0&&(n.fromBufferAttribute(U,G),w[F+B+8]=n.x,w[F+B+9]=n.y,w[F+B+10]=n.z,w[F+B+11]=U.itemSize===4?n.w:1)}}f={count:u,texture:A,size:new de(x,S)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function RM(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const PM={[ef]:"LINEAR_TONE_MAPPING",[tf]:"REINHARD_TONE_MAPPING",[nf]:"CINEON_TONE_MAPPING",[rf]:"ACES_FILMIC_TONE_MAPPING",[Ya]:"AGX_TONE_MAPPING",[af]:"NEUTRAL_TONE_MAPPING",[sf]:"CUSTOM_TONE_MAPPING"};function IM(s,e,t,i,n){const r=new Ln(e,t,{type:s,depthBuffer:i,stencilBuffer:n}),a=new Ln(e,t,{type:yi,depthBuffer:!1,stencilBuffer:!1}),o=new nt;o.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ge([0,2,0,0,2,0],2));const l=new Uf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new At(o,l),h=new os(-1,1,1,-1,0,1);let u=null,f=null,d=!1,p,v=null,m=[],g=!1;this.setSize=function(y,_){r.setSize(y,_),a.setSize(y,_);for(let x=0;x<m.length;x++){const S=m[x];S.setSize&&S.setSize(y,_)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;const _=r.width,x=r.height;for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(_,x)}},this.begin=function(y,_){if(d||y.toneMapping===ri&&m.length===0)return!1;if(v=_,_!==null){const x=_.width,S=_.height;(r.width!==x||r.height!==S)&&this.setSize(x,S)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=ri,!0},this.hasRenderPass=function(){return g},this.end=function(y,_){y.toneMapping=p,d=!0;let x=r,S=a;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(y,S,x,_),A.needsSwap!==!1)){const E=x;x=S,S=E}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},lt.getTransfer(u)===xt&&(l.defines.SRGB_TRANSFER="");const w=PM[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(v),y.render(c,h),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const i0=new Et,ku=new Ks(1,1),r0=new Uc,s0=new Nc,a0=new fo,Lp=[],Up=[],Np=new Float32Array(16),Fp=new Float32Array(9),Op=new Float32Array(4);function na(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Lp[n];if(r===void 0&&(r=new Float32Array(n),Lp[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Wt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Xt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function lh(s,e){let t=Up[e];t===void 0&&(t=new Int32Array(e),Up[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function DM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2fv(this.addr,e),Xt(t,e)}}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;s.uniform3fv(this.addr,e),Xt(t,e)}}function NM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4fv(this.addr,e),Xt(t,e)}}function FM(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Op.set(i),s.uniformMatrix2fv(this.addr,!1,Op),Xt(t,i)}}function OM(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Fp.set(i),s.uniformMatrix3fv(this.addr,!1,Fp),Xt(t,i)}}function BM(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Np.set(i),s.uniformMatrix4fv(this.addr,!1,Np),Xt(t,i)}}function kM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2iv(this.addr,e),Xt(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3iv(this.addr,e),Xt(t,e)}}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4iv(this.addr,e),Xt(t,e)}}function HM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2uiv(this.addr,e),Xt(t,e)}}function XM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3uiv(this.addr,e),Xt(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4uiv(this.addr,e),Xt(t,e)}}function qM(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(ku.compareFunction=t.isReversedDepthBuffer()?Lc:Dc,r=ku):r=i0,t.setTexture2D(e||r,n)}function jM(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||s0,n)}function KM(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||a0,n)}function ZM(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||r0,n)}function JM(s){switch(s){case 5126:return DM;case 35664:return LM;case 35665:return UM;case 35666:return NM;case 35674:return FM;case 35675:return OM;case 35676:return BM;case 5124:case 35670:return kM;case 35667:case 35671:return zM;case 35668:case 35672:return VM;case 35669:case 35673:return GM;case 5125:return HM;case 36294:return WM;case 36295:return XM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}function QM(s,e){s.uniform1fv(this.addr,e)}function $M(s,e){const t=na(e,this.size,2);s.uniform2fv(this.addr,t)}function e1(s,e){const t=na(e,this.size,3);s.uniform3fv(this.addr,t)}function t1(s,e){const t=na(e,this.size,4);s.uniform4fv(this.addr,t)}function n1(s,e){const t=na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function i1(s,e){const t=na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function r1(s,e){const t=na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function s1(s,e){s.uniform1iv(this.addr,e)}function a1(s,e){s.uniform2iv(this.addr,e)}function o1(s,e){s.uniform3iv(this.addr,e)}function l1(s,e){s.uniform4iv(this.addr,e)}function c1(s,e){s.uniform1uiv(this.addr,e)}function h1(s,e){s.uniform2uiv(this.addr,e)}function u1(s,e){s.uniform3uiv(this.addr,e)}function f1(s,e){s.uniform4uiv(this.addr,e)}function d1(s,e,t){const i=this.cache,n=e.length,r=lh(t,n);Wt(i,r)||(s.uniform1iv(this.addr,r),Xt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ku:a=i0;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function p1(s,e,t){const i=this.cache,n=e.length,r=lh(t,n);Wt(i,r)||(s.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||s0,r[a])}function m1(s,e,t){const i=this.cache,n=e.length,r=lh(t,n);Wt(i,r)||(s.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||a0,r[a])}function g1(s,e,t){const i=this.cache,n=e.length,r=lh(t,n);Wt(i,r)||(s.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||r0,r[a])}function v1(s){switch(s){case 5126:return QM;case 35664:return $M;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return a1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return h1;case 36295:return u1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}class _1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=JM(t.type)}}class x1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v1(t.type)}}class y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function Bp(s,e){s.seq.push(e),s.map[e.id]=e}function b1(s,e,t){const i=s.name,n=i.length;for(hu.lastIndex=0;;){const r=hu.exec(i),a=hu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Bp(t,c===void 0?new _1(o,s,e):new x1(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new y1(o),Bp(t,u)),t=u}}}class Tl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);b1(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function kp(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const S1=37297;let M1=0;function T1(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const zp=new it;function w1(s){lt._getMatrix(zp,lt.workingColorSpace,s);const e=`mat3( ${zp.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(s)){case Za:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vp(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+T1(s.getShaderSource(e),o)}else return r}function A1(s,e){const t=w1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const E1={[ef]:"Linear",[tf]:"Reinhard",[nf]:"Cineon",[rf]:"ACESFilmic",[Ya]:"AgX",[af]:"Neutral",[sf]:"Custom"};function C1(s,e){const t=E1[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gl=new D;function R1(){lt.getLuminanceCoefficients(gl);const s=gl.x.toFixed(4),e=gl.y.toFixed(4),t=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function I1(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function D1(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ia(s){return s!==""}function Gp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(s){return s.replace(L1,N1)}const U1=new Map;function N1(s,e){let t=$e[e];if(t===void 0){const i=U1.get(e);if(i!==void 0)t=$e[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zu(t)}const F1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(s){return s.replace(F1,O1)}function O1(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Xp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const B1={[La]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function k1(s){return B1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z1={[xi]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE_UV"};function V1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":z1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const G1={[sr]:"ENVMAP_MODE_REFRACTION"};function H1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":G1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const W1={[ho]:"ENVMAP_BLENDING_MULTIPLY",[Wm]:"ENVMAP_BLENDING_MIX",[Xm]:"ENVMAP_BLENDING_ADD"};function X1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":W1[s.combine]||"ENVMAP_BLENDING_NONE"}function Y1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function q1(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=k1(t),c=V1(t),h=H1(t),u=X1(t),f=Y1(t),d=P1(t),p=I1(r),v=n.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ia).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ia).join(`
`),g.length>0&&(g+=`
`)):(m=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),g=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?$e.tonemapping_pars_fragment:"",t.toneMapping!==ri?C1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,A1("linearToOutputTexel",t.outputColorSpace),R1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),a=zu(a),a=Gp(a,t),a=Hp(a,t),o=zu(o),o=Gp(o,t),o=Hp(o,t),a=Wp(a),o=Wp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=y+m+a,x=y+g+o,S=kp(n,n.VERTEX_SHADER,_),w=kp(n,n.FRAGMENT_SHADER,x);n.attachShader(v,S),n.attachShader(v,w),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(L){if(s.debug.checkShaderErrors){const I=n.getProgramInfoLog(v)||"",U=n.getShaderInfoLog(S)||"",F=n.getShaderInfoLog(w)||"",G=I.trim(),B=U.trim(),H=F.trim();let Y=!0,q=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,S,w);else{const X=Vp(n,S,"vertex"),N=Vp(n,w,"fragment");qe("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+X+`
`+N)}else G!==""?Fe("WebGLProgram: Program Info Log:",G):(B===""||H==="")&&(q=!1);q&&(L.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:g}})}n.deleteShader(S),n.deleteShader(w),E=new Tl(n,v),b=D1(n,v)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,S1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}let j1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Z1(e),t.set(e,i)),i}}class Z1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function J1(s,e,t,i,n,r,a){const o=new Fc,l=new K1,c=new Set,h=[],u=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,I,U){const F=I.fog,G=U.geometry,B=b.isMeshStandardMaterial?I.environment:null,H=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),Y=H&&H.mapping===$s?H.image.height:null,q=p[b.type];b.precision!==null&&(d=n.getMaxPrecision(b.precision),d!==b.precision&&Fe("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const X=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,N=X!==void 0?X.length:0;let W=0;G.morphAttributes.position!==void 0&&(W=1),G.morphAttributes.normal!==void 0&&(W=2),G.morphAttributes.color!==void 0&&(W=3);let Z,se,te,z;if(q){const Qe=Bn[q];Z=Qe.vertexShader,se=Qe.fragmentShader}else Z=b.vertexShader,se=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),z=l.getFragmentShaderID(b);const k=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),ve=U.isInstancedMesh===!0,pe=U.isBatchedMesh===!0,be=!!b.map,ge=!!b.matcap,Pe=!!H,re=!!b.aoMap,ie=!!b.lightMap,ne=!!b.bumpMap,fe=!!b.normalMap,R=!!b.displacementMap,Ae=!!b.emissiveMap,ue=!!b.metalnessMap,ae=!!b.roughnessMap,me=b.anisotropy>0,C=b.clearcoat>0,T=b.dispersion>0,O=b.iridescence>0,$=b.sheen>0,Q=b.transmission>0,j=me&&!!b.anisotropyMap,we=C&&!!b.clearcoatMap,_e=C&&!!b.clearcoatNormalMap,Re=C&&!!b.clearcoatRoughnessMap,Be=O&&!!b.iridescenceMap,he=O&&!!b.iridescenceThicknessMap,Me=$&&!!b.sheenColorMap,Te=$&&!!b.sheenRoughnessMap,De=!!b.specularMap,Ee=!!b.specularColorMap,Je=!!b.specularIntensityMap,V=Q&&!!b.transmissionMap,ye=Q&&!!b.thicknessMap,Se=!!b.gradientMap,Oe=!!b.alphaMap,xe=b.alphaTest>0,ce=!!b.alphaHash,Ce=!!b.extensions;let ze=ri;b.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ze=s.toneMapping);const Ve={shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:Z,fragmentShader:se,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:pe,batchingColor:pe&&U._colorsTexture!==null,instancing:ve,instancingColor:ve&&U.instanceColor!==null,instancingMorph:ve&&U.morphTexture!==null,outputColorSpace:k===null?s.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:rn,alphaToCoverage:!!b.alphaToCoverage,map:be,matcap:ge,envMap:Pe,envMapMode:Pe&&H.mapping,envMapCubeUVHeight:Y,aoMap:re,lightMap:ie,bumpMap:ne,normalMap:fe,displacementMap:R,emissiveMap:Ae,normalMapObjectSpace:fe&&b.normalMapType===$m,normalMapTangentSpace:fe&&b.normalMapType===hr,metalnessMap:ue,roughnessMap:ae,anisotropy:me,anisotropyMap:j,clearcoat:C,clearcoatMap:we,clearcoatNormalMap:_e,clearcoatRoughnessMap:Re,dispersion:T,iridescence:O,iridescenceMap:Be,iridescenceThicknessMap:he,sheen:$,sheenColorMap:Me,sheenRoughnessMap:Te,specularMap:De,specularColorMap:Ee,specularIntensityMap:Je,transmission:Q,transmissionMap:V,thicknessMap:ye,gradientMap:Se,opaque:b.transparent===!1&&b.blending===Vr&&b.alphaToCoverage===!1,alphaMap:Oe,alphaTest:xe,alphaHash:ce,combine:b.combine,mapUv:be&&v(b.map.channel),aoMapUv:re&&v(b.aoMap.channel),lightMapUv:ie&&v(b.lightMap.channel),bumpMapUv:ne&&v(b.bumpMap.channel),normalMapUv:fe&&v(b.normalMap.channel),displacementMapUv:R&&v(b.displacementMap.channel),emissiveMapUv:Ae&&v(b.emissiveMap.channel),metalnessMapUv:ue&&v(b.metalnessMap.channel),roughnessMapUv:ae&&v(b.roughnessMap.channel),anisotropyMapUv:j&&v(b.anisotropyMap.channel),clearcoatMapUv:we&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(b.sheenRoughnessMap.channel),specularMapUv:De&&v(b.specularMap.channel),specularColorMapUv:Ee&&v(b.specularColorMap.channel),specularIntensityMapUv:Je&&v(b.specularIntensityMap.channel),transmissionMapUv:V&&v(b.transmissionMap.channel),thicknessMapUv:ye&&v(b.thicknessMap.channel),alphaMapUv:Oe&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(fe||me),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(be||Oe),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:J,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:Ae&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pn,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function g(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(M,b),_(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const M=p[b.type];let L;if(M){const I=Bn[M];L=Oc.clone(I.uniforms)}else L=b.uniforms;return L}function S(b,M){let L=u.get(M);return L!==void 0?++L.usedTimes:(L=new q1(s,M,b,r),h.push(L),u.set(M,L)),L}function w(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),u.delete(b.cacheKey),b.destroy()}}function A(b){l.remove(b)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:E}}function Q1(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function $1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Yp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qp(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(u,f,d,p,v,m){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:v,group:m},s[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=v,g.group=m),e++,g}function o(u,f,d,p,v,m){const g=a(u,f,d,p,v,m);d.transmission>0?i.push(g):d.transparent===!0?n.push(g):t.push(g)}function l(u,f,d,p,v,m){const g=a(u,f,d,p,v,m);d.transmission>0?i.unshift(g):d.transparent===!0?n.unshift(g):t.unshift(g)}function c(u,f){t.length>1&&t.sort(u||$1),i.length>1&&i.sort(f||Yp),n.length>1&&n.sort(f||Yp)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function eT(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new qp,s.set(i,[a])):n>=r.length?(a=new qp,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function tT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function nT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let iT=0;function rT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sT(s){const e=new tT,t=nT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,r=new Ye,a=new Ye;function o(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,y=0,_=0,x=0,S=0,w=0,A=0;c.sort(rT);for(let b=0,M=c.length;b<M;b++){const L=c[b],I=L.color,U=L.intensity,F=L.distance;let G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===qr?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=I.r*U,u+=I.g*U,f+=I.b*U;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],U);A++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,Y=t.get(L);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=L.shadow.matrix,y++}i.directional[d]=B,d++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(I).multiplyScalar(U),B.distance=F,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[v]=B;const H=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,H.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[v]=H.matrix,L.castShadow){const Y=t.get(L);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=G,x++}v++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(I).multiplyScalar(U),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=B,m++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const H=L.shadow,Y=t.get(L);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=G,i.pointShadowMatrix[p]=L.shadow.matrix,_++}i.point[p]=B,p++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(U),B.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[g]=B,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const E=i.hash;(E.directionalLength!==d||E.pointLength!==p||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==g||E.numDirectionalShadows!==y||E.numPointShadows!==_||E.numSpotShadows!==x||E.numSpotMaps!==S||E.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,E.directionalLength=d,E.pointLength=p,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=g,E.numDirectionalShadows=y,E.numPointShadows=_,E.numSpotShadows=x,E.numSpotMaps=S,E.numLightProbes=A,i.version=iT++)}function l(c,h){let u=0,f=0,d=0,p=0,v=0;const m=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const _=c[g];if(_.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),u++}else if(_.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function jp(s){const e=new sT(s),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function aT(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new jp(s),e.set(n,[o])):r>=a.length?(o=new jp(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lT=`uniform sampler2D shadow_pass;
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
}`,cT=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],hT=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Kp=new Ye,Aa=new D,uu=new D;function uT(s,e,t){let i=new ea;const n=new de,r=new de,a=new pt,o=new rh,l=new sh,c={},h=t.maxTextureSize,u={[_i]:pn,[pn]:_i,[Pn]:Pn},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:oT,fragmentShader:lT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new nt;p.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let g=this.type;this.render=function(w,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Ua&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=La);const b=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),I=s.state;I.setBlending(vi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=g!==this.type;U&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(G=>G.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,G=w.length;F<G;F++){const B=w[F],H=B.shadow;if(H===void 0){Fe("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const Y=H.getFrameExtents();if(n.multiply(Y),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Y.x),n.x=r.x*Y.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Y.y),n.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null||U===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Us){if(B.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ln(n.x,n.y,{format:qr,type:yi,minFilter:yt,magFilter:yt,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Ks(n.x,n.y,un),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=bi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt}else{B.isPointLight?(H.map=new yf(n.x),H.map.depthTexture=new _g(n.x,Hn)):(H.map=new Ln(n.x,n.y),H.map.depthTexture=new Ks(n.x,n.y,Hn)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=bi;const X=s.state.buffers.depth.getReversed();this.type===La?(H.map.depthTexture.compareFunction=X?Lc:Dc,H.map.depthTexture.minFilter=yt,H.map.depthTexture.magFilter=yt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt)}H.camera.updateProjectionMatrix()}const q=H.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<q;X++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,X),s.clear();else{X===0&&(s.setRenderTarget(H.map),s.clear());const N=H.getViewport(X);a.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),I.viewport(a)}if(B.isPointLight){const N=H.camera,W=H.matrix,Z=B.distance||N.far;Z!==N.far&&(N.far=Z,N.updateProjectionMatrix()),Aa.setFromMatrixPosition(B.matrixWorld),N.position.copy(Aa),uu.copy(N.position),uu.add(cT[X]),N.up.copy(hT[X]),N.lookAt(uu),N.updateMatrixWorld(),W.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Kp.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Kp,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(B);i=H.getFrustum(),x(A,E,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===Us&&y(H,E),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,L)};function y(w,A){const E=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ln(n.x,n.y,{format:qr,type:yi})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,E,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,E,d,v,null)}function _(w,A,E,b){let M=null;const L=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=E.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=M.uuid,U=A.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let G=F[U];G===void 0&&(G=M.clone(),F[U]=G,A.addEventListener("dispose",S)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,b===Us?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=s.properties.get(M);I.light=E}return M}function x(w,A,E,b,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Us)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const U=e.update(w),F=w.material;if(Array.isArray(F)){const G=U.groups;for(let B=0,H=G.length;B<H;B++){const Y=G[B],q=F[Y.materialIndex];if(q&&q.visible){const X=_(w,q,b,M);w.onBeforeShadow(s,w,A,E,U,X,Y),s.renderBufferDirect(E,null,U,X,w,Y),w.onAfterShadow(s,w,A,E,U,X,Y)}}}else if(F.visible){const G=_(w,F,b,M);w.onBeforeShadow(s,w,A,E,U,G,null),s.renderBufferDirect(E,null,U,G,w,null),w.onAfterShadow(s,w,A,E,U,G,null)}}const I=w.children;for(let U=0,F=I.length;U<F;U++)x(I[U],A,E,b,M)}function S(w){w.target.removeEventListener("dispose",S);for(const E in c){const b=c[E],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const fT={[Pl]:Il,[Dl]:Nl,[Ll]:Fl,[Yr]:Ul,[Il]:Pl,[Nl]:Dl,[Fl]:Ll,[Ul]:Yr};function dT(s,e){function t(){let V=!1;const ye=new pt;let Se=null;const Oe=new pt(0,0,0,0);return{setMask:function(xe){Se!==xe&&!V&&(s.colorMask(xe,xe,xe,xe),Se=xe)},setLocked:function(xe){V=xe},setClear:function(xe,ce,Ce,ze,Ve){Ve===!0&&(xe*=ze,ce*=ze,Ce*=ze),ye.set(xe,ce,Ce,ze),Oe.equals(ye)===!1&&(s.clearColor(xe,ce,Ce,ze),Oe.copy(ye))},reset:function(){V=!1,Se=null,Oe.set(-1,0,0,0)}}}function i(){let V=!1,ye=!1,Se=null,Oe=null,xe=null;return{setReversed:function(ce){if(ye!==ce){const Ce=e.get("EXT_clip_control");ce?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ye=ce;const ze=xe;xe=null,this.setClear(ze)}},getReversed:function(){return ye},setTest:function(ce){ce?k(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(ce){Se!==ce&&!V&&(s.depthMask(ce),Se=ce)},setFunc:function(ce){if(ye&&(ce=fT[ce]),Oe!==ce){switch(ce){case Pl:s.depthFunc(s.NEVER);break;case Il:s.depthFunc(s.ALWAYS);break;case Dl:s.depthFunc(s.LESS);break;case Yr:s.depthFunc(s.LEQUAL);break;case Ll:s.depthFunc(s.EQUAL);break;case Ul:s.depthFunc(s.GEQUAL);break;case Nl:s.depthFunc(s.GREATER);break;case Fl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=ce}},setLocked:function(ce){V=ce},setClear:function(ce){xe!==ce&&(ye&&(ce=1-ce),s.clearDepth(ce),xe=ce)},reset:function(){V=!1,Se=null,Oe=null,xe=null,ye=!1}}}function n(){let V=!1,ye=null,Se=null,Oe=null,xe=null,ce=null,Ce=null,ze=null,Ve=null;return{setTest:function(Qe){V||(Qe?k(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(Qe){ye!==Qe&&!V&&(s.stencilMask(Qe),ye=Qe)},setFunc:function(Qe,Mt,Tt){(Se!==Qe||Oe!==Mt||xe!==Tt)&&(s.stencilFunc(Qe,Mt,Tt),Se=Qe,Oe=Mt,xe=Tt)},setOp:function(Qe,Mt,Tt){(ce!==Qe||Ce!==Mt||ze!==Tt)&&(s.stencilOp(Qe,Mt,Tt),ce=Qe,Ce=Mt,ze=Tt)},setLocked:function(Qe){V=Qe},setClear:function(Qe){Ve!==Qe&&(s.clearStencil(Qe),Ve=Qe)},reset:function(){V=!1,ye=null,Se=null,Oe=null,xe=null,ce=null,Ce=null,ze=null,Ve=null}}}const r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,v=!1,m=null,g=null,y=null,_=null,x=null,S=null,w=null,A=new Ie(0,0,0),E=0,b=!1,M=null,L=null,I=null,U=null,F=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=H>=2);let q=null,X={};const N=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),Z=new pt().fromArray(N),se=new pt().fromArray(W);function te(V,ye,Se,Oe){const xe=new Uint8Array(4),ce=s.createTexture();s.bindTexture(V,ce),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<Se;Ce++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(ye+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return ce}const z={};z[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),z[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),z[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(s.DEPTH_TEST),a.setFunc(Yr),ne(!1),fe(Tu),k(s.CULL_FACE),re(vi);function k(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function J(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function ve(V,ye){return u[V]!==ye?(s.bindFramebuffer(V,ye),u[V]=ye,V===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ye),V===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function pe(V,ye){let Se=d,Oe=!1;if(V){Se=f.get(ye),Se===void 0&&(Se=[],f.set(ye,Se));const xe=V.textures;if(Se.length!==xe.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,Ce=xe.length;ce<Ce;ce++)Se[ce]=s.COLOR_ATTACHMENT0+ce;Se.length=xe.length,Oe=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(Se)}function be(V){return p!==V?(s.useProgram(V),p=V,!0):!1}const ge={[er]:s.FUNC_ADD,[Em]:s.FUNC_SUBTRACT,[Cm]:s.FUNC_REVERSE_SUBTRACT};ge[Rm]=s.MIN,ge[Pm]=s.MAX;const Pe={[Im]:s.ZERO,[Dm]:s.ONE,[Lm]:s.SRC_COLOR,[Cl]:s.SRC_ALPHA,[km]:s.SRC_ALPHA_SATURATE,[Om]:s.DST_COLOR,[Nm]:s.DST_ALPHA,[Um]:s.ONE_MINUS_SRC_COLOR,[Rl]:s.ONE_MINUS_SRC_ALPHA,[Bm]:s.ONE_MINUS_DST_COLOR,[Fm]:s.ONE_MINUS_DST_ALPHA,[zm]:s.CONSTANT_COLOR,[Vm]:s.ONE_MINUS_CONSTANT_COLOR,[Gm]:s.CONSTANT_ALPHA,[Hm]:s.ONE_MINUS_CONSTANT_ALPHA};function re(V,ye,Se,Oe,xe,ce,Ce,ze,Ve,Qe){if(V===vi){v===!0&&(J(s.BLEND),v=!1);return}if(v===!1&&(k(s.BLEND),v=!0),V!==Am){if(V!==m||Qe!==b){if((g!==er||x!==er)&&(s.blendEquation(s.FUNC_ADD),g=er,x=er),Qe)switch(V){case Vr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wu:s.blendFunc(s.ONE,s.ONE);break;case Au:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qe("WebGLState: Invalid blending: ",V);break}else switch(V){case Vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Au:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eu:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",V);break}y=null,_=null,S=null,w=null,A.set(0,0,0),E=0,m=V,b=Qe}return}xe=xe||ye,ce=ce||Se,Ce=Ce||Oe,(ye!==g||xe!==x)&&(s.blendEquationSeparate(ge[ye],ge[xe]),g=ye,x=xe),(Se!==y||Oe!==_||ce!==S||Ce!==w)&&(s.blendFuncSeparate(Pe[Se],Pe[Oe],Pe[ce],Pe[Ce]),y=Se,_=Oe,S=ce,w=Ce),(ze.equals(A)===!1||Ve!==E)&&(s.blendColor(ze.r,ze.g,ze.b,Ve),A.copy(ze),E=Ve),m=V,b=!1}function ie(V,ye){V.side===Pn?J(s.CULL_FACE):k(s.CULL_FACE);let Se=V.side===pn;ye&&(Se=!Se),ne(Se),V.blending===Vr&&V.transparent===!1?re(vi):re(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Oe=V.stencilWrite;o.setTest(Oe),Oe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ae(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?k(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(V){M!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),M=V)}function fe(V){V!==Tm?(k(s.CULL_FACE),V!==L&&(V===Tu?s.cullFace(s.BACK):V===wm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),L=V}function R(V){V!==I&&(B&&s.lineWidth(V),I=V)}function Ae(V,ye,Se){V?(k(s.POLYGON_OFFSET_FILL),(U!==ye||F!==Se)&&(s.polygonOffset(ye,Se),U=ye,F=Se)):J(s.POLYGON_OFFSET_FILL)}function ue(V){V?k(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function ae(V){V===void 0&&(V=s.TEXTURE0+G-1),q!==V&&(s.activeTexture(V),q=V)}function me(V,ye,Se){Se===void 0&&(q===null?Se=s.TEXTURE0+G-1:Se=q);let Oe=X[Se];Oe===void 0&&(Oe={type:void 0,texture:void 0},X[Se]=Oe),(Oe.type!==V||Oe.texture!==ye)&&(q!==Se&&(s.activeTexture(Se),q=Se),s.bindTexture(V,ye||z[V]),Oe.type=V,Oe.texture=ye)}function C(){const V=X[q];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function $(){try{s.texSubImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function Q(){try{s.texSubImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function _e(){try{s.texStorage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function Re(){try{s.texStorage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function Be(){try{s.texImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function he(){try{s.texImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function Me(V){Z.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Z.copy(V))}function Te(V){se.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),se.copy(V))}function De(V,ye){let Se=c.get(ye);Se===void 0&&(Se=new WeakMap,c.set(ye,Se));let Oe=Se.get(V);Oe===void 0&&(Oe=s.getUniformBlockIndex(ye,V.name),Se.set(V,Oe))}function Ee(V,ye){const Oe=c.get(ye).get(V);l.get(ye)!==Oe&&(s.uniformBlockBinding(ye,Oe,V.__bindingPointIndex),l.set(ye,Oe))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,X={},u={},f=new WeakMap,d=[],p=null,v=!1,m=null,g=null,y=null,_=null,x=null,S=null,w=null,A=new Ie(0,0,0),E=0,b=!1,M=null,L=null,I=null,U=null,F=null,Z.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:k,disable:J,bindFramebuffer:ve,drawBuffers:pe,useProgram:be,setBlending:re,setMaterial:ie,setFlipSided:ne,setCullFace:fe,setLineWidth:R,setPolygonOffset:Ae,setScissorTest:ue,activeTexture:ae,bindTexture:me,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:O,texImage2D:Be,texImage3D:he,updateUBOMapping:De,uniformBlockBinding:Ee,texStorage2D:_e,texStorage3D:Re,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:we,scissor:Me,viewport:Te,reset:Je}}function pT(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,T){return d?new OffscreenCanvas(C,T):Qa("canvas")}function v(C,T,O){let $=1;const Q=me(C);if((Q.width>O||Q.height>O)&&($=O/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor($*Q.width),we=Math.floor($*Q.height);u===void 0&&(u=p(j,we));const _e=T?p(j,we):u;return _e.width=j,_e.height=we,_e.getContext("2d").drawImage(C,0,0,j,we),Fe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+we+")."),_e}else return"data"in C&&Fe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function g(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,T,O,$,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=T;if(T===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8)),T===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),T===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8)),T===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),T===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),T===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),T===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),T===s.RGBA){const we=Q?Za:lt.getTransfer($);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=we===xt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(C,T){let O;return C?T===null||T===Hn||T===Gs?O=s.DEPTH24_STENCIL8:T===un?O=s.DEPTH32F_STENCIL8:T===Vs&&(O=s.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hn||T===Gs?O=s.DEPTH_COMPONENT24:T===un?O=s.DEPTH_COMPONENT32F:T===Vs&&(O=s.DEPTH_COMPONENT16),O}function S(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pt&&C.minFilter!==yt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function w(C){const T=C.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&h.delete(T)}function A(C){const T=C.target;T.removeEventListener("dispose",A),M(T)}function E(C){const T=i.get(C);if(T.__webglInit===void 0)return;const O=C.source,$=f.get(O);if($){const Q=$[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys($).length===0&&f.delete(O)}i.remove(C)}function b(C){const T=i.get(C);s.deleteTexture(T.__webglTexture);const O=C.source,$=f.get(O);delete $[T.__cacheKey],a.memory.textures--}function M(C){const T=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let Q=0;Q<T.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(T.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)s.deleteFramebuffer(T.__webglFramebuffer[$]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const O=C.textures;for(let $=0,Q=O.length;$<Q;$++){const j=i.get(O[$]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[$])}i.remove(C)}let L=0;function I(){L=0}function U(){const C=L;return C>=n.maxTextures&&Fe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),L+=1,C}function F(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function G(C,T){const O=i.get(C);if(C.isVideoTexture&&ue(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const $=C.image;if($===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{z(O,C,T);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+T)}function B(C,T){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){z(O,C,T);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+T)}function H(C,T){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){z(O,C,T);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+T)}function Y(C,T){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){k(O,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+T)}const q={[ar]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[zs]:s.MIRRORED_REPEAT},X={[Pt]:s.NEAREST,[Tc]:s.NEAREST_MIPMAP_NEAREST,[Fr]:s.NEAREST_MIPMAP_LINEAR,[yt]:s.LINEAR,[Os]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},N={[eg]:s.NEVER,[sg]:s.ALWAYS,[tg]:s.LESS,[Dc]:s.LEQUAL,[ng]:s.EQUAL,[Lc]:s.GEQUAL,[ig]:s.GREATER,[rg]:s.NOTEQUAL};function W(C,T){if(T.type===un&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yt||T.magFilter===Os||T.magFilter===Fr||T.magFilter===zn||T.minFilter===yt||T.minFilter===Os||T.minFilter===Fr||T.minFilter===zn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,q[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,q[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,q[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,X[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,X[T.minFilter]),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pt||T.minFilter!==Fr&&T.minFilter!==zn||T.type===un&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Z(C,T){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",w));const $=T.source;let Q=f.get($);Q===void 0&&(Q={},f.set($,Q));const j=F(T);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[j].usedTimes++;const we=Q[C.__cacheKey];we!==void 0&&(Q[C.__cacheKey].usedTimes--,we.usedTimes===0&&b(T)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return O}function se(C,T,O){return Math.floor(Math.floor(C/O)/T)}function te(C,T,O,$){const j=C.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,O,$,T.data);else{j.sort((he,Me)=>he.start-Me.start);let we=0;for(let he=1;he<j.length;he++){const Me=j[we],Te=j[he],De=Me.start+Me.count,Ee=se(Te.start,T.width,4),Je=se(Me.start,T.width,4);Te.start<=De+1&&Ee===Je&&se(Te.start+Te.count-1,T.width,4)===Ee?Me.count=Math.max(Me.count,Te.start+Te.count-Me.start):(++we,j[we]=Te)}j.length=we+1;const _e=s.getParameter(s.UNPACK_ROW_LENGTH),Re=s.getParameter(s.UNPACK_SKIP_PIXELS),Be=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let he=0,Me=j.length;he<Me;he++){const Te=j[he],De=Math.floor(Te.start/4),Ee=Math.ceil(Te.count/4),Je=De%T.width,V=Math.floor(De/T.width),ye=Ee,Se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,Je,V,ye,Se,O,$,T.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,_e),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,Be)}}function z(C,T,O){let $=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=s.TEXTURE_3D);const Q=Z(C,T),j=T.source;t.bindTexture($,C.__webglTexture,s.TEXTURE0+O);const we=i.get(j);if(j.version!==we.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const _e=lt.getPrimaries(lt.workingColorSpace),Re=T.colorSpace===Ii?null:lt.getPrimaries(T.colorSpace),Be=T.colorSpace===Ii||_e===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let he=v(T.image,!1,n.maxTextureSize);he=ae(T,he);const Me=r.convert(T.format,T.colorSpace),Te=r.convert(T.type);let De=_(T.internalFormat,Me,Te,T.colorSpace,T.isVideoTexture);W($,T);let Ee;const Je=T.mipmaps,V=T.isVideoTexture!==!0,ye=we.__version===void 0||Q===!0,Se=j.dataReady,Oe=S(T,he);if(T.isDepthTexture)De=x(T.format===tr,T.type),ye&&(V?t.texStorage2D(s.TEXTURE_2D,1,De,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,De,he.width,he.height,0,Me,Te,null));else if(T.isDataTexture)if(Je.length>0){V&&ye&&t.texStorage2D(s.TEXTURE_2D,Oe,De,Je[0].width,Je[0].height);for(let xe=0,ce=Je.length;xe<ce;xe++)Ee=Je[xe],V?Se&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ee.width,Ee.height,Me,Te,Ee.data):t.texImage2D(s.TEXTURE_2D,xe,De,Ee.width,Ee.height,0,Me,Te,Ee.data);T.generateMipmaps=!1}else V?(ye&&t.texStorage2D(s.TEXTURE_2D,Oe,De,he.width,he.height),Se&&te(T,he,Me,Te)):t.texImage2D(s.TEXTURE_2D,0,De,he.width,he.height,0,Me,Te,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,De,Je[0].width,Je[0].height,he.depth);for(let xe=0,ce=Je.length;xe<ce;xe++)if(Ee=Je[xe],T.format!==fn)if(Me!==null)if(V){if(Se)if(T.layerUpdates.size>0){const Ce=Ou(Ee.width,Ee.height,T.format,T.type);for(const ze of T.layerUpdates){const Ve=Ee.data.subarray(ze*Ce/Ee.data.BYTES_PER_ELEMENT,(ze+1)*Ce/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,ze,Ee.width,Ee.height,1,Me,Ve)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ee.width,Ee.height,he.depth,Me,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,De,Ee.width,Ee.height,he.depth,0,Ee.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ee.width,Ee.height,he.depth,Me,Te,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,De,Ee.width,Ee.height,he.depth,0,Me,Te,Ee.data)}else{V&&ye&&t.texStorage2D(s.TEXTURE_2D,Oe,De,Je[0].width,Je[0].height);for(let xe=0,ce=Je.length;xe<ce;xe++)Ee=Je[xe],T.format!==fn?Me!==null?V?Se&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,De,Ee.width,Ee.height,0,Ee.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Se&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ee.width,Ee.height,Me,Te,Ee.data):t.texImage2D(s.TEXTURE_2D,xe,De,Ee.width,Ee.height,0,Me,Te,Ee.data)}else if(T.isDataArrayTexture)if(V){if(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,De,he.width,he.height,he.depth),Se)if(T.layerUpdates.size>0){const xe=Ou(he.width,he.height,T.format,T.type);for(const ce of T.layerUpdates){const Ce=he.data.subarray(ce*xe/he.data.BYTES_PER_ELEMENT,(ce+1)*xe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ce,he.width,he.height,1,Me,Te,Ce)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,Te,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,he.width,he.height,he.depth,0,Me,Te,he.data);else if(T.isData3DTexture)V?(ye&&t.texStorage3D(s.TEXTURE_3D,Oe,De,he.width,he.height,he.depth),Se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,Te,he.data)):t.texImage3D(s.TEXTURE_3D,0,De,he.width,he.height,he.depth,0,Me,Te,he.data);else if(T.isFramebufferTexture){if(ye)if(V)t.texStorage2D(s.TEXTURE_2D,Oe,De,he.width,he.height);else{let xe=he.width,ce=he.height;for(let Ce=0;Ce<Oe;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,De,xe,ce,0,Me,Te,null),xe>>=1,ce>>=1}}else if(Je.length>0){if(V&&ye){const xe=me(Je[0]);t.texStorage2D(s.TEXTURE_2D,Oe,De,xe.width,xe.height)}for(let xe=0,ce=Je.length;xe<ce;xe++)Ee=Je[xe],V?Se&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Me,Te,Ee):t.texImage2D(s.TEXTURE_2D,xe,De,Me,Te,Ee);T.generateMipmaps=!1}else if(V){if(ye){const xe=me(he);t.texStorage2D(s.TEXTURE_2D,Oe,De,xe.width,xe.height)}Se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Te,he)}else t.texImage2D(s.TEXTURE_2D,0,De,Me,Te,he);m(T)&&g($),we.__version=j.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function k(C,T,O){if(T.image.length!==6)return;const $=Z(C,T),Q=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const j=i.get(Q);if(Q.version!==j.__version||$===!0){t.activeTexture(s.TEXTURE0+O);const we=lt.getPrimaries(lt.workingColorSpace),_e=T.colorSpace===Ii?null:lt.getPrimaries(T.colorSpace),Re=T.colorSpace===Ii||we===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Be=T.isCompressedTexture||T.image[0].isCompressedTexture,he=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!Be&&!he?Me[ce]=v(T.image[ce],!0,n.maxCubemapSize):Me[ce]=he?T.image[ce].image:T.image[ce],Me[ce]=ae(T,Me[ce]);const Te=Me[0],De=r.convert(T.format,T.colorSpace),Ee=r.convert(T.type),Je=_(T.internalFormat,De,Ee,T.colorSpace),V=T.isVideoTexture!==!0,ye=j.__version===void 0||$===!0,Se=Q.dataReady;let Oe=S(T,Te);W(s.TEXTURE_CUBE_MAP,T);let xe;if(Be){V&&ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,Je,Te.width,Te.height);for(let ce=0;ce<6;ce++){xe=Me[ce].mipmaps;for(let Ce=0;Ce<xe.length;Ce++){const ze=xe[Ce];T.format!==fn?De!==null?V?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,ze.width,ze.height,De,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,Je,ze.width,ze.height,0,ze.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,ze.width,ze.height,De,Ee,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,Je,ze.width,ze.height,0,De,Ee,ze.data)}}}else{if(xe=T.mipmaps,V&&ye){xe.length>0&&Oe++;const ce=me(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,Je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(he){V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,De,Ee,Me[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,Me[ce].width,Me[ce].height,0,De,Ee,Me[ce].data);for(let Ce=0;Ce<xe.length;Ce++){const Ve=xe[Ce].image[ce].image;V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,Ve.width,Ve.height,De,Ee,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,Je,Ve.width,Ve.height,0,De,Ee,Ve.data)}}else{V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De,Ee,Me[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,De,Ee,Me[ce]);for(let Ce=0;Ce<xe.length;Ce++){const ze=xe[Ce];V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,De,Ee,ze.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,Je,De,Ee,ze.image[ce])}}}m(T)&&g(s.TEXTURE_CUBE_MAP),j.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function J(C,T,O,$,Q,j){const we=r.convert(O.format,O.colorSpace),_e=r.convert(O.type),Re=_(O.internalFormat,we,_e,O.colorSpace),Be=i.get(T),he=i.get(O);if(he.__renderTarget=T,!Be.__hasExternalTextures){const Me=Math.max(1,T.width>>j),Te=Math.max(1,T.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Re,Me,Te,T.depth,0,we,_e,null):t.texImage2D(Q,j,Re,Me,Te,0,we,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ae(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,he.__webglTexture,0,R(T)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,he.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(C,T,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer){const $=T.depthTexture,Q=$&&$.isDepthTexture?$.type:null,j=x(T.stencilBuffer,Q),we=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(T),j,T.width,T.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(T),j,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,j,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,C)}else{const $=T.textures;for(let Q=0;Q<$.length;Q++){const j=$[Q],we=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Re=_(j.internalFormat,we,_e,j.colorSpace);Ae(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(T),Re,T.width,T.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(T),Re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Re,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(C,T,O){const $=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(T.depthTexture);if(Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),W(s.TEXTURE_CUBE_MAP,T.depthTexture);const Be=r.convert(T.depthTexture.format),he=r.convert(T.depthTexture.type);let Me;T.depthTexture.format===bi?Me=s.DEPTH_COMPONENT24:T.depthTexture.format===tr&&(Me=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Me,T.width,T.height,0,Be,he,null)}}else G(T.depthTexture,0);const j=Q.__webglTexture,we=R(T),_e=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Re=T.depthTexture.format===tr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===bi)Ae(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,_e,j,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,Re,_e,j,0);else if(T.depthTexture.format===tr)Ae(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,_e,j,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,Re,_e,j,0);else throw new Error("Unknown depthTexture format")}function be(C){const T=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=$}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(O)for(let $=0;$<6;$++)pe(T.__webglFramebuffer[$],C,$);else{const $=C.texture.mipmaps;$&&$.length>0?pe(T.__webglFramebuffer[0],C,0):pe(T.__webglFramebuffer,C,0)}else if(O){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[$],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(C,T,O){const $=i.get(C);T!==void 0&&J($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&be(C)}function Pe(C){const T=C.texture,O=i.get(C),$=i.get(T);C.addEventListener("dispose",A);const Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=T.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0){O.__webglFramebuffer[_e]=[];for(let Re=0;Re<T.mipmaps.length;Re++)O.__webglFramebuffer[_e][Re]=s.createFramebuffer()}else O.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){O.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)O.__webglFramebuffer[_e]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(we)for(let _e=0,Re=Q.length;_e<Re;_e++){const Be=i.get(Q[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ae(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<Q.length;_e++){const Re=Q[_e];O.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);const Be=r.convert(Re.format,Re.colorSpace),he=r.convert(Re.type),Me=_(Re.internalFormat,Be,he,Re.colorSpace,C.isXRRenderTarget===!0),Te=R(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Me,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),W(s.TEXTURE_CUBE_MAP,T);for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)J(O.__webglFramebuffer[_e][Re],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re);else J(O.__webglFramebuffer[_e],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(T)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let _e=0,Re=Q.length;_e<Re;_e++){const Be=Q[_e],he=i.get(Be);let Me=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,he.__webglTexture),W(Me,Be),J(O.__webglFramebuffer,C,Be,s.COLOR_ATTACHMENT0+_e,Me,0),m(Be)&&g(Me)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,$.__webglTexture),W(_e,T),T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)J(O.__webglFramebuffer[Re],C,T,s.COLOR_ATTACHMENT0,_e,Re);else J(O.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,_e,0);m(T)&&g(_e),t.unbindTexture()}C.depthBuffer&&be(C)}function re(C){const T=C.textures;for(let O=0,$=T.length;O<$;O++){const Q=T[O];if(m(Q)){const j=y(C),we=i.get(Q).__webglTexture;t.bindTexture(j,we),g(j),t.unbindTexture()}}}const ie=[],ne=[];function fe(C){if(C.samples>0){if(Ae(C)===!1){const T=C.textures,O=C.width,$=C.height;let Q=s.COLOR_BUFFER_BIT;const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=i.get(C),_e=T.length>1;if(_e)for(let Be=0;Be<T.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Be=0;Be<T.length;Be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Be]);const he=i.get(T[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,Q,s.NEAREST),l===!0&&(ie.length=0,ne.length=0,ie.push(s.COLOR_ATTACHMENT0+Be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(j),ne.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Be=0;Be<T.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,we.__webglColorRenderbuffer[Be]);const he=i.get(T[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,he,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function R(C){return Math.min(n.maxSamples,C.samples)}function Ae(C){const T=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ue(C){const T=a.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function ae(C,T){const O=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==rn&&O!==Ii&&(lt.getTransfer(O)===xt?($!==fn||Q!==Mn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",O)),T}function me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=ge,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o0(s,e){function t(i,n=Ii){let r;const a=lt.getTransfer(n);if(i===Mn)return s.UNSIGNED_BYTE;if(i===Ac)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ec)return s.UNSIGNED_SHORT_5_5_5_1;if(i===cf)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===hf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===of)return s.BYTE;if(i===lf)return s.SHORT;if(i===Vs)return s.UNSIGNED_SHORT;if(i===wc)return s.INT;if(i===Hn)return s.UNSIGNED_INT;if(i===un)return s.FLOAT;if(i===yi)return s.HALF_FLOAT;if(i===uf)return s.ALPHA;if(i===ff)return s.RGB;if(i===fn)return s.RGBA;if(i===bi)return s.DEPTH_COMPONENT;if(i===tr)return s.DEPTH_STENCIL;if(i===Cc)return s.RED;if(i===uo)return s.RED_INTEGER;if(i===qr)return s.RG;if(i===Rc)return s.RG_INTEGER;if(i===Pc)return s.RGBA_INTEGER;if(i===Na||i===Fa||i===Oa||i===Ba)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===Bl||i===kl||i===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Gl||i===Hl||i===Wl||i===Xl||i===Yl||i===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vl||i===Gl)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wl)return r.COMPRESSED_R11_EAC;if(i===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yl)return r.COMPRESSED_RG11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jl||i===Kl||i===Zl||i===Jl||i===Ql||i===$l||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===ac||i===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===cc||i===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lc)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===fc||i===dc||i===pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gT=`
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

}`;class vT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ef(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:mT,fragmentShader:gT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Bi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _T extends Si{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const v=typeof XRWebGLBinding<"u",m=new vT,g={},y=t.getContextAttributes();let _=null,x=null;const S=[],w=[],A=new de;let E=null;const b=new Gt;b.viewport=new pt;const M=new Gt;M.viewport=new pt;const L=[b,M],I=new jg;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let k=S[z];return k===void 0&&(k=new Ml,S[z]=k),k.getTargetRaySpace()},this.getControllerGrip=function(z){let k=S[z];return k===void 0&&(k=new Ml,S[z]=k),k.getGripSpace()},this.getHand=function(z){let k=S[z];return k===void 0&&(k=new Ml,S[z]=k),k.getHandSpace()};function G(z){const k=w.indexOf(z.inputSource);if(k===-1)return;const J=S[k];J!==void 0&&(J.update(z.inputSource,z.frame,c||a),J.dispatchEvent({type:z.type,data:z.inputSource}))}function B(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",H);for(let z=0;z<S.length;z++){const k=w[z];k!==null&&(w[z]=null,S[z].disconnect(k))}U=null,F=null,m.reset();for(const z in g)delete g[z];e.setRenderTarget(_),d=null,f=null,u=null,n=null,x=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",B),n.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ve=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=y.stencil?tr:bi,ve=y.stencil?Gs:Hn);const be={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(be),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ln(f.textureWidth,f.textureHeight,{format:fn,type:Mn,depthTexture:new Ks(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const J={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,J),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ln(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(z){for(let k=0;k<z.removed.length;k++){const J=z.removed[k],ve=w.indexOf(J);ve>=0&&(w[ve]=null,S[ve].disconnect(J))}for(let k=0;k<z.added.length;k++){const J=z.added[k];let ve=w.indexOf(J);if(ve===-1){for(let be=0;be<S.length;be++)if(be>=w.length){w.push(J),ve=be;break}else if(w[be]===null){w[be]=J,ve=be;break}if(ve===-1)break}const pe=S[ve];pe&&pe.connect(J)}}const Y=new D,q=new D;function X(z,k,J){Y.setFromMatrixPosition(k.matrixWorld),q.setFromMatrixPosition(J.matrixWorld);const ve=Y.distanceTo(q),pe=k.projectionMatrix.elements,be=J.projectionMatrix.elements,ge=pe[14]/(pe[10]-1),Pe=pe[14]/(pe[10]+1),re=(pe[9]+1)/pe[5],ie=(pe[9]-1)/pe[5],ne=(pe[8]-1)/pe[0],fe=(be[8]+1)/be[0],R=ge*ne,Ae=ge*fe,ue=ve/(-ne+fe),ae=ue*-ne;if(k.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ae),z.translateZ(ue),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),pe[10]===-1)z.projectionMatrix.copy(k.projectionMatrix),z.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const me=ge+ue,C=Pe+ue,T=R-ae,O=Ae+(ve-ae),$=re*Pe/C*me,Q=ie*Pe/C*me;z.projectionMatrix.makePerspective(T,O,$,Q,me,C),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function N(z,k){k===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(k.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;let k=z.near,J=z.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(J=m.depthFar)),I.near=M.near=b.near=k,I.far=M.far=b.far=J,(U!==I.near||F!==I.far)&&(n.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,F=I.far),I.layers.mask=z.layers.mask|6,b.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const ve=z.parent,pe=I.cameras;N(I,ve);for(let be=0;be<pe.length;be++)N(pe[be],ve);pe.length===2?X(I,b,M):I.projectionMatrix.copy(b.projectionMatrix),W(z,I,ve)};function W(z,k,J){J===null?z.matrix.copy(k.matrixWorld):(z.matrix.copy(J.matrixWorld),z.matrix.invert(),z.matrix.multiply(k.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(k.projectionMatrix),z.projectionMatrixInverse.copy(k.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=qs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(z){return g[z]};let Z=null;function se(z,k){if(h=k.getViewerPose(c||a),p=k,h!==null){const J=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ve=!1;J.length!==I.cameras.length&&(I.cameras.length=0,ve=!0);for(let Pe=0;Pe<J.length;Pe++){const re=J[Pe];let ie=null;if(d!==null)ie=d.getViewport(re);else{const fe=u.getViewSubImage(f,re);ie=fe.viewport,Pe===0&&(e.setRenderTargetTextures(x,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(x))}let ne=L[Pe];ne===void 0&&(ne=new Gt,ne.layers.enable(Pe),ne.viewport=new pt,L[Pe]=ne),ne.matrix.fromArray(re.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(re.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ie.x,ie.y,ie.width,ie.height),Pe===0&&(I.matrix.copy(ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ve===!0&&I.cameras.push(ne)}const pe=n.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const Pe=u.getDepthInformation(J[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,n.renderState)}if(pe&&pe.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Pe=0;Pe<J.length;Pe++){const re=J[Pe].camera;if(re){let ie=g[re];ie||(ie=new Ef,g[re]=ie);const ne=u.getCameraImage(re);ie.sourceTexture=ne}}}}for(let J=0;J<S.length;J++){const ve=w[J],pe=S[J];ve!==null&&pe!==void 0&&pe.update(ve,k,c||a)}Z&&Z(z,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),p=null}const te=new n0;te.setAnimationLoop(se),this.setAnimationLoop=function(z){Z=z},this.dispose=function(){}}}const Rr=new Un,xT=new Ye;function yT(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,ug(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,y,_,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,Rr.copy(x),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(xT.makeRotationFromEuler(Rr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=_*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function bT(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function c(y,_){let x=n[y.id];x===void 0&&(p(y),x=h(y),n[y.id]=x,y.addEventListener("dispose",m));const S=_.program;i.updateUBOMapping(y,S);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){const _=u();y.__bindingPointIndex=_;const x=s.createBuffer(),S=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=n[y.id],x=y.uniforms,S=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,A=x.length;w<A;w++){const E=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,M=E.length;b<M;b++){const L=E[b];if(d(L,w,b,S)===!0){const I=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let G=0;G<U.length;G++){const B=U[G],H=v(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,I+F,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,F),F+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,_,x,S){const w=y.value,A=_+"_"+x;if(S[A]===void 0)return typeof w=="number"||typeof w=="boolean"?S[A]=w:S[A]=w.clone(),!0;{const E=S[A];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return S[A]=w,!0}else if(E.equals(w)===!1)return E.copy(w),!0}return!1}function p(y){const _=y.uniforms;let x=0;const S=16;for(let A=0,E=_.length;A<E;A++){const b=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,L=b.length;M<L;M++){const I=b[M],U=Array.isArray(I.value)?I.value:[I.value];for(let F=0,G=U.length;F<G;F++){const B=U[F],H=v(B),Y=x%S,q=Y%H.boundary,X=Y+q;x+=q,X!==0&&S-X<H.storage&&(x+=S-X),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=H.storage}}}const w=x%S;return w>0&&(x+=S-w),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function g(){for(const y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:g}}const ST=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function MT(){return di===null&&(di=new si(ST,16,16,qr,yi),di.name="DFG_LUT",di.minFilter=yt,di.magFilter=yt,di.wrapS=hn,di.wrapT=hn,di.generateMipmaps=!1,di.needsUpdate=!0),di}class l0{constructor(e={}){const{canvas:t=lg(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Mn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const v=d,m=new Set([Pc,Rc,uo]),g=new Set([Mn,Hn,Vs,Gs,Ac,Ec]),y=new Uint32Array(4),_=new Int32Array(4);let x=null,S=null;const w=[],A=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let M=!1;this._outputColorSpace=Vt;let L=0,I=0,U=null,F=-1,G=null;const B=new pt,H=new pt;let Y=null;const q=new Ie(0);let X=0,N=t.width,W=t.height,Z=1,se=null,te=null;const z=new pt(0,0,N,W),k=new pt(0,0,N,W);let J=!1;const ve=new ea;let pe=!1,be=!1;const ge=new Ye,Pe=new D,re=new pt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function fe(){return U===null?Z:1}let R=i;function Ae(P,K){return t.getContext(P,K)}try{const P={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),R===null){const K="webgl2";if(R=Ae(K,P),R===null)throw Ae(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw qe("WebGLRenderer: "+P.message),P}let ue,ae,me,C,T,O,$,Q,j,we,_e,Re,Be,he,Me,Te,De,Ee,Je,V,ye,Se,Oe,xe;function ce(){ue=new TM(R),ue.init(),Se=new o0(R,ue),ae=new mM(R,ue,e,Se),me=new dT(R,ue),ae.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),C=new EM(R),T=new Q1,O=new pT(R,ue,me,T,ae,Se,C),$=new vM(b),Q=new MM(b),j=new Iy(R),Oe=new dM(R,j),we=new wM(R,j,C,Oe),_e=new RM(R,we,j,C),Je=new CM(R,ae,O),Te=new gM(T),Re=new J1(b,$,Q,ue,ae,Oe,Te),Be=new yT(b,T),he=new eT,Me=new aT(ue),Ee=new fM(b,$,Q,me,_e,p,l),De=new uT(b,_e,ae),xe=new bT(R,C,ae,me),V=new pM(R,ue,C),ye=new AM(R,ue,C),C.programs=Re.programs,b.capabilities=ae,b.extensions=ue,b.properties=T,b.renderLists=he,b.shadowMap=De,b.state=me,b.info=C}ce(),v!==Mn&&(E=new IM(v,t.width,t.height,n,r));const Ce=new _T(b,R);this.xr=Ce,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=ue.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ue.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(N,W,!1))},this.getSize=function(P){return P.set(N,W)},this.setSize=function(P,K,le=!0){if(Ce.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}N=P,W=K,t.width=Math.floor(P*Z),t.height=Math.floor(K*Z),le===!0&&(t.style.width=P+"px",t.style.height=K+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(N*Z,W*Z).floor()},this.setDrawingBufferSize=function(P,K,le){N=P,W=K,Z=le,t.width=Math.floor(P*le),t.height=Math.floor(K*le),this.setViewport(0,0,P,K)},this.setEffects=function(P){if(v===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let K=0;K<P.length;K++)if(P[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(z)},this.setViewport=function(P,K,le,oe){P.isVector4?z.set(P.x,P.y,P.z,P.w):z.set(P,K,le,oe),me.viewport(B.copy(z).multiplyScalar(Z).round())},this.getScissor=function(P){return P.copy(k)},this.setScissor=function(P,K,le,oe){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,K,le,oe),me.scissor(H.copy(k).multiplyScalar(Z).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(P){me.setScissorTest(J=P)},this.setOpaqueSort=function(P){se=P},this.setTransparentSort=function(P){te=P},this.getClearColor=function(P){return P.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,le=!0){let oe=0;if(P){let ee=!1;if(U!==null){const Le=U.texture.format;ee=m.has(Le)}if(ee){const Le=U.texture.type,ke=g.has(Le),Ne=Ee.getClearColor(),We=Ee.getClearAlpha(),Xe=Ne.r,et=Ne.g,Ke=Ne.b;ke?(y[0]=Xe,y[1]=et,y[2]=Ke,y[3]=We,R.clearBufferuiv(R.COLOR,0,y)):(_[0]=Xe,_[1]=et,_[2]=Ke,_[3]=We,R.clearBufferiv(R.COLOR,0,_))}else oe|=R.COLOR_BUFFER_BIT}K&&(oe|=R.DEPTH_BUFFER_BIT),le&&(oe|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),Ee.dispose(),he.dispose(),Me.dispose(),T.dispose(),$.dispose(),Q.dispose(),_e.dispose(),Oe.dispose(),xe.dispose(),Re.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Kn),Ce.removeEventListener("sessionend",ci),Zt.stop()};function ze(P){P.preventDefault(),$a("WebGLRenderer: Context Lost."),M=!0}function Ve(){$a("WebGLRenderer: Context Restored."),M=!1;const P=C.autoReset,K=De.enabled,le=De.autoUpdate,oe=De.needsUpdate,ee=De.type;ce(),C.autoReset=P,De.enabled=K,De.autoUpdate=le,De.needsUpdate=oe,De.type=ee}function Qe(P){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Mt(P){const K=P.target;K.removeEventListener("dispose",Mt),Tt(K)}function Tt(P){Ut(P),T.remove(P)}function Ut(P){const K=T.get(P).programs;K!==void 0&&(K.forEach(function(le){Re.releaseProgram(le)}),P.isShaderMaterial&&Re.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,le,oe,ee,Le){K===null&&(K=ie);const ke=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=ph(P,K,le,oe,ee);me.setMaterial(oe,ke);let We=le.index,Xe=1;if(oe.wireframe===!0){if(We=we.getWireframeAttribute(le),We===void 0)return;Xe=2}const et=le.drawRange,Ke=le.attributes.position;let at=et.start*Xe,ut=(et.start+et.count)*Xe;Le!==null&&(at=Math.max(at,Le.start*Xe),ut=Math.min(ut,(Le.start+Le.count)*Xe)),We!==null?(at=Math.max(at,0),ut=Math.min(ut,We.count)):Ke!=null&&(at=Math.max(at,0),ut=Math.min(ut,Ke.count));const wt=ut-at;if(wt<0||wt===1/0)return;Oe.setup(ee,oe,Ne,le,We);let bt,gt=V;if(We!==null&&(bt=j.get(We),gt=ye,gt.setIndex(bt)),ee.isMesh)oe.wireframe===!0?(me.setLineWidth(oe.wireframeLinewidth*fe()),gt.setMode(R.LINES)):gt.setMode(R.TRIANGLES);else if(ee.isLine){let Ze=oe.linewidth;Ze===void 0&&(Ze=1),me.setLineWidth(Ze*fe()),ee.isLineSegments?gt.setMode(R.LINES):ee.isLineLoop?gt.setMode(R.LINE_LOOP):gt.setMode(R.LINE_STRIP)}else ee.isPoints?gt.setMode(R.POINTS):ee.isSprite&&gt.setMode(R.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Ys("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))gt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Ze=ee._multiDrawStarts,mt=ee._multiDrawCounts,rt=ee._multiDrawCount,an=We?j.get(We).bytesPerElement:1,Zn=T.get(oe).currentProgram.getUniforms();for(let Bt=0;Bt<rt;Bt++)Zn.setValue(R,"_gl_DrawID",Bt),gt.render(Ze[Bt]/an,mt[Bt])}else if(ee.isInstancedMesh)gt.renderInstances(at,wt,ee.count);else if(le.isInstancedBufferGeometry){const Ze=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,mt=Math.min(le.instanceCount,Ze);gt.renderInstances(at,wt,mt)}else gt.render(at,wt)};function vn(P,K,le){P.transparent===!0&&P.side===Pn&&P.forceSinglePass===!1?(P.side=pn,P.needsUpdate=!0,dr(P,K,le),P.side=_i,P.needsUpdate=!0,dr(P,K,le),P.side=Pn):dr(P,K,le)}this.compile=function(P,K,le=null){le===null&&(le=P),S=Me.get(le),S.init(K),A.push(S),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),P!==le&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),S.setupLights();const oe=new Set;return P.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Le=ee.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const Ne=Le[ke];vn(Ne,le,ee),oe.add(Ne)}else vn(Le,le,ee),oe.add(Le)}),S=A.pop(),oe},this.compileAsync=function(P,K,le=null){const oe=this.compile(P,K,le);return new Promise(ee=>{function Le(){if(oe.forEach(function(ke){T.get(ke).currentProgram.isReady()&&oe.delete(ke)}),oe.size===0){ee(P);return}setTimeout(Le,10)}ue.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Nn=null;function jn(P){Nn&&Nn(P)}function Kn(){Zt.stop()}function ci(){Zt.start()}const Zt=new n0;Zt.setAnimationLoop(jn),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(P){Nn=P,Ce.setAnimationLoop(P),P===null?Zt.stop():Zt.start()},Ce.addEventListener("sessionstart",Kn),Ce.addEventListener("sessionend",ci),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const le=Ce.enabled===!0&&Ce.isPresenting===!0,oe=E!==null&&(U===null||le)&&E.begin(b,U);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(K),K=Ce.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,K,U),S=Me.get(P,A.length),S.init(K),A.push(S),ge.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ve.setFromProjectionMatrix(ge,In,K.reversedDepth),be=this.localClippingEnabled,pe=Te.init(this.clippingPlanes,be),x=he.get(P,w.length),x.init(),w.push(x),Ce.enabled===!0&&Ce.isPresenting===!0){const ke=b.xr.getDepthSensingMesh();ke!==null&&Ot(ke,K,-1/0,b.sortObjects)}Ot(P,K,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(se,te),ne=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ne&&Ee.addToRenderList(x,P),this.info.render.frame++,pe===!0&&Te.beginShadows();const ee=S.state.shadowsArray;if(De.render(ee,P,K),pe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&E.hasRenderPass())===!1){const ke=x.opaque,Ne=x.transmissive;if(S.setupLights(),K.isArrayCamera){const We=K.cameras;if(Ne.length>0)for(let Xe=0,et=We.length;Xe<et;Xe++){const Ke=We[Xe];sa(ke,Ne,P,Ke)}ne&&Ee.render(P);for(let Xe=0,et=We.length;Xe<et;Xe++){const Ke=We[Xe];hi(x,P,Ke,Ke.viewport)}}else Ne.length>0&&sa(ke,Ne,P,K),ne&&Ee.render(P),hi(x,P,K)}U!==null&&I===0&&(O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U)),oe&&E.end(b),P.isScene===!0&&P.onAfterRender(b,P,K),Oe.resetDefaultState(),F=-1,G=null,A.pop(),A.length>0?(S=A[A.length-1],pe===!0&&Te.setGlobalState(b.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?x=w[w.length-1]:x=null};function Ot(P,K,le,oe){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ve.intersectsSprite(P)){oe&&re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);const ke=_e.update(P),Ne=P.material;Ne.visible&&x.push(P,ke,Ne,le,re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ve.intersectsObject(P))){const ke=_e.update(P),Ne=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),re.copy(P.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),re.copy(ke.boundingSphere.center)),re.applyMatrix4(P.matrixWorld).applyMatrix4(ge)),Array.isArray(Ne)){const We=ke.groups;for(let Xe=0,et=We.length;Xe<et;Xe++){const Ke=We[Xe],at=Ne[Ke.materialIndex];at&&at.visible&&x.push(P,ke,at,le,re.z,Ke)}}else Ne.visible&&x.push(P,ke,Ne,le,re.z,null)}}const Le=P.children;for(let ke=0,Ne=Le.length;ke<Ne;ke++)Ot(Le[ke],K,le,oe)}function hi(P,K,le,oe){const{opaque:ee,transmissive:Le,transparent:ke}=P;S.setupLightsView(le),pe===!0&&Te.setGlobalState(b.clippingPlanes,le),oe&&me.viewport(B.copy(oe)),ee.length>0&&ki(ee,K,le),Le.length>0&&ki(Le,K,le),ke.length>0&&ki(ke,K,le),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function sa(P,K,le,oe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[oe.id]===void 0){const at=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[oe.id]=new Ln(1,1,{generateMipmaps:!0,type:at?yi:Mn,minFilter:zn,samples:ae.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Le=S.state.transmissionRenderTarget[oe.id],ke=oe.viewport||B;Le.setSize(ke.z*b.transmissionResolutionScale,ke.w*b.transmissionResolutionScale);const Ne=b.getRenderTarget(),We=b.getActiveCubeFace(),Xe=b.getActiveMipmapLevel();b.setRenderTarget(Le),b.getClearColor(q),X=b.getClearAlpha(),X<1&&b.setClearColor(16777215,.5),b.clear(),ne&&Ee.render(le);const et=b.toneMapping;b.toneMapping=ri;const Ke=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),S.setupLightsView(oe),pe===!0&&Te.setGlobalState(b.clippingPlanes,oe),ki(P,le,oe),O.updateMultisampleRenderTarget(Le),O.updateRenderTargetMipmap(Le),ue.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let ut=0,wt=K.length;ut<wt;ut++){const bt=K[ut],{object:gt,geometry:Ze,material:mt,group:rt}=bt;if(mt.side===Pn&&gt.layers.test(oe.layers)){const an=mt.side;mt.side=pn,mt.needsUpdate=!0,bo(gt,le,oe,Ze,mt,rt),mt.side=an,mt.needsUpdate=!0,at=!0}}at===!0&&(O.updateMultisampleRenderTarget(Le),O.updateRenderTargetMipmap(Le))}b.setRenderTarget(Ne,We,Xe),b.setClearColor(q,X),Ke!==void 0&&(oe.viewport=Ke),b.toneMapping=et}function ki(P,K,le){const oe=K.isScene===!0?K.overrideMaterial:null;for(let ee=0,Le=P.length;ee<Le;ee++){const ke=P[ee],{object:Ne,geometry:We,group:Xe}=ke;let et=ke.material;et.allowOverride===!0&&oe!==null&&(et=oe),Ne.layers.test(le.layers)&&bo(Ne,K,le,We,et,Xe)}}function bo(P,K,le,oe,ee,Le){P.onBeforeRender(b,K,le,oe,ee,Le),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(b,K,le,oe,P,Le),ee.transparent===!0&&ee.side===Pn&&ee.forceSinglePass===!1?(ee.side=pn,ee.needsUpdate=!0,b.renderBufferDirect(le,K,oe,ee,P,Le),ee.side=_i,ee.needsUpdate=!0,b.renderBufferDirect(le,K,oe,ee,P,Le),ee.side=Pn):b.renderBufferDirect(le,K,oe,ee,P,Le),P.onAfterRender(b,K,le,oe,ee,Le)}function dr(P,K,le){K.isScene!==!0&&(K=ie);const oe=T.get(P),ee=S.state.lights,Le=S.state.shadowsArray,ke=ee.state.version,Ne=Re.getParameters(P,ee.state,Le,K,le),We=Re.getProgramCacheKey(Ne);let Xe=oe.programs;oe.environment=P.isMeshStandardMaterial?K.environment:null,oe.fog=K.fog,oe.envMap=(P.isMeshStandardMaterial?Q:$).get(P.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,Xe===void 0&&(P.addEventListener("dispose",Mt),Xe=new Map,oe.programs=Xe);let et=Xe.get(We);if(et!==void 0){if(oe.currentProgram===et&&oe.lightsStateVersion===ke)return ls(P,Ne),et}else Ne.uniforms=Re.getUniforms(P),P.onBeforeCompile(Ne,b),et=Re.acquireProgram(Ne,We),Xe.set(We,et),oe.uniforms=Ne.uniforms;const Ke=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ke.clippingPlanes=Te.uniform),ls(P,Ne),oe.needsLights=cs(P),oe.lightsStateVersion=ke,oe.needsLights&&(Ke.ambientLightColor.value=ee.state.ambient,Ke.lightProbe.value=ee.state.probe,Ke.directionalLights.value=ee.state.directional,Ke.directionalLightShadows.value=ee.state.directionalShadow,Ke.spotLights.value=ee.state.spot,Ke.spotLightShadows.value=ee.state.spotShadow,Ke.rectAreaLights.value=ee.state.rectArea,Ke.ltc_1.value=ee.state.rectAreaLTC1,Ke.ltc_2.value=ee.state.rectAreaLTC2,Ke.pointLights.value=ee.state.point,Ke.pointLightShadows.value=ee.state.pointShadow,Ke.hemisphereLights.value=ee.state.hemi,Ke.directionalShadowMap.value=ee.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ke.spotShadowMap.value=ee.state.spotShadowMap,Ke.spotLightMatrix.value=ee.state.spotLightMatrix,Ke.spotLightMap.value=ee.state.spotLightMap,Ke.pointShadowMap.value=ee.state.pointShadowMap,Ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),oe.currentProgram=et,oe.uniformsList=null,et}function pr(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=Tl.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function ls(P,K){const le=T.get(P);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function ph(P,K,le,oe,ee){K.isScene!==!0&&(K=ie),O.resetTextureUnits();const Le=K.fog,ke=oe.isMeshStandardMaterial?K.environment:null,Ne=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:rn,We=(oe.isMeshStandardMaterial?Q:$).get(oe.envMap||ke),Xe=oe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,et=!!le.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ke=!!le.morphAttributes.position,at=!!le.morphAttributes.normal,ut=!!le.morphAttributes.color;let wt=ri;oe.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(wt=b.toneMapping);const bt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,gt=bt!==void 0?bt.length:0,Ze=T.get(oe),mt=S.state.lights;if(pe===!0&&(be===!0||P!==G)){const Yt=P===G&&oe.id===F;Te.setState(oe,P,Yt)}let rt=!1;oe.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==mt.state.version||Ze.outputColorSpace!==Ne||ee.isBatchedMesh&&Ze.batching===!1||!ee.isBatchedMesh&&Ze.batching===!0||ee.isBatchedMesh&&Ze.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ze.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ze.instancing===!1||!ee.isInstancedMesh&&Ze.instancing===!0||ee.isSkinnedMesh&&Ze.skinning===!1||!ee.isSkinnedMesh&&Ze.skinning===!0||ee.isInstancedMesh&&Ze.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ze.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ze.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ze.instancingMorph===!1&&ee.morphTexture!==null||Ze.envMap!==We||oe.fog===!0&&Ze.fog!==Le||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Te.numPlanes||Ze.numIntersection!==Te.numIntersection)||Ze.vertexAlphas!==Xe||Ze.vertexTangents!==et||Ze.morphTargets!==Ke||Ze.morphNormals!==at||Ze.morphColors!==ut||Ze.toneMapping!==wt||Ze.morphTargetsCount!==gt)&&(rt=!0):(rt=!0,Ze.__version=oe.version);let an=Ze.currentProgram;rt===!0&&(an=dr(oe,K,ee));let Zn=!1,Bt=!1,zi=!1;const vt=an.getUniforms(),kt=Ze.uniforms;if(me.useProgram(an.program)&&(Zn=!0,Bt=!0,zi=!0),oe.id!==F&&(F=oe.id,Bt=!0),Zn||G!==P){me.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),vt.setValue(R,"projectionMatrix",P.projectionMatrix),vt.setValue(R,"viewMatrix",P.matrixWorldInverse);const Jt=vt.map.cameraPosition;Jt!==void 0&&Jt.setValue(R,Pe.setFromMatrixPosition(P.matrixWorld)),ae.logarithmicDepthBuffer&&vt.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&vt.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),G!==P&&(G=P,Bt=!0,zi=!0)}if(Ze.needsLights&&(mt.state.directionalShadowMap.length>0&&vt.setValue(R,"directionalShadowMap",mt.state.directionalShadowMap,O),mt.state.spotShadowMap.length>0&&vt.setValue(R,"spotShadowMap",mt.state.spotShadowMap,O),mt.state.pointShadowMap.length>0&&vt.setValue(R,"pointShadowMap",mt.state.pointShadowMap,O)),ee.isSkinnedMesh){vt.setOptional(R,ee,"bindMatrix"),vt.setOptional(R,ee,"bindMatrixInverse");const Yt=ee.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),vt.setValue(R,"boneTexture",Yt.boneTexture,O))}ee.isBatchedMesh&&(vt.setOptional(R,ee,"batchingTexture"),vt.setValue(R,"batchingTexture",ee._matricesTexture,O),vt.setOptional(R,ee,"batchingIdTexture"),vt.setValue(R,"batchingIdTexture",ee._indirectTexture,O),vt.setOptional(R,ee,"batchingColorTexture"),ee._colorsTexture!==null&&vt.setValue(R,"batchingColorTexture",ee._colorsTexture,O));const $t=le.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&Je.update(ee,le,an),(Bt||Ze.receiveShadow!==ee.receiveShadow)&&(Ze.receiveShadow=ee.receiveShadow,vt.setValue(R,"receiveShadow",ee.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(kt.envMap.value=We,kt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&K.environment!==null&&(kt.envMapIntensity.value=K.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=MT()),Bt&&(vt.setValue(R,"toneMappingExposure",b.toneMappingExposure),Ze.needsLights&&So(kt,zi),Le&&oe.fog===!0&&Be.refreshFogUniforms(kt,Le),Be.refreshMaterialUniforms(kt,oe,Z,W,S.state.transmissionRenderTarget[P.id]),Tl.upload(R,pr(Ze),kt,O)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Tl.upload(R,pr(Ze),kt,O),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&vt.setValue(R,"center",ee.center),vt.setValue(R,"modelViewMatrix",ee.modelViewMatrix),vt.setValue(R,"normalMatrix",ee.normalMatrix),vt.setValue(R,"modelMatrix",ee.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Yt=oe.uniformsGroups;for(let Jt=0,mr=Yt.length;Jt<mr;Jt++){const An=Yt[Jt];xe.update(An,an),xe.bind(An,an)}}return an}function So(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function cs(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,K,le){const oe=T.get(P);oe.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),T.get(P.texture).__webglTexture=K,T.get(P.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:le,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){const le=T.get(P);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};const aa=R.createFramebuffer();this.setRenderTarget=function(P,K=0,le=0){U=P,L=K,I=le;let oe=null,ee=!1,Le=!1;if(P){const Ne=T.get(P);if(Ne.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(R.FRAMEBUFFER,Ne.__webglFramebuffer),B.copy(P.viewport),H.copy(P.scissor),Y=P.scissorTest,me.viewport(B),me.scissor(H),me.setScissorTest(Y),F=-1;return}else if(Ne.__webglFramebuffer===void 0)O.setupRenderTarget(P);else if(Ne.__hasExternalTextures)O.rebindTextures(P,T.get(P.texture).__webglTexture,T.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const et=P.depthTexture;if(Ne.__boundDepthTexture!==et){if(et!==null&&T.has(et)&&(P.width!==et.image.width||P.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(P)}}const We=P.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Le=!0);const Xe=T.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Xe[K])?oe=Xe[K][le]:oe=Xe[K],ee=!0):P.samples>0&&O.useMultisampledRTT(P)===!1?oe=T.get(P).__webglMultisampledFramebuffer:Array.isArray(Xe)?oe=Xe[le]:oe=Xe,B.copy(P.viewport),H.copy(P.scissor),Y=P.scissorTest}else B.copy(z).multiplyScalar(Z).floor(),H.copy(k).multiplyScalar(Z).floor(),Y=J;if(le!==0&&(oe=aa),me.bindFramebuffer(R.FRAMEBUFFER,oe)&&me.drawBuffers(P,oe),me.viewport(B),me.scissor(H),me.setScissorTest(Y),ee){const Ne=T.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ne.__webglTexture,le)}else if(Le){const Ne=K;for(let We=0;We<P.textures.length;We++){const Xe=T.get(P.textures[We]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+We,Xe.__webglTexture,le,Ne)}}else if(P!==null&&le!==0){const Ne=T.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ne.__webglTexture,le)}F=-1},this.readRenderTargetPixels=function(P,K,le,oe,ee,Le,ke,Ne=0){if(!(P&&P.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=T.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){me.bindFramebuffer(R.FRAMEBUFFER,We);try{const Xe=P.textures[Ne],et=Xe.format,Ke=Xe.type;if(!ae.textureFormatReadable(et)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ke)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-oe&&le>=0&&le<=P.height-ee&&(P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ne),R.readPixels(K,le,oe,ee,Se.convert(et),Se.convert(Ke),Le))}finally{const Xe=U!==null?T.get(U).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(P,K,le,oe,ee,Le,ke,Ne=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=T.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(K>=0&&K<=P.width-oe&&le>=0&&le<=P.height-ee){me.bindFramebuffer(R.FRAMEBUFFER,We);const Xe=P.textures[Ne],et=Xe.format,Ke=Xe.type;if(!ae.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,at),R.bufferData(R.PIXEL_PACK_BUFFER,Le.byteLength,R.STREAM_READ),P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ne),R.readPixels(K,le,oe,ee,Se.convert(et),Se.convert(Ke),0);const ut=U!==null?T.get(U).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,ut);const wt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Fv(R,wt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,at),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Le),R.deleteBuffer(at),R.deleteSync(wt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,le=0){const oe=Math.pow(2,-le),ee=Math.floor(P.image.width*oe),Le=Math.floor(P.image.height*oe),ke=K!==null?K.x:0,Ne=K!==null?K.y:0;O.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,le,0,0,ke,Ne,ee,Le),me.unbindTexture()};const oa=R.createFramebuffer(),je=R.createFramebuffer();this.copyTextureToTexture=function(P,K,le=null,oe=null,ee=0,Le=null){Le===null&&(ee!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=ee,ee=0):Le=0);let ke,Ne,We,Xe,et,Ke,at,ut,wt;const bt=P.isCompressedTexture?P.mipmaps[Le]:P.image;if(le!==null)ke=le.max.x-le.min.x,Ne=le.max.y-le.min.y,We=le.isBox3?le.max.z-le.min.z:1,Xe=le.min.x,et=le.min.y,Ke=le.isBox3?le.min.z:0;else{const $t=Math.pow(2,-ee);ke=Math.floor(bt.width*$t),Ne=Math.floor(bt.height*$t),P.isDataArrayTexture?We=bt.depth:P.isData3DTexture?We=Math.floor(bt.depth*$t):We=1,Xe=0,et=0,Ke=0}oe!==null?(at=oe.x,ut=oe.y,wt=oe.z):(at=0,ut=0,wt=0);const gt=Se.convert(K.format),Ze=Se.convert(K.type);let mt;K.isData3DTexture?(O.setTexture3D(K,0),mt=R.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(O.setTexture2DArray(K,0),mt=R.TEXTURE_2D_ARRAY):(O.setTexture2D(K,0),mt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,K.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,K.unpackAlignment);const rt=R.getParameter(R.UNPACK_ROW_LENGTH),an=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Zn=R.getParameter(R.UNPACK_SKIP_PIXELS),Bt=R.getParameter(R.UNPACK_SKIP_ROWS),zi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,bt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,bt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Xe),R.pixelStorei(R.UNPACK_SKIP_ROWS,et),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ke);const vt=P.isDataArrayTexture||P.isData3DTexture,kt=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){const $t=T.get(P),Yt=T.get(K),Jt=T.get($t.__renderTarget),mr=T.get(Yt.__renderTarget);me.bindFramebuffer(R.READ_FRAMEBUFFER,Jt.__webglFramebuffer),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let An=0;An<We;An++)vt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,T.get(P).__webglTexture,ee,Ke+An),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,T.get(K).__webglTexture,Le,wt+An)),R.blitFramebuffer(Xe,et,ke,Ne,at,ut,ke,Ne,R.DEPTH_BUFFER_BIT,R.NEAREST);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(ee!==0||P.isRenderTargetTexture||T.has(P)){const $t=T.get(P),Yt=T.get(K);me.bindFramebuffer(R.READ_FRAMEBUFFER,oa),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,je);for(let Jt=0;Jt<We;Jt++)vt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$t.__webglTexture,ee,Ke+Jt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$t.__webglTexture,ee),kt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Yt.__webglTexture,Le,wt+Jt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Yt.__webglTexture,Le),ee!==0?R.blitFramebuffer(Xe,et,ke,Ne,at,ut,ke,Ne,R.COLOR_BUFFER_BIT,R.NEAREST):kt?R.copyTexSubImage3D(mt,Le,at,ut,wt+Jt,Xe,et,ke,Ne):R.copyTexSubImage2D(mt,Le,at,ut,Xe,et,ke,Ne);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else kt?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(mt,Le,at,ut,wt,ke,Ne,We,gt,Ze,bt.data):K.isCompressedArrayTexture?R.compressedTexSubImage3D(mt,Le,at,ut,wt,ke,Ne,We,gt,bt.data):R.texSubImage3D(mt,Le,at,ut,wt,ke,Ne,We,gt,Ze,bt):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Le,at,ut,ke,Ne,gt,Ze,bt.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Le,at,ut,bt.width,bt.height,gt,bt.data):R.texSubImage2D(R.TEXTURE_2D,Le,at,ut,ke,Ne,gt,Ze,bt);R.pixelStorei(R.UNPACK_ROW_LENGTH,rt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,an),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Zn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zi),Le===0&&K.generateMipmaps&&R.generateMipmap(mt),me.unbindTexture()},this.initRenderTarget=function(P){T.get(P).__webglFramebuffer===void 0&&O.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?O.setTextureCube(P,0):P.isData3DTexture?O.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?O.setTexture2DArray(P,0):O.setTexture2D(P,0),me.unbindTexture()},this.resetState=function(){L=0,I=0,U=null,me.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const TT=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:rf,AddEquation:er,AddOperation:Xm,AdditiveAnimationBlendMode:df,AdditiveBlending:wu,AgXToneMapping:Ya,AlphaFormat:uf,AlwaysCompare:sg,AlwaysDepth:Il,AlwaysStencilFunc:Ru,AmbientLight:Hg,AnimationAction:Qg,AnimationClip:Js,AnimationLoader:wx,AnimationMixer:Qx,AnimationObjectGroup:Zx,AnimationUtils:bx,ArcCurve:yg,ArrayCamera:jg,ArrowHelper:My,AttachedBindMode:Cu,Audio:Zg,AudioAnalyser:zx,AudioContext:Xf,AudioListener:Ox,AudioLoader:Ux,AxesHelper:Ty,BackSide:pn,BasicDepthPacking:Jm,BasicShadowMap:Z0,BatchedMesh:gg,Bone:Vc,BooleanKeyframeTrack:rs,Box2:ly,Box3:It,Box3Helper:by,BoxGeometry:is,BoxHelper:yy,BufferAttribute:_t,BufferGeometry:nt,BufferGeometryLoader:Yg,ByteType:of,Cache:gi,Camera:Bc,CameraHelper:xy,CanvasTexture:W_,CapsuleGeometry:Xc,CatmullRomCurve3:bg,CineonToneMapping:nf,CircleGeometry:Yc,ClampToEdgeWrapping:hn,Clock:Kg,Color:Ie,ColorKeyframeTrack:Of,ColorManagement:lt,CompressedArrayTexture:G_,CompressedCubeTexture:H_,CompressedTexture:Wc,CompressedTextureLoader:Ax,ConeGeometry:vo,ConstantAlphaFactor:Gm,ConstantColorFactor:zm,Controls:t0,CubeCamera:fg,CubeDepthTexture:_g,CubeReflectionMapping:xi,CubeRefractionMapping:sr,CubeTexture:fo,CubeTextureLoader:Ex,CubeUVReflectionMapping:$s,CubicBezierCurve:Rf,CubicBezierCurve3:Sg,CubicInterpolant:Bg,CullFaceBack:Tu,CullFaceFront:wm,CullFaceFrontBack:K0,CullFaceNone:Tm,Curve:li,CurvePath:Tg,CustomBlending:Am,CustomToneMapping:sf,CylinderGeometry:go,Cylindrical:oy,Data3DTexture:Nc,DataArrayTexture:Uc,DataTexture:si,DataTextureLoader:Cx,DataUtils:d_,DecrementStencilOp:hv,DecrementWrapStencilOp:fv,DefaultLoadingManager:as,DepthFormat:bi,DepthStencilFormat:tr,DepthTexture:Ks,DetachedBindMode:Ym,DirectionalLight:Gf,DirectionalLightHelper:_y,DiscreteInterpolant:kg,DodecahedronGeometry:qc,DoubleSide:Pn,DstAlphaFactor:Nm,DstColorFactor:Om,DynamicCopyUsage:Ev,DynamicDrawUsage:bv,DynamicReadUsage:Tv,EdgesGeometry:xg,EllipseCurve:jc,EqualCompare:ng,EqualDepth:Ll,EqualStencilFunc:gv,EquirectangularReflectionMapping:qa,EquirectangularRefractionMapping:ja,Euler:Un,EventDispatcher:Si,ExternalTexture:Ef,ExtrudeGeometry:Kc,FileLoader:ai,Float16BufferAttribute:y_,Float32BufferAttribute:Ge,FloatType:un,Fog:zc,FogExp2:kc,FramebufferTexture:V_,FrontSide:_i,Frustum:ea,FrustumArray:Gc,GLBufferAttribute:iy,GLSL1:Rv,GLSL3:Pu,GreaterCompare:ig,GreaterDepth:Nl,GreaterEqualCompare:Lc,GreaterEqualDepth:Ul,GreaterEqualStencilFunc:yv,GreaterStencilFunc:_v,GridHelper:gy,Group:Li,HalfFloatType:yi,HemisphereLight:Gg,HemisphereLightHelper:my,IcosahedronGeometry:Zc,ImageBitmapLoader:qg,ImageLoader:io,ImageUtils:cg,IncrementStencilOp:cv,IncrementWrapStencilOp:uv,InstancedBufferAttribute:cr,InstancedBufferGeometry:Wf,InstancedInterleavedBuffer:ny,InstancedMesh:Tf,Int16BufferAttribute:__,Int32BufferAttribute:x_,Int8BufferAttribute:m_,IntType:wc,InterleavedBuffer:po,InterleavedBufferAttribute:lr,Interpolant:ta,InterpolateDiscrete:Hs,InterpolateLinear:Ws,InterpolateSmooth:Sl,InterpolationSamplingMode:Dv,InterpolationSamplingType:Iv,InvertStencilOp:dv,KeepStencilOp:Lr,KeyframeTrack:qn,LOD:mg,LatheGeometry:Jc,Layers:Fc,LessCompare:tg,LessDepth:Dl,LessEqualCompare:Dc,LessEqualDepth:Yr,LessEqualStencilFunc:vv,LessStencilFunc:mv,Light:fr,LightProbe:Xg,Line:Fi,Line3:$g,LineBasicMaterial:sn,LineCurve:Pf,LineCurve3:Mg,LineDashedMaterial:Fg,LineLoop:wf,LineSegments:oi,LinearFilter:yt,LinearInterpolant:Ff,LinearMipMapLinearFilter:ev,LinearMipMapNearestFilter:$0,LinearMipmapLinearFilter:zn,LinearMipmapNearestFilter:Os,LinearSRGBColorSpace:rn,LinearToneMapping:ef,LinearTransfer:Za,Loader:gn,LoaderUtils:rr,LoadingManager:Bf,LoopOnce:qm,LoopPingPong:Km,LoopRepeat:jm,MOUSE:zr,Material:Ht,MaterialLoader:ah,MathUtils:gf,Matrix2:Kf,Matrix3:it,Matrix4:Ye,MaxEquation:Pm,Mesh:At,MeshBasicMaterial:dn,MeshDepthMaterial:rh,MeshDistanceMaterial:sh,MeshLambertMaterial:Ug,MeshMatcapMaterial:Ng,MeshNormalMaterial:Lg,MeshPhongMaterial:Ig,MeshPhysicalMaterial:Yn,MeshStandardMaterial:yo,MeshToonMaterial:Dg,MinEquation:Rm,MirroredRepeatWrapping:zs,MixOperation:Wm,MultiplyBlending:Eu,MultiplyOperation:ho,NearestFilter:Pt,NearestMipMapLinearFilter:Q0,NearestMipMapNearestFilter:J0,NearestMipmapLinearFilter:Fr,NearestMipmapNearestFilter:Tc,NeutralToneMapping:af,NeverCompare:eg,NeverDepth:Pl,NeverStencilFunc:pv,NoBlending:vi,NoColorSpace:Ii,NoNormalPacking:rv,NoToneMapping:ri,NormalAnimationBlendMode:Ic,NormalBlending:Vr,NormalGAPacking:av,NormalRGPacking:sv,NotEqualCompare:rg,NotEqualDepth:Fl,NotEqualStencilFunc:xv,NumberKeyframeTrack:Kr,Object3D:ht,ObjectLoader:Dx,ObjectSpaceNormalMap:$m,OctahedronGeometry:_o,OneFactor:Dm,OneMinusConstantAlphaFactor:Hm,OneMinusConstantColorFactor:Vm,OneMinusDstAlphaFactor:Fm,OneMinusDstColorFactor:Bm,OneMinusSrcAlphaFactor:Rl,OneMinusSrcColorFactor:Um,OrthographicCamera:os,PCFShadowMap:La,PCFSoftShadowMap:Ua,PMREMGenerator:Bu,Path:xc,PerspectiveCamera:Gt,Plane:mi,PlaneGeometry:Bi,PlaneHelper:Sy,PointLight:Vf,PointLightHelper:dy,Points:Af,PointsMaterial:Hc,PolarGridHelper:vy,PolyhedronGeometry:ur,PositionalAudio:kx,PropertyBinding:dt,PropertyMixer:Jg,QuadraticBezierCurve:If,QuadraticBezierCurve3:Df,Quaternion:Kt,QuaternionKeyframeTrack:Zr,QuaternionLinearInterpolant:zg,R11_EAC_Format:Wl,RED_GREEN_RGTC2_Format:dc,RED_RGTC1_Format:uc,REVISION:Sc,RG11_EAC_Format:Yl,RGBADepthPacking:Qm,RGBAFormat:fn,RGBAIntegerFormat:Pc,RGBA_ASTC_10x10_Format:sc,RGBA_ASTC_10x5_Format:nc,RGBA_ASTC_10x6_Format:ic,RGBA_ASTC_10x8_Format:rc,RGBA_ASTC_12x10_Format:ac,RGBA_ASTC_12x12_Format:oc,RGBA_ASTC_4x4_Format:jl,RGBA_ASTC_5x4_Format:Kl,RGBA_ASTC_5x5_Format:Zl,RGBA_ASTC_6x5_Format:Jl,RGBA_ASTC_6x6_Format:Ql,RGBA_ASTC_8x5_Format:$l,RGBA_ASTC_8x6_Format:ec,RGBA_ASTC_8x8_Format:tc,RGBA_BPTC_Format:lc,RGBA_ETC2_EAC_Format:Hl,RGBA_PVRTC_2BPPV1_Format:zl,RGBA_PVRTC_4BPPV1_Format:kl,RGBA_S3TC_DXT1_Format:Fa,RGBA_S3TC_DXT3_Format:Oa,RGBA_S3TC_DXT5_Format:Ba,RGBDepthPacking:nv,RGBFormat:ff,RGBIntegerFormat:tv,RGB_BPTC_SIGNED_Format:cc,RGB_BPTC_UNSIGNED_Format:hc,RGB_ETC1_Format:Vl,RGB_ETC2_Format:Gl,RGB_PVRTC_2BPPV1_Format:Bl,RGB_PVRTC_4BPPV1_Format:Ol,RGB_S3TC_DXT1_Format:Na,RGDepthPacking:iv,RGFormat:qr,RGIntegerFormat:Rc,RawShaderMaterial:Uf,Ray:Oi,Raycaster:ry,RectAreaLight:Wg,RedFormat:Cc,RedIntegerFormat:uo,ReinhardToneMapping:tf,RenderTarget:vf,RenderTarget3D:$x,RepeatWrapping:ar,ReplaceStencilOp:lv,ReverseSubtractEquation:Cm,RingGeometry:Qc,SIGNED_R11_EAC_Format:Xl,SIGNED_RED_GREEN_RGTC2_Format:pc,SIGNED_RED_RGTC1_Format:fc,SIGNED_RG11_EAC_Format:ql,SRGBColorSpace:Vt,SRGBTransfer:xt,Scene:bf,ShaderChunk:$e,ShaderLib:Bn,ShaderMaterial:Wn,ShadowMaterial:Pg,Shape:Hr,ShapeGeometry:$c,ShapePath:wy,ShapeUtils:ii,ShortType:lf,Skeleton:mo,SkeletonHelper:fy,SkinnedMesh:Mf,Source:nr,Sphere:Lt,SphereGeometry:xo,Spherical:Fu,SphericalHarmonics3:Hf,SplineCurve:Lf,SpotLight:zf,SpotLightHelper:uy,Sprite:pg,SpriteMaterial:Sf,SrcAlphaFactor:Cl,SrcAlphaSaturateFactor:km,SrcColorFactor:Lm,StaticCopyUsage:Av,StaticDrawUsage:Ja,StaticReadUsage:Mv,StereoCamera:Nx,StreamCopyUsage:Cv,StreamDrawUsage:Sv,StreamReadUsage:wv,StringKeyframeTrack:ss,SubtractEquation:Em,SubtractiveBlending:Au,TOUCH:Nr,TangentSpaceNormalMap:hr,TetrahedronGeometry:eh,Texture:Et,TextureLoader:Vg,TextureUtils:Py,Timer:sy,TimestampQuery:Pv,TorusGeometry:th,TorusKnotGeometry:nh,Triangle:Tn,TriangleFanDrawMode:mc,TriangleStripDrawMode:pf,TrianglesDrawMode:Zm,TubeGeometry:ih,UVMapping:Mc,Uint16BufferAttribute:_f,Uint32BufferAttribute:xf,Uint8BufferAttribute:g_,Uint8ClampedBufferAttribute:v_,Uniform:jf,UniformsGroup:ty,UniformsLib:Ue,UniformsUtils:Oc,UnsignedByteType:Mn,UnsignedInt101111Type:hf,UnsignedInt248Type:Gs,UnsignedInt5999Type:cf,UnsignedIntType:Hn,UnsignedShort4444Type:Ac,UnsignedShort5551Type:Ec,UnsignedShortType:Vs,VSMShadowMap:Us,Vector2:de,Vector3:D,Vector4:pt,VectorKeyframeTrack:Jr,VideoFrameTexture:z_,VideoTexture:vg,WebGL3DRenderTarget:i_,WebGLArrayRenderTarget:n_,WebGLCoordinateSystem:In,WebGLCubeRenderTarget:yf,WebGLRenderTarget:Ln,WebGLRenderer:l0,WebGLUtils:o0,WebGPUCoordinateSystem:Xs,WebXRController:Ml,WireframeGeometry:Rg,WrapAroundEnding:Ka,ZeroCurvatureEnding:Or,ZeroFactor:Im,ZeroSlopeEnding:Br,ZeroStencilOp:ov,createCanvasElement:lg,error:qe,getConsoleFunction:Nv,log:$a,setConsoleFunction:Uv,warn:Fe,warnOnce:Ys},Symbol.toStringTag,{value:"Module"})),Zp=Symbol(),wT=s=>typeof s?.subscribe=="function",c0=(s,e,t)=>{const i=s().map(a=>wT(a)?El(a):Zp),n=Gn(()=>s().map((a,o)=>i[o]===Zp?a:i[o].current)),r=()=>{He(n);let a;return Sm(()=>{a=e(He(n))}),a};t?ft(r):Xa(r)},AT=(s,e)=>c0(s,e,!1),ET=(s,e)=>c0(s,e,!0),CT=Object.assign(AT,{pre:ET}),ni=(s,e)=>s?.[`is${e}`]===!0,fu=s=>{const e=Xr(void 0),t=Xr(void 0);return s.then(i=>{e.set(i)}).catch(i=>{console.error("Error in asyncWritable:",i.message),t.set(i)}),Object.assign(Object.assign(s,e),{error:t,promise:s})},RT=typeof window<"u",Pi=(s,e)=>{const t=bc(s,r=>r);let i;const n=t.subscribe(async r=>{i&&i();const a=await e(r);a&&(i=a)});Qs(()=>{n(),i&&i()})},jt=s=>{const e=Xr(s),t={set:i=>{t.current=i,e.set(i)},subscribe:e.subscribe,update:i=>{const n=i(t.current);t.current=n,e.set(n)},current:s};return t},PT=s=>({subscribe:s.subscribe,get current(){return s.current}}),h0=(s,e)=>{if(e.includes(".")){const t=e.split("."),i=t.pop();for(let n=0;n<t.length;n+=1)s=s[t[n]];return{target:s,key:i}}else return{target:s,key:e}},IT=s=>{const{dom:e,canvas:t}=s,i=jt({width:e.offsetWidth,height:e.offsetHeight});H0(()=>{const r=new ResizeObserver(()=>{const{offsetWidth:a,offsetHeight:o}=e;(i.current.width!==a||i.current.height!==o)&&i.set({width:a,height:o})});return r.observe(e),()=>{r.disconnect()}});const n={dom:e,canvas:t,size:PT(i)};return Xn("threlte-dom-context",n),n},Zf=()=>{const s=mn("threlte-dom-context");if(!s)throw new Error("useDOM can only be used in a child component to <Canvas>.");return s};function DT(s){return{all:s=s||new Map,on:function(e,t){var i=s.get(e);i?i.push(t):s.set(e,[t])},off:function(e,t){var i=s.get(e);i&&(t?i.splice(i.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var i=s.get(e);i&&i.slice().map(function(n){n(t)}),(i=s.get("*"))&&i.slice().map(function(n){n(e,t)})}}}class $i{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=DT();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,i){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let n=this.allVertices[e];n?n.value===void 0&&(n.value=t):(n={value:t,previous:new Set,next:new Set},this.allVertices[e]=n);const r=n.next.size>0||n.previous.size>0;if(!i?.after&&!i?.before&&!r){this.isolatedVertices[e]=n,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=n;if(i?.after){const a=Array.isArray(i.after)?i.after:[i.after];a.forEach(o=>{n.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(i?.before){const a=Array.isArray(i.before)?i.before:[i.before];a.forEach(o=>{n.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const n=this.connectedVertices[t];n&&(n.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),n.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((i,n)=>{t.push(e(i,n))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(i=>{const n=this.isolatedVertices[i];n.value!==void 0&&e(n.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],i=[],n=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(n.forEach(a=>{e.set(a,0)}),n.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,o)=>{a===0&&t.push(o)});t.length>0;){const a=t.shift();i.push(a);const o=n.find(l=>l===a);o&&this.connectedVertices[o]?.next.forEach(l=>{const c=(e.get(l)||0)-1;e.set(l,c),c===0&&t.push(l)})}if(i.length!==n.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=a=>a!==void 0;this.sortedConnectedValues=i.map(a=>this.connectedVertices[a].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class LT{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,i){this.stage=e,this.key=t,this.callback=i}run(e){this.runTask&&this.callback(e)}}class UT extends $i{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,i){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),i&&(this.callback=i.bind(this))}createTask(e,t,i){const n=new LT(this,e,t);return this.add(e,n,i),n}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(i=>{i.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,i=>{this.forEachNode(n=>{const r=performance.now();n.run(i??e);const a=performance.now()-r;t[n.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class NT extends $i{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const i=new UT(this,e,t?.callback);return this.add(e,i,{after:t?.after,before:t?.before}),i}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(i=>{i.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,i={},n=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-a;i[r.key.toString()]={duration:l,tasks:o}}),{total:performance.now()-n,stages:i}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const FT=s=>{const e=new NT,t=e.createStage(Symbol("threlte-main-stage")),i={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{i.shouldAdvance=!0},autoRender:jt(s.autoRender??!0),renderMode:jt(s.renderMode??"on-demand"),invalidate(){i.frameInvalidated=!0},mainStage:t,shouldRender:()=>i.renderMode.current==="always"||i.renderMode.current==="on-demand"&&(i.frameInvalidated||i.autoInvalidations.size>0)||i.renderMode.current==="manual"&&i.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(n,r){i.shouldRender()&&r()}}),resetFrameInvalidation(){i.frameInvalidated=!1,i.shouldAdvance=!1}};return Xa(()=>{i.autoRender.set(s.autoRender??!0)}),Xa(()=>{i.renderMode.set(s.renderMode??"on-demand")}),Qs(()=>{i.scheduler.dispose()}),Xn("threlte-scheduler-context",i),i},ch=()=>{const s=mn("threlte-scheduler-context");if(!s)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return s},OT=()=>{const{size:s}=Zf(),{invalidate:e}=ch(),t=new Gt(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const i=jt(t);Pi(s,r=>{if(i.current===t){const a=i.current;a.aspect=r.width/r.height,a.updateProjectionMatrix(),e()}}),Pi(i,r=>{r===void 0&&i.set(t)});const n={camera:i};return Xn("threlte-camera-context",n),n},u0=()=>{const s=mn("threlte-camera-context");if(!s)throw new Error("useCamera can only be used in a child component to <Canvas>.");return s},BT=()=>{const s={removeObjectFromDisposal:e=>{s.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=s.disposableObjects.get(e);t?s.disposableObjects.set(e,t+1):s.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=s.disposableObjects.get(e);t&&t>0&&(s.disposableObjects.set(e,t-1),t-1<=0&&(s.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await Mm(),!(!s.shouldDispose&&!e)&&(s.disposableObjects.forEach((t,i)=>{(t===0||e)&&(i?.dispose?.(),s.disposableObjects.delete(i))}),s.shouldDispose=!1)}};return Qs(()=>{s.dispose(!0)}),Xn("threlte-disposal-context",s),s},f0=()=>{const s=mn("threlte-disposal-context");if(!s)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return s},d0=Symbol("threlte-parent-context"),p0=s=>{const e=jt(s);return Xn(d0,e),e},m0=()=>mn(d0),yc=Symbol("threlte-parent-object3d-context"),kT=s=>{const e=Qu(s);return Xn(yc,e),e},zT=s=>{const e=mn(yc),t=Xr(s),i=bc([t,e],([n,r])=>n??r);return Xn(yc,i),t},VT=()=>mn(yc);function Jf(s,e,t){if(!RT)return{task:void 0,start:()=>{},stop:()=>{},started:Qu(!1)};let i,n,r;$i.isKey(s)?(i=s,n=e,r=t):(i=Symbol("useTask"),n=s,r=e);const a=ch();let o=a.mainStage;if(r){if(r.stage)if($i.isValue(r.stage))o=r.stage;else{const f=a.scheduler.getStage(r.stage);if(!f)throw new Error(`No stage found with key ${r.stage.toString()}`);o=f}else if(r.after)if(Array.isArray(r.after))for(let f=0;f<r.after.length;f++){const d=r.after[f];if($i.isValue(d)){o=d.stage;break}}else $i.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let f=0;f<r.before.length;f++){const d=r.before[f];if($i.isValue(d)){o=d.stage;break}}else $i.isValue(r.before)&&(o=r.before.stage)}const l=Xr(!1),c=o.createTask(i,n,r),h=()=>{l.set(!0),(r?.autoInvalidate??!0)&&a.autoInvalidations.add(n),c.start()},u=()=>{l.set(!1),(r?.autoInvalidate??!0)&&a.autoInvalidations.delete(n),c.stop()};return r?.autoStart??!0?h():u(),Qs(()=>{u(),o.removeTask(i)}),{task:c,start:h,stop:u,started:{subscribe:l.subscribe}}}const GT=s=>{const e={scene:new bf};return Xn("threlte-scene-context",e),e},g0=()=>{const s=mn("threlte-scene-context");if(!s)throw new Error("useScene can only be used in a child component to <Canvas>.");return s},HT=s=>{const{dispose:e}=f0(),{camera:t}=u0(),{scene:i}=g0(),{invalidate:n,renderStage:r,autoRender:a,scheduler:o,resetFrameInvalidation:l}=ch(),{size:c,canvas:h}=Zf(),u=s.createRenderer?s.createRenderer(h):new l0({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),f=r.createTask(Symbol("threlte-auto-render-task"),()=>{u.render(i,t.current)}),d={renderer:u,colorManagementEnabled:jt(s.colorManagementEnabled??!0),colorSpace:jt(s.colorSpace??"srgb"),dpr:jt(s.dpr??window.devicePixelRatio),shadows:jt(s.shadows??Ua),toneMapping:jt(s.toneMapping??Ya),autoRenderTask:f};Xn("threlte-renderer-context",d),Pi([d.colorManagementEnabled],([m])=>{lt.enabled=m}),Pi([d.colorSpace],([m])=>{"outputColorSpace"in u&&(u.outputColorSpace=m)}),Pi([d.dpr],([m])=>{"setPixelRatio"in u&&u.setPixelRatio(m)});const{start:p,stop:v}=Jf(()=>{!("xr"in u)||u.xr?.isPresenting||(u.setSize(c.current.width,c.current.height),n(),v())},{before:f,autoStart:!1,autoInvalidate:!1});return Pi([c],()=>{p()}),Pi([d.shadows],([m])=>{"shadowMap"in u&&(u.shadowMap.enabled=!!m,m&&m!==!0?u.shadowMap.type=m:m===!0&&(u.shadowMap.type=Ua))}),Pi([d.toneMapping],([m])=>{"toneMapping"in u&&(u.toneMapping=m)}),Pi([a],([m])=>(m?d.autoRenderTask.start():d.autoRenderTask.stop(),()=>{d.autoRenderTask.stop()})),"setAnimationLoop"in d.renderer&&d.renderer.setAnimationLoop(g=>{e(),o.run(g),l()}),Qs(()=>{if("dispose"in d.renderer){const m=d.renderer.dispose;m()}}),ft(()=>{d.colorManagementEnabled.set(s.colorManagementEnabled??!0)}),ft(()=>{d.colorSpace.set(s.colorSpace??"srgb")}),ft(()=>{d.toneMapping.set(s.toneMapping??Ya)}),ft(()=>{d.shadows.set(s.shadows??Ua)}),ft(()=>{d.dpr.set(s.dpr??window.devicePixelRatio)}),d},WT=()=>{const s=mn("threlte-renderer-context");if(!s)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return s},XT=()=>{const s=jt({});return Xn("threlte-user-context",s),s},YT=()=>{const s=mn("threlte-user-context");if(!s)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return s},qT=s=>{const{scene:e}=GT();return{scene:e,...IT(s),...q0(),...p0(e),...kT(e),...BT(),...FT(s),...OT(),...HT(s),...XT()}};function jT(s,e){$r(e,!0);let t=ns(e,["$$slots","$$events","$$legacy","children"]);qT(t);var i=Ni(),n=Vn(i);ts(n,()=>e.children),wn(s,i),es()}var KT=oo('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function ZT(s,e){let t=ns(e,["$$slots","$$events","$$legacy","children"]),i=_d(void 0),n=_d(void 0);var r=KT(),a=Su(r),o=Su(a);{var l=c=>{jT(c,co({get dom(){return He(n)},get canvas(){return He(i)}},()=>t,{children:(h,u)=>{var f=Ni(),d=Vn(f);ts(d,()=>e.children??lo),wn(h,f)},$$slots:{default:!0}}))};$u(o,c=>{He(i)&&He(n)&&c(l)})}Mu(a),xd(a,c=>vd(i,c),()=>He(i)),Mu(r),xd(r,c=>vd(n,c),()=>He(n)),wn(s,r)}const ia=()=>{const s=ch(),e=WT(),t=u0(),i=g0(),n=Zf();return{advance:s.advance,autoRender:s.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:s.invalidate,mainStage:s.mainStage,renderer:e.renderer,renderMode:s.renderMode,renderStage:s.renderStage,scheduler:s.scheduler,shadows:e.shadows,shouldRender:s.shouldRender,dom:n.dom,canvas:n.canvas,size:n.size,toneMapping:e.toneMapping,get scene(){return i.scene},set scene(a){i.scene=a}}},JT=s=>typeof s=="object"&&s!==null,QT=(s,e)=>{const{invalidate:t}=ia(),i=Gn(s),n=Gn(e),r=El(m0()),a=El(VT()),o=p0(),l=zT();ft(()=>{o.set(He(i)),ni(He(i),"Object3D")&&l.set(He(i)),t()}),ft(()=>{t();const c=He(i);if(He(n)===void 0&&ni(c,"Object3D"))return a.current?.add(c),()=>{t(),a.current?.remove(c)};if(He(n)===void 0&&JT(r.current)){const h=r.current;if(ni(c,"Material")){const u=h.material;return h.material=c,()=>{t(),h.material=u}}else if(ni(c,"BufferGeometry")){const u=h.geometry;return h.geometry=c,()=>{t(),h.geometry=u}}}if(He(n)===!1)return()=>{t()};if(typeof He(n)=="function"){const h=He(n)({ref:c,parent:r.current,parentObject3D:a.current});return()=>{t(),h?.()}}if(typeof He(n)=="string"){const{target:h,key:u}=h0(r.current,He(n));if(u in h){const f=h[u];return h[u]=c,()=>{t(),h[u]=f}}else return h[u]=c,()=>{t(),delete h[u]}}if(ni(He(n),"Object3D")&&ni(c,"Object3D"))return He(n).add(c),()=>{t(),He(n).remove(c)}})},du=new Set,$T=(s,e,t)=>{const{invalidate:i,size:n,camera:r}=ia(),a=Gn(s),o=El(n);ft(()=>{if(!t())return;const l=He(a);return du.add(l),r.set(l),i(),()=>{du.delete(l),du.size===0&&(r.set(void 0),i())}}),ft(()=>{if(e())return;const{width:l,height:c}=o.current;ni(He(a),"PerspectiveCamera")?He(a).aspect=l/c:ni(He(a),"OrthographicCamera")&&(He(a).left=l/-2,He(a).right=l/2,He(a).top=c/2,He(a).bottom=c/-2),He(a).updateProjectionMatrix(),He(a).updateMatrixWorld(),i()})},Vu=Symbol("threlte-disposable-object-context"),ew=s=>typeof s?.dispose=="function",tw=s=>{const e=mn(Vu),t=Gn(()=>s()??e?.()??!0);Xn(Vu,()=>He(t))},nw=s=>{const e=Gn(s),{disposableObjectMounted:t,disposableObjectUnmounted:i,removeObjectFromDisposal:n}=f0(),r=mn(Vu),a=Gn(()=>r?.()??!0);Xa(()=>{if(He(a))return t(He(e)),()=>i(He(e));n(He(e))})},iw=s=>s!==null&&typeof s=="object"&&"addEventListener"in s&&"removeEventListener"in s,rw=(s,e,t)=>{const i=Gn(s);for(const n of e){const r=Gn(()=>t[n]);n.startsWith("on")&&ft(()=>{if(typeof He(r)!="function"||!iw(He(i)))return;const a=n.slice(2);return He(i).addEventListener(a,He(r)),()=>He(i).removeEventListener(a,He(r))})}};let Gu;const sw=s=>{Gu=s},aw=()=>{const s=Gu;return Gu=void 0,s},ow="threlte-plugin-context",lw=s=>{const e=mn(ow);if(!e)return;const t=[],i=Object.values(e);if(i.length>0){const n=s();for(let r=0;r<i.length;r++){const a=i[r],o=a(n);o&&o.pluginProps&&t.push(...o.pluginProps)}}return{pluginsProps:t}},cw=new Set(["$$scope","$$slots","type","args","attach","instance"]),hw=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),uw=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,Jp=(s,e,t)=>!Array.isArray(t)&&typeof t=="number"&&typeof s[e]=="object"&&s[e]!==null&&typeof s[e]?.setScalar=="function"&&!s[e]?.isColor?(i,n,r)=>{i[n].setScalar(r)}:typeof s[e]?.set=="function"&&typeof s[e]=="object"&&s[e]!==null?Array.isArray(t)?(i,n,r)=>{i[n].set(...r)}:(i,n,r)=>{i[n].set(r)}:(i,n,r)=>{i[n]=r},fw=()=>{const{invalidate:s}=ia(),e=new Map,t=new Map,i=(r,a,o,l)=>{if(uw(o)){const u=e.get(a);if(u&&u.instance===r&&u.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=h0(r,a);if(o!=null){const u=t.get(a);if(u)u(h,c,o);else{const f=Jp(h,c,o);t.set(a,f),f(h,c,o)}}else Jp(h,c,o)(h,c,o);l||hw.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProp:(r,a,o,l,c)=>{!cw.has(a)&&!l?.includes(a)&&i(r,a,o,c),s()}}},dw=s=>typeof s=="function"&&Function.prototype.toString.call(s).startsWith("class "),pw=(s,e)=>dw(s)?Array.isArray(e)?new s(...e):new s:s;function pu(s,e){$r(e,!0);let t=ot(e,"is",19,aw),i=ot(e,"manual",3,!1),n=ot(e,"makeDefault",3,!1),r=ot(e,"ref",15),a=ns(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const o=Gn(()=>pw(t(),e.args));ft(()=>{r()!==He(o)&&r(He(o))});const l=lw(()=>({get ref(){return He(o)},get args(){return e.args},get attach(){return e.attach},get manual(){return i()},get makeDefault(){return n()},get dispose(){return e.dispose},get props(){return a}})),c=Object.keys(a),{updateProp:h}=fw();c.forEach(d=>{const p=Gn(()=>a[d]);ft(()=>{h(He(o),d,He(p),l?.pluginsProps,i())})}),QT(()=>He(o),()=>e.attach),ft(()=>{(ni(He(o),"PerspectiveCamera")||ni(He(o),"OrthographicCamera"))&&$T(()=>He(o),()=>i(),()=>n())}),tw(()=>e.dispose),ft(()=>{ew(He(o))&&nw(()=>He(o))}),rw(()=>He(o),c,a),Xa(()=>{He(o);let d;return Sm(()=>{d=e.oncreate?.(He(o))}),d});var u=Ni(),f=Vn(u);ts(f,()=>e.children??lo,()=>({ref:He(o)})),wn(s,u),es()}const mw={},kn=new Proxy(pu,{get(s,e){if(typeof e!="string")return pu;const t=mw[e]||TT[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return sw(t),pu}});function gw(s,e,t){const i=YT();if(!i)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(i.update(n=>{if(s in n)return n;const r=typeof e=="function"?e():e;return n[s]=r,n}),i.current[s]):bc(i,n=>n[s])}function vw(s,e){const{remember:t,clear:i}=j0();let n;const r=()=>{const l=new s(...e?.args??[]);return e?.extend?.(l),l};return{load:(l,c)=>{const h=async u=>{if(n||(n=r()),"loadAsync"in n){const f=await n.loadAsync(u,c?.onProgress);return c?.transform?.(f)??f}else return new Promise((f,d)=>{n.load(u,p=>f(c?.transform?.(p)??p),p=>c?.onProgress?.(p),d)})};if(Array.isArray(l)){const u=l.map(d=>t(()=>h(d),[s,d]));return fu(Promise.all(u))}else if(typeof l=="string"){const u=t(()=>h(l),[s,l]);return fu(u)}else{const u=Object.values(l).map(d=>t(()=>h(d),[s,d]));return fu(Promise.all(u).then(d=>Object.fromEntries(Object.entries(l).map(([p],v)=>[p,d[v]]))))}},clear:l=>{Array.isArray(l)?l.forEach(c=>{i([s,c])}):typeof l=="string"?i([s,l]):Object.entries(l).forEach(([c,h])=>{i([s,c,h])})},loader:n}}function Qp(s,e){if(e===Zm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===mc||e===pf){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,n=[];if(e===mc)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class _w extends gn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mw(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new Lw(t)}),this.register(function(t){return new Uw(t)}),this.register(function(t){return new Nw(t)}),this.register(function(t){return new Aw(t)}),this.register(function(t){return new Ew(t)}),this.register(function(t){return new Cw(t)}),this.register(function(t){return new Rw(t)}),this.register(function(t){return new Sw(t)}),this.register(function(t){return new Pw(t)}),this.register(function(t){return new ww(t)}),this.register(function(t){return new Dw(t)}),this.register(function(t){return new Iw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new Fw(t)}),this.register(function(t){return new Ow(t)})}load(e,t,i,n){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=rr.extractUrlBase(e);a=rr.resolveURL(c,this.path)}else a=rr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ai(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===v0){try{a[ct.KHR_BINARY_GLTF]=new Bw(e)}catch(u){n&&n(u);return}r=JSON.parse(a[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Jw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ct.KHR_MATERIALS_UNLIT:a[u]=new bw;break;case ct.KHR_DRACO_MESH_COMPRESSION:a[u]=new kw(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:a[u]=new zw;break;case ct.KHR_MESH_QUANTIZATION:a[u]=new Vw;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function xw(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yw{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],rn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vf(h),c.distance=u;break;case"spot":c=new zf(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class bw{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,i){const n=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(n)}}class Sw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Mw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(o,o)}return Promise.all(r)}}class Tw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ww{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Aw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],rn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Vt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Ew{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Cw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(o[0],o[1],o[2],rn),Promise.all(r)}}class Rw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Pw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(o[0],o[1],o[2],rn),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Vt)),Promise.all(r)}}class Iw{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Dw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Lw{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Uw{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class Nw{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class Fw{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,n.mode,n.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,n.mode,n.filter),d})})}else return null}}class Ow{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const p of u){const v=new Ye,m=new D,g=new Kt,y=new D(1,1,1),_=new Tf(p.geometry,p.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,v.compose(m,g,y));for(const x in l)if(x==="_COLOR_0"){const S=l[x];_.instanceColor=new cr(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const v0="glTF",Ea=12,$p={JSON:1313821514,BIN:5130562};class Bw{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ea),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==v0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ea,r=new DataView(e,Ea);let a=0;for(;a<n;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===$p.JSON){const c=new Uint8Array(e,Ea+a,o);this.content=i.decode(c)}else if(l===$p.BIN){const c=Ea+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Hu[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Hu[h]||h.toLowerCase();if(a[h]!==void 0){const f=i.accessors[e.attributes[h]],d=ks[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){n.decodeDracoFile(h,function(d){for(const p in d.attributes){const v=d.attributes[p],m=l[p];m!==void 0&&(v.normalized=m)}u(d)},o,c,rn,f)})})}}class zw{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vw{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class _0 extends ta{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,f=u*u,d=f*u,p=e*c,v=p-c,m=-2*d+3*f,g=d-f,y=1-m,_=g-f+u;for(let x=0;x!==o;x++){const S=a[v+x+o],w=a[v+x+l]*h,A=a[p+x+o],E=a[p+x]*h;r[x]=y*S+_*w+m*A+g*E}return r}}const Gw=new Kt;class Hw extends _0{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return Gw.fromArray(r).normalize().toArray(r),r}}const On={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},em={9728:Pt,9729:yt,9984:Tc,9985:Os,9986:Fr,9987:zn},tm={33071:hn,33648:zs,10497:ar},mu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ww={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Hs},gu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new yo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),s.DefaultMaterial}function Pr(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function pi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Yw(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(n){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function qw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jw(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vu(t.attributes):e=s.indices+":"+vu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+vu(s.targets[i]);return e}function vu(s){let e="";const t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Wu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Zw=new Ye;class Jw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?this.textureLoader=new Vg(this.options.manager):this.textureLoader=new qg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ai(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Pr(r,o,n),pi(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,a){i.load(rr.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=mu[n.type],o=ks[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new _t(c,a,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=mu[n.type],c=ks[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,p=n.normalized===!0;let v,m;if(d&&d!==u){const g=Math.floor(f/d),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let _=t.cache.get(y);_||(v=new c(o,g*d,n.count*d/h),_=new po(v,d/h),t.cache.add(y,_)),m=new lr(_,l,f%d/h,p)}else o===null?v=new c(n.count*l):v=new c(o,f,n.count*l),m=new _t(v,l,p);if(n.sparse!==void 0){const g=mu.SCALAR,y=ks[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,x=n.sparse.values.byteOffset||0,S=new y(a[1],_,n.sparse.count*g),w=new c(a[2],x,n.sparse.count*l);o!==null&&(m=new _t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,E=S.length;A<E;A++){const b=S[A];if(m.setX(b,w[A*l]),l>=2&&m.setY(b,w[A*l+1]),l>=3&&m.setZ(b,w[A*l+2]),l>=4&&m.setW(b,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=em[f.magFilter]||yt,h.minFilter=em[f.minFilter]||zn,h.wrapS=tm[f.wrapS]||ar,h.wrapT=tm[f.wrapT]||ar,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Pt&&h.minFilter!==yt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(v){const m=new Et(v);m.needsUpdate=!0,f(m)}),t.load(rr.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),pi(u,a),u.userData.mimeType=a.mimeType||Kw(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Hc,Ht.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new sn,Ht.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return yo}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const u=n[ct.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],rn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Vt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Pn);const h=r.alphaMode||gu.OPAQUE;if(h===gu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===gu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==dn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==dn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==dn){const u=r.emissiveFactor;o.emissive=new Ie().setRGB(u[0],u[1],u[2],rn)}return r.emissiveTexture!==void 0&&a!==dn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Pr(n,u,r),u})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return nm(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=jw(c),u=n[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=nm(new nt,c,t),n[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Xw(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){const v=h[d],m=a[d];let g;const y=c[d];if(m.mode===On.TRIANGLES||m.mode===On.TRIANGLE_STRIP||m.mode===On.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new Mf(v,y):new At(v,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===On.TRIANGLE_STRIP?g.geometry=Qp(g.geometry,pf):m.mode===On.TRIANGLE_FAN&&(g.geometry=Qp(g.geometry,mc));else if(m.mode===On.LINES)g=new oi(v,y);else if(m.mode===On.LINE_STRIP)g=new Fi(v,y);else if(m.mode===On.LINE_LOOP)g=new wf(v,y);else if(m.mode===On.POINTS)g=new Af(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&qw(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),pi(g,r),m.extensions&&Pr(n,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Pr(n,u[0],r),u[0];const f=new Li;r.extensions&&Pr(n,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gt(gf.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new os(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new mo(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=n.channels.length;u<f;u++){const d=n.channels[u],p=n.samplers[d.sampler],v=d.target,m=v.node,g=n.parameters!==void 0?n.parameters[p.input]:p.input,y=n.parameters!==void 0?n.parameters[p.output]:p.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],p=u[2],v=u[3],m=u[4],g=[];for(let _=0,x=f.length;_<x;_++){const S=f[_],w=d[_],A=p[_],E=v[_],b=m[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=i._createAnimationTracks(S,w,A,E,b);if(M)for(let L=0;L<M.length;L++)g.push(M[L])}const y=new Js(r,void 0,g);return pi(y,n),y})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Zw)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Vc:c.length>1?h=new Li:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),pi(h,r),r.extensions&&Pr(i,h,r),r.matrix!==void 0){const u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){const u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new Li;i.name&&(r.name=n.createUniqueName(i.name)),pi(r,i),i.extensions&&Pr(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of n.associations)(f instanceof Ht||f instanceof Et)&&u.set(f,d);return h.traverse(f=>{const d=n.associations.get(f);d!=null&&u.set(f,d)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const a=[],o=e.name?e.name:e.uuid,l=[];Ji[r.path]===Ji.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Ji[r.path]){case Ji.weights:c=Kr;break;case Ji.rotation:c=Zr;break;case Ji.translation:case Ji.scale:c=Jr;break;default:i.itemSize===1?c=Kr:c=Jr;break}const h=n.interpolation!==void 0?Ww[n.interpolation]:Ws,u=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const p=new c(l[f]+"."+Ji[r.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Wu(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof Zr?Hw:_0;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Qw(s,e,t){const i=e.attributes,n=new It;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const h=Wu(ks[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const v=Wu(ks[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;const a=new Lt;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function nm(s,e,t){const i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in i){const o=Hu[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return lt.workingColorSpace!==rn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),pi(s,e),Qw(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Yw(s,e.targets,t):s})}const $w=s=>{const e={nodes:{},materials:{}};return s&&s.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e};function eA(s,e){const t=typeof s=="string"?e:s,i=vw(_w,{extend(a){t?.dracoLoader&&a.setDRACOLoader(t.dracoLoader),t?.meshoptDecoder&&a.setMeshoptDecoder(t.meshoptDecoder),t?.ktx2Loader&&a.setKTX2Loader(t.ktx2Loader)}}),n=a=>i.load(a,{transform(o){return{...o,...$w(o.scene)}}}),r=typeof s=="string"?s:void 0;return r?n(r):{load:n}}const Ir=s=>({subscribe:s.subscribe,get current(){return s.current}});let Ga=0;const Qf=jt(!1),hh=jt(!1),$f=jt(void 0),ed=jt(0),td=jt(0),x0=jt([]),nd=jt(0),{onStart:tA,onLoad:nA,onError:iA}=as;as.onStart=(s,e,t)=>{tA?.(s,e,t),hh.set(!0),$f.set(s),ed.set(e),td.set(t);const i=(e-Ga)/(t-Ga);nd.set(i),i===1&&Qf.set(!0)};as.onLoad=()=>{nA?.(),hh.set(!1)};as.onError=s=>{iA?.(s),x0.update(e=>[...e,s])};as.onProgress=(s,e,t)=>{e===t&&(Ga=t),hh.set(!0),$f.set(s),ed.set(e),td.set(t);const i=(e-Ga)/(t-Ga)||1;nd.set(i),i===1&&Qf.set(!0)};Ir(hh),Ir($f),Ir(ed),Ir(td),Ir(x0),Ir(nd),Ir(Qf);new D;new D;new D;new Lt;new Ye;new Oi;new D;const rA=Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER"),y0=()=>{const s=mn(rA),e=new Set,t=n=>(s&&(s.suspend(n),e.add(n)),n),i={suspended:bc(s?.suspended??Qu(!1),n=>n)};return Qs(()=>{if(s){for(const n of e)s.onComponentDestroy(n);e.clear()}}),Object.assign(t,i)};new D;new Ye;new D;new D;new ht;new D;new D;new D;new de;function im(s,e){$r(e,!0);let t=ot(e,"gltf",15),i=ot(e,"scene",15),n=ot(e,"animations",15),r=ot(e,"asset",15),a=ot(e,"cameras",15),o=ot(e,"scenes",15),l=ot(e,"userData",15),c=ot(e,"parser",15),h=ot(e,"materials",15),u=ot(e,"nodes",15),f=ns(e,["$$slots","$$events","$$legacy","url","dracoLoader","meshoptDecoder","ktx2Loader","gltf","scene","animations","asset","cameras","scenes","userData","parser","materials","nodes","onload","onunload","onerror","children"]);const d=eA({dracoLoader:e.dracoLoader,meshoptDecoder:e.meshoptDecoder,ktx2Loader:e.ktx2Loader}),p=S=>{t()&&e.onunload?.(),t(S),i(S.scene),n(S.animations),r(S.asset),a(S.cameras),o(S.scenes),l(S.userData),c(S.parser),h(S.materials),u(S.nodes),e.onload?.(t())},v=S=>{t(void 0),i(void 0),n(void 0),r(void 0),a(void 0),o(void 0),l(void 0),c(void 0),u(void 0),h(void 0),e.onerror?.(S)},m=y0(),g=async S=>{try{const w=await m(d.load(S));p(w)}catch(w){v(w)}};ft(()=>{g(e.url)});var y=Ni(),_=Vn(y);{var x=S=>{kn(S,co({get is(){return i()}},()=>f,{children:(w,A)=>{var E=Ni(),b=Vn(E);ts(b,()=>e.children??lo,()=>({ref:i()})),wn(w,E)},$$slots:{default:!0}}))};$u(_,S=>{i()&&S(x)})}wn(s,y),es()}const sA="Right",aA="Top",oA="Front",lA="Left",cA="Bottom",hA="Back";[sA,aA,oA,lA,cA,hA].map(s=>s.toLocaleLowerCase());new It;new D;Ue.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new de(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Bn.line={uniforms:Oc.merge([Ue.common,Ue.fog,Ue.line]),vertexShader:`
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
		`};new pt;new D;new D;new pt;new pt;new pt;new D;new Ye;new $g;new D;new It;new Lt;new pt;const rm={type:"change"},id={type:"start"},b0={type:"end"},vl=new Oi,sm=new mi,uA=Math.cos(70*gf.DEG2RAD),zt=new D,bn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_u=1e-6;let fA=class extends t0{constructor(e,t=null){super(e,t),this.state=St.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Kt,this._lastTargetPosition=new D,this._quat=new Kt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fu,this._sphericalDelta=new Fu,this._scale=1,this._panOffset=new D,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new D,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pA.bind(this),this._onPointerDown=dA.bind(this),this._onPointerUp=mA.bind(this),this._onContextMenu=SA.bind(this),this._onMouseWheel=_A.bind(this),this._onKeyDown=xA.bind(this),this._onTouchStart=yA.bind(this),this._onTouchMove=bA.bind(this),this._onMouseDown=gA.bind(this),this._onMouseMove=vA.bind(this),this._interceptControlDown=MA.bind(this),this._interceptControlUp=TA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rm),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=zt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vl.origin.copy(this.object.position),vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vl.direction))<uA?this.object.lookAt(this.target):(sm.setFromNormalAndCoplanarPoint(this.object.up,this.target),vl.intersectPlane(sm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_u||this._lastTargetPosition.distanceToSquared(this.target)>_u?(this.dispatchEvent(rm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;zt.copy(n).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new de,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function dA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function pA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function mA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(b0),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=St.DOLLY;break;case zr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=St.ROTATE}break;case zr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(id)}function vA(s){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function _A(s){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(s.preventDefault(),this.dispatchEvent(id),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(b0))}function xA(s){this.enabled!==!1&&this._handleKeyDown(s)}function yA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=St.TOUCH_ROTATE;break;case Nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=St.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(id)}function bA(s){switch(this._trackPointer(s),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=St.NONE}}function SA(s){this.enabled!==!1&&s.preventDefault()}function MA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TA(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wA=`
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
`,AA=`
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
`;var EA=oo("<!> <!>",1);function CA(s,e){$r(e,!0);let t=ot(e,"cellColor",3,"#000000"),i=ot(e,"sectionColor",3,"#0000ee"),n=ot(e,"cellSize",3,1),r=ot(e,"backgroundColor",3,"#dadada"),a=ot(e,"backgroundOpacity",3,0),o=ot(e,"sectionSize",3,10),l=ot(e,"plane",3,"xz"),c=ot(e,"gridSize",19,()=>[20,20]),h=ot(e,"followCamera",3,!1),u=ot(e,"infiniteGrid",3,!1),f=ot(e,"fadeDistance",3,100),d=ot(e,"fadeStrength",3,1),p=ot(e,"fadeOrigin",3,void 0),v=ot(e,"cellThickness",3,1),m=ot(e,"sectionThickness",3,2),g=ot(e,"side",3,Pn),y=ot(e,"type",3,"grid"),_=ot(e,"axis",3,"x"),x=ot(e,"maxRadius",3,0),S=ot(e,"cellDividers",3,6),w=ot(e,"sectionDividers",3,2),A=ot(e,"ref",15),E=ns(e,["$$slots","$$events","$$legacy","cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","fadeOrigin","cellThickness","sectionThickness","side","type","axis","maxRadius","cellDividers","sectionDividers","ref","children"]);const b=new At,{invalidate:M,camera:L}=ia(),I=new mi,U=new D(0,1,0),F=new D(0,0,0),G={x:0,y:1,z:2},B={xz:"xzy",xy:"xyz",zy:"zyx"},H={grid:0,lines:1,circular:2,polar:3},Y={cellSize:{value:n()},sectionSize:{value:o()},cellColor:{value:new Ie(t())},sectionColor:{value:new Ie(i())},backgroundColor:{value:new Ie(r())},backgroundOpacity:{value:a()},fadeDistance:{value:f()},fadeStrength:{value:d()},fadeOrigin:{value:new D},cellThickness:{value:v()},sectionThickness:{value:m()},infiniteGrid:{value:u()},followCamera:{value:h()},coord0:{value:0},coord1:{value:2},coord2:{value:1},gridType:{value:H.grid},lineGridCoord:{value:G[_()]},circleGridMaxRadius:{value:x()},polarCellDividers:{value:S()},polarSectionDividers:{value:w()},worldCamProjPosition:{value:new D},worldPlanePosition:{value:new D}};ft(()=>{const q=B[l()],X=q.charAt(0),N=q.charAt(1),W=q.charAt(2);Y.coord0.value=G[X],Y.coord1.value=G[N],Y.coord2.value=G[W],M()}),ft(()=>{Y.cellSize.value=n(),M()}),ft(()=>{Y.sectionSize.value=o(),M()}),ft(()=>{Y.cellColor.value.set(t()),M()}),ft(()=>{Y.sectionColor.value.set(i()),M()}),ft(()=>{Y.backgroundColor.value.set(r()),M()}),ft(()=>{Y.backgroundOpacity.value=a(),M()}),ft(()=>{Y.fadeDistance.value=f(),M()}),ft(()=>{Y.fadeStrength.value=d(),M()}),ft(()=>{p()&&(Y.fadeOrigin.value=p(),M())}),ft(()=>{Y.cellThickness.value=v(),M()}),ft(()=>{Y.sectionThickness.value=m(),M()}),ft(()=>{Y.followCamera.value=h(),M()}),ft(()=>{Y.infiniteGrid.value=u(),M()}),ft(()=>{switch(y()){case"grid":{Y.gridType.value=H.grid;break}case"lines":{Y.gridType.value=H.lines,Y.lineGridCoord.value=G[_()];break}case"circular":{Y.gridType.value=H.circular,Y.circleGridMaxRadius.value=x();break}case"polar":{Y.gridType.value=H.polar,Y.circleGridMaxRadius.value=x(),Y.polarCellDividers.value=S(),Y.polarSectionDividers.value=w();break}}M()}),Jf(()=>{I.setFromNormalAndCoplanarPoint(U,F).applyMatrix4(b.matrixWorld);const q=b.material,X=q.uniforms.worldCamProjPosition,N=q.uniforms.worldPlanePosition,W=q.uniforms.fadeOrigin,Z=I.projectPoint(L.current.position,X.value);p()||(W.value=Z),N.value.set(0,0,0).applyMatrix4(b.matrixWorld)},{autoInvalidate:!1}),kn(s,co({get is(){return b},frustumCulled:!1},()=>E,{get ref(){return A()},set ref(q){A(q)},children:(q,X)=>{var N=EA(),W=Vn(N);yd(W,()=>kn.ShaderMaterial,(z,k)=>{k(z,{get fragmentShader(){return AA},get vertexShader(){return wA},get uniforms(){return Y},transparent:!0,get side(){return g()}})});var Z=Ri(W,2);{var se=z=>{var k=Ni(),J=Vn(k);ts(J,()=>e.children,()=>({ref:b})),wn(z,k)},te=z=>{var k=Ni(),J=Vn(k);{let ve=Gn(()=>typeof c()=="number"?[c(),c()]:c());yd(J,()=>kn.PlaneGeometry,(pe,be)=>{be(pe,{get args(){return He(ve)}})})}wn(z,k)};$u(Z,z=>{e.children?z(se):z(te,!1)})}wn(q,N)},$$slots:{default:!0}})),es()}const RA=()=>gw("threlte-controls",{orbitControls:Xr(void 0),trackballControls:Xr(void 0)});function PA(s,e){$r(e,!0);const t=()=>X0(o,"$parent",i),[i,n]=Y0();let r=ot(e,"ref",15),a=ns(e,["$$slots","$$events","$$legacy","ref","children"]);const o=m0(),{dom:l,invalidate:c}=ia();if(!ni(t(),"Camera"))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const h=new fA(t(),l),{orbitControls:u}=RA(),{start:f,stop:d}=Jf(()=>{h.update()},{autoStart:!1,autoInvalidate:!1});ft(()=>{e.autoRotate||e.enableDamping?f():d()}),ft(()=>{const p=v=>{c(),e.onchange?.(v)};return u.set(h),h.addEventListener("change",p),()=>{u.set(void 0),h.removeEventListener("change",p)}}),kn(s,co({get is(){return h}},()=>a,{get ref(){return r()},set ref(p){r(p)},children:(p,v)=>{var m=Ni(),g=Vn(m);ts(g,()=>e.children??lo,()=>({ref:h})),wn(p,m)},$$slots:{default:!0}})),es(),n()}new Ye;new Ye;new At;`${$e.logdepthbuf_pars_vertex}${$e.fog_pars_vertex}${$e.logdepthbuf_vertex}${$e.fog_vertex}`;`${$e.tonemapping_fragment}${$e.colorspace_fragment}`;`${$e.tonemapping_fragment}${$e.colorspace_fragment}`;const IA=`

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
`,DA=`

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
`,LA=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,UA=LA,NA=`
	${IA}
	${DA}
`;`${UA}${NA}${$e.tonemapping_fragment}${$e.colorspace_fragment}`;function FA(){var s=Object.create(null);function e(n,r){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var h=n.getTransferables;if(h===void 0&&(h=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=i("<"+o+">.init",c),h&&(h=i("<"+o+">.getTransferables",h));var u=null;typeof c=="function"?u=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:u,getTransferables:h},r(u)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(h,function(u){return r(u instanceof Error?u:new Error(""+u))}):h(c)}catch(u){r(u)}function h(u){try{var f=s[o].getTransferables&&s[o].getTransferables(u);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(u,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var r=n.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function OA(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var S0=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return S0=function(){return s},s},BA=0,kA=0,xu=!1,Ha=Object.create(null),Wa=Object.create(null),Xu=Object.create(null);function ra(s){if((!s||typeof s.init!="function")&&!xu)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId,r=OA(s);n==null&&(n="#default");var a="workerModule"+ ++BA,o=s.name||a,l=null;e=e&&e.map(function(h){return typeof h=="function"&&!h.workerModuleData&&(xu=!0,h=ra({workerId:n,name:"<"+o+"> function dependency: "+h.name,init:`function(){return (
`+wl(h)+`
)}`}),xu=!1),h&&h.workerModuleData&&(h=h.workerModuleData),h});function c(){for(var h=[],u=arguments.length;u--;)h[u]=arguments[u];if(!S0())return r.apply(void 0,h);if(!l){l=am(n,"registerModule",c.workerModuleData);var f=function(){l=null,Wa[n].delete(f)};(Wa[n]||(Wa[n]=new Set)).add(f)}return l.then(function(d){var p=d.isCallable;if(p)return am(n,"callModule",{id:a,args:h});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:wl(t),getTransferables:i&&wl(i)},c.onMainThread=r,c}function zA(s){Wa[s]&&Wa[s].forEach(function(e){e()}),Ha[s]&&(Ha[s].terminate(),delete Ha[s])}function wl(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function VA(s){var e=Ha[s];if(!e){var t=wl(FA);e=Ha[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,a=Xu[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete Xu[r],a(n)}}return e}function am(s,e,t){return new Promise(function(i,n){var r=++kA;Xu[r]=function(a){a.success?i(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},VA(s).postMessage({messageId:r,action:e,data:t})})}function M0(){var s=(function(e){function t(q,X,N,W,Z,se,te,z){var k=1-te;z.x=k*k*q+2*k*te*N+te*te*Z,z.y=k*k*X+2*k*te*W+te*te*se}function i(q,X,N,W,Z,se,te,z,k,J){var ve=1-k;J.x=ve*ve*ve*q+3*ve*ve*k*N+3*ve*k*k*Z+k*k*k*te,J.y=ve*ve*ve*X+3*ve*ve*k*W+3*ve*k*k*se+k*k*k*z}function n(q,X){for(var N=/([MLQCZ])([^MLQCZ]*)/g,W,Z,se,te,z;W=N.exec(q);){var k=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(J){return parseFloat(J)});switch(W[1]){case"M":te=Z=k[0],z=se=k[1];break;case"L":(k[0]!==te||k[1]!==z)&&X("L",te,z,te=k[0],z=k[1]);break;case"Q":{X("Q",te,z,te=k[2],z=k[3],k[0],k[1]);break}case"C":{X("C",te,z,te=k[4],z=k[5],k[0],k[1],k[2],k[3]);break}case"Z":(te!==Z||z!==se)&&X("L",te,z,Z,se);break}}}function r(q,X,N){N===void 0&&(N=16);var W={x:0,y:0};n(q,function(Z,se,te,z,k,J,ve,pe,be){switch(Z){case"L":X(se,te,z,k);break;case"Q":{for(var ge=se,Pe=te,re=1;re<N;re++)t(se,te,J,ve,z,k,re/(N-1),W),X(ge,Pe,W.x,W.y),ge=W.x,Pe=W.y;break}case"C":{for(var ie=se,ne=te,fe=1;fe<N;fe++)i(se,te,J,ve,pe,be,z,k,fe/(N-1),W),X(ie,ne,W.x,W.y),ie=W.x,ne=W.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(q,X){var N=q.getContext?q.getContext("webgl",c):q,W=l.get(N);if(!W){let ve=function(ie){var ne=se[ie];if(!ne&&(ne=se[ie]=N.getExtension(ie),!ne))throw new Error(ie+" not supported");return ne},pe=function(ie,ne){var fe=N.createShader(ne);return N.shaderSource(fe,ie),N.compileShader(fe),fe},be=function(ie,ne,fe,R){if(!te[ie]){var Ae={},ue={},ae=N.createProgram();N.attachShader(ae,pe(ne,N.VERTEX_SHADER)),N.attachShader(ae,pe(fe,N.FRAGMENT_SHADER)),N.linkProgram(ae),te[ie]={program:ae,transaction:function(C){N.useProgram(ae),C({setUniform:function(O,$){for(var Q=[],j=arguments.length-2;j-- >0;)Q[j]=arguments[j+2];var we=ue[$]||(ue[$]=N.getUniformLocation(ae,$));N["uniform"+O].apply(N,[we].concat(Q))},setAttribute:function(O,$,Q,j,we){var _e=Ae[O];_e||(_e=Ae[O]={buf:N.createBuffer(),loc:N.getAttribLocation(ae,O),data:null}),N.bindBuffer(N.ARRAY_BUFFER,_e.buf),N.vertexAttribPointer(_e.loc,$,N.FLOAT,!1,0,0),N.enableVertexAttribArray(_e.loc),Z?N.vertexAttribDivisor(_e.loc,j):ve("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(_e.loc,j),we!==_e.data&&(N.bufferData(N.ARRAY_BUFFER,we,Q),_e.data=we)}})}}}te[ie].transaction(R)},ge=function(ie,ne){k++;try{N.activeTexture(N.TEXTURE0+k);var fe=z[ie];fe||(fe=z[ie]=N.createTexture(),N.bindTexture(N.TEXTURE_2D,fe),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MIN_FILTER,N.NEAREST),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MAG_FILTER,N.NEAREST)),N.bindTexture(N.TEXTURE_2D,fe),ne(fe,k)}finally{k--}},Pe=function(ie,ne,fe){var R=N.createFramebuffer();J.push(R),N.bindFramebuffer(N.FRAMEBUFFER,R),N.activeTexture(N.TEXTURE0+ne),N.bindTexture(N.TEXTURE_2D,ie),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ie,0);try{fe(R)}finally{N.deleteFramebuffer(R),N.bindFramebuffer(N.FRAMEBUFFER,J[--J.length-1]||null)}},re=function(){se={},te={},z={},k=-1,J.length=0};var Z=typeof WebGL2RenderingContext<"u"&&N instanceof WebGL2RenderingContext,se={},te={},z={},k=-1,J=[];N.canvas.addEventListener("webglcontextlost",function(ie){re(),ie.preventDefault()},!1),l.set(N,W={gl:N,isWebGL2:Z,getExtension:ve,withProgram:be,withTexture:ge,withTextureFramebuffer:Pe,handleContextLoss:re})}X(W)}function u(q,X,N,W,Z,se,te,z){te===void 0&&(te=15),z===void 0&&(z=null),h(q,function(k){var J=k.gl,ve=k.withProgram,pe=k.withTexture;pe("copy",function(be,ge){J.texImage2D(J.TEXTURE_2D,0,J.RGBA,Z,se,0,J.RGBA,J.UNSIGNED_BYTE,X),ve("copy",a,o,function(Pe){var re=Pe.setUniform,ie=Pe.setAttribute;ie("aUV",2,J.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),re("1i","image",ge),J.bindFramebuffer(J.FRAMEBUFFER,z||null),J.disable(J.BLEND),J.colorMask(te&8,te&4,te&2,te&1),J.viewport(N,W,Z,se),J.scissor(N,W,Z,se),J.drawArrays(J.TRIANGLES,0,3)})})})}function f(q,X,N){var W=q.width,Z=q.height;h(q,function(se){var te=se.gl,z=new Uint8Array(W*Z*4);te.readPixels(0,0,W,Z,te.RGBA,te.UNSIGNED_BYTE,z),q.width=X,q.height=N,u(te,z,0,0,W,Z)})}var d=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:f});function p(q,X,N,W,Z,se){se===void 0&&(se=1);var te=new Uint8Array(q*X),z=W[2]-W[0],k=W[3]-W[1],J=[];r(N,function(ie,ne,fe,R){J.push({x1:ie,y1:ne,x2:fe,y2:R,minX:Math.min(ie,fe),minY:Math.min(ne,R),maxX:Math.max(ie,fe),maxY:Math.max(ne,R)})}),J.sort(function(ie,ne){return ie.maxX-ne.maxX});for(var ve=0;ve<q;ve++)for(var pe=0;pe<X;pe++){var be=Pe(W[0]+z*(ve+.5)/q,W[1]+k*(pe+.5)/X),ge=Math.pow(1-Math.abs(be)/Z,se)/2;be<0&&(ge=1-ge),ge=Math.max(0,Math.min(255,Math.round(ge*255))),te[pe*q+ve]=ge}return te;function Pe(ie,ne){for(var fe=1/0,R=1/0,Ae=J.length;Ae--;){var ue=J[Ae];if(ue.maxX+R<=ie)break;if(ie+R>ue.minX&&ne-R<ue.maxY&&ne+R>ue.minY){var ae=g(ie,ne,ue.x1,ue.y1,ue.x2,ue.y2);ae<fe&&(fe=ae,R=Math.sqrt(fe))}}return re(ie,ne)&&(R=-R),R}function re(ie,ne){for(var fe=0,R=J.length;R--;){var Ae=J[R];if(Ae.maxX<=ie)break;var ue=Ae.y1>ne!=Ae.y2>ne&&ie<(Ae.x2-Ae.x1)*(ne-Ae.y1)/(Ae.y2-Ae.y1)+Ae.x1;ue&&(fe+=Ae.y1<Ae.y2?1:-1)}return fe!==0}}function v(q,X,N,W,Z,se,te,z,k,J){se===void 0&&(se=1),z===void 0&&(z=0),k===void 0&&(k=0),J===void 0&&(J=0),m(q,X,N,W,Z,se,te,null,z,k,J)}function m(q,X,N,W,Z,se,te,z,k,J,ve){se===void 0&&(se=1),k===void 0&&(k=0),J===void 0&&(J=0),ve===void 0&&(ve=0);for(var pe=p(q,X,N,W,Z,se),be=new Uint8Array(pe.length*4),ge=0;ge<pe.length;ge++)be[ge*4+ve]=pe[ge];u(te,be,k,J,q,X,1<<3-ve,z)}function g(q,X,N,W,Z,se){var te=Z-N,z=se-W,k=te*te+z*z,J=k?Math.max(0,Math.min(1,((q-N)*te+(X-W)*z)/k)):0,ve=q-(N+J*te),pe=X-(W+J*z);return ve*ve+pe*pe}var y=Object.freeze({__proto__:null,generate:p,generateIntoCanvas:v,generateIntoFramebuffer:m}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",S="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),A=null,E=!1,b={},M=new WeakMap;function L(q){if(!E&&!G(q))throw new Error("WebGL generation not supported")}function I(q,X,N,W,Z,se,te){if(se===void 0&&(se=1),te===void 0&&(te=null),!te&&(te=A,!te)){var z=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!z)throw new Error("OffscreenCanvas or DOM canvas not supported");te=A=z.getContext("webgl",{depth:!1})}L(te);var k=new Uint8Array(q*X*4);h(te,function(be){var ge=be.gl,Pe=be.withTexture,re=be.withTextureFramebuffer;Pe("readable",function(ie,ne){ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,q,X,0,ge.RGBA,ge.UNSIGNED_BYTE,null),re(ie,ne,function(fe){F(q,X,N,W,Z,se,ge,fe,0,0,0),ge.readPixels(0,0,q,X,ge.RGBA,ge.UNSIGNED_BYTE,k)})})});for(var J=new Uint8Array(q*X),ve=0,pe=0;ve<k.length;ve+=4)J[pe++]=k[ve];return J}function U(q,X,N,W,Z,se,te,z,k,J){se===void 0&&(se=1),z===void 0&&(z=0),k===void 0&&(k=0),J===void 0&&(J=0),F(q,X,N,W,Z,se,te,null,z,k,J)}function F(q,X,N,W,Z,se,te,z,k,J,ve){se===void 0&&(se=1),k===void 0&&(k=0),J===void 0&&(J=0),ve===void 0&&(ve=0),L(te);var pe=[];r(N,function(be,ge,Pe,re){pe.push(be,ge,Pe,re)}),pe=new Float32Array(pe),h(te,function(be){var ge=be.gl,Pe=be.isWebGL2,re=be.getExtension,ie=be.withProgram,ne=be.withTexture,fe=be.withTextureFramebuffer,R=be.handleContextLoss;if(ne("rawDistances",function(Ae,ue){(q!==Ae._lastWidth||X!==Ae._lastHeight)&&ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,Ae._lastWidth=q,Ae._lastHeight=X,0,ge.RGBA,ge.UNSIGNED_BYTE,null),ie("main",_,x,function(ae){var me=ae.setAttribute,C=ae.setUniform,T=!Pe&&re("ANGLE_instanced_arrays"),O=!Pe&&re("EXT_blend_minmax");me("aUV",2,ge.STATIC_DRAW,0,w),me("aLineSegment",4,ge.DYNAMIC_DRAW,1,pe),C.apply(void 0,["4f","uGlyphBounds"].concat(W)),C("1f","uMaxDistance",Z),C("1f","uExponent",se),fe(Ae,ue,function($){ge.enable(ge.BLEND),ge.colorMask(!0,!0,!0,!0),ge.viewport(0,0,q,X),ge.scissor(0,0,q,X),ge.blendFunc(ge.ONE,ge.ONE),ge.blendEquationSeparate(ge.FUNC_ADD,Pe?ge.MAX:O.MAX_EXT),ge.clear(ge.COLOR_BUFFER_BIT),Pe?ge.drawArraysInstanced(ge.TRIANGLES,0,3,pe.length/4):T.drawArraysInstancedANGLE(ge.TRIANGLES,0,3,pe.length/4)})}),ie("post",a,S,function(ae){ae.setAttribute("aUV",2,ge.STATIC_DRAW,0,w),ae.setUniform("1i","tex",ue),ge.bindFramebuffer(ge.FRAMEBUFFER,z),ge.disable(ge.BLEND),ge.colorMask(ve===0,ve===1,ve===2,ve===3),ge.viewport(k,J,q,X),ge.scissor(k,J,q,X),ge.drawArrays(ge.TRIANGLES,0,3)})}),ge.isContextLost())throw R(),new Error("webgl context lost")})}function G(q){var X=!q||q===A?b:q.canvas||q,N=M.get(X);if(N===void 0){E=!0;var W=null;try{var Z=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],se=I(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,q);N=se&&Z.length===se.length&&se.every(function(te,z){return te===Z[z]}),N||(W="bad trial run results",console.info(Z,se))}catch(te){N=!1,W=te.message}W&&console.warn("WebGL SDF generation not supported:",W),E=!1,M.set(X,N)}return N}var B=Object.freeze({__proto__:null,generate:I,generateIntoCanvas:U,generateIntoFramebuffer:F,isSupported:G});function H(q,X,N,W,Z,se){Z===void 0&&(Z=Math.max(W[2]-W[0],W[3]-W[1])/2),se===void 0&&(se=1);try{return I.apply(B,arguments)}catch(te){return console.info("WebGL SDF generation failed, falling back to JS",te),p.apply(y,arguments)}}function Y(q,X,N,W,Z,se,te,z,k,J){Z===void 0&&(Z=Math.max(W[2]-W[0],W[3]-W[1])/2),se===void 0&&(se=1),z===void 0&&(z=0),k===void 0&&(k=0),J===void 0&&(J=0);try{return U.apply(B,arguments)}catch(ve){return console.info("WebGL SDF generation failed, falling back to JS",ve),v.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=H,e.generateIntoCanvas=Y,e.javascript=y,e.pathToLineSegments=r,e.webgl=B,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}function GA(){var s=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(R,Ae){i[R]=1<<Ae+1,n[i[R]]=R}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,a=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,h=null;function u(){if(!h){h=new Map;var R=function(ue){if(t.hasOwnProperty(ue)){var ae=0;t[ue].split(",").forEach(function(me){var C=me.split("+"),T=C[0],O=C[1];T=parseInt(T,36),O=O?parseInt(O,36):0,h.set(ae+=T,i[ue]);for(var $=0;$<O;$++)h.set(++ae,i[ue])})}};for(var Ae in t)R(Ae)}}function f(R){return u(),h.get(R.codePointAt(0))||i.L}function d(R){return n[f(R)]}var p={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(R,Ae){var ue=36,ae=0,me=new Map,C=Ae&&new Map,T;return R.split(",").forEach(function O($){if($.indexOf("+")!==-1)for(var Q=+$;Q--;)O(T);else{T=$;var j=$.split(">"),we=j[0],_e=j[1];we=String.fromCodePoint(ae+=parseInt(we,ue)),_e=String.fromCodePoint(ae+=parseInt(_e,ue)),me.set(we,_e),Ae&&C.set(_e,we)}}),{map:me,reverseMap:C}}var m,g,y;function _(){if(!m){var R=v(p.pairs,!0),Ae=R.map,ue=R.reverseMap;m=Ae,g=ue,y=v(p.canonical,!1).map}}function x(R){return _(),m.get(R)||null}function S(R){return _(),g.get(R)||null}function w(R){return _(),y.get(R)||null}var A=i.L,E=i.R,b=i.EN,M=i.ES,L=i.ET,I=i.AN,U=i.CS,F=i.B,G=i.S,B=i.ON,H=i.BN,Y=i.NSM,q=i.AL,X=i.LRO,N=i.RLO,W=i.LRE,Z=i.RLE,se=i.PDF,te=i.LRI,z=i.RLI,k=i.FSI,J=i.PDI;function ve(R,Ae){for(var ue=125,ae=new Uint32Array(R.length),me=0;me<R.length;me++)ae[me]=f(R[me]);var C=new Map;function T(_n,Qn){var xn=ae[_n];ae[_n]=Qn,C.set(xn,C.get(xn)-1),xn&o&&C.set(o,C.get(o)-1),C.set(Qn,(C.get(Qn)||0)+1),Qn&o&&C.set(o,(C.get(o)||0)+1)}for(var O=new Uint8Array(R.length),$=new Map,Q=[],j=null,we=0;we<R.length;we++)j||Q.push(j={start:we,end:R.length-1,level:Ae==="rtl"?1:Ae==="ltr"?0:md(we,!1)}),ae[we]&F&&(j.end=we,j=null);for(var _e=Z|W|N|X|r|J|se|F,Re=function(_n){return _n+(_n&1?1:2)},Be=function(_n){return _n+(_n&1?2:1)},he=0;he<Q.length;he++){j=Q[he];var Me=[{_level:j.level,_override:0,_isolate:0}],Te=void 0,De=0,Ee=0,Je=0;C.clear();for(var V=j.start;V<=j.end;V++){var ye=ae[V];if(Te=Me[Me.length-1],C.set(ye,(C.get(ye)||0)+1),ye&o&&C.set(o,(C.get(o)||0)+1),ye&_e)if(ye&(Z|W)){O[V]=Te._level;var Se=(ye===Z?Be:Re)(Te._level);Se<=ue&&!De&&!Ee?Me.push({_level:Se,_override:0,_isolate:0}):De||Ee++}else if(ye&(N|X)){O[V]=Te._level;var Oe=(ye===N?Be:Re)(Te._level);Oe<=ue&&!De&&!Ee?Me.push({_level:Oe,_override:ye&N?E:A,_isolate:0}):De||Ee++}else if(ye&r){ye&k&&(ye=md(V+1,!0)===1?z:te),O[V]=Te._level,Te._override&&T(V,Te._override);var xe=(ye===z?Be:Re)(Te._level);xe<=ue&&De===0&&Ee===0?(Je++,Me.push({_level:xe,_override:0,_isolate:1,_isolInitIndex:V})):De++}else if(ye&J){if(De>0)De--;else if(Je>0){for(Ee=0;!Me[Me.length-1]._isolate;)Me.pop();var ce=Me[Me.length-1]._isolInitIndex;ce!=null&&($.set(ce,V),$.set(V,ce)),Me.pop(),Je--}Te=Me[Me.length-1],O[V]=Te._level,Te._override&&T(V,Te._override)}else ye&se?(De===0&&(Ee>0?Ee--:!Te._isolate&&Me.length>1&&(Me.pop(),Te=Me[Me.length-1])),O[V]=Te._level):ye&F&&(O[V]=j.level);else O[V]=Te._level,Te._override&&ye!==H&&T(V,Te._override)}for(var Ce=[],ze=null,Ve=j.start;Ve<=j.end;Ve++){var Qe=ae[Ve];if(!(Qe&l)){var Mt=O[Ve],Tt=Qe&r,Ut=Qe===J;ze&&Mt===ze._level?(ze._end=Ve,ze._endsWithIsolInit=Tt):Ce.push(ze={_start:Ve,_end:Ve,_level:Mt,_startsWithPDI:Ut,_endsWithIsolInit:Tt})}}for(var vn=[],Nn=0;Nn<Ce.length;Nn++){var jn=Ce[Nn];if(!jn._startsWithPDI||jn._startsWithPDI&&!$.has(jn._start)){for(var Kn=[ze=jn],ci=void 0;ze&&ze._endsWithIsolInit&&(ci=$.get(ze._end))!=null;)for(var Zt=Nn+1;Zt<Ce.length;Zt++)if(Ce[Zt]._start===ci){Kn.push(ze=Ce[Zt]);break}for(var Ot=[],hi=0;hi<Kn.length;hi++)for(var sa=Kn[hi],ki=sa._start;ki<=sa._end;ki++)Ot.push(ki);for(var bo=O[Ot[0]],dr=j.level,pr=Ot[0]-1;pr>=0;pr--)if(!(ae[pr]&l)){dr=O[pr];break}var ls=Ot[Ot.length-1],ph=O[ls],So=j.level;if(!(ae[ls]&r)){for(var cs=ls+1;cs<=j.end;cs++)if(!(ae[cs]&l)){So=O[cs];break}}vn.push({_seqIndices:Ot,_sosType:Math.max(dr,bo)%2?E:A,_eosType:Math.max(So,ph)%2?E:A})}}for(var aa=0;aa<vn.length;aa++){var oa=vn[aa],je=oa._seqIndices,P=oa._sosType,K=oa._eosType,le=O[je[0]]&1?E:A;if(C.get(Y))for(var oe=0;oe<je.length;oe++){var ee=je[oe];if(ae[ee]&Y){for(var Le=P,ke=oe-1;ke>=0;ke--)if(!(ae[je[ke]]&l)){Le=ae[je[ke]];break}T(ee,Le&(r|J)?B:Le)}}if(C.get(b))for(var Ne=0;Ne<je.length;Ne++){var We=je[Ne];if(ae[We]&b)for(var Xe=Ne-1;Xe>=-1;Xe--){var et=Xe===-1?P:ae[je[Xe]];if(et&a){et===q&&T(We,I);break}}}if(C.get(q))for(var Ke=0;Ke<je.length;Ke++){var at=je[Ke];ae[at]&q&&T(at,E)}if(C.get(M)||C.get(U))for(var ut=1;ut<je.length-1;ut++){var wt=je[ut];if(ae[wt]&(M|U)){for(var bt=0,gt=0,Ze=ut-1;Ze>=0&&(bt=ae[je[Ze]],!!(bt&l));Ze--);for(var mt=ut+1;mt<je.length&&(gt=ae[je[mt]],!!(gt&l));mt++);bt===gt&&(ae[wt]===M?bt===b:bt&(b|I))&&T(wt,bt)}}if(C.get(b))for(var rt=0;rt<je.length;rt++){var an=je[rt];if(ae[an]&b){for(var Zn=rt-1;Zn>=0&&ae[je[Zn]]&(L|l);Zn--)T(je[Zn],b);for(rt++;rt<je.length&&ae[je[rt]]&(L|l|b);rt++)ae[je[rt]]!==b&&T(je[rt],b)}}if(C.get(L)||C.get(M)||C.get(U))for(var Bt=0;Bt<je.length;Bt++){var zi=je[Bt];if(ae[zi]&(L|M|U)){T(zi,B);for(var vt=Bt-1;vt>=0&&ae[je[vt]]&l;vt--)T(je[vt],B);for(var kt=Bt+1;kt<je.length&&ae[je[kt]]&l;kt++)T(je[kt],B)}}if(C.get(b))for(var $t=0,Yt=P;$t<je.length;$t++){var Jt=je[$t],mr=ae[Jt];mr&b?Yt===A&&T(Jt,A):mr&a&&(Yt=mr)}if(C.get(o)){var An=E|b|I,sd=An|A,Mo=[];{for(var hs=[],us=0;us<je.length;us++)if(ae[je[us]]&o){var la=R[je[us]],ad=void 0;if(x(la)!==null)if(hs.length<63)hs.push({char:la,seqIndex:us});else break;else if((ad=S(la))!==null)for(var ca=hs.length-1;ca>=0;ca--){var mh=hs[ca].char;if(mh===ad||mh===S(w(la))||x(w(mh))===la){Mo.push([hs[ca].seqIndex,us]),hs.length=ca;break}}}Mo.sort(function(_n,Qn){return _n[0]-Qn[0]})}for(var gh=0;gh<Mo.length;gh++){for(var od=Mo[gh],To=od[0],vh=od[1],ld=!1,Jn=0,_h=To+1;_h<vh;_h++){var cd=je[_h];if(ae[cd]&sd){ld=!0;var hd=ae[cd]&An?E:A;if(hd===le){Jn=hd;break}}}if(ld&&!Jn){Jn=P;for(var xh=To-1;xh>=0;xh--){var ud=je[xh];if(ae[ud]&sd){var fd=ae[ud]&An?E:A;fd!==le?Jn=fd:Jn=le;break}}}if(Jn){if(ae[je[To]]=ae[je[vh]]=Jn,Jn!==le){for(var ha=To+1;ha<je.length;ha++)if(!(ae[je[ha]]&l)){f(R[je[ha]])&Y&&(ae[je[ha]]=Jn);break}}if(Jn!==le){for(var ua=vh+1;ua<je.length;ua++)if(!(ae[je[ua]]&l)){f(R[je[ua]])&Y&&(ae[je[ua]]=Jn);break}}}}for(var Vi=0;Vi<je.length;Vi++)if(ae[je[Vi]]&o){for(var dd=Vi,yh=Vi,bh=P,fa=Vi-1;fa>=0;fa--)if(ae[je[fa]]&l)dd=fa;else{bh=ae[je[fa]]&An?E:A;break}for(var pd=K,da=Vi+1;da<je.length;da++)if(ae[je[da]]&(o|l))yh=da;else{pd=ae[je[da]]&An?E:A;break}for(var Sh=dd;Sh<=yh;Sh++)ae[je[Sh]]=bh===pd?bh:le;Vi=yh}}}for(var En=j.start;En<=j.end;En++){var B0=O[En],wo=ae[En];if(B0&1?wo&(A|b|I)&&O[En]++:wo&E?O[En]++:wo&(I|b)&&(O[En]+=2),wo&l&&(O[En]=En===0?j.level:O[En-1]),En===j.end||f(R[En])&(G|F))for(var Ao=En;Ao>=0&&f(R[Ao])&c;Ao--)O[Ao]=j.level}}return{levels:O,paragraphs:Q};function md(_n,Qn){for(var xn=_n;xn<R.length;xn++){var Gi=ae[xn];if(Gi&(E|q))return 1;if(Gi&(F|A)||Qn&&Gi===J)return 0;if(Gi&r){var gd=k0(xn);xn=gd===-1?R.length:gd}}return 0}function k0(_n){for(var Qn=1,xn=_n+1;xn<R.length;xn++){var Gi=ae[xn];if(Gi&F)break;if(Gi&J){if(--Qn===0)return xn}else Gi&r&&Qn++}return-1}}var pe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",be;function ge(){if(!be){var R=v(pe,!0),Ae=R.map,ue=R.reverseMap;ue.forEach(function(ae,me){Ae.set(me,ae)}),be=Ae}}function Pe(R){return ge(),be.get(R)||null}function re(R,Ae,ue,ae){var me=R.length;ue=Math.max(0,ue==null?0:+ue),ae=Math.min(me-1,ae==null?me-1:+ae);for(var C=new Map,T=ue;T<=ae;T++)if(Ae[T]&1){var O=Pe(R[T]);O!==null&&C.set(T,O)}return C}function ie(R,Ae,ue,ae){var me=R.length;ue=Math.max(0,ue==null?0:+ue),ae=Math.min(me-1,ae==null?me-1:+ae);var C=[];return Ae.paragraphs.forEach(function(T){var O=Math.max(ue,T.start),$=Math.min(ae,T.end);if(O<$){for(var Q=Ae.levels.slice(O,$+1),j=$;j>=O&&f(R[j])&c;j--)Q[j]=T.level;for(var we=T.level,_e=1/0,Re=0;Re<Q.length;Re++){var Be=Q[Re];Be>we&&(we=Be),Be<_e&&(_e=Be|1)}for(var he=we;he>=_e;he--)for(var Me=0;Me<Q.length;Me++)if(Q[Me]>=he){for(var Te=Me;Me+1<Q.length&&Q[Me+1]>=he;)Me++;Me>Te&&C.push([Te+O,Me+O])}}}),C}function ne(R,Ae,ue,ae){var me=fe(R,Ae,ue,ae),C=[].concat(R);return me.forEach(function(T,O){C[O]=(Ae.levels[T]&1?Pe(R[T]):null)||R[T]}),C.join("")}function fe(R,Ae,ue,ae){for(var me=ie(R,Ae,ue,ae),C=[],T=0;T<R.length;T++)C[T]=T;return me.forEach(function(O){for(var $=O[0],Q=O[1],j=C.slice($,Q+1),we=j.length;we--;)C[Q-we]=j[we]}),C}return e.closingToOpeningBracket=S,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=ve,e.getMirroredCharacter=Pe,e.getMirroredCharactersMap=re,e.getReorderSegments=ie,e.getReorderedIndices=fe,e.getReorderedString=ne,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}const T0=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Yu(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=$e[n];return r?Yu(r):i}return s.replace(e,t)}const Qt=[];for(let s=0;s<256;s++)Qt[s]=(s<16?"0":"")+s.toString(16);function HA(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toUpperCase()}const Dr=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},WA=Date.now(),om=new WeakMap,lm=new Map;let XA=1e10;function qu(s,e){const t=KA(e);let i=om.get(s);if(i||om.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,h){s.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=lm[u];if(!f){const d=YA(this,c,e,t);f=lm[u]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,Dr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-WA}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:s}),Object.defineProperty(h,"id",{value:XA++}),h.uuid=HA(),h.uniforms=Dr({},c.uniforms,e.uniforms),h.defines=Dr({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=Dr({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const h=this.baseMaterial;return c===h||h.isDerivedMaterial&&h.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Dr(this.extensions,c.extensions),Dr(this.defines,c.defines),Dr(this.uniforms,Oc.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=qu(s.isDerivedMaterial?s.getDepthMaterial():new rh({depthPacking:Qm}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=qu(s.isDerivedMaterial?s.getDistanceMaterial():new sh,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),s.dispose.call(this)}}};return i[t]=a,new a}function YA(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:d,timeUniform:p}=i;if(r=r||"",a=a||"",o=o||"",c=c||"",h=h||"",u=u||"",(l||d)&&(e=Yu(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Yu(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),u=`${f}
${v.join(`
`)}
${u}`}if(p){const v=`
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
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,g,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,g))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=cm(e,n,r,a,o),t=cm(t,n,c,h,u),{vertexShader:e,fragmentShader:t}}function cm(s,e,t,i,n){return(i||n||t)&&(s=s.replace(T0,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function qA(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let jA=0;const hm=new Map;function KA(s){const e=JSON.stringify(s,qA);let t=hm.get(e);return t==null&&hm.set(e,t=++jA),t}function ZA(){return typeof window>"u"&&(self.window=self),(function(s){var e={parse:function(n){var r=e._bin,a=new Uint8Array(n);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],h=0;h<l;h++){var u=r.readUint(a,o);o+=4,c.push(e._readFont(a,u))}return c}return[e._readFont(a,0)]},_readFont:function(n,r){var a=e._bin,o=r;a.readFixed(n,r),r+=4;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:n,_offset:o},u={},f=0;f<l;f++){var d=a.readASCII(n,r,4);r+=4,a.readUint(n,r),r+=4;var p=a.readUint(n,r);r+=4;var v=a.readUint(n,r);r+=4,u[d]={offset:p,length:v}}for(f=0;f<c.length;f++){var m=c[f];u[m]&&(h[m.trim()]=e[m.trim()].parse(n,u[m].offset,u[m].length,h))}return h},_tabOffset:function(n,r,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,h=0;h<l;h++){var u=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,u==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,a){for(var o="",l=0;l<a;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,a){var o=e._bin._tdec;return o&&r==0&&a==n.length?o.decode(n):e._bin.readASCII(n,r,a)},readBytes:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,a,o,l){var c=e._bin,h={},u=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var p=c.readUshort(n,r);return r+=2,h.scriptList=e._lctf.readScriptList(n,u+f),h.featureList=e._lctf.readFeatureList(n,u+d),h.lookupList=e._lctf.readLookupList(n,u+p,l),h},e._lctf.readLookupList=function(n,r,a){var o=e._bin,l=r,c=[],h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var f=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var h=o.readUshort(n,r);r+=2;for(var u=c.ltype,f=0;f<h;f++){var d=o.readUshort(n,r);r+=2;var p=a(n,u,l+d,c);c.tabs.push(p)}return c},e._lctf.numOfOnes=function(n){for(var r=0,a=0;a<32;a++)(n>>>a&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var a=e._bin,o=[],l=a.readUshort(n,r);if(r+=2,l==1){var c=a.readUshort(n,r);r+=2;var h=a.readUshort(n,r);r+=2;for(var u=0;u<h;u++)o.push(c+u),o.push(c+u),o.push(a.readUshort(n,r)),r+=2}if(l==2){var f=a.readUshort(n,r);for(r+=2,u=0;u<f;u++)o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(n,r){var a=e._bin,o={};o.fmt=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(n,r,l)),o.fmt==2&&(o.tab=a.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var a=n.tab;if(n.fmt==1)return a.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=u.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var h=a.readUshort(n,r);r+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(a.readUshort(n,r+2*u));return l},e._lctf.readScriptList=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2,l[u.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var h=a.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var f=a.readASCII(n,r,4);r+=4;var d=a.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,r){var a=e._bin,o={};a.readUshort(n,r),r+=2,o.reqFeature=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.features=a.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,a){var o=e._bin;(n=new Uint8Array(n.buffer,r,a))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],h=0;h<l.length-1;h++)c.push(o.readASCII(n,r+l[h],l[h+1]-l[h]));r+=l[l.length-1];var u=[];r=e.CFF.readIndex(n,r,u);var f=[];for(h=0;h<u.length-1;h++)f.push(e.CFF.readDict(n,r+u[h],r+u[h+1]));r+=u[u.length-1];var d=f[0],p=[];r=e.CFF.readIndex(n,r,p);var v=[];for(h=0;h<p.length-1;h++)v.push(o.readASCII(n,r+p[h],p[h+1]-p[h]));if(r+=p[p.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,p=[],r=e.CFF.readIndex(n,r,p);var m=[];for(h=0;h<p.length-1;h++)m.push(o.readBytes(n,r+p[h],p[h+1]-p[h]));d.CharStrings=m}if(d.ROS){r=d.FDArray;var g=[];for(r=e.CFF.readIndex(n,r,g),d.FDArray=[],h=0;h<g.length-1;h++){var y=e.CFF.readDict(n,r+g[h],r+g[h+1]);e.CFF._readFDict(n,y,v),d.FDArray.push(y)}r+=g[g.length-1],r=d.FDSelect,d.FDSelect=[];var _=n[r];if(r++,_!=3)throw _;var x=o.readUshort(n,r);for(r+=2,h=0;h<x+1;h++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,v),d},e.CFF._readFDict=function(n,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(n,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var u=0;u<l.length-1;u++)a.Subrs.push(o.readBytes(n,r+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,a){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var h=0;h<c;h++)o.push(n[r+h]);return o},e.CFF.readCharset=function(n,r,a){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var h=0;h<a;h++){var u=o.readUshort(n,r);r+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){u=o.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=o.readUshort(n,r),r+=2),h=0;h<=f;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(n,r,a){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var h=0;h<l;h++)a.push(n[r+h]);else if(c==2)for(h=0;h<l;h++)a.push(o.readUshort(n,r+2*h));else if(c==3)for(h=0;h<l;h++)a.push(16777215&o.readUint(n,r+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,a){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,u=null,f=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(f=o.readShort(n,r+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(f=l-139,h=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,h=2),l==255&&(f=o.readInt(n,r+1)/65535,h=5),a.val=f??"o"+u,a.size=h},e.CFF.readCharString=function(n,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,p=null;h<=20&&(d=h,f=1),h==12&&(d=100*h+u,f=2),h!=19&&h!=20||(d=h,f=2),21<=h&&h<=27&&(d=h,f=1),h==28&&(p=l.readShort(n,r+1),f=3),29<=h&&h<=31&&(d=h,f=1),32<=h&&h<=246&&(p=h-139,f=1),247<=h&&h<=250&&(p=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(p=256*-(h-251)-u-108,f=2),h==255&&(p=l.readInt(n,r+1)/65535,f=5),c.push(p??"o"+d),r+=f}return c},e.CFF.readDict=function(n,r,a){for(var o=e._bin,l={},c=[];r<a;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,p=null;if(h==28&&(p=o.readShort(n,r+1),f=3),h==29&&(p=o.readInt(n,r+1),f=5),32<=h&&h<=246&&(p=h-139,f=1),247<=h&&h<=250&&(p=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(p=256*-(h-251)-u-108,f=2),h==255)throw p=o.readInt(n,r+1)/65535,f=5,"unknown number";if(h==30){var v=[];for(f=1;;){var m=n[r+f];f++;var g=m>>4,y=15&m;if(g!=15&&v.push(g),y!=15&&v.push(y),y==15)break}for(var _="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],S=0;S<v.length;S++)_+=x[v[S]];p=parseFloat(_)}h<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],f=1,h==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(p),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,a){n=new Uint8Array(n.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var f=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var p=o.readUint(n,r);r+=4;var v="p"+f+"e"+d,m=h.indexOf(p);if(m==-1){var g;m=l.tables.length,h.push(p);var y=o.readUshort(n,p);y==0?g=e.cmap.parse0(n,p):y==4?g=e.cmap.parse4(n,p):y==6?g=e.cmap.parse6(n,p):y==12?g=e.cmap.parse12(n,p):console.debug("unknown format: "+y,f,d,p),l.tables.push(g)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var a=e._bin,o=r,l={};l.format=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2;var h=a.readUshort(n,r);r+=2;var u=h/2;l.searchRange=a.readUshort(n,r),r+=2,l.entrySelector=a.readUshort(n,r),r+=2,l.rangeShift=a.readUshort(n,r),r+=2,l.endCount=a.readUshorts(n,r,u),r+=2*u,r+=2,l.startCount=a.readUshorts(n,r,u),r+=2*u,l.idDelta=[];for(var f=0;f<u;f++)l.idDelta.push(a.readShort(n,r)),r+=2;for(l.idRangeOffset=a.readUshorts(n,r,u),r+=2*u,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,o.firstCode=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,r+=2,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4;var l=a.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var h=r+12*c,u=a.readUint(n,h+0),f=a.readUint(n,h+4),d=a.readUint(n,h+8);o.groups.push([u,f,d])}return o},e.glyf={},e.glyf.parse=function(n,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(a.readUshort(o,l)),l+=2;var u=a.readUshort(o,l);if(l+=2,o.length-l<u)return null;c.instructions=a.readBytes(o,l,u),l+=u;var f=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<f;h++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var p=o[l];l++;for(var v=0;v<p;v++)c.flags.push(d),h++}}for(c.xs=[],h=0;h<f;h++){var m=(2&c.flags[h])!=0,g=(16&c.flags[h])!=0;m?(c.xs.push(g?o[l]:-o[l]),l++):g?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],h=0;h<f;h++)m=(4&c.flags[h])!=0,g=(32&c.flags[h])!=0,m?(c.ys.push(g?o[l]:-o[l]),l++):g?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var y=0,_=0;for(h=0;h<f;h++)y+=c.xs[h],_+=c.ys[h],c.xs[h]=y,c.ys[h]=_}else{var x;c.parts=[];do{x=a.readUshort(o,l),l+=2;var S={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(S),S.glyphIndex=a.readUshort(o,l),l+=2,1&x){var w=a.readShort(o,l);l+=2;var A=a.readShort(o,l);l+=2}else w=a.readInt8(o,l),l++,A=a.readInt8(o,l),l++;2&x?(S.m.tx=w,S.m.ty=A):(S.p1=w,S.p2=A),8&x?(S.m.a=S.m.d=a.readF2dot14(o,l),l+=2):64&x?(S.m.a=a.readF2dot14(o,l),l+=2,S.m.d=a.readF2dot14(o,l),l+=2):128&x&&(S.m.a=a.readF2dot14(o,l),l+=2,S.m.b=a.readF2dot14(o,l),l+=2,S.m.c=a.readF2dot14(o,l),l+=2,S.m.d=a.readF2dot14(o,l),l+=2)}while(32&x);if(256&x){var E=a.readUshort(o,l);for(l+=2,c.instr=[],h=0;h<E;h++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(n,a),a+=2,r==1||r==2||r==3||r==7||r==8&&h.fmt<=2){var u=l.readUshort(n,a);a+=2,h.coverage=e._lctf.readCoverage(n,u+c)}if(r==1&&h.fmt==1){var f=l.readUshort(n,a);a+=2,f!=0&&(h.pos=e.GPOS.readValueRecord(n,a,f))}else if(r==2&&h.fmt>=1&&h.fmt<=2){f=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var p=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(h.fmt==1){h.pairsets=[];var m=l.readUshort(n,a);a+=2;for(var g=0;g<m;g++){var y=c+l.readUshort(n,a);a+=2;var _=l.readUshort(n,y);y+=2;for(var x=[],S=0;S<_;S++){var w=l.readUshort(n,y);y+=2,f!=0&&(I=e.GPOS.readValueRecord(n,y,f),y+=2*p),d!=0&&(U=e.GPOS.readValueRecord(n,y,d),y+=2*v),x.push({gid2:w,val1:I,val2:U})}h.pairsets.push(x)}}if(h.fmt==2){var A=l.readUshort(n,a);a+=2;var E=l.readUshort(n,a);a+=2;var b=l.readUshort(n,a);a+=2;var M=l.readUshort(n,a);for(a+=2,h.classDef1=e._lctf.readClassDef(n,c+A),h.classDef2=e._lctf.readClassDef(n,c+E),h.matrix=[],g=0;g<b;g++){var L=[];for(S=0;S<M;S++){var I=null,U=null;f!=0&&(I=e.GPOS.readValueRecord(n,a,f),a+=2*p),d!=0&&(U=e.GPOS.readValueRecord(n,a,d),a+=2*v),L.push({val1:I,val2:U})}h.matrix.push(L)}}}else if(r==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),h.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),h.markClassCount=l.readUshort(n,a+4),h.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),h.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,h.markClassCount);else if(r==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),h.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),h.markClassCount=l.readUshort(n,a+4),h.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),h.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,h.markClassCount);else{if(r==9&&h.fmt==1){var F=l.readUshort(n,a);a+=2;var G=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+G)}console.debug("unsupported GPOS table LookupType",r,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(n,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(n,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(n,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(n,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,r,a){var o=e._bin,l=[],c=r,h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,r){var a=e._bin,o=[],l=r,c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=e.GPOS.readAnchorRecord(n,a.readUshort(n,r+2)+l);u.markClass=a.readUshort(n,r),o.push(u),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var a=e._bin,o={};return o.fmt=a.readUshort(n,r),o.x=a.readShort(n,r+2),o.y=a.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(n,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&h.fmt<=2||r==6&&h.fmt<=2){var u=l.readUshort(n,a);a+=2,h.coverage=e._lctf.readCoverage(n,c+u)}if(r==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(n,a),a+=2;else if(h.fmt==2){var f=l.readUshort(n,a);a+=2,h.newg=l.readUshorts(n,a,f),a+=2*h.newg.length}}else if(r==2&&h.fmt==1){f=l.readUshort(n,a),a+=2,h.seqs=[];for(var d=0;d<f;d++){var p=l.readUshort(n,a)+c;a+=2;var v=l.readUshort(n,p);h.seqs.push(l.readUshorts(n,p+2,v))}}else if(r==4)for(h.vals=[],f=l.readUshort(n,a),a+=2,d=0;d<f;d++){var m=l.readUshort(n,a);a+=2,h.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(r==5&&h.fmt==2){if(h.fmt==2){var g=l.readUshort(n,a);a+=2,h.cDef=e._lctf.readClassDef(n,c+g),h.scset=[];var y=l.readUshort(n,a);for(a+=2,d=0;d<y;d++){var _=l.readUshort(n,a);a+=2,h.scset.push(_==0?null:e.GSUB.readSubClassSet(n,c+_))}}}else if(r==6&&h.fmt==3){if(h.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,a),a+=2;for(var x=[],S=0;S<f;S++)x.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*S)));a+=2*f,d==0&&(h.backCvg=x),d==1&&(h.inptCvg=x),d==2&&(h.ahedCvg=x)}f=l.readUshort(n,a),a+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(r==7&&h.fmt==1){var w=l.readUshort(n,a);a+=2;var A=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+A)}console.debug("unsupported GSUB table LookupType",r,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(n,r){var a=e._bin.readUshort,o=r,l=[],c=a(n,r);r+=2;for(var h=0;h<c;h++){var u=a(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+u))}return l},e.GSUB.readSubClassRule=function(n,r){var a=e._bin.readUshort,o={},l=a(n,r),c=a(n,r+=2);r+=2,o.input=[];for(var h=0;h<l-1;h++)o.input.push(a(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=a.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+u))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=a.readUshort(n,r);r+=2,c==1&&h--,o[l[c]]=a.readUshorts(n,r,h),r+=2*o[l[c]].length}return h=a.readUshort(n,r),r+=2,o.subst=a.readUshorts(n,r,2*h),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=a.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+u))}return l},e.GSUB.readLigature=function(n,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(h=l.readUshort(n,r),r+=2,u=l.readShort(n,r),r+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(n,r,a,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,a,o);var h=l.readUshort(n,r);r+=2;for(var u={glyph1:[],rval:[]},f=0;f<h;f++){r+=2,a=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var p=d>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(n,r,u)}return u},e.kern.parseV1=function(n,r,a,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,h)}return h},e.kern.readFormat0=function(n,r,a){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var h=0;h<c;h++){var u=o.readUshort(n,r);r+=2;var f=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,u!=l&&(a.glyph1.push(u),a.rval.push({glyph2:[],vals:[]}));var p=a.rval[a.rval.length-1];p.glyph2.push(f),p.vals.push(d),l=u}return r},e.loca={},e.loca.parse=function(n,r,a,o){var l=e._bin,c=[],h=o.head.indexToLocFormat,u=o.maxp.numGlyphs+1;if(h==0)for(var f=0;f<u;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(h==1)for(f=0;f<u;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,a){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,a){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var p=o.readUshort(n,r);r+=2;var v=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var g=o.readUshort(n,r);r+=2;var y=o.readUshort(n,r);r+=2;var _=o.readUshort(n,r);r+=2;var x,S=u[g],w=f+12*c+_;if(p==0)x=o.readUnicode(n,w,y/2);else if(p==3&&v==0)x=o.readUnicode(n,w,y/2);else if(v==0)x=o.readASCII(n,w,y);else if(v==1)x=o.readUnicode(n,w,y/2);else if(v==3)x=o.readUnicode(n,w,y/2);else{if(p!=1)throw"unknown encoding "+v+", platformID: "+p;x=o.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var A="p"+p+","+m.toString(16);l[A]==null&&(l[A]={}),l[A][S!==void 0?S:g]=x,l[A]._lang=m}for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==1033)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==0)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==3084)return l[E];for(var E in l)if(l[E].postScriptName!=null)return l[E];for(var E in l){h=E;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(n,r,a){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,r),r+=2,a.usWeightClass=o.readUshort(n,r),r+=2,a.usWidthClass=o.readUshort(n,r),r+=2,a.fsType=o.readUshort(n,r),r+=2,a.ySubscriptXSize=o.readShort(n,r),r+=2,a.ySubscriptYSize=o.readShort(n,r),r+=2,a.ySubscriptXOffset=o.readShort(n,r),r+=2,a.ySubscriptYOffset=o.readShort(n,r),r+=2,a.ySuperscriptXSize=o.readShort(n,r),r+=2,a.ySuperscriptYSize=o.readShort(n,r),r+=2,a.ySuperscriptXOffset=o.readShort(n,r),r+=2,a.ySuperscriptYOffset=o.readShort(n,r),r+=2,a.yStrikeoutSize=o.readShort(n,r),r+=2,a.yStrikeoutPosition=o.readShort(n,r),r+=2,a.sFamilyClass=o.readShort(n,r),r+=2,a.panose=o.readBytes(n,r,10),r+=10,a.ulUnicodeRange1=o.readUint(n,r),r+=4,a.ulUnicodeRange2=o.readUint(n,r),r+=4,a.ulUnicodeRange3=o.readUint(n,r),r+=4,a.ulUnicodeRange4=o.readUint(n,r),r+=4,a.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,a.fsSelection=o.readUshort(n,r),r+=2,a.usFirstCharIndex=o.readUshort(n,r),r+=2,a.usLastCharIndex=o.readUshort(n,r),r+=2,a.sTypoAscender=o.readShort(n,r),r+=2,a.sTypoDescender=o.readShort(n,r),r+=2,a.sTypoLineGap=o.readShort(n,r),r+=2,a.usWinAscent=o.readUshort(n,r),r+=2,a.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,a){var o=e._bin;return r=e["OS/2"].version0(n,r,a),a.ulCodePageRange1=o.readUint(n,r),r+=4,a.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,a){var o=e._bin;return r=e["OS/2"].version1(n,r,a),a.sxHeight=o.readShort(n,r),r+=2,a.sCapHeight=o.readShort(n,r),r+=2,a.usDefault=o.readUshort(n,r),r+=2,a.usBreak=o.readUshort(n,r),r+=2,a.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,a){var o=e._bin;return r=e["OS/2"].version2(n,r,a),a.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,a){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(r<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=r&&r<=u[1])return u[2]+(r-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,h=n.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=r;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,h,a)}else n.glyf&&e.U._drawGlyf(r,n,a);return a},e.U._drawGlyf=function(n,r,a){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(n,r){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var h=c==o?l:c-1,u=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[h],p=1&n.flags[u],v=n.xs[c],m=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(r,v,m);continue}e.U.P.moveTo(r,n.xs[h],n.ys[h])}else d?e.U.P.moveTo(r,n.xs[h],n.ys[h]):e.U.P.moveTo(r,(n.xs[h]+v)/2,(n.ys[h]+m)/2);f?d&&e.U.P.lineTo(r,v,m):p?e.U.P.qcurveTo(r,v,m,n.xs[u],n.ys[u]):e.U.P.qcurveTo(r,v,m,(v+n.xs[u])/2,(m+n.ys[u])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var f=l.crds[u],d=l.crds[u+1];a.crds.push(f*h.a+d*h.b+h.tx),a.crds.push(f*h.c+d*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)a.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(n,r){var a=e._lctf.getInterval(r,n);return a==-1?0:r[a+2]},e.U._applySubs=function(n,r,a,o){for(var l=n.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var h,u=a.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,n[r]))!=-1){if(a.ltype==1)n[r],u.fmt==1?n[r]=n[r]+u.delta:n[r]=u.newg[h];else if(a.ltype==4)for(var f=u.vals[h],d=0;d<f.length;d++){var p=f[d],v=p.chain.length;if(!(v>l)){for(var m=!0,g=0,y=0;y<v;y++){for(;n[r+g+(1+y)]==-1;)g++;p.chain[y]!=n[r+g+(1+y)]&&(m=!1)}if(m){for(n[r]=p.nglyph,y=0;y<v+g;y++)n[r+y+1]=-1;break}}}else if(a.ltype==5&&u.fmt==2)for(var _=e._lctf.getInterval(u.cDef,n[r]),x=u.cDef[_+2],S=u.scset[x],w=0;w<S.length;w++){var A=S[w],E=A.input;if(!(E.length>l)){for(m=!0,y=0;y<E.length;y++){var b=e._lctf.getInterval(u.cDef,n[r+1+y]);if(_==-1&&u.cDef[b+2]!=E[y]){m=!1;break}}if(m){var M=A.substLookupRecords;for(d=0;d<M.length;d+=2)M[d],M[d+1]}}}else if(a.ltype==6&&u.fmt==3){if(!e.U._glsCovered(n,u.backCvg,r-u.backCvg.length)||!e.U._glsCovered(n,u.inptCvg,r)||!e.U._glsCovered(n,u.ahedCvg,r+u.inptCvg.length))continue;var L=u.lookupRec;for(w=0;w<L.length;w+=2){_=L[w];var I=o[L[w+1]];e.U._applySubs(n,r+_,I,o)}}}}},e.U._glsCovered=function(n,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var h=r[c];if(h!=-1){for(var u=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,h),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[h],c<r.length-1&&(l+=e.U.getPairAdjustment(n,h,u))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,a){n.cmds.push("M"),n.crds.push(r,a)},e.U.P.lineTo=function(n,r,a){n.cmds.push("L"),n.crds.push(r,a)},e.U.P.curveTo=function(n,r,a,o,l,c,h){n.cmds.push("C"),n.crds.push(r,a,o,l,c,h)},e.U.P.qcurveTo=function(n,r,a,o,l){n.cmds.push("Q"),n.crds.push(r,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,a,o,l){for(var c=r.stack,h=r.nStems,u=r.haveWidth,f=r.width,d=r.open,p=0,v=r.x,m=r.y,g=0,y=0,_=0,x=0,S=0,w=0,A=0,E=0,b=0,M=0,L={val:0,size:0};p<n.length;){e.CFF.getCharString(n,p,L);var I=L.val;if(p+=L.size,I=="o1"||I=="o18")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(I=="o3"||I=="o23")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(I=="o4")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),d=!0;else if(I=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(I=="o6"||I=="o7")for(var U=c.length,F=I=="o6",G=0;G<U;G++){var B=c.shift();F?v+=B:m+=B,F=!F,e.U.P.lineTo(l,v,m)}else if(I=="o8"||I=="o24"){U=c.length;for(var H=0;H+6<=U;)g=v+c.shift(),y=m+c.shift(),_=g+c.shift(),x=y+c.shift(),v=_+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,g,y,_,x,v,m),H+=6;I=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(I=="o11")break;if(I=="o1234"||I=="o1235"||I=="o1236"||I=="o1237")I=="o1234"&&(y=m,_=(g=v+c.shift())+c.shift(),M=x=y+c.shift(),w=x,E=m,v=(A=(S=(b=_+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,y,_,x,b,M),e.U.P.curveTo(l,S,w,A,E,v,m)),I=="o1235"&&(g=v+c.shift(),y=m+c.shift(),_=g+c.shift(),x=y+c.shift(),b=_+c.shift(),M=x+c.shift(),S=b+c.shift(),w=M+c.shift(),A=S+c.shift(),E=w+c.shift(),v=A+c.shift(),m=E+c.shift(),c.shift(),e.U.P.curveTo(l,g,y,_,x,b,M),e.U.P.curveTo(l,S,w,A,E,v,m)),I=="o1236"&&(g=v+c.shift(),y=m+c.shift(),_=g+c.shift(),M=x=y+c.shift(),w=x,A=(S=(b=_+c.shift())+c.shift())+c.shift(),E=w+c.shift(),v=A+c.shift(),e.U.P.curveTo(l,g,y,_,x,b,M),e.U.P.curveTo(l,S,w,A,E,v,m)),I=="o1237"&&(g=v+c.shift(),y=m+c.shift(),_=g+c.shift(),x=y+c.shift(),b=_+c.shift(),M=x+c.shift(),S=b+c.shift(),w=M+c.shift(),A=S+c.shift(),E=w+c.shift(),Math.abs(A-v)>Math.abs(E-m)?v=A+c.shift():m=E+c.shift(),e.U.P.curveTo(l,g,y,_,x,b,M),e.U.P.curveTo(l,S,w,A,E,v,m));else if(I=="o14"){if(c.length>0&&!u&&(f=c.shift()+a.nominalWidthX,u=!0),c.length==4){var Y=c.shift(),q=c.shift(),X=c.shift(),N=c.shift(),W=e.CFF.glyphBySE(a,X),Z=e.CFF.glyphBySE(a,N);e.U._drawCFF(a.CharStrings[W],r,a,o,l),r.x=Y,r.y=q,e.U._drawCFF(a.CharStrings[Z],r,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(I=="o19"||I=="o20")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,p+=h+7>>3;else if(I=="o21")c.length>2&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),m+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(I=="o22")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(I=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);g=v+c.shift(),y=m+c.shift(),_=g+c.shift(),x=y+c.shift(),v=_+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,g,y,_,x,v,m)}else if(I=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)g=v,y=m+c.shift(),v=_=g+c.shift(),m=(x=y+c.shift())+c.shift(),e.U.P.curveTo(l,g,y,_,x,v,m);else if(I=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)y=m,_=(g=v+c.shift())+c.shift(),x=y+c.shift(),v=_+c.shift(),m=x,e.U.P.curveTo(l,g,y,_,x,v,m);else if(I=="o10"||I=="o29"){var se=I=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var te=c.pop(),z=se.Subrs[te+se.Bias];r.x=v,r.y=m,r.nStems=h,r.haveWidth=u,r.width=f,r.open=d,e.U._drawCFF(z,r,a,o,l),v=r.x,m=r.y,h=r.nStems,u=r.haveWidth,f=r.width,d=r.open}}else if(I=="o30"||I=="o31"){var k=c.length,J=(H=0,I=="o31");for(H+=k-(U=-3&k);H<U;)J?(y=m,_=(g=v+c.shift())+c.shift(),m=(x=y+c.shift())+c.shift(),U-H==5?(v=_+c.shift(),H++):v=_,J=!1):(g=v,y=m+c.shift(),_=g+c.shift(),x=y+c.shift(),v=_+c.shift(),U-H==5?(m=x+c.shift(),H++):m=x,J=!0),e.U.P.curveTo(l,g,y,_,x,v,m),H+=4}else{if((I+"").charAt(0)=="o")throw console.debug("Unknown operation: "+I,n),I;c.push(I)}}}r.x=v,r.y=m,r.nStems=h,r.haveWidth=u,r.width=f,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr}function JA(){return(function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(I,U){for(var F=new t(31),G=0;G<31;++G)F[G]=U+=1<<I[G-1];var B=new i(F[30]);for(G=1;G<30;++G)for(var H=F[G];H<F[G+1];++H)B[H]=H-F[G]<<5|G;return[F,B]},l=o(n,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var p=(43690&d)>>>1|(21845&d)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,f[d]=((65280&p)>>>8|(255&p)<<8)>>>1}var v=function(I,U,F){for(var G=I.length,B=0,H=new t(U);B<G;++B)++H[I[B]-1];var Y,q=new t(U);for(B=0;B<U;++B)q[B]=q[B-1]+H[B-1]<<1;{Y=new t(1<<U);var X=15-U;for(B=0;B<G;++B)if(I[B])for(var N=B<<4|I[B],W=U-I[B],Z=q[I[B]-1]++<<W,se=Z|(1<<W)-1;Z<=se;++Z)Y[f[Z]>>>X]=N}return Y},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var g=new e(32);for(d=0;d<32;++d)g[d]=5;var y=v(m,9),_=v(g,5),x=function(I){for(var U=I[0],F=1;F<I.length;++F)I[F]>U&&(U=I[F]);return U},S=function(I,U,F){var G=U/8|0;return(I[G]|I[G+1]<<8)>>(7&U)&F},w=function(I,U){var F=U/8|0;return(I[F]|I[F+1]<<8|I[F+2]<<16)>>(7&U)},A=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(I,U,F){var G=new Error(U||A[I]);if(G.code=I,Error.captureStackTrace&&Error.captureStackTrace(G,E),!F)throw G;return G},b=function(I,U,F){var G=I.length;if(!G||F&&!F.l&&G<5)return U||new e(0);var B=!U||F,H=!F||F.i;F||(F={}),U||(U=new e(3*G));var Y,q=function(Te){var De=U.length;if(Te>De){var Ee=new e(Math.max(2*De,Te));Ee.set(U),U=Ee}},X=F.f||0,N=F.p||0,W=F.b||0,Z=F.l,se=F.d,te=F.m,z=F.n,k=8*G;do{if(!Z){F.f=X=S(I,N,1);var J=S(I,N+1,3);if(N+=3,!J){var ve=I[(ue=((Y=N)/8|0)+(7&Y&&1)+4)-4]|I[ue-3]<<8,pe=ue+ve;if(pe>G){H&&E(0);break}B&&q(W+ve),U.set(I.subarray(ue,pe),W),F.b=W+=ve,F.p=N=8*pe;continue}if(J==1)Z=y,se=_,te=9,z=5;else if(J==2){var be=S(I,N,31)+257,ge=S(I,N+10,15)+4,Pe=be+S(I,N+5,31)+1;N+=14;for(var re=new e(Pe),ie=new e(19),ne=0;ne<ge;++ne)ie[a[ne]]=S(I,N+3*ne,7);N+=3*ge;var fe=x(ie),R=(1<<fe)-1,Ae=v(ie,fe);for(ne=0;ne<Pe;){var ue,ae=Ae[S(I,N,R)];if(N+=15&ae,(ue=ae>>>4)<16)re[ne++]=ue;else{var me=0,C=0;for(ue==16?(C=3+S(I,N,3),N+=2,me=re[ne-1]):ue==17?(C=3+S(I,N,7),N+=3):ue==18&&(C=11+S(I,N,127),N+=7);C--;)re[ne++]=me}}var T=re.subarray(0,be),O=re.subarray(be);te=x(T),z=x(O),Z=v(T,te),se=v(O,z)}else E(1);if(N>k){H&&E(0);break}}B&&q(W+131072);for(var $=(1<<te)-1,Q=(1<<z)-1,j=N;;j=N){var we=(me=Z[w(I,N)&$])>>>4;if((N+=15&me)>k){H&&E(0);break}if(me||E(2),we<256)U[W++]=we;else{if(we==256){j=N,Z=null;break}var _e=we-254;if(we>264){var Re=n[ne=we-257];_e=S(I,N,(1<<Re)-1)+c[ne],N+=Re}var Be=se[w(I,N)&Q],he=Be>>>4;if(Be||E(3),N+=15&Be,O=u[he],he>3&&(Re=r[he],O+=w(I,N)&(1<<Re)-1,N+=Re),N>k){H&&E(0);break}B&&q(W+131072);for(var Me=W+_e;W<Me;W+=4)U[W]=U[W-O],U[W+1]=U[W+1-O],U[W+2]=U[W+2-O],U[W+3]=U[W+3-O];W=Me}}F.l=Z,F.p=j,F.b=W,Z&&(X=1,F.m=te,F.d=se,F.n=z)}while(!X);return W==U.length?U:(function(Te,De,Ee){(Ee==null||Ee>Te.length)&&(Ee=Te.length);var Je=new(Te instanceof t?t:Te instanceof i?i:e)(Ee-De);return Je.set(Te.subarray(De,Ee)),Je})(U,0,W)},M=new e(0),L=typeof TextDecoder<"u"&&new TextDecoder;try{L.decode(M,{stream:!0})}catch{}return s.convert_streams=function(I){var U=new DataView(I),F=0;function G(){var be=U.getUint16(F);return F+=2,be}function B(){var be=U.getUint32(F);return F+=4,be}function H(be){ve.setUint16(pe,be),pe+=2}function Y(be){ve.setUint32(pe,be),pe+=4}for(var q={signature:B(),flavor:B(),length:B(),numTables:G(),reserved:G(),totalSfntSize:B(),majorVersion:G(),minorVersion:G(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},X=0;Math.pow(2,X)<=q.numTables;)X++;X--;for(var N=16*Math.pow(2,X),W=16*q.numTables-N,Z=12,se=[],te=0;te<q.numTables;te++)se.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),Z+=16;var z,k=new Uint8Array(12+16*se.length+se.reduce((function(be,ge){return be+ge.origLength+4}),0)),J=k.buffer,ve=new DataView(J),pe=0;return Y(q.flavor),H(q.numTables),H(N),H(X),H(W),se.forEach((function(be){Y(be.tag),Y(be.origChecksum),Y(Z),Y(be.origLength),be.outOffset=Z,(Z+=be.origLength)%4!=0&&(Z+=4-Z%4)})),se.forEach((function(be){var ge,Pe=I.slice(be.offset,be.offset+be.compLength);if(be.compLength!=be.origLength){var re=new Uint8Array(be.origLength);ge=new Uint8Array(Pe,2),b(ge,re)}else re=new Uint8Array(Pe);k.set(re,be.outOffset);var ie=0;(Z=be.outOffset+be.origLength)%4!=0&&(ie=4-Z%4),k.set(new Uint8Array(ie).buffer,be.outOffset+be.origLength),z=Z+ie})),J.slice(0,z)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams}function QA(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,a=4,o=8,l=16,c=32;let h;function u(A){if(!h){const E={R:r,L:n,D:a,C:l,U:c,T:o};h=new Map;for(let b in i){let M=0;i[b].split(",").forEach(L=>{let[I,U]=L.split("+");I=parseInt(I,36),U=U?parseInt(U,36):0,h.set(M+=I,E[b]);for(let F=U;F--;)h.set(++M,E[b])})}}return h.get(A)||c}const f=1,d=2,p=3,v=4,m=[null,"isol","init","fina","medi"];function g(A){const E=new Uint8Array(A.length);let b=c,M=f,L=-1;for(let I=0;I<A.length;I++){const U=A.codePointAt(I);let F=u(U)|0,G=f;F&o||(b&(n|a|l)?F&(r|a|l)?(G=p,(M===f||M===p)&&E[L]++):F&(n|c)&&(M===d||M===v)&&E[L]--:b&(r|c)&&(M===d||M===v)&&E[L]--,M=E[I]=G,b=F,L=I,U>65535&&I++)}return E}function y(A,E){const b=[];for(let L=0;L<E.length;L++){const I=E.codePointAt(L);I>65535&&L++,b.push(s.U.codeToGlyph(A,I))}const M=A.GSUB;if(M){const{lookupList:L,featureList:I}=M;let U;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];I.forEach(B=>{if(F.test(B.tag))for(let H=0;H<B.tab.length;H++){if(G[B.tab[H]])continue;G[B.tab[H]]=!0;const Y=L[B.tab[H]],q=/^(isol|init|fina|medi)$/.test(B.tag);q&&!U&&(U=g(E));for(let X=0;X<b.length;X++)(!U||!q||m[U[X]]===B.tag)&&s.U._applySubs(b,X,Y,L)}})}return b}function _(A,E){const b=new Int16Array(E.length*3);let M=0;for(;M<E.length;M++){const F=E[M];if(F===-1)continue;b[M*3+2]=A.hmtx.aWidth[F];const G=A.GPOS;if(G){const B=G.lookupList;for(let H=0;H<B.length;H++){const Y=B[H];for(let q=0;q<Y.tabs.length;q++){const X=Y.tabs[q];if(Y.ltype===1){if(s._lctf.coverageIndex(X.coverage,F)!==-1&&X.pos){U(X.pos,M);break}}else if(Y.ltype===2){let N=null,W=L();if(W!==-1){const Z=s._lctf.coverageIndex(X.coverage,E[W]);if(Z!==-1){if(X.fmt===1){const se=X.pairsets[Z];for(let te=0;te<se.length;te++)se[te].gid2===F&&(N=se[te])}else if(X.fmt===2){const se=s.U._getGlyphClass(E[W],X.classDef1),te=s.U._getGlyphClass(F,X.classDef2);N=X.matrix[se][te]}if(N){N.val1&&U(N.val1,W),N.val2&&U(N.val2,M);break}}}}else if(Y.ltype===4){const N=s._lctf.coverageIndex(X.markCoverage,F);if(N!==-1){const W=L(I),Z=W===-1?-1:s._lctf.coverageIndex(X.baseCoverage,E[W]);if(Z!==-1){const se=X.markArray[N],te=X.baseArray[Z][se.markClass];b[M*3]=te.x-se.x+b[W*3]-b[W*3+2],b[M*3+1]=te.y-se.y+b[W*3+1];break}}}else if(Y.ltype===6){const N=s._lctf.coverageIndex(X.mark1Coverage,F);if(N!==-1){const W=L();if(W!==-1){const Z=E[W];if(x(A,Z)===3){const se=s._lctf.coverageIndex(X.mark2Coverage,Z);if(se!==-1){const te=X.mark1Array[N],z=X.mark2Array[se][te.markClass];b[M*3]=z.x-te.x+b[W*3]-b[W*3+2],b[M*3+1]=z.y-te.y+b[W*3+1];break}}}}}}}}else if(A.kern&&!A.cff){const B=L();if(B!==-1){const H=A.kern.glyph1.indexOf(E[B]);if(H!==-1){const Y=A.kern.rval[H].glyph2.indexOf(F);Y!==-1&&(b[B*3+2]+=A.kern.rval[H].vals[Y])}}}}return b;function L(F){for(let G=M-1;G>=0;G--)if(E[G]!==-1&&(!F||F(E[G])))return G;return-1}function I(F){return x(A,F)===1}function U(F,G){for(let B=0;B<3;B++)b[G*3+B]+=F[B]||0}}function x(A,E){const b=A.GDEF&&A.GDEF.glyphClassDef;return b?s.U._getGlyphClass(E,b):0}function S(...A){for(let E=0;E<A.length;E++)if(typeof A[E]=="number")return A[E]}function w(A){const E=Object.create(null),b=A["OS/2"],M=A.hhea,L=A.head.unitsPerEm,I=S(b&&b.sTypoAscender,M&&M.ascender,L),U={unitsPerEm:L,ascender:I,descender:S(b&&b.sTypoDescender,M&&M.descender,0),capHeight:S(b&&b.sCapHeight,I),xHeight:S(b&&b.sxHeight,I),lineGap:S(b&&b.sTypoLineGap,M&&M.lineGap),supportsCodePoint(F){return s.U.codeToGlyph(A,F)>0},forEachGlyph(F,G,B,H){let Y=0;const q=1/U.unitsPerEm*G,X=y(A,F);let N=0;const W=_(A,X);return X.forEach((Z,se)=>{if(Z!==-1){let te=E[Z];if(!te){const{cmds:z,crds:k}=s.U.glyphToPath(A,Z);let J="",ve=0;for(let re=0,ie=z.length;re<ie;re++){const ne=t[z[re]];J+=z[re];for(let fe=1;fe<=ne;fe++)J+=(fe>1?",":"")+k[ve++]}let pe,be,ge,Pe;if(k.length){pe=be=1/0,ge=Pe=-1/0;for(let re=0,ie=k.length;re<ie;re+=2){let ne=k[re],fe=k[re+1];ne<pe&&(pe=ne),fe<be&&(be=fe),ne>ge&&(ge=ne),fe>Pe&&(Pe=fe)}}else pe=ge=be=Pe=0;te=E[Z]={index:Z,advanceWidth:A.hmtx.aWidth[Z],xMin:pe,yMin:be,xMax:ge,yMax:Pe,path:J}}H.call(null,te,Y+W[se*3]*q,W[se*3+1]*q,N),Y+=W[se*3+2]*q,B&&(Y+=B*G)}N+=F.codePointAt(N)>65535?2:1}),Y}};return U}return function(E){const b=new Uint8Array(E,0,4),M=s._bin.readASCII(b,0,4);if(M==="wOFF")E=e(E);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return w(s.parse(E)[0])}}const $A=ra({name:"Typr Font Parser",dependencies:[ZA,JA,QA],init(s,e,t){const i=s(),n=e();return t(i,n)}});function eE(){return(function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(_){var x=_>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&_))},e.prototype.has=function(_){var x=this.buckets.get(_>>5);return x!==void 0&&(x&1<<(31&_))!=0},e.prototype.serialize=function(){var _=[];return this.buckets.forEach((function(x,S){_.push((+S).toString(36)+":"+x.toString(36))})),_.join(",")},e.prototype.deserialize=function(_){var x=this;this.buckets.clear(),_.split(",").forEach((function(S){var w=S.split(":");x.buckets.set(parseInt(w[0],36),parseInt(w[1],36))}))};var t=Math.pow(2,8),i=t-1,n=~i;function r(_){var x=(function(w){return w&n})(_).toString(16),S=(function(w){return(w&n)+t-1})(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+x+"-"+S+".json"}function a(_,x){var S=_&i,w=x.codePointAt(S/6|0);return((w=(w||48)-48)&1<<S%6)!=0}function o(_,x){var S;(S=_,S.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(w){return w.split("-").map((function(A){return parseInt(A.trim(),16)}))}))).forEach((function(w){var A=w[0],E=w[1];E===void 0&&(E=A),x(A,E)}))}function l(_,x){o(_,(function(S,w){for(var A=S;A<=w;A++)x(A)}))}var c={},h={},u=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(_){var x=u.get(_);return x||(x=new e,l(_.ranges,(function(S){return x.add(S)})),u.set(_,x)),x}var p,v=new Map;function m(_,x,S){return _[x]?x:_[S]?S:(function(w){for(var A in w)return A})(_)}function g(_,x){var S=x;if(!_.includes(S)){S=1/0;for(var w=0;w<_.length;w++)Math.abs(_[w]-x)<Math.abs(S-x)&&(S=_[w])}return S}function y(_){return p||(p=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(x){p.add(x)}))),p.has(_)}return s.CodePointSet=e,s.clearCache=function(){c={},h={}},s.getFontsForString=function(_,x){x===void 0&&(x={});var S,w=x.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(S=_)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(S)?"ja":"en");var A=x.category;A===void 0&&(A="sans-serif");var E=x.style;E===void 0&&(E="normal");var b=x.weight;b===void 0&&(b=400);var M=(x.dataUrl||f).replace(/\/$/g,""),L=new Map,I=new Uint8Array(_.length),U={},F={},G=new Array(_.length),B=new Map,H=!1;function Y(N){var W=v.get(N);return W||(W=fetch(M+"/"+N).then((function(Z){if(!Z.ok)throw new Error(Z.statusText);return Z.json().then((function(se){if(!Array.isArray(se)||se[0]!==1)throw new Error("Incorrect schema version; need 1, got "+se[0]);return se[1]}))})).catch((function(Z){if(M!==f)return H||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+Z.message),H=!0),M=f,v.delete(N),Y(N);throw Z})),v.set(N,W)),W}for(var q=function(N){var W=_.codePointAt(N),Z=r(W);G[N]=Z,c[Z]||B.has(Z)||B.set(Z,Y(Z).then((function(se){c[Z]=se}))),W>65535&&(N++,X=N)},X=0;X<_.length;X++)q(X);return Promise.all(B.values()).then((function(){B.clear();for(var N=function(Z){var se=_.codePointAt(Z),te=null,z=c[G[Z]],k=void 0;for(var J in z){var ve=F[J];if(ve===void 0&&(ve=F[J]=new RegExp(J).test(w||"en")),ve){for(var pe in k=J,z[J])if(a(se,z[J][pe])){te=pe;break}break}}if(!te){e:for(var be in z)if(be!==k){for(var ge in z[be])if(a(se,z[be][ge])){te=ge;break e}}}te||(console.debug("No font coverage for U+"+se.toString(16)),te="latin"),G[Z]=te,h[te]||B.has(te)||B.set(te,Y("font-meta/"+te+".json").then((function(Pe){h[te]=Pe}))),se>65535&&(Z++,W=Z)},W=0;W<_.length;W++)N(W);return Promise.all(B.values())})).then((function(){for(var N,W=null,Z=0;Z<_.length;Z++){var se=_.codePointAt(Z);if(W&&(y(se)||d(W).has(se)))I[Z]=I[Z-1];else{W=h[G[Z]];var te=U[W.id];if(!te){var z=W.typeforms,k=m(z,A,"sans-serif"),J=m(z[k],E,"normal"),ve=g((N=z[k])===null||N===void 0?void 0:N[J],b);te=U[W.id]=M+"/font-files/"+W.id+"/"+k+"."+J+"."+ve+".woff"}var pe=L.get(te);pe==null&&(pe=L.size,L.set(te,pe)),I[Z]=pe}se>65535&&(Z++,I[Z]=I[Z-1])}return{fontUrls:Array.from(L.keys()),chars:I}}))},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}function tE(s,e){const t=Object.create(null),i=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const h=s(c.response);h.src=a,o(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):i[a]?i[a].push(o):(i[a]=[o],n(a,c=>{c.src=a,t[a]=c,i[a].forEach(h=>h(c)),delete i[a]}))}return function(a,o,{lang:l,fonts:c=[],style:h="normal",weight:u="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),p=[];a.length||y();const v=new Map,m=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let A=0;(function E(b=0){for(let M=b,L=a.length;M<L;M++){const I=a.codePointAt(M);if(A===1&&p[d[M-1]].supportsCodePoint(I)||M>0&&/\s/.test(a[M]))d[M]=d[M-1],A===2&&(m[m.length-1][1]=M);else for(let U=d[M],F=c.length;U<=F;U++)if(U===F){const G=A===2?m[m.length-1]:m[m.length]=[M,M];G[1]=M,A=2}else{d[M]=U;const{src:G,unicodeRange:B}=c[U];if(!B||_(I,B)){const H=t[G];if(!H){r(G,()=>{E(M)});return}if(H.supportsCodePoint(I)){let Y=v.get(H);typeof Y!="number"&&(Y=p.length,p.push(H),v.set(H,Y)),d[M]=Y,A=1;break}}}I>65535&&M+1<L&&(d[M+1]=d[M],M++,A===2&&(m[m.length-1][1]=M))}g()})()}else m.push([0,a.length-1]),g();function g(){if(m.length){const x=m.map(S=>a.substring(S[0],S[1]+1)).join(`
`);e.getFontsForString(x,{lang:l||void 0,style:h,weight:u,dataUrl:f}).then(({fontUrls:S,chars:w})=>{const A=p.length;let E=0;m.forEach(M=>{for(let L=0,I=M[1]-M[0];L<=I;L++)d[M[0]+L]=w[E++]+A;E++});let b=0;S.forEach((M,L)=>{r(M,I=>{p[L+A]=I,++b===S.length&&y()})})})}else y()}function y(){o({chars:d,fonts:p})}function _(x,S){for(let w=0;w<S.length;w++){const[A,E=A]=S[w];if(A<=x&&x<=E)return!0}return!1}}}const nE=ra({name:"FontResolver",dependencies:[tE,$A,eE],init(s,e,t){return s(e,t())}});function iE(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:p,lang:v,fonts:m,style:g,weight:y,preResolvedFonts:_,unicodeFontsURL:x},S){const w=({chars:A,fonts:E})=>{let b,M;const L=[];for(let I=0;I<A.length;I++)A[I]!==M?(M=A[I],L.push(b={start:I,end:I,fontObj:E[A[I]]})):b.end=I;S(L)};_?w(_):s(p,w,{lang:v,fonts:m,style:g,weight:y,unicodeFontsURL:x})}function o({text:p="",font:v,lang:m,sdfGlyphSize:g=64,fontSize:y=400,fontWeight:_=1,fontStyle:x="normal",letterSpacing:S=0,lineHeight:w="normal",maxWidth:A=1/0,direction:E,textAlign:b="left",textIndent:M=0,whiteSpace:L="normal",overflowWrap:I="normal",anchorX:U=0,anchorY:F=0,metricsOnly:G=!1,unicodeFontsURL:B,preResolvedFonts:H=null,includeCaretPositions:Y=!1,chunkedBoundsSize:q=8192,colorRanges:X=null},N){const W=u(),Z={fontLoad:0,typesetting:0};p.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,S=+S,A=+A,w=w||"normal",M=+M,a({text:p,lang:m,style:x,weight:_,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:B,preResolvedFonts:H},se=>{Z.fontLoad=u()-W;const te=isFinite(A);let z=null,k=null,J=null,ve=null,pe=null,be=null,ge=null,Pe=null,re=0,ie=0,ne=L!=="nowrap";const fe=new Map,R=u();let Ae=M,ue=0,ae=new f;const me=[ae];se.forEach(Q=>{const{fontObj:j}=Q,{ascender:we,descender:_e,unitsPerEm:Re,lineGap:Be,capHeight:he,xHeight:Me}=j;let Te=fe.get(j);if(!Te){const ye=y/Re,Se=w==="normal"?(we-_e+Be)*ye:w*y,Oe=(Se-(we-_e)*ye)/2,xe=Math.min(Se,(we-_e)*ye),ce=(we+_e)/2*ye+xe/2;Te={index:fe.size,src:j.src,fontObj:j,fontSizeMult:ye,unitsPerEm:Re,ascender:we*ye,descender:_e*ye,capHeight:he*ye,xHeight:Me*ye,lineHeight:Se,baseline:-Oe-we*ye,caretTop:ce,caretBottom:ce-xe},fe.set(j,Te)}const{fontSizeMult:De}=Te,Ee=p.slice(Q.start,Q.end+1);let Je,V;j.forEachGlyph(Ee,y,S,(ye,Se,Oe,xe)=>{Se+=ue,xe+=Q.start,Je=Se,V=ye;const ce=p.charAt(xe),Ce=ye.advanceWidth*De,ze=ae.count;let Ve;if("isEmpty"in ye||(ye.isWhitespace=!!ce&&new RegExp(n).test(ce),ye.canBreakAfter=!!ce&&r.test(ce),ye.isEmpty=ye.xMin===ye.xMax||ye.yMin===ye.yMax||i.test(ce)),!ye.isWhitespace&&!ye.isEmpty&&ie++,ne&&te&&!ye.isWhitespace&&Se+Ce+Ae>A&&ze){if(ae.glyphAt(ze-1).glyphObj.canBreakAfter)Ve=new f,Ae=-Se;else for(let Mt=ze;Mt--;)if(Mt===0&&I==="break-word"){Ve=new f,Ae=-Se;break}else if(ae.glyphAt(Mt).glyphObj.canBreakAfter){Ve=ae.splitAt(Mt+1);const Tt=Ve.glyphAt(0).x;Ae-=Tt;for(let Ut=Ve.count;Ut--;)Ve.glyphAt(Ut).x-=Tt;break}Ve&&(ae.isSoftWrapped=!0,ae=Ve,me.push(ae),re=A)}let Qe=ae.glyphAt(ae.count);Qe.glyphObj=ye,Qe.x=Se+Ae,Qe.y=Oe,Qe.width=Ce,Qe.charIndex=xe,Qe.fontData=Te,ce===`
`&&(ae=new f,me.push(ae),Ae=-(Se+Ce+S*y)+M)}),ue=Je+V.advanceWidth*De+S*y});let C=0;me.forEach(Q=>{let j=!0;for(let we=Q.count;we--;){const _e=Q.glyphAt(we);j&&!_e.glyphObj.isWhitespace&&(Q.width=_e.x+_e.width,Q.width>re&&(re=Q.width),j=!1);let{lineHeight:Re,capHeight:Be,xHeight:he,baseline:Me}=_e.fontData;Re>Q.lineHeight&&(Q.lineHeight=Re);const Te=Me-Q.baseline;Te<0&&(Q.baseline+=Te,Q.cap+=Te,Q.ex+=Te),Q.cap=Math.max(Q.cap,Q.baseline+Be),Q.ex=Math.max(Q.ex,Q.baseline+he)}Q.baseline-=C,Q.cap-=C,Q.ex-=C,C+=Q.lineHeight});let T=0,O=0;if(U&&(typeof U=="number"?T=-U:typeof U=="string"&&(T=-re*(U==="left"?0:U==="center"?.5:U==="right"?1:c(U)))),F&&(typeof F=="number"?O=-F:typeof F=="string"&&(O=F==="top"?0:F==="top-baseline"?-me[0].baseline:F==="top-cap"?-me[0].cap:F==="top-ex"?-me[0].ex:F==="middle"?C/2:F==="bottom"?C:F==="bottom-baseline"?-me[me.length-1].baseline:c(F)*C)),!G){const Q=e.getEmbeddingLevels(p,E);z=new Uint16Array(ie),k=new Uint8Array(ie),J=new Float32Array(ie*2),ve={},ge=[1/0,1/0,-1/0,-1/0],Pe=[],Y&&(be=new Float32Array(p.length*4)),X&&(pe=new Uint8Array(ie*3));let j=0,we=-1,_e=-1,Re,Be;if(me.forEach((he,Me)=>{let{count:Te,width:De}=he;if(Te>0){let Ee=0;for(let xe=Te;xe--&&he.glyphAt(xe).glyphObj.isWhitespace;)Ee++;let Je=0,V=0;if(b==="center")Je=(re-De)/2;else if(b==="right")Je=re-De;else if(b==="justify"&&he.isSoftWrapped){let xe=0;for(let ce=Te-Ee;ce--;)he.glyphAt(ce).glyphObj.isWhitespace&&xe++;V=(re-De)/xe}if(V||Je){let xe=0;for(let ce=0;ce<Te;ce++){let Ce=he.glyphAt(ce);const ze=Ce.glyphObj;Ce.x+=Je+xe,V!==0&&ze.isWhitespace&&ce<Te-Ee&&(xe+=V,Ce.width+=V)}}const ye=e.getReorderSegments(p,Q,he.glyphAt(0).charIndex,he.glyphAt(he.count-1).charIndex);for(let xe=0;xe<ye.length;xe++){const[ce,Ce]=ye[xe];let ze=1/0,Ve=-1/0;for(let Qe=0;Qe<Te;Qe++)if(he.glyphAt(Qe).charIndex>=ce){let Mt=Qe,Tt=Qe;for(;Tt<Te;Tt++){let Ut=he.glyphAt(Tt);if(Ut.charIndex>Ce)break;Tt<Te-Ee&&(ze=Math.min(ze,Ut.x),Ve=Math.max(Ve,Ut.x+Ut.width))}for(let Ut=Mt;Ut<Tt;Ut++){const vn=he.glyphAt(Ut);vn.x=Ve-(vn.x+vn.width-ze)}break}}let Se;const Oe=xe=>Se=xe;for(let xe=0;xe<Te;xe++){const ce=he.glyphAt(xe);Se=ce.glyphObj;const Ce=Se.index,ze=Q.levels[ce.charIndex]&1;if(ze){const Ve=e.getMirroredCharacter(p[ce.charIndex]);Ve&&ce.fontData.fontObj.forEachGlyph(Ve,0,0,Oe)}if(Y){const{charIndex:Ve,fontData:Qe}=ce,Mt=ce.x+T,Tt=ce.x+ce.width+T;be[Ve*4]=ze?Tt:Mt,be[Ve*4+1]=ze?Mt:Tt,be[Ve*4+2]=he.baseline+Qe.caretBottom+O,be[Ve*4+3]=he.baseline+Qe.caretTop+O;const Ut=Ve-we;Ut>1&&h(be,we,Ut),we=Ve}if(X){const{charIndex:Ve}=ce;for(;Ve>_e;)_e++,X.hasOwnProperty(_e)&&(Be=X[_e])}if(!Se.isWhitespace&&!Se.isEmpty){const Ve=j++,{fontSizeMult:Qe,src:Mt,index:Tt}=ce.fontData,Ut=ve[Mt]||(ve[Mt]={});Ut[Ce]||(Ut[Ce]={path:Se.path,pathBounds:[Se.xMin,Se.yMin,Se.xMax,Se.yMax]});const vn=ce.x+T,Nn=ce.y+he.baseline+O;J[Ve*2]=vn,J[Ve*2+1]=Nn;const jn=vn+Se.xMin*Qe,Kn=Nn+Se.yMin*Qe,ci=vn+Se.xMax*Qe,Zt=Nn+Se.yMax*Qe;jn<ge[0]&&(ge[0]=jn),Kn<ge[1]&&(ge[1]=Kn),ci>ge[2]&&(ge[2]=ci),Zt>ge[3]&&(ge[3]=Zt),Ve%q===0&&(Re={start:Ve,end:Ve,rect:[1/0,1/0,-1/0,-1/0]},Pe.push(Re)),Re.end++;const Ot=Re.rect;if(jn<Ot[0]&&(Ot[0]=jn),Kn<Ot[1]&&(Ot[1]=Kn),ci>Ot[2]&&(Ot[2]=ci),Zt>Ot[3]&&(Ot[3]=Zt),z[Ve]=Ce,k[Ve]=Tt,X){const hi=Ve*3;pe[hi]=Be>>16&255,pe[hi+1]=Be>>8&255,pe[hi+2]=Be&255}}}}}),be){const he=p.length-we;he>1&&h(be,we,he)}}const $=[];fe.forEach(({index:Q,src:j,unitsPerEm:we,ascender:_e,descender:Re,lineHeight:Be,capHeight:he,xHeight:Me})=>{$[Q]={src:j,unitsPerEm:we,ascender:_e,descender:Re,lineHeight:Be,capHeight:he,xHeight:Me}}),Z.typesetting=u()-R,N({glyphIds:z,glyphFontIndices:k,glyphPositions:J,glyphData:ve,fontData:$,caretPositions:be,glyphColors:pe,chunkedBounds:Pe,fontSize:y,topBaseline:O+me[0].baseline,blockBounds:[T,O-C,T+re,O],visibleBounds:ge,timings:Z})})}function l(p,v){o({...p,metricsOnly:!0},m=>{const[g,y,_,x]=m.blockBounds;v({width:_-g,height:x-y})})}function c(p){let v=p.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function h(p,v,m){const g=p[v*4],y=p[v*4+1],_=p[v*4+2],x=p[v*4+3],S=(y-g)/m;for(let w=0;w<m;w++){const A=(v+w)*4;p[A]=g+S*w,p[A+1]=g+S*(w+1),p[A+2]=_,p[A+3]=x}}function u(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(p){let v=f.flyweight;return v.data=this.data,v.index=p,v},splitAt(p){let v=new f;return v.data=this.data.splice(p*d.length),v}},f.flyweight=d.reduce((p,v,m,g)=>(Object.defineProperty(p,v,{get(){return this.data[this.index*d.length+m]},set(y){this.data[this.index*d.length+m]=y}}),p),{data:null,index:0}),{typeset:o,measure:l}}const Wr=()=>(self.performance||Date).now(),uh=M0();let um;function rE(s,e,t,i,n,r,a,o,l,c,h=!0){return h?aE(s,e,t,i,n,r,a,o,l,c).then(null,u=>(um||(console.warn("WebGL SDF generation failed, falling back to JS",u),um=!0),dm(s,e,t,i,n,r,a,o,l,c))):dm(s,e,t,i,n,r,a,o,l,c)}const Al=[],sE=5;let ju=0;function w0(){const s=Wr();for(;Al.length&&Wr()-s<sE;)Al.shift()();ju=Al.length?setTimeout(w0,0):0}const aE=(...s)=>new Promise((e,t)=>{Al.push(()=>{const i=Wr();try{uh.webgl.generateIntoCanvas(...s),e({timing:Wr()-i})}catch(n){t(n)}}),ju||(ju=setTimeout(w0,0))}),oE=4,lE=2e3,fm={};let cE=0;function dm(s,e,t,i,n,r,a,o,l,c){const h="TroikaTextSDFGenerator_JS_"+cE++%oE;let u=fm[h];return u||(u=fm[h]={workerModule:ra({name:h,workerId:h,dependencies:[M0,Wr],init(f,d){const p=f().javascript.generate;return function(...v){const m=d();return{textureData:p(...v),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(s,e,t,i,n,r).then(({textureData:f,timing:d})=>{const p=Wr(),v=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)v[m*4+c]=f[m];return uh.webglUtils.renderImageData(a,v,o,l,s,e,1<<3-c),d+=Wr()-p,--u.requests===0&&(u.idleTimer=setTimeout(()=>{zA(h)},lE)),{timing:d}})}function hE(s){s._warm||(uh.webgl.isSupported(s),s._warm=!0)}const uE=uh.webglUtils.resizeWebGLCanvasWithoutClearing,Da={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},fE=new Ie;function Ls(){return(self.performance||Date).now()}const pm=Object.create(null);function A0(s,e){s=mE({},s);const t=Ls(),i=[];if(s.font&&i.push({label:"user",src:gE(s.font)}),s.font=i,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Da.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Da.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let p=s.colorRanges[d];typeof p!="number"&&(p=fE.set(p).getHex()),f[d]=p}s.colorRanges=f}Object.freeze(s);const{textureWidth:n,sdfExponent:r}=Da,{sdfGlyphSize:a}=s,o=n/a*4;let l=pm[a];if(!l){const f=document.createElement("canvas");f.width=n,f.height=a*256/o,l=pm[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new Et(f,void 0,void 0,void 0,yt,yt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,dE(l)}const{sdfTexture:c,sdfCanvas:h}=l;R0(s).then(f=>{const{glyphIds:d,glyphFontIndices:p,fontData:v,glyphPositions:m,fontSize:g,timings:y}=f,_=[],x=new Float32Array(d.length*4);let S=0,w=0;const A=Ls(),E=v.map(U=>{let F=l.glyphsByFont.get(U.src);return F||l.glyphsByFont.set(U.src,F=new Map),F});d.forEach((U,F)=>{const G=p[F],{src:B,unitsPerEm:H}=v[G];let Y=E[G].get(U);if(!Y){const{path:Z,pathBounds:se}=f.glyphData[B][U],te=Math.max(se[2]-se[0],se[3]-se[1])/a*(Da.sdfMargin*a+.5),z=l.glyphCount++,k=[se[0]-te,se[1]-te,se[2]+te,se[3]+te];E[G].set(U,Y={path:Z,atlasIndex:z,sdfViewBox:k}),_.push(Y)}const{sdfViewBox:q}=Y,X=m[w++],N=m[w++],W=g/H;x[S++]=X+q[0]*W,x[S++]=N+q[1]*W,x[S++]=X+q[2]*W,x[S++]=N+q[3]*W,d[F]=Y.atlasIndex}),y.quads=(y.quads||0)+(Ls()-A);const b=Ls();y.sdf={};const M=h.height,L=Math.ceil(l.glyphCount/o),I=Math.pow(2,Math.ceil(Math.log2(L*a)));I>M&&(console.info(`Increasing SDF texture size ${M}->${I}`),uE(h,n,I),c.dispose()),Promise.all(_.map(U=>E0(U,l,s.gpuAccelerateSDF).then(({timing:F})=>{y.sdf[U.atlasIndex]=F}))).then(()=>{_.length&&!l.contextLost&&(C0(l),c.needsUpdate=!0),y.sdfTotal=Ls()-b,y.total=Ls()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:a,sdfExponent:r,glyphBounds:x,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||hE(h)})}function E0({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Da,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(o/i)*i,f=Math.floor(h/(o/i))*i,d=e%4;return rE(i,i,s,t,c,l,n,u,f,d,a)}function dE(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(E0(r,s,!0))})}),Promise.all(i).then(()=>{C0(s),s.sdfTexture.needsUpdate=!0})})}function pE({font:s,characters:e,sdfGlyphSize:t},i){let n=Array.isArray(e)?e.join(`
`):""+e;A0({font:s,sdfGlyphSize:t,text:n},i)}function mE(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let _l;function gE(s){return _l||(_l=typeof document>"u"?{}:document.createElement("a")),_l.href=s,_l.href}function C0(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==i*n*4)&&(a=new Uint8Array(i*n*4),t.image={width:i,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,a)}}const vE=ra({name:"Typesetter",dependencies:[iE,nE,GA],init(s,e,t){return s(e,t())}}),R0=ra({name:"Typesetter",dependencies:[vE],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});R0.onMainThread;const mm={};function _E(s){let e=mm[s];return e||(e=mm[s]=new Bi(1,1,s,s).translate(.5,.5,0)),e}const xE="aTroikaGlyphBounds",gm="aTroikaGlyphIndex",yE="aTroikaGlyphColor";class bE extends Wf{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Lt,this.boundingBox=new It}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=_E(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(xE,e,4),this.updateAttributeData(gm,t,1),this.updateAttributeData(yE,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:a,max:o,sin:l,cos:c}=Math,h=n/2,u=n*2,f=Math.abs(t),d=e[0]/f,p=e[2]/f,v=r((d+h)/u)!==r((p+h)/u)?-f:a(l(d)*f,l(p)*f),m=r((d-h)/u)!==r((p-h)/u)?f:o(l(d)*f,l(p)*f),g=r((d+n)/u)!==r((p+n)/u)?f*2:o(f-c(d)*f,f-c(p)*f);i.min.set(v,e[1],t<0?-g:0),i.max.set(m,e[3],t<0?0:g)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(gm).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new cr(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const SE=`
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
`,ME=`
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
`,TE=`
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
`,wE=`
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
`;function AE(s){const e=qu(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new de},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new pt(0,0,0,0)},uTroikaClipRect:{value:new pt(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new de},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ie},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new it},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:SE,vertexTransform:ME,fragmentDefs:TE,fragmentColorTransform:wE,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(T0,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const rd=new dn({color:16777215,side:Pn,transparent:!0}),vm=8421504,_m=new Ye,xl=new D,yu=new D,Ca=[],EE=new D,bu="+x+y";function xm(s){return Array.isArray(s)?s[0]:s}let P0=()=>{const s=new At(new Bi(1,1),rd);return P0=()=>s,s},I0=()=>{const s=new At(new Bi(1,1,32,1),rd);return I0=()=>s,s};const CE={type:"syncstart"},RE={type:"synccomplete"},D0=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],PE=D0.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");let L0=class extends At{constructor(){const e=new bE;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=vm,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=bu,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(CE),A0({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(RE),e&&e()})))}onBeforeRender(e,t,i,n,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return AE(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=rd.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return xm(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return xm(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,h=0,u=0,f,d,p,v=0,m=0;if(t){let{outlineWidth:y,outlineOffsetX:_,outlineOffsetY:x,outlineBlur:S,outlineOpacity:w}=this;c=this._parsePercent(y)||0,h=Math.max(0,this._parsePercent(S)||0),f=w,v=this._parsePercent(_)||0,m=this._parsePercent(x)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(p=this.strokeColor,i.uTroikaStrokeColor.value.set(p??vm),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(v,m),i.uTroikaBlurRadius.value=h,i.uTroikaStrokeWidth.value=u,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let g=this.clipRect;if(g&&Array.isArray(g)&&g.length===4)i.uTroikaClipRect.value.fromArray(g);else{const y=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ie;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||bu;if(a!==e._orientation){let o=i.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==bu&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,f]=l;xl.set(0,0,0)[h]=c==="-"?1:-1,yu.set(0,0,0)[f]=u==="-"?-1:1,_m.lookAt(EE,xl.cross(yu),yu),o.setFromMatrix4(_m)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new de){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new de){return xl.copy(e),this.localPositionToTextCoords(this.worldToLocal(xl),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,a=n?I0():P0(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let h=0;h<c.count;h++){let u=r[0]+c.getX(h)*(r[2]-r[0]);const f=r[1]+c.getY(h)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(u/n)*n,u=Math.sin(u/n)*n),l.setXYZ(h,u,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Ca.length=0,a.raycast(e,Ca);for(let h=0;h<Ca.length;h++)Ca[h].object=this,t.push(Ca[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,PE.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}};D0.forEach(s=>{const e="_private_"+s;Object.defineProperty(L0.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new It;new Ie;new It;typeof window<"u"&&document.createElement("div");function IE(s,e){$r(e,!0);let t=ot(e,"font",3,null),i=ot(e,"characters",3,null),n=ot(e,"sdfGlyphSize",3,null),r=ot(e,"ref",15),a=ns(e,["$$slots","$$events","$$legacy","font","characters","sdfGlyphSize","ref","onsync","children"]);const o=new L0,{invalidate:l}=ia(),c=async()=>{await Mm(),o.sync(()=>{l(),e.onsync?.()})},h=["text","anchorX","anchorY","curveRadius","direction","font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","textAlign","textIndent","whiteSpace","material","color","depthOffset","clipRect","glyphGeometryDetail","sdfGlyphSize","outlineWidth","outlineColor","outlineOpacity","outlineBlur","outlineOffsetX","outlineOffsetY","strokeWidth","strokeColor","strokeOpacity","fillOpacity","characters","colorRanges"];CT(()=>h.map(f=>a[f]),()=>{c()});const u=y0();ft(()=>{u(new Promise(f=>pE({font:t(),characters:i(),sdfGlyphSize:n()},f)))}),kn(s,co({get is(){return o}},()=>a,{get font(){return t()},get characters(){return i()},get sdfGlyphSize(){return n()},get ref(){return r()},set ref(f){r(f)},children:(f,d)=>{var p=Ni(),v=Vn(p);ts(v,()=>e.children??lo,()=>({ref:o})),wn(f,p)},$$slots:{default:!0}})),es()}for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);new os(-1,1,1,-1,0,1);class DE extends nt{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}new DE;var U0={exports:{}};U0.exports=fh;U0.exports.default=fh;function fh(s,e,t){t=t||2;var i=e&&e.length,n=i?e[0]*t:s.length,r=N0(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,h,u,f,d;if(i&&(r=OE(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(var p=t;p<n;p+=t)u=s[p],f=s[p+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return ro(r,a,t,o,l,d,0),a}function N0(s,e,t,i,n){var r,a;if(n===Ju(s,e,t,i)>0)for(r=e;r<t;r+=i)a=ym(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=ym(r,s[r],s[r+1],a);return a&&dh(a,a.next)&&(ao(a),a=a.next),a}function Qr(s,e){if(!s)return s;e||(e=s);var t=s,i;do if(i=!1,!t.steiner&&(dh(t,t.next)||Rt(t.prev,t,t.next)===0)){if(ao(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ro(s,e,t,i,n,r,a){if(s){!a&&r&&GE(s,i,n,r);for(var o=s,l,c;s.prev!==s.next;){if(l=s.prev,c=s.next,r?UE(s,i,n,r):LE(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ao(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=NE(Qr(s),e,t),ro(s,e,t,i,n,r,2)):a===2&&FE(s,e,t,i,n,r):ro(Qr(s),e,t,i,n,r,1);break}}}}function LE(s){var e=s.prev,t=s,i=s.next;if(Rt(e,t,i)>=0)return!1;for(var n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<r?n<a?n:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=n>r?n>a?n:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,p=i.next;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Fs(n,o,r,l,a,c,p.x,p.y)&&Rt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function UE(s,e,t,i){var n=s.prev,r=s,a=s.next;if(Rt(n,r,a)>=0)return!1;for(var o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,g=Ku(d,p,e,t,i),y=Ku(v,m,e,t,i),_=s.prevZ,x=s.nextZ;_&&_.z>=g&&x&&x.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Fs(o,h,l,u,c,f,_.x,_.y)&&Rt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Fs(o,h,l,u,c,f,x.x,x.y)&&Rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Fs(o,h,l,u,c,f,_.x,_.y)&&Rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Fs(o,h,l,u,c,f,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function NE(s,e,t){var i=s;do{var n=i.prev,r=i.next.next;!dh(n,r)&&F0(n,i,i.next,r)&&so(n,r)&&so(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),ao(i),ao(i.next),i=s=r),i=i.next}while(i!==s);return Qr(i)}function FE(s,e,t,i,n,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&XE(a,o)){var l=O0(a,o);a=Qr(a,a.next),l=Qr(l,l.next),ro(a,e,t,i,n,r,0),ro(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function OE(s,e,t,i){var n=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=N0(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(WE(c));for(n.sort(BE),r=0;r<n.length;r++)t=kE(n[r],t);return t}function BE(s,e){return s.x-e.x}function kE(s,e){var t=zE(s,e);if(!t)return e;var i=O0(t,s);return Qr(i,i.next),Qr(t,t.next)}function zE(s,e){var t=e,i=s.x,n=s.y,r=-1/0,a;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){var o=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=i&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===i))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,u=1/0,f;t=a;do i>=t.x&&t.x>=c&&i!==t.x&&Fs(n<h?i:r,n,c,h,n<h?r:i,n,t.x,t.y)&&(f=Math.abs(n-t.y)/(i-t.x),so(t,s)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&VE(a,t)))&&(a=t,u=f)),t=t.next;while(t!==l);return a}function VE(s,e){return Rt(s.prev,s,e.prev)<0&&Rt(e.next,s,s.next)<0}function GE(s,e,t,i){var n=s;do n.z===0&&(n.z=Ku(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,HE(n)}function HE(s){var e,t,i,n,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(a>1);return s}function Ku(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function WE(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Fs(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function XE(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!YE(s,e)&&(so(s,e)&&so(e,s)&&qE(s,e)&&(Rt(s.prev,s,e.prev)||Rt(s,e.prev,e))||dh(s,e)&&Rt(s.prev,s,s.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function dh(s,e){return s.x===e.x&&s.y===e.y}function F0(s,e,t,i){var n=bl(Rt(s,e,t)),r=bl(Rt(s,e,i)),a=bl(Rt(t,i,s)),o=bl(Rt(t,i,e));return!!(n!==r&&a!==o||n===0&&yl(s,t,e)||r===0&&yl(s,i,e)||a===0&&yl(t,s,i)||o===0&&yl(t,e,i))}function yl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function bl(s){return s>0?1:s<0?-1:0}function YE(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&F0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function so(s,e){return Rt(s.prev,s,s.next)<0?Rt(s,e,s.next)>=0&&Rt(s,s.prev,e)>=0:Rt(s,e,s.prev)<0||Rt(s,s.next,e)<0}function qE(s,e){var t=s,i=!1,n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function O0(s,e){var t=new Zu(s.i,s.x,s.y),i=new Zu(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ym(s,e,t,i){var n=new Zu(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ao(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}fh.deviation=function(s,e,t,i){var n=e&&e.length,r=n?e[0]*t:s.length,a=Math.abs(Ju(s,0,r,t));if(n)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:s.length;a-=Math.abs(Ju(s,c,h,t))}var u=0;for(o=0;o<i.length;o+=3){var f=i[o]*t,d=i[o+1]*t,p=i[o+2]*t;u+=Math.abs((s[f]-s[p])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[p+1]-s[f+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function Ju(s,e,t,i){for(var n=0,r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}fh.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},i=0,n=0;n<s.length;n++){for(var r=0;r<s[n].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[n][r][a]);n>0&&(i+=s[n-1].length,t.holes.push(i))}return t};new de;new de;var bm;(s=>{function e(n){let r=n.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(n){if(n.length<=1)return n.slice();let r=[];for(let o=0;o<n.length;o++){const l=n[o];for(;r.length>=2;){const c=r[r.length-1],h=r[r.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=n.length-1;o>=0;o--){const l=n[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function i(n,r){return n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0}s.POINT_COMPARATOR=i})(bm||(bm={}));new dn;new D;new Ye;new Oi;new Lt;new It;new D;new D;const Qi=Math.PI/180;var jE=oo("<!> <!>",1),KE=oo("<!> <!> <!> <!> <!> <!> <!> <!>",1);function ZE(s,e){$r(e,!1);const i=new URLSearchParams(window.location.search).get("text")||`Kunibert\r
and Oscar`;z0();var n=KE(),r=Vn(n);kn.PerspectiveCamera(r,{makeDefault:!0,position:[0,1,1],children:(d,p)=>{PA(d,{target0:[0,1,0],enableDamping:!0,minPolarAngle:Math.PI*-.15})},$$slots:{default:!0}});var a=Ri(r,2);kn.AmbientLight(a,{color:"#bbb"});var o=Ri(a,2);kn.DirectionalLight(o,{color:"#fff",intensity:.6,position:[-.5,1,1]});var l=Ri(o,2);CA(l,{type:"polar",gridSize:2,maxRadius:13,sectionSize:.15,cellDividers:9,cellSize:.075});var c=Ri(l,2);{let d=Hi(()=>-90*Qi);kn.Mesh(c,{"position.y":-.01,get"rotation.x"(){return He(d)},children:(p,v)=>{var m=jE(),g=Vn(m);kn.CircleGeometry(g,{args:[1,21]});var y=Ri(g,2);kn.MeshBasicMaterial(y,{color:"blue"}),wn(p,m)},$$slots:{default:!0}})}var h=Ri(c,2);{let d=Hi(()=>-5*Qi),p=Hi(()=>215*Qi),v=Hi(()=>-5*Qi);im(h,{url:"./kunibert.gltf","position.x":-.05,"position.y":-.05,"position.z":-.2,get"rotation.x"(){return He(d)},get"rotation.y"(){return He(p)},get"rotation.z"(){return He(v)}})}var u=Ri(h,2);{let d=Hi(()=>180*Qi),p=Hi(()=>-45*Qi),v=Hi(()=>-5*Qi);im(u,{url:"./oscar.gltf","position.x":0,"position.y":.15,get"rotation.x"(){return He(d)},get"rotation.y"(){return He(p)},get"rotation.z"(){return He(v)},scale:.6})}var f=Ri(u,2);{let d=Hi(()=>-90*Qi);IE(f,{get text(){return i},color:"white",textAlign:"center",anchorX:"50%",anchorY:"100%",fontSize:.1,"position.z":.4,get"rotation.x"(){return He(d)}})}wn(s,n),es()}var JE=oo('<div class="viewport svelte-1uha8ag"><!></div>');function cC(s){var e=JE(),t=Su(e);ZT(t,{children:(i,n)=>{ZE(i,{})},$$slots:{default:!0}}),Mu(e),wn(s,e)}export{cC as component};
