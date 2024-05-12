import {
    createBrowserRouter,
    } from "react-router-dom";
    import MainLayout from "../../src/Layout/MainLayout"
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";

import AllJobCard from "../Pages/AllJobsSection/AllJobCard";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/alljobs',
        element: <AllJobCard></AllJobCard>,
      }
      
    ]
    }
  ]);

export default router;