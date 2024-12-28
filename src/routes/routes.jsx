import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';


const routes = createBrowserRouter( [
    {
        path: '/',
        element:<Root></Root>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch("/news.json")
            

            },
            {
             path:"/news/:id",
             element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
             loader:()=>fetch('/news.json')
            },
            {
                path:"/login",
                element: <LogIn></LogIn>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ]
    }
  ]
)
;







export default routes;