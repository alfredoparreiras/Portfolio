import { motion } from "framer-motion";



const WebHome = () => {


    const containerVariants = {
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

    const introductionVariants = {
      initial: {
        y: "30vh",
        transition: {
          duration: 0.5,
          ease: [0.37, 0, 0.63, 1],
        },
      },
      open: {
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0, 0.55, 0.45, 1],
        },
      },
    };

  return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="open"
        className="md:flex px-12 flex-col justify-center leading-[5rem] text-left text-7xl lg:w-2/3 xsm:hidden "
      >
        <div className="overflow-hidden"><motion.p variants={introductionVariants}>Hi, there!</motion.p></div>
        <div className="overflow-hidden">
          <motion.p variants={introductionVariants} className="mt-5">
            {" "}
            I'm Alfredo, a{" "}
            <span className="text-accentColor dark:text-darkAccentColor">
              Software Developer
            </span>
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p variants={introductionVariants} className="mt-5">
            {" "}
            Dedicated about{" "}
            <span className="text-accentColor dark:text-darkAccentColor">
              solving problems
            </span>{" "}
            through{" "}
            <span className="text-accentColor dark:text-darkAccentColor">
              code
            </span>
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p variants={introductionVariants} className="mt-5">
            {" "}
            I'm currently based in{" "}
            <span className="text-accentColor dark:text-darkAccentColor">
              Montreal
            </span>
          </motion.p>
        </div>
      </motion.div>
  );
};

export default WebHome;
