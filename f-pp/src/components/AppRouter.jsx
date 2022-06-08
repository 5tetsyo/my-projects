import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import { publicRoutes, privateRoutes } from './routes/routes';
import { AuthContext } from './context/context';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
  const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

  if(isLoading) {
    return <Loader/>
  }
    
  
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          {isAuth 
            ? privateRoutes.map(route => 
              route.to 
              ? <Route key={route.key} exact={route.exact} path={route.path} element={<Navigate to={route.to}/>}/> 
              : <Route key={route.key} exact={route.exact} path={route.path} element={<route.element/>}/>
            )
            : publicRoutes.map(route => 
              route.to 
              ? <Route key={route.key} exact={route.exact} path={route.path} element={<Navigate to={route.to}/>}/> 
              : <Route key={route.key} exact={route.exact} path={route.path} element={<route.element/>}/>
            )
          }
        </Routes>
    </BrowserRouter>
    );
}

export default AppRouter;
