import React from 'react'
import { motion } from "framer-motion"
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import SocilMediaLink from '../components/SocialMediaLink';

const headingInfo = [
   "skyscrapers" ,"villas" , "companies"
]
const Header = () => {
    return (
        <div id='home' className='primary-section'>
            <div className='flex w-full'>
                <div className='lg:hidden z-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase   text-white'>
                    <div className='header-info relative flex flex-col items-center justify-center gap-8 '>
                        {
                        headingInfo.map((heading , ind) => {
                            return <motion.h3 
                                    className='font-extrabold text-6xl'
                                    initial={{ x: (ind % 2 === 0 ? 10 : -10) , opacity: 0} }
                                    whileInView={{x : 0 , opacity: 1}}
                                    transition={{duration: 2 , ease: "easeOut"}}
                                
                            >{heading}</ motion.h3>
                        })
                        
                        }
                        <motion.button 
                                className='border border-main-primary rounded-full px-5 py-2 hover:bg-main-primary text-lg transition-colors duration-300'
                                initial={{y: 100  , opacity: 0}}
                                whileInView={{y: 0 , opacity: 1}} 
                                transition={{duration: 1.5 , ease: "easeOut"}}
                                onClick={() => {document.getElementById('projects').scrollIntoView()}}

                                >
                                
                            view projects
                        </motion.button>
                        <style jsx="true">{`
                                    .header-info h3 {
                                        background-clip: text;
                                        -webkit-background-clip: text;
                                        -webkit-text-fill-color: transparent;
                                        -webkit-text-stroke-width: 1px;
                                        letter-spacing: 7px;
                                            }
                                `}</style>
                    </div>
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
                <div className='main-slider rigth-section w-2/3  bg-main-primary grow relative max-h-786 lg:max-h-full' style={{ height: "110vh" }}>
                    <div className='absolute left-0 top-0 z-10 black-layer w-full h-full' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>

                    </div>
                    <div className='sub-slider absolute h-2/3  w-1/2 z-20 -translate-x-1/2 bottom-24 hidden lg:block max-w-350 max-w-80  2xl:max-w-600'  >
                        <motion.img
                            className='main-slider-1 absolute w-full h-full object-cover	'
                            src='/images/sub-slider-1.jpg'
                        />
                        <motion.img
                            className='absolute w-full h-full object-cover	'
                            src='/images/sub-slider-2.jpg'
                            alt=''
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1, repeatDelay: 4, repeat: Infinity }}

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

{/* <style jsx="true">{`
h2.stroke-heading {
   background-image :url('../images/main-slider-3.jpg'); 
   font-size:200px;
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
       }
`}</style> */}