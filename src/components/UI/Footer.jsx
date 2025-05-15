import React from 'react'

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {

  const links = [
    { id: "#about", label: "About" },
    { id: "#skills", label: "Skills" },
    { id: "#experience", label: "Experience" },
    { id: "#project", label: "Projects" },
    { id: "#education", label: "Education" },

  ]


  const icons = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/share/16VEhefdfb/" },
    { icon: <FaSquareXTwitter />, link: "https://x.com/GahaShakil?t=Pjbh4qQ0S_2OsyRTktFv_A&s=09" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shakil-gaha-b4b174244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/shakilgaha01?igsh=MTkwZ2JuNzAyazN5ZA==" },
    { icon: <FaGithub />, link: "https://github.com/Shakilgaha" },

  ]

  return (
    <footer className='container flex flex-col justify-center items-center gap-6 pb-6'>
      {/* Name Section */}
      <div>
        <h1 className='text-xl text-purple-500 font-semibold'>Shakil Gaha</h1>
      </div>
      {/* Links */}
      <div className='flex flex-wrap gap-3 md:gap-7'>
        {
          links.map((curLink, index) => {
            return (
              <a key={index} href={curLink.id} className="hover:text-purple-500 transition-colors duration-75"> {curLink.label} </a>
            )
          })
        }

      </div>
      {/* Icons */}
      <div className='flex gap-7'>
        {
          icons.map((curIcon, index) => {
            return (
              <a key={index} href={curIcon.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-purple-500 transition-colors duration-75'> {curIcon.icon} </a>
            )
          })
        }

      </div>
      {/* Copyright Section */}
      <div>
        <h3 className='text-gray-400  '>© 2025 Shakil Gaha. All rights reserved.</h3>
      </div>
    </footer>
  )
}

export default Footer