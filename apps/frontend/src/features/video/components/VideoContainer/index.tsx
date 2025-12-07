"use client";

import { VideoLayout } from "../VideoLayout";
import { BranchChoiceOverlay } from "../ VideoChoiceOverlay";
import { useVideoBranch } from "../../hooks/useVideoBranch";  
import { VideoFinishOverlay } from "../VideoFinishOverlay";

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
    showFinish,
    handleSelectFinish,
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
      <VideoFinishOverlay
        visible={showFinish}
        onSelect={handleSelectFinish}
        questionText="違う分岐を見る？それともホームに行く？"
      />
    </>
  );
};
