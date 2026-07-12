
import axios from 'axios'
import React,  { useEffect } from 'react'
export default function Cart() {
  const getItems = async ()=>{
    const response = await axios.get(`${import.meta.env.VITE_BURL }/Carts`);
    console.log(response);
  }
  useEffect(  ()=>{
    getItems();
  } , [] )
  return (
    <div>Cart</div>
  )
}
