import axios from "axios";
import { 
    loginStart, 
    loginSuccess, 
    loginFailure 
} from "./userRedux";

import { 
    getProductStart, 
    getProductSuccess, 
    getProductFailure, 
    deleteProductStart, 
    deleteProductSuccess, 
    deleteProductFailure, 
    updateProductSuccess,
    updateProductStart,
    updateProductFailure,
    addProductSuccess,
    addProductStart,
    addProductFailure,
} from "./ProductRedux";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Nzk5ZjQwNTA5Yzc5NjE3M2Y5Y2Q0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcxNTY5NiwiZXhwIjoxNjg4OTc0ODk2fQ.YBRYe2xsM7eYHYZqmbkuDLqatFXOVSIRYOyBD6ZewOA"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login", user)
        console.log(res.data)
        dispatch(loginSuccess(res.data))
    } catch(err) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await axios.get("http://localhost:5000/api/products")
        dispatch(getProductSuccess(res.data))
    } catch(err) {
        dispatch(getProductFailure())
    }
}
export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await axios.delete(`http://localhost:5000/api/products/${id}`, {token:`Bearer ${TOKEN}`})
        dispatch(deleteProductSuccess(res.data))
    } catch(err) {
        dispatch(deleteProductFailure())
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // const res = await axios.post(`http://localhost:5000/api/products`, {product}, {token:`Bearer ${TOKEN}`})
        dispatch(updateProductSuccess({id, product}))
    } catch(err) {
        dispatch(updateProductFailure())
    }
};

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await axios.post(`http://localhost:5000/api/products`, {product}, {token:`Bearer ${TOKEN}`});
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };