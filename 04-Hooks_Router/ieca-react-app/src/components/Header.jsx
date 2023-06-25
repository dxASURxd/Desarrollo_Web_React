import React from "react";
import Logo from "../logo.svg"

const Header = () => {
  return (
    <main className="flex justify-center mb-10">
      <h1 className="font-black text-5xl">
        Desarrollo web con React - IECA
      </h1>
      <img src={Logo} className="w-[80px]" id="App-logo" />
    </main>
  );
};

export default Header;
