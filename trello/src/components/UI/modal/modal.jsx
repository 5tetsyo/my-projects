import React, { useState } from 'react';
import ChangeButton from '../buttons/changeButton/changeButton';
import classes from './modal.module.css'

const Modal = ({create, visible, setVisible}) => { 
    const [title, setTitle] = useState('')
    const getClass = [classes.modal]
    if (visible) {
        getClass.push(classes.active)
    }
    return (
            <div className={getClass.join(' ')}>
                <div className={classes.content}>
                    <input type='text' onChange={(e) => {
                        setTitle(e.target.value);
                    }}></input>
                    <ChangeButton callback = {() => {;
                        if (title.length > 0) {
                            create(title);
                        }
                        setTitle('');
                        setVisible(false);
                    }}></ChangeButton>
                </div>
            </div>
    );
}

export default Modal;
