<script>

  import { moduleItemStore } from '../../stores/store';
  import { mock } from '../../stores/mock'

  import Carousel from "./Carousel.svelte";
  import Item from "./Item.svelte";
  import List from './List.svelte';

  let showList = false
  let moduleMock = mock.modules.roomService
  let moduleName = 'roomService'

  function listToggle() {
    moduleItemStore.set('')
    showList = !showList
  }

</script>

<div class="RoomService">

  <div class="RoomService-title">
    <h2 class="title"> { moduleMock.title } </h2>
    <h4 class="subtitle"> { moduleMock.desc } </h4>
  </div>

  {#if showList}

  <button class="list-button" on:click={listToggle}><i class="fas fa-reply"></i></button>

  <List {listToggle}/>

  {:else}

  <Carousel {moduleMock}/>
  <Item {moduleName}/>

  <button class="btn-secondary" on:click={listToggle}>Lista de  pedidos <i class="fas fa-clipboard-list"></i></button>

  {/if}

</div>

<style>
  .RoomService {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;
  }

  .title {
    margin: 0 0 12px 16px;
  }

  .subtitle {
    color: var(--color-gray);
    font-weight: 400;
  }

  .list-button {
    position: absolute;
    top: 0;
    right: 0;
    color: var(--color-oceania);
    font-size: 24px;
  }

  .btn-secondary {
    font-size: 14px;
    width: 100%;
    height: 40px;
  }
  .btn-secondary i {
    font-size: 14px;
    margin: 0 6px;
  }
</style>