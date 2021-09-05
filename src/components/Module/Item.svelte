<script>

  import { moduleItemStore, orderListStore } from '../../stores/store'

  let item, list;
  export let moduleName;

  moduleItemStore.subscribe(value => item = value)
  orderListStore.subscribe(value => list = value)

  function addToList(element) {
    if (list.length > 0) {
      let foundItem = list.find(e => e.title === element.title)

      if (foundItem) {
        let itemIndex = list.findIndex(e => e.title === element.title)
        list[itemIndex].counted += 1
      } else {
        element.counted = 1
        orderListStore.update(values => ([...values, element]))
      }
    } else {
      element.counted = 1
      orderListStore.update(values => ([...values, element]))
    }
  }

</script>

<div class="Item">

  {#if item}

    <img src=" images/{ item.images[0] } " alt=" { item.title } ">
    <div class="Item-info">
      <div class="Item-description">
        <h2 class="title"> { item.title } </h2>
        <p> { item.desc } </p>
      </div>
      <div class="Item-value">
        <div><p> { item.price }$ </p></div>
        {#if moduleName === 'roomService'}
        <button class="btn-main" on:click={() => addToList(item)}>Agregar a pedidos <i class="fas fa-plus-circle"></i></button>
        {/if}
      </div>
    </div>

  {/if}

</div>

  {#if item.extra}

  <div class="Item_conditions">
  {#each item.extra.elements as element}

    <div class="condition">
      <p><i class="{ element.icon }"></i> { element.title }</p>
    </div>

  {/each}
  </div>

  {/if}

<style>
  .Item {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 16vw;
  }

  .Item img {
    width: 16vw;
    height: 16vw;
    border-radius: 5px;
  }

  .Item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .Item-description p {
    font-size: 13px;
    width: 16vw;
  }

  .Item-value {
    display: flex;
    justify-content: space-between;
  }
  .Item-value div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Item_conditions {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(3, 1fr);
    margin: 20px 0 0 0;
  }

  .condition {
    font-size: 12px;
  }

  .title {
    margin: 0 0 4px 0;
  }

  .btn-main {
    width: 11vw;
    height: 40px;
	  font-size: 14px;
  }

  .btn-main i {
    margin: 0 0 0 4px;
  }
</style>