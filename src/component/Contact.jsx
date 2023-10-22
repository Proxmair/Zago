import React, { useState } from 'react'
import ContactImage from '../assets/box-img-6.png'
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
  };
  return (
    <div className='contact-form-postion flex flex-col lg:flex-row mx-2 sm:mx-12 lg:mx-44 shadow-2xl rounded-lg items-center' >
      <div className='lg:w-1/2 w-full' >
      <img className='w-full p-6' src={ContactImage} alt='ContactImage' />
      </div>
      <form onSubmit={handleSubmit} className='p-6 lg:w-1/2 w-full'>
        <h1 className='text-3xl font-bold' >Contact Us</h1>
        <p className='text-sm mt-2 '>Please feel free to contact us today to learn more about how our expert services</p>
        <div className='flex flex-col my-4' >
          <label className='text-sm font-semibold mt-2'  htmlFor="fullName">Full Name</label>
          <input
          className='text-xs bg-purple-100 py-2 px-4 rounded-full'
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            placeholder='Enter Full Name'
          />

          

          <label className='text-sm font-semibold mt-2' htmlFor="phone">Phone Number</label>
          <input
          className='text-xs bg-purple-100 py-2 px-4 rounded-full'
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder='Enter phone number'
          />
          <label className='text-sm font-semibold mt-2' htmlFor="email">Email</label>
          <input
          className='text-xs bg-purple-100 py-2 px-4 rounded-full'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder='Enter email address'
          />

          <label className='text-sm font-semibold mt-2' htmlFor="message">Message</label>
          <textarea
          className='text-xs bg-purple-100 py-2 px-4 rounded-3xl'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
            placeholder='Write your message'
          ></textarea>
        </div>
        <button className=' float-right btn btn-sm lg:btn-md rounded-full graditent-purple border-none text-white text-xs px-6 lg:px-10 custom-letter-spacing '  type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact