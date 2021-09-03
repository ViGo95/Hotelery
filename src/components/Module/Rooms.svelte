<script>

  import { mock } from '../../stores/mock'

  import Carousel from "./Carousel.svelte";
  import Item from "./Item.svelte";

  let moduleMock = mock.modules.rooms

</script>

<div class="Rooms">

  <div class="Rooms-title">
    <h2 class="title"> { moduleMock.title } </h2>
    <h4 class="subtitle"> { moduleMock.desc } </h4>
  </div>

  <Carousel {moduleMock}/>
  <Item {moduleMock}/>

  <div class="Rooms-Item_conditions">
    <div class="condition">
      <p><i class="fas fa-bed"></i> Condition</p>
    </div>
    <div class="condition">
      <p><i class="fas fa-bed"></i> Condition</p>
    </div>
    <div class="condition">
      <p><i class="fas fa-bed"></i> Condition</p>
    </div>
    <div class="condition">
      <p><i class="fas fa-bed"></i> Condition</p>
    </div>
    <div class="condition">
      <p><i class="fas fa-bed"></i> Condition</p>
    </div>
    <div class="condition">
      <p><i class="fas fa-bed"></i> Condition</p>
    </div>
    <div class="condition">
      <p><i class="fas fa-bed"></i> Condition</p>
    </div>
    <div class="condition">
      <p><i class="fas fa-bed"></i> Condition</p>
    </div>
    <div class="condition">
      <p><i class="fas fa-bed"></i> Condition</p>
    </div>
  </div>

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

  .Rooms-Item_conditions {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(3, 1fr);
  }

  .condition {
    font-size: 14px;
  }

  .fa-bed {
    margin: 0 6px 0 0;
  }
</style>