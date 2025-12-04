"use client";

import { useRouter } from "next/navigation";
import { HomeForm } from "../HomeForm";

export const HomeContainer = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/video");
  };

// ここのルートをweb版のURLに変更する
  const handleOpenWeb = () => {
    router.push(""); 
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <HomeForm onStart={handleStart} onOpenWeb={handleOpenWeb} />
    </main>
  );
};
