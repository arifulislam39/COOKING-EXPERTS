/*eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/main.jsx';
import Blog from './pages/Blog/Blog.jsx';
import ChefRecipes from './pages/chefRecipes/ChefRecipes.jsx';
import Error from './pages/Error/Error.jsx';

const router =createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Main></Main>,
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/chefrecipes/:id',
        element:<ChefRecipes></ChefRecipes>,
        loader:({params})=> fetch("http://localhost:5000/chefInfo")
      }
      

    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
