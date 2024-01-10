import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBpGCrbEoNdMoqu1QcaJFYJ8UtNt9-WOKk",
  authDomain: "hotstar-clone-62f80.firebaseapp.com",
  projectId: "hotstar-clone-62f80",
  storageBucket: "hotstar-clone-62f80.appspot.com",
  messagingSenderId: "465283901541",
  appId: "1:465283901541:web:8ec29a39b1d3bb35bdbe8c",
  measurementId: "G-72TGYQVM34"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

