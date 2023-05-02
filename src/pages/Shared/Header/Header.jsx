import React from "react";
import banner from "../../../assets/banner.jpg";

const Header = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img 
        src={banner}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" 
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Work with us
          </h2>
          <p className="mt-6 text-lg leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        </div>
      </div>
    // <div>
    //     <img src={banner} alt="" className="w-16 md:w-32 lg:w-48"  style={{width:'100%', height:"30rem" }}/>
    // </div>
  );
};

export default Header;
