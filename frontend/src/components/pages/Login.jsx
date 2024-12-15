import React, { useState } from "react";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginWithEmailPassword = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(auth, username, password);
        navigate("/home")
      console.log(data);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error(errorMessage);
    }
  };
  //   console.log(username, password);
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
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px] dark:bg-dark-2">
              <div className="mb-10 text-center md:mb-16">
                <a className="mx-auto inline-block max-w-[160px] text-2xl text-white">
                  GitFlix
                </a>
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
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Login"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>

              <a className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white">
                Forget Password?
              </a>
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">Not a member yet?</span>
                <a className="text-primary hover:underline">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
