import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

   export  const getdataApi = createApi({
        reducerPath:"getdataApi",
        baseQuery:fetchBaseQuery({
            baseUrl:"http://localhost:6500"
        }),
        endpoints:(builder) =>({
            getData:builder.query({
                query:() =>"/user"
            })
        })
    })

    export const { useGetDataQuery} = getdataApi;
