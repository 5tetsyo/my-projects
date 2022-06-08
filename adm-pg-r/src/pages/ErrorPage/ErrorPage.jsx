import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            ERROR! U try to do something bad...
            <Link to={'/'}>Go to login</Link>
        </div>
    );
};

export default ErrorPage;