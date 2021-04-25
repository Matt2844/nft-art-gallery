import React, { useState } from 'react'
import Login from './LogIn';
import Contact from './Contact';

export default function Heading (props) {
  const [contactForm, setShowContactForm] = useState(false);
  const [about, setShowAbout] = useState(false);

  return (
    <div>
      <div className="heading">
        <h1>NFT Art Gallery</h1>
        {!about ? (
          <button onClick={() => setShowAbout(true)}>About</button>
        ) : (
            <button onClick={() => setShowAbout(false)}>Hide About Text</button>
          )}
        {about ? (
          <p>globalnftarts.com is an NFT Art Gallery that is updated regularly. Showcased are hand picked, high quality NFT's. NFT marketplaces are exceptional for buying and selling, yet they provide a poor viewing experience for those who simply want to gaze at the art itself. Similarly to a physical art gallery, this gallery aims to provide users with a distraction free, easy to view experience. </p>
        ) : null}
        <br />
        {!contactForm ? (
          <button onClick={() => setShowContactForm(true)}>Contact</button>
        ) : (
            <button onClick={() => setShowContactForm(false)}>Hide Contact Form</button>
          )}
        {props.isAdmin ? (
          <Login
            handleAuthChanged={props.handleAuthChanged}
            handleSignOut={props.handleSignOut}
          />
        ) : null}
      </div>
      {contactForm ? (
        <Contact />
      ) : null}
    </div>
  )
}