import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/loader/Loader';
const PostIdPage = () => {
    const params = useParams()
    console.log(params);
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    });
    const [fetchComments, isComLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getComments(params.id)
        setComments(response.data)
    });
    useEffect(() => {fetchPosts(params.id); fetchComments(params.id)}, [])
    return (
        <div>
            <h1>Uhu #{params.id}</h1>
            {isLoading ? <Loader/> : <div>{post.id}. {post.title}</div>}
            <h1>Коментарі</h1>
            {isComLoading 
                ? <Loader/> 
                : <div>{comments.map(com => 
                    <div key= {com.id} style={{marginTop: '15px'}}>
                        <h5>{com.email}</h5>
                        <div>{com.body}</div>
                    </div>
                )}</div>
            }
        </div>
    );
}

export default PostIdPage;
