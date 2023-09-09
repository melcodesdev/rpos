import React from 'react'

const Overview = () => {
    return (
        <section className='min-h-screen font-inter flex flex-col justify-center mt-4 mb-8'>
            <h1 className='text-2xl xs:text-3xl lg:text-5xl font-semibold mx-auto my-8 lg:my-16 xl:hidden'>Why <span className='text-fuchsia-500'>Rpos</span>? </h1>

            <section className='xl:flex xl:flex-row xl:overflow-x-scroll'>
                <div className='xl:flex-1 m-4 lg:m-8 xl:m-16 xl:mx-auto xl:px-[15vw] xl:flex xl:flex-row'>
                    <img className='w-20 xs:w-36 lg:w-56 xl:w-auto xl:h-[80vh] rounded-lg mx-auto xl:mx-0 xl:mr-16' src="/images/features_1.jpg" alt="Chef plating a meal" />

                    <div className='xl:mr-[20vw] xl:my-auto'>
                        <h3 className='text-sm xs:text-xl lg:text-2xl font-medium text-center xl:text-left my-2 xs:my-6'><span className='font-semibold text-fuchsia-500'>Elevate</span> your business</h3>

                        <h4 className='text-xs xs:text-base lg:text-xl text-justify mx-auto w-60 xs:w-80 sm:w-96 lg:w-[30rem]'>We deliver enhanced efficiency, transparency, and ease at your fingertips, so you can focus on other aspects of your business</h4>
                    </div>

                    <hr className='w-1/3 mx-auto my-6 lg:my-10 xl:hidden' />
                </div>

                <div className='xl:flex-1 m-4 lg:m-8 xl:m-16 xl:mx-auto xl:xl:px-[20vw] xl:flex xl:flex-row'>
                    <img className='w-20 xs:w-36 lg:w-56 xl:w-auto xl:h-[80vh] rounded-lg mx-auto xl:mx-0 xl:mr-16' src="/images/features_2.jpg" alt="Server taking a customer's order" />

                    <div className='xl:mr-[20vw] xl:my-auto'>
                        <h3 className='text-sm xs:text-xl lg:text-2xl font-medium text-center xl:text-left my-2 xs:my-6'><span className='font-semibold text-fuchsia-500'>Improve</span> your services</h3>

                        <h4 className='text-xs xs:text-base lg:text-xl text-justify mx-auto w-60 xs:w-80 sm:w-96 lg:w-[30rem]'>Manage your schedule, reservations, waiting list, and delivery orders in a timely manner</h4>
                    </div>

                    <hr className='w-1/3 mx-auto my-6 lg:my-10 xl:hidden' />
                </div>

                <div className='xl:flex-1 m-4 lg:m-8 xl:m-16 xl:mx-auto xl:xl:px-[20vw] xl:flex xl:flex-row'>
                    <img className='w-20 xs:w-36 lg:w-56 xl:w-auto xl:h-[80vh] rounded-lg mx-auto xl:mx-0 xl:mr-16' src="/images/features_3.jpg" alt="Cashier and customers at the payment checkout" />

                    <div className='xl:mr-[25vw] xl:my-auto'>
                        <h3 className='text-sm xs:text-xl lg:text-2xl font-medium text-center xl:text-left my-2 xs:my-6'><span className='font-semibold text-fuchsia-500'>Integrate</span> seamlessly</h3>

                        <h4 className='text-xs xs:text-base lg:text-xl text-justify mx-auto w-60 xs:w-80 sm:w-96 lg:w-[30rem]'>Stay synchronized even during connection downtime, ensure your business activities remain uninterrupted</h4>
                    </div>

                    <hr className='w-1/3 mx-auto my-6 lg:my-10 xl:hidden' />
                </div>
            </section>
        </section>
    )
}

export default Overview
