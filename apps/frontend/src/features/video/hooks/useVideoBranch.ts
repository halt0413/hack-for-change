"use client";

import { useEffect, useRef, useState } from "react";

import { BranchOption, VideoId } from "../types";

const videoSources = [
    { id: "OP", src: "/OP.mp4" },
    { id: "optionA", src: "" },
    { id: "optionB", src: "" },
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
        setShowChoices(false);
    };

    const handleSelectOption = (option: BranchOption) => {
        const next: VideoId = option === "A" ? "optionA" : "optionB";
        setCurrentVideoId(next);
        setShowChoices(false);
    };

    const handleStart = async () => {
        setIsMuted(false);
        setHasStarted(true);
        try {
            await videoRef.current?.play();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const video = videoRef.current;
        const src = videoSourceMap[currentVideoId];
        if (!video || !src) return;
        video.currentTime = 0;
        if (hasStarted) {
            video.play().catch(() => { });
        }
    }, [currentVideoId, hasStarted]);

    return {
        videoRef,
        src: videoSourceMap[currentVideoId],
        showChoices,
        handleEnded,
        handleSelectOption,
        handleStart,
        isMuted,
    };
};
