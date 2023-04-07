import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList(props) {
    const {movies} = props
    const movieCards = movies.map((movie, index)=>{
        return (
            <MovieCard 
                key = {index}
                id = {movie.id}
                title={movie.title} 
                description={movie.description} 
                posterURL={movie.posterURL} 
                rating={movie.rating}
            />
        )
    })
    return(
        <div className='flex flex-wrap justify-between mt-2'>{movieCards}</div>
    )
}
