import React,{useState} from 'react'

const Movie=(props)=> {
    return(
        <div>
            <h3>Movie Name: {props.name} Price: {props.price}</h3>
        </div>
    )
}

export default Movie;