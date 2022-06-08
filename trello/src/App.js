import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import axios from "axios";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './components/StartPage/StartPage';
import ProjectSticker from './components/UI/projectsStickers/ProjectSticker';
import ToDoStickers from './components/UI/toDoStickers/ToDoStickers';
import { faHome } from '@fortawesome/free-solid-svg-icons'



function App() {

  /*const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: 'Lviv,ua',
      lat: '0',
      lon: '0',
      id: '2172797',
      lang: 'ua',
      units: 'metric',
      mode: 'json'
    },
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': 'a3ad1aa1bfmshfb2151e71ed5ff7p1b57a3jsnc0606611b4ca'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });*/
  
  return (
    <div className="App">
      <BrowserRouter>
      <Link className='home_link' to='/'><FontAwesomeIcon icon={faHome}/></Link>
        <Routes>
          <Route path='/todo/:name/:id' exact = {true} element={<ToDoStickers/>}/>
          <Route path='/projects' element={<ProjectSticker/>}/>
          <Route path='/' element={<StartPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
