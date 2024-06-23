import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import mee from "../assets/mee.jpeg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="flex-shrink-0 mt-20 md:mt-0 md:mr-10"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={mee}
          alt="MyImage"
          className="rounded-full md:rounded-full w-32 h-32 mt-10   md:w-72 md:h-72 object-cover"
        />
      </motion.div>

      <motion.div
        className="space-y-10 px-0 md:px-10 text-center md:text-left"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a software developer with a strong focus on web development. My
          passion for technology drives me to constantly improve and stay
          current with the latest industry trends. I am dedicated to delivering
          high-quality results that meet the needs of my clients and bring their
          ideas to life. With my knowledge and skills in web development, I am
          confident in my ability to create innovative solutions and bring
          projects to completion. I approach each task with a positive attitude
          and a desire to continuously grow and learn in this ever-evolving
          field.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
