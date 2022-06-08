import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChangeButton from '../buttons/changeButton/changeButton';
import classes from './ProjectSticker.module.css'

const Sticker = ({item, textChanging, index}) => {
    const router = useNavigate();
    const title = item.title;
    const description = item.description;
    return (
        <div>
            <div className={classes.Sticker}>
                    <div>
                        {title.element}
                        <ChangeButton callback={() => {
                            textChanging('title', index)
                        }}/>
                    </div>
                    <hr/>
                    <div>
                        {description.element}
                        <ChangeButton callback={() => {
                            textChanging('description', index)
                        }}/>
                    </div>
                    <button 
                    className='link'
                    onClick={() => {router(`/todo/${title.title}/${index+1}`)}}
                    >Add points to project</button>
                </div>
        </div>
    );
}

export default Sticker;
