import axios from "axios";
import { BASE_URL } from "./requests";

const http = axios.create({
    baseURL: BASE_URL
});

//Dependencia circular
//const token = window.localStorage.getItem('token');
const basic = window.localStorage.getItem('basic');
const verify = window.localStorage.getItem('verify');
if (basic) {
    //http.defaults.headers.common.Authorization = token ?? '';
    http.defaults.headers.common.Authorization = verify ?? '';
}

export default http;