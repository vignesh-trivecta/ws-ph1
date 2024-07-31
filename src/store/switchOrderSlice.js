const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    openModal: false,
}

const switchOrderSlice = createSlice({
    name: "switchOrder",
    initialState,
    reducers: {
        setOpenModal: (state, action) => {
            state.openModal = action.payload;
        }
    }
})

export const { setOpenModal } = switchOrderSlice.actions;

export default switchOrderSlice.reducer;