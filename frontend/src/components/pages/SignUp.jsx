import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        toast.success("Succeessfully created account");

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          toast.error("This email is already in use. Please log in.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
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
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-5 text-center sm:px-12 md:px-[60px] dark:bg-dark-2">
              <div className="mb-1 text-center md:mb-5">
                <a className="mx-auto inline-block max-w-[160px] text-2xl text-white">
                  GitFlix
                </a>
              </div>
              <form onSubmit={signUpWithEmailAndPassword}>
                <div className="mb-6">
                  <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                  />
                </div>
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
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Login"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <div className="flex justify-center items-center">
                <span className="text-base text-body-color dark:text-dark-6 pr-1.5">
                  Already have an account?
                </span>
                <Link to={"/signin"} className="text-primary hover:underline">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
