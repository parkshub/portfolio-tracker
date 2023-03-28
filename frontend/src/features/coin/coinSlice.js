import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import coinService from "./coinService"


const initialState = {
    coin: '',
    coins: [],
    isRejected: false,
    isPending: false, 
    isFulfilled: false,
    message: ''
}

export const testCoin = createAsyncThunk(
    'coin/testCoin',
    async(data, thunkAPI) => {
        // console.log('get coin slice received id ', id)
        try {
            return await coinService.testCoin(data)
        } catch (error) {
            const message = error.response.data
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const getCoin = createAsyncThunk(
    'coin/getCoin',
    async(id, thunkAPI) => {
        console.log('get coin slice received id ', id)
        try {
            return await coinService.getCoin(id)
        } catch (error) {
            const message = error.response.data
            return thunkAPI.rejectWithValue(message)
        }
    }
)

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


export const txCoin = createAsyncThunk(
    'coin/txCoin',
    async(data, thunkAPI) => {
        console.log('tx slice received ', data)
        try {
            const token = thunkAPI.getState().auth.user.token
            return await coinService.txCoin(data, token)
        } catch (error) {
            const message = error.response.data
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getTx = createAsyncThunk(
    'coin/getTx',
    async(_, thunkAPI) => {
        try {
            console.log("get tx slice ran")
            const token = thunkAPI.getState().auth.user.token
            return await coinService.getTx(token)
        } catch (error) {
            const message = error.response.data
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteTx = createAsyncThunk(
    'coin/deleteTx',
    async(id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await coinService.deleteTx(id, token)
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
            state.coin = ''
            state.coins = []
            state.isRejected = false
            state.isPending = false
            state.isFulfilled = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder



            .addCase(getCoin.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.message = action.payload
            })
            .addCase(getCoin.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = false
            })
            .addCase(getCoin.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.coin = action.payload
            })



            .addCase(getTopCoins.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.message = action.payload
            })
            .addCase(getTopCoins.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = false
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
                state.isFulfilled = false
            })
            .addCase(getAllCoins.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.coins = action.payload
            })

            .addCase(txCoin.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.message = action.payload
            })
            .addCase(txCoin.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = false
            })
            .addCase(txCoin.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.coins = action.payload
            })


            .addCase(getTx.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.message = action.payload
            })
            .addCase(getTx.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = false
            })
            .addCase(getTx.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.coins = action.payload
            })

            .addCase(deleteTx.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.message = action.payload
            })
            .addCase(deleteTx.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = false
            })
            .addCase(deleteTx.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.coins = action.payload
            })


            
            .addCase(testCoin.rejected, (state, action) => {
                state.isRejected = true
                state.isPending = false
                state.message = action.payload
            })
            .addCase(testCoin.pending, (state) => {
                state.isRejected = false
                state.isPending = true
                state.isFulfilled = false
            })
            .addCase(testCoin.fulfilled, (state, action) => {
                state.isRejected = false
                state.isPending = false
                state.isFulfilled = true
                state.coin = action.payload
            })
            
    }
})

export default coinSlice.reducer
export const { reset } = coinSlice.actions