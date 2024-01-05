import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterSliceActions } from "../store/index";
function Counter() {
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  const isshow = useSelector((state) => {
    return state.isshow;
  });

  //funcs
  let increase = () => {
    dispatch(counterSliceActions.increase());
  };
  let decrease = () => {
    dispatch(counterSliceActions.decrease());
  };
  let aa = () => {
    dispatch(counterSliceActions.aa(6));
  };
  let tog = () => {
    dispatch(counterSliceActions.tog());
  };
  return (
    <section>
      <h3>Redux Counter</h3>
      {isshow && <h1>{counter}</h1>}
      <hr />
      <div className="btns">
        <button onClick={increase}>Increase</button>
        <button onClick={aa}>IncreaseBy5</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={tog}>Show and hide</button>
      </div>
    </section>
  );
}

export default Counter;
