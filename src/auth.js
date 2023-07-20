import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhHEyvRrZvGaxuwtsW4vYcina_ODiZM3E",
  authDomain: "codeforest-37f40.firebaseapp.com",
  projectId: "codeforest-37f40",
  storageBucket: "codeforest-37f40.appspot.com",
  messagingSenderId: "1031984378723",
  appId: "1:1031984378723:web:8112bcf6bd325308ab9956",
  measurementId: "G-H3NW3LFM6V",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
// init autentication
const auth = getAuth();

// Sign Up Controls
const signupForm = document.querySelector(".signup");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(cred.user);
      signupForm.reset();
      signupMoodle.classList.add("hide");
    })
    .catch((e) => console.log(e));
});

// Logout Controls
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("user loged out");
    })
    .catch((e) => console.log(e));
});

// Login Controls
const loginForm = document.querySelector(".login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(cred.user);
      loginForm.reset();
      loginMoodle.classList.add("hide");
    })
    .catch((e) => {
      console.log(e);
      loginForm.reset();
    });
});


// Tracking Autentication Changes
const treeDisplay = document.querySelector('.forest-land-container');
const clockDisplay = document.querySelector('.timer-area');
const loggedOutDisplay = document.querySelector('.loggedout-display');
onAuthStateChanged(auth, (user)=>{
  if(user){
    treeDisplay.classList.remove('hide');
    clockDisplay.classList.remove('hide');
    logoutButton.classList.remove('hide');
    loggedOutDisplay.classList.add('hide');
    signupButton.classList.add('hide');
    loginButton.classList.add('hide');
    
  }
  else{
    
    treeDisplay.classList.add('hide');
    logoutButton.classList.add('hide');
    signupButton.classList.remove('hide');
    loginButton.classList.remove('hide');
    clockDisplay.classList.add('hide');
    loggedOutDisplay.classList.remove('hide');

  }

})

