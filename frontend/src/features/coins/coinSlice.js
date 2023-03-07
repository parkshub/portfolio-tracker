import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


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

export const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers: {
        reset: (state) => {
            state.isRejected = false,
            state.isPending = false,
            state.isFulfilled = false,
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTopCoins.rejected, (state, action) => {
                state.isRejected = true,
                state.isPending = false,
                state.message = action.payload
            })
    }
})

export default coinSlice.reducer
export const { reset } = coinSlice.actions