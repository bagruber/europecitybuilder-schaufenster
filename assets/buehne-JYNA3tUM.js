import{A as e,B as t,Bn as n,Br as r,Dn as i,Dr as a,En as o,F as s,Fn as c,Fr as l,Gn as u,H as d,Hn as f,Hr as p,In as m,Ir as h,Jn as g,K as _,Kn as v,Kt as y,L as b,Lr as x,Mn as S,Mr as C,On as w,Or as T,P as E,R as D,Rr as O,T as ee,Tr as k,Tt as A,Un as te,V as j,Vn as M,Wt as N,X as ne,Xn as P,Xt as re,Y as ie,Yn as F,Z as I,Zn as L,Zt as R,ar as ae,br as oe,cr as se,ct as ce,dr as le,dt as ue,fn as de,fr as fe,gn as pe,hr as me,i as he,j as ge,k as z,l as _e,lt as ve,mr as ye,n as be,nn as xe,o as Se,or as B,pr as V,pt as Ce,r as we,rt as Te,sr as Ee,t as De,tn as Oe,u as H,wn as U,wr as W,x as G,xn as ke,xr as Ae,y as je,yn as Me,z as Ne,zr as K}from"./natur-schau-CDJ9_fZ7.js";var Pe={nah:200,fern:480,baum:300,garten:300,streu:{voll:250,duenn:900,rest:.12,wachsen:2.5,band:.1,kachel:200}},Fe={x:0,y:1e6,z:0},Ie=e=>e<Pe.nah?0:e<Pe.fern?1:2,Le=(e,t,n)=>Ie(Math.hypot(e-Fe.x,t-Fe.y,n-Fe.z)),Re={fernhaus:!0,leute:!0,schattennetz:!0,schattenbox:!0,kacheln:!0,wald:!0},ze={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},q=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Be=new ye(-1,1,1,-1,0,1),Ve=new class extends S{constructor(){super(),this.setAttribute(`position`,new u([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new u([0,2,0,0,2,0],2))}},He=class{constructor(e){this._mesh=new Ee(Ve,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Be)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Ue=class extends q{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof T?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=h.clone(e.uniforms),this.material=new T({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new He(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},We=class extends q{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Ge=class extends q{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},J=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new K);this._width=n.width,this._height=n.height,t=new p(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:F}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ue(ze),this.copyPass.material.blending=0,this.timer=new l}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}We!==void 0&&(r instanceof We?n=!0:r instanceof Ge&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ke=class extends q{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new c}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},qe={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new K},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new B},cameraProjectionMatrixInverse:{value:new B},cameraWorldMatrix:{value:new B},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new r(-1,-1,-1)},sceneBoxMax:{value:new r(1,1,1)}},vertexShader:`

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
		}`},Je={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ye={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Xe(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),i=Ze(t),a=i.length,o=new Uint8Array(a*4);for(let e=0;e<a;++e){let t=i[e],n=2*Math.PI*t/a,s=new r(Math.cos(n),Math.sin(n),0).normalize();o[e*4]=(s.x*.5+.5)*255,o[e*4+1]=(s.y*.5+.5)*255,o[e*4+2]=127,o[e*4+3]=255}let s=new n(o,t,t);return s.wrapS=W,s.wrapT=W,s.needsUpdate=!0,s}function Ze(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Qe={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:$e(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new K},cameraProjectionMatrixInverse:{value:new B},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function $e(e,t,n){let r=et(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function et(e,t,n){let i=[];for(let a=0;a<e;a++){let o=2*Math.PI*t*a/e,s=(a/(e-1))**n;i.push(new r(Math.cos(o),Math.sin(o),s))}return i}var tt=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,k=v-w+2*d,A=g-1+3*d,te=_-1+3*d,j=v-1+3*d,M=c&255,N=l&255,ne=u&255,P=this.perm[M+this.perm[N+this.perm[ne]]]%12,re=this.perm[M+y+this.perm[N+b+this.perm[ne+x]]]%12,ie=this.perm[M+S+this.perm[N+C+this.perm[ne+w]]]%12,F=this.perm[M+1+this.perm[N+1+this.perm[ne+1]]]%12,I=.6-g*g-_*_-v*v;I<0?r=0:(I*=I,r=I*I*this._dot3(this.grad3[P],g,_,v));let L=.6-T*T-E*E-D*D;L<0?i=0:(L*=L,i=L*L*this._dot3(this.grad3[re],T,E,D));let R=.6-O*O-ee*ee-k*k;R<0?a=0:(R*=R,a=R*R*this._dot3(this.grad3[ie],O,ee,k));let ae=.6-A*A-te*te-j*j;return ae<0?o=0:(ae*=ae,o=ae*ae*this._dot3(this.grad3[F],A,te,j)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,k=T>E?8:0,A=w>D?4:0,te=T>D?2:0,j=+(E>D),M=O+ee+k+A+te+j,N=+(a[M][0]>=3),ne=+(a[M][1]>=3),P=+(a[M][2]>=3),re=+(a[M][3]>=3),ie=+(a[M][0]>=2),F=+(a[M][1]>=2),I=+(a[M][2]>=2),L=+(a[M][3]>=2),R=+(a[M][0]>=1),ae=+(a[M][1]>=1),oe=+(a[M][2]>=1),se=+(a[M][3]>=1),ce=w-N+c,le=T-ne+c,ue=E-P+c,de=D-re+c,fe=w-ie+2*c,pe=T-F+2*c,me=E-I+2*c,he=D-L+2*c,ge=w-R+3*c,z=T-ae+3*c,_e=E-oe+3*c,ve=D-se+3*c,ye=w-1+4*c,be=T-1+4*c,xe=E-1+4*c,Se=D-1+4*c,B=h&255,V=g&255,Ce=_&255,we=v&255,Te=o[B+o[V+o[Ce+o[we]]]]%32,Ee=o[B+N+o[V+ne+o[Ce+P+o[we+re]]]]%32,De=o[B+ie+o[V+F+o[Ce+I+o[we+L]]]]%32,Oe=o[B+R+o[V+ae+o[Ce+oe+o[we+se]]]]%32,H=o[B+1+o[V+1+o[Ce+1+o[we+1]]]]%32,U=.6-w*w-T*T-E*E-D*D;U<0?l=0:(U*=U,l=U*U*this._dot4(i[Te],w,T,E,D));let W=.6-ce*ce-le*le-ue*ue-de*de;W<0?u=0:(W*=W,u=W*W*this._dot4(i[Ee],ce,le,ue,de));let G=.6-fe*fe-pe*pe-me*me-he*he;G<0?d=0:(G*=G,d=G*G*this._dot4(i[De],fe,pe,me,he));let ke=.6-ge*ge-z*z-_e*_e-ve*ve;ke<0?f=0:(ke*=ke,f=ke*ke*this._dot4(i[Oe],ge,z,_e,ve));let Ae=.6-ye*ye-be*be-xe*xe-Se*Se;return Ae<0?p=0:(Ae*=Ae,p=Ae*Ae*this._dot4(i[H],ye,be,xe,Se)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},nt=class e extends q{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Xe(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new p(this.width,this.height,{type:F,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new T({defines:Object.assign({},qe.defines),uniforms:h.clone(qe.uniforms),vertexShader:qe.vertexShader,fragmentShader:qe.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new le,this.normalMaterial.blending=0,this.pdMaterial=new T({defines:Object.assign({},Qe.defines),uniforms:h.clone(Qe.uniforms),vertexShader:Qe.vertexShader,fragmentShader:Qe.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new T({defines:Object.assign({},Je.defines),uniforms:h.clone(Je.uniforms),vertexShader:Je.vertexShader,fragmentShader:Je.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new T({uniforms:h.clone(ze.uniforms),vertexShader:ze.vertexShader,fragmentShader:ze.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new T({uniforms:h.clone(Ye.uniforms),vertexShader:Ye.vertexShader,fragmentShader:Ye.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new He(null),this._originalClearColor=new c,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new f,this.depthTexture.format=M,this.depthTexture.type=O,this.normalRenderTarget=new p(this.width,this.height,{minFilter:V,magFilter:V,type:F,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=$e(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new tt,r=e*e*4,i=new Uint8Array(r);for(let n=0;n<e;n++)for(let r=0;r<e;r++){let a=n,o=r;i[(n*e+r)*4]=(t.noise(a,o)*.5+.5)*255,i[(n*e+r)*4+1]=(t.noise(a+e,o)*.5+.5)*255,i[(n*e+r)*4+2]=(t.noise(a,o+e)*.5+.5)*255,i[(n*e+r)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let a=new n(i,e,e,oe,x);return a.wrapS=W,a.wrapT=W,a.needsUpdate=!0,a}};nt.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var rt={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new c(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},it=class e extends q{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e===void 0?new K(256,256):new K(e.x,e.y),this.clearColor=new c(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new p(a,o,{type:F,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new p(a,o,{type:F,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new p(a,o,{type:F,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),a=Math.round(a/2),o=Math.round(o/2)}let s=rt;this.highPassUniforms=h.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new T({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new K(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new r(1,1,1),new r(1,1,1),new r(1,1,1),new r(1,1,1),new r(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=h.clone(ze.uniforms),this.blendMaterial=new T({uniforms:this.copyUniforms,vertexShader:ze.vertexShader,fragmentShader:ze.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new c,this._oldClearAlpha=1,this._basic=new se,this._fsQuad=new He(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new K(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new T({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new T({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};it.BlurDirectionX=new K(1,0),it.BlurDirectionY=new K(0,1);var at={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},ot=class extends q{constructor(){super(),this.isOutputPass=!0,this.uniforms=h.clone(at.uniforms),this.material=new Ae({name:at.name,uniforms:this.uniforms,vertexShader:at.vertexShader,fragmentShader:at.fragmentShader}),this._fsQuad=new He(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},m.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Y={tag:{himmel:[11848172,8819292,.95],sonne:[16767398,3.4]},nacht:{himmel:[6059696,2764604,.8],sonne:[10336494,1.15]}},st={sonne:16759922,himmel:14206632},ct={sonne:15922940,himmel:14082286},lt={sonne:16753242,himmel:9407684,himmelfarbe:[15905930,7307444]},ut=new c(5199454),dt={tag:[14214116,7117010],herbst:[15259320,8822720],winter:[13818596,10662600],nacht:[2305608,527900]},ft={fruehling:40,sommer:47,herbst:33,winter:26},X={x:0,y:0,z:0,w:95};for(let e of[`lambert`,`phong`,`standard`,`physical`,`toon`])i[e].uniforms.wolken={value:X};o.lights_pars_begin+=`
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
	// Das Rauschen liegt auf einem Quadratraster, das sah man den Schatten an (Nutzer, 3.11.2026): darum schraeg zum Land und durch sich selbst verzerrt, jede Lage in einem anderen Winkel
	const mat2 dreh = mat2( 0.8, 0.6, -0.6, 0.8 );
	vec2 p = dreh * ( welt.xz - sonne.xz / max( sonne.y, 0.15 ) * welt.y + wolken.xy ) / wolken.w;
	p += ( vec2( wolkenWert( p * 0.7 + 3.7 ), wolkenWert( p * 0.7 + 11.3 ) ) - 0.5 ) * 1.6;
	float n = wolkenWert( p ) * 0.6 + wolkenWert( dreh * p * 2.3 + 7.1 ) * 0.28 + wolkenWert( dreh * dreh * p * 4.9 + 2.3 ) * 0.12;
	return 1.0 - wolken.z * smoothstep( 0.52, 0.68, n );
}`;{let e=o.lights_fragment_begin,t=e.indexOf(`directionalLight = directionalLights[ i ];`),n=e.indexOf(`RE_Direct(`,t);o.lights_fragment_begin=e.slice(0,n)+`#if ( UNROLLED_LOOP_INDEX == 0 )
		directLight.color *= wolkenSchatten( geometryPosition, directLight.direction );
		#endif

		`+e.slice(n)}function pt({renderer:e,szene:n,kamera:i,sonne:a,hell:o,stand:l,klein:u,ringInnen:d=200}){let m=new URLSearchParams(location.search),h=m.has(`nachbearbeitung`)?m.get(`nachbearbeitung`)!==`0`:!u,_={richtung:a.position.clone(),hintergrund:null},y=new g;y.visible=!1,n.add(y);let b=new T({uniforms:{unten:{value:new c},oben:{value:new c}},vertexShader:`varying float vHoehe;
void main() { vHoehe = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 unten;
uniform vec3 oben;
varying float vHoehe;
void main() {
  gl_FragColor = vec4(mix(unten, oben, pow(smoothstep(0.0, 0.4, vHoehe), 0.7)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,side:1,depthWrite:!1,fog:!1}),x=new Ee(new C(1400,32,16),b);x.frustumCulled=!1,x.renderOrder=-1,y.add(x);let S=new v(16777215,300,1400),w=(e,t,n)=>new c(e).lerp(new c(t),n),E=new k(d,1700,72,18).rotateX(-Math.PI/2).translate(0,-.08,0),O=new Ee(I(E,s.wiese,Ne.get(s.wiese)),D);O.receiveShadow=!0,y.add(O);let ee=new fe({color:16777215,flatShading:!0,roughness:1,emissive:2765120}),A=re(31),te=[];for(let e=0;e<16;e++){let e=[],t=3+Math.floor(A()*3);for(let n=0;n<t;n++){let r=new L(1,0),i=.55+A()*.5;r.scale(i,i*.6,i).translate((n-(t-1)/2)*.8+(A()-.5)*.4,i*.15,(A()-.5)*.7),e.push(r)}let n=new Ee(Oe(e),ee);n.scale.setScalar(28+A()*40),te.push({m:n,R:620+A()*730,phi:A()*Math.PI*2,y:190+A()*80}),y.add(n)}let j=null,M=null,N=null;function ne(){let{width:t,height:r}=e.getSize(new K);j=new J(e,new p(t,r,{type:F,samples:4,depthTexture:new f(t,r)})),j.setPixelRatio(e.getPixelRatio()),j.setSize(t,r),j.addPass(new Ke(n,i)),M=new nt(n,i,t,r,void 0,{radius:2.4,distanceExponent:1.3,thickness:1.5,scale:1.1,samples:16},{radius:6,samples:8}),M.setGBuffer(j.readBuffer.depthTexture);let a=M.setSize.bind(M);M.setSize=(e,t)=>a(Math.max(1,Math.round(e/2)),Math.max(1,Math.round(t/2))),M.blendIntensity=1,j.addPass(M),N=new it(new K(t,r),.7,.45,.7),j.addPass(N),j.addPass(new ot)}let P=!1,ie=ft[l.jahr];function R(e){P=e,y.visible=P,n.fog=P?S:null,P&&n.background&&(_.hintergrund=n.background),n.background=P?null:_.hintergrund,X.z=0,P||a.position.copy(_.richtung),P&&h&&!j&&ne()}let oe=new c,se=new c,ce=new r;function le(e){if(!P)return;let n=Y.tag,r=Y.nacht,s=l.licht===`nacht`?1:l.nacht,u=4*s*(1-s),d=t.uHerbst.value,f=t.uSchnee.value;oe.setHex(n.sonne[0]).lerp(new c(st.sonne),d*(1-f)).lerp(new c(ct.sonne),f),se.setHex(n.himmel[0]).lerp(new c(st.himmel),d*(1-f)*.6).lerp(new c(ct.himmel),f),oe.lerp(new c(r.sonne[0]),s).lerp(new c(lt.sonne),u*.75),se.lerp(new c(r.himmel[0]),s).lerp(new c(lt.himmel),u*.6),a.color.copy(oe),a.intensity=(n.sonne[1]*(1-.25*f)*(1-s)+r.sonne[1]*s)*l.dunkel,o.color.copy(se),o.groundColor.setHex(n.himmel[1]).lerp(new c(r.himmel[1]),s),o.intensity=(n.himmel[2]*(1+.25*f)*(1-s)+r.himmel[2]*s)*l.dunkel;let p=(l.foehn??0)*(1-s);p>0&&(a.color.lerp(new c(H.sonne.farbe),p),a.intensity+=(H.sonne.staerke*l.dunkel-a.intensity)*p,o.color.lerp(new c(H.himmelslicht.farbe),p),o.groundColor.lerp(new c(H.himmelslicht.boden),p),o.intensity+=(H.himmelslicht.staerke*l.dunkel-o.intensity)*p),ie+=(ft[l.jahr]*(1-.55*u)-ie)*Math.min(1,e*.8);let m=Math.atan2(_.richtung.z,_.richtung.x),h=ae.degToRad(ie);a.position.set(Math.cos(m)*Math.cos(h),Math.sin(h),Math.sin(m)*Math.cos(h)).multiplyScalar(_.richtung.length());let[g,v]=[0,1].map(e=>w(dt.tag[e],dt.herbst[e],d*(1-f)).lerp(new c(dt.winter[e]),f).lerp(new c(dt.nacht[e]),s).lerp(new c(lt.himmelfarbe[e]),u*[.7,.4][e]));if(b.uniforms.unten.value.copy(g),b.uniforms.oben.value.copy(v),p>0&&(b.uniforms.unten.value.lerp(new c(H.himmel.unten),p),b.uniforms.oben.value.lerp(new c(H.himmel.oben),p)),l.dunkel<1)for(let e of[b.uniforms.unten.value,b.uniforms.oben.value])e.lerp(ut,1-l.dunkel);S.color.copy(b.uniforms.unten.value),t.uHimmelUnten.value.copy(b.uniforms.unten.value),t.uHimmelOben.value.copy(b.uniforms.oben.value),x.position.copy(i.position),i.getWorldDirection(ce);let y=ce.y<-.05?Math.min(900,-i.position.y/ce.y):900;S.near=y*.7+30,S.far=Math.min(1400,S.near+340+y*1.3),S.near*=1+(H.dunstweite-1)*p,S.far*=1+(H.dunstweite-1)*p;for(let t of te)t.phi+=2.5/t.R*e,t.m.position.set(Math.cos(t.phi)*t.R,t.y,Math.sin(t.phi)*t.R);X.x=(X.x-3.2*e)%(X.w*64),X.y=(X.y-1.9*e)%(X.w*64),X.z=(.3*s+(.55+.1*f)*(1-s)+(1-l.dunkel)*.4)*(1-(1-H.wolkenschatten)*p),N&&(N.enabled=s>.02)}function ue(t){if(!P||!j)return e.render(n,i);M.gtaoMaterial.uniforms.tDepth.value=M.pdMaterial.uniforms.tDepth.value=j.readBuffer.depthTexture,j.render(t)}function de(e,t){j?.setSize(e,t)}return{schalte:R,jedesBild:le,render:ue,groesse:de,get an(){return P}}}R(`niedlich`);var mt=10/Math.sqrt(3),ht=(e,t)=>`${e},${t}`,gt=e=>e.split(`,`).map(Number),Z=e=>{let[t,n]=gt(e);return new K(10*(t+n/2),1.5*mt*n)},Q=(e,t)=>(Math.abs(e)+Math.abs(t)+Math.abs(e+t))/2,_t=(e,[t,n]=[0,0])=>{let r=[];for(let i=-e;i<=e;i++)for(let a=-e;a<=e;a++)Q(a,i)<=e&&r.push(ht(t+a,n+i));return r};function vt(e,t){let n=t/(1.5*mt),r=e/10-n/2,i=-r-n,a=Math.round(r),o=Math.round(n),s=Math.round(i),c=Math.abs(a-r),l=Math.abs(o-n),u=Math.abs(s-i);return c>l&&c>u?a=-o-s:l>u&&(o=-a-s),ht(a,o)}var yt=[[`gewaesser`,-8,16,6],[`wald`,-9,-7,4],[`hof`,15,-8,5]],bt=new Set(yt.flatMap(([,e,t,n])=>_t(n,[e,t]))),$=[[-11,0,0,23],[-1,-1,0,2],[2,-1,0,2],[0,-2,0,4],[-5,-6,0,17],[-4,-7,5,17],[11,-7,4,15]],xt=new Set($.flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>ht(e+i*xe[n][0],t+i*xe[n][1]))).filter(e=>!bt.has(e))),St=`1,-1`,Ct=new Set([..._t(1,gt(St)),...$.slice(1,4).flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>ht(e+i*xe[n][0],t+i*xe[n][1])))]),wt={detail:1,modelle:new Map},Tt={0:1,1:0,2:2},Et=new Map,Dt=new Map,Ot=e=>e.shadowSide??Tt[e.side],kt=(e,t)=>e.castShadow&&!e.customDepthMaterial&&t&&t.visible!==!1&&!(t.alphaTest>0)&&!t.alphaMap&&!(t.map&&t.transparent);function At(e){let t=[],n=e=>{if(!(e.userData.nurNah||e.name===`Schatten`)){e.isMesh&&t.push(e);for(let t of e.children)n(t)}};n(e);let i=e=>e.geometry.groups.length?e.geometry.groups:[{start:0,count:1/0,materialIndex:0}],a=t.filter(e=>i(e).every(t=>kt(e,[].concat(e.material)[t.materialIndex??0])));if(!a.length)return;let o=Dt.get(e.userData.schluessel);if(!o){e.updateMatrixWorld(!0);let t=e.matrixWorld.clone().invert(),n=new B,s=new r,c=new Map;for(let e of a){n.multiplyMatrices(t,e.matrixWorld);let r=(e.geometry.index?e.geometry.toNonIndexed():e.geometry).attributes.position,a=[].concat(e.material),o=n.determinant()<0?[0,2,1]:[0,1,2];for(let t of i(e)){let e=Ot(a[t.materialIndex??0]),i=c.get(e)??c.set(e,[]).get(e),l=Math.min(r.count,t.start+t.count);for(let e=t.start;e+2<l;e+=3)for(let t of o)s.fromBufferAttribute(r,e+t).applyMatrix4(n),i.push(s.x,s.y,s.z)}}o=[...c].map(([e,t])=>{let n=new S;return n.setAttribute(`position`,new u(t,3)),n.computeBoundingSphere(),{seite:e,geo:n}}),Dt.set(e.userData.schluessel,o)}for(let e of a)e.castShadow=!1;for(let{seite:t,geo:n}of o){let r=Et.get(t)??Et.set(t,new se({shadowSide:t,visible:!1})).get(t),i=new Ee(n,r);i.name=`Schatten`,i.castShadow=!0,i.receiveShadow=!1,i.raycast=()=>{},e.add(i)}}function jt(e){let t=re(e),n=de({radius:11});for(let e of bt)n.felder.delete(e);for(let e of xt)n.strassen.add(e);Me(n,St,z(`wahrzeichen`,t,{...wt,typ:`mariensaeule`}),1);let r=[...G],i=[je],a=t()<.5?3:4;for(;i.length<a;)i.push(...r.splice(Math.floor(t()*r.length),1));let o=[...i.map(e=>z(`wahrzeichen`,t,{...wt,typ:e})),...[0,1,2].map(()=>z(`betrieb`,t,wt)),...[6,6,5,5,3].map(e=>({art:`wohnen`,stufe:e}))];U(n,o,t);for(let e of[...n.haeuser.values()])e.art===`wohnen`&&(e.stufe===0||e.stufe===4)&&t()<Math.max(0,Q(...gt(e.vorn[0]))-4)/14&&pe(n,e.id);for(let e=0;e<2;e++)for(let e of[...n.haeuser.values()])e.art===`wohnen`&&n.haeuser.has(e.id)&&t()<.5&&ke(n,e.id);return n}function Mt(n,{leer:i=!1,rand:o=yt,belegt:u=[],land:f=12,weit:p=26,bodenVon:m=()=>s.wiese,hoeheVon:h=()=>0}={}){let v=Math.min(innerWidth,innerHeight)<700,x=new w({canvas:n,antialias:!0});x.setPixelRatio(Math.min(devicePixelRatio,v?1.5:2)),x.shadowMap.enabled=!0,x.shadowMap.type=1;let S=x.shadowMap.render.bind(x.shadowMap);x.shadowMap.render=(...e)=>{for(let e of Et.values())e.visible=!0;try{S(...e)}finally{for(let e of Et.values())e.visible=!1}},x.toneMapping=4;let C=new a,T=new P,D=new te;D.position.set(-28,46,34).setLength(240),D.castShadow=!0,D.shadow.mapSize.setScalar(v?2048:4096),Object.assign(D.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:20,far:560}),D.shadow.bias=-4e-4,D.shadow.normalBias=.05,D.shadow.radius=3;let O=new g;O.add(D,D.target),C.add(T,O);let k=new me(32,1,1,1500),M={licht:`tag`,jahr:`sommer`,stimmung:!1,dunkel:1,nacht:0,foehn:0},F=pt({renderer:x,szene:C,kamera:k,sonne:D,hell:T,stand:M,klein:v,ringInnen:p>26?(p-.7)*1.5*mt:200});new ResizeObserver(()=>{let{clientWidth:e,clientHeight:t}=n;x.setSize(e,t,!1),F.groesse(e,t),k.aspect=e/t,k.updateProjectionMatrix()}).observe(n);let I={tag:{himmel:[14411504,10130570,1.4],sonne:[16773852,2.6],fenster:0,laterne:1},nacht:{himmel:[7375032,3816520,.95],sonne:[11584746,1.1],fenster:.7,laterne:3}},L={tag:[new c(13490398),new c(13884386)],nacht:[new c(1318188),new c(2502204)]};N(`glass`).emissive.setHex(16757596);let R=()=>M.licht===`nacht`?1:M.nacht,ae=new c,oe=(e,t,n,r)=>e.setHex(t).lerp(ae.setHex(n),r);function se(){let e=I.tag,t=I.nacht,n=R(),r=(e,t)=>e+(t-e)*n;oe(T.color,e.himmel[0],t.himmel[0],n),oe(T.groundColor,e.himmel[1],t.himmel[1],n),T.intensity=r(e.himmel[2],t.himmel[2])*M.dunkel,oe(D.color,e.sonne[0],t.sonne[0],n),D.intensity=r(e.sonne[1],t.sonne[1])*M.dunkel,N(`glass`).emissiveIntensity=r(e.fenster,t.fenster),N(`lamp`).emissiveIntensity=r(e.laterne,t.laterne)}let le=new c,de=new c;C.background=le;let pe=_t(f),z=new g,ye=i?new Set([...o.flatMap(([,e,t,n])=>_t(n,[e,t])),...u]):bt;C.add(z);let B=i?new Set:xt,V=new g,Oe=e=>{let t=Z(e);return{x:t.x,z:t.y,y:h(e),boden:B.has(e)?12365456:m(e),ohneFuge:i}};function H(e,t=z){e.length&&ie({gruppe:t},e.map(Oe),re(e.length))}let U=new g;U.visible=!1,z.add(U);for(let e of[`voll`,`duenn`,`rest`,`wachsen`,`band`])j[e].value=Pe.streu[e];let W=ne(U,{dichte:e=>(v?.5:1)*(Math.hypot(e.x,e.z)<110?.4:.8),kachel:Pe.streu.kachel,nah:Pe.nah,steine:Pe.fern}),G={rand:[],weite:[],stadt:[]},ke=new Map,Ae=e=>ke.get(e)??ke.set(e,Oe(e)).get(e),je=(e,t)=>{e===`rand`?G.rand.push(...t.map(Ae)):G[e]=t.map(Ae),W.setze([...G.rand,...G.weite,...G.stadt])};function Me(){z.remove(V),V.traverse(e=>e.geometry?.dispose()),V=new g,H(pe.filter(e=>!ye.has(e)),V),z.add(V)}Me();let Ne=[],Le=new Set(u);function ze([e,t,n,r],i){let a=be(e,{wurf:4711,jahreszeit:M.jahr}),o=Z(ht(t,n)),s=new Set;a.gruppe.position.set(o.x,0,o.y),C.add(a.gruppe),Ne.push(a);for(let e of a.felder)s.add(vt(e.x+o.x,e.z+o.y));for(let e of s)Le.add(e);let c=new Set(pe),l=_t(r,[t,n]).filter(e=>c.has(e)&&!s.has(e));H(l),je(`rand`,l),setTimeout(i,0)}let q=new g;q.visible=!1,z.add(q);function Be(){let e=new Set(pe),t=_t(p).filter(t=>!e.has(t)&&!Le.has(t));H(t,q),je(`weite`,t)}let Ve=_(new fe({vertexColors:!0,flatShading:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),!1),He=new g;He.visible=!1,z.add(He);let Ue=null,We=!1;function Ge(){We=!1;for(let e of He.children)e.geometry.dispose();if(He.clear(),!Ue)return;let e=new Set([...Ue.haeuser.values()].flatMap(e=>e.felder).concat([...Ue.kanaele??[]],i?[]:St,ee(Ue).map(e=>e.f)));if(je(`stadt`,pe.filter(t=>!ye.has(t)&&!B.has(t)&&!e.has(t))),i)return;let t=new Set([...Ue.haeuser.values()].flatMap(e=>e.felder.filter(t=>t!==e.garten))),n=new we;for(let e of B){let[r,i]=gt(e),a=Z(e),o=xe.map(([e,t])=>ht(r+e,i+t)),s=o.filter(e=>B.has(e)),c=e=>{let t=Z(e);return he(t.x-a.x,t.y-a.y)},l=Ct.has(e);Se(n,[a.x,a.y],mt*1.005,{verband:l?`diagonal`:`reihe`,platten:o.filter(e=>t.has(e)).map(c),rinnen:l||s.length>2?[]:s.filter(e=>!Ct.has(e)).map(c),rnd:_e(r*131+i*7+1)})}if(n.leer)return;let r=new Ee(n.geometrie(()=>0,1e4),Ve);r.receiveShadow=!0,He.add(r)}let J=new g,Ke=new Set;C.add(J);function qe(e){C.remove(J);for(let e of J.children)e.userData.schluessel||e.traverse(e=>e.geometry?.dispose());J=new g,ge(e,J,i?{...wt,wegPlatzerl:!0}:wt);let t=e=>{let t=e.felder?.filter(t=>t!==e.garten)??[];return Math.max(...(t.length?t:e.vorn).map(h))};for(let n of J.children){let r=e.haeuser.get(n.userData.sandId);n.userData.y0??=n.position.y,n.position.y=n.userData.y0+(r?.vorn?t(r):h(vt(n.position.x,n.position.z)))}Ke=new Set;for(let t of e.haeuser.values())t.bau&&(Ke.add(t.id),t.bau.mit&&Ke.add(t.bau.mit));if(Re.schattennetz)for(let e of J.children)e.userData.schluessel&&e.userData.sandId&&!Ke.has(e.userData.sandId)&&At(e);C.add(J),Ue=e,We=!0}let Je=new Map,Ye=new Map,Xe=new WeakMap,Ze=new WeakMap,Qe=new r(1/0,0,0),$e=null,et=null,tt=E.uDachMuster.value,nt=new r;function rt(){Fe.x=k.position.x,Fe.y=k.position.y,Fe.z=k.position.z,nt.set(0,-1,.5).unproject(k).sub(k.position).normalize();let t=nt.y<-1e-6?k.position.y/-nt.y:1/0;if(E.uDachMuster.value=tt&&t<Pe.fern?1:0,U.visible&&W.blick(k.position),$e!==J||et!==Re.fernhaus||Qe.distanceToSquared(k.position)>4){$e=J,et=Re.fernhaus,Qe.copy(k.position);for(let e of J.children)e.userData.sandId&&it(e)}let[n,r]=Ye.entries().next().value??[];n&&(Ye.delete(n),Je.has(n)||Je.set(n,e(r[1],{detail:0,modelle:wt.modelle,seiten:r[0].userData.seiten??[],hinten:r[0].userData.hinten??null})),$e=null)}function it(e){let t=Ie(e.position.distanceTo(k.position)),n=Ue?.haeuser.get(e.userData.sandId),r=t===2&&Re.fernhaus&&n&&e.userData.schluessel&&!Ke.has(n.id),i=r?Je.get(e.userData.schluessel):null;r&&!i&&Ye.set(e.userData.schluessel,[e,n]);let a=`${t}|${!!i}`;if(e.userData.stufe===a)return;e.userData.stufe=a;let o=Xe.get(e),s=Ze.get(e);if(s||(s=[],e.traverse(e=>{e.userData.nurNah&&s.push(e)}),Ze.set(e,s)),i&&!o&&(o=i.clone(!0),o.name=`Fern`,o.visible=!1,o.userData={schluessel:i.userData.schluessel},o.position.set(0,0,0),o.rotation.set(0,0,0),o.traverse(e=>{e.userData.nurNah&&(e.visible=!1)}),e.children.some(e=>e.name===`Schatten`)&&At(o),e.add(o),Xe.set(e,o)),!!i!=!!o?.visible){for(let t of e.children)t!==o&&(t.visible=!i);o.visible=!!i}for(let e of s)e.visible=t===0&&!i}let at=D.shadow.mapSize.x,ot=380/at,Y=D.shadow.camera,st=[[-1,-1],[1,-1],[1,1],[-1,1]],ct=new r,lt=new r,ut=new r;function dt(){let e=-190,t=190,n=-190,r=190,i=at,a=at;if(Re.schattenbox){O.updateMatrixWorld(!0),k.updateMatrixWorld(),Y.position.setFromMatrixPosition(D.matrixWorld),Y.lookAt(ut.setFromMatrixPosition(D.target.matrixWorld)),Y.updateMatrixWorld();let o=1/0,s=-1/0,c=1/0,l=-1/0,u=e=>{e.applyMatrix4(Y.matrixWorldInverse),o=Math.min(o,e.x),s=Math.max(s,e.x),c=Math.min(c,e.y),l=Math.max(l,e.y)};u(lt.copy(k.position));for(let[e,t]of st){ct.set(e,t,.5).unproject(k).sub(k.position).normalize();for(let e of[-2,45]){let t=ct.y<-1e-6?(e-k.position.y)/ct.y:k.far;t>0&&u(lt.copy(k.position).addScaledVector(ct,Math.min(t,k.far)))}}let d=e=>Math.min(at,Math.max(256,Math.ceil((e+8)/ot/256)*256));i=d(Math.min(s,190)-Math.max(o,-190)),a=d(Math.min(l,190)-Math.max(c,-190));let f=(e,t,n)=>n===at?0:Math.round((Math.max(e,-190)+Math.min(t,190))/2/ot)*ot,p=f(o,s,i),m=f(c,l,a);[e,t,n,r]=[p-i/2*ot,p+i/2*ot,m-a/2*ot,m+a/2*ot]}(Y.left!==e||Y.right!==t||Y.bottom!==n||Y.top!==r)&&(Object.assign(Y,{left:e,right:t,bottom:n,top:r}),Y.updateProjectionMatrix()),(D.shadow.mapSize.x!==i||D.shadow.mapSize.y!==a)&&D.shadow.mapSize.set(i,a)}let ft=(i?[]:[[`-1,-1`,-3.2,1],[`3,-1`,3.2,2]]).map(([e,t,n])=>{let r=new Ee(A(`linde`,{seed:n,alter:`jung`,form:`frei`}),d),i=Z(e);return r.position.set(i.x+t,0,i.y),r.rotation.y=n*2.1,r.castShadow=r.receiveShadow=!0,r.userData.feld=e,C.add(r),r}),X=new g,Q=y().figur,$=re(17),Tt=()=>M.stimmung?.14:0;C.add(X);let Dt=e=>{let t=new Ee(e,b);return t.scale.setScalar(Q),t.castShadow=!0,t},Ot=()=>new Map([...B].map(e=>{let[t,n]=gt(e);return[e,xe.map(([e,r])=>ht(t+e,n+r)).filter(e=>B.has(e))]})),kt=Ot(),jt=[`marktfrau`,`baecker`,`wassertraegerin`,`hausierer`,`mueller`,`pfarrer`],Mt=Array.from({length:i?0:15},(e,t)=>{let n=101+t,r=Math.floor($()*6),i=t%3==0,a=i?ue(r,{seed:n}):t%4==1?{...Te[jt[(t>>2)%jt.length]].bau(!0),seed:n}:ce(r,{seed:n}),o=Dt(ve(a)),s=$.pick([...B]),c=$.pick(kt.get(s));X.add(o);let l={m:o,von:s,nach:c,pos:Z(s),ziel:null,v:Q*(i?1.25:.85)*(.85+$()*.3),weg:$()*10};return Nt(l),l});function Nt(e){let t=Z(e.von),n=Z(e.nach),r=n.clone().sub(t).normalize();e.ziel=n.add(new K(-r.y,r.x).multiplyScalar(1.6+($()-.5)*.8))}function Pt(e,t){if(!e.m.visible)return;let n=e.ziel.clone().sub(e.pos),r=n.length(),i=e.v*t;if(r<=i){e.pos.copy(e.ziel);let t=kt.get(e.nach).filter(t=>t!==e.von);[e.von,e.nach]=[e.nach,$.pick(t.length?t:kt.get(e.nach))],Nt(e)}else e.pos.addScaledVector(n,i/r),e.weg+=i,e.m.position.set(e.pos.x,Tt()+.05*Q*Math.abs(Math.sin(e.weg*2.6/Q)),e.pos.y),e.m.rotation.y=Math.atan2(n.x,n.y)}function Ft(e){B=new Set(e);for(let e of ft)e.visible=B.has(e.userData.feld);i||Me(),We=!0,kt=Ot();let t=[...B].filter(e=>kt.get(e).length);for(let e of Mt)e.m.visible=t.length>0,!(!e.m.visible||kt.get(e.von)?.includes(e.nach)&&kt.has(e.nach))&&(e.von=$.pick(t),e.nach=$.pick(kt.get(e.von)),e.pos=Z(e.von),Nt(e))}let It=i?null:(()=>{let e=ve({...ue(2,{seed:7}),traegt:`reifen`}),{reifen:t,r:n}=e.userData,r=new g,i=new g,a=Dt(e);return i.position.copy(t).multiplyScalar(Q),i.add(Dt(Ce({r:n}))),r.add(a,i),X.add(r),{laeufer:r,achse:i,m:a,r:n,phi:0,weg:0}})();function Lt(e){let t=It,n=Z(St),r=7.2,i=1.3*Q;t.phi+=i/r*e,t.weg+=i*e,t.laeufer.position.set(n.x+r*Math.cos(t.phi),Tt(),n.y+r*Math.sin(t.phi)),t.laeufer.rotation.y=Math.atan2(-Math.sin(t.phi),Math.cos(t.phi)),t.m.position.y=.06*Q*Math.abs(Math.sin(t.weg*3)),t.achse.rotation.x=t.weg/(t.r*Q)}let Rt=[`uFrueh`,`uHerbst`,`uKahl`,`uSchnee`,`uEis`];function zt(e,n=!1,{dauer:r}={}){M.jahr=e;for(let t of Ne)t.jahreszeit(e,n,{dauer:r});if(n||!Ne.length)for(let n of Rt)t[n].value=De[e][n]}let Bt=new l,Vt=[];x.setAnimationLoop(e=>{Bt.update(e);let n=Math.min(.1,Bt.getDelta()),r=Bt.getElapsed();t.uZeit.value=r;for(let e of Ne)e.jedesBild(r,n);for(let e of Mt)Pt(e,n);It&&Lt(n);let[i,a]=L.tag,[o,s]=L.nacht,c=R(),l=t.uSchnee.value;le.copy(i).lerp(a,l).lerp(de.copy(o).lerp(s,l),c).multiplyScalar(M.dunkel),M.stimmung||(t.uHimmelUnten.value.copy(le),t.uHimmelOben.value.copy(le));for(let e of Vt)e(n,r);rt(),dt(),We&&M.stimmung&&Ge(),F.jedesBild(n),F.render(n)});function Ht(){requestAnimationFrame(()=>{document.body.classList.add(`fertig`);let e=t=>()=>{t<o.length?ze(o[t],e(t+1)):Be()};setTimeout(e(0),50)})}function Ut(e){M.stimmung=e,F.schalte(e),q.visible=He.visible=U.visible=e,e&&(We=!0),se()}return Ut(new URLSearchParams(location.search).get(`stimmung`)!==`0`),{klein:v,renderer:x,szene:C,kamera:k,stand:M,licht:se,jahr:zt,stimmung:Ut,zeigeStadt:qe,legeStrassen:Ft,jedesBild:Vt,start:Ht,schattenAuf:(e,t)=>O.position.set(Math.round(e/16)*16,0,Math.round(t/16)*16),schattenKamera:Y,weite:q,get haeuser(){return J}}}export{vt as a,_t as c,Re as d,Pe as f,ht as i,wt as l,Q as n,gt as o,Le as p,Mt as r,Z as s,mt as t,jt as u};