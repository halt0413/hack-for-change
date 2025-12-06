"use client";

import { VideoLayout } from "../VideoLayout";
import { BranchChoiceOverlay } from "../ VideoChoiceOverlay";
import { useVideoBranch } from "../../hooks/useVideoBranch";  

export const VideoContainer = () => {
  const {
    videoRef,
    src,
    showChoices,
    showOverlay,
    isMuted,
    handleEnded,
    handleStart,
    handleSelectOption,
  } = useVideoBranch();

  return (
    <>
      <VideoLayout
        src={src}
        videoRef={videoRef}
        onEnded={handleEnded}
        onStart={handleStart}
        isMuted={isMuted}
        showOverlay={showOverlay}
      />
      <BranchChoiceOverlay 
        visible={showChoices} 
        onSelect={handleSelectOption} 
        questionText="あなたは空のペットボトルを持っていました"
      />
    </>
  );
};
