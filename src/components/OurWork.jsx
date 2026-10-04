import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

    const workData = [
        {
            title: 'Scholarship Program',
            description:'Breaking down financial barriers to education by helping students access school fees, uniforms, learning materials, and other essentials they need to stay in school, learn with confidence, and build a brighter future.',
            image: assets.work_mobile_app
        },
        {
            title: 'Holistic Mentorship Program',
            description:'Empowering students to thrive beyond the classroom by nurturing their emotional well-being, personal growth, and confidence. We equip young people with the resilience, self-awareness, and life skills they need to overcome challenges, embrace their potential, and shape a brighter future.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Enterpreneurial Development Program',
            description:'Empowering youth and parents with the skills and tools to build sustainable livelihoods, strengthen their families, and turn financial challenges into opportunities for a brighter, more secure future.',
            image: assets.work_fitness_app
        },
    ]

  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Our Programs' desc='Every child carries a dream of a brighter tomorrow. We help turn those dreams into possibilities by going beyond the classroom; providing education, emotional support, life skills, and nurturing spaces where young people can discover their potential and thrive. By strengthening families and communities alongside them, we create lasting pathways to hope, opportunity, and a future filled with possibility; one life at a time.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {workData.map((work, index) => (
                <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer '>
                    <img src={work.image} alt='' className='w-full rounded-xl'/>
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurWork