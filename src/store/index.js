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
const initialauthState = { isLogin: false };
let AuthSlice = createSlice({
  name: "login",
  initialState: initialauthState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

//reducer
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: AuthSlice.reducer,
  },
});
export default store;
export let counterSliceActions = counterSlice.actions;
export let AuthSliceActions = AuthSlice.actions;
