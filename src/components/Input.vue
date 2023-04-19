<template>
  <div :class="props.type">
    <span class="front" v-show="props.isDescription">{{ front }}</span>
    <div class="input" ref="input" contenteditable="true" @blur="emit('handleEndInput', input.innerHTML)"
      @keydown.enter="emit('handleEndInput', input.innerHTML)">
      {{ value }}
    </div>
    <!-- <span class="after">{{ after }}</span> -->
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps(["type", "value", "isDescription"]);
const emit = defineEmits(["handleEndInput"]);
const input = ref();
const value = ref("");



const front = computed(() => {
  if (props.type === "action") return "\["
  else if (props.type === "narrator") return "\{"
  else return ""
})
// const after = computed(() => {
//   if (props.type === "action") return "\]"
//   else if (props.type === "narrator") return "\}"
//   else return ""
// })

onMounted(() => {
  value.value = props.value;
  console.log(input.value.attr)
});
</script>
<style lang="css" scoped>
.input {

  display: inline-block;
  border-right: 3px solid transparent;
  /* width: inherit; */
  min-width: 10rem;
  background-color: transparent;
}

.input:focus-visible {
  outline: none;
}

.front {
  margin-right: 5rem;
}

/* .input::before {
  content: attr(data-before);
  margin-right: 5rem;
} */

/* .input::after {
  content: attr(data-after);
  margin-left: 5rem;
} */

.action {
  color: orange;
}

.narrator {
  color: yellow;
}
</style>
