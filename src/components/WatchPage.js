import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    dispatch(closeMenu());
    return (
        <div>
            <div className="mx-20 py-4">
                <div>
                    <iframe
                        width="700"
                        height="400"
                        className="rounded-xl"
                        src={
                            "https://www.youtube.com/embed/" +
                            searchParams.get("v")
                        }
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default WatchPage;
