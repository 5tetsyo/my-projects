import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './LoginPage.module.css'

const LoginPage = (props) => {
    const router = useNavigate()
    const [newUser, setNewUser] = useState({name: '', password: '', email: ''})
    const changeValue = (e, value) => {
        switch(value) {
            case 'name':
                setNewUser({...newUser, name: e.target.value});
                break;
            case 'password':
                setNewUser({...newUser, password: e.target.value});
                break;
            case 'email':
                setNewUser({...newUser, email: e.target.value});
                break;
            default: 
                break;
        }
    }
    const {isLog, setLog, isAdmin, setIsAdmin} = props
    const rePage = () => {
        if (newUser.name === '1' && newUser.password === '1' && newUser.email === '1') {
            setIsAdmin(true)
            setLog(true)
            router('/admin')
        }
        else if (newUser.name && newUser.password && newUser.email) {
            setIsAdmin(false)
            setLog(true)
            router('/user',{state: {newUser: newUser}})
        }
        else {
            setLog(false);
            setIsAdmin(false);
            router('/404');
        }
    }
    return (
        <div className={classes.loginPage}>
            <div className={classes.loginBlock}>
                <input value={newUser.name} onChange={(e) => changeValue(e, 'name')} placeholder='Login or email' className={classes.input} type="text"/>
                <input value={newUser.password} onChange={(e) => changeValue(e, 'password')} placeholder='Password' className={classes.input} type="password"/>
                <input value={newUser.email} onChange={(e) => changeValue(e, 'email')} placeholder='Email' className={classes.input} type="email"/>
            </div>
            <button onClick={() => rePage()} className={classes.buttons}>Login</button>
            <button className={classes.buttons}>Register</button>
        </div>
    );
}

export default LoginPage;
