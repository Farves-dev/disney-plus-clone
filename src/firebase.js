import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDo_97KVMPGflvUulfk9ine-KBnJS1DKwk",
  authDomain: "disney-clone-2e201.firebaseapp.com",
  projectId: "disney-clone-2e201",
  storageBucket: "disney-clone-2e201.appspot.com",
  messagingSenderId: "758990415316",
  appId: "1:758990415316:web:5639fa7d18c8d184902241",
  measurementId: "G-YS16G05VYW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
