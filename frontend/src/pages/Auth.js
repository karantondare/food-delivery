import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../actions/authActions";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(userData, history));
    } else {
      dispatch(signin(userData, history));
    }
  };

  return (
    <section>
      <div className="mt-32 bg-grey-lighter flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
            <h1 className="mb-8 text-3xl text-center">
              {isSignup ? "Sign up" : "Sign In"}
            </h1>
            <form onSubmit={handleSubmit}>
              {isSignup && (
                <input
                  type="text"
                  className="block border border-yellow-500 w-full p-3 rounded mb-4"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                />
              )}
              <input
                type="text"
                className="block border border-yellow-500 w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="block border border-yellow-500 w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              {isSignup && (
                <input
                  type="password"
                  className="block border border-yellow-500 w-full p-3 rounded mb-4"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
              )}
              <button
                type="submit"
                className="mx-auto mt-4 py-1 px-6 rounded-full border-2 border-yellow-500 flex items-center font-bold text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out focus:outline-none"
              >
                {isSignup ? "Create Account" : "Log In"}
              </button>
            </form>
            {isSignup && (
              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the{" "}
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="/"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="/"
                >
                  Privacy Policy
                </a>
              </div>
            )}
          </div>

          <div className="text-grey-dark mt-6">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              className="border-b font-semibold text-lg focus:outline-none"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Log in" : "Sign Up"}.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Auth;
