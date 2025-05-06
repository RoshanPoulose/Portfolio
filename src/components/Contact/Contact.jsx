import React, { useRef, useState } from 'react'
import { ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form =useRef();
  const [iSent ,setIsSent] =useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0xdv83n", // service ID
        "template_heig0a2", // template ID
        form.current,
        "M7yTdEhgRFLn5QZTk" // public key
      )    
      .then(() => {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent Successfully! 🚀", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
        });
      })
      .catch((error) => {
        toast.error("Failed to Send Message ⭕ Try Again", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
        });
        console.error("EmailJS Error:", error);
      });  
  };
  
  return (
   <section
   id='contact'
   className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'
   >
    <ToastContainer />
     <div className="text-center mb-10 ">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto"></div>   
        <p className="text-gray-400 mt-4 text-lg font-semibold ">
          Feel free to get in touch for opportunities, collaborations, or any questions you may have!
        </p>   
      </div>   
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border-gray-700'>                  
        <h3 className='text-xl font-semibold text-white text-center'>
         Get in touch! 
        </h3>
        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4' >
          <input type="email" name='user_email' placeholder='Your Email' required  className='w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none  focus:border-purple-500'/>
          <input type="text" name='user_name' placeholder='Your Name' required  className='w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none  focus:border-purple-500'/>
          <input type="text" name='subject' placeholder='Subject' required  className='w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none  focus:border-purple-500'/>
          <textarea name="message" required  placeholder='Message' rows="4" id=""  className='w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none  focus:border-purple-500'></textarea>
          
          <button type='submit' className='w-full bg-gradient-to-r from-purple-600  to-pink-500 py-4 text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer'>
            SEND
          </button>    
        </form>

      </div>

   </section>
  )
}

export default Contact


