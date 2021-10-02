import React,{useContext} from 'react'
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from './../../contexts/AuthContext';

const PublicRoute = ({ children, ...props }) => {
    let { user }=useContext(AuthContext)
    return (
        <Route
         {...props}
      render={(props) =>
        user ? <Redirect to="/chats" {...props} />:children 
      }
    />
    )
}

export default PublicRoute
