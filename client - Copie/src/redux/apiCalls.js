import { loginFailure, loginStart, loginSuccess } from "./adminRedux";
import { publicRequest } from "../requestMethods";


export const login = async (dispatch, admin) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", admin);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};