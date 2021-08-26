<script>

</script>

<div class="RoomService">
  <div class="RoomService-content">
    <div class="RoomService-sections_title">
      <h4>Platos fuertes</h4>
      <button>
        <i class="fas fa-exchange-alt"></i>
      </button>
    </div>
    <div class="RoomService-carousel">
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
      <div class="carousel-item">
        <img src="" alt="">
      </div>
    </div>
    <div class="RoomService-info">
      <img src="" alt="">
      <p></p>
      <h2 class="title">Item title</h2>
      <span>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </span>
      <span>9,99$</span>
    </div>
    <div class="RoomService-actions">
      <button class="btn-main">Agregar a pedidos <i class="fas fa-plus-circle"></i></button>
      <button class="btn-secondary">Lista de  pedidos <i class="fas fa-clipboard-list"></i></button>
    </div>
  </div>
</div>

<style>
  .RoomService {
    margin-top: 24px;
    overflow: hidden;
  }

  .RoomService-sections_title {
    display: flex;
    justify-content: space-between;
  }
  .RoomService-sections_title h4 {
    color: var(--color-gray_light);
    font-size: 14px;
    font-weight: 400;
  }
  .RoomService-sections_title i {
    color: var(--color-oceania);
    font-size: 16px;
  }

  .RoomService-carousel {
    display: flex;
    width: 100%;
    /* display: inline-grid;
    grid-gap: 18px;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); */
    overflow-x: scroll;
  }

  .carousel-item {
    width: 90px;
    height: 90px;
    border: solid 1px black;
  }

  .btn-main, .btn-secondary {
    width: 210px;
    height: 50px;
	  font-size: 16px;
  }

  .btn-main i, .btn-secondary i {
    margin: 0 0 0 4px;
  }
</style>