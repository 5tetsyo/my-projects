import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            {/*Інпут для пошуку постів*/ }
            <MyInput placeholder = 'Search' value = {filter.query} onChange = {e => setFilter({...filter, query: e.target.value})}/>

            {/*Селевт, в який ми передаємо вибране сортування, ф-цію яка сортує, і опції, по-яким вибираємо сортування*/ }
            <MySelect 
                value={filter.sort}
                onChange={selectedSort => {setFilter({...filter, sort: selectedSort})}}
                defaultValue={'Сортування'}
                options = {[
                    {value: 'title', name: 'По назві'},
                    {value: 'body', name: 'По вмісту'}
                ]}
            />
        </div>
    );
}

export default PostFilter;
