import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from 'postcss';
import Banner from './components/Banner/Banner';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import Statatistic from './components/Statatistic/Statatistic';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import StartApplying from './components/Star Applying/StartApplying';
import Main from './components/LayOut/Main';
// import JobCategoryList from './components/JobCategoryList/JobCategoryList';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobCategoryList1 from './components/AppliedJobs/JobCategoryList1/JobCategoryList1';
import SeeAllJobs from './components/SeeAllJobs/SeeAllJobs';
import ViewDetails from './components/ViewDetails/ViewDetails';


const router = createBrowserRouter([
  
    
{
  path:'/',
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
      {
        path: '/',
         element:<Main/>},
    //   {
    //      path:'/jobcategory', 
    //   element:<JobCategoryList/>,
    //   loader: () =>fetch('/jobCategoryList.json')
    // },

//     {
// path:'/jobcategory1',
// element:<JobCategoryList1></JobCategoryList1>,
// loader:() => fetch('/jobCategoryList.json')

//     },
//     {
// path:'featuredjobs',
// element:<FeaturedJobs/>,
// loader: () => fetch('/featuredJobs.json')
//     },
    
     { path:'/statatistic',
      element:<Statatistic/>},
     { path:'/startApplying',
      element:<StartApplying/>},
     { path:'/blog',
      element:<Blog/>},
     { path:'/appliedJobs',
      element:<AppliedJobs/>},
      {
        path:'/seealljobs',
        element:<SeeAllJobs></SeeAllJobs>
      },
      {
        path:'/viewdetails',
        element:<ViewDetails></ViewDetails>,
        loader: () => fetch('featuredJobs.json')

      }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
