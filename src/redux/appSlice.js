import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        fullClose: false,
        videos: [],
        nowPlayingVideo: {},
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setVideos: (state, action) => {
            state.videos = action.payload;
        },
        addNowPlayingVideo: (state, action) => {
            state.nowPlayingVideo = action.payload;
        },
    },
});

export const { toggleMenu, closeMenu, setVideos, addNowPlayingVideo} = appSlice.actions;
export default appSlice.reducer;
