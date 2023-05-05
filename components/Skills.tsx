import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w[2000px] xl:px-10 h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          {" "}
          Skills
        </h3>

        <h3 className="absolute top-[24%]   uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current profieciency
        </h3>
        <div
          style={{ marginTop: "10rem" }}
          className="grid grid-cols-3 md:grid-cols-4 gap-5  "
        >
          <Skill
            imageSource=" https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
            
            directionLeft={false}
            percentage="90%"
          />
          <Skill
            imageSource="https://cdn.iconscout.com/icon/free/png-512/css3-9-1175237.png"
            directionLeft={true}
            percentage="90%"
          />
          <Skill
            imageSource="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png "
            directionLeft={true}
            percentage="80%"
          />
          <Skill
            imageSource="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
            directionLeft={false}
            percentage="80%"
          />{" "}
          <Skill
            imageSource="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
            directionLeft={true}
            percentage="85%"
          />
          <Skill
            imageSource=" https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png "
            directionLeft={true}
            percentage="60%"
          />
          <Skill
            imageSource="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png"
            directionLeft={false}
            percentage="80%"
          />
          <Skill
            imageSource="https://img.icons8.com/color/96/000000/mongodb.png"
            directionLeft={false}
            percentage="40%"
          />
          <Skill
            imageSource=" https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
            directionLeft={true}
            percentage="85%"
          />
          <Skill
            imageSource=" https://img.icons8.com/color/96/000000/python.png"
            directionLeft={false}
            percentage="80%"
          />
          <Skill
            imageSource="https://img.icons8.com/color/96/000000/c-programming.png"
            directionLeft={false}
            percentage="75%"
          />
          <Skill
            imageSource=" https://img.icons8.com/color/96/000000/c-plus-plus-logo.png"
            directionLeft={true}
            percentage="70%"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
