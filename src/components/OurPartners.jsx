import React from 'react'
import {company_logos} from '../assets/assets'

const OurPartners = () => {
  return (
    <div className='flex flex-col items-center gap-6 sm:gap-6 text-center py-20 sm:py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white'>
        <h1 className='text-2xl sm:text-3xl md:text-6xl xl:text-[70px] font-medium xl:leading-[95px] max-w-5xl'>
        Trusted by Leading {' '}
        <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
          Education Ambassadors
        </span>{' '}
      </h1>
        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Partner with us to support quality education and create lasting impact in Kenyan communities.</p>
       <div className="flex items-center justify-center flex-wrap gap-10 sm:gap-14 m-4">
  {company_logos.map((logo, index) => (
    <img
      key={index}
      src={logo}
      alt=""
      className="h-12 sm:h-16 md:h-20 max-w-[140px] object-contain dark:drop-shadow-lg transition-all duration-300"
    />
  ))}
</div>
    </div>
  )
}

export default OurPartners
