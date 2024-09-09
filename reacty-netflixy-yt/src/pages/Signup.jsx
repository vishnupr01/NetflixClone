import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, signUp } = userAuth()
  const navigate = useNavigate()
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg" alt="///"
        />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />
        <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/50 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-nsans-bold'>Sign Up</h1>
              <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4' >
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2    bg-transparent border border-gray-500 rounded   '
                  type="email" placeholder='email' autoComplete='email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2    bg-transparent border border-gray-500 rounded'
                  type="password" placeholder='password' autoComplete='current-password'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>Sign Up</button>



                <div className='flex justify-between items-center text-gray-600' >


                  <p className='pb-2'>
                    <input checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)} className='mr-2 mb-2' type="checkbox" /> Remember me
                  </p>
                </div>
                <div>
                  <p  ><span className='opacity-60  '>Already have an account?</span><span className='pl-1'><Link to='/login'> Sign In</Link></span> </p>
                  <p className=' font-thin
         text-xs mt-4'><span className='opacity-40'>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot.</span><span className='text-blue-600  hover:underline cursor-pointer' >Learn more.</span></p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Signup
