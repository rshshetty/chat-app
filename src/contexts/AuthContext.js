//to manage user

import React, {createContext, useEffect,useState} from 'react'

import firebase from '../firebase'
import { withRouter } from 'react-router-dom'; 



export let AuthContext = createContext();


 let  AuthProvider = ({history, children }) => {
    let [loading, setloading] = useState(true);
    const [user, setUser] = useState(null);
     
  
    useEffect(() => {
            firebase.auth().onAuthStateChanged((user) => {
                setUser(user);
                setloading(false);
                if (user) {
                    history.push('/chats');
                } else {
                    history.push('/');
                }
        })
    }, [user,history])

     console.log(user);
     return <AuthContext.Provider value={{ user }}>{!loading && children}</AuthContext.Provider>;
}

export default withRouter(AuthProvider);
