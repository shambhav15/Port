"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Expandable = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-2/3 flex justify-center relative">
      <motion.div
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        layout
        onClick={() => setOpen(!open)}
        className="bg-gray-400 cursor-pointer p-5 rounded-2xl "
      >
        <motion.h2 
        className="text-2xl text-slate-900 font-semibold"
        layout="position">Framer Motion</motion.h2>
        {open && (
          <motion.div
          className="text-left" 
          initial={{ opacity: 0.5 }} 
          animate={{ opacity: 1 }}
          transition={{duration: 0.5}}
          >
            <p className="pt-2 leading-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              distinctio consequatur autem nobis, commodi eligendi? Ex sint
              maxime sunt quidem?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, voluptatum.
            </p>
            <button className="p-3 bg-gray-700 text-white rounded-xl mt-5">
              Submit
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Expandable;
