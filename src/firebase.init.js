// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA4gTopvNFBbDPnP6CQatCOIZhJ6UCFe8",
  authDomain: "refrigerator-world.firebaseapp.com",
  projectId: "refrigerator-world",
  storageBucket: "refrigerator-world.appspot.com",
  messagingSenderId: "114676530960",
  appId: "1:114676530960:web:ff7ffd2dc8a2ccada1af95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;