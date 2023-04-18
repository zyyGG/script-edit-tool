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
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in date" :key="index">
        <td>{{ item.person }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.time }}</td>
      </tr>
      <tr>
        <td class="addButton" :colspan="4">添加</td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";

// 剧本树
const date = reactive([
  {
    person: "破布袍神秘人",
    description: "拿起了桌子上的烛台",
    location: "沉眠王座",
    time: "14:26",
  },
]);
</script>
<style lang="css"></style>
