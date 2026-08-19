import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";
const getTheme=(mode)=>{
    const isDark = mode ==="dark";
    return createTheme({
    spacing:4,
    palette:{
          mode: mode,
        
       
    },
    background:{
        default:isDark ? "#0B0F14":"#FFFFFF",Paper: isDark ? "#121923":"#f8F9FA",

    },
    primary:{
min:"#FF9800"
    },
typography:{
    h2:{
        fontSize:'3rem'
    }
}
});
}
export default getTheme;
