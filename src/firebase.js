import firebase from "firebase";
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB99NWmElNMVxEEDKcT174XejQqIDrRcmk",
  authDomain: "messenger-95916.firebaseapp.com",
  projectId: "messenger-95916",
  storageBucket: "messenger-95916.appspot.com",
  messagingSenderId: "843164802980",
  appId: "1:843164802980:web:9af425e04f58432881eb31"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
