import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import htmlLogo from '../assets/htmlLogo.png'
import cssLogo from '../assets/cssLogo.png'
import javaScriptLogo from '../assets/javaScriptLogo.png'
import tailwindLogo from '../assets/tailwindLogo.png'
import reactLogo from '../assets/reactLogo.png'
import reduxLogo from '../assets/reduxLogo.png'
import nextLogo from '../assets/nextLogo.png'
import typeScriptLogo from '../assets/typeScriptLogo.png'
import nodeLogo from '../assets/nodeLogo.png'
import mongoDbLogo from '../assets/mongoDbLogo.jpeg'
import pythonLogo from '../assets/pythonLogo.jpeg'
import expressLogo from '../assets/expressLogo.png'


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
          className="grid grid-cols-3 md:grid-cols-4 gap-8"
        >
          <Skill
            imageSource={htmlLogo}
            directionLeft={true}
            percentage="90%"
          />
          <Skill imageSource={cssLogo} directionLeft={false} percentage="90%" />
          <Skill
            imageSource={javaScriptLogo}
            directionLeft={true}
            percentage="85%"
          />
          <Skill
            imageSource={tailwindLogo}
            directionLeft={false}
            percentage="80%"
          />

          <Skill imageSource={nextLogo} directionLeft={true} percentage="85%" />
          <Skill
            imageSource={reduxLogo}
            directionLeft={false}
            percentage="60%"
          />
          <Skill
            imageSource={reactLogo}
            directionLeft={true}
            percentage="90%"
          />
          <Skill
            imageSource={typeScriptLogo}
            directionLeft={false}
            percentage="40%"
          />
          <Skill
            imageSource={nodeLogo}
            directionLeft={true}
            percentage="40%"
          />
          <Skill
            imageSource={mongoDbLogo}
            directionLeft={false}
            percentage="40%"
          />
          <Skill
            imageSource={pythonLogo}
            directionLeft={true}
            percentage="50%"
          />
          <Skill
            imageSource={expressLogo}
            directionLeft={false}
            percentage="35%"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
