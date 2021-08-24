<script>
  import Module from "./Module.svelte";

	import { menu } from '../stores/store'

  let showMenu

  menu.subscribe(value => {
    showMenu = value
  })

  function menuToggle() {
    if (showMenu) {
      menu.update(value => {
        value = !value
      })
    }
  }

</script>

<section class="Home" on:click={menuToggle}>
  <div class="Modules">
    <div class="Modules-content">
      <Module />
      <Module />
      <Module />
      <Module />
      <Module />
    </div>
  </div>
</section>

<style>
  .Home {
    display: flex;
    justify-content: center;
    align-items: center;
		height: 100vh;
    width: 60%;
  }

  .Modules-content {
    display: grid;
    grid-template-columns: repeat(3, 180px);
    grid-template-rows: repeat(2, 170px);
    grid-gap: 30px;
  }
</style>