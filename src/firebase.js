// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmt0178W2-zwvY2txY5PcET-cGI4KFI3I",
  authDomain: "todolist-crud-bbd52.firebaseapp.com",
  projectId: "todolist-crud-bbd52",
  storageBucket: "todolist-crud-bbd52.appspot.com",
  messagingSenderId: "956939351034",
  appId: "1:956939351034:web:065adbca4cf3cf8fb36a43",
  measurementId: "G-ZENS6QVN6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db};