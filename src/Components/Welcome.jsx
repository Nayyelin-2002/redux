import React from "react";
import { useDispatch } from "react-redux";
import { AuthSliceActions } from "../store/index";
function Welcome() {
  let dispatch = useDispatch();
  const login = () => {
    dispatch(AuthSliceActions.login());
  };
  return (
    <div>
      <button className="btns wel" onClick={login}>
        Log into redux
      </button>
    </div>
  );
}

export default Welcome;
