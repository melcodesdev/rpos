import React from 'react'

const Footer = () => {
  return (
    <footer className='m-4 xs:mx-16 xl:mt-32 text-xs sm:text-base lg:text-lg opacity-50'>
      <div className='flex flex-row justify-between my-2 sm:my-4 lg:mx-56 xl:mx-96'>
        <h4>Features</h4>
        <h4>Testimonials</h4>
        <h4>Pricing</h4>
        <h4>Contact</h4>
      </div>

      <hr className='xl:mx-28' />

      <div className='flex flex-row justify-between my-2 sm:my-4 lg:my-8 xl:mx-28'>
        <h4>Rpos, Inc. 2023</h4>

        <div className='flex flex-row'>
          <img className='w-5 sm:w-8 h-5 sm:h-8 ml-2 sm:ml-4' src="/images/instagram.png" alt="Instagram icon" />
          <img className='w-5 sm:w-8 h-5 sm:h-8 ml-2 sm:ml-4' src="/images/twitter.png" alt="Twitter icon" />
          <img className='w-5 sm:w-8 h-5 sm:h-8 ml-2 sm:ml-4' src="/images/facebook.png" alt="Facebook icon" />
          <img className='w-5 sm:w-8 h-5 sm:h-8 ml-2 sm:ml-4' src="/images/linkedin.png" alt="Linkedin icon" />
        </div>
      </div>

    </footer>
  )
}

export default Footer
