import{ createContext} from "react";


export const UserContext = createContext();

const UserContextprovider =({children})=>{
    const userName"reham";
   return<UserContex.tprovider value={userName}>
    {children}
    </UserContext.provider>
}
export default UserContextprovider;