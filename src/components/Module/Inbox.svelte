<script>

  import  { ordersStore } from '../../stores/store'

  let orders = false

  ordersStore.subscribe(value => orders = value)

</script>

<div class="Inbox">
  { orders }
</div>

<style>

</style>