"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AlertMotion from "@components/Modal/alertMotion";

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="flex flex-col items-center justify-center p-2 space-y-5 h-full">
      <h1 className="text-2xl font-semibold">Alert or Modal</h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ bounce: true }}
        duration={{ duration: 300 }}
        className="p-2 bg-orange-300  text-black rounded-lg"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>

      {modalOpen && <AlertMotion modalOpen={modalOpen} handleClose={close} />}
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        wait={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <AlertMotion modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default page;
