import React from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
type Props = {
  directionLeft?: boolean;
  imageSource:StaticImageData
  percentage:string;
};

const Skill = ({directionLeft,imageSource,percentage}: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={imageSource.src}
        
        alt="Skill"
        className="rounded-full border-gray-500 object-cover bg-center bg-no-repeat bg-contain w-20 h-20 xl:w-20 xl:h-20  md:h-35 md:w-35 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-15 md:w-15 xl:20 xl:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100%">
                {percentage}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
