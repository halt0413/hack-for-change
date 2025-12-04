"use client";

type Props = {
  src: string;
  onEnded: () => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
};

export const VideoLayout = ({
  src,
  onEnded,
  videoRef,
}: Props) => {
  return (
    <div
      className="fixed inset-0 m-0 p-0 bg-black overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <video
        ref={videoRef}
        src={src}
        onEnded={onEnded}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 block w-full h-full object-contain"
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
};
