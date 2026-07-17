import React from 'react'
import useAuthStore from './store/useAuthStore.jsx';
import {Navigate}from 'react-router-dom';
export default function ProtectedRouter({Children}) {
  const token = useAuthStore(state => state.token);
  if(!token){
    return <Navigate to='/login'/>
  }
  return  Children;
   
}

