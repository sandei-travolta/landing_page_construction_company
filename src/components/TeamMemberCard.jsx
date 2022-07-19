import React from 'react'

const TeamMemberCard = ({name , title , image}) => {
    return <div className='card w-full relative md:row-span-3 h-450  md:h-full '
                style={{
                    'background-image': `url('../images/${image}')`,
                    'background-position': 'center',
                    'background-size': 'cover'
                }}
    >
                <div className='absolute left-0 bottom-0 right-10 -mb-1 -ml-1 bg-white px-7 py-5'>
                    <h3 className='text-black font-bold capitalize text-lg'>{name}</h3>
                    <h4 className='text-slate-600 uppercase  tracking-widest'>{title}</h4>
                </div>
    </div>
}


export default TeamMemberCard
