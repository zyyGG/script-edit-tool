<template>
  <div class="container">
    <Role />
    <!-- <ChoosePerson /> -->
    <!-- <Main /> -->
    <!-- <Tool /> -->
  </div>
</template>
<script lang="ts" setup>
import ChoosePerson from "./components/ChoosePerson.vue";
import Main from "./components/Main.vue";
import Tool from "./components/Tool.vue";
import Role from "./components/Role.vue";

</script>
<style lang="css">
* {
  margin: 0;
}

html {
  font-size: 62.5%;
  /* font-size: 70%; */
}


/* 整体样式 */
.container {
  display: flex;
  box-sizing: border-box;
  place-content: flex-start;
  place-items: flex-start;
  flex-wrap: wrap;
}

/* 添加一个新的 */
.addButton {
  cursor: pointer;
}
</style>
