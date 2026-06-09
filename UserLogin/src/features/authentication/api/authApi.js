import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

   export const registerApi = createApi({
        reducerPath : "registerApi",
        baseQuery: fetchBaseQuery({
            baseUrl:"http://localhost:6500"
        }),
        endpoints: (build) => ({
            registerUser: build.mutation({
                query: (userData) => ({
                    url:'/signup',
                    method: "POST",
                    body:userData,
                    responseHandler:'text'
                })
            
            }),
            
        }),
    })

    export const {useRegisterUserMutation} = registerApi;
    