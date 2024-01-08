import { useState } from "react";
import "./teste.css";
import { Link } from "react-router-dom";
import MobileNavLink from "./MobileNavLink";
import { AnimatePresence, motion } from "framer-motion";
import transition from "@/Transition";

const routes = [
  {
    title: "Home", href: "/" 
  },
  {
    title: "What I Did", href: "/whatidid"
  },
  {
    title: "Who Am I", href: "/whoami"
  },
  {
    title: "How to find me", href: "/howtofindme"
  },
];

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        delay: 0.5, 
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const contactVariations = {
    initial: {
      y: "-30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        delay:1, 
        duration: 0.5,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <header
      className={`w-full sticky top-0 flex items-center justify-between md:hidden`}
    >
      <Link to={"/"}>
        {" "}
        <p className="font-JetBrains text-lg font-semibold">{"{ AScode }"}</p>
      </Link>
      <nav>
        <p onClick={toggleMenu} className="">
          Menu
        </p>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="initial"
            className="fixed left-0 top-0 w-full h-screen origin-top p-8 bg-accentColor text-offwhite"
          >
            <div className="flex flex-col">
              <div className="flex justify-between">
                <Link to={"/"}>
                  {" "}
                  <p className="font-JetBrains text-base font-semibold">
                    {"{ AScode }"}
                  </p>
                </Link>
                <p
                  className="cursor-pointer text-md text-offwhite"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="exit"
              className="flex flex-col items-center mt-10 text-5xl gap-4"
            >
              {routes.map((link, index) => {
                return (
                  <div className="overflow-hidden mt-2" key={index}>
                    <MobileNavLink title={link.title} href={link.href} />
                  </div>
                );
              })}
            </motion.div>
            <motion.div
              variants={contactVariations}
              initial="initial"
              animate="open"
              className="absolute bottom-10 left-0 right-0"
            >
              <motion.div className="flex justify-center">
                <a
                  href="mailto:a.alfredops@gmail.com"
                  className="text-sm text-offwhite text-center"
                >
                  a.alfredops@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderMobile;
