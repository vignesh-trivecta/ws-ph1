import { createSlice } from "@reduxjs/toolkit";

// initial state values
const initialState = {
    tab: 1,
    basketState: false,
    sidebarFull: true,
    themeColor: 'theme-orange',
}

// creating new slice
const evnetSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setTab: (state, action) => {
            state.tab = action.payload;
        },
        setBasketState: (state, action) => {
            state.basketState = action.payload;
        },
        setSideBarFull: (state, action) => {
            state.sidebarFull = action.payload;
        },
        setThemeColor: (state, action) => {
            state.themeColor = action.payload;
        }
    }
});

export const { setTab, setBasketState, setSideBarFull, setThemeColor } = evnetSlice.actions;

export default evnetSlice.reducer;