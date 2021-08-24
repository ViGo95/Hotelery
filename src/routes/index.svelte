<script>

	import { moduleStore } from '../stores/store'

	import Home from '../components/Home.svelte'
	import Info from '../components/Info.svelte'

	let showModule = false

	moduleStore.subscribe(value => {
		showModule = value
	})

</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Home />

{#if showModule}
	<Info>
		
	</Info>
{/if}


<style>
	@media (min-width: 480px) {

	}
</style>
