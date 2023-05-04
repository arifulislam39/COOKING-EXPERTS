import React from "react";
import banner from "../../../assets/banner.jpg";
import banner2 from "../../../assets/banner2.jpeg"

const Header = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img 
        src={banner2}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" 
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl tracking-tight sm:text-6xl">
            LETS <span className="font-bold">COOK</span>
          </h2>
          <h3 className="font-bold">by<span className="text-2xl font-bold tracking-tight sm:text-2xl">  Cooking Experts</span></h3>
          <p className="mt-6 text-lg leading-8">
            Trying different flavors andd <br /> kinds of food are no short of adventure <br /> and i wish you the same adventure.
          </p>
        </div>
        </div>
      </div>
  );
};

export default Header;
