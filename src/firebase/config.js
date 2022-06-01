
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5XRZyzMiiZEiR2fzozelohFtZJETn_Jo",
  authDomain: "tiendagundam-3f910.firebaseapp.com",
  projectId: "tiendagundam-3f910",
  storageBucket: "tiendagundam-3f910.appspot.com",
  messagingSenderId: "595503650372",
  appId: "1:595503650372:web:c58c5c1c8917049ec18e11"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}