import React, { useRef, useState } from 'react'

import emailjs from "@emailjs/browser"
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion';



const Contact = () => {


  const form = useRef()
  const [isSent, setIsSent] = useState(null)


  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data L", form.current)

    //* Sending Email TO Gmail
    emailjs.sendForm("service_yn5el51",
      "template_1rf0ila",
      form.current,
      "GVo6Ejs0h6o29q0DO"
    )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); //Reset Form field After Send
          toast.success("Message sent successfully! ✅");
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );

  }



  return (
    <section
      id="contact"
      className='my-12 py-24 pb-45 '

    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        ltr
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className='container '>

        {/* Heading Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className='flex flex-col justify-center items-center text-center mb-16 '>
          <h1 className='text-4xl font-extrabold  '> CONTACT </h1>
          <span className='bg-[#8245ec] py-0.5 px-18 mt-2 mb-5 rounded-2xl    '></span>
          <p className='text-xl font-bold text-gray-400' >I’d love to hear from you—reach out for any opportunities or questions!</p>
        </motion.div>


        {/* Contact Form */}

        <div
          className='flex justify-center items-center text-center mx-4 md:mx-0'
        >
          <form
            ref={form}
            onSubmit={handleFormSubmit}
            className='border p-5 rounded-md border-zinc-700 flex flex-col gap-5 w-full max-w-md bg-[#0d081f]  hover:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-500 '
          >

            <h1 className='text-xl font-semibold ' >Connect With Me 🚀</h1>

            <input type="email"
              required
              name='user_email'
              autoComplete='off'
              placeholder='Your Email'
              className='contact-input'
            />
            <input type="text"
              required
              name='user_name'
              autoComplete='off'
              placeholder='Your Name'
              className='contact-input'
            />
            <input type="text"
              required
              name='subject'
              autoComplete='off'
              placeholder='Subject'
              className='contact-input'
            />
            <textarea
              required
              name='message'
              rows="4"
              autoComplete='off'
              placeholder='Message'
              className='contact-input'
            ></textarea>

            <button className=' bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 w-full px-5 py-3 text-center rounded-lg font-semibold hover:scale-105 transition-all duration-500  ' >Send</button>
          </form>
        </div>


      </div>
    </section>

  )
}

export default Contact