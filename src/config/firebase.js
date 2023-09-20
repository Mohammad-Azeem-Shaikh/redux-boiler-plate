import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCCzwk9M6rE6hwaZ7KED5fSdW7o9KJlMHY",
    authDomain: "react-chat-app-f04a6.firebaseapp.com",
    projectId: "react-chat-app-f04a6",
    storageBucket: "react-chat-app-f04a6.appspot.com",
    messagingSenderId: "65004590892",
    appId: "1:65004590892:web:23a67ffaed3476655b3e89",
    measurementId: "G-VXBDX8ZDYF"
  };
  
  // Initialize Firebase
  export default initializeApp(firebaseConfig);