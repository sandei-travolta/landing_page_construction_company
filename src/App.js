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

function App() {  
  return (
    <div>
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



