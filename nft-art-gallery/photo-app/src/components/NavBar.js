import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';



export default function ButtonAppBar () {
  const [userLoggedIn, setUserLoggedIn] = useState('');

  let LoggedInUser = ''

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserLoggedIn(true);
      LoggedInUser = user
    } else {
      setUserLoggedIn(false);
    }
  })

  const handleSignOut = () => {
    firebase.auth().signOut();
  }

  return (
    <div>
      <div className="nav-right">
        <a href={'/gallery'}><Button>Gallery</Button></a>
        <a href={'/photographers'}><Button>Photographers</Button></a>
        <a>
          {userLoggedIn ? (
            <Button onClick={handleSignOut}>Logout</Button>
          ) : null}
        </a>
      </div>
    </div >
  );
}