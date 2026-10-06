import React from 'react'
import assets from '../assets/assets'

const Footer = (theme) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 '>
      {/* footer top */}
      <div className='flex justify-between lg:items-center max-l:flex-col gap-10'>
        <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
            <img
          src={theme === "dark" ? assets.edu_ico : assets.edu_ico}
          alt=""
          className="w-20 sm:w-25 rounded-full"
        />
            <p className='max-w-md'>Edu Initiative Kenya is dedicated to empowering young lives with essential resources, mentorship, and opportunities to build brighter futures.</p>

            <ul className='flex gap-8'>
                <li>
                    <a className='hover:text-primary' href='#hero'>Home</a>
                </li>
                <li>
                    <a className='hover:text-primary' href='#services'>Services</a>
                </li>
                <li>
                    <a className='hover:text-primary' href='#our-work'>Our Work</a>
                </li>
                <li>
                    <a className='hover:text-primary' href='#contact-us'>Contact Us</a>
                </li>
            </ul>
        </div>
        <div className='text-gray-600 dark:text-gray-400'>
            <h3 className='font-semibold'>Subscribe to Our Newsletter</h3>
            <p className='text-sm mt-2 mb-6'>Stay updated with our latest news and initiatives.</p>
            <div className='flex gap-2 text-sm'>
                <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'/>
                <button className='bg-primary text-white rounded px-6'>Subscribe</button>
            </div>
        </div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6'/>

      {/* footer bottom */}
      <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p>Copyright 2026 &#169; Edu Initiative Kenya. All rights reserved.</p>

        <div className='flex items-center justify-between gap-4'>
            <a href="https://www.facebook.com/profile.php?id=61569470385166" target="_blank" rel="noopener noreferrer">
                <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://x.com/EducationEI" target="_blank" rel="noopener noreferrer">
                <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="https://www.instagram.com/eduinitiativekenya/" target="_blank" rel="noopener noreferrer">
                <img src={assets.instagram_icon} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/edu-initiative-kenya/" target="_blank" rel="noopener noreferrer">
                <img src={assets.linkedin_icon} alt="" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
