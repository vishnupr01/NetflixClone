import React, { useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
import { AiOutlineClose } from 'react-icons/ai'
import { userAuth } from '../context/AuthContext' 
import { db } from '../services/fireBase'
import { createImageUrl } from '../services/movieService'
import { arrayRemove,doc,onSnapshot,updateDoc } from 'firebase/firestore'

const Profile = () => {
  const [movies,setMovies]=useState([])
  const {user}=userAuth()
  console.log(user);
  useEffect(()=>{
    if(user){
      onSnapshot(doc(db,'users',`${user.email}`),(doc)=>{
        if(doc.data()) setMovies(doc.data().favShows);
      })
    }
  },[user?.email])
  const slide =(offset)=>{
    const slider =document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft+offset

  }
  const handleUnlikeShow = async(movie)=>{
    const userDoc=doc(db,"users",user.email)
    await updateDoc(userDoc,{
      favShows: arrayRemove(movie)
    })
  }
if(!user){
  return(
    <>
    <p>fetching shows...</p>
    </>
  )
}
  return <>
   <div>
    <div >
      <img
      className='block w-full h-[500x] object-cover'
       src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg" alt="//" />
       <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'/> 
       <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>My Shows
        </h1>
        <p className='font-nsans-light text-gray-400 text-lg'>
          {user.email}

        </p>
       </div>
    </div>
    {/*movie row */}
    <h2 className='font-nsans-bold md:text-xl p-4 capitalize'>Fav Shows</h2>
   <div className='relative flex items-center group'>
    <MdChevronLeft
    onClick={()=>slide(-500)} className='bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden
    group-hover:block cursor-pointer' size={40} />

    <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth 
 scrollbar-hide '>
  {movies.map((movie)=>(
    <div 
     key={movie.id} className='relative w-[160px] sm:w-[200px] md:w-[280px] lg:w-[280px] inline-block
    rounded-lg overflow-hidden cursor-pointer m-2'>
      <img className='w-full h-40 block object-cover object-top'
       
       src={createImageUrl(
        movie.backdrop_path ?? movie.poster_path,
        "w500")} 
       alt={movie.title} />
            
       <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
         <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>
           {movie.title}
           </p>
           <p>
            <AiOutlineClose onClick={()=>handleUnlikeShow(movie)} 
            size={30}
            className='absolute top-2 right-2'/>
           </p>
           
       </div>

   </div>




  ))}

    </div>
  <MdChevronRight 
  onClick={()=>{slide(500)}} className='bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden
    group-hover:block cursor-pointer' size={40}/>
   </div>
    </div>  
  </>
}

export default Profile
