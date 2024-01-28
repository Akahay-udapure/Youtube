import React from "react";

const SearchVideoList = ({ info }) => {
    const { snippet } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className="p-2 flex">
            <img src={thumbnails.medium.url} className="rounded-lg" alt="" />
            <ul className="py-2 text-left">
                <li className="font-semibold mx-4">{title}</li>
                <li className="text-gray-500 mx-4">{channelTitle}</li>
            </ul>
        </div>
    );
};

export default SearchVideoList;
