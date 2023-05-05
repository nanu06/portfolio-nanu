import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import Image from "next/image";

type Props = {};

type Project = {
  id: number;
  name: string;
  image: any;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Share-Me",
    image: project3,
    description:
      "Share Me is an application that allows users to share and categorize images on the internet. Users can log in using their Google ID, and once logged in, they can upload images and categorize them based on different categories. ",
  },
  {
    id: 2,
    name: "DALL-E Clone",
    image: project5,
    description:
      "Dalle Clone is an AI-powered image generation app built on the MERN stack. Using the OpenAI API, users can generate unique images and share them on the app. ",
  },
  {
    id: 3,
    name: "Amazon CLone ",
    image: project1,
    description:
      "The Amazon Clone project is a web application that emulates the functionality of Amazon's online store. Users can add items to their shopping cart and see the total price of their order adjust accordingly.",
  },
  {
    id: 4,
    name: "Meetup App",
    image: project2,
    description:
      "This app is a meetup management system that allows users to add meetups along with their photos and location. Users can easily add new meetups, view them, and even mark them as favorites. ",
  },
  {
    id: 5,
    name: "Portfolio",
    image: project4,
    description:
      "The portfolio app is a personal website that showcases an individual's skills, projects, and experiences of me . It is often used by freelancers, creatives, and professionals to establish their personal brand and attract new opportunities.",
  },
  {
    id: 6,
    name: "Summarizer",
    image: project6,
    description:"Summarize webpages effortlessly with our OpenAI-powered app. Get concise summaries with highlighted key points to save time. Ideal for professionals, students, and anyone looking to simplify research."
     ,
  },
];

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div className="relative w-full flex flex-grow-1 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginTop: "8rem", width: "50%", zIndex: "1" }}
              className="h-68 w-68 md:h-65 md:w-65 "
            >
              <Image src={project.image} alt={project.name} />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center mb-0 pb-0">
                <span className="underline decoration-[#F7AB0A]/50">
                  {i + 1} of {projects.length} :
                </span>{" "}
                {project.name}
              </h4>
              <p className="text-base text-center md:text-left mt-0 pt-0">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
};

export default Projects;
