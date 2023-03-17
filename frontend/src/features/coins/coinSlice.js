import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import coinService from "./coinService"


const initialState = {
    coins: [],
    isRejected: false,
    isPending: false, 
    isFulfilled: false,
    message: ''
}

export const getTopCoins = createAsyncThunk(
    'coin/getTopCoins',
    async(_, thunkAPI) => {
        try {
            return await coinService.getTopCoins()
        } catch (error) {
            const message = error.response.data
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getAllCoins = createAsyncThunk(
    'coin/getAllCoins',
    async(_, thunkAPI) => {
        try {
            return await coinService.getAllCoins()
        } catch (error) {
            const message = error.response.data
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers: {
        reset: (state) => {
            state.coins = []
            state.isRejected = false
            state.isPending = false
            state.isFulfilled = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTopCoins.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.message = action.payload
            })
            .addCase(getTopCoins.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = true
            })
            .addCase(getTopCoins.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.coins = action.payload
            })

            .addCase(getAllCoins.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.message = action.payload
            })
            .addCase(getAllCoins.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = true
            })
            .addCase(getAllCoins.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.coins = action.payload
            })
    }
})

export default coinSlice.reducer
export const { reset } = coinSlice.actions