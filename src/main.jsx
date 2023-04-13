import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/JobCategoryList/JobCategoryList';
import Contact from './components/Star Applying/StartApplying';
import { Root } from 'postcss';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import JobCategoryList from './components/JTL/JTL';
import Statistics from './components/Home/Home';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import Statatistic from './components/Statatistic/Statatistic';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
//   {
    
//     path: '/',
//     element: <Home></Home>,
    
    
    
//     children:[

//       {
//         path: '/',
//         element:<About></About>,
//         loader: () =>fetch('jobCategoryList.json'),
//       },
//       {
// path:'/',
// element:<FeaturedJobs></FeaturedJobs>
//       },
//       {
//         path:'contact',
//         element: <Contact></Contact>,
     
//       },
//     {
//       path:'/statatistic',
//       element:<Statatistic></Statatistic>
//     }
     
//     ]
//   }
{
  path:'/',
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:'/',
      element:<Banner/>
    },
    {
      path:'/statatistic',
      element:<Statatistic/>
    }
  ]
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
