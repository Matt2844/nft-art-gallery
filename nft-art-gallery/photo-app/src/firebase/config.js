import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAga0YGT5GpPzC7A6i0U7vMhtubMKHRwGQ",
  authDomain: "photo-app-31f03.firebaseapp.com",
  projectId: "photo-app-31f03",
  storageBucket: "photo-app-31f03.appspot.com",
  messagingSenderId: "797117767974",
  appId: "1:797117767974:web:e90d8438ed1dd4048be1e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export { projectFirestore, projectStorage, timestamp, auth };