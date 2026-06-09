import React, { useState } from "react";
import { useRegisterUserMutation } from "../api/authApi";
export default function SignUp() {
        const [formData,setFormData] = useState(
            {
                firstname:"",
                lastname:"",
                password:"",
                confirmpassword:"",
                uname:""
            }
        );
        const [errors,setErrors] = useState({})
        const [ message, setMessage] = useState("")
        const [registerUser,{isLoading}] = useRegisterUserMutation();

       const  handelChange =(e) => {
            const {name , value } = e.target;
            setFormData({
                ...formData,
                [name] : value

            });

            if(errors[name]){
                setErrors({
                  ...errors,
                  [name]:""
                });
        }
    }

        const handelSubmit = async (e) => {
            e.preventDefault();
            const newErrors = {};
            console.log("Ready to send",formData);
           if(!formData.firstname.trim())  {
            newErrors.firstname ='please enter a firstname.'
           }  
           if(!formData.lastname.trim())  {
            newErrors.lastname ='please enter a lastname.'
           }   if(!formData.password.trim())  {
            newErrors.password ='please enter a password.'
           }   if(!formData.confirmpassword.trim())  {
            newErrors.firstname ='please enter a confirmpassword.'
           }   if(!formData.uname.trim())  {
            newErrors.firstname ='please enter a UserName.'
           }   
           if(Object.keys(newErrors).length>0){
            setErrors(newErrors);
            return;
           }
            try {
                const result = await registerUser(formData).unwrap();
                console.log("Success", result);
                setMessage("Sign up succussful!")

            } catch (error) {
                console.log("Error",error);
                setMessage("Failed! Try again.")
            }
        }

    return(
        <div>
            {message && <h4 style={{ color: message.includes("successful") ? "green" : "red" }}>{message}</h4>}
           <form onSubmit={handelSubmit} >
           <input 
           id="firstname"
            type="text"
            placeholder=" Enter First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handelChange}
             /> 
             {errors.firstname && <span style={{ color: "red", display: "block", fontSize: "12px" }}>{errors.firstname}</span>}
             <br />
             <input 
            type="text"
            placeholder=" Enter Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handelChange}
             /> <br />
             <input 
            type="text"
            placeholder=" Enter Password"
            onChange={handelChange}
            name="password"
            value={formData.password}
             /> <br />
             <input 
            type="text"
            placeholder=" Enter Confirm Password"
            onChange={handelChange}
            name="confirmpassword"
            value={formData.confirmpassword}
             /> <br />
              <input 
            type="text"
            placeholder=" Enter New Email ID"
            onChange={handelChange}
            name="uname"
             /> <br />
             <button>Sign Up</button>
           </form>
        </div>
    )
}