"use client";

import { useEffect, useRef, useState } from "react";

import { BranchOption, VideoId } from "../types";

const videoSources = [
    { id: "OP", src: "/OP.mp4" },
    { id: "ED1", src: "/ED1.mp4" },
    { id: "ED2", src: "/ED2.mp4" },
] satisfies Array<{ id: VideoId; src: string }>;

const videoSourceMap = Object.fromEntries(
    videoSources.map((v) => [v.id, v.src])
) as Record<VideoId, string>;

export const useVideoBranch = () => {
    const [currentVideoId, setCurrentVideoId] = useState<VideoId>("OP");
    const [showChoices, setShowChoices] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [hasStarted, setHasStarted] = useState(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleEnded = () => {
        const isOpening = currentVideoId === "OP";
        setShowChoices(isOpening);
    };

    const handleSelectOption = (option: BranchOption) => {
        const next: VideoId = option === "1" ? "ED1" : "ED2";
        setCurrentVideoId(next);
        setShowChoices(false);
    };

    const handleStart = () => {
        setIsMuted(false);
        setHasStarted(true);
    }

    useEffect(() => {
        const video = videoRef.current;
        const src = videoSourceMap[currentVideoId];
        if (!video || !src || !hasStarted) return;
        video.currentTime = 0;
        video.play().catch((error) => {
            console.error(error);
        });
    }, [currentVideoId, hasStarted]);

    return {
        videoRef,
        src: videoSourceMap[currentVideoId],
        showChoices,
        showOverlay: !hasStarted,
        handleEnded,
        handleSelectOption,
        handleStart,
        isMuted,
    };
};
