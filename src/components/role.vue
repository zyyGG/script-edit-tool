<template>
  <div class="container">
    <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita hic dolorem, dolore vitae, qui facere
      placeat omnis eius distinctio iusto, quae officia quidem cumque. Inventore soluta voluptatibus aut. Neque.</p> -->
    <Input type="text" value="Hello" />
  </div>
</template>
<script lang="ts" setup>
import Input from './Input.vue';

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