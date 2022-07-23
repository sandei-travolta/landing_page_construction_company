import React from 'react'
import { motion } from "framer-motion"
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import SocilMediaLink from '../components/SocialMediaLink';

const Header = () => {
    return (
        <div id='home' className='primary-section overflow-hidden'>
            <div className='flex w-full'>
                <div className='lg:hidden z-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase   text-white'>
                    
                </div>
                <div className='left-section relative hidden lg:block   w-1/3 max-h-786 lg:max-h-full bg-main-black' style={{ height: "110vh", maxWidth: "700px" }} >
                    <div className='absolute -left-20 bottom-0 text-white flex flex-col items-center justify-center gap-5'>
                        <div className='flex justify-center items-center -rotate-90 mb-36'>
                            <span className=' w-40 border-white border bg-white inline-block'></span>
                            <span className='uppercase text-xl font-light pl-5'>follow us</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <SocilMediaLink href="" icon={faFacebookF} />
                            <SocilMediaLink href="" icon={faInstagram} />
                            <SocilMediaLink href="" icon={faTwitter} />
                        </div>

                    </div>

                </div>
                <div className=' main-slider rigth-section w-2/3  bg-main-primary grow relative max-h-786 lg:max-h-full' style={{ height: "110vh" }}>
                    <div className='absolute left-0 top-0 z-10 black-layer w-full h-full' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>

                    </div>
                    <div className='desktop-heading overflow-hidden flex justify-center items-center absolute w-full h-full z-45'>
                        <div className='flex flex-col justify-center items-center '>
                        <h2 className='flex flex-col justify-center items-center  font-extrabold text-white'>
                                <motion.span
                                    className='font-extrabold pb-8 md:pb-14 text-6xl md:text-7xl lg:text-8xl'
                                    initial={{ x: 20 , opacity: 0} }
                                    whileInView={{x : 0 , opacity: 1}}
                                    transition={{duration: 2 , ease: "easeOut"}}
                                
                            >cityscape</motion.span>
                                <motion.span 
                                    className='font-extrabold text-center text-4xl'
                                    initial={{ x: -20 , opacity: 0} }
                                    whileInView={{x : 0 , opacity: 1}}
                                    transition={{duration: 2 , ease: "easeOut"}}

                            >
                                for construction <br />
                                &amp; <br />
                                more
                                </ motion.span>
        
                            <style jsx="true">{`
                                    .desktop-heading h2 {
                                        background-clip: text;
                                        -webkit-background-clip: text;
                                        -webkit-text-fill-color: transparent;
                                        -webkit-text-stroke-width: 1px;
                                        letter-spacing: 7px;
                                        
                                            }
                                `}</style>
                        </h2>
                        <motion.button 
                                className='border border-main-primary rounded-full px-5 pb-3 pt-2 mt-5 text-white bg-main-primary lg:bg-transparent hover:bg-main-primary text-lg transition-colors duration-300'
                                initial={{y: 100  , opacity: 0}}
                                whileInView={{y: 0 , opacity: 1}} 
                                transition={{duration: 1.5 , ease: "easeOut"}}
                                onClick={() => {document.getElementById('projects').scrollIntoView()}}

                                >
                                
                            view projects
                        </motion.button>
                        </div>

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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1, repeatDelay: 4, yoyo: Infinity }}

                        />
                    </div>


                    <div className='absolute w-full h-full'>
                        <motion.img
                            className=' w-full h-full object-cover	'
                            src='/images/main-slider-1.jpg'
                        />
                    </div>
                    <div className='absolute w-full h-full'>
                        <motion.img
                            className=' w-full h-full object-cover'
                            src='/images/main-slider-2.jpg'
                            alt=''
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1, repeatDelay: 4, yoyo: Infinity }}
                        />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Header