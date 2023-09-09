import React from 'react'

const Pricing = () => {
    return (
        <section className='xl:h-screen flex flex-col w-screen bg-gradient-to-b from-fuchsia-500 to-rose-400 font-inter'>
            <h1 className='text-xl sm:text-4xl text-white font-semibold mx-auto mt-8 sm:mt-16 px-4'>Sold? Get started today</h1>
            <h3 className='text-xs sm:text-lg  text-white font-medium mx-auto mb-10 px-4'>Best offers, reasonable prices</h3>

            <section className='xl:flex xl:flex-row xl:mb-12'>
                <div className='w-60 sm:w-3/5 lg:w-1/2 xl:w-[30vw] flex flex-col text-white border-2 border-white rounded-lg lg:rounded-3xl mx-auto xl:mt-2 p-2 sm:p-8'>
                    <h2 className='text-xl sm:text-2xl font-bold mx-auto'>Starter</h2>
                    <h1 className='text-4xl sm:text-6xl font-bold mx-auto my-2'>$19</h1>
                    <h4 className='text-xs sm:text-lg mx-auto'>For essential business operations</h4>

                    <button className='w-52 sm:w-80 lg:w-96 xl:w-80 h-8 sm:h-10 bg-white rounded-md text-sm sm:text-lg text-black font-medium mx-auto my-2'>Get started</button>

                    <div className='w-52 sm:w-80 lg:w-96 xl:w-80 mx-auto'>
                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Real time dashboard</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Inventory management</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Up to 5 users per outlet</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Digital payment integration</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>1000 customers list database</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>24/7 customer support</h3>
                        </div>
                    </div>
                </div>

                <div className='w-60 sm:w-3/5 lg:w-1/2 xl:w-[30vw] flex flex-col text-white border-4 border-white rounded-lg lg:rounded-3xl mx-auto my-8 xl:my-0 xl:mt-2 p-2 sm:p-8'>
                    <h2 className='text-xl sm:text-2xl font-bold mx-auto'>Pro</h2>
                    <h1 className='text-4xl font-bold mx-auto my-2'>$49</h1>
                    <h4 className='text-xs sm:text-lg mx-auto'>For scaled business management</h4>

                    <button className='w-52 sm:w-80 lg:w-96 xl:w-80 h-8 sm:h-10 bg-white rounded-md text-sm sm:text-lg text-black font-medium mx-auto my-2'>Get started</button>

                    <div className='w-52 sm:w-80 lg:w-96 xl:w-80 mx-auto'>
                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Real time dashboard and report</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Inventory management</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Up to 10 users per outlet</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Digital multi-payment integration</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>10000 customers list database</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Table management</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>24/7 customer support</h3>
                        </div>
                    </div>
                </div>

                <div className='w-60 sm:w-3/5 lg:w-1/2 xl:w-[30vw] flex flex-col text-white border-2 border-white rounded-lg lg:rounded-3xl mx-auto mt-8 xl:mt-2 mb-16 xl:mb-0 p-2 sm:p-8'>
                    <h2 className='text-xl sm:text-2xl font-bold mx-auto'>Enterprise</h2>
                    <h1 className='text-4xl font-bold mx-auto my-2'>$99</h1>
                    <h4 className='text-xs sm:text-lg mx-auto'>Elevate your business to a higher level</h4>

                    <button className='w-52 sm:w-80 lg:w-96 xl:w-80 h-8 sm:h-10 bg-white rounded-md text-sm sm:text-lg text-black font-medium mx-auto my-2'>Get started</button>

                    <div className='w-52 sm:w-80 lg:w-96 xl:w-80 mx-auto'>
                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Real time dashboard and analysis</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Inventory management</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Up to 50 users per outlet</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Digital multi-payment integration</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Unlimited customers list database</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Table management</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Loyalty program and membership</h3>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>24/7 customer support</h3>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Pricing
