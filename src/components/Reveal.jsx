/*
===================================
IMPORT FRAMER MOTION
===================================
*/
import { motion } from "framer-motion";

/*
===================================
REVEAL COMPONENT
===================================
*/

function Reveal({
  children,
  delay = 0,
  y = 60,
  duration = 0.8,
}) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: y,
        filter: "blur(10px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}

      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}
    >

      {children}

    </motion.div>
  );
}

/*
===================================
EXPORT COMPONENT
===================================
*/

export default Reveal;