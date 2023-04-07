import React, { useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom';
import {Movies} from '../Utils/index';
import {
  Typography,
} from "@material-tailwind/react";


export default function MovieDescription() {
  const match = useMatch('/movies/:id');
  const {id: movieId} = match.params;
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(Movies.find((mov)=>mov.id === movieId));
  }, [movieId]);

  const {title, posterURL, rating, description} = movie;

  return (
    <div className='flex flex-col items-center justify-center'>
      <Typography variant="h5" className="mb-2">{title}</Typography>
      <Typography variant="h5" className="mb-2">Description: {description}</Typography>
      <Typography variant="h5" className="mb-2">Poster URL: {posterURL}</Typography>
      <Typography variant="h5" className="mb-2">Rating: {rating}</Typography>
    </div>
  )
}
