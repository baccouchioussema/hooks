import React from "react";
import MovieCard from "./MovieCard";
const MoviesListe = (props ) => {
    return(
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-around" , backgroundColor:"#D93CE6"}}>
            {
                props.movies 
              .filter((el)=>
              el.rating >= props.searchRating &&
              el.name.toLowerCase().includes(props.searchName.toLowerCase().trim())
              )  
                .map((el)=>(
                    <MovieCard movie ={el} key={el.id}/>
                ))
            }
        </div>
    )
}
export default MoviesListe