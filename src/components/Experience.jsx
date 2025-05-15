import React from 'react'
import { experiences } from '../data/constants.js';

import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion.js';


const Experience = () => {
    return (
        <section
            id="experience"
            className='my-12 py-24  bg-skills-gradient pb-45 clip-path-custom2 '

        >
            <div className='container-2 '>
                {/* Heading Section */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className='flex flex-col justify-center items-center text-center mb-16 px-6 '>
                    <h1 className='text-4xl font-extrabold  '>EXPERIENCES</h1>
                    <span className='bg-[#8245ec] py-0.5 px-24 mt-2 mb-5 rounded-2xl    '></span>
                    <p className='text-lg md:text-xl font-semibold md:font-bold text-gray-400' >A collection of my work experience and the roles I have taken in various organizations</p>
                </motion.div>


                {/* Experience Timeline  */}

                <div className=' relative  mx-5 md:mx-0 '>
                    {/* Vertical Timeline */}
                    <div className=' absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full  '></div>

                    {/* Experience Entries */}
                    {
                        experiences.map((curElem, index) => {
                            return (
                                <div key={curElem.id}
                                    className={`flex flex-col sm:flex-row  items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : " sm:justify-start "}   `}>

                                    {/* timeline Circle  */}
                                    <div
                                        className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10  '>
                                        <img src={curElem.img} alt={curElem.company}
                                            className='w-full h-full rounded-full object-cover'
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className={` w-full sm:max-w-md p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0 " : " sm:mr-0  "} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105   `} >

                                        {/* flex container for image And text */}
                                        <div className='flex items-center space-x-6  ' >
                                            {/* company logo */}
                                            <div className='w-16 h-16 bg-white rounded-md overflow-hidden   '>
                                                <img src={curElem.img} alt={curElem.company}
                                                    className='w-full h-full object-cover'
                                                />
                                            </div>

                                            {/* Role , Company Name , And Date */}
                                            <div className='flex flex-col gap-1 justify-between '>
                                                <h2 className='text-xl font-bold' > {curElem.role} </h2>
                                                <p className='text-xs text-gray-300' > {curElem.company} </p>
                                                <p className='text-xs text-gray-500' > {curElem.date} </p>
                                            </div>

                                        </div>
                                        {/* Main Content  */}
                                        <div className='flex flex-col my-4 space-y-3 '>
                                            <p className='text-sm text-gray-400 font-light ' > {curElem.desc} </p>
                                            <span>Skills :</span>
                                            <ul className=' flex flex-wrap gap-2 '>
                                                {
                                                    curElem.skills.map((curSkill, index) => {
                                                        return (
                                                            <li key={index} className='bg-[#8245ec] px-4 py-1 rounded-md w-fit h-fit text-xs text-gray-200 font-light shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>{curSkill}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </section>
    )


}

export default Experience