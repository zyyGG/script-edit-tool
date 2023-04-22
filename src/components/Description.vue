<template>
  <div class="container">
    <div class="grid title">
      <span>人物</span>
      <span>行为</span>
      <span>场景</span>
      <span>时间</span>
    </div>

    <div class="grid" v-for="item in store.state.date">
      <span date-type="role">{{ item.role }}</span>
      <span date-type="behavior">{{ item.behavior }}</span>
      <span date-type="stage">{{ item.stage }}</span>
      <span date-type="time">{{ item.time }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "../store";
const store = useStore();
</script>
<style lang="css" scoped>
.container {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr 1fr;
  /* border: 1px solid #dddddd; */
  /* border-top: 0; */
}

span {
  display: block;
  overflow-wrap: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1.5rem;
}
span:not(:nth-of-type(2)) {
  text-align: center;
}
</style>
