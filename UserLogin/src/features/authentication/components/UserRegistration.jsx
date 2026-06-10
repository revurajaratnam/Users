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
            <form onSubmit={handleSubmit}>
                <input type="text" 
                        name="fname"
                /> <br />
                <input type="text" 
                        name="age"
                /> <br />
                <input type="text"
                 /> <br />
                 <input type="file" 
                 /> <br />
                 <button type="submit"
                 >Save</button>
            </form>
        </div>
    )
}