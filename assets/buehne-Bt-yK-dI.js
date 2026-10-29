import{$ as e,At as t,C as n,Ct as r,Dt as i,E as a,Ft as o,H as s,Ht as c,I as l,Jt as u,K as d,Kt as f,L as p,M as m,N as h,Ot as g,P as _,Pt as v,Q as y,Qt as b,Rt as x,S,St as C,T as w,Tt as T,Ut as E,Vt as D,W as O,Xt as k,Y as A,Yt as j,Z as M,Zt as N,_ as P,a as F,at as ee,b as te,ct as I,d as ne,dt as L,ft as R,g as re,gt as z,h as ie,ht as ae,it as B,j as oe,jt as se,kt as ce,l as le,lt as V,m as ue,mt as H,n as de,pt as U,q as fe,qt as W,r as pe,st as G,t as me,tt as he,ut as ge,v as K,w as _e,wt as q,x as ve,y as ye,zt as be}from"./natur-schau-DJ-TxS36.js";var J={fuge:7103318,stein:[[10721931,4],[9800830,4],[11314068,3],[9208694,2],[11575684,1]],rinne:[[8748143,3],[9208694,2]],bord:[[9275259,3],[8617329,1]],platte:[[12367012,3],[12959149,2],[11709081,2]],erde:10782808,spur:8284746,gras:[[9087831,3],[8363855,2],[9877088,1]],platz:[[11971477,4],[11181961,3],[12629407,2],[10326656,1]]},Y={fuge:.06,stein:.14,rinne:.12,platte:.16,bord:.18,erde:.08,spur:.09,gras:.095};function xe(e=1){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};return n.wahl=e=>{let t=e.reduce((e,t)=>e+t[1],0)*n();for(let[n,r]of e)if((t-=r)<=0)return n;return e[e.length-1][0]},n}var Se=(e,t)=>Array.isArray(e)?t.wahl(e):e,Ce=class{constructor(){this.xz=[],this.h=[],this.rgb=[]}get leer(){return this.h.length===0}dreieck(e,t,n,r,i){(t[1]-e[1])*(n[0]-e[0])-(t[0]-e[0])*(n[1]-e[1])<0&&([t,n]=[n,t]);let a=new B(i);for(let i of[e,t,n])this.xz.push(i[0],i[1]),this.h.push(r),this.rgb.push(a.r,a.g,a.b)}viereck(e,t,n){this.dreieck(e[0],e[1],e[2],t,n),this.dreieck(e[0],e[2],e[3],t,n)}vieleck(e,t,n){for(let r=1;r<e.length-1;r++)this.dreieck(e[0],e[r],e[r+1],t,n)}geometrie(e,t=1.2){let n=[],r=[],i=(a,o,s,c,l)=>{let u=[Math.hypot(o[0]-a[0],o[1]-a[1]),Math.hypot(s[0]-o[0],s[1]-o[1]),Math.hypot(a[0]-s[0],a[1]-s[1])],d=u.indexOf(Math.max(...u));if(u[d]>t){let[e,t,n]=[[a,o,s],[o,s,a],[s,a,o]][d],r=[(e[0]+t[0])/2,(e[1]+t[1])/2];i(e,r,n,c,l),i(r,t,n,c,l)}else for(let t of[a,o,s])n.push(t[0],e(t[0],t[1])+c,t[1]),r.push(...l)};for(let e=0;e<this.h.length;e+=3){let t=e=>[this.xz[2*e],this.xz[2*e+1]];i(t(e),t(e+1),t(e+2),this.h[e],this.rgb.slice(3*e,3*e+3))}let a=new he;return a.setAttribute(`position`,new L(n,3)),a.setAttribute(`color`,new L(r,3)),a}},X=(e,t,n,r)=>[e[0]+t[0]*n-t[1]*r,e[1]+t[1]*n+t[0]*r];function we(e,t,n,r,i,a,{laenge:o,breite:s,h:c,farben:l,rnd:u,fuge:d=.06,wackel:f=.03}){let p=Math.max(1,Math.round(r/o)),m=r/p,h=Math.max(1,Math.round((a-i)/s)),g=(a-i)/h,_=()=>(u()-.5)*2*f;for(let r=0;r<p;r++){let o=r*m+d/2,s=(r+1)*m-d/2,f=r%2?g/2:0;for(let r=-1;r<h;r++){let p=Math.max(i,i+r*g+f)+d/2,m=Math.min(a,i+(r+1)*g+f)-d/2;m-p<g*.3||e.viereck([X(t,n,o+_(),p+_()),X(t,n,s+_(),p+_()),X(t,n,s+_(),m+_()),X(t,n,o+_(),m+_())],c,Se(l,u))}}}var Te=(e,t)=>Array.from({length:6},(n,r)=>{let i=Math.PI/6+r*Math.PI/3;return[e[0]+Math.cos(i)*t,e[1]+Math.sin(i)*t]}),Ee=(e,t)=>(Math.round((Math.atan2(t,e)-Math.PI/3)/(Math.PI/3))%6+6)%6;function De(e,t,n,{verband:r=`reihe`,platten:i=[],rinnen:a=[],nah:o=!0,rnd:s=xe(1)}={}){let c=Te(t,n),l=Math.sqrt(m().ziegel),u=.95*l,d=.14,f=.32*l,p=r===`diagonal`?J.platz:J.stein,h=(e,t,n)=>{let r=c[e],i=c[(e+1)%6],a=Math.hypot(i[0]-r[0],i[1]-r[1]);return((i[0]-r[0])*(n-r[1])-(i[1]-r[1])*(t-r[0]))/a},g=e=>{let t=c[e],n=c[(e+1)%6];return[(t[0]+n[0])/2,(t[1]+n[1])/2]};e.vieleck(c,Y.fuge,o?J.fuge:p[0][0]);for(let t of i){let n=c[t],r=c[(t+1)%6],i=Math.hypot(r[0]-n[0],r[1]-n[1]),a=[(r[0]-n[0])/i,(r[1]-n[1])/i];o?(we(e,n,a,i,0,u,{laenge:.8*l,breite:u,h:Y.platte,farben:J.platte,rnd:s,fuge:.05,wackel:.015}),we(e,n,a,i,u,u+d,{laenge:.5*l,breite:d,h:Y.bord,farben:J.bord,rnd:s,fuge:.04,wackel:.01})):e.viereck([X(n,a,0,0),X(n,a,i,0),X(n,a,i,u),X(n,a,0,u)],Y.platte,J.platte[0][0])}let _=a.map(e=>{let n=g(e),r=Math.hypot(n[0]-t[0],n[1]-t[1]);return{u:[(n[0]-t[0])/r,(n[1]-t[1])/r],L:r}});for(let{u:n,L:r}of _)o?we(e,t,n,r+.05,-f,f,{laenge:.72*l,breite:2*f,h:Y.rinne,farben:J.rinne,rnd:s,wackel:.02}):e.viereck([X(t,n,0,-f),X(t,n,r,-f),X(t,n,r,f),X(t,n,0,f)],Y.rinne,J.rinne[0][0]);if(!o)return;_.length&&e.vieleck(Array.from({length:8},(e,n)=>[t[0]+Math.cos(n*Math.PI/4)*f*1.2,t[1]+Math.sin(n*Math.PI/4)*f*1.2]),Y.rinne+.005,J.rinne[0][0]);let v=(e,n)=>{for(let t=0;t<6;t++){let r=h(t,e,n);if(r<0||i.includes(t)&&r<u+d+.04)return!1}for(let{u:r,L:i}of _){let a=e-t[0],o=n-t[1],s=a*r[0]+o*r[1];if(s>-f&&s<i+.1&&Math.abs(-a*r[1]+o*r[0])<f+.06)return!1}return!0},y=e=>(s()-.5)*2*e,b=.06;if(r===`diagonal`){let r=.66*l,i=Math.SQRT1_2,a=r/2-b/2,o=(e,t)=>[(e-t)*i,(e+t)*i],c=Math.ceil(n*1.5/r),u=Math.round((t[0]+t[1])*i/r),d=Math.round((t[1]-t[0])*i/r);for(let t=u-c;t<=u+c;t++)for(let n=d-c;n<=d+c;n++){let[i,c]=o(t*r,n*r);if(!v(i,c))continue;let l=(e,i)=>o(t*r+e+y(.02),n*r+i+y(.02));e.viereck([l(-a,-a),l(a,-a),l(a,a),l(-a,a)],Y.stein,Se(p,s))}return}let x=.62*l,S=.5*l;for(let r=Math.floor((t[1]-n)/S);r<=Math.ceil((t[1]+n)/S);r++){let i=(r+.5)*S,a=(r%2+2)%2*.5;for(let r=Math.floor((t[0]-n)/x)-1;r<=Math.ceil((t[0]+n)/x);r++){let t=(r+.5+a)*x;if(!v(t,i))continue;let n=x/2-b/2,o=S/2-b/2;e.viereck([[t-n+y(.03),i-o+y(.03)],[t+n+y(.03),i-o+y(.03)],[t+n+y(.03),i+o+y(.03)],[t-n+y(.03),i+o+y(.03)]],Y.stein,Se(p,s))}}}var Z={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Oe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ke=new t(-1,1,1,-1,0,1),Ae=new class extends he{constructor(){super(),this.setAttribute(`position`,new L([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new L([0,2,0,0,2,0],2))}},je=class{constructor(e){this._mesh=new q(Ae,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ke)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Me=class extends Oe{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof c?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=W.clone(e.uniforms),this.material=new c({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new je(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ne=class extends Oe{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Pe=class extends Oe{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Fe=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new k);this._width=n.width,this._height=n.height,t=new b(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:H}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Me(Z),this.copyPass.material.blending=0,this.timer=new f}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ne!==void 0&&(r instanceof Ne?n=!0:r instanceof Pe&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new k);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ie=class extends Oe{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new B}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Le={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new k},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new r},cameraProjectionMatrixInverse:{value:new r},cameraWorldMatrix:{value:new r},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

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
		}`},Re={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ze={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Be(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Ve(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new N(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new G(i,t,t);return a.wrapS=x,a.wrapT=x,a.needsUpdate=!0,a}function Ve(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var He={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Ue(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new k},cameraProjectionMatrixInverse:{value:new r},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ue(e,t,n){let r=We(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function We(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new N(Math.cos(a),Math.sin(a),o))}return r}var Ge=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,M=_-1+3*d,N=v-1+3*d,P=c&255,F=l&255,ee=u&255,te=this.perm[P+this.perm[F+this.perm[ee]]]%12,I=this.perm[P+y+this.perm[F+b+this.perm[ee+x]]]%12,ne=this.perm[P+S+this.perm[F+C+this.perm[ee+w]]]%12,L=this.perm[P+1+this.perm[F+1+this.perm[ee+1]]]%12,R=.6-g*g-_*_-v*v;R<0?r=0:(R*=R,r=R*R*this._dot3(this.grad3[te],g,_,v));let re=.6-T*T-E*E-D*D;re<0?i=0:(re*=re,i=re*re*this._dot3(this.grad3[I],T,E,D));let z=.6-O*O-k*k-A*A;z<0?a=0:(z*=z,a=z*z*this._dot3(this.grad3[ne],O,k,A));let ie=.6-j*j-M*M-N*N;return ie<0?o=0:(ie*=ie,o=ie*ie*this._dot3(this.grad3[L],j,M,N)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,M=T>D?2:0,N=+(E>D),P=O+k+A+j+M+N,F=+(a[P][0]>=3),ee=+(a[P][1]>=3),te=+(a[P][2]>=3),I=+(a[P][3]>=3),ne=+(a[P][0]>=2),L=+(a[P][1]>=2),R=+(a[P][2]>=2),re=+(a[P][3]>=2),z=+(a[P][0]>=1),ie=+(a[P][1]>=1),ae=+(a[P][2]>=1),B=+(a[P][3]>=1),oe=w-F+c,se=T-ee+c,ce=E-te+c,le=D-I+c,V=w-ne+2*c,ue=T-L+2*c,H=E-R+2*c,de=D-re+2*c,U=w-z+3*c,fe=T-ie+3*c,W=E-ae+3*c,pe=D-B+3*c,G=w-1+4*c,me=T-1+4*c,he=E-1+4*c,ge=D-1+4*c,K=h&255,_e=g&255,q=_&255,ve=v&255,ye=o[K+o[_e+o[q+o[ve]]]]%32,be=o[K+F+o[_e+ee+o[q+te+o[ve+I]]]]%32,J=o[K+ne+o[_e+L+o[q+R+o[ve+re]]]]%32,Y=o[K+z+o[_e+ie+o[q+ae+o[ve+B]]]]%32,xe=o[K+1+o[_e+1+o[q+1+o[ve+1]]]]%32,Se=.6-w*w-T*T-E*E-D*D;Se<0?l=0:(Se*=Se,l=Se*Se*this._dot4(i[ye],w,T,E,D));let Ce=.6-oe*oe-se*se-ce*ce-le*le;Ce<0?u=0:(Ce*=Ce,u=Ce*Ce*this._dot4(i[be],oe,se,ce,le));let X=.6-V*V-ue*ue-H*H-de*de;X<0?d=0:(X*=X,d=X*X*this._dot4(i[J],V,ue,H,de));let we=.6-U*U-fe*fe-W*W-pe*pe;we<0?f=0:(we*=we,f=we*we*this._dot4(i[Y],U,fe,W,pe));let Te=.6-G*G-me*me-he*he-ge*ge;return Te<0?p=0:(Te*=Te,p=Te*Te*this._dot4(i[xe],G,me,he,ge)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Ke=class e extends Oe{constructor(e,t,n=512,r=512,a,o,s){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Be(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new b(this.width,this.height,{type:H,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new c({defines:Object.assign({},Le.defines),uniforms:W.clone(Le.uniforms),vertexShader:Le.vertexShader,fragmentShader:Le.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new i,this.normalMaterial.blending=0,this.pdMaterial=new c({defines:Object.assign({},He.defines),uniforms:W.clone(He.uniforms),vertexShader:He.vertexShader,fragmentShader:He.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new c({defines:Object.assign({},Re.defines),uniforms:W.clone(Re.uniforms),vertexShader:Re.vertexShader,fragmentShader:Re.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new c({uniforms:W.clone(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new c({uniforms:W.clone(ze.uniforms),vertexShader:ze.vertexShader,fragmentShader:ze.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new je(null),this._originalClearColor=new B,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),s!==void 0&&this.updatePdMaterial(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new V,this.depthTexture.format=I,this.depthTexture.type=j,this.normalRenderTarget=new b(this.width,this.height,{minFilter:ce,magFilter:ce,type:H,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ue(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ge,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new G(r,e,e,v,u);return i.wrapS=x,i.wrapT=x,i.needsUpdate=!0,i}};Ke.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var qe={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new B(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Je=class e extends Oe{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new k(256,256):new k(e.x,e.y),this.clearColor=new B(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new b(i,a,{type:H,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new b(i,a,{type:H,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new b(i,a,{type:H,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=qe;this.highPassUniforms=W.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new c({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new k(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=W.clone(Z.uniforms),this.blendMaterial=new c({uniforms:this.copyUniforms,vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new B,this._oldClearAlpha=1,this._basic=new T,this._fsQuad=new je(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new k(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new c({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new k(.5,.5)},direction:{value:new k(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new c({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Je.BlurDirectionX=new k(1,0),Je.BlurDirectionY=new k(0,1);var Ye={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Xe=class extends Oe{constructor(){super(),this.isOutputPass=!0,this.uniforms=W.clone(Ye.uniforms),this.material=new o({name:Ye.name,uniforms:this.uniforms,vertexShader:Ye.vertexShader,fragmentShader:Ye.fragmentShader}),this._fsQuad=new je(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ze={tag:{himmel:[12900078,9214056,1.15],sonne:[16770240,3]},nacht:{himmel:[6979760,3159102,.85],sonne:[11124712,1]}},Qe={sonne:16764824,himmel:14077373},$e={sonne:15659768,himmel:14673646},et={tag:[14542563,8365782],herbst:[14998216,9349058],winter:[14081250,11188166],nacht:[2502986,659488]},tt={fruehling:40,sommer:47,herbst:33,winter:26},Q={x:0,y:0,z:0,w:95};for(let e of[`lambert`,`phong`,`standard`,`physical`,`toon`])y[e].uniforms.wolken={value:Q};M.lights_pars_begin+=`
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
}`;{let e=M.lights_fragment_begin,t=e.indexOf(`directionalLight = directionalLights[ i ];`),n=e.indexOf(`RE_Direct(`,t);M.lights_fragment_begin=e.slice(0,n)+`#if ( UNROLLED_LOOP_INDEX == 0 )
		directLight.color *= wolkenSchatten( geometryPosition, directLight.direction );
		#endif

		`+e.slice(n)}function nt({renderer:e,szene:t,kamera:n,sonne:r,hell:i,stand:a,klein:o}){let s=new URLSearchParams(location.search),u=s.has(`nachbearbeitung`)?s.get(`nachbearbeitung`)!==`0`:!o,d={richtung:r.position.clone(),hintergrund:null},f=new U;f.visible=!1,t.add(f);let p=new c({uniforms:{unten:{value:new B},oben:{value:new B}},vertexShader:`varying float vHoehe;
void main() { vHoehe = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 unten;
uniform vec3 oben;
varying float vHoehe;
void main() {
  gl_FragColor = vec4(mix(unten, oben, pow(smoothstep(0.0, 0.4, vHoehe), 0.7)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,side:1,depthWrite:!1,fog:!1}),m=new q(new E(1400,32,16),p);m.frustumCulled=!1,m.renderOrder=-1,f.add(m);let _=new R(16777215,300,1400),v=(e,t,n)=>new B(e).lerp(new B(t),n),y=new be(200,1700,72,18).rotateX(-Math.PI/2).translate(0,-.08,0),x=new q(ve(y,ue.wiese,P.get(ue.wiese)),re);x.receiveShadow=!0,f.add(x);let S=new g({color:16777215,flatShading:!0,roughness:1,emissive:2765120}),w=h(31),T=[];for(let e=0;e<16;e++){let e=[],t=3+Math.floor(w()*3);for(let n=0;n<t;n++){let r=new z(1,0),i=.55+w()*.5;r.scale(i,i*.6,i).translate((n-(t-1)/2)*.8+(w()-.5)*.4,i*.15,(w()-.5)*.7),e.push(r)}let n=new q(l(e),S);n.scale.setScalar(28+w()*40),T.push({m:n,R:620+w()*730,phi:w()*Math.PI*2,y:190+w()*80}),f.add(n)}let D=null,O=null,A=null;function j(){let{width:r,height:i}=e.getSize(new k);D=new Fe(e,new b(r,i,{type:H,samples:4,depthTexture:new V(r,i)})),D.setPixelRatio(e.getPixelRatio()),D.setSize(r,i),D.addPass(new Ie(t,n)),O=new Ke(t,n,r,i,void 0,{radius:2.4,distanceExponent:1.3,thickness:1.5,scale:1.1,samples:16},{radius:6,samples:8}),O.setGBuffer(D.readBuffer.depthTexture);let a=O.setSize.bind(O);O.setSize=(e,t)=>a(Math.max(1,Math.round(e/2)),Math.max(1,Math.round(t/2))),O.blendIntensity=.85,D.addPass(O),A=new Je(new k(r,i),.7,.45,.7),D.addPass(A),D.addPass(new Xe)}let M=!1,F=tt[a.jahr];function ee(e){M=e,f.visible=M,t.fog=M?_:null,M&&t.background&&(d.hintergrund=t.background),t.background=M?null:d.hintergrund,Q.z=0,M||r.position.copy(d.richtung),M&&u&&!D&&j()}let te=new B,I=new B,ne=new N;function L(e){if(!M)return;let t=Ze[a.licht],o=a.licht===`nacht`,s=K.uHerbst.value,c=K.uSchnee.value;te.setHex(t.sonne[0]),I.setHex(t.himmel[0]),o||(te.lerp(new B(Qe.sonne),s*(1-c)).lerp(new B($e.sonne),c),I.lerp(new B(Qe.himmel),s*(1-c)*.6).lerp(new B($e.himmel),c)),r.color.copy(te),r.intensity=t.sonne[1]*(o?1:1-.25*c),i.color.copy(I),i.groundColor.setHex(t.himmel[1]),i.intensity=t.himmel[2]*(o?1:1+.25*c),F+=(tt[a.jahr]-F)*Math.min(1,e*.8);let l=Math.atan2(d.richtung.z,d.richtung.x),u=C.degToRad(F);r.position.set(Math.cos(l)*Math.cos(u),Math.sin(u),Math.sin(l)*Math.cos(u)).multiplyScalar(d.richtung.length());let[f,h]=o?et.nacht:[0,1].map(e=>v(et.tag[e],et.herbst[e],s*(1-c)).lerp(new B(et.winter[e]),c));p.uniforms.unten.value.set(f),p.uniforms.oben.value.set(h),_.color.set(f),m.position.copy(n.position),n.getWorldDirection(ne);let g=ne.y<-.05?Math.min(900,-n.position.y/ne.y):900;_.near=g*.8+40,_.far=Math.min(1400,_.near+380+g*1.4);for(let t of T)t.phi+=2.5/t.R*e,t.m.position.set(Math.cos(t.phi)*t.R,t.y,Math.sin(t.phi)*t.R);Q.x=(Q.x-3.2*e)%(Q.w*64),Q.y=(Q.y-1.9*e)%(Q.w*64),Q.z=o?.25:.4,A&&(A.enabled=o)}function ie(r){if(!M||!D)return e.render(t,n);O.gtaoMaterial.uniforms.tDepth.value=O.pdMaterial.uniforms.tDepth.value=D.readBuffer.depthTexture,D.render(r)}function ae(e,t){D?.setSize(e,t)}return{schalte:ee,jedesBild:L,render:ie,groesse:ae,get an(){return M}}}_(`niedlich`);var rt=10/Math.sqrt(3),it=(e,t)=>`${e},${t}`,at=e=>e.split(`,`).map(Number),$=e=>{let[t,n]=at(e);return new k(10*(t+n/2),1.5*rt*n)},ot=(e,t)=>(Math.abs(e)+Math.abs(t)+Math.abs(e+t))/2,st=(e,[t,n]=[0,0])=>{let r=[];for(let i=-e;i<=e;i++)for(let a=-e;a<=e;a++)ot(a,i)<=e&&r.push(it(t+a,n+i));return r};function ct(e,t){let n=t/(1.5*rt),r=e/10-n/2,i=-r-n,a=Math.round(r),o=Math.round(n),s=Math.round(i),c=Math.abs(a-r),l=Math.abs(o-n),u=Math.abs(s-i);return c>l&&c>u?a=-o-s:l>u&&(o=-a-s),it(a,o)}var lt=[[`gewaesser`,-8,16,6],[`wald`,-9,-7,4],[`hof`,15,-8,5]],ut=new Set(lt.flatMap(([,e,t,n])=>st(n,[e,t]))),dt=[[-11,0,0,23],[-1,-1,0,2],[2,-1,0,2],[0,-2,0,4],[-5,-6,0,17],[-4,-7,5,17],[11,-7,4,15]],ft=new Set(dt.flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>it(e+i*p[n][0],t+i*p[n][1]))).filter(e=>!ut.has(e))),pt=`1,-1`,mt=new Set([...st(1,at(pt)),...dt.slice(1,4).flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>it(e+i*p[n][0],t+i*p[n][1])))]),ht={detail:1,modelle:new Map};function gt(e){let t=h(e),n=s({radius:11});for(let e of ut)n.felder.delete(e);for(let e of ft)n.strassen.add(e);d(n,pt,le(`wahrzeichen`,t,{...ht,typ:`mariensaeule`}),1);let r=[...F],i=[pe],a=t()<.5?3:4;for(;i.length<a;)i.push(...r.splice(Math.floor(t()*r.length),1));let o=[...i.map(e=>le(`wahrzeichen`,t,{...ht,typ:e})),...[0,1,2].map(()=>le(`betrieb`,t,ht)),...[6,6,5,5,3].map(e=>({art:`wohnen`,stufe:e}))];A(n,o,t);for(let e of[...n.haeuser.values()])e.art===`wohnen`&&(e.stufe===0||e.stufe===4)&&t()<Math.max(0,ot(...at(e.vorn[0]))-4)/14&&O(n,e.id);for(let e=0;e<2;e++)for(let e of[...n.haeuser.values()])e.art===`wohnen`&&n.haeuser.has(e.id)&&t()<.5&&fe(n,e.id);return n}function _t(t){let r=Math.min(innerWidth,innerHeight)<700,i=new e({canvas:t,antialias:!0});i.setPixelRatio(Math.min(devicePixelRatio,r?1.5:2)),i.shadowMap.enabled=!0,i.shadowMap.type=1,i.toneMapping=4;let o=new D,s=new ae,c=new ge;c.position.set(-28,46,34).setLength(240),c.castShadow=!0,c.shadow.mapSize.setScalar(r?2048:4096),Object.assign(c.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:20,far:560}),c.shadow.bias=-4e-4,c.shadow.normalBias=.05,c.shadow.radius=3,o.add(s,c);let l=new se(32,1,1,1500),u={licht:`tag`,jahr:`sommer`,stimmung:!1},d=nt({renderer:i,szene:o,kamera:l,sonne:c,hell:s,stand:u,klein:r});new ResizeObserver(()=>{let{clientWidth:e,clientHeight:n}=t;i.setSize(e,n,!1),d.groesse(e,n),l.aspect=e/n,l.updateProjectionMatrix()}).observe(t);let _={tag:{himmel:[14411504,10130570,1.4],sonne:[16773852,2.6],fenster:0,laterne:1},nacht:{himmel:[7375032,3816520,.95],sonne:[11584746,1.1],fenster:.7,laterne:3}},v={tag:[new B(13490398),new B(13884386)],nacht:[new B(1318188),new B(2502204)]};oe(`glass`).emissive.setHex(16757596);function y(){let e=_[u.licht];s.color.setHex(e.himmel[0]),s.groundColor.setHex(e.himmel[1]),s.intensity=e.himmel[2],c.color.setHex(e.sonne[0]),c.intensity=e.sonne[1],oe(`glass`).emissiveIntensity=e.fenster,oe(`lamp`).emissiveIntensity=e.laterne}let b=new B;o.background=b;let x=st(12),C=new U;o.add(C);let T=ft,E=new U;function O(e,t=C){e.length&&te({gruppe:t},e.map(e=>{let t=$(e);return{x:t.x,z:t.y,boden:T.has(e)?12365456:ue.wiese}}),h(e.length))}function A(){C.remove(E),E.traverse(e=>e.geometry?.dispose()),E=new U,O(x.filter(e=>!ut.has(e)),E),C.add(E)}A();let j=[],M=new Set;function N([e,t,n,r],i){let a=de(e,{wurf:4711,jahreszeit:u.jahr}),s=$(it(t,n)),c=new Set;a.gruppe.position.set(s.x,0,s.y),o.add(a.gruppe),j.push(a);for(let e of a.felder)c.add(ct(e.x+s.x,e.z+s.y));for(let e of c)M.add(e);let l=new Set(x);O(st(r,[t,n]).filter(e=>l.has(e)&&!c.has(e))),setTimeout(i,0)}let P=new U;P.visible=!1,C.add(P);function F(){let e=new Set(x);O(st(26).filter(t=>!e.has(t)&&!M.has(t)),P)}let ee=ye(new g({vertexColors:!0,flatShading:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),!1),I=new U;I.visible=!1,C.add(I);let L=null,R=!1;function re(){R=!1;for(let e of I.children)e.geometry.dispose();if(I.clear(),!L)return;let e=new Set([...L.haeuser.values()].flatMap(e=>e.felder.filter(t=>t!==e.garten))),t=new Ce;for(let n of T){let[r,i]=at(n),a=$(n),o=p.map(([e,t])=>it(r+e,i+t)),s=o.filter(e=>T.has(e)),c=e=>{let t=$(e);return Ee(t.x-a.x,t.y-a.y)},l=mt.has(n);De(t,[a.x,a.y],rt*1.005,{verband:l?`diagonal`:`reihe`,platten:o.filter(t=>e.has(t)).map(c),rinnen:l||s.length>2?[]:s.filter(e=>!mt.has(e)).map(c),rnd:xe(r*131+i*7+1)})}if(t.leer)return;let n=new q(t.geometrie(()=>0,1e4),ee);n.receiveShadow=!0,I.add(n)}let z=new U;o.add(z);function ce(e){o.remove(z);for(let e of z.children)e.userData.schluessel||e.traverse(e=>e.geometry?.dispose());z=new U,ne(e,z,ht),o.add(z),L=e,R=!0}let le=new U,V=m().figur,H=h(17),fe=()=>u.stimmung?.14:0;o.add(le);let W=e=>{let t=new q(e,ie);return t.scale.setScalar(V),t.castShadow=!0,t},pe=()=>new Map([...T].map(e=>{let[t,n]=at(e);return[e,p.map(([e,r])=>it(t+e,n+r)).filter(e=>T.has(e))]})),G=pe(),he=[`marktfrau`,`baecker`,`wassertraegerin`,`hausierer`,`mueller`,`pfarrer`],ve=Array.from({length:15},(e,t)=>{let r=101+t,i=Math.floor(H()*6),a=t%3==0,o=a?w(i,{seed:r}):t%4==1?{...S[he[(t>>2)%he.length]].bau(!0),seed:r}:n(i,{seed:r}),s=W(_e(o)),c=H.pick([...T]),l=H.pick(G.get(c));le.add(s);let u={m:s,von:c,nach:l,pos:$(c),ziel:null,v:V*(a?1.25:.85)*(.85+H()*.3),weg:H()*10};return be(u),u});function be(e){let t=$(e.von),n=$(e.nach),r=n.clone().sub(t).normalize();e.ziel=n.add(new k(-r.y,r.x).multiplyScalar(1.6+(H()-.5)*.8))}function J(e,t){if(!e.m.visible)return;let n=e.ziel.clone().sub(e.pos),r=n.length(),i=e.v*t;if(r<=i){e.pos.copy(e.ziel);let t=G.get(e.nach).filter(t=>t!==e.von);[e.von,e.nach]=[e.nach,H.pick(t.length?t:G.get(e.nach))],be(e)}else e.pos.addScaledVector(n,i/r),e.weg+=i,e.m.position.set(e.pos.x,fe()+.05*V*Math.abs(Math.sin(e.weg*2.6/V)),e.pos.y),e.m.rotation.y=Math.atan2(n.x,n.y)}function Y(e){T=new Set(e),A(),R=!0,G=pe();let t=[...T].filter(e=>G.get(e).length);for(let e of ve)e.m.visible=t.length>0,!(!e.m.visible||G.get(e.von)?.includes(e.nach)&&G.has(e.nach))&&(e.von=H.pick(t),e.nach=H.pick(G.get(e.von)),e.pos=$(e.von),be(e))}let Se=(()=>{let e=_e({...w(2,{seed:7}),traegt:`reifen`}),{reifen:t,r:n}=e.userData,r=new U,i=new U,o=W(e);return i.position.copy(t).multiplyScalar(V),i.add(W(a({r:n}))),r.add(o,i),le.add(r),{laeufer:r,achse:i,m:o,r:n,phi:0,weg:0}})();function X(e){let t=Se,n=$(pt),r=7.2,i=1.3*V;t.phi+=i/r*e,t.weg+=i*e,t.laeufer.position.set(n.x+r*Math.cos(t.phi),fe(),n.y+r*Math.sin(t.phi)),t.laeufer.rotation.y=Math.atan2(-Math.sin(t.phi),Math.cos(t.phi)),t.m.position.y=.06*V*Math.abs(Math.sin(t.weg*3)),t.achse.rotation.x=t.weg/(t.r*V)}let we=[`uFrueh`,`uHerbst`,`uKahl`,`uSchnee`,`uEis`];function Te(e,t=!1){u.jahr=e;for(let n of j)n.jahreszeit(e,t);if(t||!j.length)for(let t of we)K[t].value=me[e][t]}let Z=new f,Oe=[];i.setAnimationLoop(e=>{Z.update(e);let t=Math.min(.1,Z.getDelta()),n=Z.getElapsed();K.uZeit.value=n;for(let e of j)e.jedesBild(n,t);for(let e of ve)J(e,t);X(t);let[r,i]=v[u.licht];b.copy(r).lerp(i,K.uSchnee.value);for(let e of Oe)e(t,n);R&&u.stimmung&&re(),d.jedesBild(t),d.render(t)});function ke(){requestAnimationFrame(()=>{document.body.classList.add(`fertig`);let e=t=>()=>{t<lt.length?N(lt[t],e(t+1)):F()};setTimeout(e(0),50)})}function Ae(e){u.stimmung=e,d.schalte(e),P.visible=I.visible=e,e&&(R=!0),y()}return Ae(new URLSearchParams(location.search).get(`stimmung`)!==`0`),{klein:r,renderer:i,szene:o,kamera:l,stand:u,licht:y,jahr:Te,stimmung:Ae,zeigeStadt:ce,legeStrassen:Y,jedesBild:Oe,start:ke,get haeuser(){return z}}}export{ct as a,st as c,it as i,ht as l,ot as n,at as o,_t as r,$ as s,rt as t,gt as u};