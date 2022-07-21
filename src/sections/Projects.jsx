import ProjectCard from "../components/ProjectCard"
import Modal from "../components/Gallery"
import React, { useState } from 'react';
import { motion } from "framer-motion";
const data = [
  {
    city: "Hangzhou, China", service: "project management", image: "/images/gallery-img-1.jpg"
  },
  {
    city: "Los Angeles,  ,United  States", service: "architectural services", image: "/images/gallery-img-2.jpg"
  },
  {
    city: "Montreal,Canada", service: "pre construction", image: "/images/gallery-img-3.jpg"
  },
  {
    city: "Reggio Emilia, Italy", service: "facade engineering", image: "/images/gallery-img-4.jpg"
  }
]

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
    <section className="flex flex-col items-center">
          <section id="projects" className="flex flex-wrap lg:flex-nowrap pt-16">
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
    </section>
    <motion.button 
            className='my-14 font-semibold capitalize text-xl mx-auto px-8 py-2  flex items-center border-2 border-main-primary rounded-full text-main-primary hover:text-white hover:bg-main-primary transition-colors duration-300 '
            initial={{y: 40 , opacity:0}}
            animate={{y:0 , opacity:1}}
            transition={{delay:2  ,duration: 0.5, ease: "easeOut"}}
            onClick={() => handleClick(data[0] , 0)}
      >
         view in gallery
     </motion.button>

    </section>
  )
}

export default ProjectGallery


