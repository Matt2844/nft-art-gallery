import React, { useState } from "react";


export default function Login (props) {

  return (
    <div className="login-buttons">
      <button className="login-provider-button" onClick={props.handleAuthChanged}>
        <span>Admin Log In</span>
      </button>
      <br />
      <button className="login-provider-button" onClick={props.handleSignOut}>
        <span>Admin Log Out</span>
      </button>
    </div>
  );
}