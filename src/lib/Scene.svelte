<script lang="ts">
  import { T } from "@threlte/core";
  import { ContactShadows, GLTF, Grid, InstancedMeshes, OrbitControls, RadialGradientTexture, Sky, Text, useDraco, useGltf } from "@threlte/extras";
  import { Mesh, Vector3 } from "three";
  import { DEG2RAD } from "three/src/math/MathUtils.js";
  import Flower from "./Flower.svelte";
  import Sparkles from "./Sparkles/Sparkles.svelte";
  import GrassGeometry from "./GrassGeometry.svelte";
  import GrassMaterial from "./GrassMaterial.svelte";
  import WalkerNoiseMaterial from "./WalkerNoiseMaterial.svelte";
  import WaterWaveMaterial from "./WaterWaveMaterial.svelte";

  const params = new URLSearchParams(window.location.search);
  const text = params.get("text") || "Kunibert\r\nand Oscar";

  const dracoLoader = useDraco();

  const flowerGltf = useGltf<{
    nodes: { Blossom: Mesh, Stem: Mesh }
    materials: {}
  }>('./flower.glb');

  function pastelColor() {
    const base = Math.random() * 0xffffff;

    // add white parts (0.5 = 50% white)
    const mix = 0.5;

    const r = ((base >> 16) & 0xff) * (1 - mix) + 255 * mix;
    const g = ((base >> 8) & 0xff) * (1 - mix) + 255 * mix;
    const b = (base & 0xff) * (1 - mix) + 255 * mix;

    return (r << 16) | (g << 8) | b;
  }


  // make an array of random x-z coordinates in the range of -20 to 20 with 200 elements
  const flowerPos = Array.from({ length: 100 }, () => {
    const angle = Math.random() * 2 * Math.PI;
    const minRadius = 0.5;
    const r = minRadius + (1 - minRadius) * (1 - Math.pow(Math.random(), 3));
    return {
      x: Math.cos(angle) * r,
      z: Math.sin(angle) * r,
      scale: Math.random() * 0.5 + 0.5,
      // color: Math.random() * 0xffffff,
      color: pastelColor(),
      rotation: {
        x: Math.random() * 8,
        y: Math.random() * 360,
        z: Math.random() * 8
      }
    };
  });
</script>



<T.PerspectiveCamera
  makeDefault
  position={[0, 1, 1]}
>
  <OrbitControls target={[0, 0.15, 0]} enablePan={false} enableDamping maxPolarAngle={85 * DEG2RAD} />
</T.PerspectiveCamera>

<T.AmbientLight color={"#bbb"} />
<T.DirectionalLight color={"#fff"} intensity={0.6} position={[-0.15, 1, -1]}
  castShadow
  shadow.camera.left={-2.5}
  shadow.camera.right={2.5}
  shadow.camera.top={2.5}
  shadow.camera.bottom={-2.5}
  shadow.mapSize.width={2048}
  shadow.mapSize.height={2048}
/>

<Grid
  position.y={-0.005}
  infiniteGrid
  cellColor="#ffffff80"
  sectionColor="#ffffff80"
  cellSize={0.1}
  fadeDistance={1.35}
  type="circular"
  fadeOrigin={new Vector3()}
/>

<Sparkles
  position.y={0.5}
  count={35}
  color="white"
  scale={[2,0.5,2]}
  size={5}
  speed={1}
/>

{#if $flowerGltf}  
  <ContactShadows
    opacity={0.75}
    scale={4}
    blur={1}
    far={10}
    resolution={128}
    color="#000000"
    frames={30}
  />
{/if}

<T.Mesh position.y={-0.022}>
  <T.CylinderGeometry args={[1.2, 1.2, 0.02, 32]} />
  <!-- <T.MeshStandardMaterial color="#288278" /> -->
  <WalkerNoiseMaterial color1="#588157" color2="#40916c" scale={48} />
</T.Mesh>

<T.Mesh position.y={-0.022} rotation.x={-90 * DEG2RAD}>
  <T.RingGeometry args={[1.2, 1.6, 32, 1]} />
  <T.MeshStandardMaterial>
    <RadialGradientTexture
      innerRadius={390}
      outerRadius={512}
      stops={[
        { color: "#102016", offset: 0 },
        { color: "#ff6600", offset: 0.5 },
        { color: "#0066ff", offset: 1 }
      ]}
    />
  </T.MeshStandardMaterial>
</T.Mesh>

<T.Mesh position.y={-2} rotation.x={-90 * DEG2RAD}>
  <T.PlaneGeometry args={[1024, 1024, 128, 128]} />
  <WaterWaveMaterial color1="#00b4d8" color2="#0096c7" scale={32}
    waveAmplitude={1.0}
    waveFrequency={3.0}
    waveSpeed={1}
  />
</T.Mesh>

<Sky elevation={0.5} />

<GLTF url="./kunibert.glb"
  castShadow
  position={[ -0.05, 0, -.2 ]}
  rotation={[ 0, Math.PI + 0.15, 0 ]}
  {dracoLoader}
/>

<GLTF url="./oscar.glb"
  castShadow
  position={[ 0, 0, 0 ]}
  rotation={[ 0, 0, 0 ]}
  scale={0.6}
  {dracoLoader}
/>

{#if $flowerGltf}
  <InstancedMeshes
    castShadow
    meshes={$flowerGltf.nodes}
  >
    {#snippet children({ components: { Blossom, Stem } })}
      {#each flowerPos as flower}
        <Flower
          position.x={flower.x}
          position.z={flower.z}
          scale={flower.scale}
          rotation.y={(flower.rotation.y * Math.PI) / 180}
          rotation.x={(flower.rotation.x * Math.PI) / 180}
          rotation.z={(flower.rotation.z * Math.PI) / 180}
          color={flower.color}
        >
          <Blossom color={flower.color} />
          <Stem color="#aaa" />
        </Flower>

        <T.Mesh
          position={[flower.x, 0, flower.z]}
          rotation.y={(0.1 * flower.rotation.y * Math.PI) / 180}
          rotation.z={(flower.rotation.z * Math.PI) / 180}
        >
          <GrassGeometry count={50} height={0.06} />
          rotation.x={(flower.rotation.x * Math.PI) / 180}
          <!-- <T.MeshStandardMaterial color="#4caf50" side={2} /> -->
          <GrassMaterial windStrength={0.015} windSpeed={2} />
        </T.Mesh>
      {/each}
    {/snippet}
  </InstancedMeshes>
{/if}

<Text {text} color="white" textAlign="center" anchorX="50%" anchorY="100%" fontSize={0.1} position.z={0.45} rotation.x={-90*DEG2RAD} />

