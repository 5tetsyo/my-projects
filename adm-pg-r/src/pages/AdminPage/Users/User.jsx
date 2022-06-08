import React from 'react';
import { removeUser } from '../../../users/user';

const User = ({users, id, setUsers}) => {
    const user = users[id-1]
    return (
        <div className='user'>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <button onClick={() => removeUser(users, setUsers, user)}>Delete user</button>
        </div>
    );
};

export default User;