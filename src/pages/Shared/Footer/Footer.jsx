import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-800 text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
        <a className="link link-hover">Cooking</a>
        <a className="link link-hover">Recipe</a>
        <a className="link link-hover">Food</a>
        <a className="link link-hover">Restaurants</a>
      </div>
      <div>
        <span className="footer-title">Find Us</span>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Tiktok</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </div>
    </footer>

    // <div className="bg-slate-800 text-white w-full h-52 ">
    //   <div className="flex gap-64 justify-center">
    //     <div className="mt-10">
    //       <h3 className="font-bold">Explore:</h3>
    //       <p>Home</p>
    //       <p>About</p>
    //       <p>Blog</p>
    //     </div>
    //     <div className="mt-10">
    //       <h3 className="font-bold">Visit Us:</h3>
    //       <p>CA United States</p>
    //     </div>
    //     <div className="mt-10">
    //       <h3 className="font-bold">Follow Us:</h3>
    //       <p>Instagram</p>
    //       <p>Facebook</p>
    //       <p>Linkedin</p>
    //     </div>
    //     <div className="mt-10">
    //       <h3 className="font-bold">Legal:</h3>
    //       <p>Terms</p>
    //       <p>Privacy</p>
    //     </div>
    //   </div>
    //   <p className="text-center text-gray-500 text-xs">
    //       &copy;2020 Acme Corp. All rights reserved.
    //     </p>
    // </div>
  );
};

export default Footer;
