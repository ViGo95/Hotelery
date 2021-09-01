<script>

</script>
<div class="Carousel">
  <div class="Carousel-title">
    <h4>Platos fuertes</h4>
    <button>
      <i class="fas fa-exchange-alt"></i>
    </button>
  </div>

  <div class="Carousel-content">
    <div class="Carousel-viewport">
      <div class="Carousel-item">
        <img src="" alt="">
        <p>Food title</p>
      </div>
      <div class="Carousel-item">
        <img src="" alt="">
        <p>Food title</p>
      </div>
      <div class="Carousel-item">
        <img src="" alt="">
        <p>Food title</p>
      </div>
      <div class="Carousel-item">
        <img src="" alt="">
        <p>Food title</p>
      </div>
      <div class="Carousel-item">
        <img src="" alt="">
        <p>Food title</p>
      </div>
      <div class="Carousel-item">
        <img src="" alt="">
        <p>Food title</p>
      </div>
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