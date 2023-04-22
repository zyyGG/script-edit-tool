<template>
  <Transition>
    <Menu :info="rightInfo" v-if="rightInfo.isShow" />
  </Transition>

  <Description />
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive } from "vue";
import Description from "./components/Description.vue";
import Menu from "./components/Menu.vue";
// 测试
import { test } from "./test";

const rightInfo = reactive({
  x: 0,
  y: 0,
  isShow: false,
  targetType: "",
});

onMounted(() => {
  test();
  // 右键事件
  document.body.addEventListener("pointerdown", (e: any) => {
    rightInfo.isShow = false;
  });
  document.body.addEventListener("pointerup", (e: any) => {
    if (e.button == 2) {
      console.log("右键");
      rightInfo.targetType = e.target.attributes["date-type"]
        ? e.target.attributes["date-type"].value
        : undefined;
      rightInfo.x = e.x;
      rightInfo.y = e.y;
      rightInfo.isShow = true;
    }
  });
});
</script>
<style lang="css" scoped>
/* 整体样式 */
/* 进入动画 */
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
