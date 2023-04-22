<template>
  <button>
    {{ props.value }}
  </button>
</template>
<script lang="ts" setup>
const props = defineProps({
  // 值
  value: {
    type: String,
    default: "点击",
  },
});
const emits = defineEmits([]);
</script>
<style lang="css" scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  /* font-weight: 500; */
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  color: var(--default-font-color);
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  /* outline: 4px auto -webkit-focus-ring-color; */
  /* outline: 0; */
  /* outline: 1px auto white; */
}
</style>
