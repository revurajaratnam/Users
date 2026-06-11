import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

   export  const fileApi = createApi({
        reducerPath:"fileApi",
        baseQuery: fetchBaseQuery({
            baseUrl: "http://localhost:6500",
        }),
        endpoints : (build) =>({
            UploadFile:  build.mutation({
                query: (fd) =>({
                    url:"/user",
                    method:"POST",
                    body:fd,
                })
            })
        }
)
    })

    export const {useUploadFileMutation} = fileApi;