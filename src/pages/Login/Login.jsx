/*eslint-disable */
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import LoginWithSocial from "./LoginWithSocial/LoginWithSocial";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError]=useState('');


  // input from user 
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorForMsg = errorMessage.split(":");
        setError(errorForMsg[1]);
        
      });
  };
  return (
    <>
      <div className="text-center mb-10">
        <p className="text-red-500 mt-10">{error}</p>
        <h3 className="font-bold text-3xl mt-6">Please Login</h3>
        <form action="" className="mt-12" onSubmit={handleLogin}>
          <div className="">
            <label htmlFor="" className="font-bold">
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered input-primary w-full max-w-xs mt-3"
              name="email"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="font-bold">
              Password
            </label>
            <br />
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered input-primary w-full max-w-xs mt-3"
              name="password"
            />
          </div>
          <button
            className="btn btn-active btn-primary w-full max-w-xs mt-6"
            type="submit"
          >
            Submit
          </button>
          <p className="mt-6 mb-6">
            Dont have an Account?
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          </p>
        </form>
        <LoginWithSocial></LoginWithSocial>
      </div>
    </>
  );
};

export default Login;
