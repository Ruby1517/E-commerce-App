import axios from "axios";

let BASE_URL = "http://localhost:5000/api/"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

export const publicRequest = axios.create({
    baseUrl: BASE_URL,
    
});




export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});
