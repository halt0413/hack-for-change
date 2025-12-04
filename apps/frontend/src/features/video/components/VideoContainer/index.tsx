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
  } = useVideoBranch();

  return (
    <main className="min-h-screen bg-black">
      <VideoLayout
        videoRef={videoRef}
        src={src}
        onEnded={handleEnded}
      />
    </main>
  );
};
