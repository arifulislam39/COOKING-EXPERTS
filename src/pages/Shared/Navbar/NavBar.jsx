import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import GoogleFontLoader from "react-google-font-loader";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    <GoogleFontLoader
        fonts={[
          {
            font: "Lobster",
            weights: [400, 700],
          },
        ]}
      />

    <div>
      <div className="bg-slate-800 navbar">
        <div className="navbar-start">
          <h2 className="font-bold text-white	 text-4xl " style={{ fontFamily:'Lobster'}}>Cooking Experts</h2>
          </div>
          <div className="navbar-center flex gap-5 text-white">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            >
              Blog
            </NavLink>
          </div>

          <div className="navbar-end flex items-center gap-4">
            {user && (
                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <img className="w-16 rounded-full" src={user.photoURL} alt="" />
              </div>

            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-indigo-500 rounded-lg p-3 text-white"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-indigo-500 rounded-lg p-3 text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
