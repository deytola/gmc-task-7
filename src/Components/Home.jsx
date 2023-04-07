import '../App.css';
import {Movies} from '../Utils/index';
import MovieList from './MovieList';
import Filter from './Filter';
import { useEffect, useState } from 'react';
import { Button, Textarea } from "@material-tailwind/react";

function Home() {
  const [moviesFromDB, setMoviesFromDB] = useState(Movies);
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
      title: '',
      description: '',
      posterURL: '',
      rating: 0
  });
  const handleFormChange = (evt) => {
      const key = evt.target.id;
      setNewMovie({...newMovie, [key]: evt.target.value})
  }


  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  useEffect(() => {
    setMoviesFromDB([...Movies].filter((movie) => {
      return movie.title?.toLowerCase().includes(searchText.toLowerCase()) || movie.description?.toLowerCase().includes(searchText.toLowerCase());
    }));
    setMoviesFromDB((prevMovies) => {
      return searchText ? prevMovies : [...Movies]
    });
  }, [searchText]);

  const handleSubmit = () => {
    setShowModal(false);
    setMoviesFromDB((prevMovies) => {
      return [newMovie, ...prevMovies]
    });
  }



  return (
    <div className='flex flex-col h-screen items-center w-auto'>
      <Filter className='mb-2' searchQuery={searchText} changeListener={handleChange}/>
      <div>
            <Button 
                variant='outlined' 
                className='mt-2' 
                onClick={() => setShowModal(true)}
            >
                New Movie
            </Button>
            {showModal ? (
                <div>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Add New Movie</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full space-y-3">
                                        <input className='text w-full p-2 rounded-lg border-solid border border-sky-500 border-[#2196f3]' placeholder={'Movie Title'} id={'title'} onChange={handleFormChange} value={newMovie['title']}/>
                                        
                                        <div className="w-full">
                                            <Textarea placeholder="Movie description..." id={'description'} onChange={handleFormChange} value={newMovie['description']}/>
                                        </div>

                                        <input className='text w-full p-2 rounded-lg border-solid border border-sky-500 border-[#2196f3]' id={'posterURL'} onChange={handleFormChange}  value={newMovie['posterURL']} placeholder={'Poster URL <https://...>'}/>
                                        
                                        <input className='number w-full p-2 rounded-lg border-solid border border-sky-500 border-[#2196f3]' id={'rating'} onChange={handleFormChange} value={newMovie['rating']} placeholder={'Movie rating (1-5)'}/>
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <Button
                                        variant='outlined'
                                        className="text-[#2196f3]"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
      <div className='flex p-8'>
        <MovieList  movies={moviesFromDB}/>
      </div>
    </div>
    
  );
}

export default Home;
