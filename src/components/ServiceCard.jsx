import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServiceCard = ({heading , text , icon}) => {
    return(
        <div className='group md:w-1/2 p-10 lg:p-20  hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center lg:block'>
            <FontAwesomeIcon icon={icon} className="text-2xl" />
            <h2 className='capitalize font-bold text-xl pt-1 pb-3 transition-colors duration-300 text-main-primary lg:text-inherit lg:group-hover:text-main-primary'>{heading}</h2>
            <p className='text-slate-600 text-lg'>{text}</p>
        </div>
    )
}

export default ServiceCard