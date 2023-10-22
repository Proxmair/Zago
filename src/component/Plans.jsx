import React from 'react'
import Plan1Image from '../assets/box-img-4.png'
import Plan2Image from '../assets/box-img-5.png'

const Plans = () => {
  return (
    <div className='mt-28' >
        <div className='flex justify-center items-center'>
            <h3 className='custom-plan-width text-3xl text-center'>Not sure how to utilize automation or AI in your buisness?</h3>
        </div>
        <div className='flex mt-16 justify-center items-center flex-col lg:flex-row gap-20 '  >
            <div className='w-2/3 lg:w-1/3 flex items-center flex-col shadow-2xl rounded-lg' >
                <img className='py-4 px-24' src={Plan2Image} alt='plan1' />
                <button className='my-4 btn  btn-sm lg:btn-md rounded-full graditent-purple border-none text-white text-xs px-8 custom-letter-spacing' >View Some Solution Examples</button>
            </div>
            <h3 className='hidden lg:block mx-6 text-3xl text-center font-semibold' >OR</h3>
            <div className='w-2/3 lg:w-1/3 flex items-center flex-col shadow-2xl rounded-lg' >
                <img className='py-4 px-24' src={Plan1Image} alt='plan1' />
                <button className='my-4 btn btn-sm lg:btn-md rounded-full graditent-purple border-none text-white text-xs px-8 custom-letter-spacing' >View Some Solution Examples</button>
            </div>
        </div>
    </div>
  )
}

export default Plans