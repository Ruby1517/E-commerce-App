import axios from "axios";
import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./userRedux"



export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch(err) {
        dispatch(loginFailure())
    }
}
