<script>
  // import { menu } from '../stores/store'

  // let showMenu = false

  // menu.subscribe(value => {
  //   showMenu = value
  // })

  // function toggles() {
  //   if (showMenu) {
  //     menu.set(false)
  //   }
  // }
</script>

<header>
  <slot />
</header>

<style>
  header {
    position: fixed;
    width: 100%;
  }
</style>