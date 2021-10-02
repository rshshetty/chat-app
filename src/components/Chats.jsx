import React,{useContext,useState,useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { ChatEngine } from "react-chat-engine"

import firebase from './../firebase';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';


let Styles = {
  borderRadius: "100%",
  width: "2.5%",
  float: "right",
  position: "relative",
  right: "100px",
  top: "16px",
  
  
 
  
}


const Chats = ({history}) => {

  let { user }=useContext(AuthContext)
 
  const [loading, setloading] = useState(true);

  let handleLogout =async () => {
    await firebase.auth().signOut();
    history.push("/");
  }


  useEffect(() => {
   



    axios.get('https://api.chatengine.io/users/me/',{
      headers: {
        'project-id':process.env.REACT_APP_CHAT_ENGINE_ID,
        'user-name':user.email,
        'user-secret':user.uid,

      }
    }).then(() => {
      setloading(false)
    }).catch((e) => {
      let formdata = new FormData();
      formdata.append('email',user.email)
      formdata.append('username',user.email);
      formdata.append('secret',user.uid);

  
      
      
      axios.post('https://api.chatengine.io/users/',
        formdata,
        {headers:{"private-key":process.env.REACT_APP_CHAT_ENGINE_KEY}}
      )
      .then(()=>setloading(false))
.catch(e => console.log('e', e.response))

      })
  }, [user])
  
  if (!user || loading) return <div />
  
    return (
      <div className="chats-page">
        <div className="nav-bar">
          <div className="logo-tab">
            Messenger
          </div>
           <img  className="profilepic" style={Styles} src={user.photoURL} alt={user.displayName} />
          <div className="logout-tab" onClick={handleLogout}>
            Logout
          </div>

  
        </div>
        <ChatEngine height="calc(100vh-66px)"
          projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
          userName={user.email}
          userSecret={user.uid}
        />
        
      </div>
    )
}

export default withRouter(Chats);
