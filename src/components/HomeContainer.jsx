import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from '../img/i1.png'
import { heroData } from '../utils/data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
    <div className='py-2  felx-1 flex flex-col items-start justify-center  gap-6'>
      <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
        <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
        <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
          <img src={Delivery} className='w-full h-full object-contain' alt='Delivery logo'/>
        </div>
      </div>
      <p className='text-[2.5rem] font-bold letter tracking-wide text-headingColor lg:text-[4.25rem]'>
        The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
      </p>
      <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi vitae, odit tenetur beatae eum officiis. 
        Nam facere asperiores rem. Enim ipsum dolorem quidem ad adipisci id, commodi maxime aliquam laudantium.</p>
      <button type='button' className='md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full 
      px-4 py-2 rounded-lg hover:shadow-lg transition-all easein-out duration-100'>Order Now</button>
    </div>
    <div className='py-2  flex-1 flex items-center relative'>
        <img src={HeroBg} alt='Hero Img' className=' ml-auto lg:h-650 h-420 w-full lg:w-auto'/>
        <div className='w-full h-full absolute flex top-0 left-0 items-center justify-center  py-4 gap-4 flex-wrap lg:px-32'>
            {
                heroData && heroData.map((n)=>(
                    <div key={n.id} className='lg:w-190   p-4 drop-shadow-lg bg-cardOverlay backdrop-blur-md rounded-3xl 
                    flex flex-col items-center justify-center'>
                <img src={n.imageSrc} alt="IceCream" className='lg:w-40 w-20 -mt:10 lg:-mt-20' />
                <p className='lg:text-xl text-base mt-2 font-semibold text-textColor lg:mt-4'>{n.name}</p>
                <p className='text-sm text-gray-500 font-semibold lg:my-3 my-1 text-[12px]'>{n.decp}</p>
                <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>
                  $</span>{n.price}</p>
            </div>
                ))
            }
        </div>
    </div>
  </section>
  )
}

export default HomeContainer