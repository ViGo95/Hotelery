<script>

</script>

<section class="Module">
  <div class="Module-content">
    <div class="Module-title">
      <h2 class="title">Titulo del modulo</h2>
      <h4 class="subtitle">Subtitulo del modulo</h4>
      <slot />
    </div>
  </div>
</section>

<style>
  .Module {
		height: 100vh;
		width: 40vw;
    z-index: 1;
    background-color: var(--color-light);
    box-sizing: border-box;
    box-shadow: -1px 0px 4px 2px rgba(0, 0, 0, 0.25);
	}

  .Module-content {
    padding: 32px;
  }

  .title {
    margin: 0 0 15px 15px;
  }

  .subtitle {
    color: var(--color-gray);
    font-weight: 400;
  }
</style>