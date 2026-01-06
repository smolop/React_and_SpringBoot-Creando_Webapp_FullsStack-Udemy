import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import {
  onLogin,
  onLogout,
  onInitLogin,
} from "../../store/slices/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAdmin, isAuth } = useSelector((state) => state.auth);
  // const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  // const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();

  const handlerLogin = async ({ username, password }) => {
    try {
      dispatch(onInitLogin());
      const loginResponse = await loginUser({ username, password });
      const token = loginResponse.data.token;
      console.log("TOKEN: " + token);
      const claims = JSON.parse(window.atob(token.split(".")[1]));
      console.log(claims);
      // const user = { username: "admin" };
      const user = { username: claims.username };
      dispatch(onLogin({ user: user, isAdmin: claims.isAdmin }));

      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          isAdmin: claims.isAdmin,
          user: user,
        })
      );
      sessionStorage.setItem("token", `Bearer ${token}`);
      navigate("/users");
    } catch (error) {
      dispatch(onLogout());
      if (error.response?.status == 401) {
        Swal.fire("Login Error", "Invalid credentials", "error");
      } else if (error.response?.status == 403) {
        Swal.fire("Login Error", "It doesn't have permissions", "error");
      } else {
        throw error;
      }
    }
  };

  const handlerLogout = () => {
    dispatch(onLogout());
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("login");
    sessionStorage.clear();
  };

  return {
    login: {
      user,
      isAdmin,
      isAuth,
    },
    handlerLogin,
    handlerLogout,
  };
};
