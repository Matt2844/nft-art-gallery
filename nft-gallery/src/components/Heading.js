import React, { useState } from 'react'
import Login from './LogIn';
import Contact from './Contact';

export default function Heading (props) {
  const [contactForm, setShowContactForm] = useState(false);

  return (
    <div>
      <div className="heading">
        <h1>NFT Art Gallery</h1>
        <a href='https://www.patreon.com/nft_art_gallery' target='_blank' rel='noopener noreferrer'>
          <button>Donate To Gallery</button>
        </a>
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