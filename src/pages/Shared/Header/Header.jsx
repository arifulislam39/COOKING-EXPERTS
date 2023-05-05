import React from "react";
import GoogleFontLoader from "react-google-font-loader";

import banner2 from "../../../assets/banner2.jpeg";

const Header = () => {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Abril Fatface",
            weights: [400, 700],
          },
          {
            font: "Lobster",
            weights: [400, 700],
          }
        ]}
      />
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src={banner2}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 style={{ fontFamily: 'Abril Fatface' }} className="tracking-tight text-6xl">
              LETS <span className="font-bold">COOK</span>
            </h2>
            <h3 className="font-bold">
              by
              <span className="text-2xl font-bold tracking-tight sm:text-2xl" style={{ fontFamily:'Lobster' }}>
                {" "}
                Cooking Experts
              </span>
            </h3>
            <p className="mt-6 text-lg leading-8 font-serif font-bold">
              Trying different flavors and <br /> kinds of food are no short of
              adventure <br /> and i wish you the same adventure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
