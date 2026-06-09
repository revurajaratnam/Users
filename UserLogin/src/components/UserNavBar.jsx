import React from "react";
import { Link, Navigate } from "react-router-dom";
export default function UserNav() {
    const handleOnLogOut = () =>{
        localStorage.removeItem("Token");
        localStorage.removeItem("UserName");
    }
    return(
        <div>
            <div className="d-flex p-2 justify-content-between" style={{marginRight:"20px"}}>
            <h1>Logo</h1>
      <Link to={"/"}><button onClick={handleOnLogOut}>Logout</button></Link>
            </div>
            
        </div>
    )
    
}