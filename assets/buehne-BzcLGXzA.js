import{$ as e,$n as t,A as n,Ar as r,Bt as i,Cn as a,F as o,Fr as s,Gn as c,Hn as l,Ht as u,I as d,In as f,J as p,K as m,Kn as h,Kt as g,L as _,Ln as v,Mn as y,Mr as b,N as x,Nr as S,O as C,On as w,Or as T,Qt as E,R as D,Rn as O,Sn as k,Sr as A,Tr as ee,U as te,Un as j,Vn as M,Wn as N,Zt as P,_n as F,ar as ne,at as I,b as L,bn as R,cn as z,cr as B,er as V,fn as H,hn as re,hr as U,i as ie,it as ae,jn as W,jr as G,kr as K,l as oe,lr as se,lt as ce,mr as le,n as ue,nr as de,o as fe,or as pe,q as me,qt as he,r as ge,sr as _e,st as ve,t as ye,tr as be,u as q,v as xe,vr as Se,w as Ce,wn as we,xr as Te,xt as Ee,yr as J,z as De,zn as Oe}from"./natur-schau-B1tlt4HJ.js";var ke={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Ae=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},je=new B(-1,1,1,-1,0,1),Me=new class extends w{constructor(){super(),this.setAttribute(`position`,new M([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new M([0,2,0,0,2,0],2))}},Ne=class{constructor(e){this._mesh=new be(Me,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,je)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Pe=class extends Ae{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof A?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=K.clone(e.uniforms),this.material=new A({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ne(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Y=class extends Ae{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Fe=class extends Ae{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ie=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new b);this._width=n.width,this._height=n.height,t=new s(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:N}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pe(ke),this.copyPass.material.blending=0,this.timer=new T}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Y!==void 0&&(r instanceof Y?n=!0:r instanceof Fe&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new b);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Le=class extends Ae{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},X={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new b},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new V},cameraProjectionMatrixInverse:{value:new V},cameraWorldMatrix:{value:new V},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new S(-1,-1,-1)},sceneBoxMax:{value:new S(1,1,1)}},vertexShader:`

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

		}`},Re={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function ze(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Be(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new S(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new f(i,t,t);return a.wrapS=Se,a.wrapT=Se,a.needsUpdate=!0,a}function Be(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Q={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Ve(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new b},cameraProjectionMatrixInverse:{value:new V},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ve(e,t,n){let r=He(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function He(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new S(Math.cos(a),Math.sin(a),o))}return r}var Ue=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,ee=g-1+3*d,te=_-1+3*d,j=v-1+3*d,M=c&255,N=l&255,P=u&255,F=this.perm[M+this.perm[N+this.perm[P]]]%12,ne=this.perm[M+y+this.perm[N+b+this.perm[P+x]]]%12,I=this.perm[M+S+this.perm[N+C+this.perm[P+w]]]%12,L=this.perm[M+1+this.perm[N+1+this.perm[P+1]]]%12,R=.6-g*g-_*_-v*v;R<0?r=0:(R*=R,r=R*R*this._dot3(this.grad3[F],g,_,v));let z=.6-T*T-E*E-D*D;z<0?i=0:(z*=z,i=z*z*this._dot3(this.grad3[ne],T,E,D));let B=.6-O*O-k*k-A*A;B<0?a=0:(B*=B,a=B*B*this._dot3(this.grad3[I],O,k,A));let V=.6-ee*ee-te*te-j*j;return V<0?o=0:(V*=V,o=V*V*this._dot3(this.grad3[L],ee,te,j)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,ee=w>D?4:0,te=T>D?2:0,j=+(E>D),M=O+k+A+ee+te+j,N=+(a[M][0]>=3),P=+(a[M][1]>=3),F=+(a[M][2]>=3),ne=+(a[M][3]>=3),I=+(a[M][0]>=2),L=+(a[M][1]>=2),R=+(a[M][2]>=2),z=+(a[M][3]>=2),B=+(a[M][0]>=1),V=+(a[M][1]>=1),H=+(a[M][2]>=1),re=+(a[M][3]>=1),U=w-N+c,ie=T-P+c,ae=E-F+c,W=D-ne+c,G=w-I+2*c,K=T-L+2*c,oe=E-R+2*c,se=D-z+2*c,ce=w-B+3*c,le=T-V+3*c,ue=E-H+3*c,de=D-re+3*c,fe=w-1+4*c,pe=T-1+4*c,me=E-1+4*c,he=D-1+4*c,ge=h&255,_e=g&255,ve=_&255,ye=v&255,be=o[ge+o[_e+o[ve+o[ye]]]]%32,q=o[ge+N+o[_e+P+o[ve+F+o[ye+ne]]]]%32,xe=o[ge+I+o[_e+L+o[ve+R+o[ye+z]]]]%32,Se=o[ge+B+o[_e+V+o[ve+H+o[ye+re]]]]%32,Ce=o[ge+1+o[_e+1+o[ve+1+o[ye+1]]]]%32,we=.6-w*w-T*T-E*E-D*D;we<0?l=0:(we*=we,l=we*we*this._dot4(i[be],w,T,E,D));let Te=.6-U*U-ie*ie-ae*ae-W*W;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(i[q],U,ie,ae,W));let Ee=.6-G*G-K*K-oe*oe-se*se;Ee<0?d=0:(Ee*=Ee,d=Ee*Ee*this._dot4(i[xe],G,K,oe,se));let J=.6-ce*ce-le*le-ue*ue-de*de;J<0?f=0:(J*=J,f=J*J*this._dot4(i[Se],ce,le,ue,de));let De=.6-fe*fe-pe*pe-me*me-he*he;return De<0?p=0:(De*=De,p=De*De*this._dot4(i[Ce],fe,pe,me,he)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},We=class e extends Ae{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ze(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new s(this.width,this.height,{type:N,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new A({defines:Object.assign({},X.defines),uniforms:K.clone(X.uniforms),vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ne,this.normalMaterial.blending=0,this.pdMaterial=new A({defines:Object.assign({},Q.defines),uniforms:K.clone(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new A({defines:Object.assign({},Z.defines),uniforms:K.clone(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new A({uniforms:K.clone(ke.uniforms),vertexShader:ke.vertexShader,fragmentShader:ke.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new A({uniforms:K.clone(Re.uniforms),vertexShader:Re.vertexShader,fragmentShader:Re.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Ne(null),this._originalClearColor=new W,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new O,this.depthTexture.format=v,this.depthTexture.type=G,this.normalRenderTarget=new s(this.width,this.height,{minFilter:_e,magFilter:_e,type:N,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ve(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ue,n=e*e*4,i=new Uint8Array(n);for(let n=0;n<e;n++)for(let r=0;r<e;r++){let a=n,o=r;i[(n*e+r)*4]=(t.noise(a,o)*.5+.5)*255,i[(n*e+r)*4+1]=(t.noise(a+e,o)*.5+.5)*255,i[(n*e+r)*4+2]=(t.noise(a,o+e)*.5+.5)*255,i[(n*e+r)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let a=new f(i,e,e,le,r);return a.wrapS=Se,a.wrapT=Se,a.needsUpdate=!0,a}};We.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ge={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new W(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Ke=class e extends Ae{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new b(256,256):new b(e.x,e.y),this.clearColor=new W(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new s(i,a,{type:N,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new s(i,a,{type:N,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new s(i,a,{type:N,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Ge;this.highPassUniforms=K.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new A({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new b(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=K.clone(ke.uniforms),this.blendMaterial=new A({uniforms:this.copyUniforms,vertexShader:ke.vertexShader,fragmentShader:ke.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new W,this._oldClearAlpha=1,this._basic=new de,this._fsQuad=new Ne(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new b(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new A({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new b(.5,.5)},direction:{value:new b(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new A({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ke.BlurDirectionX=new b(1,0),Ke.BlurDirectionY=new b(0,1);var qe={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Je=class extends Ae{constructor(){super(),this.isOutputPass=!0,this.uniforms=K.clone(qe.uniforms),this.material=new U({name:qe.name,uniforms:this.uniforms,vertexShader:qe.vertexShader,fragmentShader:qe.fragmentShader}),this._fsQuad=new Ne(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},y.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ye={tag:{himmel:[11848172,8819292,.95],sonne:[16767398,3.4]},nacht:{himmel:[6059696,2764604,.8],sonne:[10336494,1.15]}},Xe={sonne:16759922,himmel:14206632},Ze={sonne:15922940,himmel:14082286},Qe={sonne:16753242,himmel:9407684,himmelfarbe:[15905930,7307444]},$e=new W(5199454),et={tag:[14214116,7117010],herbst:[15259320,8822720],winter:[13818596,10662600],nacht:[2305608,527900]},tt={fruehling:40,sommer:47,herbst:33,winter:26},nt={x:0,y:0,z:0,w:95};for(let e of[`lambert`,`phong`,`standard`,`physical`,`toon`])a[e].uniforms.wolken={value:nt};k.lights_pars_begin+=`
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

		`+e.slice(n)}function rt({renderer:e,szene:n,kamera:r,sonne:i,hell:a,stand:o,klein:c,ringInnen:u=200}){let f=new URLSearchParams(location.search),m=f.has(`nachbearbeitung`)?f.get(`nachbearbeitung`)!==`0`:!c,v={richtung:i.position.clone(),hintergrund:null},y=new j;y.visible=!1,n.add(y);let C=new A({uniforms:{unten:{value:new W},oben:{value:new W}},vertexShader:`varying float vHoehe;
void main() { vHoehe = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 unten;
uniform vec3 oben;
varying float vHoehe;
void main() {
  gl_FragColor = vec4(mix(unten, oben, pow(smoothstep(0.0, 0.4, vHoehe), 0.7)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,side:1,depthWrite:!1,fog:!1}),w=new be(new ee(1400,32,16),C);w.frustumCulled=!1,w.renderOrder=-1,y.add(w);let T=new l(16777215,300,1400),E=(e,t,n)=>new W(e).lerp(new W(t),n),k=new J(u,1700,72,18).rotateX(-Math.PI/2).translate(0,-.08,0),te=new be(p(k,x.wiese,_.get(x.wiese)),d);te.receiveShadow=!0,y.add(te);let M=new pe({color:16777215,flatShading:!0,roughness:1,emissive:2765120}),F=g(31),ne=[];for(let e=0;e<16;e++){let e=[],t=3+Math.floor(F()*3);for(let n=0;n<t;n++){let r=new h(1,0),i=.55+F()*.5;r.scale(i,i*.6,i).translate((n-(t-1)/2)*.8+(F()-.5)*.4,i*.15,(F()-.5)*.7),e.push(r)}let n=new be(P(e),M);n.scale.setScalar(28+F()*40),ne.push({m:n,R:620+F()*730,phi:F()*Math.PI*2,y:190+F()*80}),y.add(n)}let I=null,L=null,R=null;function z(){let{width:t,height:i}=e.getSize(new b);I=new Ie(e,new s(t,i,{type:N,samples:4,depthTexture:new O(t,i)})),I.setPixelRatio(e.getPixelRatio()),I.setSize(t,i),I.addPass(new Le(n,r)),L=new We(n,r,t,i,void 0,{radius:2.4,distanceExponent:1.3,thickness:1.5,scale:1.1,samples:16},{radius:6,samples:8}),L.setGBuffer(I.readBuffer.depthTexture);let a=L.setSize.bind(L);L.setSize=(e,t)=>a(Math.max(1,Math.round(e/2)),Math.max(1,Math.round(t/2))),L.blendIntensity=1,I.addPass(L),R=new Ke(new b(t,i),.7,.45,.7),I.addPass(R),I.addPass(new Je)}let B=!1,V=tt[o.jahr];function H(e){B=e,y.visible=B,n.fog=B?T:null,B&&n.background&&(v.hintergrund=n.background),n.background=B?null:v.hintergrund,nt.z=0,B||i.position.copy(v.richtung),B&&m&&!I&&z()}let re=new W,U=new W,ie=new S;function ae(e){if(!B)return;let n=Ye.tag,s=Ye.nacht,c=o.licht===`nacht`?1:o.nacht,l=4*c*(1-c),u=D.uHerbst.value,d=D.uSchnee.value;re.setHex(n.sonne[0]).lerp(new W(Xe.sonne),u*(1-d)).lerp(new W(Ze.sonne),d),U.setHex(n.himmel[0]).lerp(new W(Xe.himmel),u*(1-d)*.6).lerp(new W(Ze.himmel),d),re.lerp(new W(s.sonne[0]),c).lerp(new W(Qe.sonne),l*.75),U.lerp(new W(s.himmel[0]),c).lerp(new W(Qe.himmel),l*.6),i.color.copy(re),i.intensity=(n.sonne[1]*(1-.25*d)*(1-c)+s.sonne[1]*c)*o.dunkel,a.color.copy(U),a.groundColor.setHex(n.himmel[1]).lerp(new W(s.himmel[1]),c),a.intensity=(n.himmel[2]*(1+.25*d)*(1-c)+s.himmel[2]*c)*o.dunkel;let f=(o.foehn??0)*(1-c);f>0&&(i.color.lerp(new W(q.sonne.farbe),f),i.intensity+=(q.sonne.staerke*o.dunkel-i.intensity)*f,a.color.lerp(new W(q.himmelslicht.farbe),f),a.groundColor.lerp(new W(q.himmelslicht.boden),f),a.intensity+=(q.himmelslicht.staerke*o.dunkel-a.intensity)*f),V+=(tt[o.jahr]*(1-.55*l)-V)*Math.min(1,e*.8);let p=Math.atan2(v.richtung.z,v.richtung.x),m=t.degToRad(V);i.position.set(Math.cos(p)*Math.cos(m),Math.sin(m),Math.sin(p)*Math.cos(m)).multiplyScalar(v.richtung.length());let[h,g]=[0,1].map(e=>E(et.tag[e],et.herbst[e],u*(1-d)).lerp(new W(et.winter[e]),d).lerp(new W(et.nacht[e]),c).lerp(new W(Qe.himmelfarbe[e]),l*[.7,.4][e]));if(C.uniforms.unten.value.copy(h),C.uniforms.oben.value.copy(g),f>0&&(C.uniforms.unten.value.lerp(new W(q.himmel.unten),f),C.uniforms.oben.value.lerp(new W(q.himmel.oben),f)),o.dunkel<1)for(let e of[C.uniforms.unten.value,C.uniforms.oben.value])e.lerp($e,1-o.dunkel);T.color.copy(C.uniforms.unten.value),w.position.copy(r.position),r.getWorldDirection(ie);let _=ie.y<-.05?Math.min(900,-r.position.y/ie.y):900;T.near=_*.7+30,T.far=Math.min(1400,T.near+340+_*1.3),T.near*=1+(q.dunstweite-1)*f,T.far*=1+(q.dunstweite-1)*f;for(let t of ne)t.phi+=2.5/t.R*e,t.m.position.set(Math.cos(t.phi)*t.R,t.y,Math.sin(t.phi)*t.R);nt.x=(nt.x-3.2*e)%(nt.w*64),nt.y=(nt.y-1.9*e)%(nt.w*64),nt.z=(.3*c+(.55+.1*d)*(1-c)+(1-o.dunkel)*.4)*(1-(1-q.wolkenschatten)*f),R&&(R.enabled=c>.02)}function G(t){if(!B||!I)return e.render(n,r);L.gtaoMaterial.uniforms.tDepth.value=L.pdMaterial.uniforms.tDepth.value=I.readBuffer.depthTexture,I.render(t)}function K(e,t){I?.setSize(e,t)}return{schalte:H,jedesBild:ae,render:G,groesse:K,get an(){return B}}}he(`niedlich`);var it=10/Math.sqrt(3),at=(e,t)=>`${e},${t}`,ot=e=>e.split(`,`).map(Number),$=e=>{let[t,n]=ot(e);return new b(10*(t+n/2),1.5*it*n)},st=(e,t)=>(Math.abs(e)+Math.abs(t)+Math.abs(e+t))/2,ct=(e,[t,n]=[0,0])=>{let r=[];for(let i=-e;i<=e;i++)for(let a=-e;a<=e;a++)st(a,i)<=e&&r.push(at(t+a,n+i));return r};function lt(e,t){let n=t/(1.5*it),r=e/10-n/2,i=-r-n,a=Math.round(r),o=Math.round(n),s=Math.round(i),c=Math.abs(a-r),l=Math.abs(o-n),u=Math.abs(s-i);return c>l&&c>u?a=-o-s:l>u&&(o=-a-s),at(a,o)}var ut=[[`gewaesser`,-8,16,6],[`wald`,-9,-7,4],[`hof`,15,-8,5]],dt=new Set(ut.flatMap(([,e,t,n])=>ct(n,[e,t]))),ft=[[-11,0,0,23],[-1,-1,0,2],[2,-1,0,2],[0,-2,0,4],[-5,-6,0,17],[-4,-7,5,17],[11,-7,4,15]],pt=new Set(ft.flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>at(e+i*E[n][0],t+i*E[n][1]))).filter(e=>!dt.has(e))),mt=`1,-1`,ht=new Set([...ct(1,ot(mt)),...ft.slice(1,4).flatMap(([e,t,n,r])=>Array.from({length:r},(r,i)=>at(e+i*E[n][0],t+i*E[n][1])))]),gt={detail:1,modelle:new Map};function _t(e){let t=g(e),n=z({radius:11});for(let e of dt)n.felder.delete(e);for(let e of pt)n.strassen.add(e);re(n,mt,C(`wahrzeichen`,t,{...gt,typ:`mariensaeule`}),1);let r=[...L],i=[xe],a=t()<.5?3:4;for(;i.length<a;)i.push(...r.splice(Math.floor(t()*r.length),1));let o=[...i.map(e=>C(`wahrzeichen`,t,{...gt,typ:e})),...[0,1,2].map(()=>C(`betrieb`,t,gt)),...[6,6,5,5,3].map(e=>({art:`wohnen`,stufe:e}))];R(n,o,t);for(let e of[...n.haeuser.values()])e.art===`wohnen`&&(e.stufe===0||e.stufe===4)&&t()<Math.max(0,st(...ot(e.vorn[0]))-4)/14&&H(n,e.id);for(let e=0;e<2;e++)for(let e of[...n.haeuser.values()])e.art===`wohnen`&&n.haeuser.has(e.id)&&t()<.5&&F(n,e.id);return n}function vt(t,{leer:r=!1,rand:a=ut,belegt:s=[],land:l=12,weit:d=26,bodenVon:f=()=>x.wiese,hoeheVon:p=()=>0}={}){let h=Math.min(innerWidth,innerHeight)<700,_=new we({canvas:t,antialias:!0});_.setPixelRatio(Math.min(devicePixelRatio,h?1.5:2)),_.shadowMap.enabled=!0,_.shadowMap.type=1,_.toneMapping=4;let v=new Te,y=new c,S=new Oe;S.position.set(-28,46,34).setLength(240),S.castShadow=!0,S.shadow.mapSize.setScalar(h?2048:4096),Object.assign(S.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:20,far:560}),S.shadow.bias=-4e-4,S.shadow.normalBias=.05,S.shadow.radius=3;let C=new j;C.add(S,S.target),v.add(y,C);let w=new se(32,1,1,1500),O={licht:`tag`,jahr:`sommer`,stimmung:!1,dunkel:1,nacht:0,foehn:0},k=rt({renderer:_,szene:v,kamera:w,sonne:S,hell:y,stand:O,klein:h,ringInnen:d>26?(d-.7)*1.5*it:200});new ResizeObserver(()=>{let{clientWidth:e,clientHeight:n}=t;_.setSize(e,n,!1),k.groesse(e,n),w.aspect=e/n,w.updateProjectionMatrix()}).observe(t);let A={tag:{himmel:[14411504,10130570,1.4],sonne:[16773852,2.6],fenster:0,laterne:1},nacht:{himmel:[7375032,3816520,.95],sonne:[11584746,1.1],fenster:.7,laterne:3}},ee={tag:[new W(13490398),new W(13884386)],nacht:[new W(1318188),new W(2502204)]};i(`glass`).emissive.setHex(16757596);let M=()=>O.licht===`nacht`?1:O.nacht,N=new W,P=(e,t,n,r)=>e.setHex(t).lerp(N.setHex(n),r);function F(){let e=A.tag,t=A.nacht,n=M(),r=(e,t)=>e+(t-e)*n;P(y.color,e.himmel[0],t.himmel[0],n),P(y.groundColor,e.himmel[1],t.himmel[1],n),y.intensity=r(e.himmel[2],t.himmel[2])*O.dunkel,P(S.color,e.sonne[0],t.sonne[0],n),S.intensity=r(e.sonne[1],t.sonne[1])*O.dunkel,i(`glass`).emissiveIntensity=r(e.fenster,t.fenster),i(`lamp`).emissiveIntensity=r(e.laterne,t.laterne)}let ne=new W,L=new W;v.background=ne;let R=ct(l),z=new j,B=r?new Set([...a.flatMap(([,e,t,n])=>ct(n,[e,t])),...s]):dt;v.add(z);let V=r?new Set:pt,H=new j,re=e=>{let t=$(e);return{x:t.x,z:t.y,y:p(e),boden:V.has(e)?12365456:f(e),ohneFuge:r}};function U(e,t=z){e.length&&m({gruppe:t},e.map(re),g(e.length))}let G=new j,K=new j;G.visible=!1,G.add(K),z.add(G);let le=e=>{let t=Math.hypot(e.x,e.z);return(h?.5:1)*(t<110?.4:t<160?.8:Math.max(0,.8*(1-(t-160)/70)))},de=e=>Math.hypot(e.x,e.z)>160,he=(e,t=G)=>{e.length&&me({gruppe:t},e.map(re),{dichte:le,fern:de})};function _e(){z.remove(H),H.traverse(e=>e.geometry?.dispose()),H=new j,U(R.filter(e=>!B.has(e)),H),z.add(H)}_e();let q=[],xe=new Set(s);function Se([e,t,n,r],i){let a=ue(e,{wurf:4711,jahreszeit:O.jahr}),o=$(at(t,n)),s=new Set;a.gruppe.position.set(o.x,0,o.y),v.add(a.gruppe),q.push(a);for(let e of a.felder)s.add(lt(e.x+o.x,e.z+o.y));for(let e of s)xe.add(e);let c=new Set(R),l=ct(r,[t,n]).filter(e=>c.has(e)&&!s.has(e));U(l),he(l),setTimeout(i,0)}let J=new j;J.visible=!1,z.add(J);function ke(){let e=new Set(R),t=ct(d).filter(t=>!e.has(t)&&!xe.has(t));U(t,J),he(t)}let Ae=te(new pe({vertexColors:!0,flatShading:!0,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),!1),je=new j;je.visible=!1,z.add(je);let Me=null,Ne=!1;function Pe(){Ne=!1;for(let e of je.children)e.geometry.dispose();je.clear();for(let e of K.children)e.dispose();if(K.clear(),!Me)return;let e=new Set([...Me.haeuser.values()].flatMap(e=>e.felder).concat([...Me.kanaele??[]],r?[]:mt,Ce(Me).map(e=>e.f)));if(he(R.filter(t=>!B.has(t)&&!V.has(t)&&!e.has(t)),K),r)return;let t=new Set([...Me.haeuser.values()].flatMap(e=>e.felder.filter(t=>t!==e.garten))),n=new ge;for(let e of V){let[r,i]=ot(e),a=$(e),o=E.map(([e,t])=>at(r+e,i+t)),s=o.filter(e=>V.has(e)),c=e=>{let t=$(e);return ie(t.x-a.x,t.y-a.y)},l=ht.has(e);fe(n,[a.x,a.y],it*1.005,{verband:l?`diagonal`:`reihe`,platten:o.filter(e=>t.has(e)).map(c),rinnen:l||s.length>2?[]:s.filter(e=>!ht.has(e)).map(c),rnd:oe(r*131+i*7+1)})}if(n.leer)return;let i=new be(n.geometrie(()=>0,1e4),Ae);i.receiveShadow=!0,je.add(i)}let Y=new j;v.add(Y);function Fe(e){v.remove(Y);for(let e of Y.children)e.userData.schluessel||e.traverse(e=>e.geometry?.dispose());Y=new j,n(e,Y,r?{...gt,wegPlatzerl:!0}:gt);for(let t of Y.children){let n=e.haeuser.get(t.userData.sandId)?.vorn?.[0]??lt(t.position.x,t.position.z);t.userData.y0??=t.position.y,t.position.y=t.userData.y0+p(n)}v.add(Y),Me=e,Ne=!0}let Ie=(r?[]:[[`-1,-1`,-3.2,1],[`3,-1`,3.2,2]]).map(([e,t,n])=>{let r=new be(Ee(`linde`,{seed:n,alter:`jung`,form:`frei`}),De),i=$(e);return r.position.set(i.x+t,0,i.y),r.rotation.y=n*2.1,r.castShadow=r.receiveShadow=!0,r.userData.feld=e,v.add(r),r}),Le=new j,X=u().figur,Z=g(17),Re=()=>O.stimmung?.14:0;v.add(Le);let ze=e=>{let t=new be(e,o);return t.scale.setScalar(X),t.castShadow=!0,t},Be=()=>new Map([...V].map(e=>{let[t,n]=ot(e);return[e,E.map(([e,r])=>at(t+e,n+r)).filter(e=>V.has(e))]})),Q=Be(),Ve=[`marktfrau`,`baecker`,`wassertraegerin`,`hausierer`,`mueller`,`pfarrer`],He=Array.from({length:r?0:15},(t,n)=>{let r=101+n,i=Math.floor(Z()*6),a=n%3==0,o=a?ve(i,{seed:r}):n%4==1?{...e[Ve[(n>>2)%Ve.length]].bau(!0),seed:r}:ae(i,{seed:r}),s=ze(I(o)),c=Z.pick([...V]),l=Z.pick(Q.get(c));Le.add(s);let u={m:s,von:c,nach:l,pos:$(c),ziel:null,v:X*(a?1.25:.85)*(.85+Z()*.3),weg:Z()*10};return Ue(u),u});function Ue(e){let t=$(e.von),n=$(e.nach),r=n.clone().sub(t).normalize();e.ziel=n.add(new b(-r.y,r.x).multiplyScalar(1.6+(Z()-.5)*.8))}function We(e,t){if(!e.m.visible)return;let n=e.ziel.clone().sub(e.pos),r=n.length(),i=e.v*t;if(r<=i){e.pos.copy(e.ziel);let t=Q.get(e.nach).filter(t=>t!==e.von);[e.von,e.nach]=[e.nach,Z.pick(t.length?t:Q.get(e.nach))],Ue(e)}else e.pos.addScaledVector(n,i/r),e.weg+=i,e.m.position.set(e.pos.x,Re()+.05*X*Math.abs(Math.sin(e.weg*2.6/X)),e.pos.y),e.m.rotation.y=Math.atan2(n.x,n.y)}function Ge(e){V=new Set(e);for(let e of Ie)e.visible=V.has(e.userData.feld);r||_e(),Ne=!0,Q=Be();let t=[...V].filter(e=>Q.get(e).length);for(let e of He)e.m.visible=t.length>0,!(!e.m.visible||Q.get(e.von)?.includes(e.nach)&&Q.has(e.nach))&&(e.von=Z.pick(t),e.nach=Z.pick(Q.get(e.von)),e.pos=$(e.von),Ue(e))}let Ke=r?null:(()=>{let e=I({...ve(2,{seed:7}),traegt:`reifen`}),{reifen:t,r:n}=e.userData,r=new j,i=new j,a=ze(e);return i.position.copy(t).multiplyScalar(X),i.add(ze(ce({r:n}))),r.add(a,i),Le.add(r),{laeufer:r,achse:i,m:a,r:n,phi:0,weg:0}})();function qe(e){let t=Ke,n=$(mt),r=7.2,i=1.3*X;t.phi+=i/r*e,t.weg+=i*e,t.laeufer.position.set(n.x+r*Math.cos(t.phi),Re(),n.y+r*Math.sin(t.phi)),t.laeufer.rotation.y=Math.atan2(-Math.sin(t.phi),Math.cos(t.phi)),t.m.position.y=.06*X*Math.abs(Math.sin(t.weg*3)),t.achse.rotation.x=t.weg/(t.r*X)}let Je=[`uFrueh`,`uHerbst`,`uKahl`,`uSchnee`,`uEis`];function Ye(e,t=!1,{dauer:n}={}){O.jahr=e;for(let r of q)r.jahreszeit(e,t,{dauer:n});if(t||!q.length)for(let t of Je)D[t].value=ye[e][t]}let Xe=new T,Ze=[];_.setAnimationLoop(e=>{Xe.update(e);let t=Math.min(.1,Xe.getDelta()),n=Xe.getElapsed();D.uZeit.value=n;for(let e of q)e.jedesBild(n,t);for(let e of He)We(e,t);Ke&&qe(t);let[r,i]=ee.tag,[a,o]=ee.nacht,s=M(),c=D.uSchnee.value;ne.copy(r).lerp(i,c).lerp(L.copy(a).lerp(o,c),s).multiplyScalar(O.dunkel);for(let e of Ze)e(t,n);Ne&&O.stimmung&&Pe(),k.jedesBild(t),k.render(t)});function Qe(){requestAnimationFrame(()=>{document.body.classList.add(`fertig`);let e=t=>()=>{t<a.length?Se(a[t],e(t+1)):ke()};setTimeout(e(0),50)})}function $e(e){O.stimmung=e,k.schalte(e),J.visible=je.visible=G.visible=e,e&&(Ne=!0),F()}return $e(new URLSearchParams(location.search).get(`stimmung`)!==`0`),{klein:h,renderer:_,szene:v,kamera:w,stand:O,licht:F,jahr:Ye,stimmung:$e,zeigeStadt:Fe,legeStrassen:Ge,jedesBild:Ze,start:Qe,schattenAuf:(e,t)=>C.position.set(Math.round(e/16)*16,0,Math.round(t/16)*16),weite:J,get haeuser(){return Y}}}export{lt as a,ct as c,at as i,gt as l,st as n,ot as o,vt as r,$ as s,it as t,_t as u};