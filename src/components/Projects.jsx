import React, { useState } from 'react'
import { projects } from '../data/constants.js'


const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null)

    const handleProjectClick = (curProject) => {
        setSelectedProject(curProject)

    }


    return (
        <section
            id="project"
            className="py-24 pb-24   font-sans relative  container "

        >
            <div className=' m-auto px-20 '>

                {/* Heading Section */}
                <div className='flex flex-col justify-center items-center text-center mb-16 '>
                    <h1 className='text-4xl font-extrabold  '>PROJECTS</h1>
                    <span className='bg-[#8245ec] py-0.5 px-18 mt-2 mb-5 rounded-2xl    '></span>
                    <p className='text-lg md:text-xl font-semibold md:font-bold text-gray-400' >A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
                </div>

                {/* Projects Section */}
                <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9  mx-6  ' >
                    {
                        projects.map((curElem, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleProjectClick(curElem)}
                                    className='border border-zinc-600 px-3 py-4 flex flex-col w-full rounded-xl backdrop-blur-md cursor-pointer gap-6 bg-gray-900 hover:-translate-y-2 overflow-hidden transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50 '
                                >
                                    <figure className='w-full h-full overflow-hidden' >
                                        <img src={curElem.image} alt={curElem.title} className='w-full h-full object-cover rounded-md' />
                                    </figure>
                                    <div className='flex flex-col space-y-4 my-2 h-full '>

                                        <h1 className='text-xl font-bold ' > {curElem.title} </h1>
                                        <p className='text-gray-400 text-xs line-clamp-3 ' > {curElem.description} </p>
                                        <ul className='flex flex-wrap gap-2'>
                                            {
                                                curElem.tags.map((tag, index) => {
                                                    return (
                                                        <li key={index}
                                                            className='bg-[#251f38] text-purple-500 text-xs px-4 py-2 rounded-2xl font-semibold     '
                                                        >
                                                            {tag}

                                                        </li>

                                                    )
                                                })
                                            }

                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Single Project Detail Container */}

            </div>

            {/*Model Container   */}
            {
                selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 py-12 ">
                        <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-2xl  overflow-hidden relative px-3 pb-4 my-24  ">
                            {/* close model btn */}
                            <div className='flex justify-end px-1 pt-2'>
                                <button onClick={() => setSelectedProject(null)} className='mb-3 font-bold text-3xl hover:text-purple-500 ' > &times;  </button>
                            </div>

                            {/* Model Image */}
                            <figure className='w-full h-full  overflow-hidden' >
                                <img src={selectedProject.image} alt={selectedProject.title} className='w-full h-full object-cover rounded-xl' />
                            </figure>
                            <div className='flex flex-col space-y-5 my-4  '>

                                <h1 className='text-xl font-bold ' > {selectedProject.title} </h1>
                                <p className='text-gray-400 text-xs ' > {selectedProject.description} </p>
                                <ul className='flex flex-wrap gap-2'>
                                    {
                                        selectedProject.tags.map((tag, index) => {
                                            return (
                                                <li key={index}
                                                    className='bg-[#251f38] text-purple-500 text-xs px-3 py-1 rounded-2xl font-semibold     '
                                                >
                                                    {tag}

                                                </li>

                                            )
                                        })
                                    }

                                </ul>
                            </div>

                            {/* Code And Live  Button  */}
                            <div className='w-full flex gap-5'>
                                <a href={selectedProject.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='rounded-md shadow-2xl w-full px-8 py-2 inline-block mt-5 text-lg font-bold transition duration-300 text-center hover:scale-105 hover:bg-linear-to-r hover:from-[#8245ec] hover:to-[#a885f7]  btn-project-hover  border border-zinc-700 hover:border-0 '
                                > View Code </a>
                                <a href={selectedProject.webapp}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`rounded-md shadow-2xl w-full px-8 py-2 inline-block mt-5 text-lg font-bold transition duration-300 text-center bg-linear-to-r from-[#8245ec] to-[#a885f7]  ${selectedProject.webapp === null ? " opacity-20 cursor-not-allowed " : "btn-project-hover  hover:scale-105"}   `}
                                > View Live </a>

                            </div>

                        </div>

                    </div>
                )
            }
        </section>
    )
}

export default Projects