<script>

  import { mock } from '../../stores/mock'

  import Carousel from "./Carousel.svelte";
  import Item from "./Item.svelte";

  let roomServiceMock = mock.roomService
  let moduleName = 'roomService'

</script>

<div class="RoomService">

  <div class="RoomService-title">
    <h2 class="title"> { roomServiceMock.title } </h2>
    <h4 class="subtitle"> { roomServiceMock.desc } </h4>
  </div>

  <Carousel {moduleName}/>
  <Item {moduleName}/>

  <button class="btn-secondary">Lista de  pedidos <i class="fas fa-clipboard-list"></i></button>

</div>

<style>
  .RoomService {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;
  }

  .title {
    margin: 0 0 12px 16px;
  }

  .subtitle {
    color: var(--color-gray);
    font-weight: 400;
  }

  .btn-secondary {
    font-size: 14px;
    width: 100%;
    height: 40px;
  }
  .btn-secondary i {
    font-size: 14px;
    margin: 0 6px;
  }
</style>