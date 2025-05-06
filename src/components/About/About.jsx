import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from "react-parallax-tilt"
import ProfileImages from '../../assets/profile2.jpg';

const About = () => {
  return (                      
    <section id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >                                                                                      
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'> 
            Hi, I am      
          </h1>
          <h2 className='text-4xl sm:text-5xl  md:text-6xl font-bold text-white mb-4 leading-tight'>
            Roshan Poulose
          </h2>        
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>    
            <span className='text-white'>I am a </span>    
            <Typewriter
              words={['FullStack Developer', 'Creative Web Designer', 'Frontend Specialist', 'Coder']}
              loop={false}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50} 
              delaySpeed={2000}
            />
          </h3>   
            <p className='text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed '> 
            I am an aspiring full-stack developer currently building my skills in the MERN stack, with a focus on React.js. While I am still mastering both front-end and back-end technologies, I’m passionate about creating dynamic, responsive, and user-friendly web applications. My current learning journey includes deep diving into React.js, JavaScript, Node.js, and MongoDB, with a keen interest in crafting efficient, scalable solutions
              
            </p>    
            <a href="https://drive.google.com/file/d/1ciz_DQF5Zcvcqg_6UmXcm_EzD_4-Bomv/view?usp=drive_link" className='inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105' style={{
              background:"linear-gradient(90deg ,#8245ec,#a855f7)",
              boxShadow:"0 0 2px #8245ec, 0 0 2px #8245ec , 0 0 40px #8245ec" ,

            }} target='_blank'
            rel="noopener noreferrer" 
            >DOWNLOAD CV</a>                                                                                           
        </div>   
        <div className="md:w-1/2 flex justify-center md:justify-end">  
        <Tilt className='w-48 h-48 sm:w-64 sm:h-64  md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full '
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
        
        >
        <img src={ProfileImages} alt="Roshan Poulose" className='w-full h-full rounded-full object-cover drop-shadow[0_10px_20px_rgba[130,69,236,0.5]]' />

        </Tilt>
        </div>                      
      </div>                                    
    </section>             
  )                        
}                                                                           
                    
export default About              
     