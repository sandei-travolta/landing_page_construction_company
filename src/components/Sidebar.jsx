import SocilMediaLink from "./SocialMediaLink";
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useMenu } from "../context/MenuContext";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { pageSections } from "../data/sectoins";
import { useSection } from "../context/SectionsContext";

const NavigationLink = ({ children,  sectionId }) => {
    const {activeSectionId ,setActiveSectionId} = useSection()

    return (
            <li 
                className={`cursor-pointer uppercase hover:bg-main-primary px-4 py-3 transition-colors duration-300 ${activeSectionId === sectionId ? "bg-main-primary" : "bg-main-black"} `}
                onClick={() => { setActiveSectionId(sectionId) }} 
                >
                {children}
            </li>
    )
}


const SideBar = () => {
    const { menu } = useMenu()

    return (
        <div 
            className={`fixed -left-80 top-16 w-80 h-screen bg-main-black z-40 text-white lg:hidden transition-transform duration-300 ${menu ? "translate-x-80" : ""}
          ` }>
            <div className="flex flex-col justify-between h-full">
                <ul className="flex flex-col ">
                {
              pageSections.map((section , ind) => {
                return(
                  <NavigationLink key={ind} sectionId={section.sectionId} >{section.sectionName}</NavigationLink>
                )
              })
            }
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