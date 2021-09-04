<script>

  import { moduleStore, moduleItemStore } from '../stores/store'
  import { mock } from '../stores/mock'

  let showModule = false
  let moduleItem = false
  let modules = mock.modules

  moduleStore.subscribe(value => {
    showModule = value
  })

  moduleItemStore.subscribe(value => {
    moduleItem = value
  })

  function toggles() {
    if (moduleItem) {
      moduleItemStore.set('')
    }
  }

  function moduleHandler(name) {
    if(showModule === name) {
      moduleStore.set(false)
    } else {
      moduleStore.set(name)
    }
  }

</script>

<section class="Home" on:click={toggles}>
  <div class="Modules">
    <div class="Modules-content">

      {#each Object.values(modules) as module}

        <button class="Module" on:click={() => moduleHandler(module.id)}>
          <div class="Module-container">
            <div class="Module-content">
              <img src="images/{ module.cover }" alt=" { module.title } ">
              <p> { module.title } </p>
            </div>
          </div>
        </button>

      {/each}

      <button class="Module">
        <div class="Module-container">
          <div class="Module-content" style="display: flex; align-items: center; justify-content: center;">
            <p>Próximamente...</p>
          </div>
        </div>
      </button>

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

  .Module-container {
    width: 100%;
    height: 100%;
    border: solid 3px var(--color-light);
    border-radius: 15px;box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    transition: .4s;
  }
  .Module-container:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.25);
  }

  .Module-content {
    width: 100%;
    height: 100%;
  }

  .Module-content img {
    width: 100%;
    height: 85%;
  }

  .Module-content p {
    text-align: center;
    margin-top: 4px;
    font-size: 12px;
    font-weight: 600;
  }
</style>