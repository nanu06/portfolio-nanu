import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
  imageSource:string;
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
        src={imageSource}
        // srcSet="path/to/image-480w.png 480w, path/to/image-768w.png 768w, path/to/image-1024w.png 1024w"
        // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33.3vw" 
        alt="Skill"
        className="rounded-full border-gray-500 object-cover bg-center bg-no-repeat bg-contain w-20 h-20 xl:w-32 xl:h-32  md:h-20 md:w-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-24 md:w-24 xl:w-32 xl:h-32 rounded-full z-0">
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
