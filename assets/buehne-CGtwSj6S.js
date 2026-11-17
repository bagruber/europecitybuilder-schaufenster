import{$t as e,An as t,Bt as n,Cr as r,Dn as i,E as a,En as o,F as s,Ft as c,G as l,Hn as u,Ht as d,I as f,It as p,Jn as m,K as h,L as g,Mn as _,N as v,Nn as y,O as b,On as x,P as S,Pn as C,S as w,Sn as T,Tn as E,Un as D,Ut as O,V as ee,Vn as te,W as ne,Wn as k,Xn as re,Yn as A,Z as j,Zn as M,_r as N,an as P,at as ie,br as F,c as ae,fn as I,g as L,gr as R,i as oe,j as se,jn as z,kn as B,l as ce,lr as le,mn as ue,n as de,nn as V,nr as fe,nt as pe,or as H,pn as U,pr as me,qn as he,rr as W,rt as ge,s as _e,sn as G,sr as ve,st as ye,t as be,un as xe,ur as K,v as Se,vn as Ce,vr as we,xn as q,xr as J,yr as Y,yt as Te,zt as Ee}from"./boden-BRv4FNXU.js";var De={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Oe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ke=new re(-1,1,1,-1,0,1),Ae=new class extends Ce{constructor(){super(),this.setAttribute(`position`,new B([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new B([0,2,0,0,2,0],2))}},je=class{constructor(e){this._mesh=new D(Ae,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ke)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Me=class extends Oe{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof K?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=N.clone(e.uniforms),this.material=new K({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new je(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ne=class extends Oe{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Pe=class extends Oe{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Fe=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new F);this._width=n.width,this._height=n.height,t=new r(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Me(De),this.copyPass.material.blending=0,this.timer=new R}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ne!==void 0&&(r instanceof Ne?n=!0:r instanceof Pe&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new F);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ie=class extends Oe{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new q}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},X={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new F},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new u},cameraProjectionMatrixInverse:{value:new u},cameraWorldMatrix:{value:new u},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new J(-1,-1,-1)},sceneBoxMax:{value:new J(1,1,1)}},vertexShader:`

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
		}`},Z={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Le={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Re(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=ze(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new J(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new E(i,t,t);return a.wrapS=H,a.wrapT=H,a.needsUpdate=!0,a}function ze(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Q={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Be(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new F},cameraProjectionMatrixInverse:{value:new u},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Be(e,t,n){let r=Ve(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Ve(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new J(Math.cos(a),Math.sin(a),o))}return r}var He=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,te=v-w+2*d,ne=g-1+3*d,k=_-1+3*d,re=v-1+3*d,A=c&255,j=l&255,M=u&255,N=this.perm[A+this.perm[j+this.perm[M]]]%12,P=this.perm[A+y+this.perm[j+b+this.perm[M+x]]]%12,ie=this.perm[A+S+this.perm[j+C+this.perm[M+w]]]%12,F=this.perm[A+1+this.perm[j+1+this.perm[M+1]]]%12,ae=.6-g*g-_*_-v*v;ae<0?r=0:(ae*=ae,r=ae*ae*this._dot3(this.grad3[N],g,_,v));let I=.6-T*T-E*E-D*D;I<0?i=0:(I*=I,i=I*I*this._dot3(this.grad3[P],T,E,D));let L=.6-O*O-ee*ee-te*te;L<0?a=0:(L*=L,a=L*L*this._dot3(this.grad3[ie],O,ee,te));let R=.6-ne*ne-k*k-re*re;return R<0?o=0:(R*=R,o=R*R*this._dot3(this.grad3[F],ne,k,re)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,te=T>E?8:0,ne=w>D?4:0,k=T>D?2:0,re=+(E>D),A=O+ee+te+ne+k+re,j=+(a[A][0]>=3),M=+(a[A][1]>=3),N=+(a[A][2]>=3),P=+(a[A][3]>=3),ie=+(a[A][0]>=2),F=+(a[A][1]>=2),ae=+(a[A][2]>=2),I=+(a[A][3]>=2),L=+(a[A][0]>=1),R=+(a[A][1]>=1),oe=+(a[A][2]>=1),se=+(a[A][3]>=1),z=w-j+c,B=T-M+c,ce=E-N+c,le=D-P+c,ue=w-ie+2*c,de=T-F+2*c,V=E-ae+2*c,fe=D-I+2*c,pe=w-L+3*c,H=T-R+3*c,U=E-oe+3*c,me=D-se+3*c,he=w-1+4*c,W=T-1+4*c,ge=E-1+4*c,_e=D-1+4*c,G=h&255,ve=g&255,ye=_&255,be=v&255,xe=o[G+o[ve+o[ye+o[be]]]]%32,K=o[G+j+o[ve+M+o[ye+N+o[be+P]]]]%32,Se=o[G+ie+o[ve+F+o[ye+ae+o[be+I]]]]%32,Ce=o[G+L+o[ve+R+o[ye+oe+o[be+se]]]]%32,we=o[G+1+o[ve+1+o[ye+1+o[be+1]]]]%32,q=.6-w*w-T*T-E*E-D*D;q<0?l=0:(q*=q,l=q*q*this._dot4(i[xe],w,T,E,D));let J=.6-z*z-B*B-ce*ce-le*le;J<0?u=0:(J*=J,u=J*J*this._dot4(i[K],z,B,ce,le));let Y=.6-ue*ue-de*de-V*V-fe*fe;Y<0?d=0:(Y*=Y,d=Y*Y*this._dot4(i[Se],ue,de,V,fe));let Te=.6-pe*pe-H*H-U*U-me*me;Te<0?f=0:(Te*=Te,f=Te*Te*this._dot4(i[Ce],pe,H,U,me));let Ee=.6-he*he-W*W-ge*ge-_e*_e;return Ee<0?p=0:(Ee*=Ee,p=Ee*Ee*this._dot4(i[we],he,W,ge,_e)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Ue=class e extends Oe{constructor(e,t,n=512,i=512,a,o,s){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Re(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new r(this.width,this.height,{type:_,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new K({defines:Object.assign({},X.defines),uniforms:N.clone(X.uniforms),vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new he,this.normalMaterial.blending=0,this.pdMaterial=new K({defines:Object.assign({},Q.defines),uniforms:N.clone(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new K({defines:Object.assign({},Z.defines),uniforms:N.clone(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new K({uniforms:N.clone(De.uniforms),vertexShader:De.vertexShader,fragmentShader:De.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new K({uniforms:N.clone(Le.uniforms),vertexShader:Le.vertexShader,fragmentShader:Le.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new je(null),this._originalClearColor=new q,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),s!==void 0&&this.updatePdMaterial(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new i,this.depthTexture.format=o,this.depthTexture.type=Y,this.normalRenderTarget=new r(this.width,this.height,{minFilter:A,magFilter:A,type:_,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,a=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=a,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=a,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Be(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new He,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new E(r,e,e,fe,we);return i.wrapS=H,i.wrapT=H,i.needsUpdate=!0,i}};Ue.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var We={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new q(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Ge=class e extends Oe{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e===void 0?new F(256,256):new F(e.x,e.y),this.clearColor=new q(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new r(a,o,{type:_,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new r(a,o,{type:_,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new r(a,o,{type:_,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),a=Math.round(a/2),o=Math.round(o/2)}let s=We;this.highPassUniforms=N.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new K({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new F(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=N.clone(De.uniforms),this.blendMaterial=new K({uniforms:this.copyUniforms,vertexShader:De.vertexShader,fragmentShader:De.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new q,this._oldClearAlpha=1,this._basic=new k,this._fsQuad=new je(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new F(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new K({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new F(.5,.5)},direction:{value:new F(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new K({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ge.BlurDirectionX=new F(1,0),Ge.BlurDirectionY=new F(0,1);var Ke={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},qe=class extends Oe{constructor(){super(),this.isOutputPass=!0,this.uniforms=N.clone(Ke.uniforms),this.material=new W({name:Ke.name,uniforms:this.uniforms,vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader}),this._fsQuad=new je(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},T.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Je={tag:{himmel:[11848172,8819292,.95],sonne:[16767398,3.4]},nacht:{himmel:[6059696,2764604,.8],sonne:[10336494,1.15]}},Ye={sonne:16759922,himmel:14206632},Xe={sonne:15922940,himmel:14082286},Ze={sonne:16753242,himmel:9407684,himmelfarbe:[15905930,7307444]},Qe=new q(5199454),$e={tag:[14214116,7117010],herbst:[15259320,8822720],winter:[13818596,10662600],nacht:[2305608,527900]},et={fruehling:40,sommer:47,herbst:33,winter:26},tt={x:0,y:0,z:0,w:95};for(let e of[`lambert`,`phong`,`standard`,`physical`,`toon`])U[e].uniforms.wolken={value:tt};I.lights_pars_begin+=`
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
}`;{let e=I.lights_fragment_begin,t=e.indexOf(`directionalLight = directionalLights[ i ];`),n=e.indexOf(`RE_Direct(`,t);I.lights_fragment_begin=e.slice(0,n)+`#if ( UNROLLED_LOOP_INDEX == 0 )
		directLight.color *= wolkenSchatten( geometryPosition, directLight.direction );
		#endif

		`+e.slice(n)}function nt({renderer:e,szene:n,kamera:a,sonne:o,hell:c,stand:l,klein:u,ringInnen:p=200}){let g=new URLSearchParams(location.search),v=g.has(`nachbearbeitung`)?g.get(`nachbearbeitung`)!==`0`:!u,y={richtung:o.position.clone(),hintergrund:null},b=new z;b.visible=!1,n.add(b);let x=new K({uniforms:{unten:{value:new q},oben:{value:new q}},vertexShader:`varying float vHoehe;
void main() { vHoehe = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 unten;
uniform vec3 oben;
varying float vHoehe;
void main() {
  gl_FragColor = vec4(mix(unten, oben, pow(smoothstep(0.0, 0.4, vHoehe), 0.7)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,side:1,depthWrite:!1,fog:!1}),w=new D(new me(1400,32,16),x);w.frustumCulled=!1,w.renderOrder=-1,b.add(w);let T=new t(16777215,300,1400),E=(e,t,n)=>new q(e).lerp(new q(t),n),O=new ve(p,1700,72,18).rotateX(-Math.PI/2).translate(0,-.08,0),ee=new D(h(O,se.wiese,s.get(se.wiese)),S);ee.receiveShadow=!0,b.add(ee);let ne=new m({color:16777215,flatShading:!0,roughness:1,emissive:2765120}),k=Ee(31),re=[];for(let e=0;e<16;e++){let e=[],t=3+Math.floor(k()*3);for(let n=0;n<t;n++){let r=new C(1,0),i=.55+k()*.5;r.scale(i,i*.6,i).translate((n-(t-1)/2)*.8+(k()-.5)*.4,i*.15,(k()-.5)*.7),e.push(r)}let n=new D(d(e),ne);n.scale.setScalar(28+k()*40),re.push({m:n,R:620+k()*730,phi:k()*Math.PI*2,y:190+k()*80}),b.add(n)}let A=null,j=null,M=null;function N(){let{width:t,height:o}=e.getSize(new F);A=new Fe(e,new r(t,o,{type:_,samples:4,depthTexture:new i(t,o)})),A.setPixelRatio(e.getPixelRatio()),A.setSize(t,o),A.addPass(new Ie(n,a)),j=new Ue(n,a,t,o,void 0,{radius:2.4,distanceExponent:1.3,thickness:1.5,scale:1.1,samples:16},{radius:6,samples:8}),j.setGBuffer(A.readBuffer.depthTexture);let s=j.setSize.bind(j);j.setSize=(e,t)=>s(Math.max(1,Math.round(e/2)),Math.max(1,Math.round(t/2))),j.blendIntensity=1,A.addPass(j),M=new Ge(new F(t,o),.7,.45,.7),A.addPass(M),A.addPass(new qe)}let P=!1,ie=et[l.jahr];function ae(e){P=e,b.visible=P,n.fog=P?T:null,P&&n.background&&(y.hintergrund=n.background),n.background=P?null:y.hintergrund,tt.z=0,P||o.position.copy(y.richtung),P&&v&&!A&&N()}let I=new q,L=new q,R=new J;function oe(e){if(!P)return;let t=Je.tag,n=Je.nacht,r=l.licht===`nacht`?1:l.nacht,i=4*r*(1-r),s=f.uHerbst.value,u=f.uSchnee.value;I.setHex(t.sonne[0]).lerp(new q(Ye.sonne),s*(1-u)).lerp(new q(Xe.sonne),u),L.setHex(t.himmel[0]).lerp(new q(Ye.himmel),s*(1-u)*.6).lerp(new q(Xe.himmel),u),I.lerp(new q(n.sonne[0]),r).lerp(new q(Ze.sonne),i*.75),L.lerp(new q(n.himmel[0]),r).lerp(new q(Ze.himmel),i*.6),o.color.copy(I),o.intensity=(t.sonne[1]*(1-.25*u)*(1-r)+n.sonne[1]*r)*l.dunkel,c.color.copy(L),c.groundColor.setHex(t.himmel[1]).lerp(new q(n.himmel[1]),r),c.intensity=(t.himmel[2]*(1+.25*u)*(1-r)+n.himmel[2]*r)*l.dunkel,ie+=(et[l.jahr]*(1-.55*i)-ie)*Math.min(1,e*.8);let d=Math.atan2(y.richtung.z,y.richtung.x),p=te.degToRad(ie);o.position.set(Math.cos(d)*Math.cos(p),Math.sin(p),Math.sin(d)*Math.cos(p)).multiplyScalar(y.richtung.length());let[m,h]=[0,1].map(e=>E($e.tag[e],$e.herbst[e],s*(1-u)).lerp(new q($e.winter[e]),u).lerp(new q($e.nacht[e]),r).lerp(new q(Ze.himmelfarbe[e]),i*[.7,.4][e]));if(x.uniforms.unten.value.copy(m),x.uniforms.oben.value.copy(h),l.dunkel<1)for(let e of[x.uniforms.unten.value,x.uniforms.oben.value])e.lerp(Qe,1-l.dunkel);T.color.copy(x.uniforms.unten.value),w.position.copy(a.position),a.getWorldDirection(R);let g=R.y<-.05?Math.min(900,-a.position.y/R.y):900;T.near=g*.7+30,T.far=Math.min(1400,T.near+340+g*1.3);for(let t of re)t.phi+=2.5/t.R*e,t.m.position.set(Math.cos(t.phi)*t.R,t.y,Math.sin(t.phi)*t.R);tt.x=(tt.x-3.2*e)%(tt.w*64),tt.y=(tt.y-1.9*e)%(tt.w*64),tt.z=.3*r+(.55+.1*u)*(1-r)+(1-l.dunkel)*.4,M&&(M.enabled=r>.02)}function B(t){if(!P||!A)return e.render(n,a);j.gtaoMaterial.uniforms.tDepth.value=j.pdMaterial.uniforms.tDepth.value=A.readBuffer.depthTexture,A.render(t)}function ce(e,t){A?.setSize(e,t)}return{schalte:ae,jedesBild:oe,render:B,groesse:ce,get an(){return P}}}n(`niedlich`);var rt=10/Math.sqrt(3),it=(e,t)=>`${e},${t}`,at=e=>e.split(`,`).map(Number),$=e=>{let[t,n]=at(e);return new F(10*(t+n/2),1.5*rt*n)},ot=(e,t)=>(Math.abs(e)+Math.abs(t)+Math.abs(e+t))/2,st=(e,[t,n]=[0,0])=>{let r=[];for(let i=-e;i<=e;i++)for(let a=-e;a<=e;a++)ot(a,i)<=e&&r.push(it(t+a,n+i));return r};function ct(e,t){let n=t/(1.5*rt),r=e/10-n/2,i=-r-n,a=Math.round(r),o=Math.round(n),s=Math.round(i),c=Math.abs(a-r),l=Math.abs(o-n),u=Math.abs(s-i);return c>l&&c>u?a=-o-s:l>u&&(o=-a-s),it(a,o)}var lt=[[`gewaesser`,-8,16,6],[`wald`,-9,-7,4],[`hof`,15,-8,5]],ut=new Set(lt.flatMap(([,e,t,n])=>st(n,[e,t]))),dt=[[-11,0,0,23],[-1,-1,0,2],[2,-1,0,2],[0,-2,0,4],[-5,-6,0,17],[-4,-7,5,17],[11,-7,4,15]],ft=new Set(dt.flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>it(e+i*O[n][0],t+i*O[n][1]))).filter(e=>!ut.has(e))),pt=`1,-1`,mt=new Set([...st(1,at(pt)),...dt.slice(1,4).flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>it(e+i*O[n][0],t+i*O[n][1])))]),ht={detail:1,modelle:new Map};function gt(t){let n=Ee(t),r=e({radius:11});for(let e of ut)r.felder.delete(e);for(let e of ft)r.strassen.add(e);P(r,pt,a(`wahrzeichen`,n,{...ht,typ:`mariensaeule`}),1);let i=[...Se],o=[L],s=n()<.5?3:4;for(;o.length<s;)o.push(...i.splice(Math.floor(n()*i.length),1));let c=[...o.map(e=>a(`wahrzeichen`,n,{...ht,typ:e})),...[0,1,2].map(()=>a(`betrieb`,n,ht)),...[6,6,5,5,3].map(e=>({art:`wohnen`,stufe:e}))];xe(r,c,n);for(let e of[...r.haeuser.values()])e.art===`wohnen`&&(e.stufe===0||e.stufe===4)&&n()<Math.max(0,ot(...at(e.vorn[0]))-4)/14&&V(r,e.id);for(let e=0;e<2;e++)for(let e of[...r.haeuser.values()])e.art===`wohnen`&&r.haeuser.has(e.id)&&n()<.5&&G(r,e.id);return r}function _t(e,{leer:t=!1,rand:n=lt,belegt:r=[],land:i=12,weit:a=26,bodenVon:o=()=>se.wiese}={}){let s=Math.min(innerWidth,innerHeight)<700,u=new ue({canvas:e,antialias:!0});u.setPixelRatio(Math.min(devicePixelRatio,s?1.5:2)),u.shadowMap.enabled=!0,u.shadowMap.type=1,u.toneMapping=4;let d=new le,h=new y,_=new x;_.position.set(-28,46,34).setLength(240),_.castShadow=!0,_.shadow.mapSize.setScalar(s?2048:4096),Object.assign(_.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:20,far:560}),_.shadow.bias=-4e-4,_.shadow.normalBias=.05,_.shadow.radius=3;let S=new z;S.add(_,_.target),d.add(h,S);let C=new M(32,1,1,1500),T={licht:`tag`,jahr:`sommer`,stimmung:!1,dunkel:1,nacht:0},E=nt({renderer:u,szene:d,kamera:C,sonne:_,hell:h,stand:T,klein:s,ringInnen:a>26?(a-.7)*1.5*rt:200});new ResizeObserver(()=>{let{clientWidth:t,clientHeight:n}=e;u.setSize(t,n,!1),E.groesse(t,n),C.aspect=t/n,C.updateProjectionMatrix()}).observe(e);let te={tag:{himmel:[14411504,10130570,1.4],sonne:[16773852,2.6],fenster:0,laterne:1},nacht:{himmel:[7375032,3816520,.95],sonne:[11584746,1.1],fenster:.7,laterne:3}},k={tag:[new q(13490398),new q(13884386)],nacht:[new q(1318188),new q(2502204)]};c(`glass`).emissive.setHex(16757596);let re=()=>T.licht===`nacht`?1:T.nacht,A=new q,N=(e,t,n,r)=>e.setHex(t).lerp(A.setHex(n),r);function P(){let e=te.tag,t=te.nacht,n=re(),r=(e,t)=>e+(t-e)*n;N(h.color,e.himmel[0],t.himmel[0],n),N(h.groundColor,e.himmel[1],t.himmel[1],n),h.intensity=r(e.himmel[2],t.himmel[2])*T.dunkel,N(_.color,e.sonne[0],t.sonne[0],n),_.intensity=r(e.sonne[1],t.sonne[1])*T.dunkel,c(`glass`).emissiveIntensity=r(e.fenster,t.fenster),c(`lamp`).emissiveIntensity=r(e.laterne,t.laterne)}let I=new q,L=new q;d.background=I;let B=st(i),V=new z,fe=t?new Set([...n.flatMap(([,e,t,n])=>st(n,[e,t])),...r]):ut;d.add(V);let H=t?new Set:ft,U=new z,me=e=>{let n=$(e);return{x:n.x,z:n.y,boden:H.has(e)?12365456:o(e),ohneFuge:t}};function he(e,t=V){e.length&&ne({gruppe:t},e.map(me),Ee(e.length))}let W=new z,G=new z;W.visible=!1,W.add(G),V.add(W);let ve=e=>{let t=Math.hypot(e.x,e.z);return(s?.5:1)*(t<110?.4:t<160?.8:Math.max(0,.8*(1-(t-160)/70)))},xe=e=>Math.hypot(e.x,e.z)>160,K=(e,t=W)=>{e.length&&l({gruppe:t},e.map(me),{dichte:ve,fern:xe})};function Se(){V.remove(U),U.traverse(e=>e.geometry?.dispose()),U=new z,he(B.filter(e=>!fe.has(e)),U),V.add(U)}Se();let Ce=[],we=new Set(r);function J([e,t,n,r],i){let a=ce(e,{wurf:4711,jahreszeit:T.jahr}),o=$(it(t,n)),s=new Set;a.gruppe.position.set(o.x,0,o.y),d.add(a.gruppe),Ce.push(a);for(let e of a.felder)s.add(ct(e.x+o.x,e.z+o.y));for(let e of s)we.add(e);let c=new Set(B),l=st(r,[t,n]).filter(e=>c.has(e)&&!s.has(e));he(l),K(l),setTimeout(i,0)}let Y=new z;Y.visible=!1,V.add(Y);function De(){let e=new Set(B),t=st(a).filter(t=>!e.has(t)&&!we.has(t));he(t,Y),K(t)}let Oe=ee(new m({vertexColors:!0,flatShading:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),!1),ke=new z;ke.visible=!1,V.add(ke);let Ae=null,je=!1;function Me(){je=!1;for(let e of ke.children)e.geometry.dispose();ke.clear();for(let e of G.children)e.dispose();if(G.clear(),!Ae)return;let e=new Set([...Ae.haeuser.values()].flatMap(e=>e.felder).concat([...Ae.kanaele??[]],t?[]:pt,w(Ae).map(e=>e.f)));if(K(B.filter(t=>!fe.has(t)&&!H.has(t)&&!e.has(t)),G),t)return;let n=new Set([...Ae.haeuser.values()].flatMap(e=>e.felder.filter(t=>t!==e.garten))),r=new be;for(let e of H){let[t,i]=at(e),a=$(e),o=O.map(([e,n])=>it(t+e,i+n)),s=o.filter(e=>H.has(e)),c=e=>{let t=$(e);return de(t.x-a.x,t.y-a.y)},l=mt.has(e);oe(r,[a.x,a.y],rt*1.005,{verband:l?`diagonal`:`reihe`,platten:o.filter(e=>n.has(e)).map(c),rinnen:l||s.length>2?[]:s.filter(e=>!mt.has(e)).map(c),rnd:_e(t*131+i*7+1)})}if(r.leer)return;let i=new D(r.geometrie(()=>0,1e4),Oe);i.receiveShadow=!0,ke.add(i)}let Ne=new z;d.add(Ne);function Pe(e){d.remove(Ne);for(let e of Ne.children)e.userData.schluessel||e.traverse(e=>e.geometry?.dispose());Ne=new z,b(e,Ne,t?{...ht,wegPlatzerl:!0}:ht),d.add(Ne),Ae=e,je=!0}let Fe=(t?[]:[[`-1,-1`,-3.2,1],[`3,-1`,3.2,2]]).map(([e,t,n])=>{let r=new D(Te(`linde`,{seed:n,alter:`jung`,form:`frei`}),g),i=$(e);return r.position.set(i.x+t,0,i.y),r.rotation.y=n*2.1,r.castShadow=r.receiveShadow=!0,r.userData.feld=e,d.add(r),r}),Ie=new z,X=p().figur,Z=Ee(17),Le=()=>T.stimmung?.14:0;d.add(Ie);let Re=e=>{let t=new D(e,v);return t.scale.setScalar(X),t.castShadow=!0,t},ze=()=>new Map([...H].map(e=>{let[t,n]=at(e);return[e,O.map(([e,r])=>it(t+e,n+r)).filter(e=>H.has(e))]})),Q=ze(),Be=[`marktfrau`,`baecker`,`wassertraegerin`,`hausierer`,`mueller`,`pfarrer`],Ve=Array.from({length:t?0:15},(e,t)=>{let n=101+t,r=Math.floor(Z()*6),i=t%3==0,a=i?ie(r,{seed:n}):t%4==1?{...j[Be[(t>>2)%Be.length]].bau(!0),seed:n}:pe(r,{seed:n}),o=Re(ge(a)),s=Z.pick([...H]),c=Z.pick(Q.get(s));Ie.add(o);let l={m:o,von:s,nach:c,pos:$(s),ziel:null,v:X*(i?1.25:.85)*(.85+Z()*.3),weg:Z()*10};return He(l),l});function He(e){let t=$(e.von),n=$(e.nach),r=n.clone().sub(t).normalize();e.ziel=n.add(new F(-r.y,r.x).multiplyScalar(1.6+(Z()-.5)*.8))}function Ue(e,t){if(!e.m.visible)return;let n=e.ziel.clone().sub(e.pos),r=n.length(),i=e.v*t;if(r<=i){e.pos.copy(e.ziel);let t=Q.get(e.nach).filter(t=>t!==e.von);[e.von,e.nach]=[e.nach,Z.pick(t.length?t:Q.get(e.nach))],He(e)}else e.pos.addScaledVector(n,i/r),e.weg+=i,e.m.position.set(e.pos.x,Le()+.05*X*Math.abs(Math.sin(e.weg*2.6/X)),e.pos.y),e.m.rotation.y=Math.atan2(n.x,n.y)}function We(e){H=new Set(e);for(let e of Fe)e.visible=H.has(e.userData.feld);t||Se(),je=!0,Q=ze();let n=[...H].filter(e=>Q.get(e).length);for(let e of Ve)e.m.visible=n.length>0,!(!e.m.visible||Q.get(e.von)?.includes(e.nach)&&Q.has(e.nach))&&(e.von=Z.pick(n),e.nach=Z.pick(Q.get(e.von)),e.pos=$(e.von),He(e))}let Ge=t?null:(()=>{let e=ge({...ie(2,{seed:7}),traegt:`reifen`}),{reifen:t,r:n}=e.userData,r=new z,i=new z,a=Re(e);return i.position.copy(t).multiplyScalar(X),i.add(Re(ye({r:n}))),r.add(a,i),Ie.add(r),{laeufer:r,achse:i,m:a,r:n,phi:0,weg:0}})();function Ke(e){let t=Ge,n=$(pt),r=7.2,i=1.3*X;t.phi+=i/r*e,t.weg+=i*e,t.laeufer.position.set(n.x+r*Math.cos(t.phi),Le(),n.y+r*Math.sin(t.phi)),t.laeufer.rotation.y=Math.atan2(-Math.sin(t.phi),Math.cos(t.phi)),t.m.position.y=.06*X*Math.abs(Math.sin(t.weg*3)),t.achse.rotation.x=t.weg/(t.r*X)}let qe=[`uFrueh`,`uHerbst`,`uKahl`,`uSchnee`,`uEis`];function Je(e,t=!1){T.jahr=e;for(let n of Ce)n.jahreszeit(e,t);if(t||!Ce.length)for(let t of qe)f[t].value=ae[e][t]}let Ye=new R,Xe=[];u.setAnimationLoop(e=>{Ye.update(e);let t=Math.min(.1,Ye.getDelta()),n=Ye.getElapsed();f.uZeit.value=n;for(let e of Ce)e.jedesBild(n,t);for(let e of Ve)Ue(e,t);Ge&&Ke(t);let[r,i]=k.tag,[a,o]=k.nacht,s=re(),c=f.uSchnee.value;I.copy(r).lerp(i,c).lerp(L.copy(a).lerp(o,c),s).multiplyScalar(T.dunkel);for(let e of Xe)e(t,n);je&&T.stimmung&&Me(),E.jedesBild(t),E.render(t)});function Ze(){requestAnimationFrame(()=>{document.body.classList.add(`fertig`);let e=t=>()=>{t<n.length?J(n[t],e(t+1)):De()};setTimeout(e(0),50)})}function Qe(e){T.stimmung=e,E.schalte(e),Y.visible=ke.visible=W.visible=e,e&&(je=!0),P()}return Qe(new URLSearchParams(location.search).get(`stimmung`)!==`0`),{klein:s,renderer:u,szene:d,kamera:C,stand:T,licht:P,jahr:Je,stimmung:Qe,zeigeStadt:Pe,legeStrassen:We,jedesBild:Xe,start:Ze,schattenAuf:(e,t)=>S.position.set(Math.round(e/16)*16,0,Math.round(t/16)*16),weite:Y,get haeuser(){return Ne}}}export{ct as a,st as c,it as i,ht as l,ot as n,at as o,_t as r,$ as s,rt as t,gt as u};