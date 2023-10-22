import React from 'react'
import BoxImage1 from '../assets/box-img-1.png';
import BoxImage2  from '../assets/box-img-2.png';
import BoxImage3  from '../assets/box-img-3.png';

const Services = () => {
  return (
    <div className='mx-12 md:mx-28 ' >
        <h4 className='color-secondary text-sm mt-16 font-bold' >Core Services</h4>
        <h3 className='text-3xl font-bold' >We help you...</h3>
        <div className='flex mt-16 gap-8 justify-center flex-wrap' >
            <div className='shadow-2xl w-80 rounded-md pb-12'>
                <div className='p-4 w-full'>
                    <img className=' bg-purple-100 rounded-md p-4' src={BoxImage1} alt='Box Image1' />
                </div>
                <h4 className='mx-4 text-xl font-semibold' >AUTOMATION ALL STARS"</h4>
                <ul className='service-list' >
                    <li>Say  goodbye to manual madness! let our automation wizard  work their magic.</li>
                    <li>Where robots meet results. Your journey to efficiency starts here.</li>
                </ul>
            </div>
            <div className='shadow-2xl w-80 rounded-md pb-12'>
                <div className='p-4 w-full'>
                    <img className=' bg-purple-100 rounded-md p-4' src={BoxImage2} alt='Box Image1' />
                </div>
                <h4 className='mx-4 text-xl font-semibold' >AUTOMATION ALL STARS"</h4>
                <ul className='service-list' >
                    <li>Say  goodbye to manual madness! let our automation wizard  work their magic.</li>
                    <li>Where robots meet results. Your journey to efficiency starts here.</li>
                </ul>
            </div>
            <div className='shadow-2xl w-80 rounded-md pb-12'>
                <div className='p-4 w-full'>
                    <img className=' bg-purple-100 rounded-md p-4' src={BoxImage3} alt='Box Image1' />
                </div>
                <h4 className='mx-4 text-xl font-semibold' >AUTOMATION ALL STARS"</h4>
                <ul className='service-list' >
                    <li>Say  goodbye to manual madness! let our automation wizard  work their magic.</li>
                    <li>Where robots meet results. Your journey to efficiency starts here.</li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Services