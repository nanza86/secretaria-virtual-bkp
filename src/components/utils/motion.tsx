import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";

export const Motion = chakra(motion.div);
export const ContentMotion = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -10,
  },
};
export const ItemMotion = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    y: -10,
  },
};
