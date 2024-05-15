import {
    createBrowserRouter,
    } from "react-router-dom";
    import MainLayout from "../../src/Layout/MainLayout"
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";

import AllJobCard from "../Pages/AllJobsSection/AllJobCard";
import AddJobs from "../Pages/AddJobs";
import PrivateRoute from "./PrivateRoute";
import MyList from "../Pages/MyList";
import UpdateJob from "../Pages/UpdateJob";
import SingleJob from "../Pages/SingleJob";
import ErrorPage from "../Pages/ErrorPage";
import AddBlogs from "../Pages/AddBlogs";
import AllBlogsPage from "../Pages/AllBlogsPage";
import SingleBlog from "../Pages/SingleBlog";
import AppliedJobs from "../Pages/AppliedJobs";


  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: '/allblogs',
        element: <AllBlogsPage></AllBlogsPage>,
      },
      {
        path: '/addjobs',
        element: <PrivateRoute>
          <AddJobs></AddJobs>
        </PrivateRoute>
      },
      {
        path: '/myjobs',
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>
      },
      {
        path: '/appliedjobs',
        element: <PrivateRoute>
          <AppliedJobs></AppliedJobs>
        </PrivateRoute>
      },
      {
        path: '/updatejobs/:id',
        element: <PrivateRoute>
          <UpdateJob></UpdateJob>
        </PrivateRoute>,
         loader: ({params}) => fetch(`http://localhost:5001/allJobs/${params.id}`)
      },
      {
        path: "singlejob/:id",
        element: <PrivateRoute>
          <SingleJob></SingleJob>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5001/allJobs/${params.id}`)
      },
      {
        path: "singleblog/:id",
        element: <PrivateRoute>
          <SingleBlog></SingleBlog>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5001/allblogs/${params.id}`)
      },
      {
        path: "/addblogs",
        element: <PrivateRoute>
          <AddBlogs></AddBlogs>
        </PrivateRoute>,
     
      },
      
    ]
    }
  ]);

export default router;