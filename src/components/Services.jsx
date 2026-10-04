import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We help you reach your target audience through effective advertising strategies.',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We help you promote your products and services effectively.',
            icon: assets.marketing_icon
        },
        {
            title: 'Website Development',
            description: 'We help you create a professional and functional website that represents your brand.',
            icon: assets.content_icon
        },
        {
            title: 'Social Media Management',
            description: 'We help you manage your social media presence and engage with your audience effectively.',
            icon: assets.social_icon
        },
    ]

    return (
        <div 
            id='services' 
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
        >
            <img 
                src={assets.bgImage2} 
                alt="" 
                className='absolute -top-110 -left-70 -z-1 dark:hidden'
            />

            <Title 
                title='How can we help?' 
                desc='We offer a wide range of services to help you achieve your business goals. Our team of experts is dedicated to providing you with the best solutions for your needs.'
            />

            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index)=>(
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>

        </div>
    )
}

export default Services