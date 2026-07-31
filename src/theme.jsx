import { createTheme } from "@mui/material/styles";
const getTheme=(mode)=>{
    return createTheme({
    spacing:4,
    palette:{
          mode: mode,
       
    },
typography:{
    h2:{
        fontSize:'3rem'
    }
}
});
}
export default getTheme;
