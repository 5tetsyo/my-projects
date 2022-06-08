import React, { useState } from 'react';
import classes from './ProjectSticker.module.css'
import Sticker from './Sticker';

const ProjectSticker = () => {
    const [stickers, setStickers] = useState([
        {id: 1,
         title: {title: 'Title', element: <p>Title</p>},
         description: {description: 'Your Description', element: <p>Your Description</p>}}
    ]);
    const createSticker = () => {
        setStickers([...stickers, {id: stickers.length,
            title: {title: 'Title', element: <p>Title</p>},
            description: {description: 'Your Description', element: <p>Your Description</p>}}])
    }
    const textChanging = (property, index) => {
        const changing = stickers[index];
        if (changing[property].element.type === 'p') {
            setStickers([...stickers], changing[property].element = 
                <input
                    onChange={(event) => setStickers([...stickers], changing[property][property] = event.target.value)}
                />
            )
        } else if (changing[property].element.type === 'input') {
            setStickers([...stickers], changing[property].element = 
            <p>{changing[property][property]}</p>)
        }  
    }
    return (
        <div className={classes.Projects}>
            {stickers.map((sticker, index) =>
                <Sticker
                    item={sticker}
                    index={index}
                    textChanging={textChanging}
                    key={index+1}
                />
            )}
            <div className={classes.Sticker_create}>
                <span className='link' onClick={()=>{
                    createSticker()
                }}>Create your first project</span>
            </div>
        </div>
    )
}
export default ProjectSticker;
