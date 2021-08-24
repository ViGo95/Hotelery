<script>
  import Module from "./Module.svelte";
</script>

<section class="Modules">
  <div class="Modules-content">
    <Module />
    <Module />
    <Module />
    <Module />
    <Module />
  </div>
</section>

<style>
  .Modules {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .Modules-content {
    display: grid;
    grid-template-columns: repeat(3, 180px);
    grid-template-rows: repeat(2, 170px);
    grid-gap: 30px;
  }
</style>