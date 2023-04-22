import { useStore } from "./store";
export function test() {
  const store = useStore();
  store.state.date = [
    {
      role: "A",
      behavior: "Hello",
      stage: "厨房",
      time: "00.00",
    },
  ];
}
