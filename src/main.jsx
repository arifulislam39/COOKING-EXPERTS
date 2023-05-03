/*eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/main.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import ChefRecipes from "./pages/chefRecipes/ChefRecipes.jsx";
import Error from "./pages/Error/Error.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Login/Register.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: "/chefrecipes/:id",
        element:<PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute> ,
        loader: ({ params }) => fetch("http://localhost:5000/chefInfo"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
