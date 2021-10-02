import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProtectedRoute from "./Helper/ProtectedRoute"
import AuthProvider from "../contexts/AuthContext"
import PublicRoute from "./Helper/PublicRoute"
 import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
     
      <Router>
       <AuthProvider>
          <Switch>
            <ProtectedRoute path="/chats" exact>
              <Chats />
           </ProtectedRoute>
            <PublicRoute path="/" exact>
              <Login />
            </PublicRoute>
          </Switch>
    </AuthProvider>
      </Router>
         
    </div>
  )
}

export default App
