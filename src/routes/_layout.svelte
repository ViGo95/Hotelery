<script>
	import Main from '../components/Main.svelte'
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<Nav {segment}/>

<Main>
	<slot></slot>
</Main>

<Footer />

<style>
	
</style>