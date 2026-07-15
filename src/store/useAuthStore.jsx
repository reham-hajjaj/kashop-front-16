import React from 'react'
import {create } from "zustand";
const useAuthStore = create((set)=>({
    token:localStorage .getIteam('accessToken'),
    setToken:(newToken)=>{
       cessToken',newToken); 
},
logout:()=>{
    set({
        token:null
    })

localStorage.removeIteam('accessToken');
}


})) ;
export default useAuthStore;

  

  



