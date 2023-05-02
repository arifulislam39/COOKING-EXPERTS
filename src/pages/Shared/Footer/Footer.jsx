import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white w-full h-52 ">
      <div className="flex gap-64 justify-center">
        <div className="mt-10">
          <h3 className="font-bold">Explore:</h3>
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
        </div>
        <div className="mt-10">
          <h3 className="font-bold">Visit Us:</h3>
          <p>CA United States</p>
        </div>
        <div className="mt-10">
          <h3 className="font-bold">Follow Us:</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Linkedin</p>
        </div>
        <div className="mt-10">
          <h3 className="font-bold">Legal:</h3>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
