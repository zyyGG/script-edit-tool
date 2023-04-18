import { reactive, readonly } from "vue";

export interface stateIF {
  personCheckId: number;
  personList: Array<personListIF>;
}

interface personListIF {
  name: string;
  state: boolean;
  isEditor: boolean;
}

// 创建数据
const State: stateIF = {
  personCheckId: 0,
  personList: [
    { name: "破布袍神秘人", state: true, isEditor: false },
    { name: "墨兰", state: false, isEditor: false },
    { name: "盾甲城城主", state: false, isEditor: false },
  ],
};

// 创建修改方法
function updatePersonCheckId(state: stateIF) {
  return (value: number) => {
    state.personCheckId = value;
  };
}
// 创建动态State
function createState(state: stateIF) {
  return reactive(state);
}
// 创建Action
function createAction(state: stateIF) {
  return {
    updatePersonCheckId: updatePersonCheckId(state),
  };
}

export const useStore = () => {
  const store = {
    state: createState(State),
    action: readonly(createAction(State)),
  };
  return store;
};
