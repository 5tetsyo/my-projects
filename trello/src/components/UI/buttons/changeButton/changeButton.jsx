import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import classes from './changeButton.module.css'

const ChangeButton = ({callback}) => {
    return (
        <button 
        className={classes.change}
        onClick = {callback}>
            <FontAwesomeIcon style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} icon={faPen} />
        </button>
    );
}

export default ChangeButton;
