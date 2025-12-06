"use client";

import type { BranchOption } from "../../features/video/types";

type Props = {
  option: BranchOption;
  label: string;
  onSelect: (option: BranchOption) => void;
};

const choiceButtonClass =
  "w-56 h-56 md:w-72 md:h-72 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white text-2xl md:text-3xl font-bold hover:bg-black/70 active:bg-black/80 transition";

export const BranchChoiceButton = ({ option, label, onSelect }: Props) => (
  <button
    type="button"
    onClick={() => onSelect(option)}
    className={choiceButtonClass}
  >
    {label}
  </button>
);
