<script>

  import { fade } from 'svelte/transition';

  import RoomService from './RoomService.svelte'
  import Rooms from './Rooms.svelte'
  import Inbox from './Inbox.svelte';

  export let showModule;

</script>

<section in:fade="{{ duration: 150 }}" out:fade="{{ duration: 150 }}" class="Module">

  {#if showModule === 'roomService'}
    <RoomService />
  {:else if showModule === 'rooms'}
    <Rooms />
  {:else if showModule === 'inbox'}
    <Inbox />
  {/if}

</section>

<style>
  .Module {
		height: 100vh;
		width: 40vw;
    padding: 28px;
    z-index: 1;
    background-color: var(--color-light);
    box-sizing: border-box;
    box-shadow: -1px 0px 4px 2px rgba(0, 0, 0, 0.25);
    transition: .2s;
	}
</style>