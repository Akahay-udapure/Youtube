import React, { useEffect } from "react";
import SearchVideoList from "./SearchVideoList";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNowPlayingVideo } from "../redux/appSlice";
import { YOUTUBE_VIDEO_SEARCH_API } from "../utils/constant";
import { addSearchResult } from "../redux/searchSlice";
import MenuItems from "./MenuItems";

const SearchContainer = () => {
    const dispatch = useDispatch();
    const { searchQuery } = useParams();

    useEffect(() => {
        searchQuery && getSearchResults();
    }, [searchQuery]);

    const getSearchResults = async () => {
        const data = await fetch(YOUTUBE_VIDEO_SEARCH_API + searchQuery);
        const json = await data.json();
        dispatch(
            addSearchResult({
                searchVideoResult: json.items,
                searchQuery: searchQuery,
            }),
        );
    };

    const searchResult = useSelector((store) => store.search.searchVideoResult);
    const isMenuSearch = useSelector((store) => store.search.isMenuSearch);
    return (
        <div className={`${isMenuSearch} ? "" : "w-2/3 mx-10"`}>
            {isMenuSearch ? <MenuItems /> : ""}
            {searchResult.map((video, index) => (
                <Link
                    key={index}
                    to={"/watch?v=" + video.id.videoId}
                    onClick={() => dispatch(addNowPlayingVideo(video))}>
                    <SearchVideoList info={video} />
                </Link>
            ))}
        </div>
    );
};

export default SearchContainer;
