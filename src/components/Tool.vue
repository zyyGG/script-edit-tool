<template>
  <div class="tool">
    <!-- 描述框辅助工具 -->
    <table v-show="store.state.chooseType === 'description'">
      <caption>描述工具</caption>
      <tr v-for="(item, index) of store.state.descriptionList" :key="index">
        <td @click="changeDescriptionType(item.type)">{{ item.show }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue"
import { useStore } from "../store";
const store = useStore()

// 修改人物行为
function changeDescriptionType(type: string) {
  // 把人物的描述修改成对应的行为格式
  store.state.mainDate[store.state.chooseLine].type = type
}
</script>
<style lang="css" scoped>
.tool {
  margin-left: 5rem;
}

table {
  border-collapse: collapse;
}

td {
  padding: 1rem 1.5rem;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2)
}
</style>