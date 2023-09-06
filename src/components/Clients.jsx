import React from 'react'

const Clients = () => {
  return (
    <section className='w-full bg-neutral-100 py-4'>
        <div className='flex flex-row mx-5 my-4 items-center opacity-70'>
            <img className='h-7' src="/images/jcybrgr.png" alt="Jcybrgr icon" />
            <h3 className='mx-4 text-lg font-bold font-bungee'>JCYBRGR</h3>
        </div>

        <div className='flex flex-row mx-5 my-4 items-center opacity-70'>
            <img className='h-7 border border-black' src="/images/pouletgastronomique.png" alt="Poulet Gastronomique icon" />
            <h3 className='mx-4 text-lg font-bold font-bodoniModa'>Poulet Gastronomique</h3>
        </div>

        <div className='flex flex-row mx-5 my-4 items-center opacity-70'>
            <img className='h-7' src="/images/kawaiimen.png" alt="Kawaiimen icon" />
            <h3 className='mx-4 text-lg font-bold font-cevicheOne'>kawaiimen</h3>
        </div>

        <div className='flex flex-row mx-5 my-4 items-center opacity-70'>
            <img className='h-7' src="/images/vegannation.png" alt="Vegan Nation icon" />
            <h3 className='mx-4 text-lg font-bold font-bebasNeue'>VEGAN NATION</h3>
        </div>

        <div className='flex flex-row mx-5 my-4 items-center opacity-70'> 
            <img className='h-7' src="/images/chopstix.png" alt="Chopstix icon" />
            <h3 className='mx-4 text-lg font-bold font-inter'>chopstix</h3>
        </div>

        <div className='flex flex-row mx-5 my-4 items-center opacity-70'>
            <img className='h-7' src="/images/thouz.png" alt="Thouz icon" />
            <h3 className='mx-4 text-lg font-bold font-caveat'>Thouz</h3>
        </div>
    </section>
  )
}

export default Clients