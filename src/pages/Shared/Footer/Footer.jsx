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
  );
};

export default Footer;
