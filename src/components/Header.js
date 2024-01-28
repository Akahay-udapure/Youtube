import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    YOUTUBE_LOGO,
    YOUTUBE_SEARCH_API
} from "../utils/constant";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { CgClose } from "react-icons/cg";
import { cacheResults, checkIsMenuSearch } from "../redux/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const [showSuggestion, setShowSuggestions] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(
            cacheResults({
                [searchQuery]: json[1],
            }),
        );
    };


    const handleSearch = () => {
        dispatch(checkIsMenuSearch(false));
        setShowSuggestions(false);
    };

    return (
        <>
            <div className="px-6 flex justify-between">
                <div className="flex py-2">
                    <h1 className="py-4 cursor-pointer">
                        {!isMenuOpen ? (
                            <RxHamburgerMenu
                                onClick={() => dispatch(toggleMenu())}
                                className="text-2xl"
                            />
                        ) : (
                            <CgClose
                                className="text-black text-xl"
                                onClick={() => dispatch(toggleMenu())}
                            />
                        )}
                    </h1>
                    <h1>
                        <img
                            src={YOUTUBE_LOGO}
                            className="h-14 px-3 cursor-pointer"
                            alt=""
                        />
                    </h1>
                </div>
                <span className="flex items-center">
                    <input
                        className="h-12 w-[600px] border border-gray-400 p-2 rounded-l-full"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                    />
                    <button className=" h-12 border border-gray-400 rounded-r-full p-4">
                        <IoIosSearch className="text-black text-xl" />
                    </button>
                </span>

                <div className="flex py-2">
                    <span className="py-4 flex cursor-pointer">
                        <RiVideoAddLine className="text-2xl mx-2" />
                        <IoNotificationsOutline className="text-2xl mx-2" />
                        <img
                            className="flex h-7 w-7 overflow-hidden rounded-full md:ml-4"
                            src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
                        />
                    </span>
                </div>
            </div>
            <div className="mx-[325px]">
                {showSuggestion && (
                    <div className="absolute w-[600px] bg-white border border-gray-100 rounded-lg">
                        <ul>
                            {suggestions.map((s) => (
                                <Link
                                    to={
                                        "/searchResult/" +
                                        s.split(" ").join("+")
                                    }
                                    key={s}>
                                    <li
                                        onClick={() => handleSearch(s)}
                                        className="py-1 text-left px-4 hover:bg-gray-100 cursor-pointer">
                                        {s}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
