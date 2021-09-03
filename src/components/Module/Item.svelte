<script>

  import { moduleItemStore } from '../../stores/store'

  let item;

  moduleItemStore.subscribe(value => item = value)
  console.log(item)

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
        <button class="btn-main">Agregar a pedidos <i class="fas fa-plus-circle"></i></button>
      </div>
    </div>

  {/if}

</div>

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