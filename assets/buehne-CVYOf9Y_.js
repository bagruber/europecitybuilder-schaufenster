import{Ar as e,Bn as t,Cr as n,Dn as r,Dr as i,E as a,Er as o,F as s,G as c,I as l,In as u,Jn as d,Jt as f,K as p,L as m,Ln as h,Lt as g,Mn as _,N as v,Nn as y,O as b,On as x,Or as S,P as C,Pn as w,Rn as T,S as E,Tr as D,Ut as O,V as ee,Vn as te,W as ne,Wt as k,Xn as A,Yn as j,Yt as M,Z as N,Zn as P,_r as F,an as I,at as L,bn as R,br as z,cn as B,dn as V,er as re,g as H,gn as U,gr as ie,i as ae,ir as oe,j as se,jn as W,l as ce,lr as G,mr as le,n as ue,nr as de,nt as fe,o as pe,pn as K,pr as q,r as me,rr as he,rt as ge,st as _e,t as ve,tr as ye,ur as be,v as xe,vn as Se,wn as Ce,wr as J,yn as we,yt as Te,zn as Y,zt as Ee}from"./natur-schau-DmGjGwds.js";var De={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Oe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ke=new he(-1,1,1,-1,0,1),Ae=new class extends Ce{constructor(){super(),this.setAttribute(`position`,new u([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new u([0,2,0,0,2,0],2))}},je=class{constructor(e){this._mesh=new A(Ae,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ke)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Me=class extends Oe{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof F?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=J.clone(e.uniforms),this.material=new F({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new je(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ne=class extends Oe{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Pe=class extends Oe{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Fe=class{constructor(t,r){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),r===void 0){let n=t.getSize(new i);this._width=n.width,this._height=n.height,r=new e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Y}),r.texture.name=`EffectComposer.rt1`}else this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Me(De),this.copyPass.material.blending=0,this.timer=new n}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ne!==void 0&&(r instanceof Ne?n=!0:r instanceof Pe&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new i);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ie=class extends Oe{constructor(e,t,n=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new r}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},X={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new i},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new j},cameraProjectionMatrixInverse:{value:new j},cameraWorldMatrix:{value:new j},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new S(-1,-1,-1)},sceneBoxMax:{value:new S(1,1,1)}},vertexShader:`

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
		}`};function Re(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=ze(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new S(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new W(i,t,t);return a.wrapS=q,a.wrapT=q,a.needsUpdate=!0,a}function ze(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Q={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Be(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new i},cameraProjectionMatrixInverse:{value:new j},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Be(e,t,n){let r=Ve(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Ve(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new S(Math.cos(a),Math.sin(a),o))}return r}var He=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,te=v-w+2*d,ne=g-1+3*d,k=_-1+3*d,A=v-1+3*d,j=c&255,M=l&255,N=u&255,P=this.perm[j+this.perm[M+this.perm[N]]]%12,F=this.perm[j+y+this.perm[M+b+this.perm[N+x]]]%12,I=this.perm[j+S+this.perm[M+C+this.perm[N+w]]]%12,L=this.perm[j+1+this.perm[M+1+this.perm[N+1]]]%12,R=.6-g*g-_*_-v*v;R<0?r=0:(R*=R,r=R*R*this._dot3(this.grad3[P],g,_,v));let z=.6-T*T-E*E-D*D;z<0?i=0:(z*=z,i=z*z*this._dot3(this.grad3[F],T,E,D));let B=.6-O*O-ee*ee-te*te;B<0?a=0:(B*=B,a=B*B*this._dot3(this.grad3[I],O,ee,te));let V=.6-ne*ne-k*k-A*A;return V<0?o=0:(V*=V,o=V*V*this._dot3(this.grad3[L],ne,k,A)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,te=T>E?8:0,ne=w>D?4:0,k=T>D?2:0,A=+(E>D),j=O+ee+te+ne+k+A,M=+(a[j][0]>=3),N=+(a[j][1]>=3),P=+(a[j][2]>=3),F=+(a[j][3]>=3),I=+(a[j][0]>=2),L=+(a[j][1]>=2),R=+(a[j][2]>=2),z=+(a[j][3]>=2),B=+(a[j][0]>=1),V=+(a[j][1]>=1),re=+(a[j][2]>=1),H=+(a[j][3]>=1),U=w-M+c,ie=T-N+c,ae=E-P+c,oe=D-F+c,se=w-I+2*c,W=T-L+2*c,ce=E-R+2*c,G=D-z+2*c,le=w-B+3*c,ue=T-V+3*c,de=E-re+3*c,fe=D-H+3*c,pe=w-1+4*c,K=T-1+4*c,q=E-1+4*c,me=D-1+4*c,he=h&255,ge=g&255,_e=_&255,ve=v&255,ye=o[he+o[ge+o[_e+o[ve]]]]%32,be=o[he+M+o[ge+N+o[_e+P+o[ve+F]]]]%32,xe=o[he+I+o[ge+L+o[_e+R+o[ve+z]]]]%32,Se=o[he+B+o[ge+V+o[_e+re+o[ve+H]]]]%32,Ce=o[he+1+o[ge+1+o[_e+1+o[ve+1]]]]%32,J=.6-w*w-T*T-E*E-D*D;J<0?l=0:(J*=J,l=J*J*this._dot4(i[ye],w,T,E,D));let we=.6-U*U-ie*ie-ae*ae-oe*oe;we<0?u=0:(we*=we,u=we*we*this._dot4(i[be],U,ie,ae,oe));let Te=.6-se*se-W*W-ce*ce-G*G;Te<0?d=0:(Te*=Te,d=Te*Te*this._dot4(i[xe],se,W,ce,G));let Y=.6-le*le-ue*ue-de*de-fe*fe;Y<0?f=0:(Y*=Y,f=Y*Y*this._dot4(i[Se],le,ue,de,fe));let Ee=.6-pe*pe-K*K-q*q-me*me;return Ee<0?p=0:(Ee*=Ee,p=Ee*Ee*this._dot4(i[Ce],pe,K,q,me)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Ue=class t extends Oe{constructor(t,n,i=512,a=512,o,s,c){super(),this.width=i,this.height=a,this.clear=!0,this.camera=n,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Re(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new e(this.width,this.height,{type:Y,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new F({defines:Object.assign({},X.defines),uniforms:J.clone(X.uniforms),vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new re,this.normalMaterial.blending=0,this.pdMaterial=new F({defines:Object.assign({},Q.defines),uniforms:J.clone(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new F({defines:Object.assign({},Z.defines),uniforms:J.clone(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new F({uniforms:J.clone(De.uniforms),vertexShader:De.vertexShader,fragmentShader:De.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new F({uniforms:J.clone(Le.uniforms),vertexShader:Le.vertexShader,fragmentShader:Le.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new je(null),this._originalClearColor=new r,this.setGBuffer(o?o.depthTexture:void 0,o?o.normalTexture:void 0),s!==void 0&&this.updateGtaoMaterial(s),c!==void 0&&this.updatePdMaterial(c)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,n){t===void 0?(this.depthTexture=new y,this.depthTexture.format=_,this.depthTexture.type=o,this.normalRenderTarget=new e(this.width,this.height,{minFilter:de,magFilter:de,type:Y,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=t,this.normalTexture=n,this._renderGBuffer=!1);let r=+!!this.normalTexture,i=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=r,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=r,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Be(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case t.OUTPUT.Off:break;case t.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new He,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new W(r,e,e,G,D);return i.wrapS=q,i.wrapT=q,i.needsUpdate=!0,i}};Ue.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var We={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new r(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Ge=class t extends Oe{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t===void 0?new i(256,256):new i(t.x,t.y),this.clearColor=new r(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new e(s,c,{type:Y,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let t=0;t<this.nMips;t++){let n=new e(s,c,{type:Y,depthBuffer:!1});n.texture.name=`UnrealBloomPass.h`+t,n.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(n);let r=new e(s,c,{type:Y,depthBuffer:!1});r.texture.name=`UnrealBloomPass.v`+t,r.texture.generateMipmaps=!1,this.renderTargetsVertical.push(r),s=Math.round(s/2),c=Math.round(c/2)}let l=We;this.highPassUniforms=J.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new F({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let u=[6,10,14,18,22];s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(u[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new i(1/s,1/c),s=Math.round(s/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=J.clone(De.uniforms),this.blendMaterial=new F({uniforms:this.copyUniforms,vertexShader:De.vertexShader,fragmentShader:De.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new r,this._oldClearAlpha=1,this._basic=new P,this._fsQuad=new je(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new i(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,n,r,i,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=t.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[n]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=t.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[n]),e.clear(),this._fsQuad.render(e),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],a=[];for(let n=1;n<e;n+=2){let i=t[n],o=n+1<e?t[n+1]:0,s=i+o;r.push((n*i+(n+1)*o)/s),a.push(s)}return new F({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new i(.5,.5)},direction:{value:new i(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:a}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new F({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ge.BlurDirectionX=new i(1,0),Ge.BlurDirectionY=new i(0,1);var Ke={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},qe=class extends Oe{constructor(){super(),this.isOutputPass=!0,this.uniforms=J.clone(Ke.uniforms),this.material=new be({name:Ke.name,uniforms:this.uniforms,vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader}),this._fsQuad=new je(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},x.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Je={tag:{himmel:[11848172,8819292,.95],sonne:[16767398,3.4]},nacht:{himmel:[6059696,2764604,.8],sonne:[10336494,1.15]}},Ye={sonne:16759922,himmel:14206632},Xe={sonne:15922940,himmel:14082286},Ze={sonne:16753242,himmel:9407684,himmelfarbe:[15905930,7307444]},Qe=new r(5199454),$e={tag:[14214116,7117010],herbst:[15259320,8822720],winter:[13818596,10662600],nacht:[2305608,527900]},et={fruehling:40,sommer:47,herbst:33,winter:26},tt={x:0,y:0,z:0,w:95};for(let e of[`lambert`,`phong`,`standard`,`physical`,`toon`])we[e].uniforms.wolken={value:tt};Se.lights_pars_begin+=`
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
}`;{let e=Se.lights_fragment_begin,t=e.indexOf(`directionalLight = directionalLights[ i ];`),n=e.indexOf(`RE_Direct(`,t);Se.lights_fragment_begin=e.slice(0,n)+`#if ( UNROLLED_LOOP_INDEX == 0 )
		directLight.color *= wolkenSchatten( geometryPosition, directLight.direction );
		#endif

		`+e.slice(n)}function nt({renderer:t,szene:n,kamera:a,sonne:o,hell:c,stand:u,klein:m,ringInnen:g=200}){let _=new URLSearchParams(location.search),v=_.has(`nachbearbeitung`)?_.get(`nachbearbeitung`)!==`0`:!m,b={richtung:o.position.clone(),hintergrund:null},x=new T;x.visible=!1,n.add(x);let w=new F({uniforms:{unten:{value:new r},oben:{value:new r}},vertexShader:`varying float vHoehe;
void main() { vHoehe = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 unten;
uniform vec3 oben;
varying float vHoehe;
void main() {
  gl_FragColor = vec4(mix(unten, oben, pow(smoothstep(0.0, 0.4, vHoehe), 0.7)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,side:1,depthWrite:!1,fog:!1}),E=new A(new z(1400,32,16),w);E.frustumCulled=!1,E.renderOrder=-1,x.add(E);let D=new h(16777215,300,1400),ee=(e,t,n)=>new r(e).lerp(new r(t),n),ne=new le(g,1700,72,18).rotateX(-Math.PI/2).translate(0,-.08,0),k=new A(p(ne,se.wiese,s.get(se.wiese)),C);k.receiveShadow=!0,x.add(k);let j=new ye({color:16777215,flatShading:!0,roughness:1,emissive:2765120}),M=O(31),N=[];for(let e=0;e<16;e++){let e=[],t=3+Math.floor(M()*3);for(let n=0;n<t;n++){let r=new te(1,0),i=.55+M()*.5;r.scale(i,i*.6,i).translate((n-(t-1)/2)*.8+(M()-.5)*.4,i*.15,(M()-.5)*.7),e.push(r)}let n=new A(f(e),j);n.scale.setScalar(28+M()*40),N.push({m:n,R:620+M()*730,phi:M()*Math.PI*2,y:190+M()*80}),x.add(n)}let P=null,I=null,L=null;function R(){let{width:r,height:o}=t.getSize(new i);P=new Fe(t,new e(r,o,{type:Y,samples:4,depthTexture:new y(r,o)})),P.setPixelRatio(t.getPixelRatio()),P.setSize(r,o),P.addPass(new Ie(n,a)),I=new Ue(n,a,r,o,void 0,{radius:2.4,distanceExponent:1.3,thickness:1.5,scale:1.1,samples:16},{radius:6,samples:8}),I.setGBuffer(P.readBuffer.depthTexture);let s=I.setSize.bind(I);I.setSize=(e,t)=>s(Math.max(1,Math.round(e/2)),Math.max(1,Math.round(t/2))),I.blendIntensity=1,P.addPass(I),L=new Ge(new i(r,o),.7,.45,.7),P.addPass(L),P.addPass(new qe)}let B=!1,V=et[u.jahr];function re(e){B=e,x.visible=B,n.fog=B?D:null,B&&n.background&&(b.hintergrund=n.background),n.background=B?null:b.hintergrund,tt.z=0,B||o.position.copy(b.richtung),B&&v&&!P&&R()}let H=new r,U=new r,ie=new S;function ae(e){if(!B)return;let t=Je.tag,n=Je.nacht,i=u.licht===`nacht`?1:u.nacht,s=4*i*(1-i),f=l.uHerbst.value,p=l.uSchnee.value;H.setHex(t.sonne[0]).lerp(new r(Ye.sonne),f*(1-p)).lerp(new r(Xe.sonne),p),U.setHex(t.himmel[0]).lerp(new r(Ye.himmel),f*(1-p)*.6).lerp(new r(Xe.himmel),p),H.lerp(new r(n.sonne[0]),i).lerp(new r(Ze.sonne),s*.75),U.lerp(new r(n.himmel[0]),i).lerp(new r(Ze.himmel),s*.6),o.color.copy(H),o.intensity=(t.sonne[1]*(1-.25*p)*(1-i)+n.sonne[1]*i)*u.dunkel,c.color.copy(U),c.groundColor.setHex(t.himmel[1]).lerp(new r(n.himmel[1]),i),c.intensity=(t.himmel[2]*(1+.25*p)*(1-i)+n.himmel[2]*i)*u.dunkel,V+=(et[u.jahr]*(1-.55*s)-V)*Math.min(1,e*.8);let m=Math.atan2(b.richtung.z,b.richtung.x),h=d.degToRad(V);o.position.set(Math.cos(m)*Math.cos(h),Math.sin(h),Math.sin(m)*Math.cos(h)).multiplyScalar(b.richtung.length());let[g,_]=[0,1].map(e=>ee($e.tag[e],$e.herbst[e],f*(1-p)).lerp(new r($e.winter[e]),p).lerp(new r($e.nacht[e]),i).lerp(new r(Ze.himmelfarbe[e]),s*[.7,.4][e]));if(w.uniforms.unten.value.copy(g),w.uniforms.oben.value.copy(_),u.dunkel<1)for(let e of[w.uniforms.unten.value,w.uniforms.oben.value])e.lerp(Qe,1-u.dunkel);D.color.copy(w.uniforms.unten.value),E.position.copy(a.position),a.getWorldDirection(ie);let v=ie.y<-.05?Math.min(900,-a.position.y/ie.y):900;D.near=v*.7+30,D.far=Math.min(1400,D.near+340+v*1.3);for(let t of N)t.phi+=2.5/t.R*e,t.m.position.set(Math.cos(t.phi)*t.R,t.y,Math.sin(t.phi)*t.R);tt.x=(tt.x-3.2*e)%(tt.w*64),tt.y=(tt.y-1.9*e)%(tt.w*64),tt.z=.3*i+(.55+.1*p)*(1-i)+(1-u.dunkel)*.4,L&&(L.enabled=i>.02)}function oe(e){if(!B||!P)return t.render(n,a);I.gtaoMaterial.uniforms.tDepth.value=I.pdMaterial.uniforms.tDepth.value=P.readBuffer.depthTexture,P.render(e)}function W(e,t){P?.setSize(e,t)}return{schalte:re,jedesBild:ae,render:oe,groesse:W,get an(){return B}}}k(`niedlich`);var rt=10/Math.sqrt(3),it=(e,t)=>`${e},${t}`,at=e=>e.split(`,`).map(Number),$=e=>{let[t,n]=at(e);return new i(10*(t+n/2),1.5*rt*n)},ot=(e,t)=>(Math.abs(e)+Math.abs(t)+Math.abs(e+t))/2,st=(e,[t,n]=[0,0])=>{let r=[];for(let i=-e;i<=e;i++)for(let a=-e;a<=e;a++)ot(a,i)<=e&&r.push(it(t+a,n+i));return r};function ct(e,t){let n=t/(1.5*rt),r=e/10-n/2,i=-r-n,a=Math.round(r),o=Math.round(n),s=Math.round(i),c=Math.abs(a-r),l=Math.abs(o-n),u=Math.abs(s-i);return c>l&&c>u?a=-o-s:l>u&&(o=-a-s),it(a,o)}var lt=[[`gewaesser`,-8,16,6],[`wald`,-9,-7,4],[`hof`,15,-8,5]],ut=new Set(lt.flatMap(([,e,t,n])=>st(n,[e,t]))),dt=[[-11,0,0,23],[-1,-1,0,2],[2,-1,0,2],[0,-2,0,4],[-5,-6,0,17],[-4,-7,5,17],[11,-7,4,15]],ft=new Set(dt.flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>it(e+i*M[n][0],t+i*M[n][1]))).filter(e=>!ut.has(e))),pt=`1,-1`,mt=new Set([...st(1,at(pt)),...dt.slice(1,4).flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>it(e+i*M[n][0],t+i*M[n][1])))]),ht={detail:1,modelle:new Map};function gt(e){let t=O(e),n=I({radius:11});for(let e of ut)n.felder.delete(e);for(let e of ft)n.strassen.add(e);V(n,pt,a(`wahrzeichen`,t,{...ht,typ:`mariensaeule`}),1);let r=[...xe],i=[H],o=t()<.5?3:4;for(;i.length<o;)i.push(...r.splice(Math.floor(t()*r.length),1));let s=[...i.map(e=>a(`wahrzeichen`,t,{...ht,typ:e})),...[0,1,2].map(()=>a(`betrieb`,t,ht)),...[6,6,5,5,3].map(e=>({art:`wohnen`,stufe:e}))];U(n,s,t);for(let e of[...n.haeuser.values()])e.art===`wohnen`&&(e.stufe===0||e.stufe===4)&&t()<Math.max(0,ot(...at(e.vorn[0]))-4)/14&&B(n,e.id);for(let e=0;e<2;e++)for(let e of[...n.haeuser.values()])e.art===`wohnen`&&n.haeuser.has(e.id)&&t()<.5&&K(n,e.id);return n}function _t(e,{leer:a=!1,rand:o=lt,belegt:s=[],land:u=12,weit:d=26,bodenVon:f=()=>se.wiese}={}){let p=Math.min(innerWidth,innerHeight)<700,h=new R({canvas:e,antialias:!0});h.setPixelRatio(Math.min(devicePixelRatio,p?1.5:2)),h.shadowMap.enabled=!0,h.shadowMap.type=1,h.toneMapping=4;let _=new ie,y=new t,x=new w;x.position.set(-28,46,34).setLength(240),x.castShadow=!0,x.shadow.mapSize.setScalar(p?2048:4096),Object.assign(x.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:20,far:560}),x.shadow.bias=-4e-4,x.shadow.normalBias=.05,x.shadow.radius=3;let S=new T;S.add(x,x.target),_.add(y,S);let C=new oe(32,1,1,1500),D={licht:`tag`,jahr:`sommer`,stimmung:!1,dunkel:1,nacht:0},te=nt({renderer:h,szene:_,kamera:C,sonne:x,hell:y,stand:D,klein:p,ringInnen:d>26?(d-.7)*1.5*rt:200});new ResizeObserver(()=>{let{clientWidth:t,clientHeight:n}=e;h.setSize(t,n,!1),te.groesse(t,n),C.aspect=t/n,C.updateProjectionMatrix()}).observe(e);let k={tag:{himmel:[14411504,10130570,1.4],sonne:[16773852,2.6],fenster:0,laterne:1},nacht:{himmel:[7375032,3816520,.95],sonne:[11584746,1.1],fenster:.7,laterne:3}},j={tag:[new r(13490398),new r(13884386)],nacht:[new r(1318188),new r(2502204)]};g(`glass`).emissive.setHex(16757596);let P=()=>D.licht===`nacht`?1:D.nacht,F=new r,I=(e,t,n,r)=>e.setHex(t).lerp(F.setHex(n),r);function z(){let e=k.tag,t=k.nacht,n=P(),r=(e,t)=>e+(t-e)*n;I(y.color,e.himmel[0],t.himmel[0],n),I(y.groundColor,e.himmel[1],t.himmel[1],n),y.intensity=r(e.himmel[2],t.himmel[2])*D.dunkel,I(x.color,e.sonne[0],t.sonne[0],n),x.intensity=r(e.sonne[1],t.sonne[1])*D.dunkel,g(`glass`).emissiveIntensity=r(e.fenster,t.fenster),g(`lamp`).emissiveIntensity=r(e.laterne,t.laterne)}let B=new r,V=new r;_.background=B;let re=st(u),H=new T,U=a?new Set([...o.flatMap(([,e,t,n])=>st(n,[e,t])),...s]):ut;_.add(H);let W=a?new Set:ft,G=new T,le=e=>{let t=$(e);return{x:t.x,z:t.y,boden:W.has(e)?12365456:f(e),ohneFuge:a}};function de(e,t=H){e.length&&ne({gruppe:t},e.map(le),O(e.length))}let K=new T,q=new T;K.visible=!1,K.add(q),H.add(K);let he=e=>{let t=Math.hypot(e.x,e.z);return(p?.5:1)*(t<110?.4:t<160?.8:Math.max(0,.8*(1-(t-160)/70)))},be=e=>Math.hypot(e.x,e.z)>160,xe=(e,t=K)=>{e.length&&c({gruppe:t},e.map(le),{dichte:he,fern:be})};function Se(){H.remove(G),G.traverse(e=>e.geometry?.dispose()),G=new T,de(re.filter(e=>!U.has(e)),G),H.add(G)}Se();let Ce=[],J=new Set(s);function we([e,t,n,r],i){let a=ue(e,{wurf:4711,jahreszeit:D.jahr}),o=$(it(t,n)),s=new Set;a.gruppe.position.set(o.x,0,o.y),_.add(a.gruppe),Ce.push(a);for(let e of a.felder)s.add(ct(e.x+o.x,e.z+o.y));for(let e of s)J.add(e);let c=new Set(re),l=st(r,[t,n]).filter(e=>c.has(e)&&!s.has(e));de(l),xe(l),setTimeout(i,0)}let Y=new T;Y.visible=!1,H.add(Y);function De(){let e=new Set(re),t=st(d).filter(t=>!e.has(t)&&!J.has(t));de(t,Y),xe(t)}let Oe=ee(new ye({vertexColors:!0,flatShading:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),!1),ke=new T;ke.visible=!1,H.add(ke);let Ae=null,je=!1;function Me(){je=!1;for(let e of ke.children)e.geometry.dispose();ke.clear();for(let e of q.children)e.dispose();if(q.clear(),!Ae)return;let e=new Set([...Ae.haeuser.values()].flatMap(e=>e.felder).concat([...Ae.kanaele??[]],a?[]:pt,E(Ae).map(e=>e.f)));if(xe(re.filter(t=>!U.has(t)&&!W.has(t)&&!e.has(t)),q),a)return;let t=new Set([...Ae.haeuser.values()].flatMap(e=>e.felder.filter(t=>t!==e.garten))),n=new me;for(let e of W){let[r,i]=at(e),a=$(e),o=M.map(([e,t])=>it(r+e,i+t)),s=o.filter(e=>W.has(e)),c=e=>{let t=$(e);return ae(t.x-a.x,t.y-a.y)},l=mt.has(e);pe(n,[a.x,a.y],rt*1.005,{verband:l?`diagonal`:`reihe`,platten:o.filter(e=>t.has(e)).map(c),rinnen:l||s.length>2?[]:s.filter(e=>!mt.has(e)).map(c),rnd:ce(r*131+i*7+1)})}if(n.leer)return;let r=new A(n.geometrie(()=>0,1e4),Oe);r.receiveShadow=!0,ke.add(r)}let Ne=new T;_.add(Ne);function Pe(e){_.remove(Ne);for(let e of Ne.children)e.userData.schluessel||e.traverse(e=>e.geometry?.dispose());Ne=new T,b(e,Ne,a?{...ht,wegPlatzerl:!0}:ht),_.add(Ne),Ae=e,je=!0}let Fe=(a?[]:[[`-1,-1`,-3.2,1],[`3,-1`,3.2,2]]).map(([e,t,n])=>{let r=new A(Te(`linde`,{seed:n,alter:`jung`,form:`frei`}),m),i=$(e);return r.position.set(i.x+t,0,i.y),r.rotation.y=n*2.1,r.castShadow=r.receiveShadow=!0,r.userData.feld=e,_.add(r),r}),Ie=new T,X=Ee().figur,Z=O(17),Le=()=>D.stimmung?.14:0;_.add(Ie);let Re=e=>{let t=new A(e,v);return t.scale.setScalar(X),t.castShadow=!0,t},ze=()=>new Map([...W].map(e=>{let[t,n]=at(e);return[e,M.map(([e,r])=>it(t+e,n+r)).filter(e=>W.has(e))]})),Q=ze(),Be=[`marktfrau`,`baecker`,`wassertraegerin`,`hausierer`,`mueller`,`pfarrer`],Ve=Array.from({length:a?0:15},(e,t)=>{let n=101+t,r=Math.floor(Z()*6),i=t%3==0,a=i?L(r,{seed:n}):t%4==1?{...N[Be[(t>>2)%Be.length]].bau(!0),seed:n}:fe(r,{seed:n}),o=Re(ge(a)),s=Z.pick([...W]),c=Z.pick(Q.get(s));Ie.add(o);let l={m:o,von:s,nach:c,pos:$(s),ziel:null,v:X*(i?1.25:.85)*(.85+Z()*.3),weg:Z()*10};return He(l),l});function He(e){let t=$(e.von),n=$(e.nach),r=n.clone().sub(t).normalize();e.ziel=n.add(new i(-r.y,r.x).multiplyScalar(1.6+(Z()-.5)*.8))}function Ue(e,t){if(!e.m.visible)return;let n=e.ziel.clone().sub(e.pos),r=n.length(),i=e.v*t;if(r<=i){e.pos.copy(e.ziel);let t=Q.get(e.nach).filter(t=>t!==e.von);[e.von,e.nach]=[e.nach,Z.pick(t.length?t:Q.get(e.nach))],He(e)}else e.pos.addScaledVector(n,i/r),e.weg+=i,e.m.position.set(e.pos.x,Le()+.05*X*Math.abs(Math.sin(e.weg*2.6/X)),e.pos.y),e.m.rotation.y=Math.atan2(n.x,n.y)}function We(e){W=new Set(e);for(let e of Fe)e.visible=W.has(e.userData.feld);a||Se(),je=!0,Q=ze();let t=[...W].filter(e=>Q.get(e).length);for(let e of Ve)e.m.visible=t.length>0,!(!e.m.visible||Q.get(e.von)?.includes(e.nach)&&Q.has(e.nach))&&(e.von=Z.pick(t),e.nach=Z.pick(Q.get(e.von)),e.pos=$(e.von),He(e))}let Ge=a?null:(()=>{let e=ge({...L(2,{seed:7}),traegt:`reifen`}),{reifen:t,r:n}=e.userData,r=new T,i=new T,a=Re(e);return i.position.copy(t).multiplyScalar(X),i.add(Re(_e({r:n}))),r.add(a,i),Ie.add(r),{laeufer:r,achse:i,m:a,r:n,phi:0,weg:0}})();function Ke(e){let t=Ge,n=$(pt),r=7.2,i=1.3*X;t.phi+=i/r*e,t.weg+=i*e,t.laeufer.position.set(n.x+r*Math.cos(t.phi),Le(),n.y+r*Math.sin(t.phi)),t.laeufer.rotation.y=Math.atan2(-Math.sin(t.phi),Math.cos(t.phi)),t.m.position.y=.06*X*Math.abs(Math.sin(t.weg*3)),t.achse.rotation.x=t.weg/(t.r*X)}let qe=[`uFrueh`,`uHerbst`,`uKahl`,`uSchnee`,`uEis`];function Je(e,t=!1,{dauer:n}={}){D.jahr=e;for(let r of Ce)r.jahreszeit(e,t,{dauer:n});if(t||!Ce.length)for(let t of qe)l[t].value=ve[e][t]}let Ye=new n,Xe=[];h.setAnimationLoop(e=>{Ye.update(e);let t=Math.min(.1,Ye.getDelta()),n=Ye.getElapsed();l.uZeit.value=n;for(let e of Ce)e.jedesBild(n,t);for(let e of Ve)Ue(e,t);Ge&&Ke(t);let[r,i]=j.tag,[a,o]=j.nacht,s=P(),c=l.uSchnee.value;B.copy(r).lerp(i,c).lerp(V.copy(a).lerp(o,c),s).multiplyScalar(D.dunkel);for(let e of Xe)e(t,n);je&&D.stimmung&&Me(),te.jedesBild(t),te.render(t)});function Ze(){requestAnimationFrame(()=>{document.body.classList.add(`fertig`);let e=t=>()=>{t<o.length?we(o[t],e(t+1)):De()};setTimeout(e(0),50)})}function Qe(e){D.stimmung=e,te.schalte(e),Y.visible=ke.visible=K.visible=e,e&&(je=!0),z()}return Qe(new URLSearchParams(location.search).get(`stimmung`)!==`0`),{klein:p,renderer:h,szene:_,kamera:C,stand:D,licht:z,jahr:Je,stimmung:Qe,zeigeStadt:Pe,legeStrassen:We,jedesBild:Xe,start:Ze,schattenAuf:(e,t)=>S.position.set(Math.round(e/16)*16,0,Math.round(t/16)*16),weite:Y,get haeuser(){return Ne}}}export{ct as a,st as c,it as i,ht as l,ot as n,at as o,_t as r,$ as s,rt as t,gt as u};