import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addToDos } from '../../getToDos/addToDos';
import Modal from '../modal/modal';
import ItemsSticker from './ItemsSticker';
import classes from './toDoStickers.module.css'

const ToDoStickers = () => {
    const [blocks, setBlocks] = useState([
        {id: 1, header: 'To Do', items:[]},
        {id: 2, header: 'In progress', items:[]},
        {id: 3, header: 'Completed', items:[]}
    ]);
    const [currentBlock, setCurrentBlock] = useState(null);
    const [currentItem, setCurrentItem] = useState(null)
    const [modal, setModal] = useState(false)
    const params = useParams();

    const dragObject = {
        dragOverHandler: function(e) {
            e.preventDefault()
            if (e.target.className.includes('toDoItem')) {
                e.target.style.boxShadow ='0 4px 3px gray'
            }

        },
        dragLeaveHandler: function(e) {
            e.target.style.boxShadow ='none'
        },
        dragStartHandler: function(e, block, item) { 
            setCurrentBlock(block);
            setCurrentItem(item);
        },
        dragEndHandler: function(e) {
            e.target.style.boxShadow ='none'
        },
        dropHandler: function(e, block, item) {
            e.preventDefault()
            const currentIndex = currentBlock.items.indexOf(currentItem)
            currentBlock.items.splice(currentIndex, 1)
            const dropIndex = block.items.indexOf(item)
            block.items.splice(dropIndex + 1, 0, currentItem)
            setBlocks(blocks.map(b => {
                if(b.id === block.id) {
                    return block
                }
                if(b.id === currentBlock.id) {
                    return currentBlock
                }
                return b;
            }))
            e.target.style.boxShadow = 'none'
        },
        dropBlockHandler: function(e, block) {
            if (currentBlock.id === block.id || block.items.length !== 0) {
                return;
            }
            block.items.push(currentItem)
            const currentIndex = currentBlock.items.indexOf(currentItem)
            currentBlock.items.splice(currentIndex, 1)
            setBlocks(blocks.map(b => {
                if(b.id === block.id) {
                    return block
                }
                if(b.id === currentBlock.id) {
                    return currentBlock
                }
                return b;
            }))
            e.target.style.boxShadow = 'none'
        }
    }

    
    const createToDo = (toDo, blockId) => {
        const block = blocks[blockId]
        setBlocks([...blocks], block.items = [...block.items, {completed: false,id: Date.now(),title: toDo, userId: params.id}])
    }
    useEffect(() => {
        console.log(1);
        addToDos(params.id, blocks, setBlocks)
    }, []);

    return (
        <div>
            <h2>{params.name}</h2>
            <div className= {classes.todo_grid}>
                {blocks.map(block => 
                    <ItemsSticker
                        key={block.id}
                        dragAndDrop={dragObject}
                        block={block}
                        callback={() => {
                            setCurrentBlock(block.id-1)
                            setModal(true)
                        }}
                    />
                    )}
                <Modal
                    create={(toDo) => createToDo(toDo, currentBlock)}
                    visible = {modal}
                    setVisible = {setModal}> 
                </Modal>
            </div>
        </div>
    );
}

export default ToDoStickers;