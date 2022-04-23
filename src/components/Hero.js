import React from "react";
import image from "../assets/Shuttle.png";

function Hero() {
  return (
    <div>
      <img
        src={image}
        alt="Shuttle Hero with tagline"
        className="max-w-full h-auto lg:w-screen lg:h-96 lg:object-cover"
      />
    </div>
  );
}

export default Hero;
