"use client";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import ToggleCard from "@components/ToggleCard";
import { Provider } from "react-redux";
import store from "../app/redux/store";

const Nav = () => {
  return (
    <>
      <nav className="flex px-10 text-3xl w-full justify-around items-center h-16 text-white">
        <Link className="" href="/">
          Personal Ui's
        </Link>
        <div className=" flex items-center p-2">
          <ul className=" hidden md:block space-x-4 ">
            <Link
              href="/Ui"
              className="text-gray-400 tracking-wider  hover:duration-500 hover:text-white duration-500 ease-in-out hover:scale-110 rounded-md text-2xl "
            >
              ui
            </Link>

            <Link
              href="/Contact"
              className="text-gray-400 tracking-wider  hover:duration-500 hover:text-white duration-500 ease-in-out hover:scale-110 p-3 rounded-md text-2xl  "
            >
              contact
            </Link>
           
          </ul>
          <Link
              href="/Ui"
              className="text-gray-400 tracking-wider p-3 hover:duration-500 hover:text-white duration-500 ease-in-out hover:scale-110 rounded-md flex text-2xl "
            >
              toggle
            </Link>
        </div>
        {/* Moblie notification */}

        <div className="sm:hidden">
          <Provider store={store}>
            <ToggleCard />
          </Provider>
        </div>
      </nav>
    </>
  );
};

export default Nav;
