import React from 'react';
import MovieList from './Components/MovieList';
import './App.css';
import Nav from './Components/Nav';
import {MovieProvider} from './Components/MovieContext.js';
import AddMovie from './Components/AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <MovieList/>
        <AddMovie/>
      </div>
    </MovieProvider>
  );
}

export default App;
