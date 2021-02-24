import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyBHckupuNr2BG2ygR1GvQx3uFUuvRiI7TI",
  authDomain: "netflix-839c9.firebaseapp.com",
  projectId: "netflix-839c9",
  storageBucket: "netflix-839c9.appspot.com",
  messagingSenderId: "752203217850",
  appId: "1:752203217850:web:45a6c4b89216f9e4b1fb83",
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase)

export { firebase };
