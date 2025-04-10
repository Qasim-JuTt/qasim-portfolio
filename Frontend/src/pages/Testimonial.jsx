"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      position: "CFO of Acme Co",
      image: "/images/testimonials/person1.jpeg",
    },
    {
      quote:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      position: "COO of DEF Corp",
      image: "/images/testimonials/person2.jpeg",
    },
    {
      quote:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      position: "CTO of 456 Enterprises",
      image: "/images/testimonials/person1.jpeg",
    },
  ];

  return (
    <div className="bg-gray-900 w-full flex justify-center items-center min-h-screen p-6">
      <div className="max-w-6xl text-white text-center">
        <p className="text-gray-400 uppercase text-sm tracking-wide">
          WHAT OTHERS SAY
        </p>
        <motion.h2
          className="text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials.
        </motion.h2>
        <motion.p
          className="text-gray-400 my-10 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Discover what clients and colleagues say about my work in the
          Testimonial section. Their feedback highlights my expertise in MERN
          stack development, problem-solving skills, and commitment to
          delivering high-quality web applications. 
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              className="bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <motion.div
                className="p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
