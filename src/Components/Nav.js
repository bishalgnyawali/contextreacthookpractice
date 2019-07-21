import React,{useContext} from 'react';
import { MovieContext } from './MovieContext';
const Nav = ()=> {
    const [movies,setMovies]=useContext(MovieContext);
    return(
        <nav className="nav-bar">
            <h1>Movie Name</h1>
            <h3> Number of Movies:{movies.length}</h3>
        </nav>
    );
};
export default Nav;