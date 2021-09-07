<script>

  import { orderListStore, ordersStore, moduleItemStore } from '../../stores/store'

  export let listToggle

  let list, total

  orderListStore.subscribe(value => {
    let parcial = 0

    list = value

    list.forEach(element => {
      parcial = parcial + (element.price * element.counted)
    });

    total = parcial.toFixed(2)
  })

  ordersStore.subscribe(value => console.log(value))

  function addMoreItems() {
    moduleItemStore.set('')
    listToggle()
  }

  function makeOrder() {
    ordersStore.update(values => ([...values, list]))
    orderListStore.set([])
  }

</script>

<div class="List">
  <div class="List-container">

    {#if Object.values(list)[0]}

    <div class="List-content">

      {#each list as item}

      <div class="List-item">

        {#if item.counted > 1}

        <div> { item.counted }</div>

        {/if}
        <img src=" images/{ item.images[0] } " alt=" { item.title } ">
      </div>

      {/each}

      <button on:click={addMoreItems}>
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <div class="List-total">
      <h4>Total: <span> { total }$ </span></h4>
    </div>

    {/if}

  </div>
</div>

{#if Object.values(list)[0]}

<button class="btn-main" on:click={makeOrder}>Realizar el pedido <i class="fas fa-check-circle"></i></button>

{:else}

<button class="btn-main" on:click={addMoreItems}>Agrega items <i class="fas fa-clipboard-list"></i></button>

{/if}


<style>
  .List {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .List-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 70vh;
    padding: 10px 10px 0 10px;
  }

  .List-content {
    display: grid;
    grid-gap: 3vh 1vw;
    grid-template-columns: repeat(auto-fill, minmax(9vw, 1fr));
  }

  .List-item {
    position: relative;
    width: 10vw;
    height: 10vw;
    border-radius: 5px;
  }
  .List-item img {
    width: 10vw;
    height: 10vw;
    border-radius: 5px;
    background-color: var(--color-light);
    transition: .2s;
  }
  .List-item img:hover {
    transform: scale(1.1);
  }

  .List-item div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -5px;
    right: -5px;
    color: var(--color-light);
    font-size: 12px;
    width: 24px;
    height: 24px;
    background-color: var(--color-oceania);
    border-radius: 100%;
    border: solid 1px var(--color-light);
  }

  .List-content button {
    color: var(--color-gray_light);
    font-size: 26px;
    width: 10vw;
    height: 10vw;
    border-radius: 5px;
    border: solid 1px var(--color-gray_light);
    background-color: var(--color-light);
    transition: .2s;
  }

  .List-content button:hover {
    transform: scale(1.1);
    z-index: 1;
  }

  .List-total {
    margin: 16px 0 0 0;
  }

  .btn-main {
    font-size: 14px;
    width: 100%;
    height: 40px;
  }
  .btn-main i {
    font-size: 14px;
    margin: 0 6px;
  }
</style>