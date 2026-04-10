<script lang="ts">
  import { T, useTask } from "@threlte/core";
    import type { ShaderMaterial } from "three";
  const { windStrength = 0.1, windSpeed = 1.0 }: {
    windStrength?: number;
    windSpeed?: number;
  } = $props();

  let mat: ShaderMaterial|undefined = $state();

  useTask((delta: number) => {
    if (mat?.uniforms === undefined) { return; }
    mat.uniforms.time.value += delta;
  });
</script>

<T.ShaderMaterial bind:ref={mat}
  vertexShader={`
    uniform float time;
    uniform float windStrength;
    uniform float windSpeed;

    varying vec2 vUv;

    void main() {
      vUv = uv;

      vec3 pos = position;

      // nur obere Hälfte bewegen
      float factor = smoothstep(0.0, 1.0, uv.y);

      float wind = sin((position.x + position.z) * 5.0 + time * windSpeed);

      pos.x += wind * windStrength * factor;
      pos.z += wind * windStrength * factor;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `}
  fragmentShader={`
    varying vec2 vUv;
    void main() {

      gl_FragColor = vec4(0.1, 0.35, 0.1, 1.0);
    }
  `}
  uniforms={{
    time: { value: 0 },
    windStrength: { value: windStrength },
    windSpeed: { value: windSpeed }
  }}
/>
