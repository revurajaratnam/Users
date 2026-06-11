import React from "react";
import { useUploadFileMutation } from "../api/fileApi";
export default function UserRegistration() {

    const[ uploadFile,{isLoading, isSuccess,error, data}] = useUploadFileMutation();

        const handleSubmit = async (e)=>{
            e.preventDefault();
            const formD= new FormData(e.target);

            try {
                const result = await uploadFile(formD).unwrap();
                console.log("Success",result)
            } catch (error) {
                console.log("Error",error);
            }

        }


    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h1>User Registration</h1>
                <input type="text" 
                        name="fname"
                        placeholder="Enter Full name"
                /> <br />
                <input type="text" 
                        name="age"
                        placeholder="Enter Age"

                /> <br />
                <input type="email"
                        name="Email"
                        placeholder="Enter valid email"
                 /> <br />
                 <input type="file" 
                        name="photo"
                 /> <br />
                 <button type="submit"
                 >Save</button>

                 {isLoading && <p>Uploading..</p>}
                 {isSuccess && <p>Uploaded Succed</p>}
                 {error && <p>Upload Failed!</p>}
            </form>
        </div>
    )
}