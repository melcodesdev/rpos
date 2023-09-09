import React from 'react'

const Testimonials = () => {
  return (
    <section className='lg:h-screen flex flex-col text-center font-inter pt-[10vh]'>
      <h1 className='text-xl sm:text-3xl xl:text-5xl mx-4'>We <span className='text-fuchsia-500 font-semibold'>love</span> our customers</h1>
      <h2 className='text-sm sm:text-lg xl:text-2xl mb-10'>And they love us too!</h2>

      <section className='flex flex-row overflow-x-scroll mt-2 xs:ml-8 lg:mx-auto'>
        <div className='ml-2'>
          <div className='w-64 h-60 bg-fuchsia-50 rounded-lg p-4'>
            <div className='flex flex-row'>
              <img className='h-12 rounded-full' src="/images/testimonial_1.jpg" alt="Client photo" />

              <div className='flex flex-col mx-2 my-auto'>
                <h2 className='text-base text-left'>Emily Kim</h2>
                <h4 className='text-xs text-left'>Manager at <span className='font-medium'>Chopstix</span></h4>
              </div>
            </div>

            <p className='text-xs text-justify my-8'>Rpos has made a significant impact on our fast-paced diner. The speed and accuracy it brings to our order processing are impressive. Plus, the seamless integration with kitchen displays and inventory management has boosted our efficiency. </p>
          </div>
        </div>

        <div className='ml-2'>
          <div className='w-64 h-60 bg-fuchsia-50 rounded-lg p-4'>
            <div className='flex flex-row'>
              <img className='h-12 rounded-full' src="/images/testimonial_2.jpg" alt="Client photo" />

              <div className='flex flex-col mx-2 my-auto'>
                <h2 className='text-base text-left'>Marcus Johnson</h2>
                <h4 className='text-xs text-left'>Owner of <span className='font-medium'>JCYBRGR</span></h4>
              </div>
            </div>

            <p className='text-xs text-justify my-8'>We've been using Rpos for over a year now, and it has truly transformed our restaurant operations. The intuitive interface and real-time analytics have allowed us to streamline our order management and improve guest experiences. </p>
          </div>
        </div>

        <div className='ml-2 mr-2 xs:mr-10 lg:mr-0'>
          <div className='w-64 h-60 bg-fuchsia-50 rounded-lg p-4'>
            <div className='flex flex-row'>
              <img className='h-12 rounded-full' src="/images/testimonial_3.jpg" alt="Client photo" />

              <div className='flex flex-col mx-2 my-auto'>
                <h2 className='text-base text-left'>Olivia Smith</h2>
                <h4 className='text-xs text-left'>Chef at <span className='font-medium'>Veganation</span></h4>
              </div>
            </div>

            <p className='text-xs text-justify my-8'>Rpos has been an essential part of our commitment to sustainable dining. With its inventory management tools, we've been able to reduce food waste significantly and make data-driven decisions. </p>
          </div>
        </div>
      </section>

      <section className='flex flex-row overflow-x-scroll mt-2 mb-16 xs:ml-8 xl:mb-16 lg:mx-auto'>
        <div className='ml-2'>
          <div className='w-64 h-60 bg-fuchsia-50 rounded-lg p-4'>
            <div className='flex flex-row'>
              <img className='h-12 rounded-full' src="/images/testimonial_4.jpg" alt="Client photo" />

              <div className='flex flex-col mx-2 my-auto'>
                <h2 className='text-base text-left'>Isabelle Dubois</h2>
                <h4 className='text-xs text-left'>Manager at <span className='font-medium'>Gastronomique</span></h4>
              </div>
            </div>

            <p className='text-xs text-justify my-8'>Rpos has truly captured the essence of our French kitchen. It handles custom orders flawlessly and  manages our complex wine list effortlessly. Merci, Rpos! </p>
          </div>
        </div>

        <div className='ml-2'>
          <div className='w-64 h-60 bg-fuchsia-50 rounded-lg p-4'>
            <div className='flex flex-row'>
              <img className='h-12 rounded-full' src="/images/testimonial_5.jpg" alt="Client photo" />

              <div className='flex flex-col mx-2 my-auto'>
                <h2 className='text-base text-left'>Adam Brighton</h2>
                <h4 className='text-xs text-left'>Owner of <span className='font-medium'>Thouz</span></h4>
              </div>
            </div>

            <p className='text-xs text-justify my-8'>Rpos has given our café a jolt of efficiency and customer satisfaction. Its easy-to-use interface helps our baristas take orders swiftly, and the integrated loyalty program has kept our regulars coming back for more. </p>
          </div>
        </div>

        <div className='ml-2 mr-2 xs:mr-10 lg:mr-0'>
          <div className='w-64 h-60 bg-fuchsia-50 rounded-lg p-4'>
            <div className='flex flex-row'>
              <img className='h-12 rounded-full' src="/images/testimonial_6.jpg" alt="Client photo" />

              <div className='flex flex-col mx-2 my-auto'>
                <h2 className='text-base text-left'>Ethan Tanaka</h2>
                <h4 className='text-xs text-left'>Owner of <span className='font-medium'>Kawaiimen</span></h4>
              </div>
            </div>

            <p className='text-xs text-justify my-8'>Rpos has added a new dimension to our restaurant management. Its customizable features are perfect for our diverse menu, and the loyalty program integration has helped us retain loyal customers.  </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Testimonials
