import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { removeUser } from '../../users/usersFunctions';

const AdminPage = ({users, setUsers}) => {
    useEffect(() => {
        setIsLoading(false)
    }, [])
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div>
            {users.map(user => 
                <div key={user.id} className='user'>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <button onClick={() => removeUser(users, setUsers, user)}>Delete user</button>
                </div>)}
            <Link to={'/404'}>1</Link>
        </div>
    );
};

export default AdminPage;