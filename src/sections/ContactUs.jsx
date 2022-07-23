import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight  } from "@fortawesome/free-solid-svg-icons";
import { motion   } from "framer-motion";
const contactSectionVariants = {
    visible: { scale: 1, transition: { duration: 1.5 , ease: "easeOut"} },
    hidden: { scale: 0 }
  };
const ContactUs = () => {

 

  return (
    <motion.section id='contact-us' className='primary-section pt-16'
    whileInView="visible"
    initial="hidden"
    variants={contactSectionVariants}
    viewport={{once: true}}
    >
        <section className='container max-w-screen-xl'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className="uppercase text-main-primary font-medium pb-4 text-xl " style={{letterSpacing:'7px'}}>contact our team</h2>
                <h3 className="text-4xl font-bold pb-7   capitalize">get in touch</h3>
                <p className='text-slate-600 text-center text-xl'>Looking forward to building your own residential or commercial property? Feel free to contact us using the form below to discuss additional details of your project with our managers so that our team could get started with your project right away.</p>
            </div>
            <div className='w-full mt-10'>
                <form className='w-full max-w-xl mx-auto'>
                    <div className='flex flex-col items-start mx-3 pb-5'>
                        <label htmlFor='name' className='font-bold text-xl text-black' >Name</label>
                        <input 
                            id="name"
                            type="text"
                            placeholder='Type your name here'
                            className='w-full placeholder:text-slate-600 border-b border-slate-600 pt-3 pb-1 outline-none'
                            />
                    
                    </div>     
                    <div className='flex flex-col items-start mx-3 pb-5'>
                        <label htmlFor='name' className='font-bold text-xl text-black' >Email</label>
                        <input 
                            id="name"
                            type="text"
                            placeholder='Type your email here'
                            className='w-full placeholder:text-slate-600 border-b border-slate-600 pt-3 pb-1 outline-none'
                            />
                    
                    </div>     
                    <div className='flex flex-col items-start mx-3 mb-5'>
                        <label htmlFor='name' className='font-bold text-xl text-black' >Message</label>
                        <textarea 
                            id="name"
                            placeholder='Type your message here'
                            className='w-full placeholder:text-slate-600 border-b border-slate-600 pt-3 pb-1 outline-none'
                            />
                    
                    </div>
                    <motion.button 
                            className='font-semibold text-lg  text-white mx-auto  rounded-full px-8 py-2  flex items-center bg-main-primary hover:bg-main-black transition-colors duration-300 '
                            initial={{y: 40 , opacity:0}}
                            animate={{y:0 , opacity:1}}
                            transition={{delay:2  ,duration: 0.5, ease: "easeOut"}}
                            ><span className="-mt-1 mr-2" >Send</span> <FontAwesomeIcon icon={faAngleRight} />
                    </motion.button>        
                </form>
            </div>

        </section>
    </motion.section>
  )
}

export default ContactUs