import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Body = () => {
    return (
        <>
            <Header />
            <div className="grid grid-flow-col">
                <SideBar />
                <Outlet />
            </div>
        </>
    );
};

export default Body;
