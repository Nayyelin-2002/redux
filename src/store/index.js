// import { createStoreHook } from "react-redux";

// const counterReducer = (state = { counter: 0 }, action) => {
//   return state;
// };
// const store = createStoreHook(counterReducer);
// export default store;
import { createStore } from "redux";
let initial = { counter: 0, isshow: true };
const counterReducer = (state = initial, action) => {
  if (action.type === "Increase") {
    return {
      ...initial,
      counter: state.counter + 1,
    };
  }
  if (action.type === "Decrease") {
    return {
      ...initial,
      counter: state.counter - 1,
    };
  }
  if (action.type === "hi") {
    return {
      ...initial,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "togg") {
    return {
      ...initial,
      isshow: !state.isshow,
    };
  }
  return state;
};
const store = createStore(counterReducer);

export default store;

// import { createStore } from "redux";

// const counterReducer = (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1 };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;
