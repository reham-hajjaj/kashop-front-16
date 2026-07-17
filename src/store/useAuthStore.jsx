import React from 'react'
import {create } from "zustand";
const useAuthStore = create((set)=>({
    token:localStorage .getItem('accessToken'),
    setToken:(newToken)=>{
       set({
        token:newToken
       }); 
},
logout:()=>{
    set({
        token:null
    })

localStorage.removeIteam('accessToken');
}


})) ;
export default useAuthStore;

  

  



