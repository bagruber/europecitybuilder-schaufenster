import{A as e,Ar as t,B as n,Bn as r,Br as i,Cn as a,Cr as o,Dn as s,En as c,Er as l,F as u,Fn as d,Fr as f,G as p,Gn as m,Gt as h,Hn as g,Ir as _,J as v,Jn as y,L as b,Lr as x,Nr as S,P as C,Pn as w,Pr as T,R as E,Rr as D,Sr as O,T as ee,Tn as k,Tr as A,Ut as te,V as j,Vn as M,Wn as N,X as ne,Xn as re,Xt as P,Y as ie,Yn as F,Yt as I,ar as L,bn as R,ct as z,dn as ae,dr as B,en as oe,fr as se,ft as ce,hn as le,i as ue,ir as V,j as de,jn as fe,k as H,l as pe,lr as me,n as he,nt as ge,o as _e,or as ve,pr as ye,qn as U,r as be,rr as xe,st as Se,t as Ce,tn as we,u as W,ur as Te,ut as Ee,vn as G,vr as De,wt as Oe,x as ke,y as Ae,yr as je,z as Me,zn as Ne}from"./natur-schau-DkrgwxYb.js";var Pe={nah:200,fern:480,baum:300,garten:300},Fe={x:0,y:1e6,z:0},Ie=e=>e<Pe.nah?0:e<Pe.fern?1:2,Le=(e,t,n)=>Ie(Math.hypot(e-Fe.x,t-Fe.y,n-Fe.z)),Re={fernhaus:!0,leute:!0,schattennetz:!0,schattenbox:!0,kacheln:!0,wald:!0},K={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},ze=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Be=new se(-1,1,1,-1,0,1),Ve=new class extends fe{constructor(){super(),this.setAttribute(`position`,new N([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new N([0,2,0,0,2,0],2))}},q=class{constructor(e){this._mesh=new L(Ve,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Be)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},He=class extends ze{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof l?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=T.clone(e.uniforms),this.material=new l({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new q(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ue=class extends ze{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},J=class extends ze{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},We=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new x);this._width=n.width,this._height=n.height,t=new i(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:y}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new He(K),this.copyPass.material.blending=0,this.timer=new S}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ue!==void 0&&(r instanceof Ue?n=!0:r instanceof J&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new x);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ge=class extends ze{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new w}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Ke={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new x},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new V},cameraProjectionMatrixInverse:{value:new V},cameraWorldMatrix:{value:new V},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},qe={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Je={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ye(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Xe(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new D(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new Ne(i,t,t);return a.wrapS=O,a.wrapT=O,a.needsUpdate=!0,a}function Xe(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Ze={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Qe(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new x},cameraProjectionMatrixInverse:{value:new V},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Qe(e,t,n){let r=$e(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function $e(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new D(Math.cos(a),Math.sin(a),o))}return r}var et=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,k=v-w+2*d,A=g-1+3*d,te=_-1+3*d,j=v-1+3*d,M=c&255,N=l&255,ne=u&255,re=this.perm[M+this.perm[N+this.perm[ne]]]%12,P=this.perm[M+y+this.perm[N+b+this.perm[ne+x]]]%12,ie=this.perm[M+S+this.perm[N+C+this.perm[ne+w]]]%12,F=this.perm[M+1+this.perm[N+1+this.perm[ne+1]]]%12,I=.6-g*g-_*_-v*v;I<0?r=0:(I*=I,r=I*I*this._dot3(this.grad3[re],g,_,v));let L=.6-T*T-E*E-D*D;L<0?i=0:(L*=L,i=L*L*this._dot3(this.grad3[P],T,E,D));let R=.6-O*O-ee*ee-k*k;R<0?a=0:(R*=R,a=R*R*this._dot3(this.grad3[ie],O,ee,k));let z=.6-A*A-te*te-j*j;return z<0?o=0:(z*=z,o=z*z*this._dot3(this.grad3[F],A,te,j)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,k=T>E?8:0,A=w>D?4:0,te=T>D?2:0,j=+(E>D),M=O+ee+k+A+te+j,N=+(a[M][0]>=3),ne=+(a[M][1]>=3),re=+(a[M][2]>=3),P=+(a[M][3]>=3),ie=+(a[M][0]>=2),F=+(a[M][1]>=2),I=+(a[M][2]>=2),L=+(a[M][3]>=2),R=+(a[M][0]>=1),z=+(a[M][1]>=1),ae=+(a[M][2]>=1),B=+(a[M][3]>=1),oe=w-N+c,se=T-ne+c,ce=E-re+c,le=D-P+c,ue=w-ie+2*c,V=T-F+2*c,de=E-I+2*c,fe=D-L+2*c,H=w-R+3*c,pe=T-z+3*c,me=E-ae+3*c,he=D-B+3*c,ge=w-1+4*c,_e=T-1+4*c,ve=E-1+4*c,ye=D-1+4*c,U=h&255,be=g&255,xe=_&255,Se=v&255,Ce=o[U+o[be+o[xe+o[Se]]]]%32,we=o[U+N+o[be+ne+o[xe+re+o[Se+P]]]]%32,W=o[U+ie+o[be+F+o[xe+I+o[Se+L]]]]%32,Te=o[U+R+o[be+z+o[xe+ae+o[Se+B]]]]%32,Ee=o[U+1+o[be+1+o[xe+1+o[Se+1]]]]%32,G=.6-w*w-T*T-E*E-D*D;G<0?l=0:(G*=G,l=G*G*this._dot4(i[Ce],w,T,E,D));let De=.6-oe*oe-se*se-ce*ce-le*le;De<0?u=0:(De*=De,u=De*De*this._dot4(i[we],oe,se,ce,le));let Oe=.6-ue*ue-V*V-de*de-fe*fe;Oe<0?d=0:(Oe*=Oe,d=Oe*Oe*this._dot4(i[W],ue,V,de,fe));let ke=.6-H*H-pe*pe-me*me-he*he;ke<0?f=0:(ke*=ke,f=ke*ke*this._dot4(i[Te],H,pe,me,he));let Ae=.6-ge*ge-_e*_e-ve*ve-ye*ye;return Ae<0?p=0:(Ae*=Ae,p=Ae*Ae*this._dot4(i[Ee],ge,_e,ve,ye)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},tt=class e extends ze{constructor(e,t,n=512,r=512,a,o,s){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ye(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new i(this.width,this.height,{type:y,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new l({defines:Object.assign({},Ke.defines),uniforms:T.clone(Ke.uniforms),vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new me,this.normalMaterial.blending=0,this.pdMaterial=new l({defines:Object.assign({},Ze.defines),uniforms:T.clone(Ze.uniforms),vertexShader:Ze.vertexShader,fragmentShader:Ze.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new l({defines:Object.assign({},qe.defines),uniforms:T.clone(qe.uniforms),vertexShader:qe.vertexShader,fragmentShader:qe.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new l({uniforms:T.clone(K.uniforms),vertexShader:K.vertexShader,fragmentShader:K.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new l({uniforms:T.clone(Je.uniforms),vertexShader:Je.vertexShader,fragmentShader:Je.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new q(null),this._originalClearColor=new w,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),s!==void 0&&this.updatePdMaterial(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new M,this.depthTexture.format=r,this.depthTexture.type=_,this.normalRenderTarget=new i(this.width,this.height,{minFilter:B,magFilter:B,type:y,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,a=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=a,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=a,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Qe(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new et,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new Ne(r,e,e,De,f);return i.wrapS=O,i.wrapT=O,i.needsUpdate=!0,i}};tt.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var nt={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new w(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},rt=class e extends ze{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new x(256,256):new x(e.x,e.y),this.clearColor=new w(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new i(a,o,{type:y,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new i(a,o,{type:y,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new i(a,o,{type:y,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),a=Math.round(a/2),o=Math.round(o/2)}let s=nt;this.highPassUniforms=T.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new l({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new x(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=T.clone(K.uniforms),this.blendMaterial=new l({uniforms:this.copyUniforms,vertexShader:K.vertexShader,fragmentShader:K.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new w,this._oldClearAlpha=1,this._basic=new ve,this._fsQuad=new q(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new x(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new l({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new x(.5,.5)},direction:{value:new x(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new l({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};rt.BlurDirectionX=new x(1,0),rt.BlurDirectionY=new x(0,1);var Y={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},X=class extends ze{constructor(){super(),this.isOutputPass=!0,this.uniforms=T.clone(Y.uniforms),this.material=new je({name:Y.name,uniforms:this.uniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader}),this._fsQuad=new q(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},d.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},it={tag:{himmel:[11848172,8819292,.95],sonne:[16767398,3.4]},nacht:{himmel:[6059696,2764604,.8],sonne:[10336494,1.15]}},at={sonne:16759922,himmel:14206632},ot={sonne:15922940,himmel:14082286},st={sonne:16753242,himmel:9407684,himmelfarbe:[15905930,7307444]},ct=new w(5199454),lt={tag:[14214116,7117010],herbst:[15259320,8822720],winter:[13818596,10662600],nacht:[2305608,527900]},ut={fruehling:40,sommer:47,herbst:33,winter:26},Z={x:0,y:0,z:0,w:95};for(let e of[`lambert`,`phong`,`standard`,`physical`,`toon`])c[e].uniforms.wolken={value:Z};k.lights_pars_begin+=`
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
}`;{let e=k.lights_fragment_begin,t=e.indexOf(`directionalLight = directionalLights[ i ];`),n=e.indexOf(`RE_Direct(`,t);k.lights_fragment_begin=e.slice(0,n)+`#if ( UNROLLED_LOOP_INDEX == 0 )
		directLight.color *= wolkenSchatten( geometryPosition, directLight.direction );
		#endif

		`+e.slice(n)}function dt({renderer:e,szene:r,kamera:a,sonne:s,hell:c,stand:d,klein:f,ringInnen:p=200}){let h=new URLSearchParams(location.search),g=h.has(`nachbearbeitung`)?h.get(`nachbearbeitung`)!==`0`:!f,_={richtung:s.position.clone(),hintergrund:null},v=new U;v.visible=!1,r.add(v);let b=new l({uniforms:{unten:{value:new w},oben:{value:new w}},vertexShader:`varying float vHoehe;
void main() { vHoehe = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 unten;
uniform vec3 oben;
varying float vHoehe;
void main() {
  gl_FragColor = vec4(mix(unten, oben, pow(smoothstep(0.0, 0.4, vHoehe), 0.7)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,side:1,depthWrite:!1,fog:!1}),S=new L(new t(1400,32,16),b);S.frustumCulled=!1,S.renderOrder=-1,v.add(S);let C=new m(16777215,300,1400),T=(e,t,n)=>new w(e).lerp(new w(t),n),O=new o(p,1700,72,18).rotateX(-Math.PI/2).translate(0,-.08,0),ee=new L(ne(O,u.wiese,Me.get(u.wiese)),E);ee.receiveShadow=!0,v.add(ee);let k=new Te({color:16777215,flatShading:!0,roughness:1,emissive:2765120}),A=I(31),te=[];for(let e=0;e<16;e++){let e=[],t=3+Math.floor(A()*3);for(let n=0;n<t;n++){let r=new re(1,0),i=.55+A()*.5;r.scale(i,i*.6,i).translate((n-(t-1)/2)*.8+(A()-.5)*.4,i*.15,(A()-.5)*.7),e.push(r)}let n=new L(oe(e),k);n.scale.setScalar(28+A()*40),te.push({m:n,R:620+A()*730,phi:A()*Math.PI*2,y:190+A()*80}),v.add(n)}let j=null,N=null,P=null;function ie(){let{width:t,height:n}=e.getSize(new x);j=new We(e,new i(t,n,{type:y,samples:4,depthTexture:new M(t,n)})),j.setPixelRatio(e.getPixelRatio()),j.setSize(t,n),j.addPass(new Ge(r,a)),N=new tt(r,a,t,n,void 0,{radius:2.4,distanceExponent:1.3,thickness:1.5,scale:1.1,samples:16},{radius:6,samples:8}),N.setGBuffer(j.readBuffer.depthTexture);let o=N.setSize.bind(N);N.setSize=(e,t)=>o(Math.max(1,Math.round(e/2)),Math.max(1,Math.round(t/2))),N.blendIntensity=1,j.addPass(N),P=new rt(new x(t,n),.7,.45,.7),j.addPass(P),j.addPass(new X)}let F=!1,R=ut[d.jahr];function z(e){F=e,v.visible=F,r.fog=F?C:null,F&&r.background&&(_.hintergrund=r.background),r.background=F?null:_.hintergrund,Z.z=0,F||s.position.copy(_.richtung),F&&g&&!j&&ie()}let ae=new w,B=new w,se=new D;function ce(e){if(!F)return;let t=it.tag,r=it.nacht,i=d.licht===`nacht`?1:d.nacht,o=4*i*(1-i),l=n.uHerbst.value,u=n.uSchnee.value;ae.setHex(t.sonne[0]).lerp(new w(at.sonne),l*(1-u)).lerp(new w(ot.sonne),u),B.setHex(t.himmel[0]).lerp(new w(at.himmel),l*(1-u)*.6).lerp(new w(ot.himmel),u),ae.lerp(new w(r.sonne[0]),i).lerp(new w(st.sonne),o*.75),B.lerp(new w(r.himmel[0]),i).lerp(new w(st.himmel),o*.6),s.color.copy(ae),s.intensity=(t.sonne[1]*(1-.25*u)*(1-i)+r.sonne[1]*i)*d.dunkel,c.color.copy(B),c.groundColor.setHex(t.himmel[1]).lerp(new w(r.himmel[1]),i),c.intensity=(t.himmel[2]*(1+.25*u)*(1-i)+r.himmel[2]*i)*d.dunkel;let f=(d.foehn??0)*(1-i);f>0&&(s.color.lerp(new w(W.sonne.farbe),f),s.intensity+=(W.sonne.staerke*d.dunkel-s.intensity)*f,c.color.lerp(new w(W.himmelslicht.farbe),f),c.groundColor.lerp(new w(W.himmelslicht.boden),f),c.intensity+=(W.himmelslicht.staerke*d.dunkel-c.intensity)*f),R+=(ut[d.jahr]*(1-.55*o)-R)*Math.min(1,e*.8);let p=Math.atan2(_.richtung.z,_.richtung.x),m=xe.degToRad(R);s.position.set(Math.cos(p)*Math.cos(m),Math.sin(m),Math.sin(p)*Math.cos(m)).multiplyScalar(_.richtung.length());let[h,g]=[0,1].map(e=>T(lt.tag[e],lt.herbst[e],l*(1-u)).lerp(new w(lt.winter[e]),u).lerp(new w(lt.nacht[e]),i).lerp(new w(st.himmelfarbe[e]),o*[.7,.4][e]));if(b.uniforms.unten.value.copy(h),b.uniforms.oben.value.copy(g),f>0&&(b.uniforms.unten.value.lerp(new w(W.himmel.unten),f),b.uniforms.oben.value.lerp(new w(W.himmel.oben),f)),d.dunkel<1)for(let e of[b.uniforms.unten.value,b.uniforms.oben.value])e.lerp(ct,1-d.dunkel);C.color.copy(b.uniforms.unten.value),n.uHimmelUnten.value.copy(b.uniforms.unten.value),n.uHimmelOben.value.copy(b.uniforms.oben.value),S.position.copy(a.position),a.getWorldDirection(se);let v=se.y<-.05?Math.min(900,-a.position.y/se.y):900;C.near=v*.7+30,C.far=Math.min(1400,C.near+340+v*1.3),C.near*=1+(W.dunstweite-1)*f,C.far*=1+(W.dunstweite-1)*f;for(let t of te)t.phi+=2.5/t.R*e,t.m.position.set(Math.cos(t.phi)*t.R,t.y,Math.sin(t.phi)*t.R);Z.x=(Z.x-3.2*e)%(Z.w*64),Z.y=(Z.y-1.9*e)%(Z.w*64),Z.z=(.3*i+(.55+.1*u)*(1-i)+(1-d.dunkel)*.4)*(1-(1-W.wolkenschatten)*f),P&&(P.enabled=i>.02)}function le(t){if(!F||!j)return e.render(r,a);N.gtaoMaterial.uniforms.tDepth.value=N.pdMaterial.uniforms.tDepth.value=j.readBuffer.depthTexture,j.render(t)}function ue(e,t){j?.setSize(e,t)}return{schalte:z,jedesBild:ce,render:le,groesse:ue,get an(){return F}}}P(`niedlich`);var ft=10/Math.sqrt(3),pt=(e,t)=>`${e},${t}`,mt=e=>e.split(`,`).map(Number),Q=e=>{let[t,n]=mt(e);return new x(10*(t+n/2),1.5*ft*n)},$=(e,t)=>(Math.abs(e)+Math.abs(t)+Math.abs(e+t))/2,ht=(e,[t,n]=[0,0])=>{let r=[];for(let i=-e;i<=e;i++)for(let a=-e;a<=e;a++)$(a,i)<=e&&r.push(pt(t+a,n+i));return r};function gt(e,t){let n=t/(1.5*ft),r=e/10-n/2,i=-r-n,a=Math.round(r),o=Math.round(n),s=Math.round(i),c=Math.abs(a-r),l=Math.abs(o-n),u=Math.abs(s-i);return c>l&&c>u?a=-o-s:l>u&&(o=-a-s),pt(a,o)}var _t=[[`gewaesser`,-8,16,6],[`wald`,-9,-7,4],[`hof`,15,-8,5]],vt=new Set(_t.flatMap(([,e,t,n])=>ht(n,[e,t]))),yt=[[-11,0,0,23],[-1,-1,0,2],[2,-1,0,2],[0,-2,0,4],[-5,-6,0,17],[-4,-7,5,17],[11,-7,4,15]],bt=new Set(yt.flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>pt(e+i*we[n][0],t+i*we[n][1]))).filter(e=>!vt.has(e))),xt=`1,-1`,St=new Set([...ht(1,mt(xt)),...yt.slice(1,4).flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>pt(e+i*we[n][0],t+i*we[n][1])))]),Ct={detail:1,modelle:new Map},wt={0:1,1:0,2:2},Tt=new Map,Et=new Map,Dt=e=>e.shadowSide??wt[e.side],Ot=(e,t)=>e.castShadow&&!e.customDepthMaterial&&t&&t.visible!==!1&&!(t.alphaTest>0)&&!t.alphaMap&&!(t.map&&t.transparent);function kt(e){let t=[],n=e=>{if(!(e.userData.nurNah||e.name===`Schatten`)){e.isMesh&&t.push(e);for(let t of e.children)n(t)}};n(e);let r=e=>e.geometry.groups.length?e.geometry.groups:[{start:0,count:1/0,materialIndex:0}],i=t.filter(e=>r(e).every(t=>Ot(e,[].concat(e.material)[t.materialIndex??0])));if(!i.length)return;let a=Et.get(e.userData.schluessel);if(!a){e.updateMatrixWorld(!0);let t=e.matrixWorld.clone().invert(),n=new V,o=new D,s=new Map;for(let e of i){n.multiplyMatrices(t,e.matrixWorld);let i=(e.geometry.index?e.geometry.toNonIndexed():e.geometry).attributes.position,a=[].concat(e.material),c=n.determinant()<0?[0,2,1]:[0,1,2];for(let t of r(e)){let e=Dt(a[t.materialIndex??0]),r=s.get(e)??s.set(e,[]).get(e),l=Math.min(i.count,t.start+t.count);for(let e=t.start;e+2<l;e+=3)for(let t of c)o.fromBufferAttribute(i,e+t).applyMatrix4(n),r.push(o.x,o.y,o.z)}}a=[...s].map(([e,t])=>{let n=new fe;return n.setAttribute(`position`,new N(t,3)),n.computeBoundingSphere(),{seite:e,geo:n}}),Et.set(e.userData.schluessel,a)}for(let e of i)e.castShadow=!1;for(let{seite:t,geo:n}of a){let r=Tt.get(t)??Tt.set(t,new ve({shadowSide:t,visible:!1})).get(t),i=new L(n,r);i.name=`Schatten`,i.castShadow=!0,i.receiveShadow=!1,i.raycast=()=>{},e.add(i)}}function At(e){let t=I(e),n=ae({radius:11});for(let e of vt)n.felder.delete(e);for(let e of bt)n.strassen.add(e);G(n,xt,H(`wahrzeichen`,t,{...Ct,typ:`mariensaeule`}),1);let r=[...ke],i=[Ae],o=t()<.5?3:4;for(;i.length<o;)i.push(...r.splice(Math.floor(t()*r.length),1));let s=[...i.map(e=>H(`wahrzeichen`,t,{...Ct,typ:e})),...[0,1,2].map(()=>H(`betrieb`,t,Ct)),...[6,6,5,5,3].map(e=>({art:`wohnen`,stufe:e}))];a(n,s,t);for(let e of[...n.haeuser.values()])e.art===`wohnen`&&(e.stufe===0||e.stufe===4)&&t()<Math.max(0,$(...mt(e.vorn[0]))-4)/14&&le(n,e.id);for(let e=0;e<2;e++)for(let e of[...n.haeuser.values()])e.art===`wohnen`&&n.haeuser.has(e.id)&&t()<.5&&R(n,e.id);return n}function jt(t,{leer:r=!1,rand:i=_t,belegt:a=[],land:o=12,weit:c=26,bodenVon:l=()=>u.wiese,hoeheVon:d=()=>0}={}){let f=Math.min(innerWidth,innerHeight)<700,m=new s({canvas:t,antialias:!0});m.setPixelRatio(Math.min(devicePixelRatio,f?1.5:2)),m.shadowMap.enabled=!0,m.shadowMap.type=1;let _=m.shadowMap.render.bind(m.shadowMap);m.shadowMap.render=(...e)=>{for(let e of Tt.values())e.visible=!0;try{_(...e)}finally{for(let e of Tt.values())e.visible=!1}},m.toneMapping=4;let y=new A,T=new F,E=new g;E.position.set(-28,46,34).setLength(240),E.castShadow=!0,E.shadow.mapSize.setScalar(f?2048:4096),Object.assign(E.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:20,far:560}),E.shadow.bias=-4e-4,E.shadow.normalBias=.05,E.shadow.radius=3;let O=new U;O.add(E,E.target),y.add(T,O);let k=new ye(32,1,1,1500),M={licht:`tag`,jahr:`sommer`,stimmung:!1,dunkel:1,nacht:0,foehn:0},N=dt({renderer:m,szene:y,kamera:k,sonne:E,hell:T,stand:M,klein:f,ringInnen:c>26?(c-.7)*1.5*ft:200});new ResizeObserver(()=>{let{clientWidth:e,clientHeight:n}=t;m.setSize(e,n,!1),N.groesse(e,n),k.aspect=e/n,k.updateProjectionMatrix()}).observe(t);let ne={tag:{himmel:[14411504,10130570,1.4],sonne:[16773852,2.6],fenster:0,laterne:1},nacht:{himmel:[7375032,3816520,.95],sonne:[11584746,1.1],fenster:.7,laterne:3}},re={tag:[new w(13490398),new w(13884386)],nacht:[new w(1318188),new w(2502204)]};te(`glass`).emissive.setHex(16757596);let P=()=>M.licht===`nacht`?1:M.nacht,R=new w,ae=(e,t,n,r)=>e.setHex(t).lerp(R.setHex(n),r);function B(){let e=ne.tag,t=ne.nacht,n=P(),r=(e,t)=>e+(t-e)*n;ae(T.color,e.himmel[0],t.himmel[0],n),ae(T.groundColor,e.himmel[1],t.himmel[1],n),T.intensity=r(e.himmel[2],t.himmel[2])*M.dunkel,ae(E.color,e.sonne[0],t.sonne[0],n),E.intensity=r(e.sonne[1],t.sonne[1])*M.dunkel,te(`glass`).emissiveIntensity=r(e.fenster,t.fenster),te(`lamp`).emissiveIntensity=r(e.laterne,t.laterne)}let oe=new w,se=new w;y.background=oe;let le=ht(o),V=new U,fe=r?new Set([...i.flatMap(([,e,t,n])=>ht(n,[e,t])),...a]):vt;y.add(V);let H=r?new Set:bt,me=new U,ve=e=>{let t=Q(e);return{x:t.x,z:t.y,y:d(e),boden:H.has(e)?12365456:l(e),ohneFuge:r}};function xe(e,t=V){e.length&&v({gruppe:t},e.map(ve),I(e.length))}let W=new U,G=new U;W.visible=!1,W.add(G),V.add(W);let De=e=>{let t=Math.hypot(e.x,e.z);return(f?.5:1)*(t<110?.4:t<160?.8:Math.max(0,.8*(1-(t-160)/70)))},ke=e=>Math.hypot(e.x,e.z)>160,Ae=(e,t=W)=>{e.length&&ie({gruppe:t},e.map(ve),{dichte:De,fern:ke})};function je(){V.remove(me),me.traverse(e=>e.geometry?.dispose()),me=new U,xe(le.filter(e=>!fe.has(e)),me),V.add(me)}je();let Me=[],Ne=new Set(a);function Le([e,t,n,r],i){let a=he(e,{wurf:4711,jahreszeit:M.jahr}),o=Q(pt(t,n)),s=new Set;a.gruppe.position.set(o.x,0,o.y),y.add(a.gruppe),Me.push(a);for(let e of a.felder)s.add(gt(e.x+o.x,e.z+o.y));for(let e of s)Ne.add(e);let c=new Set(le),l=ht(r,[t,n]).filter(e=>c.has(e)&&!s.has(e));xe(l),Ae(l),setTimeout(i,0)}let K=new U;K.visible=!1,V.add(K);function ze(){let e=new Set(le),t=ht(c).filter(t=>!e.has(t)&&!Ne.has(t));xe(t,K),Ae(t)}let Be=p(new Te({vertexColors:!0,flatShading:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),!1),Ve=new U;Ve.visible=!1,V.add(Ve);let q=null,He=!1;function Ue(){He=!1;for(let e of Ve.children)e.geometry.dispose();Ve.clear();for(let e of G.children)e.dispose();if(G.clear(),!q)return;let e=new Set([...q.haeuser.values()].flatMap(e=>e.felder).concat([...q.kanaele??[]],r?[]:xt,ee(q).map(e=>e.f)));if(Ae(le.filter(t=>!fe.has(t)&&!H.has(t)&&!e.has(t)),G),r)return;let t=new Set([...q.haeuser.values()].flatMap(e=>e.felder.filter(t=>t!==e.garten))),n=new be;for(let e of H){let[r,i]=mt(e),a=Q(e),o=we.map(([e,t])=>pt(r+e,i+t)),s=o.filter(e=>H.has(e)),c=e=>{let t=Q(e);return ue(t.x-a.x,t.y-a.y)},l=St.has(e);_e(n,[a.x,a.y],ft*1.005,{verband:l?`diagonal`:`reihe`,platten:o.filter(e=>t.has(e)).map(c),rinnen:l||s.length>2?[]:s.filter(e=>!St.has(e)).map(c),rnd:pe(r*131+i*7+1)})}if(n.leer)return;let i=new L(n.geometrie(()=>0,1e4),Be);i.receiveShadow=!0,Ve.add(i)}let J=new U,We=new Set;y.add(J);function Ge(e){y.remove(J);for(let e of J.children)e.userData.schluessel||e.traverse(e=>e.geometry?.dispose());J=new U,de(e,J,r?{...Ct,wegPlatzerl:!0}:Ct);let t=e=>{let t=e.felder?.filter(t=>t!==e.garten)??[];return Math.max(...(t.length?t:e.vorn).map(d))};for(let n of J.children){let r=e.haeuser.get(n.userData.sandId);n.userData.y0??=n.position.y,n.position.y=n.userData.y0+(r?.vorn?t(r):d(gt(n.position.x,n.position.z)))}We=new Set;for(let t of e.haeuser.values())t.bau&&(We.add(t.id),t.bau.mit&&We.add(t.bau.mit));if(Re.schattennetz)for(let e of J.children)e.userData.schluessel&&e.userData.sandId&&!We.has(e.userData.sandId)&&kt(e);y.add(J),q=e,He=!0}let Ke=new Map,qe=new Map,Je=new WeakMap,Ye=new WeakMap,Xe=new D(1/0,0,0),Ze=null,Qe=null,$e=C.uDachMuster.value,et=new D;function tt(){Fe.x=k.position.x,Fe.y=k.position.y,Fe.z=k.position.z,et.set(0,-1,.5).unproject(k).sub(k.position).normalize();let t=et.y<-1e-6?k.position.y/-et.y:1/0;if(C.uDachMuster.value=$e&&t<Pe.fern?1:0,Ze!==J||Qe!==Re.fernhaus||Xe.distanceToSquared(k.position)>4){Ze=J,Qe=Re.fernhaus,Xe.copy(k.position);for(let e of J.children)e.userData.sandId&&nt(e)}let[n,r]=qe.entries().next().value??[];n&&(qe.delete(n),Ke.has(n)||Ke.set(n,e(r[1],{detail:0,modelle:Ct.modelle,seiten:r[0].userData.seiten??[],hinten:r[0].userData.hinten??null})),Ze=null)}function nt(e){let t=Ie(e.position.distanceTo(k.position)),n=q?.haeuser.get(e.userData.sandId),r=t===2&&Re.fernhaus&&n&&e.userData.schluessel&&!We.has(n.id),i=r?Ke.get(e.userData.schluessel):null;r&&!i&&qe.set(e.userData.schluessel,[e,n]);let a=`${t}|${!!i}`;if(e.userData.stufe===a)return;e.userData.stufe=a;let o=Je.get(e),s=Ye.get(e);if(s||(s=[],e.traverse(e=>{e.userData.nurNah&&s.push(e)}),Ye.set(e,s)),i&&!o&&(o=i.clone(!0),o.name=`Fern`,o.visible=!1,o.userData={schluessel:i.userData.schluessel},o.position.set(0,0,0),o.rotation.set(0,0,0),o.traverse(e=>{e.userData.nurNah&&(e.visible=!1)}),e.children.some(e=>e.name===`Schatten`)&&kt(o),e.add(o),Je.set(e,o)),!!i!=!!o?.visible){for(let t of e.children)t!==o&&(t.visible=!i);o.visible=!!i}for(let e of s)e.visible=t===0&&!i}let rt=E.shadow.mapSize.x,Y=380/rt,X=E.shadow.camera,it=[[-1,-1],[1,-1],[1,1],[-1,1]],at=new D,ot=new D,st=new D;function ct(){let e=-190,t=190,n=-190,r=190,i=rt,a=rt;if(Re.schattenbox){O.updateMatrixWorld(!0),k.updateMatrixWorld(),X.position.setFromMatrixPosition(E.matrixWorld),X.lookAt(st.setFromMatrixPosition(E.target.matrixWorld)),X.updateMatrixWorld();let o=1/0,s=-1/0,c=1/0,l=-1/0,u=e=>{e.applyMatrix4(X.matrixWorldInverse),o=Math.min(o,e.x),s=Math.max(s,e.x),c=Math.min(c,e.y),l=Math.max(l,e.y)};u(ot.copy(k.position));for(let[e,t]of it){at.set(e,t,.5).unproject(k).sub(k.position).normalize();for(let e of[-2,45]){let t=at.y<-1e-6?(e-k.position.y)/at.y:k.far;t>0&&u(ot.copy(k.position).addScaledVector(at,Math.min(t,k.far)))}}let d=e=>Math.min(rt,Math.max(256,Math.ceil((e+8)/Y/256)*256));i=d(Math.min(s,190)-Math.max(o,-190)),a=d(Math.min(l,190)-Math.max(c,-190));let f=(e,t,n)=>n===rt?0:Math.round((Math.max(e,-190)+Math.min(t,190))/2/Y)*Y,p=f(o,s,i),m=f(c,l,a);[e,t,n,r]=[p-i/2*Y,p+i/2*Y,m-a/2*Y,m+a/2*Y]}(X.left!==e||X.right!==t||X.bottom!==n||X.top!==r)&&(Object.assign(X,{left:e,right:t,bottom:n,top:r}),X.updateProjectionMatrix()),(E.shadow.mapSize.x!==i||E.shadow.mapSize.y!==a)&&E.shadow.mapSize.set(i,a)}let lt=(r?[]:[[`-1,-1`,-3.2,1],[`3,-1`,3.2,2]]).map(([e,t,n])=>{let r=new L(Oe(`linde`,{seed:n,alter:`jung`,form:`frei`}),j),i=Q(e);return r.position.set(i.x+t,0,i.y),r.rotation.y=n*2.1,r.castShadow=r.receiveShadow=!0,r.userData.feld=e,y.add(r),r}),ut=new U,Z=h().figur,$=I(17),yt=()=>M.stimmung?.14:0;y.add(ut);let wt=e=>{let t=new L(e,b);return t.scale.setScalar(Z),t.castShadow=!0,t},Et=()=>new Map([...H].map(e=>{let[t,n]=mt(e);return[e,we.map(([e,r])=>pt(t+e,n+r)).filter(e=>H.has(e))]})),Dt=Et(),Ot=[`marktfrau`,`baecker`,`wassertraegerin`,`hausierer`,`mueller`,`pfarrer`],At=Array.from({length:r?0:15},(e,t)=>{let n=101+t,r=Math.floor($()*6),i=t%3==0,a=i?Ee(r,{seed:n}):t%4==1?{...ge[Ot[(t>>2)%Ot.length]].bau(!0),seed:n}:Se(r,{seed:n}),o=wt(z(a)),s=$.pick([...H]),c=$.pick(Dt.get(s));ut.add(o);let l={m:o,von:s,nach:c,pos:Q(s),ziel:null,v:Z*(i?1.25:.85)*(.85+$()*.3),weg:$()*10};return jt(l),l});function jt(e){let t=Q(e.von),n=Q(e.nach),r=n.clone().sub(t).normalize();e.ziel=n.add(new x(-r.y,r.x).multiplyScalar(1.6+($()-.5)*.8))}function Mt(e,t){if(!e.m.visible)return;let n=e.ziel.clone().sub(e.pos),r=n.length(),i=e.v*t;if(r<=i){e.pos.copy(e.ziel);let t=Dt.get(e.nach).filter(t=>t!==e.von);[e.von,e.nach]=[e.nach,$.pick(t.length?t:Dt.get(e.nach))],jt(e)}else e.pos.addScaledVector(n,i/r),e.weg+=i,e.m.position.set(e.pos.x,yt()+.05*Z*Math.abs(Math.sin(e.weg*2.6/Z)),e.pos.y),e.m.rotation.y=Math.atan2(n.x,n.y)}function Nt(e){H=new Set(e);for(let e of lt)e.visible=H.has(e.userData.feld);r||je(),He=!0,Dt=Et();let t=[...H].filter(e=>Dt.get(e).length);for(let e of At)e.m.visible=t.length>0,!(!e.m.visible||Dt.get(e.von)?.includes(e.nach)&&Dt.has(e.nach))&&(e.von=$.pick(t),e.nach=$.pick(Dt.get(e.von)),e.pos=Q(e.von),jt(e))}let Pt=r?null:(()=>{let e=z({...Ee(2,{seed:7}),traegt:`reifen`}),{reifen:t,r:n}=e.userData,r=new U,i=new U,a=wt(e);return i.position.copy(t).multiplyScalar(Z),i.add(wt(ce({r:n}))),r.add(a,i),ut.add(r),{laeufer:r,achse:i,m:a,r:n,phi:0,weg:0}})();function Ft(e){let t=Pt,n=Q(xt),r=7.2,i=1.3*Z;t.phi+=i/r*e,t.weg+=i*e,t.laeufer.position.set(n.x+r*Math.cos(t.phi),yt(),n.y+r*Math.sin(t.phi)),t.laeufer.rotation.y=Math.atan2(-Math.sin(t.phi),Math.cos(t.phi)),t.m.position.y=.06*Z*Math.abs(Math.sin(t.weg*3)),t.achse.rotation.x=t.weg/(t.r*Z)}let It=[`uFrueh`,`uHerbst`,`uKahl`,`uSchnee`,`uEis`];function Lt(e,t=!1,{dauer:r}={}){M.jahr=e;for(let n of Me)n.jahreszeit(e,t,{dauer:r});if(t||!Me.length)for(let t of It)n[t].value=Ce[e][t]}let Rt=new S,zt=[];m.setAnimationLoop(e=>{Rt.update(e);let t=Math.min(.1,Rt.getDelta()),r=Rt.getElapsed();n.uZeit.value=r;for(let e of Me)e.jedesBild(r,t);for(let e of At)Mt(e,t);Pt&&Ft(t);let[i,a]=re.tag,[o,s]=re.nacht,c=P(),l=n.uSchnee.value;oe.copy(i).lerp(a,l).lerp(se.copy(o).lerp(s,l),c).multiplyScalar(M.dunkel),M.stimmung||(n.uHimmelUnten.value.copy(oe),n.uHimmelOben.value.copy(oe));for(let e of zt)e(t,r);tt(),ct(),He&&M.stimmung&&Ue(),N.jedesBild(t),N.render(t)});function Bt(){requestAnimationFrame(()=>{document.body.classList.add(`fertig`);let e=t=>()=>{t<i.length?Le(i[t],e(t+1)):ze()};setTimeout(e(0),50)})}function Vt(e){M.stimmung=e,N.schalte(e),K.visible=Ve.visible=W.visible=e,e&&(He=!0),B()}return Vt(new URLSearchParams(location.search).get(`stimmung`)!==`0`),{klein:f,renderer:m,szene:y,kamera:k,stand:M,licht:B,jahr:Lt,stimmung:Vt,zeigeStadt:Ge,legeStrassen:Nt,jedesBild:zt,start:Bt,schattenAuf:(e,t)=>O.position.set(Math.round(e/16)*16,0,Math.round(t/16)*16),schattenKamera:X,weite:K,get haeuser(){return J}}}export{gt as a,ht as c,Re as d,Pe as f,pt as i,Ct as l,$ as n,mt as o,Le as p,jt as r,Q as s,ft as t,At as u};