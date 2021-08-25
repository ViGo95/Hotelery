<script>

  import { menu, moduleStore } from '../stores/store'

  let showMenu = false
  let showModule = false

  menu.subscribe(value => {
    showMenu = value
  })

  moduleStore.subscribe(value => {
    showModule = value
  })

  function toggles() {
    if (showMenu) {
      menu.set(!showMenu)
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

      <button class="Module" on:click={() => moduleHandler('module')}>
        <div class="Module-container">
          <div class="Module-content">
            <img alt="Success Kid" src="images/lobby.png">
            <p>Module</p>
          </div>
        </div>
      </button>

      <button class="Module" on:click={() => moduleHandler('hola')}>
        <div class="Module-container">
          <div class="Module-content">
            <img alt="Success Kid" src="images/lobby.png">
            <p>Module</p>
          </div>
        </div>
      </button>

      <button class="Module" on:click={moduleHandler}>
        <div class="Module-container">
          <div class="Module-content">
            <img alt="Success Kid" src="images/lobby.png">
            <p>Module</p>
          </div>
        </div>
      </button>

      <button class="Module" on:click={moduleHandler}>
        <div class="Module-container">
          <div class="Module-content">
            <img alt="Success Kid" src="images/lobby.png">
            <p>Module</p>
          </div>
        </div>
      </button>

      <button class="Module" on:click={moduleHandler}>
        <div class="Module-container">
          <div class="Module-content">
            <img alt="Success Kid" src="images/lobby.png">
            <p>Module</p>
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
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }

  .Module-content {
    width: 100%;
    height: 100%;
  }

  .Module-content p {
    text-align: center;
    margin-top: 4px;
    font-size: 12px;
    font-weight: 600;
  }
</style>