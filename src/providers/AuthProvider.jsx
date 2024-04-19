import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";

 export const AuthContext = createContext(null);

 const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = ()=>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('user in auth is changed', currentUser);
            setUser(currentUser);
        });

        return ()=> unSubscribe();

    },[])

        const authInfo={
            user,
            createUser,
            signIn,
            logout,
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.propTypes={
    children : PropTypes.node.isRequired,
}

export default AuthProvider;