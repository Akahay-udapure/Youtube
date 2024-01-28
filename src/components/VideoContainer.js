import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingVideo, setVideos } from "../redux/appSlice";
const VideoContainer = () => {
    const dispatch = useDispatch();
    const videos = useSelector((store) => store.app.videos);
    useEffect(() => {
        if (!videos.length) getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        dispatch(setVideos(json.items));
    };
    return (
        <div className="flex flex-wrap py-4">
            {videos.map((video) => (
                <Link
                    key={video.id}
                    to={"/watch?v=" + video.id}
                    onClick={() => dispatch(addNowPlayingVideo(video))}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
