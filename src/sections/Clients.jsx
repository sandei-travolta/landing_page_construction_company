import React from 'react'

const Clients = () => {
  return (
    <section className='w-full bg-main-black h-fit py-32 mt-16 flex flex-col items-center justify-center '>
        <div className='pb-10'>
        <h2 className="uppercase text-main-primary font-medium pb-4 text-xl text-center " style={{letterSpacing:'7px'}}>our clients</h2>
                <h3 className="text-4xl font-bold pb-7 text-white text-center capitalize">we work worldwide</h3>
        </div>
        <img src='/images/map-img.png' alt='' />

  </section>
    )
}

export default Clients