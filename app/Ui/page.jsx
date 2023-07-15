"use client";
import Link from "next/link";
import ToggleCard from "@components/ToggleCard";
import { Provider } from "react-redux";
import store from "../redux/store";
import ToggleFull from "@components/ToggleFull";
import Search from "@components/Search";
import Alert from "@components/Alert";
import Expandable from "@components/Expandable";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen gap-20 p-10 ">
        <div className="bg-zinc-900  rounded-md">
          <div className="flex h-full">
            <div className="w-full flex-col flex items-center justify-center space-y-5 ">
              <h1 className="text-2xl text-white font-semibold">Full Toggle</h1>
              <ToggleFull />
            </div>

            <div className="w-full flex-col flex items-center justify-center  space-y-5 ">
              <h1 className="text-2xl text-yellow-500 font-semibold">Floating Toggle</h1>
              <Provider store={store}>
                <ToggleCard />
              </Provider>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-md text-center  text-xl p-5 flex items-center justify-center">
          <div className="w-full flex flex-col  items-center justify-center space-y-3 text-white">
         <h1 className="font-semibold text-2xl mb-2">Search for any Country name or its States</h1>
         <Search />
          </div>
        </div>
        <div className="bg-zinc-900 text-white text-center rounded-md  ">
          <Alert />
        </div>
        <div className="bg-zinc-900 flex justify-center items-center rounded-md p-5 "><Expandable /></div>
      </div>
    </>
  );
};

export default page;
