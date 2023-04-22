import '../App.css';
import UserList from './ListUser';
import { useEffect, useState } from 'react';
import axios from 'axios'

function Home() {

    const [listOfUsers, setListOfUsers] = useState([]);
    

    useEffect(() => {
        (async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            setListOfUsers(data);
        })();
    }, []);

    return (
        <div className='flex flex-col h-screen items-center w-auto'>
            <div className='flex p-8'>
                <UserList users={listOfUsers} />
            </div>
        </div>

    );
}

export default Home;
