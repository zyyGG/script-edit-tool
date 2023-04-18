import { reactive, readonly } from "vue";

interface stateIF {
  personCheckId: number;
}

// 创建数据
const State: stateIF = {
  personCheckId: 0,
};

// 创建动态State
function createState(state: stateIF) {
  return reactive(state);
}

// 创建修改方法
function updatePersonCheckId(state: stateIF) {
  return (value: number) => {
    state.personCheckId = value;
  };
}

// 创建Action
function createAction(state: stateIF) {
  return {
    updatePersonCheckId: updatePersonCheckId(state),
  };
}

export const useStore = () => {
  const store = {
    state: readonly(createState(State)),
    action: readonly(createAction(State)),
  };
  return store;
};
