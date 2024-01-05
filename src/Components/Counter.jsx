import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
    dispatch({ type: "Increase" });
  };
  let decrease = () => {
    dispatch({ type: "Decrease" });
  };
  let aa = () => {
    dispatch({ type: "hi", amount: 5 });
  };
  let tog = () => {
    dispatch({ type: "togg" });
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
