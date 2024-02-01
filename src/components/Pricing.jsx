import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        // PRICING PLAN CARDS
        <section id='pricing' className='xl:min-h-screen flex flex-col w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-inter'>
            <h1 className='text-3xl sm:text-6xl text-white font-semibold mx-auto my-8 px-4 pt-8'>Get started today</h1>

            <section className='xl:flex xl:flex-row xl:mt-[7vh] xl:mb-12'>
                <div className='w-60 sm:w-3/5 lg:w-1/2 xl:w-[30vw] flex flex-col text-white mx-auto xl:mt-2 p-2 sm:p-8'>
                    <h2 className='text-xl sm:text-2xl font-bold mx-auto'>Starter</h2>
                    <h1 className='text-4xl sm:text-6xl font-bold mx-auto my-2'>$19</h1>
                    <h4 className='text-xs sm:text-lg mx-auto'>For essential business operations</h4>

                    <Link to="/sign-up" className='w-52 sm:w-80 lg:w-[22rem] xl:w-80 h-8 sm:h-10 bg-white hover:bg-fuchsia-100 rounded-md text-center text-sm sm:text-lg text-black font-medium mx-auto my-2 pt-1'>Get started</Link>

                    <div className='w-52 sm:w-80 lg:w-[22rem] xl:w-80 mx-auto'>
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

                <div className='w-60 sm:w-3/5 lg:w-1/2 xl:w-[30vw] flex flex-col text-white border-4 border-fuchsia-300 rounded-lg lg:rounded-3xl mx-auto my-8 xl:my-0 xl:mt-2 p-2 sm:p-8'>
                    <h2 className='text-xl sm:text-2xl font-bold mx-auto'>Pro</h2>
                    <h1 className='text-4xl sm:text-6xl font-bold mx-auto my-2'>$49</h1>
                    <h4 className='text-xs sm:text-lg mx-auto'>For scaled business management</h4>

                    <Link to="/sign-up" className='w-52 sm:w-80 lg:w-[22rem] xl:w-80 h-8 sm:h-10 bg-fuchsia-400 hover:bg-fuchsia-500 rounded-md text-center text-sm sm:text-lg text-white font-bold mx-auto my-2 pt-1'>Get started</Link>

                    <div className='w-52 sm:w-80 lg:w-[22rem] xl:w-80 mx-auto'>
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

                <div className='w-60 sm:w-3/5 lg:w-1/2 xl:w-[30vw] flex flex-col text-white mx-auto mt-8 xl:mt-2 mb-16 xl:mb-0 p-2 sm:p-8'>
                    <h2 className='text-xl sm:text-2xl font-bold mx-auto'>Enterprise</h2>
                    <h1 className='text-4xl sm:text-6xl font-bold mx-auto my-2'>$99</h1>
                    <h4 className='text-xs sm:text-lg mx-auto'>Elevate your business</h4>

                    <Link to="/sign-up" className='w-52 sm:w-80 lg:w-[22rem] xl:w-80 h-8 sm:h-10 bg-white hover:bg-fuchsia-100 rounded-md text-center text-sm sm:text-lg text-black font-medium mx-auto my-2 pt-1'>Get started</Link>

                    <div className='w-52 sm:w-80 lg:w-[22rem] xl:w-80 mx-auto'>
                        <div className='flex flex-row mt-2'>
                            <img className='w-2.5 sm:w-5 h-2.5 sm:h-5 my-auto' src="/images/checklist.png" alt="Checklist icon" />
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Real time dashboard & analysis</h3>
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
                            <h3 className='text-xs sm:text-lg font-medium ml-2 my-auto'>Unlimited customers database</h3>
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
