const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    openModal: false,
}

const newMFPurchaseSlice = createSlice({
    name: "newMFPurchase",
    initialState,
    reducers: {
        setOpenModal: (state, action) => {
            state.openModal = action.payload;
        }
    }
})

export const { setOpenModal } = newMFPurchaseSlice.actions;

export default newMFPurchaseSlice.reducer;