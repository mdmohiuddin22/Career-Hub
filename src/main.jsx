import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './error-page';
import { Root } from 'postcss';
import Home from './components/Home/Home';
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
      {
        path: 'about',
        element:<About></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
