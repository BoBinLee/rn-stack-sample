import { types } from "mobx-state-tree";

import TodoStore from "./TodoStore";
import SwapiStore from "./SwapiStore";
import Navigator from "./Navigator";

const RootStore = types.model("RootStore", {
  todoStore: types.optional(TodoStore, {}),
  swapiStore: types.optional(SwapiStore, {}),
  navigator: types.optional(Navigator, {})
}).actions(self => {
  const sendError = () => {
    throw new Error("Hello World");
  };

  return {
    sendError
  }
});

export type IRootStore = typeof RootStore.Type;
export interface IStores {
  store: IRootStore;
}

export default RootStore;
