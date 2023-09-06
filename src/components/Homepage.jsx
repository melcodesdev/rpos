import React from 'react'

const Homepage = () => {
    return (
        <section className='min-h-screen flex flex-col'>
            <header className='flex flex-row justify-between items-center mt-5 mx-4'>
                <div className='flex flex-row'>
                    <img className='w-7 h-7' src="/images/logo.png" alt="Rpos logo" />
                    <h3 className='text-2xl text-fuchsia-500 font-bold font-inter' >Rpos</h3>
                </div>

                <img className='w-10' src="/images/menu.png" alt="Menu dropdown" />
            </header>

            <section className='font-inter flex flex-col justify-center items-center text-center mx-4 my-auto'>
                <div>
                    <h1 className='font-semibold text-xl'>Restaurant point of sale, <br />
                        <span className='text-fuchsia-500'>redefined</span></h1>

                    <h3 className='w-60 text-xs mt-2'>Efficiently manage your restaurant businesses with our versatile all-in-one solution, tailored to meet your every need</h3>
                </div>

                <div className='text-base font-semibold my-8'>
                    <button className='w-full h-10  bg-fuchsia-500 text-white rounded-3xl my-2'>Free 30-days trial</button>
                    <button className='w-full h-10 bg-black text-white rounded-3xl my-2'>Schedule a demo</button>
                </div>
            </section>
        </section>
    )
}

export default Homepage