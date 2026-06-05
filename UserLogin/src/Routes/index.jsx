import React from "react";
import { createBrowserRouter, RouterProvider, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Navbar from "../components/NavBar";
import Registration from "../pages/Register";

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
  ]);
 
 export default function AppRoutes() {
    return <RouterProvider router={Routers}/>
      
    
 }
