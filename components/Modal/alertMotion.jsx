import { motion } from "framer-motion";
import Backdrop from "../Backdrop/page";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 10,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-3/6 h-3/6 lg:w-2/6 lg:h-2/6 p-2 flex flex-col items-center justify-end  bg-gray-900  border-white border rounded-xl"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className=" flex flex-col justify-center items-center h-full text-white object-fill ">
          <p className="p-4 m-2 flex object-fill ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, non?</p>
          <button
            className="p-2 bg-orange-500 w-2/4 flex justify-center text-black rounded-lg"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;

// className="w-2/6 h-2/6 p-2 flex flex-col items-center"
