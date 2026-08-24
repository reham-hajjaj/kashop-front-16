
import { createTheme } from "@mui/material/styles";
const getTheme=(mode)=>{
    const isDark = mode ==="dark";
    return createTheme({
    spacing:4,
    palette:{
          mode: mode,
       background: {
        // Dark Mode
        default: isDark ? "#07090D" : "#FAFAFA",
        paper: isDark ? "#11151C" : "#FFFFFF",
      },
       text: {
        primary: isDark ? "#F8FAFC" : "#14213D",
        secondary: isDark ? "#A7B0BD" : "#64748B",
      },
      
    },
   MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            textTransform: "none",
            fontWeight: 700,
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 10,

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: isDark
                ? "#303846"
                : "#DFE4EA",
            },
           
          },
        },
      },
      
    primary:{
main:"#FF6B00"
    },

    
   
typography:{
    h2:{
        fontSize:'3rem'
    }
}

});
}
export default getTheme;
