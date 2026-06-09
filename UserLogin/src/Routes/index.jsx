import React from "react";
import { createBrowserRouter, RouterProvider, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Navbar from "../components/NavBar";
import Registration from "../pages/Register";
import Dashboard from "../features/authentication/components/Dashboard";

  const Routers = createBrowserRouter([
   
    {
        path:"/",
        element: <Navbar />
    },
    {
      path:"/signin",
      element: <Login />
    },
    {
      path:"/signup",
      element: <Registration/>
  },
  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>
  }
  ]);
 
 export default function AppRoutes() {
    return <RouterProvider router={Routers}/>
      
    
 }
