import React, { useState } from "react";

export default function SignIn() {

        const [visible,setVisible] = useState(false)
        const handelPassword = () =>{
            setVisible(!visible);
        }
        const handelChange = (e) =>{
            setVisible(e.target.value)
        }

    return(
        <div>
                <h1>Sign In</h1>
                <form>
                    <input type="text"
                    placeholder="Enter a Email"
                     /> <br />
                    <input 
                    type={!visible?"text":"password"}
                    placeholder="Enter a password"
                    onChange={handelChange}
                        />  <br />
                    <input type="checkbox"
                    onClick={handelPassword}
                     /> Show Password <br />

                     <button>Sign In</button>
                </form>


        </div>
    )
}