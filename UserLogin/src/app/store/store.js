import {configureStore} from '@reduxjs/toolkit'
import { registerApi } from '../../features/authentication/api/authApi'
import  {signInApi} from '../../features/authentication/api/auther'
import { fileApi } from '../../features/authentication/api/fileApi'
export const store = configureStore({
    reducer:{
        [registerApi.reducerPath]: registerApi.reducer,
        [signInApi.reducerPath] : signInApi.reducer,
        [fileApi.reducerPath] : signInApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(registerApi.middleware , signInApi.middleware,fileApi.middleware)
})
