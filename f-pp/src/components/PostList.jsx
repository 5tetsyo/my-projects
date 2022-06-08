import React from "react";
import PostItem from "./postItem";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}
//Параметр можна дескрукрутизувати при передачі, наприклад ({posts})
const  PostList = ({posts, title, remove}) => {
    //Перевірка на те, чи є якісь пости в масиві, малювання по умові
    if (!posts.length) {
        return (
            <div style={{color: 'rgba(0, 128, 128, 0.5)'}}>Поки що постів немає. Створіть перший пост самі!</div>
        )
    }
    return (
        <div style={style}>
            <h1>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                //проходимо через масив об'єктів-постів, і для кожного малюємо певний пост з його номером, який дорівнє його номеру в масиві + 1
                    <CSSTransition 
                        key={post.id}
                        timeout={500}
                        classNames='post'
                        >
                        <PostItem remove = {remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
            
        </div>
    )
}

export default PostList