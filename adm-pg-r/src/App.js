import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/AdminPage/AdminPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoginPage from './pages/loginPage/LoginPage';
import UserPage from './pages/UserPage/UserPage';
import { getUs } from './users/users';

function App() {
  const [users, setUsers] = useState([...getUs]);
  const [isLoginned, setIsLoggined] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage isLog={isLoginned} setLog={setIsLoggined} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}/>
            {isAdmin
            ? <Route path='/admin'element={<AdminPage users={users} setUsers={setUsers}/>}/>
            : <Route path='/user'element={<UserPage users={users} setUsers={setUsers}/>}/>
            }
            {isLoginned ? <Route path='*' element={<Navigate to={isAdmin ? '/admin' : '/user'}/>}/> : <Route path='/404' element={<ErrorPage/>}/>}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
