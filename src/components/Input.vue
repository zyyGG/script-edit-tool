<template>
  <div
    class="input"
    ref="input"
    contenteditable="true"
    @blur="emit('handleEndInput', input.innerHTML)"
    @keydown.enter="emit('handleEndInput', input.innerHTML)"
  >
    {{ value }}
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps(["type", "value"]);
const emit = defineEmits(["handleEndInput"]);
const input = ref();
const value = ref("");

onMounted(() => {
  value.value = props.value;
});
</script>
<style lang="css" scoped>
.input {
  border-right: 3px solid transparent;
  width: inherit;
  background-color: transparent;
}

.input:focus-visible {
  outline: none;
}
</style>
