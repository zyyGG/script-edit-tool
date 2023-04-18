<template>
  <div class="container">
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
          <td class="addButton" colspan="1" @click="addNewPerson">
            添加新人物
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
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
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import Input from "./components/Input.vue";

const personList = reactive([
  { name: "破布袍神秘人", state: true, isEditor: false },
  { name: "墨兰", state: false, isEditor: false },
  { name: "盾甲城城主", state: false, isEditor: false },
]);
// 当前被选中的用户id
const personCheckId = ref(0);

// 剧本树
const date = reactive([
  {
    person: "破布袍神秘人",
    description: "拿起了桌子上的烛台",
    location: "沉眠王座",
    time: "14:26",
  },
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
function editorName(event: any, index: number) {}
// 编辑角色
function changePerson(value: string, index: number) {
  personList[index].name = value;
  personList[index].isEditor = false;
}
// 添加新角色
function addNewPerson() {
  personList.push({ name: "路人甲", state: false, isEditor: false });
}
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
