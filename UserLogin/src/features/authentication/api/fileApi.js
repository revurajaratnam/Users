import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

   export  const fileApi = createApi({
        reducerPath:"fileApi",
        baseQuery: fetchBaseQuery({
            baseUrl: ""
        }),
        endpoints : (build) =>{
            UploadFile:  build.mutation({
                query: (fd) =>({
                    url:"/user",
                    method:"POST",
                    body:fd
                })
            })
        }

    })

    export const {useUploadFileMutation} = fileApi;