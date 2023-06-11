import { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email and password

    const createUserWithMailAndPass = (email, pass) => {
        setLoading(true);
        return createUserWithMailAndPass(auth, email, pass)
    };
    // login with email and pass
    const loginEmailAndPass = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }


    // auth info
    const info = {
        auth,
        loading,
        createUserWithMailAndPass,
        loginEmailAndPass
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;