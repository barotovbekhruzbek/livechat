import *as firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyC0ifO0dymmfV4QnXd7419Gb-0d2_tIAmY",
    authDomain: "chatuzb-dad3d.firebaseapp.com",
    projectId: "chatuzb-dad3d",
    storageBucket: "chatuzb-dad3d.appspot.com",
    messagingSenderId: "170129387017",
    appId: "1:170129387017:web:32d6e219324fd9a0b2d2d8"
    
};


const db = firebase.initializeApp(config);
export default db;