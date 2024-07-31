import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userSlice from "./userSlice";
import basketSlice from "./basketSlice";
import eventSlice from "./eventSlice";
import clientBasketSlice from "./clientBasketSlice";
import addRecordSlice from "./addRecordSlice";
import updateRecordSlice from "./updateRecordSlice";
import reportSlice from "./reportSlice";
import modifyOrderSlice from "./modifyOrderSlice";
import mfBasketCreateSlice from "./mfBasketCreateSlice";
import newMFPurchaseSlice from "./newMFPurchaseSlice";
import switchOrderSlice from "./switchOrderSlice";
import redeemOrderSlice from "./redeemOrderSlice";

// combinig all the slices to a reducer
const reducers = combineReducers({
    user: userSlice,
    basket: basketSlice,
    event: eventSlice,
    add: addRecordSlice,
    update: updateRecordSlice,
    client: clientBasketSlice,
    report: reportSlice,
    modifyOrder: modifyOrderSlice,
    mfBasketCreate: mfBasketCreateSlice,
    newMFPurchase: newMFPurchaseSlice,
    switchOrder: switchOrderSlice,
    redeemOrder: redeemOrderSlice,
});

// configuration for persiting data
const persistConfig = {
    key: 'root',
    whitelist: ['data', 'user', 'client'],
    storage,
}

// creating persist reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// declaring store
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export const persistor = persistStore(store)

export default store;