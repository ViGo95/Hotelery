<script>

	import { moduleStore } from '../stores/store'

	import Home from '../components/Home.svelte'
	import Module from '../components/Module/index.svelte'

	let showModule

	moduleStore.subscribe(value => {
		showModule = value
		console.log(showModule)
	})

</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Home />

{#if showModule}
	<Module {showModule}>

	</Module>
{/if}


<style>

</style>
