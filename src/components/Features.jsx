import React, { useState } from 'react';

const Features = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  const handleDivHover = (index) => {
    setActiveDiv(index);
  };

  const handleDivLeave = () => {
    setActiveDiv(0);
  };

  const images = [
    '/images/display_1.png',
    '/images/display_2.png',
    '/images/display_3.png',
  ];

  return (
    // Features section
    <section id='features' className='flex flex-col lg:min-h-screen bg-neutral-50 font-inter py-4 lg:py-8'>
      <h1 className='font-medium text-sm xs:text-xl sm:text-4xl mx-auto my-2 px-8'>Simplify, integrate and visualize</h1>

      <h2 className='text-xs xs:text-sm sm:text-xl mx-auto px-8'><span className='text-fuchsia-500'>All in one</span> easy-to-use portal</h2>

      {/* Synchronizes clicked section with the image */}
      <section className='xl:w-screen flex flex-col xl:flex-row xl:justify-center xl:mt-[10vh]'>
        <img className='xl:w-[40vw] h-full object-cover mt-8 mx-4 xs:mx-24 lg:mx-64 xl:mx-0 xl:ml-[10vw] lg:my-[5vh] border-4 border-neutral-100' src={images[activeDiv]} alt="Rpos dashboard" />

        <div className='flex flex-col font-inter xl:my-auto'>
          <div
            className={`cursor-pointer ${activeDiv === 0 ? 'bg-fuchsia-50' : ''} w-screen xl:w-[50vw] py-4`}
            onMouseEnter={() => handleDivHover(0)}
            onMouseLeave={handleDivLeave}
            onTouchStart={() => handleDivHover(0)}
          >

            <h1 className='xl:w-[40vw] text-base xs:text-base sm:text-3xl font-medium sm:my-4 px-8 xs:px-24 lg:px-64 xl:mr-[10vw] xl:px-8'>Dashboard</h1>

            <h2 className='xl:w-[40vw] text-justify text-xs xs:text-sm sm:text-2xl sm:my-4 px-8 xs:px-24 lg:px-64 xl:px-8'>Simplify your business reporting and processes in a hassle-free way</h2>
          </div>

          <div
            className={`cursor-pointer ${activeDiv === 1 ? 'bg-fuchsia-50' : ''} py-4`}
            onMouseEnter={() => handleDivHover(1)}
            onMouseLeave={handleDivLeave}
            onTouchStart={() => handleDivHover(1)}
          >

            <h1 className='xl:w-[40vw] text-base xs:text-base sm:text-3xl font-medium sm:my-4 px-8 xs:px-24 lg:px-64 xl:px-8'>Chart</h1>

            <h2 className='xl:w-[40vw] text-justify text-xs xs:text-sm sm:text-2xl sm:my-4 px-8 xs:px-24 lg:px-64 xl:px-8'>Gain deeper insights into your business by visualizing your data</h2>
          </div>

          <div
            className={`cursor-pointer ${activeDiv === 2 ? 'bg-fuchsia-50' : ''} py-4`}
            onMouseEnter={() => handleDivHover(2)}
            onMouseLeave={handleDivLeave}
            onTouchStart={() => handleDivHover(2)}
          >

            <h1 className='xl:w-[40vw] text-base xs:text-base sm:text-3xl font-medium sm:my-4 px-8 xs:px-24 lg:px-64 xl:px-8'>Multi-user</h1>

            <h2 className='xl:w-[40vw] text-justify text-xs xs:text-sm sm:text-2xl sm:my-4 px-8 xs:px-24 lg:px-64 xl:px-8'>Multiple user settings to enable portal accessibility and security</h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
