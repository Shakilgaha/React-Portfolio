import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Navbar = () => {

  const [activeSection, setActiveSection] = useState("#about")
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuItemClick = (id) => {
    setActiveSection(id)
    setIsOpen(false)
  }


  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const menuItems = [
    { id: "#about", label: "About" },
    { id: "#skills", label: "Skills" },
    { id: "#experience", label: "Experience" },
    { id: "#project", label: "Projects" },
    { id: "#education", label: "Education" },

  ]




  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 
     ${isScrolled ? "bg-black/35 backdrop-blur-md shadow-md  " : "bg-transparent"}   `}
    >

      <div className='container flex justify-between text-white py-5 items-center  '>

        {/* Logo */}
        <div className='text-lg font-semibold cursor-pointer ' >
          <span className='text-[#8245ec] '>&lt;</span>
          <span className='text-white '>Shakil</span>
          <span className='text-[#8245ec] '>/</span>
          <span className='text-white '>Gaha</span>
          <span className='text-[#8245ec] '>&gt;</span>
        </div>

        {/*Main Menu   */}
        <ul className='hidden md:flex space-x-10 '>
          {
            menuItems.map((curELem, index) => {
              return <li key={index} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === curELem.id ? "text-[#8245ec] after:w-full" : "text-white"} 
              relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0  hover:after:w-full after:bg-[#8245ec] after:rounded-2xl after:transition-all duration-300 `}  >
                <a href={curELem.id} onClick={() => handleMenuItemClick(curELem.id)} >
                  {curELem.label}
                </a>
              </li>
            })
          }
        </ul>

        {/* Github Links */}
        <div className='hidden md:flex text-white text-2xl gap-3 transition-colors '>
          <a href='https://github.com/Shakilgaha' target='_blank' rel='noopener noreferrer' className='hover:text-[#8245ec]' >  <FaSquareGithub /> </a>
          <a href='https://www.linkedin.com/in/shakil-gaha-b4b174244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer' className='hover:text-[#8245ec]' > <FaLinkedin /> </a>
        </div>

        {/* Mobile Menu Icons */}
        <div className='md:hidden flex transition-all '>
          <button
            className='cursor-pointer text-2xl font-bold text-purple-500 '
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Items */}

      {
        isOpen && (
          <div className='absolute top-16 left-1/2 transform -translate-x-1/2  bg-black/55 backdrop-blur-lg w-screen px-8 py-5  ' >
            <ul className='md:hidden  text-white flex flex-col space-y-5 '>
              {
                menuItems.map((curELem, index) => {
                  return <a key={index} className={`cursor-pointer hover:text-[#8245ec] py-2 ${activeSection === curELem.id ? "text-[#8245ec] after:w-full " : "text-white"}  `}
                    onClick={() => handleMenuItemClick(curELem.id)}
                    href={curELem.id}
                  >
                    <span href={curELem.id} className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0  hover:after:w-full after:bg-[#8245ec] after:rounded-2xl after:transition-all duration-300 ${activeSection === curELem.id ? "text-[#8245ec] after:w-full " : "text-white"} hover:text-[#8245ec] `} >
                      {curELem.label}
                    </span>
                  </a>
                })
              }
              {/* Github Links */}
            </ul>
            <div className='md:hidden flex text-white text-2xl gap-6 transition-colors pt-8  '>
              <a href='https://github.com/Shakilgaha' target='_blank' rel='noopener noreferrer' className='hover:text-[#8245ec]' >  <FaSquareGithub /> </a>
              <a href='https://www.linkedin.com/in/shakil-gaha-b4b174244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer' className='hover:text-[#8245ec]' > <FaLinkedin /> </a>
            </div>
          </div>
        )
      }



    </nav >
  )
}

export default Navbar