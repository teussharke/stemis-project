import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyqOLRxDhBEwSQ5VX0cBrHk-W0ATASopM",
  authDomain: "stemis-project-vue.firebaseapp.com",
  projectId: "stemis-project-vue",
  storageBucket: "stemis-project-vue.appspot.com",
  messagingSenderId: "503605205412",
  appId: "1:503605205412:web:a6ef31d4338dc021748931"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth} 