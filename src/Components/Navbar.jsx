import { AuthSliceActions } from "../store/index";

import { useSelector, useDispatch } from "react-redux";
function Navbar() {
  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });
  let dispatch = useDispatch();
  let logout = () => {
    dispatch(AuthSliceActions.logout());
  };

  return (
    <nav>
      <h1>Redux Counter</h1>
      {isLogin && (
        <ul>
          <li>My Records</li>
          <li>Profile</li>
          <li>
            <button onClick={logout}>log out</button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
