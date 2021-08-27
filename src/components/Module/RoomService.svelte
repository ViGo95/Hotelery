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
      <div class="carousel-viewport">
        <div class="carousel-item">
          <img src="" alt="">
          <p>Food title</p>
        </div>
        <div class="carousel-item">
          <img src="" alt="">
          <p>Food title</p>
        </div>
        <div class="carousel-item">
          <img src="" alt="">
          <p>Food title</p>
        </div>
        <div class="carousel-item">
          <img src="" alt="">
          <p>Food title</p>
        </div>
        <div class="carousel-item">
          <img src="" alt="">
          <p>Food title</p>
        </div>
        <div class="carousel-item">
          <img src="" alt="">
          <p>Food title</p>
        </div>
      </div>
    </div>
    <div class="RoomService-item">
      <img src="" alt="">
      <div class="Item-info">
        <div class="Item-description">
          <h2 class="title">Item title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut, nobis sunt quisquam perferendis quibusdam expedita, similique deserunt temporibus rem laudantium maxime!</p>
        </div>
        <div class="Item-value">
          <span>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </span>
          <span>9,99$</span>
        </div>
      </div>
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
    align-items: center;
    height: 150px;
    white-space: nowrap;
    overflow-x: auto;
  }

  .carousel-viewport {
    padding: 0 20px;
  }

  .carousel-item {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 -10px 0;
    border-radius: 5px;
  }
  .carousel-item img {
    width: 90px;
    height: 90px;
    border-radius: 5px;
    background-color: var(--color-light);
    transition: .2s;
  }
  .carousel-item img:hover {
    transform: scale(1.4);
    z-index: 1;
  }

  .carousel-item p {
    font-size: 12px;
    text-align: center;
    z-index: 2;
  }

  .RoomService-item {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 32px 0;
  }

  .RoomService-item img {
    width: 16vw;
    height: 16vw;
    border-radius: 5px;
  }

  .RoomService-item p {
    font-size: 13px;
    width: 16vw;
  }

  .Item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    margin: 0 0 4px 0;
  }

  .RoomService-actions {
    display: flex;
    justify-content: space-around;
  }

  .btn-main, .btn-secondary {
    width: 16vw;
    height: 40px;
	  font-size: 14px;
  }

  .btn-main i, .btn-secondary i {
    margin: 0 0 0 4px;
  }

  /* SCROLLBAR */

  ::-webkit-scrollbar {
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-gray_light);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray);
    border-radius: 1px;
    transition: .2s;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-dark);
  }
</style>