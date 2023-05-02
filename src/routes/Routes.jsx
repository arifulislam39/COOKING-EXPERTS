/*eslint-disable */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/main";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                }
            ]
        }
    ]
);
export default router;
