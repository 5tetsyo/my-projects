import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/context';
import MyButton from '../UI/button/MyButton';

const Navbar = () => {
    const logOut = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <div className='navbar'>
            <MyButton onClick={logOut}>Вихід</MyButton>
            <Link className='navbar_link' to='/about'>About</Link>
            <Link className='navbar_link' to='/'>Head</Link>
            <Link className='navbar_link' to='/posts'>Posts</Link>
        </div>
    );
}

export default Navbar;
