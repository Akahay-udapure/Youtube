import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchVideoResult: [],
        searchKeyword: "",
        isMenuSearch:false
    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload);
        },
        addSearchResult: (state, action) => {
            const { searchVideoResult, searchKeyword } = action.payload;
            state.searchKeyword = searchKeyword;
            state.searchVideoResult = searchVideoResult;
        },
        checkIsMenuSearch : (state, action) =>{
            state.isMenuSearch = action.payload;
        }
    },
});

export const { cacheResults, addSearchResult, checkIsMenuSearch } = searchSlice.actions;
export default searchSlice.reducer;
