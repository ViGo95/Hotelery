<script>

	import { slide } from 'svelte/transition';

  import { menuStore } from '../stores/store'
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
              <a href="/"> { module.title } </a>
              <button><i class="fas fa-star"></i></button>
            </li>

            {/each}

            <li>
              <a href="/">Servicios</a>
            </li>
            <li>
              <a href="/">Mensajes</a>
            </li>
            <li>
              <a href="/">Configuración</a>
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
    color: var(--color-star);
    font-size: 16px;
    margin-left: 20px;
  }
</style>