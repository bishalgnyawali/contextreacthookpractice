import React, {useState, createContext} from 'react';

export const MovieContext=createContext();

export const MovieProvider=(props)=>{
    const [movies,setMovies]=useState([
        {
            name:'Harry Potter',
            price:'Rs 100',
            id:'23214'
        },
        {
            name:'Spider Man',
            price:'Rs 140',
            id:'23216'

        },
        {
            name:'Captain America',
            price:'Rs 120',
            id:'23217'
        },
        {
            name:'Avengers',
            price:'Rs 130',
            id:'23218'
        }
    ]);

    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}

