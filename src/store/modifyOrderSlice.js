import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openModal: false,
    orderId: "",
    exchangeOrderId: "",
    exchange: "",
    script: "",
    quantity: "",
    price: 0,
    limitPrice: 0,
    orderType: "",
    transType: "",
    updatedPrice: 0,
    updatedQuantity: 0,
    newBasketName: "",
};

const modifyOrderSlice = createSlice({
    name: "modifyOrder",
    initialState,
    reducers: {
        setOpenModal: (state, action) => {
            state.openModal = action.payload;
        },
        setOrderId: (state, action) => {
            state.orderId = action.payload;
        },
        setExchangeOrderId: (state, action) => {
            state.exchangeOrderId = action.payload;
        },
        setExchange: (state, action) => {
            state.exchange = action.payload;
        },
        setScript: (state, action) => {
            state.script = action.payload;
        },
        setQuantity: (state, action) => {
            state.quantity = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        setLimitPrice: (state, action) => {
            state.limitPrice = action.payload;
        },
        setOrderType: (state, action) => {
            state.orderType = action.payload;
        },
        setTransType: (state, action) => {
            state.transType = action.payload;
        },
        setUpdatedPrice: (state, action) => {
            state.updatedPrice = action.payload;
        },
        setUpdatedQuantity: (state, action) => {
            state.updatedQuantity = action.payload;
        },
        setNewBasketName: (state, action) => {
            state.newBasketName = action.payload;
        }
    }
});

export const { 
    setOpenModal, 
    setOrderId, 
    setExchangeOrderId,
    setExchange, 
    setScript, 
    setQuantity, 
    setPrice, 
    setLimitPrice, 
    setOrderType, 
    setTransType, 
    setUpdatedPrice,
    setUpdatedQuantity,
    setNewBasketName,
} = modifyOrderSlice.actions;

export default modifyOrderSlice.reducer;