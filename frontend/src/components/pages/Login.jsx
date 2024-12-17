import React, { useState } from "react";
import { auth } from "../../services/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "../GoogleButton";

function Login() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN FUNCTION (HELPS TO SIGN IN WITH EMAIL AND PASSWORD)
  const loginWithEmailPassword = async (e) => {
    e.preventDefault();

    if (username == "" || password == "") {
      toast.error("Please fill the username or password");
      return;
    }
    try {
      const data = await signInWithEmailAndPassword(auth, username, password);
      navigate("/home");
      console.log(data);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      if (errorCode === "auth/invalid-email") {
        toast.error("This email is invalid. Please log in.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  const provider = new GoogleAuthProvider();

  // LOGIN WITH GOOGLE
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        toast.error(errorMessage);
      });
  };

  return (
    <section className="bg-gray-1 py-20 lg:py-[120px] dark:bg-dark">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative flex flex-col gap-y-5 mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-8 text-center sm:px-12 md:px-[60px] dark:bg-dark-2">
              <div className="mb-5 text-center md:mb-5">
                <p className="mx-auto inline-block max-w-[160px] text-2xl text-white">
                  GitFlix
                </p>
              </div>
              <form onSubmit={loginWithEmailPassword}>
                <div className="mb-6">
                  <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-0">
                  <input
                    type="submit"
                    value="Login"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <GoogleButton onclickFunction={handleGoogleSignIn} />
              <div className="flex flex-col justify-center items-center">
                <a className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white">
                  Forget Password?
                </a>
                <div>
                  <span className="text-base text-body-color dark:text-dark-6 pr-1.5">
                    Not a member yet?
                  </span>
                  <Link to={"/signUp"} className="text-primary hover:underline">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
