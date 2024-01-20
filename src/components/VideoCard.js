import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const { snippet } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className={`p-2 ${isMenuOpen ? "w-[255px]" : "w-[230px]"}`}>
            <img src={thumbnails.medium.url} className="rounded-lg" alt="" />
            <ul className="py-2">
                <li className="text-sm font-semibold">{title.slice(0, 30)}</li>
                <li className="text-gray-500">{channelTitle}</li>
            </ul>
        </div>
    );
};

export default VideoCard;
