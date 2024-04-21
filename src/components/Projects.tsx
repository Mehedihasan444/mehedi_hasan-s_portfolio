"use client";
import React from "react";
import {motion} from "framer-motion";

interface Props {
    
}

const Projects = (props: Props) => {
  
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* project */}
     
          <div  className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
            initial={{
                y: -300,
                opacity:0
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            viewport={{
                once: true
            }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nYNwCXfDGhin35fpC-4K35DpftL6WZd6Mrk0VqLt2Q&s' alt="project image" className="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-4xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Case study 1 of 3: </span>  UPS clone</h4>
            <p className="text-center text-lg md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quod vitae nisi illo obcaecati consequuntur voluptas debitis tempora! Necessitatibus beatae alias impedit sequi voluptate fugiat illum quos debitis facere, consequatur dolor mollitia. Cum architecto necessitatibus quis quo quas, id vero culpa ullam impedit aut quam magnam unde iste doloribus iure.</p>
            </div>
          </div>
        {/* project */}
     
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
            initial={{
                y: -300,
                opacity:0
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            viewport={{
                once: true
            }} 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nYNwCXfDGhin35fpC-4K35DpftL6WZd6Mrk0VqLt2Q&s' alt="project image" className="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-4xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Case study 1 of 3: </span>  UPS clone</h4>
            <p className="text-center text-lg md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quod vitae nisi illo obcaecati consequuntur voluptas debitis tempora! Necessitatibus beatae alias impedit sequi voluptate fugiat illum quos debitis facere, consequatur dolor mollitia. Cum architecto necessitatibus quis quo quas, id vero culpa ullam impedit aut quam magnam unde iste doloribus iure.</p>
            </div>
          </div>
        {/* project */}
     
          <div  className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
            initial={{
                y: -300,
                opacity:0
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{
                opacity:1,y:0
            }}
            viewport={{
                once: true
            }} 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nYNwCXfDGhin35fpC-4K35DpftL6WZd6Mrk0VqLt2Q&s' alt="project image" className="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-4xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Case study 1 of 3: </span>  UPS clone</h4>
            <p className="text-center text-lg md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quod vitae nisi illo obcaecati consequuntur voluptas debitis tempora! Necessitatibus beatae alias impedit sequi voluptate fugiat illum quos debitis facere, consequatur dolor mollitia. Cum architecto necessitatibus quis quo quas, id vero culpa ullam impedit aut quam magnam unde iste doloribus iure.</p>
            </div>
          </div>
      
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
};

export default Projects;
