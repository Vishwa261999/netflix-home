import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Rows.css';


const base_url = "https://image.tmdb.org/t/p/original/"

function Rows({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`${fetchUrl}`)
            .then((res) => {
                // console.log("res" , res)
                setMovies(res?.data?.results);
            })
    }, [fetchUrl])


    return (
        <div className='row'>
            <h2>{title}</h2>
      
            <div className='row_posters'>
                {movies.map(movie => (
                    <img
                       key={movie.id}  
                     className={`row_poster ${isLargeRow && "row_posterlarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
    </div>
    )
}

export default Rows