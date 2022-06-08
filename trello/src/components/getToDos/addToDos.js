import fetchTodo from './fetchToDo'

async function addToDos(dataId, blocks, callback) {
    const response = await fetchTodo(10, dataId);
    const firstBlock = blocks[0];
    const lastBlock = blocks[blocks.length - 1]
    response.data.map(item => item.completed 
        ? callback([...blocks], firstBlock.items = [...firstBlock.items, item]) 
        : callback([...blocks], lastBlock.items = [...lastBlock.items, item])
    ) 
    
}
export {addToDos}