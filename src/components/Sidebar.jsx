import SocilMediaLink from "./SocialMediaLink";
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppState } from "../context/AppContext";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";


const NavigationLink = ({ children, href }) => {
    return (
        <a href={`#${href}`}>
            <li className="hover:bg-main-primary px-4 py-3 transition-colors duration-300">
                {children}
            </li>
        </a>
    )
}


const SideBar = () => {
    const { menu } = useAppState()

    return (
        <div 
            className={`fixed -left-80 top-16 w-80 h-screen bg-main-black z-40 text-white lg:hidden transition-transform duration-300 ${menu ? "translate-x-80" : ""}
          ` }>
            <div className="flex flex-col justify-between h-full">
                <ul className="flex flex-col ">
                    <NavigationLink href=""> Home </NavigationLink>
                    <NavigationLink href="about"> About </NavigationLink>
                    <NavigationLink href="services"> Our Services </NavigationLink>
                    <NavigationLink href="projects"> Projects</NavigationLink>
                    <NavigationLink href="contact-us"> Contact Us</NavigationLink>
                </ul>


                <div className="lg:hidden flex justify-between items-center px-4 mb-20">
                    <div className=" flex justify-center">
                        <SocilMediaLink href="" icon={faTwitter} />
                        <SocilMediaLink href="" icon={faFacebookF} />
                        <SocilMediaLink href="" icon={faInstagram} />
                    </div>
                    <div className="">
                        <FontAwesomeIcon icon={faMobileAlt} className="pr-2 text-main-primary" />
                        <span>1-300-123-123</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;