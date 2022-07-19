import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocilMediaLink = ({ href , icon }) => {
    return (
      <a href={href} className="hover:text-main-primary p-2 text-lg"><FontAwesomeIcon icon={icon} /></a>
    )
  }

  export default SocilMediaLink