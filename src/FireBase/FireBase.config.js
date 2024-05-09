// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBOJej_6vzgMZLtzDjBQfVanIpOkGTK6UA",
  authDomain: "devjobs-57a9a.firebaseapp.com",
  projectId: "devjobs-57a9a",
  storageBucket: "devjobs-57a9a.appspot.com",
  messagingSenderId: "656773646808",
  appId: "1:656773646808:web:1e02f552e7b9a97733caad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;