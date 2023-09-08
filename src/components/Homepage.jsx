import React from 'react'

const Homepage = () => {
    return (
        <section className='h-screen flex flex-col'>
            <header className='flex flex-row justify-between items-center mt-5 lg:mt-8 mx-4 lg:mx-10'>
                <div className='flex flex-row'>
                    <img className='w-7 lg:w-10 h-7 lg:h-10' src="/images/logo.png" alt="Rpos logo" />
                    <h3 className='text-2xl lg:text-4xl text-fuchsia-500 font-bold font-inter' >Rpos</h3>
                </div>

                <img className='w-10 lg:w-14' src="/images/menu.png" alt="Menu dropdown" />
            </header>

            <section className='font-inter flex flex-col justify-center items-center text-center mx-4 my-auto'>
                <div>
                    <h1 className='font-semibold text-xl xs:text-3xl sm:text-5xl lg:text-7xl'>Restaurant point of sale, <br />
                        <span className='text-fuchsia-500'>redefined</span></h1>

                    <h3 className='w-60 xs:w-80 sm:w-96 lg:w-4/5 text-xs xs:text-sm sm:text-base lg:text-2xl mt-2 mx-auto'>Efficiently manage your restaurant businesses with our versatile all-in-one solution</h3>
                </div>

                <div className='xs:flex xs:flex-col text-base lg:text-lg font-semibold my-8'>
                    <button className='w-60 sm:w-96 h-10 lg:h-12  bg-fuchsia-500 text-white rounded-3xl my-2'>Free 30-days trial</button>
                    <button className='w-60 sm:w-96 h-10 lg:h-12 bg-black text-white rounded-3xl my-2'>Schedule a demo</button>
                </div>
            </section>

            <section className='h-20 xs:h-24 sm:h-32 flex flex-row overflow-x-scroll  bg-neutral-100'>
                <div className='flex flex-row mx-8 my-4 items-center opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/jcybrgr.png" alt="Jcybrgr icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-bungee'>JCYBRGR</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 items-center opacity-70'>
                    <img className='h-7 lg:h-10 border border-black' src="/images/pouletgastronomique.png" alt="Poulet Gastronomique icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-bodoniModa'>Gastronomique</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 items-center opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/kawaiimen.png" alt="Kawaiimen icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-cevicheOne'>kawaiimen</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 items-center opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/vegannation.png" alt="Vegan Nation icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-bebasNeue'>VEGANATION</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 items-center opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/chopstix.png" alt="Chopstix icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-inter'>chopstix</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 pr-4 items-center opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/thouz.png" alt="Thouz icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-caveat'>Thouz</h3>
                </div>
            </section>
        </section>
    )
}

export default Homepage
