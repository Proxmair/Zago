import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="navbar h-20 primary-color">
  <div className="flex-1">
    <Link to='/'><img className='h-20 p-4 ml-2 lg:ml-32' src={Logo} alt='logo' /></Link>
  </div>
  <div className="flex-none">
    <ul className="flex justify-center items-center gap-5 mr-2 lg:mr-20">
      <li><button className='hidden sm:block btn btn-ghost custom-letter-spacing text-xs font-bold ' >Services</button></li>
      <li className='hidden sm:block custom-width h-10 bg-black ' >&nbsp;</li>
      <li><button className='hidden sm:block btn btn-ghost custom-letter-spacing text-xs font-bold ' >Solution</button></li>
      <li><button className='btn btn-sm lg:btn-md rounded-full graditent-purple border-none text-white text-xs px-4 lg:px-6 custom-letter-spacing ' >Free Consult</button></li>
    </ul>
  </div>
</div>
  )
}

export default Header