import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRows'
import endpoints from '../services/movieService'




const Home = () => {
  return (
   <>
   <Hero />
   <MovieRow title="upcoming" url={endpoints.upcoming} />
   <MovieRow title="trending"  url={endpoints.trending}/>
   <MovieRow title="top rated" url={endpoints.topRated}/>
   <MovieRow title="popular" url={endpoints.popular}/>
   



   </>
  )
}

export default Home

