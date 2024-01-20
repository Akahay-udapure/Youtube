import React from "react";
import { categories } from "../utils/constant";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    console.log(location);
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    return (
        location.pathname == "/" && (
            <div
                className={`overflow-y-auto overflow-x-hidden mx-4 max-h-[500px] col-span-1 cursor-pointer ${
                    isMenuOpen ? "w-[200px]" : "w-[70px]"
                }`}>
                {categories.map((item, index) => (
                    <div key={index}>
                        <div className="flex py-3 hover:bg-gray-100 hover:w-[165px] hover:rounded-lg hover:font-semibold cursor-pointer">
                            <span className="mx-2 text-xl">{item.icon}</span>
                            {isMenuOpen && (
                                <span className="mx-2 text-sm">
                                    {item.name}
                                </span>
                            )}
                        </div>
                        {item.divider ? (
                            <hr className="my-4 border-black/[0.2]" />
                        ) : (
                            ""
                        )}
                        {item.isEnd ? (
                            <hr className="my-4 border-black/[0.2]" />
                        ) : (
                            ""
                        )}
                    </div>
                ))}
                <div className="text-black/[0.5] text-[12px]">
                    Clone by: Namaste React Akshay Udapure
                </div>
            </div>
        )
    );
};

export default SideBar;
