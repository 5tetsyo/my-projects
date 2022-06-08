import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

    //useState для article(поста)
    const [article, setArticle] = useState({
        title: '',
        body: ''
      })

    //Створення нового поста на кнопку, який розгортає article з зафіксованими даними, які ми ввели і додає туди айді
    const createNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...article,
            id: Date.now()
        }

        //create() - ф-ція-колбек, яку ми передали з App
        create(newPost)

        //зміна стану на пусті строки, після того, як пост додався
        setArticle({title:'', body: ''})
      }
    return (
        <form>
        {/*Управляємий інпут */}
        <MyInput 
          value={article.title}
          type='text' 
          placeholder='Title'
          onChange={e=>setArticle({
            ...article, title: e.target.value
          })}
        />
        <MyInput 
          value={article.body} 
          type='text'
          placeholder='Body'
          onChange={e=>setArticle({
            ...article, body: e.target.value
          })}
        />
        {/*Неуправляємий інпут, треба додати атрибут ref, який дорівнює змінній використаній на UseRef()*/}
        <input
          className='useRefInput'
          type='text' 
          placeholder='BodyUnc'></input>
        <MyButton onClick = {createNewPost}>Створити пост</MyButton>
      </form>
    );
}

export default PostForm;
