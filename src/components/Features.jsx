import React from 'react'

const Features = () => {
    return (
        <section className='min-h-screen font-inter flex flex-col justify-center my-2'>
            <div className='mx-4 my-4'>
                <img className='w-20 rounded-lg mx-auto' src="/images/features_1.jpg" alt="Chef plating a meal" />

                <h3 className='text-sm font-medium text-center my-2'><span className='font-semibold text-fuchsia-500'>Elevate</span> your business</h3>

                <h4 className='text-xs text-justify mx-auto w-60'>We deliver enhanced efficiency, transparency, and ease at your fingertips, so you can focus on other aspects of your business</h4>
            </div>

            <div className='mx-4 my-4'>
                <img className='w-20 rounded-lg mx-auto' src="/images/features_2.jpg" alt="Server interacting with diner" />

                <h3 className='text-sm font-medium text-center my-2'><span className='font-semibold text-fuchsia-500'>Improve</span> your services</h3>

                <h4 className='text-xs text-justify mx-auto w-60'>Manage your schedule, reservations, waiting list, and delivery orders in a timely manner</h4>
            </div>

            <div className='mx-4 my-4'>
                <img className='w-20 rounded-lg mx-auto' src="/images/features_3.jpg" alt="Cashier and a client in the payment checkout counter" />

                <h3 className='text-sm font-medium text-center my-2'><span className='font-semibold text-fuchsia-500'>Integrate</span> seamlessly</h3>

                <h4 className='text-xs text-justify mx-auto w-60'>Stay synchronized even during connection downtime, ensure your business activities remain uninterrupted</h4>
            </div>
        </section>
    )
}

export default Features