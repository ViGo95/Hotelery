<script>

  import RoomService from '../components/Module/RoomService.svelte'

	import { crossfade } from 'svelte/transition';

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
	<Module>
		<RoomService />
	</Module>
{/if}


<style>
	@media (min-width: 480px) {

	}
</style>
