import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Header from "./sections/Header"
import About from './sections/About'
import Services from './sections/Services'
import OurTeam from './sections/OurTeam'
import ContactUs from './sections/ContactUs'
import Clients from './sections/Clients'
import ProjectsGallery from './sections/Projects'
import Footer from './sections/Footer'
import { useEffect } from 'react';
import { useSection } from './context/SectionContext';



function App() {  
  const { setActiveSectionId} = useSection()
  
  const setActiveSection = (id) => {
    setActiveSectionId(id)
  }

  useEffect(() => {
    const primarySections = Array.from(document.querySelectorAll(".primary-section"))

    window.addEventListener('scroll' ,() => {
      const list = []
      primarySections.forEach((section , ind) => {
        if(window.scrollY >= section.offsetTop - (window.innerHeight/2 )){
          list.push(section)  
        }
      })
      setActiveSection(list[list.length - 1].id)

     })


 
      })
  return (
    <div >
      <Navbar />
      <Sidebar />
      <Header />
      <About />
      <Services />
      <ProjectsGallery />
      <OurTeam />
      <ContactUs />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;



