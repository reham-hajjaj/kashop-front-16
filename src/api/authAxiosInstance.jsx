import axios from "axios";
import i18n from "../i18next";

const token =localStorage.getItem("accessToken");
console.log(token);
const authAxiosInstance = axios. create({
    baseURL:"https://knowledgeshop.runasp.net/api",
    headers:{ "Accept-Language": i18n.language, 
        
        "Authorization":`Bearer ${token}`,
    },

});
export default authAxiosInstance;