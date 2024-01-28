import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";
import SideVideoCard from "./SideVideoCard";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { TbMinusVertical } from "react-icons/tb";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const videos = useSelector((store) => store.app.videos);
    const nowPlayingVideo = useSelector((store) => store.app.nowPlayingVideo);
    const { snippet } = nowPlayingVideo;
    const { channelTitle, title } = snippet;
    dispatch(closeMenu());
    return (
        <div className="flex">
            <div className="ml-20 py-4">
                <div>
                    <iframe
                        width="700"
                        height="400"
                        className="rounded-xl"
                        src={`https://www.youtube.com/embed/${searchParams.get(
                            "v",
                        )}?autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
                <div className="py-2">
                    <h1 className="text-left font-bold text-xl">{title}</h1>
                    <div className="text-left font-bold flex py-3">
                        <img
                            src="https://yt3.ggpht.com/ytc/AIf8zZRtNgLSD1yhFyM1hn7hF4-dtelm_oqDtZ2KTaBI=s88-c-k-c0x00ffffff-no-rj"
                            className=" rounded-full h-10"
                            alt=""
                        />
                        <h1 className="py-2 mx-4 text-lg">{channelTitle}</h1>
                        <span className="py-1 flex">
                            <button className=" bg-black text-fuchsia-100 w-28 h-10 rounded-full mx-6">
                                Subscribe
                            </button>
                            <span className="flex py-1 cursor-pointer ml-8">
                                <h1 className="text-2xl rounded-l-full h-8 w-[90px] py-1 bg-gray-100 flex">
                                    <h1>
                                        <AiOutlineLike className="ml-4" />
                                    </h1>
                                    <h1 className="text-sm ml-2">7.9k</h1>
                                </h1>
                                <h1 className="text-2xl rounded-r-full h-8 w-[50px] py-1 bg-gray-100">
                                    
                                    <AiOutlineDislike className="mx-2" />
                                </h1>
                                <h1 className="text-2xl rounded-2xl bg-gray-100 w-[100px] py-1 h-8 mx-4 flex">
                                    <h1><PiShareFatThin className="mx-2"/></h1>
                                    <h1 className="text-sm">Share</h1>
                                </h1>
                                <h1 className="text-2xl rounded-2xl bg-gray-100 w-[40px] py-1 h-8 mx-1 flex">
                                    <h1><AiOutlineEllipsis className="mx-2"/></h1>
                                </h1>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="py-2 ml-4">
                {videos.map((video) => (
                    <Link key={video.id} to={"/watch?v=" + video.id}>
                        <SideVideoCard info={video} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default WatchPage;
