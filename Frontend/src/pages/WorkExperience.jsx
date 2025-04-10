import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaNodeJs, FaDocker, FaCube } from "react-icons/fa";
import { useTheme } from "../context/ColorTheme";

const experiences = [
  {
    title: "React.js Developer",
    company: "Starbucks",
    date: "March 2020 - April 2021",
    description: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    icon: <FaReact className="text-white text-2xl" />,
    iconBg: "#61DAFB",
  },
  {
    title: "Node.js Developer",
    company: "Tesla",
    date: "Jan 2021 - Feb 2022",
    description: [
      "Developed and maintained scalable backend services using Node.js and Express.",
      "Designed and optimized RESTful APIs to enhance application performance.",
      "Integrated databases such as MongoDB for efficient data management.",
      "Implemented authentication and security best practices, including JWT and OAuth.",
    ],
    icon: <FaNodeJs className="text-white text-2xl" />,
    iconBg: "#68A063",
  },
  {
    title: "DevOps Engineer (GitHub & Docker)",
    company: "Starbucks",
    date: "March 2020 - April 2021",
    description: [
      "Managed source code versioning and collaboration using GitHub, ensuring efficient CI/CD workflows.",
      "Containerized applications using Docker for improved scalability and deployment consistency.",
      "Configured and optimized Docker containers, images, and Docker Compose for development and production environments.",
      "Implemented security best practices for GitHub repositories and Docker containers to prevent vulnerabilities.",
    ],
    icon: <FaDocker className="text-white text-2xl" />,
    iconBg: "#2496ED",
  },
  {
    title: "3D Web Designer",
    company: "Tesla",
    date: "Jan 2021 - Feb 2022",
    description: [
      "Designed and developed interactive 3D web experiences using Three.js and WebGL.",
      "Created visually engaging and immersive UI/UX elements for web applications.",
      "Optimized 3D models and animations to enhance performance and responsiveness.",
      "Conducted debugging and performance tuning for 3D web applications to improve user experience.",
    ],
    icon: <FaCube className="text-white text-2xl" />,
    iconBg: "#FF0000",
  },
];

const WorkExperience = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} py-10`}>
      <div className="container mx-auto px-6 mt-24">
        <h2 className="text-4xl font-bold text-center mb-8">Work Experience</h2>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: darkMode ? "#1E293B" : "#fff",
                color: darkMode ? "#fff" : "#000",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${darkMode ? "#1E293B" : "#fff"}`,
              }}
              date={exp.date}
              iconStyle={{ background: exp.iconBg, color: "#fff" }}
              icon={exp.icon}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <h4 className={`text-md ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {exp.company}
              </h4>
              <ul className={`list-disc list-inside mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;
