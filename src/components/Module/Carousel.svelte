<script>

  import { moduleItemStore } from "../../stores/store";

  export let moduleMock;

  let section = 0

  function typeHandler() {
    if (section === moduleMock.sections.length-1) {
      section = 0
    } else {
      section += 1
    }
  }

  function itemHandler(item) {
    moduleItemStore.set(item)
  }

</script>

<div class="Carousel">
  <div class="Carousel-title">
    <h4> { moduleMock.sections[section].title } </h4>

    {#if moduleMock.sections.length > 1}

        <button on:click={typeHandler}>
          <i class="fas fa-exchange-alt"></i>
        </button>

    {/if}

  </div>

  <div class="Carousel-content">
    <div class="Carousel-viewport">

      {#each moduleMock.sections[section].items as item}

        <div class="Carousel-item" on:click={() => itemHandler(item)}>
          <img src=" images/{ item.images[0] } " alt=" { item.title } ">
          <h4> { item.title } </h4>
        </div>

      {/each}

    </div>
  </div>
</div>

<style>
  .Carousel-title {
    display: flex;
    justify-content: space-between;
  }
  .Carousel-title h4 {
    color: var(--color-gray_light);
    font-size: 14px;
    font-weight: 400;
  }
  .Carousel-title i {
    color: var(--color-oceania);
    font-size: 16px;
  }

  .Carousel-content {
    display: flex;
    align-items: center;
    height: 25vh;
    white-space: nowrap;
    overflow-x: auto;
  }

  .Carousel-viewport {
    padding: 0 1.3vh;
  }

  .Carousel-item {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 -10px 0;
    border-radius: 5px;
  }
  .Carousel-item img {
    width: 15vh;
    height: 15vh;
    border-radius: 5px;
    background-color: var(--color-light);
    transition: .2s;
  }
  .Carousel-item img:hover {
    transform: scale(1.2);
    z-index: 1;
  }

  .Carousel-item h4 {
    background: var(--color-light);
    color: inherit;
    padding: 2px 8px;
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    width: 15vh;
    z-index: 2;
  }

  /* SCROLLBAR */

  ::-webkit-scrollbar {
    height: 6px;
  }
</style>