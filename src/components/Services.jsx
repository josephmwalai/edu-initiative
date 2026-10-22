
import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const Services = () => {

    const servicesData = [
        {
            title: 'Individual Supporters',
            description: [
                'Monthly giving programs that provide steady support',
                'Sponsor a student’s full educational journey',
                'Fund specific programs like mentorship or wellness',
                'Donate your professional skills and expertise'
            ],
            icon: assets.individual
        },
        {
            title: 'Corporate Partners',
            description: [
                'Employee volunteer programs and team building',
                'Skills-based volunteering in your area of expertise',
                'Sponsored programs with your company’s name',
                'Joint community events and initiatives'
            ],
            icon: assets.cooperate
        },
        {
            title: 'Educational Institutions',
            description: [
                'Support a student’s education through full or partial sponsorship',
                'Partner with us on school events, forums, or creative workshops',
                'Share your skills: mentorship, mental health, media, or education',
                'Collaborate on parent empowerment or community outreach sessions'
            ],
            icon: assets.university
        },
        {
            title: 'Community Organizations',
            description: [
                'Joint programming and resource sharing',
                'Referral networks for students and families',
                'Collaborative grant applications and funding',
                'Shared best practices and learning exchanges'
            ],
            icon: assets.community_icon
        },
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            id='services'
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
        >
            <img
                src={assets.bgImage2}
                alt=""
                className='absolute -top-110 -left-70 -z-1 dark:hidden'
            />

            <Title
                title="Ways to Partner With Us"
                desc="Whether you’re an individual, business, school, or organization, you can help make education accessible and transform lives. Partner with Edu Initiative Kenya to empower young people, strengthen families, and build thriving communities."
            />

            <div className="mt-6 text-center">
                <p className="text-lg font-semibold">
                    Together, We Can Shape Brighter Futures
                </p>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Be the reason a brighter future begins. Join our mission today
                    and turn your commitment into lasting impact.
                </p>
            </div>

            <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        index={index}
                    />
                ))}
            </div>

        </motion.div>
    )
}

export default Services
