import {create} from "zustand";
const useThemeStore =create((set)=>({
    mode:'dark',
    toggleMode:()=>{
        set((state)=>({
            mode:state.mode==="light"?'dark':'light'
        }))
    }
}))
export default useThemeStore;