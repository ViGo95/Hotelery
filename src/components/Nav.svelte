<script>
	// export let segment;
</script>

<nav>
	<div class="nav-content">
		<button>
			<i class="fas fa-bars"></i>
		</button>
		<img src="images/oceania-logo.svg" width="100" height="100" alt="Oceania">
		<a href="/">
			<i class="far fa-comment"></i>
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