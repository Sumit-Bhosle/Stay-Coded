import { motion } from "framer-motion";
import { fadeInRight } from "@/app/data/variants";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-black border-t border-neutral-600 text-neutral-100 text-center py-6 "
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Sumit Bhosle. All rights reserved.{" "}
        {/*Replace with your actual name*/}
      </p>
    </motion.footer>
  );
};

export default Footer;
