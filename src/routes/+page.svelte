<script lang="ts">
  import Scene from "$lib/Scene.svelte";
  import { Canvas } from "@threlte/core";
</script>


<div class="viewport">
  <Canvas>
    <Scene />
  </Canvas>
</div>



<style>

  :global(body) {
    background-color: #121212;
    margin: 0;
    overflow: hidden;
  }

  .viewport {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

</style>