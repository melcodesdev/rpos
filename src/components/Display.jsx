import React from 'react'

const Display = () => {
  return (
    <section className='font-inter flex flex-col min-h-screen'>
      <h1 className='font-medium text-sm mx-auto my-4 px-4'>Simplify, integrate and visualize</h1>

      <h2 className='text-xs mx-auto px-4'>All in one easy-to-use portal</h2>

      <img className='mt-8 mx-4 border border-black' src="/images/display_1.png" alt="Rpos dashboard" />

      <section className='font-inter flex flex-col mt-8'>
        <div className='bg-fuchsia-50 w-screen'>
          <h1 className='text-base font-medium mt-4 px-4'>Dashboard</h1>
          <h2 className='text-justify text-xs my-2 px-4'>Simplify your business reporting and processes in a hassle-free way</h2>
        </div>

        <div>
          <h1 className='text-base font-medium mt-4 px-4'>Chart</h1>
          <h2 className='text-justify text-xs my-2 px-4'>Gain deeper insights into your business by visualizing your data</h2>
        </div>

        <div>
          <h1 className='text-base font-medium mt-4 px-4'>Multi-user</h1>
          <h2 className='text-justify text-xs my-2 px-4'>Multiple user settings to enable portal accessibility and security</h2>
        </div>
      </section>
    </section>
  )
}

export default Display