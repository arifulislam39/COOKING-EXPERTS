import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="font-bold text-3xl mt-6">Please Login</h3>
        <form action="" className="mt-12">
          <div className="">
            <label htmlFor="" className="font-bold">
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered input-primary w-full max-w-xs mt-3"
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
