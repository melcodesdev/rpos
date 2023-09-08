import React from 'react'

const Product = () => {
  return (
    <section className='bg-neutral-50 font-inter flex flex-col py-4 lg:py-8'>
      <h1 className='font-medium text-sm xs:text-xl sm:text-4xl mx-auto my-4 px-8'>Simplify, integrate and visualize</h1>

      <h2 className='text-xs xs:text-sm sm:text-xl mx-auto px-8'><span className='text-fuchsia-500'>All in one</span> easy-to-use portal</h2>

      <img className='mt-8 mx-4 xs:mx-24 lg:mx-48 border-4 border-neutral-100' src="/images/display_1.png" alt="Rpos dashboard" />

      <section className='font-inter flex flex-col my-8'>
        <div className=' bg-fuchsia-50 w-screen py-4'>
          <h1 className='text-base xs:text-base sm:text-3xl font-medium sm:my-4 px-8 xs:px-24 lg:px-48'>Dashboard</h1>
          <h2 className='text-justify text-xs xs:text-sm sm:text-2xl sm:my-4 px-8 xs:px-24 lg:px-48'>Simplify your business reporting and processes in a hassle-free way</h2>
        </div>

        <div className='py-4'>
          <h1 className='text-base xs:text-base sm:text-3xl font-medium sm:my-4 px-8 xs:px-24 lg:px-48'>Chart</h1>
          <h2 className='text-justify text-xs xs:text-sm sm:text-2xl sm:my-4 px-8 xs:px-24 lg:px-48'>Gain deeper insights into your business by visualizing your data</h2>
        </div>

        <div className='py-4'>
          <h1 className='text-base xs:text-base sm:text-3xl font-medium sm:my-4 px-8 xs:px-24 lg:px-48'>Multi-user</h1>
          <h2 className='text-justify text-xs xs:text-sm sm:text-2xl sm:my-4 px-8 xs:px-24 lg:px-48'>Multiple user settings to enable portal accessibility and security</h2>
        </div>
      </section>
    </section>
  )
}

export default Product
