<template>
  <div class="container">
    <li class="col title">角色</li>
    <!-- 内容展示区域 -->
    <li class="col item action">A</li>
    <li class="col item">B</li>
    <li class="col item">C</li>
    <li class="col item">D</li>
    <li class="col add">Add</li>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="css" scoped>
.container {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column; 
  place-content: flex-start;
  /* border-right: 2px solid #4e4e4e; */
  margin-right: 0.3rem;
  min-height: 100vh;
  background-color: #282828;
  text-align: center;
}
.title {
  border-bottom: 0.1rem solid #eeeeee;
}
.col {
  padding: 0.5rem 1.5rem;
  cursor: default;
}
.item {
  margin-block: 0.2rem;
  cursor: pointer;
}
.action {
  border-left: 0.2rem solid #5e5e5e;
}
</style>
