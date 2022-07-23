import React, { useRef } from 'react'
import SocilMediaLink from '../components/SocialMediaLink'
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const footerRef = useRef()  


  return (
    <footer ref={footerRef} className='bg-gray-900 flex  justify-center items-center py-3 ' style={{ backgroundColor: '#212122' }}>
      <div className=" flex justify-center items-center text-main-primary lg:text-white">
        <SocilMediaLink href="" icon={faTwitter} />
        <SocilMediaLink href="" icon={faFacebookF} />
        <SocilMediaLink href="" icon={faInstagram} />
      </div>

    </footer>
  )
}

export default Footer