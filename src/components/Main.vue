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
      <tr v-for="(item, index) in store.state.mainDate" :key="item.id">
        <!-- npc选择,单击进入编辑,双击快速选择 -->
        <td @click="changeType('person', index)">
          <!-- 输入框 -->
          <Input :value="item.person" @handle-end-input="(value) => (item.person = value)" />
        </td>
        <!-- 编辑框 -->
        <td @click="changeType('description', index)">
          <Input :value="item.description" @handle-end-input="(value) => (item.description = value)" align="left"
            :type="item.type" :isDescription="true" />
        </td>
        <!-- 地点框 -->
        <td @click="changeType('location', index)">
          {{ item.location }}
        </td>
        <!-- 时间轴 -->
        <td @click="changeType('time', index)">
          {{ item.time }}
        </td>
        <td class="button" @click="removeDate(index)">Del</td>
      </tr>
      <tr>
        <td class="addButton" :colspan="4" @click="addNewDescription">添加</td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</template>
<script lang="ts" setup>
import Input from "./Input.vue";
import { useStore } from "../store";
const store = useStore();

// 剧本树
function addNewDescription() {
  store.state.mainDate.push({
    id: store.state.dateCount++,
    person: (store.state.personList[store.state.personCheckId] && store.state.personList[store.state.personCheckId].name) || "",
    description: "",
    location: store.state.mainDate[store.state.mainDate.length - 1].location,
    time: "",
    type: store.state.mainDate[store.state.mainDate.length - 1].type
  });
}

function changeType(type: string, index: number) {
  store.state.chooseType = type
  store.state.chooseLine = index
}

function removeDate(index: number) {
  store.state.mainDate.splice(index, 1)
  // store.state.mainDate = store.state.mainDate.filter(fil => fil.id !== id)
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

.button {
  cursor: pointer;
}
</style>
