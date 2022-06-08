import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { addUser } from '../../users/usersFunctions';

const UserPage = ({users, setUsers}) => {
    const router = useLocation()
    const newUser = router.state.newUser
    useEffect(() => {
        addUser(users, setUsers, newUser)
    }, [])
    return (
        <div>
            U are user!
        </div>
    )
}

export default UserPage;