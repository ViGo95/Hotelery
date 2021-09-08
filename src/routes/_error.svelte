<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="Error">
	<h1>{status} <span>- {error.message}</span></h1>

	<p>Lo sentimos... La ruta que busca no ha sido encontrada :( </p>

	<a href="/">Volver al inicio <i class="fas fa-reply"></i></a>

	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>

<style>
	.Error {
		position: absolute;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		top: 50%;
	}

	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	a {
		color: var(--color-oceania);
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>