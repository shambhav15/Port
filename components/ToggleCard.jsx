"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@app/redux/store";
import Link from "next/link";

const Toggle = () => {
  const dispatch = useDispatch();
  const toggleValue = useSelector((state) => state.toggle);

  const handleToggle = () => {
    dispatch(toggle());
    console.log(toggleValue.toString());
  };

  return (
    <div className="flex relative ">
      <div className="flex">
        <button 
        className="text-white font-bold p-3 bg-gray-200 rounded-lg"
        onClick={handleToggle}>
          <i className="ri-menu-line text-black"></i>
          
          
        </button>
        {toggleValue && (
          <div className="absolute border-2 border-black right-0 top-full mt-3 w-full p-5 rounded-md text-black bg-gray-200 min-w-[220px] flex flex-col gap-3 justify-end items-end">
            <div>
              toggle
            </div>
            <Link href="/" className="dropdown_link">
              Home
            </Link>
            <Link href="/Ui" className="dropdown_link">
              UI
            </Link>
            <Link href="/Contact" className="dropdown_link">
              Contacts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toggle;
