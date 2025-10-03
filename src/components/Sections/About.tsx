import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaReact,
  FaLaptopCode,
  FaUniversity,
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#2563EB ", color: "#fff" }}
            contentStyle={{ background: "#0f172a", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
            icon={<FaUniversity size={30} />}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <div>
                <span className="text-sm text-white/70">2021</span>
              </div>
              <h3 className="vertical-timeline-element--education">
                Started Studying Computer Science
              </h3>
              <p>
                Discovered my passion for programming and problem-solving during
                university. Began my journey to become a developer.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Learning Front-End Basics */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#1E84E7 ", color: "#fff" }}
            contentStyle={{ background: "#0f172a", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
            icon={<FaLaptopCode size={30} />}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.6 }}
            >
             
              <div className="mb-3 flex gap-2 left-0 ">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition"
                >
                  HTML
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition"
                >
                  CSS
                </a>
                <a
                  href="https://tailwindcss.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition"
                >
                  TailwindCSS
                </a>
              </div>

           
              <div>
                <span className="text-sm text-white/70">2022</span>
              </div>
              <h3 className="vertical-timeline-element-title">
                Learning Front-End Basics
              </h3>
              <p>
                Started building small projects using HTML, CSS, and JavaScript.
                Practiced daily and shared work on GitHub.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#17A1DE ", color: "#fff" }}
            contentStyle={{ background: "#0f172a", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
            icon={<FaReact size={30} />}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              
              <div className="mb-3 flex  left-0  flex-wrap">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition"
                >
                  React.js
                </a>
              </div>

             
              <div>
                <span className="text-sm text-white/70">2023</span>
              </div>
              <h3 className="vertical-timeline-element-title">
                Diving into React.js
              </h3>
              <p>
                Built interactive UIs using components and hooks. Learned how to
                manage state and structure scalable apps.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          
          <VerticalTimelineElement
            className="vertical-timeline-element--work  "
            iconStyle={{ background: "#06B6D4 ", color: "#fff" }}
            contentStyle={{ background: "#0f172a", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
            icon={<FaGraduationCap size={30} />}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <div className="mb-3 flex left-0 flex-wrap">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition"
                >
                  CV
                </a>
              </div>
              <div>
                <span className="text-sm text-white/70">2024</span>
              </div>
              <h3 className="vertical-timeline-element-title">
                Graduated & Pursuing Real-World Projects
              </h3>
              <p>
                Graduated in Computer Science and now building real-world
                projects to sharpen my front-end skills.
              </p>
            </motion.div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
