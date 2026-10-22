import React from 'react'
import {company_logos} from '../assets/assets'
import { motion } from "motion/react"

const OurPartners = () => {
  return (
    <motion.div 
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6}}
    viewport={{ once: true }}
     className='flex flex-col items-center gap-6 sm:gap-6 text-center py-20 sm:py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white'>
        <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5}}
        viewport={{ once: true }}
         className='text-2xl sm:text-3xl md:text-6xl xl:text-[70px] font-medium xl:leading-[95px] max-w-5xl'>
        Trusted by Leading {' '}
        <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
          Education Ambassadors
        </span>{' '}
      </motion.h3>
        <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5}}
        viewport={{ once: true }}
         className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Partner with us to support quality education and create lasting impact in Kenyan communities.</motion.p>
       <motion.div
       initial="hidden"
       whileInView="visible"
       transition={{staggerChildren:0.1}}
       viewport={{ once: true }}
        className="flex items-center justify-center flex-wrap gap-10 sm:gap-14 m-4">
  {company_logos.map((logo, index) => (
    <motion.img
    variants={{
      hidden: {opacity:0, y:10},
      visible: {opacity:1, y:0}
    }}
    transition={{duration:0.4}}
      key={index}
      src={logo}
      alt=""
      className="h-12 sm:h-16 md:h-20 max-w-[140px] object-contain dark:drop-shadow-lg transition-all duration-300"
    />
  ))}
</motion.div>
    </motion.div>
  )
}

export default OurPartners
