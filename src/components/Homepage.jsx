import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeModal = () => {
        setIsMenuOpen(false);
    };

    return (
        // Header + Hero + Client logo list section
        <section className='h-screen flex flex-col'>
            {/* --Left side header */}
            <header className='flex flex-row justify-between items-center mt-5 lg:mt-8 mx-4 lg:mx-10 relative'>
                <div className='flex flex-row'>
                    <img className='cursor-pointer w-7 lg:w-10 h-7 lg:h-10' src="/images/logo.png" alt="Rpos logo" onClick={handleRefresh} />

                    <h3 className='cursor-pointer text-2xl lg:text-4xl text-fuchsia-500 font-bold font-inter' onClick={handleRefresh}>Rpos</h3>

                    <nav className='hidden xl:flex font-inter text-lg mx-10 mt-2'>
                        <a href='#features' className='mr-8 my-auto hover:underline'>Features</a>
                        <a href='#testimonials' className='mr-8 my-auto hover:underline'>Testimonials</a>
                        <a href='#pricing' className='mr-8 my-auto hover:underline'>Pricing</a>
                    </nav>
                </div>

                {/* --Dropdown menu and header nav modal on mobile devices */}
                <div className='relative'>
                    <button className='xl:hidden' onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <img className='w-6 lg:w-8' src="/images/x.png" alt="Close dropdown" onClick={closeModal} />
                        ) : (
                            <img className='w-6 lg:w-8' src="/images/menu.png" alt="Menu dropdown" />
                        )}
                    </button>

                    {isMenuOpen && (
                        <div className='menu-backdrop fixed inset-0 z-40 opacity-50 bg-black' onClick={closeModal}></div>
                    )}

                    {isMenuOpen && (
                        <div className='menu-modal absolute top-14 right-0 z-50 rounded-lg shadow-xl bg-white p-6'>
                            <nav className='font-inter text-lg'>
                                <a href='#features' className='block my-4 hover:underline' onClick={toggleMenu}>Features</a>
                                <a href='#testimonials' className='block my-4 hover:underline' onClick={toggleMenu}>Testimonials</a>
                                <a href='#pricing' className='block my-4 hover:underline' onClick={toggleMenu}>Pricing</a>
                            </nav>

                            <nav className='xl:flex font-inter text-lg'>
                                <Link to="/sign-in" className='block my-4 hover:underline' onClick={toggleMenu}>
                                    Sign in
                                </Link>
                                <Link to="/sign-up" className='my-auto font-semibold bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-4 py-2 rounded-3xl' onClick={toggleMenu}>
                                    Sign up
                                </Link>
                            </nav>
                        </div>
                    )}
                </div>
                
                {/* --Right side header */}
                <nav className='hidden xl:flex xl:flex-row font-inter text-lg mt-2'>
                    <Link to="/sign-in" className='mr-8 my-auto hover:underline'>
                        Sign in
                    </Link>

                    <Link to="/sign-up" className='my-auto font-semibold bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-4 py-2 rounded-3xl'>
                        Sign up
                    </Link>
                </nav>
            </header>

            {/* Hero section */}
            <section className='font-inter flex flex-col justify-center items-center text-center mx-4 my-auto'>
                <div>
                    <h1 className='font-semibold text-xl xs:text-3xl sm:text-5xl lg:text-7xl mt-8'>Restaurant point of sale, <br />
                        <span className='text-fuchsia-500'>redefined</span></h1>

                    <h3 className='w-60 xs:w-80 sm:w-96 lg:w-4/5 text-xs xs:text-sm sm:text-base lg:text-2xl mt-2 xl:mt-4 mx-auto'>Efficiently manage your restaurant businesses with our all-in-one solution</h3>
                </div>

                <div className='xs:flex xs:flex-col xl:flex-row text-base lg:text-lg font-semibold my-8'>
                    <Link to="/sign-up">
                        <button className='w-60 sm:w-96 xl:w-64 h-10 lg:h-12 text-white bg-fuchsia-500 hover:bg-fuchsia-600 rounded-3xl my-2 xl:mx-4'>Free 30-days trial</button>
                    </Link>

                    <Link to="/sign-up">
                        <button className='w-60 sm:w-96 xl:w-64 h-10 lg:h-12 text-white bg-black hover:bg-neutral-600 rounded-3xl my-2 xl:mx-4'>Schedule a demo</button>
                    </Link>
                </div>
            </section>

            {/* Clients logo list */}
            <section className='flex flex-row w-screen h-20 xs:h-24 sm:h-32 overflow-x-scroll xl:overflow-x-hidden bg-neutral-100'>
                <div className='flex flex-row mx-8 my-4 items-center xl:mx-auto opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/jcybrgr.png" alt="Jcybrgr icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-bungee'>JCYBRGR</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 items-center xl:mx-auto opacity-70'>
                    <img className='h-7 lg:h-10 border border-black' src="/images/pouletgastronomique.png" alt="Poulet Gastronomique icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-bodoniModa'>Gastronomique</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 items-center xl:mx-auto opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/kawaiimen.png" alt="Kawaiimen icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-cevicheOne'>kawaiimen</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 items-center xl:mx-auto opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/vegannation.png" alt="Vegan Nation icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-bebasNeue'>VEGANATION</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 items-center xl:mx-auto opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/chopstix.png" alt="Chopstix icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-inter'>chopstix</h3>
                </div>

                <div className='flex flex-row mx-8 my-4 pr-4 items-center xl:mx-auto opacity-70'>
                    <img className='h-7 lg:h-10' src="/images/thouz.png" alt="Thouz icon" />
                    <h3 className='mx-4 text-lg md:text-2xl font-bold font-caveat'>Thouz</h3>
                </div>
            </section>
        </section>
    )
}

export default Homepage
