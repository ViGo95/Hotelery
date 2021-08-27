<script>

  import { fade } from 'svelte/transition';

  import RoomService from './RoomService.svelte'

  export let showModule;

</script>

<section in:fade="{{ duration: 150 }}" out:fade="{{ duration: 150 }}" class="Module">
  <!-- <div class="Module-container"> -->
    <div class="Module-content">
      <div class="Module-title">
        <h2 class="title">Titulo del modulo</h2>
        <h4 class="subtitle">Subtitulo del modulo</h4>
      </div>

      {#if showModule === 'roomService'}
        <RoomService />
      {:else if showModule === 'lobby'}
        <h2>Lobby</h2>
      {/if}

    </div>
  <!-- </div> -->
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

  .Module-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
		width: 100%;
    box-sizing: content-box;
  }

  .title {
    margin: 0 0 8px 15px;
  }

  .subtitle {
    color: var(--color-gray);
    font-weight: 400;
  }
</style>