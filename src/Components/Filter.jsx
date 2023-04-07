import React from 'react';


export default function Filter(props) {
    const {changeListener, searchQuery} = props;
    return (
        <div className='flex items-center mt-2'>
            <input className='text w-96 p-2 rounded-lg border-solid border border-sky-500 border-[#2196f3]' placeholder={'Search movies...'} onChange={changeListener} value={searchQuery}/>
        </div>
    )
}
