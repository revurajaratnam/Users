import React, { useState } from "react";

export default function SignUp() {
        const [formData,setFormData] = useState(
            {
                firstname:"",
                lastname:"",
                password:"",
                confirmpassword:""
            }
        );

        const handelChange =(e) => {
            const {name , value } = e.target;
            setFormData((prevData)=>({
                ...prevData,
                [name] : value

            }));
        }

        const handelSubmit = async (e) => {
            e.preventDefault();
            console.log("Ready to send",formData);
            try {
                const result=0
            } catch (error) {
                setMessage("failed ! try again")
            }
        }

    return(
        <div>
           <form onSubmit={handelSubmit} >
           <input 
            type="text"
            placeholder=" Enter First Name"
            name="fname"
            onChange={handelChange}
             /> <br />
             <input 
            type="text"
            placeholder=" Enter Last Name"
            name="lname"
            onChange={handelChange}
             /> <br />
             <input 
            type="text"
            placeholder=" Enter Password"
            onChange={handelChange}
            name="pass"
             /> <br />
             <input 
            type="text"
            placeholder=" Enter Confirm Password"
            onChange={handelChange}
            name="conpass"
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