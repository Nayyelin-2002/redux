import { createSlice, configureStore } from "@reduxjs/toolkit";

let initialCounterState = { counter: 0, isshow: true }; //state a ny nk conponents c twr
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    aa(state, actions) {
      state.counter = state.counter + actions.payload;
    },
    tog(state) {
      state.isshow = !state.isshow;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
export let counterSliceActions = counterSlice.actions;
