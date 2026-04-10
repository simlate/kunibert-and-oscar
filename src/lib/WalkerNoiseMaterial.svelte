<script lang="ts">
  import { T, useTask } from '@threlte/core';
  import { Color, ShaderMaterial } from 'three';

  const {
    color1 = '#553e35',
    color2 = '#694439',
    scale = 4.0,
    speed = 0.0
  }: {
    color1?: string;
    color2?: string;
    scale?: number;
    speed?: number;
  } = $props();

  let mat: ShaderMaterial|undefined = $state();

  useTask((delta: number) => {
    if (mat?.uniforms && speed > 0) {
      mat.uniforms.time.value *= delta * speed;
    }
  });
</script>

<T.ShaderMaterial
  bind:ref={mat}
  uniforms={{
    time: { value: 0 },
    color1: { value: new Color(color1) },
    color2: { value: new Color(color2) },
    scale: { value: scale }
  }}
  vertexShader={`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `}
  fragmentShader={`
    uniform float time;
    uniform float scale;
    uniform vec3 color1;
    uniform vec3 color2;

    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float walkerNoise(vec2 uv) {
      vec2 gv = floor(uv);
      vec2 lv = fract(uv);

      float a = hash(gv);
      float b = hash(gv + vec2(1.0, 0.0));
      float c = hash(gv + vec2(0.0, 1.0));
      float d = hash(gv + vec2(1.0, 1.0));

      vec2 f = lv * lv * (3.0 - 2.0 * lv);

      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main() {
      vec2 uv = vUv * scale + time * 0.1;
      float n = walkerNoise(uv);
      vec3 col = mix(color1, color2, n);
      gl_FragColor = vec4(col, 1.0);
    }
  `}
/>
