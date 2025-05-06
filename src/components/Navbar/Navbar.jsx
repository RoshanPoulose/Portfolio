import React, { use, useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [activeSection,SetActiveSection] =useState("")
  const [isScrolled,setScolled] =useState(false) 
  //smooth scroll                  
  const handleMenuItemClick =(sectionId) =>{
      SetActiveSection(sectionId)
      setIsOpen(false)   
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
  }                
  }
  useEffect(()=>{  
     const handleScroll =() =>{   
      setScolled(window.scrollY > 50);  
     }     
     window.addEventListener("scroll",handleScroll)
     return()=>window.removeEventListener("scroll",handleScroll)
  },[])
  const menuItems =[  
    {id:"about",label:"About"},
    {id:"skills",label:"Skills"},  
    {id:"experience",label:"Experience"},
    {id:"work",label:"Work"},
    {id: "education", label: "Education"},

    
   
       
  ]
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20 vw] ${isScrolled ? "bg-[#050414] bg-opacity-50  backdrop-blur-md shadow-md":"bg-transparent"}`}>
      <div className='text-white py-5 flex justify-between items-center'>
        <div className="text_lg font-semibold cursor-pointer">
          {/* logo */}  
          <span className='text-[#8245ec]'>&lt;</span>                
          <span className='text-[#e0dee4]'>Roshan</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-[#f1eef7]'>Poulose</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>
        {/* {Destop menu} */}
        <ul className=" hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item)=>
          <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${
            activeSection ===item.id ?"text-[#8245ec]":""
          }`}>
            <button onClick={()=> handleMenuItemClick(item.id)}>{item.label}</button>
          </li>
          )}
        </ul>       
        {/* {socia media icons} */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/RoshanPoulose"
          target='_blank'              
          rel="noopener noreferrer"       
          className='text-gray-300 hover:text-[#8245ec]' 
          >
            <FaGithub size={24}/>

          </a>
          <a href="https://www.linkedin.com/in/roshanpoulose/"
          target='_blank'              
          rel="noopener noreferrer"       
          className='text-gray-300 hover:text-[#8245ec]' 
          >    
            <FaLinkedin size={24}/>

          </a>
        </div>   
        {/* {mobile menu}    */}
        <div className="md:hidden">
          {
             isOpen?(
              <FiX className ="text-3xl text-[#8245ec] cursor-pointer" onClick={()=>setIsOpen(false) }/>
             ):(
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={()=>setIsOpen(true) }/>       
             )
          }
        </div>  
      </div>
      {/* {Mobile Menu Item} */}
         {
          isOpen &&(
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/80 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">

              <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">    
                {menuItems.map((item)=>(
                  <li key={item.id} className={`cursor-pointer hover:text-white 
                    ${ activeSection === item.id ? "text-[#8245ec]":""}`

                  }><button onClick={()=>handleMenuItemClick(item.id)}>
                    {item.label}
                    </button></li>                              
                ))}
                <div className="flex space-x-0-4 ">
                                <a href="https://github.com/RoshanPoulose"
                          target='_blank'              
                          rel="noopener noreferrer"       
                          className='text-gray-300 hover:text-white' 
                          >
                            <FaGithub size={24}/>

                          </a>
                          <a href="https://www.linkedin.com/in/roshanpoulose/"
                          target='_blank'              
                          rel="noopener noreferrer"              
                          className='text-gray-300 hover:text-white' 
                          >    
                            <FaLinkedin size={24}/>
                                   
                          </a>
                </div>
              </ul>

            </div>
          )
         }                 
    </nav>
  )
}

export default Navbar
