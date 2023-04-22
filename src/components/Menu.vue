<!-- 右键菜单 -->
<template>
  <div
    ref="menu"
    class="container"
    :style="{
      left: position.x + 'px',
      top: position.y + 'px',
    }"
  >
    <!-- 通用菜单 -->
    <div>
      <span>复制</span>
      <span>粘贴</span>
    </div>
    <!-- 角色栏的菜单 -->
    <div v-show="props.info.targetType === 'role'">
      <hr />
      <span>更换</span>
    </div>
    <!-- 描述栏的菜单 -->
    <div v-show="props.info.targetType === 'behavior'">
      <hr />
      <span>更换</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from "vue";

const props = defineProps(["info"]);
// const emits = defineEmits(["getSize"]);
const menu = ref();
const position = reactive({
  x: 0,
  y: 0,
});

onMounted(() => {
  position.x = computed(() => {
    return props.info.x > window.innerWidth - menu.value.clientWidth
      ? props.info.x - menu.value.clientWidth
      : props.info.x;
  }).value;
  position.y = computed(() => {
    return props.info.y > window.innerHeight - menu.value.clientHeight
      ? props.info.y - menu.value.clientHeight
      : props.info.y;
  }).value;
});
</script>
<style lang="css" scoped>
.container {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #eeeeee;
  min-width: 5rem;
  min-height: 5rem;
  font-size: 1.2rem;
  color: black;
  cursor: pointer;

  padding-block: 0.5rem;
  border-radius: 0.5rem;
}

span {
  padding: 0.5rem 1.5rem;
  min-width: 10rem;
  display: block;
  text-align: center;
}
span:hover {
  background-color: rgb(45, 45, 45);
  color: white;
}
</style>
