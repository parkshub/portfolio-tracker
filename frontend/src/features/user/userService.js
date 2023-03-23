import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = '/api/user/'

const registerUser = async(body) => {
    console.log("service received==", body)
    const response =  await axios.post(API_URL + 'registerUser', body)
    console.log("this is the response", response)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const loginUser = async(body) => {
    console.log("service received==", body)
    const response =  await axios.post(API_URL + 'loginUser', body)
    console.log("this is the response", response)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logoutUser = async() => {
    localStorage.removeItem("user")
}


const userService = {
    registerUser,
    loginUser,
    logoutUser,
}

export default userService