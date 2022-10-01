// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjdydKiN0EJKSm-c_1TS4xOrcVaWc10I8",
  authDomain: "disneyplus-clone-702ea.firebaseapp.com",
  projectId: "disneyplus-clone-702ea",
  storageBucket: "disneyplus-clone-702ea.appspot.com",
  messagingSenderId: "683529114292",
  appId: "1:683529114292:web:60b763cb254682004c3de1",
  measurementId: "G-TL2Z3XFGGS",
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
