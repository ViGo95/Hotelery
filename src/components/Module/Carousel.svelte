<script>

  import { mock } from '../../stores/mock'

  export let moduleName;

  let roomServiceMock = mock[moduleName]
  let serviceType = 0

  function typeHandler() {
    if (serviceType === roomServiceMock.types.length-1) {
      serviceType = 0
    } else {
      serviceType += 1
    }
  }

</script>

<div class="Carousel">
  <div class="Carousel-title">
    <h4> { roomServiceMock.types[serviceType].title } </h4>
    <button on:click={typeHandler}>
      <i class="fas fa-exchange-alt"></i>
    </button>
  </div>

  <div class="Carousel-content">
    <div class="Carousel-viewport">

      {#each roomServiceMock.types[serviceType].items as item}

        <div class="Carousel-item">
          <img src=" { item.images[serviceType] } " alt=" { item.title } ">
          <p> { item.title } </p>
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
    padding: 0 3vh;
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
    transform: scale(1.4);
    z-index: 1;
  }

  .Carousel-item p {
    font-size: 12px;
    text-align: center;
    z-index: 2;
  }

  /* SCROLLBAR */

  ::-webkit-scrollbar {
    height: 6px;
  }
</style>