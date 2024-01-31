import React, { useState } from "react";
import { categories } from "../utils/constant";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const [currentMenu, setCurrentMenu] = useState("Home");
    return (
        (location.pathname === "/" ||
            location.pathname.includes("/searchResult")) && (
            <div
                className={`overflow-y-auto overflow-x-hidden mx-4 max-h-[500px] col-span-1 cursor-pointer ${
                    isMenuOpen ? "w-[200px]" : "w-[70px]"
                }`}>
                {categories.map((item, index) => (
                    <Link
                        onClick={() => setCurrentMenu(item.name)}
                        key={index}
                        to={
                            item.name === "Home"
                                ? ""
                                : "/searchResult/" +
                                  item.name.split(" ").join("+")
                        }>
                        <div>
                            <div className={`${(currentMenu === item.name) ? "flex py-3 cursor-pointer bg-black text-white" : "flex py-3 hover:bg-gray-100 hover:rounded-lg hover:font-semibold cursor-pointer"} ${isMenuOpen ? "w-[165px] rounded-lg" : "w-[40px] rounded-lg"}`}>
                                <span className="mx-2 text-xl">
                                    {item.icon}
                                </span>
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
                    </Link>
                ))}
                <div className="text-black/[0.5] text-[12px]">
                    Clone by: Namaste React Akshay Udapure
                </div>
            </div>
        )
    );
};

export default SideBar;
