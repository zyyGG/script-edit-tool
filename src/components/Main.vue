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
        <td>
          <!-- 输入框 -->
          <Input :value="item.person" @handle-end-input="(value) => (item.person = value)" />
        </td>
        <!-- 编辑框 -->
        <td>
          <Input :value="item.description" @handle-end-input="(value) => (item.description = value)" align="left" />
        </td>
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
    person: "破布袍神秘人",
    description: "拿起了桌子上的烛台",
    location: "沉眠王座",
    time: "14:26",
  },
]);

function addNewDescription() {
  date.push({
    person: (store.state.personList[store.state.personCheckId] && store.state.personList[store.state.personCheckId].name) || "",
    description: "",
    location: date[date.length - 1].location,
    time: "",
  });
}
</script>
<style lang="css" scoped>
table {
  border-collapse: collapse;
}

th {
  font-size: 1.5rem;
  font-weight: bold;
}

td,
th {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 1.3rem;
}
</style>
