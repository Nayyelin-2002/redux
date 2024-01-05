import React from "react";
import Counter from "./Components/Counter";
import Welcome from "./Components/Welcome";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => {
    return state.auth.isLogin;
  });
  return (
    <>
      <Navbar />
      {!auth && <Welcome />}
      {auth && <Counter />}
    </>
  );
}

export default App;
