import React from 'react'

const Subscription = () => {
  return (
    <div className='bg-white py-16 rounded-t-md'>
        <div className='max-w-screen-xl mx-auto px-6 lg:px-8 mb-20'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-20'>
                {/* left text */}
                <div className='md:w-1/2'>
                    <h3 className='text-3xl font-bold tracking-tight text-secondary sm:text-4xl'>Subscribe to our newsletter</h3>
                    <p className='text-3xl font-bold tracking-tight text-secondary sm:text-4xl'>Welcome to us</p>
                </div>
                <div className='sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4'>
                <label htmlFor='email-address' className='sr-only'>
                    Email Adress
                </label>
                <input id='email-address' name='email' type='email' autoComplete='email' required className='flex-auto rounded-md border-0 
                bg-primary  px-3.5 py-4 text-white shadow-lg sm:text-sm sm:leading-6 focus:outline-btnColor' placeholder='Enter your email'/>
                <button type='submit' className='flex-none rounded-md bg-btnColor px-8 py-4 text-sm font-semibold text-white shadow-sm 
                hover:bg-white hover:border-btnColor hover:border'> Subscribe</button>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Subscription