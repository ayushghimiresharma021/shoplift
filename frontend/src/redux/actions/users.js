import axios from 'axios' ;

import React from 'react'
import {toast} from 'react-toastify' ;


export const loadUser = (email,password) => async(dispatch) => {
    try {
        toast.success('Login successful')
        dispatch({
            type: 'LoadUserRequest'
        })
        const {data} = await axios.post('/user/login-user',{email,password},{withCredentials: true}) ;
        dispatch({
            type : "LoadUserSuccess",
            payload : data.user,
        }) ;

    }
    catch(error){
        dispatch({
            type: 'LoadUserError',
            payload : error.response.data.message
        })
        toast.error(error.response.data.message)
    }
}
