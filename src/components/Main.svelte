<script>

	import { menu } from '../stores/store'

	let menuValue

	menu.subscribe(value => {
		menuValue = value
	})

	function menuToggle() {
		console.log('ola')
		if (menuValue) {
			menu.update(value => {
				value = !value
			})
		}
	}

</script>

<main on:click={menuToggle}>
	<slot></slot>
</main>

<style>
	
</style>