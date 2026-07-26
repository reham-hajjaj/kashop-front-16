
import axios from 'axios'; 
import i18n from '../i18next';

const axiosInstance = axios.create({
    baseURL:`${"https://knowledgeshop.runasp.net/api"}`,
    headers:{
        "Accept-Language":i18n.language,
        
        
    }
});


export default axiosInstance;
