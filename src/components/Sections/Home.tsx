import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative"
    >
      <div className="text-center z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight"
        >
          Welcome to my portfolio!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.6 }}
          className="text-gray-400 text-lg mb-8 max-w-lg mx-auto"
        >
         My name is Anas  I’m a front-end developer who loves crafting clean, scalable web
          applications. My goal is to build solutions that offer both
          exceptional performance and a delightful user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: false, amount: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded font-medium relative overflow-hidden 
             transition-all duration-150 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-bold transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
  
    </section>
  );
};

export default Home;
