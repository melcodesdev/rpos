import React from 'react'

const Product = () => {
  return (
    <section className='bg-neutral-50 font-inter flex flex-col py-4'>
      <h1 className='font-medium text-sm mx-auto my-4 px-8'>Simplify, integrate and visualize</h1>

      <h2 className='text-xs mx-auto px-8'><span className='text-fuchsia-500'>All in one</span> easy-to-use portal</h2>

      <img className='mt-8 mx-4 border-4 border-neutral-100' src="/images/display_1.png" alt="Rpos dashboard" />

      <section className='font-inter flex flex-col mt-8'>
        <div className=' bg-fuchsia-50 w-screen'>
          <h1 className='text-base font-medium my-2 px-8'>Dashboard</h1>
          <h2 className='text-justify text-xs my-2 px-8'>Simplify your business reporting and processes in a hassle-free way</h2>
        </div>

        <div>
          <h1 className='text-base font-medium my-2 px-8'>Chart</h1>
          <h2 className='text-justify text-xs my-2 px-8'>Gain deeper insights into your business by visualizing your data</h2>
        </div>

        <div>
          <h1 className='text-base font-medium my-2 px-8'>Multi-user</h1>
          <h2 className='text-justify text-xs my-2 px-8'>Multiple user settings to enable portal accessibility and security</h2>
        </div>
      </section>
    </section>
  )
}

export default Product