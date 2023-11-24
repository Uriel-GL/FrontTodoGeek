// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKPXC3kGaBXBXHw5mgdRpXd1KyrAeeYMU",
  authDomain: "resenaspwa.firebaseapp.com",
  databaseURL: "https://resenaspwa-default-rtdb.firebaseio.com",
  projectId: "resenaspwa",
  storageBucket: "resenaspwa.appspot.com",
  messagingSenderId: "1041047557999",
  appId: "1:1041047557999:web:9e47d199fde808951a3a9a",
  measurementId: "G-BKGJYB34B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);