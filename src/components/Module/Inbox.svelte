<script>

  import  { ordersStore } from '../../stores/store'
import Item from './Item.svelte';

  let orders = []

  ordersStore.subscribe(value => orders = value)

</script>

<div class="Inbox">

  {#each orders as order}

    <div class="order">
      {#each order as item}

      <h4> {item.title} <span>x{item.counted}</span> </h4>

      {/each}
    </div>

  {/each}

</div>

<style>
  .order {
    margin: 0 0 12px 0;
    border: solid 1px var(--color-oceania);
  }
</style>