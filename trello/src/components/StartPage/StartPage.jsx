import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
    return (
            <div className='startPage'>
                <h1>Click on button to create your first project with us!</h1>
                <Link className='link' to='/projects'>Create</Link>
            </div>
    );
}

export default StartPage;
