import { createTheme } from "@mui/material/styles";

 const theme = createTheme({
    palette:{
         mode: 'dark',
        primary:{
            main:'#9c27b0',
            
        }
    },
typography:{
    h2:{
        fontSize:'3rem'
    }
}
});
export default theme