import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-11/12 glass md:w-3/12'>
        <div className='w-full text-center my-3'>
          <h2 className='text-2xl text-black font-medium'>Register</h2>
        </div> 

        <form action="" className='my-2'>
          <div className='flex border-b-2 border-b-black mx-5 my-7 py-1'>
              <input type="text" className='w-11/12 bg-transparent outline-none placeholder-black' placeholder='Type Your Name' />
              <div className='w-2/12 flex items-center justify-center'>
                 <i className="fa-solid fa-user text-xl"></i>
              </div>
          </div>
          <div className='flex border-b-2 border-b-black mx-5 my-7 py-1'>
              <input type="email" className='w-11/12 bg-transparent outline-none placeholder-black' placeholder='Email Address' />
              <div className='w-2/12 flex items-center justify-center'>
                 <i className="fa-solid fa-envelope text-xl"></i>
              </div>
          </div>
          <div className='flex border-b-2 border-b-black mx-5 my-7 py-1'>
              <input type="password" className='w-11/12 bg-transparent outline-none placeholder-black' placeholder='Create a Strong Password' />
              <div className='w-2/12 flex items-center justify-center'>
                 <i className="fa-solid fa-lock text-xl"></i>
              </div>
          </div>
          <div className='mx-5 my-7'>
              <button className='bg-black w-full h-[30px] rounded-md text-white'>Register</button>
          </div>
          <Link to='/' className='mx-5 my-5 py-2 flex items-center justify-center cursor-pointer'>
            <p className='text-sm'>Already have an account / Login</p>
          </Link>
        </form>

      </div>
    </div>
  )
}

export default Register