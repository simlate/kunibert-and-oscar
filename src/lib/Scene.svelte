<script lang="ts">
  import { T } from "@threlte/core";
  import { Edges, GLTF, Grid, OrbitControls, Resize, Text } from "@threlte/extras";
  import { DEG2RAD } from "three/src/math/MathUtils.js";

  const params = new URLSearchParams(window.location.search);
  const text = params.get("text") || "Kunibert\r\nand Oscar";
</script>



<T.PerspectiveCamera
  makeDefault
  position={[0, 1, 1]}
>
  <OrbitControls target0={[0, 1, 0]} enableDamping minPolarAngle={Math.PI*-0.15} />
</T.PerspectiveCamera>

<T.AmbientLight color={"#bbb"} />
<T.DirectionalLight color={"#fff"} intensity={0.6} position={[-0.5, 1, 1]} />

<Grid type="polar" gridSize={2} maxRadius={13} sectionSize={0.15} cellDividers={9} cellSize={0.075} />

<T.Mesh position.y={-0.01} rotation.x={-90 * DEG2RAD}>
  <T.CircleGeometry args={[1, 21]} />
  <T.MeshBasicMaterial color="blue" />
</T.Mesh>


<GLTF url="./kunibert.gltf"
  position.x={-0.05} position.y={-0.05} position.z={-0.2}
  rotation.x={-5 * DEG2RAD} rotation.y={215 * DEG2RAD} rotation.z={-5 * DEG2RAD}
/>

<GLTF url="./oscar.gltf"
  position.x={0} position.y={0.15}
  rotation.x={180 * DEG2RAD} rotation.y={-45 * DEG2RAD} rotation.z={-5 * DEG2RAD}
  scale={0.6}
/>

<Text {text} color="white" textAlign="center" anchorX="50%" anchorY="100%" fontSize={0.1} position.z={0.4} rotation.x={-90*DEG2RAD} />
