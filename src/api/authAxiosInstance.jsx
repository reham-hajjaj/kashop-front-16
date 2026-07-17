import React from 'react'
import axios from 'axios';
import useAuthStore from '../store/useAuthStore.jsx'; 

const token =useAuthStore.getState().token;
console.log(token);
const authAxiosInstance =axios.create({
    baseURL:`${import.meta.env.VITE_BURL }`,
    headers:{
        "Accept-Language":"en",
        "Authorization":`Bearer ${token}`,
    }
});


export default authAxiosInstance;
