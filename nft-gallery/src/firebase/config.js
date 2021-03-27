import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "nft-art-gallery-76015.firebaseapp.com",
  projectId: "nft-art-gallery-76015",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "311846347382",
  appId: "1:311846347382:web:b86e23910e87d7a6467557",
  measurementId: "G-9R96CFNZN9"
};

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
    return res.user.email
  }).catch((error) => {
    console.log(error.message)
  })
}


export { projectFirestore, projectStorage, timestamp, auth, signInWithGoogle }