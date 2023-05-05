import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import LoginWithSocial from "./LoginWithSocial/LoginWithSocial";

const Register = () => {
  const { createUser, userProfile, userUpdate } = useContext(AuthContext);
  const Navigate = useNavigate();
  const [error, setError] = useState("");
  console.log(error);

  // input from user
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);
    if ((email, password)) {
      if (password.length < 6) {
        setError("Your password should be at least 6 characters long.");
        return;
      }

      // create user
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;

          userProfile(name, photo).then(() => {
            userUpdate(name, photo);
          });

          console.log(createdUser);

          Navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError("Email and password required");
      return;
    }
  };

  return (
    <div className="text-center mb-10">
      <h3 className="font-bold text-3xl mt-6">Please Register</h3>
      <form action="" className="mt-12" onSubmit={handleRegister}>
        <p className="text-red-600">{error}</p>
        <div className="">
          <label htmlFor="" className="font-bold">
            Name
          </label>
          <br />
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-primary w-full max-w-xs mt-3"
            name="name"
          />
        </div>

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
        <div className="mt-6">
          <label htmlFor="" className="font-bold">
            Photo URL
          </label>
          <br />
          <input
            type="photo"
            placeholder="Your Photo URL"
            className="input input-bordered input-primary w-full max-w-xs mt-3"
            name="photo"
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
          <Link to="/login" className="font-bold  text-blue-600">
            Login
          </Link>
        </p>
      </form>
      <LoginWithSocial></LoginWithSocial>
    </div>
  );
};

export default Register;
