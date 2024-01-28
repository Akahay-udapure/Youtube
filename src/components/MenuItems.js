import React, { useState } from "react";
import { popular } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkIsMenuSearch } from "../redux/searchSlice";

const MenuItems = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const [currentMenu, setCurrentMenu] = useState("");
    const handleClick = (name) => {
        dispatch(checkIsMenuSearch(true));
        setCurrentMenu(name);
    };
    return (
        <div className="flex mx-2 mb-4">
            {popular.map((item) => (
                <Link
                    key={item.name}
                    to={"/searchResult/" + item.url.split(" ").join("+")}
                    onClick={() => handleClick(item.name)}>
                    <span
                        className={`px-2 text-sm cursor-pointer py-1 text-[15px] font-semibold hover:bg-black hover:text-white rounded-lg   ${
                            isMenuOpen ? "mx-[4px]" : "mx-[10px]"
                        } ${currentMenu === item.name ? "bg-black text-white" : "bg-gray-100"}`}>
                        {item.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default MenuItems;
