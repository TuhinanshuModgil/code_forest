import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBhHEyvRrZvGaxuwtsW4vYcina_ODiZM3E",
    authDomain: "codeforest-37f40.firebaseapp.com",
    projectId: "codeforest-37f40",
    storageBucket: "codeforest-37f40.appspot.com",
    messagingSenderId: "1031984378723",
    appId: "1:1031984378723:web:8112bcf6bd325308ab9956",
    measurementId: "G-H3NW3LFM6V"
  };

// init firebase app
initializeApp(firebaseConfig);


// init services
//init autentication  
const auth = getAuth();

const signupForm = document.querySelector('.signup');
