import React from 'react';
import User from './User';


export default function ListUser(props) {
    const {users} = props;
    const userCards = users.map((user, index) => {
        return (
            <User
                key = {index}
                id = {user.id}
                name={user.name}
                companyName={user.company?.name}
            />
        )
    })
    return(
        <div className='flex flex-col justify-between'>{userCards}</div>
    )
}
