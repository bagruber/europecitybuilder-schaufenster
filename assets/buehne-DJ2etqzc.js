import{$ as e,$t as t,B as n,C as r,D as i,Dt as a,E as o,Et as s,F as c,Ft as l,Gt as u,Ht as d,I as f,J as p,K as m,Kt as h,L as g,Mt as _,Nt as v,O as y,Ot as b,P as x,Pt as S,Qt as C,R as w,Rt as T,S as E,T as D,Ut as O,V as k,X as A,Xt as j,Z as M,Zt as N,_ as P,_t as F,a as I,at as L,b as ee,bt as te,c as ne,ct as R,dt as z,en as B,f as re,ft as ie,g as ae,gt as oe,h as se,ht as V,jt as ce,k as le,kt as ue,lt as de,mt as fe,n as pe,nn as H,nt as me,pt as U,qt as W,r as he,rt as ge,t as _e,tn as G,tt as K,u as ve,v as ye,vt as q,w as J,x as be,y as xe,yt as Se,zt as Y}from"./natur-schau-Bp-LoHIe.js";var X={fuge:7103318,stein:[[10721931,4],[9800830,4],[11314068,3],[9208694,2],[11575684,1]],rinne:[[8748143,3],[9208694,2]],bord:[[9275259,3],[8617329,1]],platte:[[12367012,3],[12959149,2],[11709081,2]],erde:10782808,spur:8284746,gras:[[9087831,3],[8363855,2],[9877088,1]],platz:[[11971477,4],[11181961,3],[12629407,2],[10326656,1]]},Z={fuge:.06,stein:.14,rinne:.12,platte:.16,bord:.18,erde:.08,spur:.09,gras:.095};function Ce(e=1){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};return n.wahl=e=>{let t=e.reduce((e,t)=>e+t[1],0)*n();for(let[n,r]of e)if((t-=r)<=0)return n;return e[e.length-1][0]},n}var we=(e,t)=>Array.isArray(e)?t.wahl(e):e,Te=class{constructor(){this.xz=[],this.h=[],this.rgb=[]}get leer(){return this.h.length===0}dreieck(e,t,n,r,i){(t[1]-e[1])*(n[0]-e[0])-(t[0]-e[0])*(n[1]-e[1])<0&&([t,n]=[n,t]);let a=new R(i);for(let i of[e,t,n])this.xz.push(i[0],i[1]),this.h.push(r),this.rgb.push(a.r,a.g,a.b)}viereck(e,t,n){this.dreieck(e[0],e[1],e[2],t,n),this.dreieck(e[0],e[2],e[3],t,n)}vieleck(e,t,n){for(let r=1;r<e.length-1;r++)this.dreieck(e[0],e[r],e[r+1],t,n)}geometrie(e,t=1.2){let n=[],r=[],i=(a,o,s,c,l)=>{let u=[Math.hypot(o[0]-a[0],o[1]-a[1]),Math.hypot(s[0]-o[0],s[1]-o[1]),Math.hypot(a[0]-s[0],a[1]-s[1])],d=u.indexOf(Math.max(...u));if(u[d]>t){let[e,t,n]=[[a,o,s],[o,s,a],[s,a,o]][d],r=[(e[0]+t[0])/2,(e[1]+t[1])/2];i(e,r,n,c,l),i(r,t,n,c,l)}else for(let t of[a,o,s])n.push(t[0],e(t[0],t[1])+c,t[1]),r.push(...l)};for(let e=0;e<this.h.length;e+=3){let t=e=>[this.xz[2*e],this.xz[2*e+1]];i(t(e),t(e+1),t(e+2),this.h[e],this.rgb.slice(3*e,3*e+3))}let a=new L;return a.setAttribute(`position`,new V(n,3)),a.setAttribute(`color`,new V(r,3)),a}},Q=(e,t,n,r)=>[e[0]+t[0]*n-t[1]*r,e[1]+t[1]*n+t[0]*r];function Ee(e,t,n,r,i,a,{laenge:o,breite:s,h:c,farben:l,rnd:u,fuge:d=.06,wackel:f=.03}){let p=Math.max(1,Math.round(r/o)),m=r/p,h=Math.max(1,Math.round((a-i)/s)),g=(a-i)/h,_=()=>(u()-.5)*2*f;for(let r=0;r<p;r++){let o=r*m+d/2,s=(r+1)*m-d/2,f=r%2?g/2:0;for(let r=-1;r<h;r++){let p=Math.max(i,i+r*g+f)+d/2,m=Math.min(a,i+(r+1)*g+f)-d/2;m-p<g*.3||e.viereck([Q(t,n,o+_(),p+_()),Q(t,n,s+_(),p+_()),Q(t,n,s+_(),m+_()),Q(t,n,o+_(),m+_())],c,we(l,u))}}}var De=(e,t)=>Array.from({length:6},(n,r)=>{let i=Math.PI/6+r*Math.PI/3;return[e[0]+Math.cos(i)*t,e[1]+Math.sin(i)*t]}),Oe=(e,t)=>(Math.round((Math.atan2(t,e)-Math.PI/3)/(Math.PI/3))%6+6)%6;function ke(e,t,n,{verband:r=`reihe`,platten:i=[],rinnen:a=[],nah:o=!0,rnd:s=Ce(1)}={}){let c=De(t,n),l=Math.sqrt(f().ziegel),u=.95*l,d=.14,p=.32*l,m=r===`diagonal`?X.platz:X.stein,h=(e,t,n)=>{let r=c[e],i=c[(e+1)%6],a=Math.hypot(i[0]-r[0],i[1]-r[1]);return((i[0]-r[0])*(n-r[1])-(i[1]-r[1])*(t-r[0]))/a},g=e=>{let t=c[e],n=c[(e+1)%6];return[(t[0]+n[0])/2,(t[1]+n[1])/2]};e.vieleck(c,Z.fuge,o?X.fuge:m[0][0]);for(let t of i){let n=c[t],r=c[(t+1)%6],i=Math.hypot(r[0]-n[0],r[1]-n[1]),a=[(r[0]-n[0])/i,(r[1]-n[1])/i];o?(Ee(e,n,a,i,0,u,{laenge:.8*l,breite:u,h:Z.platte,farben:X.platte,rnd:s,fuge:.05,wackel:.015}),Ee(e,n,a,i,u,u+d,{laenge:.5*l,breite:d,h:Z.bord,farben:X.bord,rnd:s,fuge:.04,wackel:.01})):e.viereck([Q(n,a,0,0),Q(n,a,i,0),Q(n,a,i,u),Q(n,a,0,u)],Z.platte,X.platte[0][0])}let _=a.map(e=>{let n=g(e),r=Math.hypot(n[0]-t[0],n[1]-t[1]);return{u:[(n[0]-t[0])/r,(n[1]-t[1])/r],L:r}});for(let{u:n,L:r}of _)o?Ee(e,t,n,r+.05,-p,p,{laenge:.72*l,breite:2*p,h:Z.rinne,farben:X.rinne,rnd:s,wackel:.02}):e.viereck([Q(t,n,0,-p),Q(t,n,r,-p),Q(t,n,r,p),Q(t,n,0,p)],Z.rinne,X.rinne[0][0]);if(!o)return;_.length&&e.vieleck(Array.from({length:8},(e,n)=>[t[0]+Math.cos(n*Math.PI/4)*p*1.2,t[1]+Math.sin(n*Math.PI/4)*p*1.2]),Z.rinne+.005,X.rinne[0][0]);let v=(e,n)=>{for(let t=0;t<6;t++){let r=h(t,e,n);if(r<0||i.includes(t)&&r<u+d+.04)return!1}for(let{u:r,L:i}of _){let a=e-t[0],o=n-t[1],s=a*r[0]+o*r[1];if(s>-p&&s<i+.1&&Math.abs(-a*r[1]+o*r[0])<p+.06)return!1}return!0},y=e=>(s()-.5)*2*e,b=.06;if(r===`diagonal`){let r=.66*l,i=Math.SQRT1_2,a=r/2-b/2,o=(e,t)=>[(e-t)*i,(e+t)*i],c=Math.ceil(n*1.5/r),u=Math.round((t[0]+t[1])*i/r),d=Math.round((t[1]-t[0])*i/r);for(let t=u-c;t<=u+c;t++)for(let n=d-c;n<=d+c;n++){let[i,c]=o(t*r,n*r);if(!v(i,c))continue;let l=(e,i)=>o(t*r+e+y(.02),n*r+i+y(.02));e.viereck([l(-a,-a),l(a,-a),l(a,a),l(-a,a)],Z.stein,we(m,s))}return}let x=.62*l,S=.5*l;for(let r=Math.floor((t[1]-n)/S);r<=Math.ceil((t[1]+n)/S);r++){let i=(r+.5)*S,a=(r%2+2)%2*.5;for(let r=Math.floor((t[0]-n)/x)-1;r<=Math.ceil((t[0]+n)/x);r++){let t=(r+.5+a)*x;if(!v(t,i))continue;let n=x/2-b/2,o=S/2-b/2;e.viereck([[t-n+y(.03),i-o+y(.03)],[t+n+y(.03),i-o+y(.03)],[t+n+y(.03),i+o+y(.03)],[t-n+y(.03),i+o+y(.03)]],Z.stein,we(m,s))}}}var Ae={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},je=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Me=new S(-1,1,1,-1,0,1),Ne=new class extends L{constructor(){super(),this.setAttribute(`position`,new V([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new V([0,2,0,0,2,0],2))}},Pe=class{constructor(e){this._mesh=new b(Ne,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Me)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Fe=class extends je{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof h?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=N.clone(e.uniforms),this.material=new h({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pe(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ie=class extends je{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Le=class extends je{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Re=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new H(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:q}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fe(Ae),this.copyPass.material.blending=0,this.timer=new j}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ie!==void 0&&(r instanceof Ie?n=!0:r instanceof Le&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},ze=class extends je{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new R}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Be={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new B},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new a},cameraProjectionMatrixInverse:{value:new a},cameraWorldMatrix:{value:new a},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new G(-1,-1,-1)},sceneBoxMax:{value:new G(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ve={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},He={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ue(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=We(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new G(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new z(i,t,t);return a.wrapS=d,a.wrapT=d,a.needsUpdate=!0,a}function We(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Ge={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Ke(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new B},cameraProjectionMatrixInverse:{value:new a},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ke(e,t,n){let r=qe(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function qe(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new G(Math.cos(a),Math.sin(a),o))}return r}var Je=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,M=_-1+3*d,N=v-1+3*d,P=c&255,F=l&255,I=u&255,L=this.perm[P+this.perm[F+this.perm[I]]]%12,ee=this.perm[P+y+this.perm[F+b+this.perm[I+x]]]%12,te=this.perm[P+S+this.perm[F+C+this.perm[I+w]]]%12,ne=this.perm[P+1+this.perm[F+1+this.perm[I+1]]]%12,R=.6-g*g-_*_-v*v;R<0?r=0:(R*=R,r=R*R*this._dot3(this.grad3[L],g,_,v));let z=.6-T*T-E*E-D*D;z<0?i=0:(z*=z,i=z*z*this._dot3(this.grad3[ee],T,E,D));let B=.6-O*O-k*k-A*A;B<0?a=0:(B*=B,a=B*B*this._dot3(this.grad3[te],O,k,A));let re=.6-j*j-M*M-N*N;return re<0?o=0:(re*=re,o=re*re*this._dot3(this.grad3[ne],j,M,N)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,M=T>D?2:0,N=+(E>D),P=O+k+A+j+M+N,F=+(a[P][0]>=3),I=+(a[P][1]>=3),L=+(a[P][2]>=3),ee=+(a[P][3]>=3),te=+(a[P][0]>=2),ne=+(a[P][1]>=2),R=+(a[P][2]>=2),z=+(a[P][3]>=2),B=+(a[P][0]>=1),re=+(a[P][1]>=1),ie=+(a[P][2]>=1),ae=+(a[P][3]>=1),oe=w-F+c,se=T-I+c,V=E-L+c,ce=D-ee+c,le=w-te+2*c,ue=T-ne+2*c,de=E-R+2*c,fe=D-z+2*c,pe=w-B+3*c,H=T-re+3*c,me=E-ie+3*c,U=D-ae+3*c,W=w-1+4*c,he=T-1+4*c,ge=E-1+4*c,_e=D-1+4*c,G=h&255,K=g&255,ve=_&255,ye=v&255,q=o[G+o[K+o[ve+o[ye]]]]%32,J=o[G+F+o[K+I+o[ve+L+o[ye+ee]]]]%32,be=o[G+te+o[K+ne+o[ve+R+o[ye+z]]]]%32,xe=o[G+B+o[K+re+o[ve+ie+o[ye+ae]]]]%32,Se=o[G+1+o[K+1+o[ve+1+o[ye+1]]]]%32,Y=.6-w*w-T*T-E*E-D*D;Y<0?l=0:(Y*=Y,l=Y*Y*this._dot4(i[q],w,T,E,D));let X=.6-oe*oe-se*se-V*V-ce*ce;X<0?u=0:(X*=X,u=X*X*this._dot4(i[J],oe,se,V,ce));let Z=.6-le*le-ue*ue-de*de-fe*fe;Z<0?d=0:(Z*=Z,d=Z*Z*this._dot4(i[be],le,ue,de,fe));let Ce=.6-pe*pe-H*H-me*me-U*U;Ce<0?f=0:(Ce*=Ce,f=Ce*Ce*this._dot4(i[xe],pe,H,me,U));let we=.6-W*W-he*he-ge*ge-_e*_e;return we<0?p=0:(we*=we,p=we*we*this._dot4(i[Se],W,he,ge,_e)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Ye=class e extends je{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ue(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new H(this.width,this.height,{type:q,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new h({defines:Object.assign({},Be.defines),uniforms:N.clone(Be.uniforms),vertexShader:Be.vertexShader,fragmentShader:Be.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ce,this.normalMaterial.blending=0,this.pdMaterial=new h({defines:Object.assign({},Ge.defines),uniforms:N.clone(Ge.uniforms),vertexShader:Ge.vertexShader,fragmentShader:Ge.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new h({defines:Object.assign({},Ve.defines),uniforms:N.clone(Ve.uniforms),vertexShader:Ve.vertexShader,fragmentShader:Ve.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new h({uniforms:N.clone(Ae.uniforms),vertexShader:Ae.vertexShader,fragmentShader:Ae.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new h({uniforms:N.clone(He.uniforms),vertexShader:He.vertexShader,fragmentShader:He.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Pe(null),this._originalClearColor=new R,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,n){e===void 0?(this.depthTexture=new U,this.depthTexture.format=ie,this.depthTexture.type=t,this.normalRenderTarget=new H(this.width,this.height,{minFilter:v,magFilter:v,type:q,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=n,this._renderGBuffer=!1);let r=+!!this.normalTexture,i=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=r,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=r,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ke(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Je,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new z(r,e,e,T,C);return i.wrapS=d,i.wrapT=d,i.needsUpdate=!0,i}};Ye.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Xe={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new R(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Ze=class e extends je{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new B(256,256):new B(e.x,e.y),this.clearColor=new R(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new H(i,a,{type:q,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new H(i,a,{type:q,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new H(i,a,{type:q,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Xe;this.highPassUniforms=N.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new h({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=N.clone(Ae.uniforms),this.blendMaterial=new h({uniforms:this.copyUniforms,vertexShader:Ae.vertexShader,fragmentShader:Ae.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new R,this._oldClearAlpha=1,this._basic=new ue,this._fsQuad=new Pe(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new h({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new h({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ze.BlurDirectionX=new B(1,0),Ze.BlurDirectionY=new B(0,1);var Qe={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},$e=class extends je{constructor(){super(),this.isOutputPass=!0,this.uniforms=N.clone(Qe.uniforms),this.material=new Y({name:Qe.name,uniforms:this.uniforms,vertexShader:Qe.vertexShader,fragmentShader:Qe.fragmentShader}),this._fsQuad=new Pe(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},et={tag:{himmel:[11848172,8819292,.95],sonne:[16767398,3.4]},nacht:{himmel:[6059696,2764604,.8],sonne:[10336494,1.15]}},tt={sonne:16759922,himmel:14206632},nt={sonne:15922940,himmel:14082286},rt={tag:[14214116,7117010],herbst:[15259320,8822720],winter:[13818596,10662600],nacht:[2305608,527900]},it={fruehling:40,sommer:47,herbst:33,winter:26},at={x:0,y:0,z:0,w:95};for(let e of[`lambert`,`phong`,`standard`,`physical`,`toon`])me[e].uniforms.wolken={value:at};K.lights_pars_begin+=`
uniform vec4 wolken;
float wolkenWert( vec2 p ) {
	vec2 i = floor( p ), f = fract( p ), u = f * f * ( 3.0 - 2.0 * f );
	vec4 h = fract( sin( vec4( dot( i, vec2( 127.1, 311.7 ) ), dot( i + vec2( 1.0, 0.0 ), vec2( 127.1, 311.7 ) ), dot( i + vec2( 0.0, 1.0 ), vec2( 127.1, 311.7 ) ), dot( i + 1.0, vec2( 127.1, 311.7 ) ) ) ) * 43758.5453 );
	return mix( mix( h.x, h.y, u.x ), mix( h.z, h.w, u.x ), u.y );
}
float wolkenSchatten( vec3 ansicht, vec3 richtung ) {
	if ( wolken.z <= 0.0 ) return 1.0;
	mat3 zurueck = transpose( mat3( viewMatrix ) );
	vec3 welt = zurueck * ( ansicht - viewMatrix[ 3 ].xyz ), sonne = zurueck * richtung;
	vec2 p = ( welt.xz - sonne.xz / max( sonne.y, 0.15 ) * welt.y + wolken.xy ) / wolken.w;
	float n = wolkenWert( p ) * 0.62 + wolkenWert( p * 2.3 + 7.1 ) * 0.38;
	return 1.0 - wolken.z * smoothstep( 0.54, 0.72, n );
}`;{let e=K.lights_fragment_begin,t=e.indexOf(`directionalLight = directionalLights[ i ];`),n=e.indexOf(`RE_Direct(`,t);K.lights_fragment_begin=e.slice(0,n)+`#if ( UNROLLED_LOOP_INDEX == 0 )
		directLight.color *= wolkenSchatten( geometryPosition, directLight.direction );
		#endif

		`+e.slice(n)}function ot({renderer:e,szene:t,kamera:r,sonne:i,hell:a,stand:o,klein:c}){let l=new URLSearchParams(location.search),u=l.has(`nachbearbeitung`)?l.get(`nachbearbeitung`)!==`0`:!c,d={richtung:i.position.clone(),hintergrund:null},f=new F;f.visible=!1,t.add(f);let p=new h({uniforms:{unten:{value:new R},oben:{value:new R}},vertexShader:`varying float vHoehe;
void main() { vHoehe = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 unten;
uniform vec3 oben;
varying float vHoehe;
void main() {
  gl_FragColor = vec4(mix(unten, oben, pow(smoothstep(0.0, 0.4, vHoehe), 0.7)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,side:1,depthWrite:!1,fog:!1}),m=new b(new W(1400,32,16),p);m.frustumCulled=!1,m.renderOrder=-1,f.add(m);let v=new oe(16777215,300,1400),y=(e,t,n)=>new R(e).lerp(new R(t),n),x=new O(200,1700,72,18).rotateX(-Math.PI/2).translate(0,-.08,0),S=new b(J(x,se.wiese,ye.get(se.wiese)),P);S.receiveShadow=!0,f.add(S);let C=new _({color:16777215,flatShading:!0,roughness:1,emissive:2765120}),w=g(31),T=[];for(let e=0;e<16;e++){let e=[],t=3+Math.floor(w()*3);for(let n=0;n<t;n++){let r=new te(1,0),i=.55+w()*.5;r.scale(i,i*.6,i).translate((n-(t-1)/2)*.8+(w()-.5)*.4,i*.15,(w()-.5)*.7),e.push(r)}let r=new b(n(e),C);r.scale.setScalar(28+w()*40),T.push({m:r,R:620+w()*730,phi:w()*Math.PI*2,y:190+w()*80}),f.add(r)}let E=null,D=null,k=null;function A(){let{width:n,height:i}=e.getSize(new B);E=new Re(e,new H(n,i,{type:q,samples:4,depthTexture:new U(n,i)})),E.setPixelRatio(e.getPixelRatio()),E.setSize(n,i),E.addPass(new ze(t,r)),D=new Ye(t,r,n,i,void 0,{radius:2.4,distanceExponent:1.3,thickness:1.5,scale:1.1,samples:16},{radius:6,samples:8}),D.setGBuffer(E.readBuffer.depthTexture);let a=D.setSize.bind(D);D.setSize=(e,t)=>a(Math.max(1,Math.round(e/2)),Math.max(1,Math.round(t/2))),D.blendIntensity=1,E.addPass(D),k=new Ze(new B(n,i),.7,.45,.7),E.addPass(k),E.addPass(new $e)}let j=!1,M=it[o.jahr];function N(e){j=e,f.visible=j,t.fog=j?v:null,j&&t.background&&(d.hintergrund=t.background),t.background=j?null:d.hintergrund,at.z=0,j||i.position.copy(d.richtung),j&&u&&!E&&A()}let I=new R,L=new R,ee=new G;function ne(e){if(!j)return;let t=et[o.licht],n=o.licht===`nacht`,c=xe.uHerbst.value,l=xe.uSchnee.value;I.setHex(t.sonne[0]),L.setHex(t.himmel[0]),n||(I.lerp(new R(tt.sonne),c*(1-l)).lerp(new R(nt.sonne),l),L.lerp(new R(tt.himmel),c*(1-l)*.6).lerp(new R(nt.himmel),l)),i.color.copy(I),i.intensity=t.sonne[1]*(n?1:1-.25*l),a.color.copy(L),a.groundColor.setHex(t.himmel[1]),a.intensity=t.himmel[2]*(n?1:1+.25*l),M+=(it[o.jahr]-M)*Math.min(1,e*.8);let u=Math.atan2(d.richtung.z,d.richtung.x),f=s.degToRad(M);i.position.set(Math.cos(u)*Math.cos(f),Math.sin(f),Math.sin(u)*Math.cos(f)).multiplyScalar(d.richtung.length());let[h,g]=n?rt.nacht:[0,1].map(e=>y(rt.tag[e],rt.herbst[e],c*(1-l)).lerp(new R(rt.winter[e]),l));p.uniforms.unten.value.set(h),p.uniforms.oben.value.set(g),v.color.set(h),m.position.copy(r.position),r.getWorldDirection(ee);let _=ee.y<-.05?Math.min(900,-r.position.y/ee.y):900;v.near=_*.7+30,v.far=Math.min(1400,v.near+340+_*1.3);for(let t of T)t.phi+=2.5/t.R*e,t.m.position.set(Math.cos(t.phi)*t.R,t.y,Math.sin(t.phi)*t.R);at.x=(at.x-3.2*e)%(at.w*64),at.y=(at.y-1.9*e)%(at.w*64),at.z=n?.3:.55+.1*l,k&&(k.enabled=n)}function z(n){if(!j||!E)return e.render(t,r);D.gtaoMaterial.uniforms.tDepth.value=D.pdMaterial.uniforms.tDepth.value=E.readBuffer.depthTexture,E.render(n)}function re(e,t){E?.setSize(e,t)}return{schalte:N,jedesBild:ne,render:z,groesse:re,get an(){return j}}}w(`niedlich`);var st=10/Math.sqrt(3),ct=(e,t)=>`${e},${t}`,lt=e=>e.split(`,`).map(Number),$=e=>{let[t,n]=lt(e);return new B(10*(t+n/2),1.5*st*n)},ut=(e,t)=>(Math.abs(e)+Math.abs(t)+Math.abs(e+t))/2,dt=(e,[t,n]=[0,0])=>{let r=[];for(let i=-e;i<=e;i++)for(let a=-e;a<=e;a++)ut(a,i)<=e&&r.push(ct(t+a,n+i));return r};function ft(e,t){let n=t/(1.5*st),r=e/10-n/2,i=-r-n,a=Math.round(r),o=Math.round(n),s=Math.round(i),c=Math.abs(a-r),l=Math.abs(o-n),u=Math.abs(s-i);return c>l&&c>u?a=-o-s:l>u&&(o=-a-s),ct(a,o)}var pt=[[`gewaesser`,-8,16,6],[`wald`,-9,-7,4],[`hof`,15,-8,5]],mt=new Set(pt.flatMap(([,e,t,n])=>dt(n,[e,t]))),ht=[[-11,0,0,23],[-1,-1,0,2],[2,-1,0,2],[0,-2,0,4],[-5,-6,0,17],[-4,-7,5,17],[11,-7,4,15]],gt=new Set(ht.flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>ct(e+i*k[n][0],t+i*k[n][1]))).filter(e=>!mt.has(e))),_t=`1,-1`,vt=new Set([...dt(1,lt(_t)),...ht.slice(1,4).flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>ct(e+i*k[n][0],t+i*k[n][1])))]),yt={detail:1,modelle:new Map};function bt(t){let n=g(t),r=m({radius:11});for(let e of mt)r.felder.delete(e);for(let e of gt)r.strassen.add(e);A(r,_t,ve(`wahrzeichen`,n,{...yt,typ:`mariensaeule`}),1);let i=[...I],a=[he],o=n()<.5?3:4;for(;a.length<o;)a.push(...i.splice(Math.floor(n()*i.length),1));let s=[...a.map(e=>ve(`wahrzeichen`,n,{...yt,typ:e})),...[0,1,2].map(()=>ve(`betrieb`,n,yt)),...[6,6,5,5,3].map(e=>({art:`wohnen`,stufe:e}))];e(r,s,n);for(let e of[...r.haeuser.values()])e.art===`wohnen`&&(e.stufe===0||e.stufe===4)&&n()<Math.max(0,ut(...lt(e.vorn[0]))-4)/14&&p(r,e.id);for(let e=0;e<2;e++)for(let e of[...r.haeuser.values()])e.art===`wohnen`&&r.haeuser.has(e.id)&&n()<.5&&M(r,e.id);return r}function xt(e){let t=Math.min(innerWidth,innerHeight)<700,n=new ge({canvas:e,antialias:!0});n.setPixelRatio(Math.min(devicePixelRatio,t?1.5:2)),n.shadowMap.enabled=!0,n.shadowMap.type=1,n.toneMapping=4;let a=new u,s=new Se,d=new fe;d.position.set(-28,46,34).setLength(240),d.castShadow=!0,d.shadow.mapSize.setScalar(t?2048:4096),Object.assign(d.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:20,far:560}),d.shadow.bias=-4e-4,d.shadow.normalBias=.05,d.shadow.radius=3,a.add(s,d);let p=new l(32,1,1,1500),m={licht:`tag`,jahr:`sommer`,stimmung:!1},h=ot({renderer:n,szene:a,kamera:p,sonne:d,hell:s,stand:m,klein:t});new ResizeObserver(()=>{let{clientWidth:t,clientHeight:r}=e;n.setSize(t,r,!1),h.groesse(t,r),p.aspect=t/r,p.updateProjectionMatrix()}).observe(e);let v={tag:{himmel:[14411504,10130570,1.4],sonne:[16773852,2.6],fenster:0,laterne:1},nacht:{himmel:[7375032,3816520,.95],sonne:[11584746,1.1],fenster:.7,laterne:3}},S={tag:[new R(13490398),new R(13884386)],nacht:[new R(1318188),new R(2502204)]};c(`glass`).emissive.setHex(16757596);function C(){let e=v[m.licht];s.color.setHex(e.himmel[0]),s.groundColor.setHex(e.himmel[1]),s.intensity=e.himmel[2],d.color.setHex(e.sonne[0]),d.intensity=e.sonne[1],c(`glass`).emissiveIntensity=e.fenster,c(`lamp`).emissiveIntensity=e.laterne}let w=new R;a.background=w;let T=dt(12),O=new F;a.add(O);let A=gt,M=new F,N=e=>{let t=$(e);return{x:t.x,z:t.y,boden:A.has(e)?12365456:se.wiese}};function P(e,t=O){e.length&&E({gruppe:t},e.map(N),g(e.length))}let I=new F,L=new F;I.visible=!1,I.add(L),O.add(I);let te=e=>{let n=Math.hypot(e.x,e.z);return(t?.5:1)*(n<110?.4:n<160?.8:Math.max(0,.8*(1-(n-160)/70)))},z=e=>Math.hypot(e.x,e.z)>160,ie=(e,t=I)=>{e.length&&r({gruppe:t},e.map(N),{dichte:te,fern:z})};function oe(){O.remove(M),M.traverse(e=>e.geometry?.dispose()),M=new F,P(T.filter(e=>!mt.has(e)),M),O.add(M)}oe();let V=[],ce=new Set;function ue([e,t,n,r],i){let o=pe(e,{wurf:4711,jahreszeit:m.jahr}),s=$(ct(t,n)),c=new Set;o.gruppe.position.set(s.x,0,s.y),a.add(o.gruppe),V.push(o);for(let e of o.felder)c.add(ft(e.x+s.x,e.z+s.y));for(let e of c)ce.add(e);let l=new Set(T),u=dt(r,[t,n]).filter(e=>l.has(e)&&!c.has(e));P(u),ie(u),setTimeout(i,0)}let de=new F;de.visible=!1,O.add(de);function H(){let e=new Set(T),t=dt(26).filter(t=>!e.has(t)&&!ce.has(t));P(t,de),ie(t)}let me=be(new _({vertexColors:!0,flatShading:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),!1),U=new F;U.visible=!1,O.add(U);let W=null,he=!1;function G(){he=!1;for(let e of U.children)e.geometry.dispose();U.clear();for(let e of L.children)e.dispose();if(L.clear(),!W)return;let e=new Set([...W.haeuser.values()].flatMap(e=>e.felder).concat([...W.kanaele??[]],_t,ne(W).map(e=>e.f)));ie(T.filter(t=>!mt.has(t)&&!A.has(t)&&!e.has(t)),L);let t=new Set([...W.haeuser.values()].flatMap(e=>e.felder.filter(t=>t!==e.garten))),n=new Te;for(let e of A){let[r,i]=lt(e),a=$(e),o=k.map(([e,t])=>ct(r+e,i+t)),s=o.filter(e=>A.has(e)),c=e=>{let t=$(e);return Oe(t.x-a.x,t.y-a.y)},l=vt.has(e);ke(n,[a.x,a.y],st*1.005,{verband:l?`diagonal`:`reihe`,platten:o.filter(e=>t.has(e)).map(c),rinnen:l||s.length>2?[]:s.filter(e=>!vt.has(e)).map(c),rnd:Ce(r*131+i*7+1)})}if(n.leer)return;let r=new b(n.geometrie(()=>0,1e4),me);r.receiveShadow=!0,U.add(r)}let K=new F;a.add(K);function ve(e){a.remove(K);for(let e of K.children)e.userData.schluessel||e.traverse(e=>e.geometry?.dispose());K=new F,re(e,K,yt),a.add(K),W=e,he=!0}let ye=[[`-1,-1`,-3.2,1],[`3,-1`,3.2,2]].map(([e,t,n])=>{let r=new b(x(`linde`,{seed:n,alter:`jung`,form:`frei`}),ee),i=$(e);return r.position.set(i.x+t,0,i.y),r.rotation.y=n*2.1,r.castShadow=r.receiveShadow=!0,r.userData.feld=e,a.add(r),r}),q=new F,J=f().figur,Y=g(17),X=()=>m.stimmung?.14:0;a.add(q);let Z=e=>{let t=new b(e,ae);return t.scale.setScalar(J),t.castShadow=!0,t},we=()=>new Map([...A].map(e=>{let[t,n]=lt(e);return[e,k.map(([e,r])=>ct(t+e,n+r)).filter(e=>A.has(e))]})),Q=we(),Ee=[`marktfrau`,`baecker`,`wassertraegerin`,`hausierer`,`mueller`,`pfarrer`],De=Array.from({length:15},(e,t)=>{let n=101+t,r=Math.floor(Y()*6),a=t%3==0,s=a?y(r,{seed:n}):t%4==1?{...D[Ee[(t>>2)%Ee.length]].bau(!0),seed:n}:o(r,{seed:n}),c=Z(i(s)),l=Y.pick([...A]),u=Y.pick(Q.get(l));q.add(c);let d={m:c,von:l,nach:u,pos:$(l),ziel:null,v:J*(a?1.25:.85)*(.85+Y()*.3),weg:Y()*10};return Ae(d),d});function Ae(e){let t=$(e.von),n=$(e.nach),r=n.clone().sub(t).normalize();e.ziel=n.add(new B(-r.y,r.x).multiplyScalar(1.6+(Y()-.5)*.8))}function je(e,t){if(!e.m.visible)return;let n=e.ziel.clone().sub(e.pos),r=n.length(),i=e.v*t;if(r<=i){e.pos.copy(e.ziel);let t=Q.get(e.nach).filter(t=>t!==e.von);[e.von,e.nach]=[e.nach,Y.pick(t.length?t:Q.get(e.nach))],Ae(e)}else e.pos.addScaledVector(n,i/r),e.weg+=i,e.m.position.set(e.pos.x,X()+.05*J*Math.abs(Math.sin(e.weg*2.6/J)),e.pos.y),e.m.rotation.y=Math.atan2(n.x,n.y)}function Me(e){A=new Set(e);for(let e of ye)e.visible=A.has(e.userData.feld);oe(),he=!0,Q=we();let t=[...A].filter(e=>Q.get(e).length);for(let e of De)e.m.visible=t.length>0,!(!e.m.visible||Q.get(e.von)?.includes(e.nach)&&Q.has(e.nach))&&(e.von=Y.pick(t),e.nach=Y.pick(Q.get(e.von)),e.pos=$(e.von),Ae(e))}let Ne=(()=>{let e=i({...y(2,{seed:7}),traegt:`reifen`}),{reifen:t,r:n}=e.userData,r=new F,a=new F,o=Z(e);return a.position.copy(t).multiplyScalar(J),a.add(Z(le({r:n}))),r.add(o,a),q.add(r),{laeufer:r,achse:a,m:o,r:n,phi:0,weg:0}})();function Pe(e){let t=Ne,n=$(_t),r=7.2,i=1.3*J;t.phi+=i/r*e,t.weg+=i*e,t.laeufer.position.set(n.x+r*Math.cos(t.phi),X(),n.y+r*Math.sin(t.phi)),t.laeufer.rotation.y=Math.atan2(-Math.sin(t.phi),Math.cos(t.phi)),t.m.position.y=.06*J*Math.abs(Math.sin(t.weg*3)),t.achse.rotation.x=t.weg/(t.r*J)}let Fe=[`uFrueh`,`uHerbst`,`uKahl`,`uSchnee`,`uEis`];function Ie(e,t=!1){m.jahr=e;for(let n of V)n.jahreszeit(e,t);if(t||!V.length)for(let t of Fe)xe[t].value=_e[e][t]}let Le=new j,Re=[];n.setAnimationLoop(e=>{Le.update(e);let t=Math.min(.1,Le.getDelta()),n=Le.getElapsed();xe.uZeit.value=n;for(let e of V)e.jedesBild(n,t);for(let e of De)je(e,t);Pe(t);let[r,i]=S[m.licht];w.copy(r).lerp(i,xe.uSchnee.value);for(let e of Re)e(t,n);he&&m.stimmung&&G(),h.jedesBild(t),h.render(t)});function ze(){requestAnimationFrame(()=>{document.body.classList.add(`fertig`);let e=t=>()=>{t<pt.length?ue(pt[t],e(t+1)):H()};setTimeout(e(0),50)})}function Be(e){m.stimmung=e,h.schalte(e),de.visible=U.visible=I.visible=e,e&&(he=!0),C()}return Be(new URLSearchParams(location.search).get(`stimmung`)!==`0`),{klein:t,renderer:n,szene:a,kamera:p,stand:m,licht:C,jahr:Ie,stimmung:Be,zeigeStadt:ve,legeStrassen:Me,jedesBild:Re,start:ze,get haeuser(){return K}}}export{ft as a,dt as c,ct as i,yt as l,ut as n,lt as o,xt as r,$ as s,st as t,bt as u};