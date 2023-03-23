import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from './userService'

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user : "",
    isRejected: false,
    isPending: false,
    isFulfilled: false,
    message: ""
}


export const registerUser = createAsyncThunk(
    'auth/register',
    async (body, thunkAPI) => {
        console.log("slice received==", body)
        try {
            return await userService.registerUser(body)
        } catch (error) {
            const message = error.response.data
            console.log('this is converted message', message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (body, thunkAPI) => {
        console.log("slice received==", body)
        try {
            return await userService.loginUser(body)
        } catch (error) {
            const message = error.response.data
            console.log('this is converted message', message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        console.log("slice")
        return await userService.logoutUser()
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isRejected = false
            state.isPending = false
            state.isFulfilled = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.isFulfilled = false
                state.message = action.payload
            })
            .addCase(registerUser.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = false
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.user = action.payload
            })


            .addCase(loginUser.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.isFulfilled = false
                state.message = action.payload
            })
            .addCase(loginUser.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.user = action.payload
            })


            .addCase(logoutUser.fulfilled, (state) => {
                state.user = ""
            })
    }
})

export default authSlice.reducer
export const { reset } = authSlice.actions