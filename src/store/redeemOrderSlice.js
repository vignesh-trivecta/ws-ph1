const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    openModal: false,
}

const redeemOrderSlice = createSlice({
    name: "redeemOrder",
    initialState,
    reducers: {
        setOpenModal: (state, action) => {
            state.openModal = action.payload;
        }
    }
})

export const { setOpenModal } = redeemOrderSlice.actions;

export default redeemOrderSlice.reducer;