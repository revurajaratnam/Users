import React from "react";
import Navbar from "../../../components/NavBar";
import UserNav from "../../../components/UserNavBar";
export default function Dashboard() {
const token = localStorage.getItem('Token');
    if(!token){
        return <Navigate to="/"></Navigate>
    }
    const user = JSON.parse(localStorage.getItem("UserName"));
    return(
        <div>
            {
                <UserNav></UserNav>
            }
            <h1>Hello This is the dashboard</h1>
            <h2>Welcome {user || "Guest" + "User"}</h2>
        </div>
    )
}