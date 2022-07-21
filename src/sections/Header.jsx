import React from 'react'
import {motion} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight  } from "@fortawesome/free-solid-svg-icons";
import {faTwitter , faFacebookF , faInstagram} from "@fortawesome/free-brands-svg-icons"
import SocilMediaLink from '../components/SocialMediaLink';

const Header = () => {
  return (
    <div id='home' className=''>
        <div className='flex w-full'>
            <div className='left-section relative hidden lg:block   w-1/3 max-h-786 lg:max-h-full bg-main-black' style={{height:"110vh" , maxWidth:"700px"}} >
                    <div className='absolute -left-20 bottom-0 text-white flex flex-col items-center justify-center gap-5'>
                        <div className='flex justify-center items-center -rotate-90 mb-36'>
                            <span className=' w-40 border-white border bg-white inline-block'></span>
                            <span className='uppercase text-xl font-light pl-5'>follow us</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <SocilMediaLink href="" icon={faFacebookF}/>
                            <SocilMediaLink href="" icon={faInstagram}/>
                            <SocilMediaLink href="" icon={faTwitter}/>
                        </div>

                    </div>  

            </div>
            <div className='main-slider rigth-section w-2/3  bg-main-primary grow relative max-h-786 lg:max-h-full'  style={{height:"110vh"}}>
                <div className='absolute left-0 top-0 z-10 black-layer w-full h-full' style={{backgroundColor: "rgba(0,0,0,0.3)"}}>
     
                </div>
                <div className='sub-slider absolute h-2/3  w-1/2 z-20 -translate-x-1/2 bottom-24 hidden lg:block max-w-350 max-w-80  2xl:max-w-600'  >
                    <motion.img 
                        className='absolute w-full h-full object-cover	' 
                        src='/images/sub-slider-1.jpg'
                        
                        />
            
                     <motion.img
                        className='absolute w-full h-full object-cover	' 
                        src='/images/sub-slider-2.jpg'
                        alt=''
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1 ,duration: 1 ,repeatDelay: 4, yoyo: Infinity}}
                    
                    />
                </div>


                <div className='absolute w-full h-full'>
                    <motion.img 
                        className=' w-full h-full object-cover	' 
                        src='/images/main-slider-1.jpg'
                        
                        />
                    <div className='absolute  z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center'>
                        <motion.h3 
                            initial={{x: "100vw"}}
                            animate={{x:0}}
                            transition={{duration: 1 , ease: "easeOut"}}
                            className='font-extrabold tracking-wider'                            
                            >Roma,Italy</motion.h3>
                        <h1>Villa Echo</h1>
                        <h4>large three bedroom holiday villa</h4>
                        <motion.button 
                            className='font-semibold text-xl border-2 border-main-primary rounded-full px-4 py-2  flex items-center hover:bg-main-primary transition-colors duration-300 '
                            initial={{y: 40 , opacity:0}}
                            animate={{y:0 , opacity:1}}
                            transition={{delay:2  ,duration: 0.5, ease: "easeOut"}}
                            ><span className="-mt-1 mr-3" >view projects</span> <FontAwesomeIcon icon={faAngleRight} /></motion.button>                    </div>
                
                     </div>
                
                <div className='absolute w-full h-full'>
                    <motion.img
                        className=' w-full h-full object-cover' 
                        src='/images/main-slider-2.jpg'
                        alt=''
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1 ,duration: 1 ,repeatDelay: 4, yoyo: Infinity}}
                        />
                </div>
            


            </div>
        </div>
    </div>
  )
}

export default Header