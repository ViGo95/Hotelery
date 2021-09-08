<script>

	import { slide } from 'svelte/transition';

  import { menuStore, moduleStore } from '../stores/store'
  import { mock } from '../stores/mock'

  let showMenu = false
    menuStore.subscribe(value => {
    showMenu = value
  })

  function menuToggle() {
    if (showMenu) {
      menuStore.set(false)
    }
  }

  function moduleHandler(id) {
		moduleStore.set(id)
  }

  let modules = mock.modules

</script>

<div class="Menu-modal" on:click={menuToggle}>
  <div class="Menu">
    <div class="Menu-container">
      <div class="transition" transition:slide>
        <div class="Menu-content">
          <ul>

            {#each Object.values(modules) as module}

            <li>
              <button on:click={() => moduleHandler(module.id)}> { module.title } </button>
              <button><i class="fas fa-star"></i></button>
            </li>

            {/each}

            <li>
              <button>Servicios</button>
            </li>
            <li>
              <button on:click={() => moduleHandler('inbox')}>Mensajes</button>
            </li>
            <li>
              <button>Configuración</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .Menu-modal {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }

  .Menu {
    position: absolute;
    top: 48px;
  }

  .Menu-container {
    padding: 16px;
    background: var(--color-light);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin: 12px 0;
  }

  button {
    font-size: 16px;
  }

  .fa-star {
    color: var(--color-star);
    font-size: 16px;
    margin-left: 20px;
  }
</style>