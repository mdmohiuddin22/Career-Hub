import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/Applied Jobs/Applied Jobs';
import Contact from './components/Star Applying/StartApplying';
import ErrorPage from './error-page';
import { Root } from 'postcss';
import Home from './components/Statistics/Statistics';
import Banner from './components/Banner/Banner';
import JobCategoryList from './components/JobCategoryList/JobCategoryList';
import Statistics from './components/Statistics/Statistics';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App></App>
//   },
//   {
//     path:'about',
//     element: <About></About>
//   },
//   {
//     path:'contact',
//     element: <Contact></Contact>
//   },
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   }
// ])
const router = createBrowserRouter([
  {
    
    path: '/',
    element: <Home></Home>,
    
    
    children:[
//       {
// path:'/',
// element: <Banner></Banner>
//       },
//       {
        
// path:'/',
// element:<JobCategoryList></JobCategoryList>
//       },

      {
        path: '/',
        element:<About></About>,
        loader: () =>fetch('jobCategoryList.json')
        
      },
      {
        path:'/',
        element:<FeaturedJobs></FeaturedJobs>
        },
      {
        path:'contact',
        element: <Contact></Contact>
      },
     
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
