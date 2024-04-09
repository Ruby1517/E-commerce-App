import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Nzk5ZjQwNTA5Yzc5NjE3M2Y5Y2Q0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcxNTY5NiwiZXhwIjoxNjg4OTc0ODk2fQ.YBRYe2xsM7eYHYZqmbkuDLqatFXOVSIRYOyBD6ZewOA"


export const publicRequest = axios.create({
    baseUrl: BASE_URL,
});


export const userRequest = axios.create({
    baseUrl: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});
