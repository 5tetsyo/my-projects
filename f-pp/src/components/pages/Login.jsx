import React, { useContext } from 'react';
import { AuthContext } from '../context/context';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';



const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    };
    return (
        <form onSubmit={login}>
            <MyInput type='text' placeholder='Login'/>
            <MyInput type='password' placeholder='Pass'/>
            <MyButton>Вхід</MyButton>
        </form>
    );
}

export default Login;
