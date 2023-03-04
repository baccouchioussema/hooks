import React,{useState} from "react";

import {movieData} from"./MovieData"
import MoviesListe from './components/MoviesList';
import AppNavbar from "./components/AppNavbar"
import AddMovie from "./components/AddMovie";

function App() {
  const [movies , setMovies] = useState(movieData);
  const [searchRating ,setSearchRating] =useState(0);
  const [searchName ,setSearchName] = useState ("");
const handleMovie =(movie)=>{
  setMovies([...movies , movie])
}
  return(
    <div>
      <AppNavbar setSearchRating = {setSearchRating} setSearchName= {setSearchName} />
      <AddMovie handleMovie={handleMovie}/>
<MoviesListe movies={movies} searchRating={searchRating} searchName={searchName}/>
    </div>
  )
}
export default App;
