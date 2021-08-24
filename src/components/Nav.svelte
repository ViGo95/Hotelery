<script>

  import { menu } from '../stores/store'

	import Menu from './Menu'

  let showMenu = false

  menu.subscribe(value => {
		showMenu = value
  })

	function toggleMenu() {
		menu.update(value => value = !value)
	}
</script>

<nav>
	<div class="nav-content">
		<button on:click={toggleMenu}>
			<i class="fas fa-bars"></i>
		</button>

		{#if showMenu}
			<Menu />
		{/if}

		<img src="images/oceania-logo.svg" width="100" height="100" alt="Oceania">
		<a href="/">
			<i class="far fa-comment"></i>
		</a>
	</div>
</nav>

<style>
	.nav-content {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
    padding: 12px 36px 0 36px;
	}

	i {
		font-size: 30px;
		color: var(--color-oceania);
		margin-top: 12px;
	}
</style>