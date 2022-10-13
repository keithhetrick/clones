import firebase from "firebase";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDl91IxbrCvjV5pbF7pZTCkZ6LeByqo1-4",
  authDomain: "twitter-clone-3d2fd.firebaseapp.com",
  projectId: "twitter-clone-3d2fd",
  storageBucket: "twitter-clone-3d2fd.appspot.com",
  messagingSenderId: "177970081895",
  appId: "1:177970081895:web:7b26b2afe1d512d7c0e4c2",
  measurementId: "G-H31RTSSLYH",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics.isSupported(app);

const db = app.firestore();
export default db;

// firebase login

// firebase init

// firebase deploy
