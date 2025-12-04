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

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleEnded = () => {
    setShowChoices(true);
  };

  const handleSelectOption = (option: BranchOption) => {
    const next: VideoId = option === "A" ? "optionA" : "optionB";
    setCurrentVideoId(next);
    setShowChoices(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    const src = videoSourceMap[currentVideoId];
    if (!video || !src) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  }, [currentVideoId]);

  return {
    videoRef,
    src: videoSourceMap[currentVideoId],
    showChoices,
    handleEnded,
    handleSelectOption,
  };
};
