import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        /*onChange - викликається на value цілі*/ 
        <select
            value={value}
            onChange = {event => onChange(event.target.value)}
            className={classes.MySel}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>{option.name}</option>
                )}
        </select>
    );
}

export default MySelect;
