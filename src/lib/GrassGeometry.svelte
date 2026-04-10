<script lang="ts">
  import { T } from "@threlte/core";
  import { Matrix4, Vector3 } from "three";

  const { count = 10, radius = 0.2, height = 0.1 }: {
    count?: number;
    radius?: number;
    height?: number;
  } = $props();

  // Ein Quad = 4 Vertices → 6 Indices (2 Dreiecke)
  const quadPositions = [
    -0.02, -0.02, 0,
     0.00, -0.02, 0,
    -0.02, height, 0,
     0.02, height, 0
  ];

  const quadUVs = [
    0, 0,
    1, 0,
    0, 1,
    1, 1
  ];

  const quadIndices = [0, 1, 2/*, 2, 1, 3*/];

  // Gesamte Buffer vorbereiten
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * radius;

    const x = Math.cos(angle) * dist;
    const z = Math.sin(angle) * dist;

    const rotation = Math.random() * Math.PI * 2;

    const rot = new Matrix4().makeRotationY(rotation);
    const trans = new Matrix4().makeTranslation(x, 0, z);

    const transform = new Matrix4().multiplyMatrices(trans, rot);

    const baseIndex = i * 4;

    // Positionen transformieren
    for (let v = 0; v < 4; v++) {
      const vx = quadPositions[v * 3 + 0];
      const vy = quadPositions[v * 3 + 1];
      const vz = quadPositions[v * 3 + 2];

      const vec = new Vector3(vx, vy, vz).applyMatrix4(transform);
      positions.push(vec.x, vec.y, vec.z);
    }

    // UVs kopieren
    uvs.push(...quadUVs);

    // Indices offsetten
    indices.push(
      quadIndices[0] + baseIndex,
      quadIndices[1] + baseIndex,
      quadIndices[2] + baseIndex,
      quadIndices[3] + baseIndex,
      quadIndices[4] + baseIndex,
      quadIndices[5] + baseIndex
    );
  }
</script>

<T.BufferGeometry>
  <T.BufferAttribute
    attach="attributes.position"
    args={[new Float32Array(positions), 3]}
  />
  <T.BufferAttribute
    attach="attributes.uv"
    args={[new Float32Array(uvs), 2]}
  />
  <T.BufferAttribute
    attach="index"
    args={[new Uint16Array(indices), 1]}
  />
</T.BufferGeometry>
