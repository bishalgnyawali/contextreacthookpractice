import React,{useState,useContext} from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieContext';
const MovieList=()=> {
    const [movies,setMovies]=useContext(MovieContext);
    return(
        <div>
            {
                    movies.map((movie)=>{
                        //if(movie.name==='Harry Potter'){
                        //    setMovies(movie.price='Rs 20')
                        //}
                    return <Movie name={movie.name} price={movie.price} key={movie.id}/>
                    })
            } 
        </div>
    )
    }
export default MovieList;
