const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    basketName: '',
    investmentAmount: null,
    basketValue: null,
    openAddModal: false,
    openSaveModal: false,
}

const mfBasketCreateSlice = createSlice({
    name: 'mfBasketCreate',
    initialState,
    reducers: {
        setBasketName: (state, action) => {
            state.basketName = action.payload;
        },
        setInvestmentAmount: (state, action) => {
            state.investmentAmount = action.payload;
        },
        setBasketValue: (state, action) => {
            state.basketValue = action.payload;
        },
        setOpenAddModal: (state, action) => {
            state.openAddModal = action.payload;
        },
        setOpenSaveModal: (state, action) => {
            state.openSaveModal = action.payload;
        },
    }
})

export const { setBasketName, setInvestmentAmount, setBasketValue, setOpenAddModal, setOpenSaveModal } = mfBasketCreateSlice.actions;

export default mfBasketCreateSlice.reducer;