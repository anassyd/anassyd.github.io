import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <footer className="mx-auto">
        <div className="section-container py-3 flex justify-around text-sm text-blue-300 ">
          <div>© 2025 Portfolio. All rights reserved</div>
          <div className="flex space-x-2 divide-black divide-x">
            <span>Privacy Policy Terms of Service</span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
