import React, { useEffect, useState } from 'react'
import {Movies} from '../Utils/index';
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, useMatch, Link} from "react-router-dom";

 
export default function Example() {  
  const match = useMatch('/movies/:id');
  const {id: movieId} = match.params;
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(Movies.find((mov)=>mov.id === movieId));
  }, [movieId]);
  const {title, posterURL, rating, description} = movie;
  const nagivate = useNavigate();
  const goBack = () => {
    nagivate(-1);
  }
  return (
    <>
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link>
            <Typography variant="h5" className="mb-2" onClick={goBack}>Back</Typography>
          </Link>
        </div>
      </Navbar>
      <div className='flex flex-col items-center justify-center'>
        <Typography variant="h5" className="mb-2">Title: {title}</Typography>
        <Typography variant="h5" className="mb-2">Description: {description}</Typography>
        <Typography variant="h5" className="mb-2">Poster URL: {posterURL}</Typography>
        <Typography variant="h5" className="mb-2">Rating: {rating}</Typography>
      </div>
    </>

  );
}
