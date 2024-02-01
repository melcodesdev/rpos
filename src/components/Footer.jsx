import React from 'react'

const Footer = () => {
  return (
    <footer className='m-4 xs:mx-16 xl:mt-32 text-xs sm:text-base lg:text-lg opacity-50'>
      <nav className='flex flex-row justify-between my-2 sm:my-4 lg:mx-56 xl:mx-96'>
        <a href='#features' className='hover:underline'>Features</a>
        <a href='#testimonials' className='hover:underline'>Testimonials</a>
        <a href='#pricing' className='hover:underline'>Pricing</a>
        <a href='mailto:melcodes.dev@gmail.com' className='hover:underline'>Contact</a>
      </nav>

      <hr className='xl:mx-28' />

      <div className='flex flex-row justify-between my-2 sm:my-4 lg:my-8 xl:mx-28'>
        <h4>Rpos, Inc. 2023</h4>

        <nav className='flex flex-row'>
          <a href="https://www.instagram.com/" target="_blank"><img className='w-5 sm:w-8 h-5 sm:h-8 ml-2 sm:ml-4 hover:opacity-75' src="/images/instagram.png" alt="Instagram icon" /></a>

          <a href="https://www.twitter.com/" target="_blank"><img className='w-5 sm:w-8 h-5 sm:h-8 ml-2 sm:ml-4 hover:opacity-75' src="/images/twitter.png" alt="Twitter icon" /></a>

          <a href="https://www.facebook.com/" target="_blank"><img className='w-5 sm:w-8 h-5 sm:h-8 ml-2 sm:ml-4 hover:opacity-75' src="/images/facebook.png" alt="Facebook icon" /></a>

          <a href="https://www.linkedin.com/" target="_blank"><img className='w-5 sm:w-8 h-5 sm:h-8 ml-2 sm:ml-4 hover:opacity-75' src="/images/linkedin.png" alt="Linkedin icon" /></a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
