import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const LoginWithSocial = () => {
  const { googleProvider, githubProvider } = useContext(AuthContext);
  const Auth = getAuth(app);

  const handleGoogleLogin = () => {
    signInWithPopup(Auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(Auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="mx-auto">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline btn-primary me-3"
      >
        Sign in With Google
      </button>

      <button onClick={handleGithubLogin} className="btn btn-outline">
        Sign in With GitHub
      </button>
    </div>
  );
};

export default LoginWithSocial;
