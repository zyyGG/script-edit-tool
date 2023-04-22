<template>
  <Description />
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import Description from "./components/Description.vue";
// 测试
import { test } from "./test";

onMounted(() => {
  test();
});
</script>
<style lang="css" scoped>
/* 整体样式 */
</style>
