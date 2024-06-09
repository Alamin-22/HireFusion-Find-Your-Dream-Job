import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Add_Job from "../Pages/Add_Job";
import Applied_Jobs from "../Pages/Applied_Jobs";
import My_Job from "../Pages/My_Job";
import Blogs from "../Pages/Blogs";
import Profile from "../Pages/Profile";
import Login from "../Pages/HandleLogin/Login";
import Register from "../Pages/HandleLogin/Register";
import PrivateRoute from "../Private/PrivateRoute";
import All_jobs from "../Pages/All_jobs";
import JobDetails from "../Components/Details/JobDetails";
import Update from "../Components/UpdateJob/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/all_jobs",
                element: <All_jobs></All_jobs>
            },
            {
                path: "/add_job",
                element: <PrivateRoute><Add_Job /></PrivateRoute>,
            },
            {
                path: `/jobDetails/:id`,
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://jobboard-cookie-test.vercel.app/api/v1/jobsdata/${params.id}`),
            },
            {
                path: `/updatejob/:id`,
                element: <PrivateRoute><Update /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://jobboard-cookie-test.vercel.app/api/v1/jobsdata/${params.id}`),
            }
            ,
            {
                path: "/applied_jobs",
                element: <PrivateRoute><Applied_Jobs /></PrivateRoute>,
            },
            {
                path: "/my_jobs",
                element: <PrivateRoute><My_Job /></PrivateRoute>,
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/user",
                element: <Profile></Profile>
            }
        ]
    },
]);

export default router;