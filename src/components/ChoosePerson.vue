<template>
  <!-- 人物选取 -->
  <table class="personChoose">
    <thead>
      <tr>
        <td colspan="2">人物表</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) of store.state.personList" :key="index">
        <!-- 显示框 -->
        <td
          v-show="!item.isEditor"
          class="personCol"
          :class="{ personCheck: item.state }"
          @click="chooseNewPerson(index)"
          @dblclick="item.isEditor = true"
        >
          {{ item.name }}
        </td>
        <!-- 输入框 -->
        <td v-show="item.isEditor">
          <Input
            type="text"
            @handleEndInput="(value) => changePerson(value, index)"
            :value="item.name"
          />
        </td>
      </tr>
      <tr>
        <!-- 添加一个新的人物 -->
        <td class="addButton" colspan="1" @click="addNewPerson">添加新人物</td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import Input from "./Input.vue";
import { useStore } from "../store";
let store = useStore();

// 角色表

// 选择新的角色
function chooseNewPerson(index: number) {
  // 把旧的设置成false
  store.state.personCheckId !== -1 &&
    (store.state.personList[store.state.personCheckId].state = false);
  // 把新的设置成true
  if (store.state.personCheckId !== index) {
    store.state.personList[index].state = true;
    store.state.personCheckId = index;
  } else {
    store.state.personCheckId = -1;
  }
}
// 编辑角色
function changePerson(value: string, index: number) {
  store.state.personList[index].name = value;
  store.state.personList[index].isEditor = false;
}
// 添加新角色
function addNewPerson() {
  store.state.personList.push({
    name: "路人甲",
    state: false,
    isEditor: false,
  });
}
</script>
<style lang="css"></style>
