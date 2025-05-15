import React from 'react';
import Tilt from 'react-parallax-tilt';
import { SkillsInfo } from '../data/constants.js';

import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion.js';


const Skills = () => {

  return (
    <section
      id="skills"
      className='my-12 py-24  bg-skills-gradient pb-45 clip-path-custom '

    >
      <div className='container flex flex-col justify-center items-center '>

        {/* Heading Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className='flex flex-col justify-center items-center text-center px-6 '>
          <h1 className='text-4xl font-extrabold'  >SKILLS</h1>
          <span className='bg-[#8245ec] py-0.5 px-11 mt-1 mb-5 rounded-2xl'></span>
          <p className='text-lg md:text-xl font-semibold md:font-bold text-gray-400' >A collection of my technical skills and expertise honed through various projects and experiences</p>
        </motion.div>

        {/* Skills Boxes */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-9 '>
          {
            SkillsInfo.map((curSkill) => {
              return (
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  key={curSkill.title}
                  className='bg-gray-900 border border-zinc-200 rounded-lg p-5 backdrop-blur-md w-full h-full shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] '
                >
                  {/* Title */}
                  <h1 className='text-center w-full mb-3  text-2xl text-gray-400 font-bold ' >{curSkill.title}</h1>
                  <Tilt
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                    className='  '
                  >
                    <ul className='grid grid-cols-2 md:grid-cols-3  gap-3 '>
                      {
                        curSkill.skills.map((curElem) => {
                          return (
                            <motion.li
                              variants={fadeIn("down", 0.4)}
                              initial="hidden"
                              whileInView="show"
                              key={curElem.name} className='border border-gray-700 rounded-full px-4 py-2 flex w-full gap-2 items-center justify-center  ' >
                              <img src={curElem.logo} alt={`${curElem.logo} Logo`} className='w-8 h-8' />
                              <span className='text-xs sm:text-sm' > {curElem.name} </span>
                            </motion.li>
                          )
                        })
                      }
                    </ul>
                  </Tilt>
                </motion.div>
              )
            })
          }
        </div>

      </div>

    </section>
  )
}

export default Skills