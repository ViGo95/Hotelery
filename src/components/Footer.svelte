<script>
  import { menuStore } from '../stores/store'

  let showMenu = false

  menuStore.subscribe(value => {
    showMenu = value
  })

  function toggles() {
    if (showMenu) {
      menuStore.set(false)
    }
  }
</script>

<footer>
  <div class="Footer-content" on:click={toggles}>
    <div class="Footer-content_copy">
      <p>Hotelery © 2021</p>
    </div>
    <div class="Footer-content_extras">
      <a href="/">Term & conditions</a>
      <a href="/">Privacy policy</a>
      <a href="/">Parners</a>
    </div>
  </div>
</footer>

<style>
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  a, p {
    color: var(--color-gray_light);
  }

  .Footer-content {
    display: flex;
    justify-content: space-between;
    padding: 12px 36px;
  }
  .Footer-content_extras {
    display: flex;
    justify-content: space-between;
    width: 360px;
  }
</style>