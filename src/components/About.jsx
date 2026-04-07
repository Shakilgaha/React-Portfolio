import React from 'react'
import Tilt from 'react-parallax-tilt'

import profileImg from '/ShakilGaha.png'
import { Typewriter } from 'react-simple-typewriter'

import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion'
import { ResumeLink } from '../data/Links'


const About = () => {
  return (
    <section id='about' className='container text-white py-12 pt-40 flex justify-baseline flex-col gap-12 md:flex-row' >

      {/* Left Div */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        className='order-2 md:order-1  flex flex-col font-bold gap-2 w-full items-center justify-center md:items-start text-center md:text-start  '>
        {/* first Line */}
        <h1 className=' text-4xl  '  >Hi, I am  </h1>
        {/* Name  */}
        <h1 className=' text-4xl  '  > Shakil Gaha </h1>

        {/* Typing Effect */}
        <h3 className='text-2xl'>
          <span> I am a </span>
          <span className='text-purple-500' >
            <Typewriter
              words={[
                'Frontend Developer',
                'React-JS Developer',
                'MERN Stack Developer',
                'Fullstack Developer',
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}


            />
          </span>

        </h3>
        {/* <p className='text-gray-400 w-full font-normal lg:max-w-1/2 text-sm px-6 md:px-0   '>
          I'm a results-driven Full Stack MERN Developer with hands-on experience building scalable web applications and enterprise-level solutions. I specialize in MongoDB, Express.js, React, and Node.js, with strong expertise in creating dynamic user interfaces and efficient backend systems.
        </p> */}
        <p className='text-gray-400 w-full font-normal lg:max-w-1/2 text-sm px-6 md:px-0'>
          I'm a results-driven Full Stack MERN Developer skilled in building scalable web applications and enterprise-level solutions using MongoDB, Express.js, React, and Node.js. I design and develop robust RESTful APIs, implement secure role-based authentication, and build dynamic, responsive dashboards.

          I solve real-world business problems through systems like ERP, HRMS, and learning platforms, focusing on performance optimization, efficient data handling with TanStack Query, and writing clean, maintainable, and scalable code.
        </p>

        {/* Download Btn */}

        <a href={ResumeLink}
          target='_blank'
          rel="noopener noreferrer"
          className='rounded-full shadow-2xl w-fit px-8 py-2 inline-block mt-5 text-lg font-bold transition duration-300 hover:scale-105    '
          style={{
            background: 'linear-gradient(90deg , #8245ec , #a885f7)',
            boxShadow: '0 0 2px #8245ec , 0 0 2px #8245ec , 0 0 40px #8245ec  '
          }}

        >
          DOWNLOAD CV
        </a>

      </motion.div>

      {/* Right Div  */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        className='order-1 md:order-2  w-full md:w-1/2 flex items-center justify-center  h-full'>
        <div className='hidden md:block '>
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className='sm:w-[25rem] sm:h-[25rem] lg:w-[30rem] lg:h-[30rem] border-4 border-purple-700 rounded-full  overflow-hidden   '
          >
            <img src={profileImg} alt="Shakil Gaha"
              className='cursor-pointer w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]  scale-110 '
            />
          </Tilt>
        </div>
        <div className='w-[20rem] h-[20rem] md:hidden  border-4 border-purple-700 rounded-full  overflow-hidden  '>
          <img src={profileImg} alt="Shakil Gaha"
            className='cursor-pointer w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]  scale-110 '
          />
        </div>
      </motion.div>
    </section>
  )
}

export default About