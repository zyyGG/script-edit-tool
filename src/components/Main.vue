<template>
  <!-- 主区域 -->
  <table>
    <caption>
      剧本
    </caption>
    <thead>
      <tr>
        <th>人物</th>
        <th>描述</th>
        <th>地点</th>
        <th>时间</th>
        <th>快捷操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in date" :key="index">
        <!-- npc选择,单击进入编辑,双击快速选择 -->
        <td @dblclick="item.person.isEditor = true">
          <span v-show="!item.person.isEditor">{{ item.person.date }}</span>
          <!-- 输入框 -->
          <Input
            v-show="item.person.isEditor"
            :value="item.person.date"
            @handle-end-input="
              (value) => {
                [item.person.date, item.person.isEditor] = [value, false];
              }
            "
          />
        </td>
        <!-- 编辑框 -->
        <td>{{ item.description }}</td>
        <!-- 地点框 -->
        <td>{{ item.location }}</td>
        <!-- 时间轴 -->
        <td>{{ item.time }}</td>
        <td>Del</td>
      </tr>
      <tr>
        <td class="addButton" :colspan="4" @click="addNewDescription">添加</td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import Input from "./Input.vue";
import { useStore } from "../store";
const store = useStore();

// 剧本树
const date = reactive([
  {
    person: { date: "破布袍神秘人", isEditor: false },
    description: "拿起了桌子上的烛台",
    location: "沉眠王座",
    time: "14:26",
  },
]);

function addNewDescription() {
  date.push({
    person: {
      date:
        (store.state.personList[store.state.personCheckId] &&
          store.state.personList[store.state.personCheckId].name) ||
        "",
      isEditor: false,
    },
    description: "",
    location: date[date.length - 1].location,
    time: "",
  });
}

function test(item: any) {
  console.log(item.person);
}
</script>
<style lang="css"></style>
