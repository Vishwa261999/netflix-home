import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from './requests';
import "./Banner.css"


function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
      axios.get(requests.fetchNetflixOriginals) 
      .then((res) => {
          setMovie(
              res?.data?.results[ Math.floor(Math.random() * res?.data?.results.length)]
          )
          // console.log("res",res);
      }).catch((error) => {
          console.log("error", error)
      })
  }, [])

  console.log("movies ", movie);
    

  return (
    <header className='banner'
      style={
        {backgroundSize:"cover",  
         backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
         backgroundPosition:"100% 100%" ,
      }
      }
    >
      <div className="banner_contents">
      <h1 className='banner_title'>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>

      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>
      
      <h1 className='banner_description'> {movie?.overview}</h1>
      
      </div>
      <div className="banner_fadeBottom" />
    </header>
  )
}

export default Banner
