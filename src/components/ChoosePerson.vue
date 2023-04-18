<template>
  <!-- 人物选取 -->
  <table class="personChoose">
    <thead>
      <tr>
        <td colspan="2">人物表</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) of personList" :key="index">
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

// 当前被选中的角色id
const personCheckId = ref(0);

// 角色表
const personList = reactive([
  { name: "破布袍神秘人", state: true, isEditor: false },
  { name: "墨兰", state: false, isEditor: false },
  { name: "盾甲城城主", state: false, isEditor: false },
]);

// 选择新的角色
function chooseNewPerson(index: number) {
  // 把旧的设置成false
  personCheckId.value !== -1 && (personList[personCheckId.value].state = false);
  // 把新的设置成true
  if (personCheckId.value !== index) {
    personList[index].state = true;
    personCheckId.value = index;
  } else {
    personCheckId.value = -1;
  }
}
// 编辑角色
function changePerson(value: string, index: number) {
  personList[index].name = value;
  personList[index].isEditor = false;
}
// 添加新角色
function addNewPerson() {
  personList.push({ name: "路人甲", state: false, isEditor: false });
}
</script>
<style lang="css"></style>
