
import {useQuery} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.jsx";
import useAuthStore from "../store/useAuthStore.jsx";
import i18n from "../i18next.jsx";

export default function useCart() {
   const token = useAuthStore.getState().token;
   console.log(token);

   
  const getItems = async()=>{
            const response = await authAxiosInstance.get(`/Carts`,{
              headers:{
                Authorization:`Bearer ${token}`
              },
            } );

    return response.data;
        };
    
   
    
  return  useQuery({
 queryKey:["cart",i18n.language],
    queryFn:getItems,
    staleTime:1000 * 60 * 5,
  } );
}
