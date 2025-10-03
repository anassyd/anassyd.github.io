import { motion } from "framer-motion";
import { useEffect, useState } from "react";


interface LoadingScreenProps {
    onComplete: () => void;  
  }
const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {

    const [text,setText] = useState("")
    const fullText: string = "<Hello world/>";

    useEffect(() => {
      let index: number = 0;
      const intervel = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(intervel);

          setTimeout(() => {
            onComplete();
          }, 1000);
        }
      }, 100);
      return () => clearInterval(intervel);
    }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-blck text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <motion.span
          className="ml-1"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {" "}
          |{" "}
        </motion.span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <motion.div
          className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
          initial={{ x: "-100%" }}
          animate={{ x: "250%" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        >
          {""}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
