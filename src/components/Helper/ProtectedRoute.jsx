import React, {useContext} from 'react'
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from './../../contexts/AuthContext';

const ProtectedRoute = ({ children, ...props }) => {
    let {user} = useContext(AuthContext);
 
    return (
        <Route
         {...props}
      render={props =>
        user ?  children  : <Redirect to="/" {...props} />
      }
    />
    )
}

export default ProtectedRoute
