<script>

  import { mock } from '../../stores/mock'

  import Carousel from "./Carousel.svelte";
  import Item from "./Item.svelte";

  let moduleMock = mock.modules.rooms
  let moduleName = 'room'

</script>

<div class="Rooms">

  <div class="Rooms-title">
    <h2 class="title"> { moduleMock.title } </h2>
    <h4 class="subtitle"> { moduleMock.desc } </h4>
  </div>

  <Carousel {moduleMock}/>
  <Item {moduleName}/>

</div>

<style>
  .Rooms {
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
</style>