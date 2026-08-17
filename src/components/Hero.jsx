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

      <h1 className='text-2xl sm:text-3xl md:text-6xl xl:text-[70px] font-medium xl:leading-[95px] max-w-5xl'>
        Lifting Communities Through{' '}
        <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
          Education
        </span>{' '}
        Empowerment.
      </h1>

      <span className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
          Why We Exist
        </span>
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


// import React, { useState } from 'react'
// import assets from '../assets/assets'

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const slides = [
//     {
//       id: 1,
//       title: "EDU-INITIATIVE KENYA",
//       subtitle: "Lifting Communities Through Education Empowerment",
//       description: null,
//       showButtons: true,
//       // You can add different background images later
//       // bgImage: assets.hero_img1
//     },
//     {
//       id: 2,
//       title: "Ensuring equal and quality education access for all children",
//       subtitle: null,
//       description: "We support education that goes beyond the traditional system- Fostering critical thinking, curiosity and creativity to help children express themselves and solve critical challenges in the dynamic and ever-changing world.",
//       showButtons: false,
//     },
//     {
//       id: 3,
//       title: "It's a Collective Responsibility",
//       subtitle: null,
//       description: "Calling all stakeholders to equip every child with the creativity, critical thinking, and resilience needed to unlock a future full of possibilities",
//       showButtons: false,
//     }
//   ]

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
//   }

//   const handleDonateClick = () => {
//     console.log('Donate Now clicked')
//   }

//   const handleSponsorClick = () => {
//     console.log('Sponsor a Child clicked')
//   }

//   return (
//     <div className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img 
//           src={assets.hero_img} 
//           alt="Hero Background" 
//           className="w-full h-full object-cover"
//         />
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
        
//         {/* Slide Content */}
//         <div className="max-w-5xl mx-auto text-white transition-all duration-500">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
//             {slides[currentSlide].title}
//           </h1>

//           {slides[currentSlide].subtitle && (
//             <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 text-white/90">
//               {slides[currentSlide].subtitle}
//             </p>
//           )}

//           {slides[currentSlide].description && (
//             <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/85 leading-relaxed">
//               {slides[currentSlide].description}
//             </p>
//           )}

//           {/* Buttons - only on first slide */}
//           {slides[currentSlide].showButtons && (
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
//               <a
//                 href="/donate"
//                 onClick={handleDonateClick}
//                 className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold px-8 py-3.5 rounded-full border-2 border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 DONATE NOW
//               </a>

//               <a
//                 href="/sponsor-a-child"
//                 onClick={handleSponsorClick}
//                 className="bg-yellow-400 hover:bg-yellow-300 text-[#1e40af] font-semibold px-8 py-3.5 rounded-full border-2 border-[#1e40af] transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 SPONSOR A CHILD
//               </a>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-all"
//         aria-label="Previous slide"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-all"
//         aria-label="Next slide"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Dots indicator (optional but nice) */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2.5 h-2.5 rounded-full transition-all ${
//               currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Hero