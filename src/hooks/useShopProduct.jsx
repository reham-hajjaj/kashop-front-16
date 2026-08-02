
import {useQuery} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.jsx";

import i18n from "../i18next.jsx";

export default function useShopProduct(filter) {
  
  const getItems = async () => {
            const response = await authAxiosInstance.get(`/Products`,{
                params:filter,
            });

            
 return response.data;
 
        };
    
    
  return  useQuery({
 queryKey:["products",i18n.language,filter ],
    queryFn:getItems,
    staleTime:1000 * 60 * 5,
  } );
}
