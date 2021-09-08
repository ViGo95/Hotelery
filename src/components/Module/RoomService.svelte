<script>

  import { moduleItemStore, orderListStore } from '../../stores/store';
  import { mock } from '../../stores/mock'

  import Carousel from "./Carousel.svelte";
  import Item from "./Item.svelte";
  import List from './List.svelte';

  let showList = false
  let moduleMock = mock.modules.roomService
  let moduleName = 'roomService'
  let orderList = 0

  orderListStore.subscribe(value => orderList = value.length)

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

  <div class="list-section">
    <div>{orderList || 0}</div>
    <button class="btn-secondary" on:click={listToggle}>Lista de  pedidos <i class="fas fa-clipboard-list"></i></button>
  </div>

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

  .list-section {
    position: relative;
  }

  .list-section div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -13px;
    right: 8px;
    color: var(--color-light);
    font-size: 12px;
    width: 24px;
    height: 24px;
    background-color: var(--color-oceania);
    border-radius: 100%;
    border: solid 2px var(--color-light);
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