import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";


const Footer = () => {

  const handleScroll =(sectionId) =>{
    const section =document.getElementById(sectionId)
    if(section){
      section.scrollIntoView({ behavior: 'smooth' });
    }
   
  }
  return (
   <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] '>
    <div className="container mx-auto text-center ">
      <h2 className='text-xl font-semibold text-purple-500'>  
        Roshan Poulose
      </h2>
      <h2>
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
          {id:"about",label:"About"},
          {id:"skills",label:"Skills"},  
          {id:"experience",label:"Experience"},
          {id:"work",label:"Work"},
          {id: "education", label: "Education"},
           ].map((item,idx)=>(
            <button key={idx} onClick={()=>handleScroll(item.id)} className='hover:text-purple-500 text-sm sm:text-base my-1 '>
                {item.label} 
                </button>
           ))}
          
        </nav>
          <div className="flex flex-wrap justify-center space-x-4 mt-6">
            {[
              { icon: <FaFacebook />, link: "https://www.facebook.com/share/18zC5CgCHm/" },
              { icon: <FaTwitter />, link: "https://x.com/RoshanPoulose1?t=izqaM8lxojlk1q28zCBTsQ&s=09" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/roshanpoulose/" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/roshan_poulose_?igsh=MWdnNGdjc2s0OGN6bQ==" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
      </h2>
    </div>
    
   </footer>
  )
}

export default Footer
