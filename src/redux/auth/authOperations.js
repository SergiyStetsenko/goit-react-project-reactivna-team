import axios from "axios";
import { loginError, loginRequest, loginSuccess, registerError, registerRequest, registerSuccess } from "./authActions";

export const registerOperation = (user, history) => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post(`https://slimmom-backend.herokuapp.com/auth/register`, user);

    dispatch(registerSuccess(data));
    history.push("/login");
  } catch (error) {
    console.dir(error);
    dispatch(registerError(error.response.data?.error?.message));
  }
};
export const loginOperation = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post(`https://slimmom-backend.herokuapp.com/auth/login`, user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data?.error?.message));
  }
};
