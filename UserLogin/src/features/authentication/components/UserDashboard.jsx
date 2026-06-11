import React from "react";
import { useGetDataQuery } from "../api/getUserInfoApi";

export default function UserDBoard() {
const {data,isLoading, error}= useGetDataQuery();

if(isLoading){
   return <h1>Loading please Wait...</h1>
}
console.log(data);

    return(
        <div>
           {
            data?.map((item)=>(
                <div key={item._id}>
                    <h2>{item.fname}</h2>
                    <img src={`http://localhost:6500/uploads/${item.photo}`} width="150"  style={{borderRadius:"50%", boxShadow:"1px 2px 20px 10px rgba(0,0,0,0.25)"}} />
                </div>

            ))
           
           }
        </div>
    )
}