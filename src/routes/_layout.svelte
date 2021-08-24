<script>
	
	import Main from '../components/Main.svelte'
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

</script>

<Nav />

<Main>
	<slot></slot>
</Main>

<Footer />

<style>
	
</style>