import { reactive, readonly } from "vue";

export interface stateIF {
  personCheckId: number;
  personList: Array<personListIF>;
  descriptionList: Array<descriptionIF>;
  chooseType: string;
  chooseLine: number;
  mainDate: Array<mainDateIF>;
  dateCount: number;
}

interface personListIF {
  name: string;
  state: boolean;
  isEditor: boolean;
}

interface descriptionIF {
  type: string;
  show: string;
}

interface mainDateIF {
  id: number;
  person: string;
  description: string;
  location: string;
  time: string;
  type: string;
}

// 创建数据
const State: stateIF = {
  dateCount: 1,
  personCheckId: 0,
  personList: [
    { name: "破布袍神秘人", state: true, isEditor: false },
    { name: "墨兰", state: false, isEditor: false },
    { name: "盾甲城城主", state: false, isEditor: false },
  ],
  chooseType: "person",
  chooseLine: 0,
  descriptionList: [
    { type: "action", show: "人物动作" },
    { type: "speak", show: "人物发言" },
    { type: "narrator", show: "人物旁白" },
  ],
  mainDate: [
    {
      id: 0,
      person: "破布袍神秘人",
      description: "拿起了桌子上的烛台",
      location: "沉眠王座",
      time: "14:26",
      type: "action",
    },
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
