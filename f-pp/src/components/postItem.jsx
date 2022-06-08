import React from "react"
import MyButton from "./UI/button/MyButton"
import {useNavigate} from 'react-router-dom'

//props - вхідні дані для зміни, які ми передаємо в елемент (value, title і т.д.)
const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className='post'> 
        <div className='postContent'>
          <div className="text_block">
            <b>{props.post.id}. {props.post.title}</b>
            <p>
            {props.post.body}</p>
          </div>
          <div className='postButton'>
            <MyButton onClick = {() => router(`/posts/${props.post.id}`)}>Відкрити</MyButton>
            <MyButton onClick = {() => props.remove(props.post)}>Очистити</MyButton>
          </div>
        </div>
      </div>
    )
}

export default PostItem