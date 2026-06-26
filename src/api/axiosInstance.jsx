import axios from "axios";
const axiosInnstance =axios. create({
    baseURL:'${import.meta.env.VITE_BURL}',
    headers:{
        "Accept-Language":en
    }

});
export default axiosInnstance;