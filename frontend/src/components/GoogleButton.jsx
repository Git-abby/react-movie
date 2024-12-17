import React from "react";
import '../css/GoogleButton.css'

function GoogleButton({onclickFunction}) {
  return (
    <button type="button" onClick={onclickFunction} className="login-with-google-btn">
      Sign in with Google
    </button>
  );
}

export default GoogleButton;
