import React from 'react'
import SocilMediaLink from '../components/SocialMediaLink'
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <footer className='bg-gray-900 flex flex-col justify-center items-center py-10 ' style={{ backgroundColor: '#212122' }}>

      <p className='text-center text-lg text-white tracking-widest'>cityscape@copyright</p>
      <div className=" flex justify-center items-center text-main-primary lg:text-white">
        <SocilMediaLink href="" icon={faTwitter} />
        <SocilMediaLink href="" icon={faFacebookF} />
        <SocilMediaLink href="" icon={faInstagram} />
      </div>

    </footer>
  )
}

export default Footer