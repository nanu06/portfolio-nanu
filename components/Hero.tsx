import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from '../assets/image.jpg'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Nanu",
      "Guy-Who-Loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col h-screen space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackGroundCircles />
    
      <Image
        src={image}
        className="relative rounded-full  mx-auto object-cover"
        alt=""
        height={128}
        width={128}
       
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
