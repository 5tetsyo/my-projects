import React, { useEffect,useRef,useState } from 'react';
import PostList from '../PostList'
import PostForm from '../PostForm';
import PostFilter from '../PostFilter';
import MyModal from '../UI/modal/MyModal';
import MyButton from '../UI/button/MyButton';
import { usePosts } from '../hooks/usePost';
import PostService from '../API/PostService';
import Loader from '../UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import {getPageCount} from '../utilites/pages';
import Pagination from '../UI/paginaton/pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../UI/select/MySelect';

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);  //Стан, який реалізовує показ модального вікна
    const [totalPages, setTotalPages] = useState(0) //стан, який відповідає за загальну к-сть cторінок
    const [limit, setLimit] = useState(10) //стан ліміту
    const [page, setPage] = useState(1) //стан сторінки
    const createPost = (newPost) => {setPosts([...posts, newPost]); setModal(false)}
    const removePost = (post) => {setPosts(posts.filter(p => p.id !== post.id))}
    const sortedAndSearched = usePosts(posts, filter.sort, filter.query) //Кастомний хук
    const lastElement = useRef()

 
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const fetched = await PostService.getAll(limit, page)
        setPosts([...posts, ...fetched.data]);
        const totalCount = fetched.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit)) //або передат довжину полученого масиву
    });

    const changePage = (page) => {
        setPage(page);
    }

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        console.log(1);
        setPage(page + 1)
    })  
    
    useEffect(() => { fetchPosts() }, [page, limit]);
        
    return (
        <div className='App'>
            <MyButton style={{marginTop: '2%'}} onClick = {() => setModal(true)}>
                Створити користувача
            </MyButton>

            <MyModal visible={modal} setVisible = {setModal}>
                <PostForm create = {createPost}/>
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect 
                value={limit} 
                onChange={(value) => {setLimit(value)}}
                defaultValue = 'К-сть елементів на сторінці'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 15, name: '15'},
                    {value: 20, name: '20'},
                    {value: -1, name: 'Показати всі'}
                ]}
            />
            {postError && <h1>Some error....</h1>}

            {isPostLoading && 
            <div style={{display: 'flex', justifyContent: 'center', marginTop: ' 50px'}}><Loader/></div>}
            <PostList remove = {removePost} posts = {sortedAndSearched} title = 'Список постів'/>
            <div ref={lastElement} style={{height: '20px', background: 'red'}}/>
            <Pagination
                page={page} 
                totalPages={totalPages} 
                changePage={changePage}
            />
        </div>


    );
}

export default Posts;
