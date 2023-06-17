import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email and password

    const createUserWithMailAndPass = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass)
    };
    // login with email and pass
    const loginEmailAndPass = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    };
    // log out
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                console.log(error)
            })
    }

    // login with google
    const googleAuthProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider)
    };

    // authStateChange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // get and set token/jwt
            if (currentUser) {
                axios.post('https://draing-club-server.vercel.app:5000/jwt', {
                    email: currentUser?.email
                })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return () => {
            return unSubscribe();
        }
    }, []);
    // auth info
    const info = {
        auth,
        loading,
        createUserWithMailAndPass,
        loginEmailAndPass,
        googleLogin,
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;