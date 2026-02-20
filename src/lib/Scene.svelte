<script lang="ts">
  import { T } from "@threlte/core";
  import { GLTF, Grid, InstancedMeshes, OrbitControls, Sky, Text, useDraco, useGltf } from "@threlte/extras";
  import { Mesh, Vector3 } from "three";
  import { DEG2RAD } from "three/src/math/MathUtils.js";
  import Flower from "./Flower.svelte";

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
  <OrbitControls target={[0, 0, 0]} enablePan={false} enableDamping maxPolarAngle={85 * DEG2RAD} />
</T.PerspectiveCamera>

<T.AmbientLight color={"#bbb"} />
<T.DirectionalLight color={"#fff"} intensity={0.6} position={[-0.15, 1, -1]}
  castShadow
  shadow.camera.left={-2.5}
  shadow.camera.right={2.5}
  shadow.camera.top={2.5}
  shadow.camera.bottom={-2.5}
  shadow.mapSize.width={1024}
  shadow.mapSize.height={1024}
/>

<Grid
  position.y={-0.005}
  infiniteGrid
  cellColor="#fff"
  sectionColor="#fff"
  cellSize={0.1}
  fadeDistance={1}
  type="circular"
  fadeOrigin={new Vector3()}
/>

<T.Mesh position.y={-0.022} rotation.x={0 * DEG2RAD} receiveShadow>
  <T.CylinderGeometry args={[1.05, 1.05, 0.02, 32]} />
  <T.MeshStandardMaterial color="#288278" />
</T.Mesh>

<Sky elevation={0.5} />

<GLTF url="./kunibert2.glb"
  castShadow
  position={[ -0.05, 0, -.2 ]}
  rotation={[ 0, Math.PI + 0.15, 0 ]}
  {dracoLoader}
/>

<GLTF url="./oscar2.glb"
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
          <Stem />
        </Flower>
      {/each}
    {/snippet}
  </InstancedMeshes>
{/if}

<Text {text} color="white" textAlign="center" anchorX="50%" anchorY="100%" fontSize={0.1} position.z={0.45} rotation.x={-90*DEG2RAD} />
