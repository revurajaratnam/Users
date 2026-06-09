import React, { useState } from "react";
import { useSignInUserMutation } from "../api/auther";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [formdata, setFormdata] = useState({
    uname:"" ,password:""
  });
  const navigate = useNavigate();
  const [show,setShow] = useState(false);

  const [login, { isLoading, error }] = useSignInUserMutation();

  const handleOnchange = (e) =>{
        setFormdata({
          ...formdata,
         [ e.target.name] : e.target.value
        })
  }
  const handleonPass = (e) =>{
    setShow(!show)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(formdata).unwrap();
      console.log(result);
      window.localStorage.setItem("Token",result.token);
      window.localStorage.setItem("UserName",JSON.stringify(result.user?.uname))
      console.log(result.user?.uname);

      navigate("/dashboard");
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="uname"
          placeholder="Enter UserName"
          value={formdata.uname}
          onChange={handleOnchange}
        />

        <br />

        <input
          type={show?"text":"password"}
          name="password"
          placeholder="Enter password"
          value={formdata.password}
          onChange={handleOnchange}
          
        />

        <br />
       
        <input type="checkbox"
        onClick={handleonPass}
         />   {!show?"Show Password":"Hide Password"}
          <br />

        <button type="submit" disabled={isLoading}
        
        >
          {isLoading ? "Signing in..." : "Sign In"}
          
        </button>

        {error && (
          <p style={{ color: "red" }}>
            {error.data?.message || "Login failed"}
          </p>
        )}
      </form>
    </div>
  );
}