import React, { useState } from 'react'
import './App.css';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Heading from './components/Heading';
import firebase from 'firebase';
import { signInWithGoogle } from './firebase/config';
import ReactGA from 'react-ga';

function App () {
  const [userLoggedIn, setUserLoggedIn] = useState('');
  const [admin, setAdmin] = useState(false);

  function initializeReactGA () {
    ReactGA.initialize('UA-123791717-1');
    ReactGA.pageview('/');
  }

  initializeReactGA();

  const handleAuthChanged = () => {
    signInWithGoogle()
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.email === process.env.REACT_APP_ADMIN) {
        setUserLoggedIn(true)
      } else {
        setUserLoggedIn('');
      }
    }
  })

  const handleSignOut = () => {
    firebase.auth().signOut()
    setUserLoggedIn('')
    setAdmin(false)
  }

  document.addEventListener("keypress", function onPress (event) {
    if (event.key === "l" && event.ctrlKey) {
      setAdmin(true)
    }
  });

  return (
    <div className="App">
      <Heading
        handleAuthChanged={handleAuthChanged}
        handleSignOut={handleSignOut}
        isAdmin={admin}
      />
      {userLoggedIn ? (
        <UploadForm />
      ) : null}
      <ImageGrid />
    </div>
  );
}

export default App;
