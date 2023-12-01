import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Sections/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import Singlebook from "../components/Singlebook";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import UploadBook from "../components/Dashboard/UploadBook";
import ManageBooks from "../components/Dashboard/ManageBooks";
import Edit from "../components/Dashboard/Edit";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blog",
                element: <Blog/>
            }, 
            {
                path: "/book/:id",
                element: <Singlebook/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout/>,
        children:[
            {
                path: "/admin/dashboard",
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBook/>
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks/>
            },
            {
                path: "/admin/dashboard/edit/:id",
                element: <Edit/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`) 
            }
        ]
    }, 
    {
        path: "sign-up",
        element: <Signup/>
    },
    {
        path: "login",
        element: <Login/>
    }, 
    {
        path: "logout",
        element: <Logout/>
    }
])

export default router;
