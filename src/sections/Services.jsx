import React from 'react'
import { faCity , faPenToSquare , faCompassDrafting , faMountainCity} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from '../components/ServiceCard';


const Services = () => {
    return (
        <section className='pt-16 ' id='services'>
            <section className="lg:container lg:max-w-screen-xl">
                <div>
                    <h2 className="uppercase text-main-primary font-medium pb-4 text-xl text-center lg:text-start" style={{ letterSpacing: '7px' }}>our services</h2>
                    <h3 className="text-3xl font-bold pb-7 capitalize text-center lg:text-start">construction <br /> solutions</h3>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <div className='lg:w-1/2 h-80 lg:h-auto'
                        style={{
                            backgroundImage: "url('../images/engineer.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: 'center'
                        }}
                    >
                
                    </div>
                    <div className='lg:w-1/2 flex flex-col mx-5 lg:mx-0'>
                        <div className='flex justify-center items-center px-7 py-15 ' style={{minHeight: "250px"}}>
                            <p className='text-lg text-slate-600 py-10'>The first thing we do is meeting with our clients and talk through their goals on a future project. During this meeting, feel free to communicate your ideas and ask lots of questions. This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio.</p>
                        </div>
                        <div className='bg-main-primary flex justify-center items-center px-7 py-15' style={{minHeight: "250px"}}>
                            <p className='text-2xl font-bold text-white py-10'>We focus on the problem, the question and the solution. And we always think ahead.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap '>
                 <ServiceCard 
                        heading="construction management"
                        text="Our project management is essential. We're using the most time and iterations efficient life cycles methods for that to complete all the projects on time."
                        icon={faCity}
                        />
                 <ServiceCard 
                        heading="construction services"
                        text="Our customers love the pace/quality tempo that we show during each of the principal construction processes! We're comfortable with any idea of our clients."
                        icon={faMountainCity}
                        />
                 <ServiceCard 
                        heading="Design-Build"
                        text="If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorter."
                        icon={faCompassDrafting}
                        />
                 <ServiceCard 
                        heading="general contracting"
                        text="We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our construction projects!"
                        icon={faPenToSquare}
                        />
                </div>

            </section>
        </section>
    )
}

export default Services