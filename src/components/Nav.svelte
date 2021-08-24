<script>
  import { menu } from '../stores/store'

	import Menu from './Menu'

  let menuValue = false

  menu.subscribe(value => {
		menuValue = value
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

		{#if menuValue}
			<Menu />
		{/if}
		<img src="images/oceania-logo.svg" width="100" height="100" alt="Oceania">
		<a href="/">
			<i class="fas fa-comment"></i>
		</a>
	</div>

	<!-- <ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul> -->
</nav>

<style>
	.nav-content {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
    padding: 12px 36px 0 36px;
	}

	i {
		font-size: 24px;
		color: var(--color-oceania);
		margin-top: 12px;
	}
</style>