import React from 'react';
import classes from './toDoStickers.module.css'
import ChangeButton from '../buttons/changeButton/changeButton';



const ItemsSticker = ({block, callback, dragAndDrop}) => {
    return (
    <div 
        className={classes.todo_block}
        onDragOver={(e)=>{dragAndDrop.dragOverHandler(e)}}
        onDrop={(e)=>{dragAndDrop.dropBlockHandler(e, block)}}
    >
        {block.header}
        <ChangeButton 
            callback={callback}
        ></ChangeButton>
        {block.items.map(item =>
            <div 
                onDragOver={(e)=>{dragAndDrop.dragOverHandler(e)}}
                onDragStart={(e)=>{dragAndDrop.dragStartHandler(e, block, item)}}
                onDragLeave={(e)=>{dragAndDrop.dragLeaveHandler(e)}}
                onDragEnd={(e)=>{dragAndDrop.dragEndHandler(e)}}
                onDrop={(e)=>{dragAndDrop.dropHandler(e, block, item)}}
                draggable={true} 
                className={classes.toDoItem} 
                id={item.id}
                key={item.id}>
                    {item.title}
            </div>
        )}
    </div>
    );
}

export default ItemsSticker;
