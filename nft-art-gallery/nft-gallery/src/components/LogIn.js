import React, { useState } from "react";
import { signInWithGoogle } from "../firebase/config";



export default function Login () {

  return (
    <div className="login-buttons">
      <button className="login-provider-button" onClick={signInWithGoogle}>
        <span>Log In</span>
      </button>
    </div>
  );
}