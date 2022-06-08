import axios from "axios";

async function fetchTodo(limit, page) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
                _limit:limit,
                _page:page
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}
export default fetchTodo