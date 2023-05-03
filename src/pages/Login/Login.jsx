import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const Navigate= useNavigate();
    const handleLogin =event =>{
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(password, email);
        signIn(email, password)
    .then(result => {

        const loggedUser =result.user;
        console.log(loggedUser)
        Navigate('/')

    })
    .catch(error =>{
        console.log(error)
    })
    }
  return (
    <>
      <div className="text-center">
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
              className="input input-bordered input-primary w-full max-w-xs mt-3" name='email'
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
              className="input input-bordered input-primary w-full max-w-xs mt-3" name="password"
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
            <Link to="/register" className="font-bold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
