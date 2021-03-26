import React from 'react'
import Login from './LogIn';

export default function Heading (props) {

  return (
    <div className="heading">
      <h1>NFT Art Gallery</h1>
      <button>Contact</button><br />
      {props.isAdmin ? (
        <Login
          handleAuthChanged={props.handleAuthChanged}
          handleSignOut={props.handleSignOut}
        />
      ) : null}
    </div>
  )
}