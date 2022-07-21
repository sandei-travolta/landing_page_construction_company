import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft , faChevronRight , faXmark } from "@fortawesome/free-solid-svg-icons";

const Gallery = ({ currentImg,  setCurrentImg, nextImg,previousImg }) => {
  
    const hideGallery = (e) => {
        setCurrentImg("");
    };
  
    return (
      < div className="z-50 select-none	">
        <div className="overlay flex items-center fixed top-0 left-0 right-0 w-full h-full dismiss" style={{backgroundColor: "rgba(0,0,0,0.9)"}} >
          <img className="block my-16 mx-auto shadow-lg" style={{maxWidth: "60%" , maxHeight: "80%"}} src={currentImg} alt="bigger pic" />
          <span className="dismiss text-white absolute top-5 right-5 lg:right-10 text-3xl z-50 cursor-pointer" onClick={hideGallery}>
                <FontAwesomeIcon icon={faXmark} />
          </span>
          <div onClick={previousImg} className="gallery_left_arrow cursor-pointer absolute flex justify-center items-center top-1/2 left-0 h-20 w-12 z-50 " style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
                <FontAwesomeIcon className="text-3xl text-white" icon={faChevronLeft}/>
          </div>
          <div onClick={nextImg} className="gallery_right_arrow  cursor-pointer absolute flex justify-center items-center top-1/2 right-0 h-20 w-12 z-50" style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
                <FontAwesomeIcon className="text-3xl text-white" icon={faChevronRight}/>

          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;