<script>

	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
	import Main from '../components/Main.svelte'
	import Footer from '../components/Footer.svelte';

</script>

<Header>
	<Nav />
</Header>

<Main>
	<slot></slot>
</Main>

<Footer />

<style>
	
</style>