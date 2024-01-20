import React from "react";
import { popular } from "../utils/constant";
import { useSelector } from "react-redux";

const MenuItems = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    return (
        <div className="flex mx-2">
            {popular.map((item) => (
                <span
                    key={item.name}
                    className={`px-2 cursor-pointer py-1 text-[15px] font-semibold hover:bg-black hover:text-white rounded-lg bg-slate-200  ${
                        isMenuOpen ? "mx-[4px]" : "mx-[10px]"
                    }`}>
                    {item.name}
                </span>
            ))}
        </div>
    );
};

export default MenuItems;
