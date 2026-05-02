import React from "react";
import logo from "@/assets/images/coinbase_logo.png";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-90 h-dvh w-full bg-gray-50 flex items-center justify-center">
      <div>
        <img src={logo} className="object-contain size-10 animate-pulse" />
      </div>
    </div>
  );
};

export default Loading;
