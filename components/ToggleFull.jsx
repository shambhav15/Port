"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavbarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full justify-center items-center ">
      <header className={`bg-gray-100 items-center rounded-md ${isOpen ? "" : ""}`}>
        <button className="text-black font-bold p-2" onClick={toggleNavbar}>
          Toggle Navbar
        </button>
      </header>
      <div
        className={`fixed top-0 right-0 h-screen w-2/6 bg-white shadow-lg transform duration-500 ease-in-out z-10 ${
          isOpen ? "border-l-2 border-gray-500 translate-x-0 backdrop-blur-sm" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-10 space-y-5 text-xl font-semibold tracking-wider">
          <button 
          className="fixed top-3 right-10"
          onClick={toggleNavbar}>Close</button>
          <div className="p-2">Toggle</div>
          <Link href='/' className="p-2">Home</Link>
          <Link href='/Ui' className="p-2">Ui</Link>
          <Link href='/Contact' className="p-2">Contacts</Link>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed  top-5 right-5 h-full z-10 "
          onClick={toggleNavbar}
        >
         
        </div>
        
      )}
    </div>
  );
};

export default NavbarToggle;
