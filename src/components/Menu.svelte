<script>

	import { slide } from 'svelte/transition';

</script>

<div class="Menu">
  <div class="Menu-container">
    <div class="transition" transition:slide>
      <div class="Menu-content">
        <ul>
          <li>
            <a href="/">Lobby</a>
            <button><i class="fas fa-star"></i></button>
          </li>
          <li>
            <a href="/">Habitaciones</a>
            <button><i class="fas fa-star"></i></button>
          </li>
          <li>
            <a href="/">Piscina</a>
            <button><i class="fas fa-star"></i></button>
          </li>
          <li>
            <a href="/">Restaurant</a>
            <button><i class="fas fa-star"></i></button>
          </li>
          <li>
            <a href="/">Room service</a>
            <button><i class="fas fa-star"></i></button>
          </li>
          <li>
            <a href="/">Lugares cercanos</a>
            <button><i class="fas fa-star"></i></button>
          </li>
          <li>
            <a href="/">Servicios</a>
            <button><i class="fas fa-star"></i></button>
          </li>
          <li>
            <a href="/">Mensajes</a>
            <button><i class="fas fa-star"></i></button>
          </li>
          <li>
            <a href="/">Configuración</a>
            <button><i class="fas fa-star"></i></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  .Menu {
    position: absolute;
    left: 36px;
    top: 60px
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