
import {useQuery} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.jsx";
import useAuthStore from "../store/useAuthStore.jsx";
import i18n from "../i18next.jsx";

export default function useProfile() {
   const token = useAuthStore.getState().token;
   console.log(token);

   
  const getItems = async()=>{
            const response = await authAxiosInstance.get(`/Profile`,{
              headers:{
                Authorization:`Bearer ${token}`
              },
            } );
            console.log(response);
            
 return response.data;
 
        };
    
   
    
  return  useQuery({
 queryKey:["Profile",i18n.language],
    queryFn:getItems,
    staleTime:1000 * 60 * 5,
  } );
}
