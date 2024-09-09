import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user,logOut} =userAuth();
  const navigate=useNavigate()
  const handleLogout=async()=>{
    try {
      await logOut()
      navigate("/") 
    } catch (err) {
      console.log(err);
      
    }
  }
  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
      <Link  to="/">
        {/* <h1 className='uppercase text-red-600 font-nsans-bold text-5xl'>netflix</h1> */}
        <img className='h-10 w-25' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      </Link>
      {
        user?.email ?(
          <div>
          <Link to='/profile'>
          <button className='capitalize pr-4'>Profile</button>
          </Link>
          
          <button onClick={handleLogout} className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>
            log out</button>
        
        </div>

        ):(
          <div>
          <Link to='/login'>
          <button className='capitalize pr-4'>login</button>
          </Link>
          <Link to='/signup'>
          <button className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>sign up</button>
          </Link>
        </div>
        )
      }
      
      
    </div>
  )
}

export default Navbar
