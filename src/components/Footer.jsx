import React from 'react'

const Footer = () => {
  return (
    <section className='m-4 text-xs opacity-50'>
      <div className='flex flex-row justify-between my-2'>
        <h4>Features</h4>
        <h4>Testimonials</h4>
        <h4>Pricing</h4>
        <h4>Contact</h4>
      </div>

      <hr />

      <div className='flex flex-row justify-between my-2'>
        <h4>Rpos, Inc. 2023</h4>

        <div className='flex flex-row'>
          <img className='w-5 h-5 ml-2' src="/images/instagram.png" alt="Instagram icon" />
          <img className='w-5 h-5 ml-2' src="/images/twitter.png" alt="Twitter icon" />
          <img className='w-5 h-5 ml-2' src="/images/facebook.png" alt="Facebook icon" />
          <img className='w-5 h-5 ml-2' src="/images/linkedin.png" alt="Linkedin icon" />
        </div>
      </div>

    </section>
  )
}

export default Footer