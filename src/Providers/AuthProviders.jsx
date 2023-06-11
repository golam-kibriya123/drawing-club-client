import {  createContext } from "react";
import { getAuth } from "firebase/auth"
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {



    // auth info
    const info = {

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;