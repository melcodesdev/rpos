import React from 'react'

const Overview = () => {
    return (
        <section className='min-h-screen font-inter flex flex-col justify-center mt-4 mb-8'>
            <h1 className='text-2xl xs:text-3xl lg:text-5xl font-semibold mx-auto my-8 lg:my-16'>Why <span className='text-fuchsia-500'>Rpos</span>? </h1>

            <div className='m-4 lg:m-8'>
                <img className='w-20 xs:w-36 lg:w-56 rounded-lg mx-auto' src="/images/features_1.jpg" alt="Chef plating a meal" />

                <h3 className='text-sm xs:text-xl lg:text-2xl font-medium text-center my-2 xs:my-6'><span className='font-semibold text-fuchsia-500'>Elevate</span> your business</h3>

                <h4 className='text-xs xs:text-base lg:text-xl text-justify mx-auto w-60 xs:w-80 sm:w-96 lg:w-1/2'>We deliver enhanced efficiency, transparency, and ease at your fingertips, so you can focus on other aspects of your business</h4>

                <hr className='w-1/3 mx-auto my-6 lg:my-10' />
            </div>

            <div className='m-4 lg:m-8'>
                <img className='w-20 xs:w-36 lg:w-56 rounded-lg mx-auto' src="/images/features_2.jpg" alt="Server interacting with diner" />

                <h3 className='text-sm xs:text-xl lg:text-2xl font-medium text-center my-2 xs:my-6'><span className='font-semibold text-fuchsia-500'>Improve</span> your services</h3>

                <h4 className='text-xs xs:text-base lg:text-xl text-justify mx-auto w-60 xs:w-80 sm:w-96 lg:w-1/2'>Manage your schedule, reservations, waiting list, and delivery orders in a timely manner</h4>

                <hr className='w-1/3 mx-auto my-6 lg:my-10' />
            </div>

            <div className='m-4 lg:m-8'>
                <img className='w-20 xs:w-36 lg:w-56 rounded-lg mx-auto' src="/images/features_3.jpg" alt="Cashier and a client in the payment checkout counter" />

                <h3 className='text-sm xs:text-xl lg:text-2xl font-medium text-center my-2 xs:my-6'><span className='font-semibold text-fuchsia-500'>Integrate</span> seamlessly</h3>

                <h4 className='text-xs xs:text-base lg:text-xl text-justify mx-auto w-60 xs:w-80 sm:w-96 lg:w-1/2'>Stay synchronized even during connection downtime, ensure your business activities remain uninterrupted</h4>

                <hr className='w-1/3 mx-auto my-6 lg:my-10' />
            </div>
        </section>
    )
}

export default Overview
