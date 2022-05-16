/*

Keep all the auth logic limited to this file
share all the auth and user data available from this file

1. Create a login function
2. Create a logout function
3. Create a signup function


*/
import '../../firebase'
import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext();

export function useAuth() { return useContext(AuthContext)};

export function AuthProvider({children}) {

    const auth = getAuth();
    
    const [currentUser, setCurrentUser] = useState({...auth.currentUser});
    const [loading, setLoading] = useState(false);

    //adding event listener for user state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser({
                ...user
            })
        })

    }, [auth])

    //creating new user
    async function signUp(email, password, username){
    
        await createUserWithEmailAndPassword(auth, email, password)
    
        await updateProfile(auth.currentUser, {
            displayName: username
        })

        const user = auth.currentUser;
    
        setCurrentUser({
            ...user
        })
    }

    //login existing user
    async function logIn(email, password) {
        
        try{

            await signInWithEmailAndPassword(auth, email, password);
            return false;
        
        }catch(error){
            return true;
        }
    }   

    //user logout
    function logOut() {
        signOut(auth)
    }

    return (
        <AuthContext.Provider value={{
            currentUser,
            loading,
            signUp,
            logOut,
            logIn

        }}>
            {children}
        </AuthContext.Provider>
    )

}


