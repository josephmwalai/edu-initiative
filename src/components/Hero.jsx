import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  const handleDonateClick = (e) => {
    // Add any custom logic here (analytics, tracking, etc.)
    console.log('Donate Now clicked')
    // Optional: e.preventDefault() if you want to handle navigation yourself
  }

  const handleSponsorClick = (e) => {
    // Add any custom logic here (analytics, tracking, etc.)
    console.log('Sponsor a Child clicked')
    // Optional: e.preventDefault() if you want to handle navigation yourself
  }

  return (
    <div id="hero" className='flex flex-col items-center gap-6 sm:gap-6 text-center py-20 sm:py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white'>
      <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className='text-xs font-medium'>Trusted by thousands of Education advocates</p>
      </div>

      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>
        Lifting Communities Through{' '}
        <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
          Education
        </span>{' '}
        Empowerment.
      </h1>

      <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
        Transforming education into a force for empowerment that lifts both students and the wider community. Through Holistic Wellness Mentorship, Sponsorship, and Entrepreneurship Development, we open pathways for youth and families to lead and thrive.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 mb-6">
        <a
          href="/donate"
          onClick={handleDonateClick}
          className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-full border-2 border-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          DONATE NOW
        </a>

        <a
          href="/sponsor-a-child"
          onClick={handleSponsorClick}
          className="bg-yellow-400 hover:bg-yellow-300 text-[#1e40af] font-semibold text-sm sm:text-base px-8 py-3 rounded-full border-2 border-[#1e40af] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          SPONSOR A CHILD
        </a>
      </div>

      <div className='relative'>
        <img src={assets.hero_img} alt="" className="w-full max-w-6xl" />
        <img src={assets.bgImage1} alt="" className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden" />
      </div>
    </div>
  )
}

export default Hero