"use client"
import React from 'react'
import {motion} from 'framer-motion'

interface Props {
    
}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden h-[70vh]'>
            <motion.img
            initial={{
                y: -100,
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
                once:true
            }}
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30uxXScIgiC9IhvBMaccD046Q8Q201OWqrtimK_wiug&s"
              alt="experience" className="w-20 h-20 rounded-full md:w-24 md:h-24 xl:w-24 xl:h-24 object-cover object-center"  />
              <div className="px-0 md:px-10">
                <h4 className="text-2xl font-light">CEO of Google</h4>
                <p className="font-bold text-2lg mt-1">Google</p>
                <div className="flex space-x-2 ">
                    {/* Tech used */}
                    <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="react" className="h-10 w-10 rounded-full" />
                    <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="react" className="h-10 w-10 rounded-full" />
                    <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="react" className="h-10 w-10 rounded-full" />
                    
                </div>
                <p className="uppercase py-2 text-gray-300">Started work... - Ended...</p>
                <ul className="list-disc space-y-2 ml-5 text-sm">
                    <li className="">summary points summary points summary points summary points summary points summary points summary points</li>
                    <li className="">summary pointssummary pointssummary pointssummary pointssummary points summary points summary points</li>
                    <li className="">summary pointssummary pointssummary pointssummary pointssummary points summary points summary points</li>
                    <li className="">summary pointssummary pointssummary pointssummary pointssummary points summary points summary points</li>
                    
                    
                </ul>
              </div>
        </article>
    )
}

export default ExperienceCard
