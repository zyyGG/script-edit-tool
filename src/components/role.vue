<!-- 页面顶部的角色选择区域 -->
<template>
  <div class="container">
    <!-- 单个输入框 -->
    <Input @handle-end-input="changeText" disabled />
    <Button value="增加" />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import Input from "./Input.vue";
import Button from "./Button.vue";

const text = ref("hello");

const props = defineProps();
const emits = defineEmits();

function changeText(value: string) {
  text.value = value;
}
</script>
<style lang="css" scoped>
.container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  font-size: 2rem;
  text-align: left;
}
</style>
