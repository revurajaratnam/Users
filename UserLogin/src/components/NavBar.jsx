import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
Link
export default function Navbar() {
           
    return(
        <div className="d-flex justify-content-between align-items-center">
            <h1 className="text-danger">Logo</h1>
            <div className="d-flex gap-3">
           <Link to={"/signin"}> <button className="btn btn-primary">Sign In</button></Link>
           <Link to={"/signup"}> <button className="btn btn-secondary">Sign Up</button></Link>
           <Link to={"/user"}><button className="btn btn-success">User Registration</button></Link>
            </div>
            
        </div>
    )
}