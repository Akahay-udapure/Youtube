import React from "react";

const SideVideoCard = ({info}) => {
    const { snippet } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className="flex py-4">
            <img src={thumbnails.medium.url} className="rounded-lg w-48 h-24" alt="" />
            <ul className="w-full text-left">
                <li className="text-sm font-semibold mx-2">{title}</li>
                <li className="text-sm font-semibold text-gray-500 mx-2">{channelTitle}</li>
            </ul>
        </div>
    );
};

export default SideVideoCard;
