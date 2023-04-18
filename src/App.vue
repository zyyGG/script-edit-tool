<template>
  <div class="container">
    <ChoosePerson />
    <Main />
  </div>
</template>
<script lang="ts" setup>
import ChoosePerson from "./components/ChoosePerson.vue";
import Main from "./components/Main.vue";


// 测试用例
function test() {
  console.log("test");
}
</script>
<style lang="css">
* {
  margin: 0;
}

html {
  font-size: 62.5%;
}

td {
  padding: 1rem 1.3rem;
}

/* 整体样式 */
.container {
  display: flex;
  box-sizing: border-box;
  place-content: flex-start;
  place-items: flex-start;
  flex-wrap: wrap;
  /* outline: 5px solid red; */
}

/* 人物选取 */
.personChoose {
  margin-right: 5rem;
}

/* 每一个人物 */
.personCol {
  border-right: 3px solid #555555;
  cursor: pointer;
  transition: all 0.3s;
}

.personCheck {
  border-right-color: white;
}

/* 添加一个新的 */
.addButton {
  cursor: pointer;
  border-radius: 1rem;
  transition: all 0.3s;
}

.addButton:hover {
  /* background-color: #3e3e3e; */
  /* border-bottom: 1px solid rgba(161, 161, 161, 0.2); */
  text-decoration: white underline;
}
</style>
