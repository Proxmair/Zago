import React from 'react'
import Logo from '../assets/logo.png'
import { MdCall } from 'react-icons/md';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';



const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-footer flex flex-col  pt-80 items-center' >
      <img className='w-40 md:w-60' src={Logo} alt='logo' />
      <div className='flex pt-16 justify-evenly w-full  flex-wrap gap-8' >
        <div className='w-60' >
          <h4 className='text-sm font-bold' >INFORMATION</h4>
          <ul className='flex flex-col mt-8 gap-2' >
            <li className='flex items-center gap-2'><MdCall className='w-8 h-8 p-2 rounded-full bg-white' /><span className='text-sm font-semibold '>123-456-7890</span></li>
            <li className='flex items-center gap-2'><BsFillEnvelopeFill className='w-8 h-8 p-2 rounded-full bg-white' /><span className='text-sm font-semibold '>info@yourdomain.com</span></li>
            <li className='flex items-center gap-2'><ImLocation className='w-8 h-8 p-2 rounded-full bg-white' /><span className='text-sm font-semibold'>ABC Address,ABC Location,ABC Plot no</span></li>
          </ul>
        </div>
        <div className='w-60' >
          <h4 className='text-sm font-bold' >QUICK INFO</h4>
          <ul className='flex flex-col mt-8 gap-2' >
            <li className='text-sm font-semibold'>Home</li>
            <li className='text-sm font-semibold'>Services</li>
            <li className='text-sm font-semibold'>Solution</li>
            <li className='text-sm font-semibold'>Free Consult</li>
            <li className='text-sm font-semibold'>Contact us</li>
          </ul>
        </div>
        <div className='w-60'>
          <h4 className='text-sm font-bold' >LEGAL INFO</h4>
          <ul className='flex flex-col mt-8 gap-2' >
            <li className='text-sm font-semibold'>Terms and Condition</li>
            <li className='text-sm font-semibold'>Privacy Policy</li>
          </ul>
        </div>
        <div className='w-60'>
          <h4 className='text-sm font-bold' >SUBSCRIBE OUR NEWSLETTER</h4>
          <ul className='flex flex-col mt-8 gap-2' >
            <li className='text-sm font-semibold'>Sign up to  recive updates,access exclusive offer and more.</li>
            <li >
              <div
                className=' bg-white h-16 rounded-full flex-col md:flex-row flex justify-between items-center '
              >
                <input
                  className='text-xs w-20 ml-4 mr-1'
                  type="text"
                  id="fullName"
                  name="fullName"
                />
                <button className='btn btn-sm lg:btn-md rounded-full graditent-purple border-none text-white text-xs px-2 lg:px-6 custom-letter-spacing mr-4' >Send</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-8 mb-2 text-sm font-semibold' >
       Copyright &copy; {currentYear} All rights reserved
    </div>
    </div>
  )
}

export default Footer

