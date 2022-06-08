import { Navigate } from "react-router-dom";
import About from "../pages/About";
import ErrorPost from "../pages/ErrorPost";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {key: Date.now(), path: '/', element: Navigate, to: '/about', exact: true},
    {key: Date.now(), path: '/login', element: Navigate, to: '/posts', exact: true},
    {key: Date.now(), path: '/about', element: About, exact: true},
    {key: Date.now(), path: '/posts', element: Posts, exact: true},
    {key: Date.now(), path: '/posts/:id', element: PostIdPage, exact: true},
    {key: Date.now(), path: '*', element: ErrorPost, exact: true}
];
export const publicRoutes = [
    {key: Date.now(), path: '/', element: Navigate, to: '/login', exact: true},
    {key: Date.now(), path: '/about', element: Navigate, to: '/login', exact: true},
    {key: Date.now(), path: '/posts', element: Navigate, to: '/login', exact: true},
    {key: Date.now(), path: '/posts/:id', element: Navigate, to: '/login', exact: true},
    {key: Date.now(), path: '*', element: ErrorPost, exact: true},
    {key: Date.now(), path: '/login', element: Login, exact: true}
];
/*<Route path='/' element={<Navigate to="/about"/>}/>
          <Route path='/about' element={<About/>}/>
          <Route exact path='/posts' element={<Posts/>}/>
          <Route exact path='/posts/:id' element={<PostIdPage/>}/>
          <Route path='*' element={<ErrorPost/>}/>*/ 