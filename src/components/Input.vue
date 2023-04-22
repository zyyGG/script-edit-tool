<template>
  <div :class="props.type">
    <span class="front" v-show="props.isDescription">{{ front }}</span>
    <div
      class="input"
      ref="input"
      contenteditable="true"
      :class="type"
      @blur="emit('handleEndInput', input.innerHTML)"
      @keydown.enter="emit('handleEndInput', input.innerHTML)"
    >
      {{ value }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
// type 的种类 "default","round"
const props = defineProps({
  // 输入框种类
  type: {
    type: String,
    default: "default",
    validator(value) {
      const types = ["default", "round"];
      return typeof value === "string" && types.includes(value);
    },
  },
  // 具体值
  value: {
    type: String,
    default: "输入框",
  },
  isDescription: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["handleEndInput"]);
const input = ref();
const value = ref("");

const front = computed(() => {
  if (props.type === "action") return "\[";
  else if (props.type === "narrator") return "\{";
  else return "";
});
onMounted(() => {
  value.value = props.value;
  console.log(input.value.attr);
});
</script>
<style lang="css" scoped>
.input {
  display: inline-block;
  /* border-right: 3px solid transparent; */
  min-width: 10rem;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 1rem 2rem;
  outline: 0;
}

.input:focus-visible {
  border-color: #dddddd;
}

.front {
  margin-right: 5rem;
}

/* 按钮的种类 */
.round:focus-visible {
  border-radius: 1rem;
}
</style>
