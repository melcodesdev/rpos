import React from 'react'

const Faq = () => {
    return (
        // FAQ section
        <section className='flex flex-col mx-4 xs:mx-16 xl:mx-32 my-8 sm:my-16'>
            <h1 className='text-3xl xl:text-6xl font-medium mx-auto xl:mb-10'>F.A.Q</h1>

            <div className='text-xs sm:text-base lg:text-lg my-4 xl:px-8 text-justify xl:grid xl:grid-cols-2'>
                <div className='xl:m-4'>
                    <p className='font-semibold mt-6'>What is Rpos?</p>
                    <p className='mt-2'>Rpos is a cutting-edge Point of Sale (POS) software as a service (SaaS) designed specifically for restaurants. It provides a comprehensive suite of tools and features to help restaurant owners streamline their operations, manage orders, and enhance customer experiences.</p>
                </div>

                <div className='xl:m-4'>
                    <p className='font-semibold mt-6'>What types of restaurants can benefit from Rpos?</p>
                    <p className='mt-2'>Rpos is a cutting-edge Point of Sale (POS) software as a service (SaaS) designed specifically for restaurants. It provides a comprehensive suite of tools and features to help restaurant owners streamline their operations, manage orders, and enhance customer experiences.</p>
                </div>

                <div className='xl:m-4'>
                    <p className='font-semibold mt-6'>Can I integrate Rpos with other management tools?</p>
                    <p className='mt-2'>Yes, Rpos offers seamless integration capabilities with various third-party applications, including accounting software, online ordering platforms, payment gateways, and customer relationship management (CRM) systems. This ensures a smooth and interconnected restaurant management experience.
                    </p>
                </div>

                <div className='xl:m-4'>
                    <p className='font-semibold mt-6'>How does Rpos help improve restaurant efficiency?</p>
                    <p className='mt-2'>Rpos simplifies restaurant operations by automating tasks such as order management, table reservations, inventory tracking, and staff scheduling. It also offers detailed analytics and reporting to help owners make data-driven decisions to optimize their business.
                    </p>
                </div>

                <div className='xl:m-4'>
                    <p className='font-semibold mt-6'>How does Rpos enhance the customer experience?
                    </p>
                    <p className='mt-2'>Rpos improves the customer experience by enabling efficient order processing, reducing wait times, and offering features like online ordering, table reservations, and loyalty programs. Customers can enjoy a smoother and more personalized dining experience.
                    </p>
                </div>

                <div className='xl:m-4'>
                    <p className='font-semibold mt-6'>Is Rpos suitable for multi-location chains?</p>
                    <p className='mt-2'>Absolutely! Rpos is scalable and can easily accommodate multi-location restaurant chains. It offers centralized management, allowing owners to oversee and control all their restaurant branches from a single dashboard.</p>
                </div>

                <div className='xl:m-4'>
                    <p className='font-semibold mt-6'>Is Rpos secure, compliant with industry standards?</p>
                    <p className='mt-2'>Yes, Rpos prioritizes security and compliance. It adheres to industry standards for data protection and offers features like secure payment processing and role-based access control to safeguard sensitive information. Additionally, it helps restaurants comply with various regulatory requirements, such as POS data security standards (PCI DSS).</p>
                </div>
            </div>

            <p className='text-xs sm:text-base lg:text-lg my-4 xl:ml-12 xl:mt-16 text-justify'>Dont find what you’re looking for? <br />
                <a href='mailto:melcodes.dev@gmail.com' className='font-medium underline underline-offset-2 hover:opacity-50'>Send us an email</a>
            </p>
        </section>
    )
}

export default Faq
