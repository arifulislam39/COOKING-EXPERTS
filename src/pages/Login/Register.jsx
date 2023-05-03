import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="font-bold text-3xl mt-6">Please Register</h3>
        <form action="" className="mt-12">
          <div className="">
            <label htmlFor="" className="font-bold">Name</label>
            <br />
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-primary w-full max-w-xs mt-3"
            />
          </div>
          <div className="">
            <label htmlFor="" className="font-bold">Email</label>
            <br />
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered input-primary w-full max-w-xs mt-3"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="font-bold">Password</label>
            <br />
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered input-primary w-full max-w-xs mt-3"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="font-bold">Photo URL</label>
            <br />
            <input
              type="photo"
              placeholder="Your Photo URL"
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
            Already have an Account? 
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
