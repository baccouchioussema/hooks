import React from "react";
import { Link } from "react-router-dom" ;
import{Card} from "react-bootstrap"
import Rating from '@mui/material/Rating';
const MovieCard = ({movie }) => {
    return(
      <Link to={`/movies/Trailer/${movie.trailerID}`}>
        <Card style={{ width: '20rem' ,height:"60vh" , margin:"1rem" }}>
        <Card.Img style={{height:"25vh"}} variant="top" src={movie.image} />
        <Card.Body>
<Card.Title>{movie.name}</Card.Title>
<Card.Text>
           {movie.description}
          </Card.Text>
          <Rating name="read-only" value={movie.rating} readOnly/>
          
        </Card.Body>
      </Card>
      </Link>
    )
}
export default MovieCard