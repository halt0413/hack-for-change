"use client";

import { VideoLayout } from "../VideoLayout";
import { useVideoBranch } from "../../hooks/useVideoBranch";

export const VideoContainer = () => {
    const {
        videoRef,
        src,
        showChoices,
        handleEnded,
        handleSelectOption,
        handleStart,
        isMuted
    } = useVideoBranch();

    return (
        <VideoLayout
            videoRef={videoRef}
            src={src}
            onEnded={handleEnded}
            onStart={handleStart}
            isMuted={isMuted}
        />
    );
};
