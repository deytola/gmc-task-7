import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MovieDescription from './Components/MovieDescription';

function App() {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/movies/:id' element={<MovieDescription />}/>
            </Routes>
        </div>
    );
}

export default App;
