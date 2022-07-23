import ProjectCard from "../components/ProjectCard"
import Modal from "../components/Gallery"
import React, { useState  } from 'react';
import data from "../data/projects";
import { motion  } from "framer-motion";

const ContainerVariants = {
  hidden: { },
  visible: { },
}

const projectsSectionVariants = {
  hidden: { opacity: 0 , y: 200},
  visible: { opacity: 1 , y: 0 , transition: { duration: 1.5 , ease: "easeOut"} },
}

const buttonVariants = {
  hidden: {y: 40 , opacity:0},
  visible: {
      y:0 ,
      opacity:1
    , transition: { duration: 1.5 , delay: 1, ease: "easeOut"} }
}


const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentImg, setCurrentImg] = useState(null)

  const totalLength = data.length;

  const handleClick = (cardData, cardInd) => {
    setCurrentIndex(cardInd);
    setCurrentImg(cardData.image);
  };

  const previousImg = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].image;
      setCurrentImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setCurrentImg(newItem);
    setCurrentIndex(newIndex);
  }

  const nextImg = () => {
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].image;
      setCurrentImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setCurrentImg(newItem);
    setCurrentIndex(newIndex);
  }



  return (
    <section id="projects" className=" primary-section overflow-hidden w-screen">
          <motion.section 
         
         className=" flex flex-col items-center"
         whileInView="visible"
         initial="hidden"
         variants={ContainerVariants}
         viewport={{once: true}}

         >
          <motion.section 
           className="flex flex-wrap lg:flex-nowrap pt-16"
           variants={projectsSectionVariants}
 
           >
      {
        data.map((cardData, cardInd) => {
          return (
            <ProjectCard
              key={cardInd}
              cardData={cardData}
              cardInd={cardInd}
              handleClick={handleClick}
               />
          )
        })
      }

      {currentImg && <Modal currentImg={currentImg} setCurrentImg={setCurrentImg} nextImg={nextImg} previousImg={previousImg}/>}
        </motion.section>
        <motion.button 
            className='my-14 font-semibold capitalize text-xl mx-auto px-8 py-2  flex items-center border-2 border-main-primary rounded-full text-main-primary hover:text-white hover:bg-main-primary transition-colors duration-300 '
            variants={buttonVariants}
            onClick={() => handleClick(data[0] , 0)}
      >
         view in gallery
       </motion.button>

    </motion.section>
    </section>
  )
}

export default ProjectGallery


