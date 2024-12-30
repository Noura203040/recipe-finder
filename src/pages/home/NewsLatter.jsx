import React from 'react'

const NewsLatter = () => {
  return (
    <div className='w-full md:w-2/3 mx-auto flex flex-col items-center p-10'>
        <h3 className='text-secondary font-semibold text-center text-4xl'>
            Sign Up for my weekly newsletters!
        </h3>
        <p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>
            Weekly emails with my latest recipes, cooking tips and tricks and product recommendations! <br/> You will be set up in min. 
        </p>
        <div className='mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20'>
            <input className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]' type='text' placeholder='name'/>
            <input className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]' type='text' placeholder='Email'/>
            <button type='button' className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition ease-in 
            duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'> Get Started</button>
        </div>
    </div>
  )
}

export default NewsLatter