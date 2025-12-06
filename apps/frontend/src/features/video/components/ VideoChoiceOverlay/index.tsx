"use client";

import type { BranchOption } from "../../types";
import { BranchChoiceButton } from "../../../../components/Buttons/ChoiceButtons";

type Props = {
  visible: boolean;
  onSelect: (option: BranchOption) => void;
  questionText: string; 
};

export const BranchChoiceOverlay = ({ visible, onSelect, questionText }: Props) => {
  const rootClassName = `fixed inset-0 flex items-center justify-center ${
    visible ? "pointer-events-auto" : "pointer-events-none"
  }`;
  const backdropClassName = `absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-700 ${
    visible ? "opacity-60" : "opacity-0"
  }`;
  const contentClassName = `relative flex flex-col items-center justify-center transition-opacity duration-700 ${
    visible ? "opacity-90" : "opacity-0"
  }`;

  return (
    <section className={rootClassName}>
      <span aria-hidden className={backdropClassName} />

      <div className={contentClassName}>
        <header className="mb-16 text-center">
          <p className="text-xl md:text-2xl font-medium text-white drop-shadow-md">
            {questionText}
          </p>
          <p className="text-3xl md:text-5xl font-bold text-white drop-shadow-md mt-4">
            どうする？
          </p>
        </header>

        <ul className="flex gap-10">
          <li>
            <BranchChoiceButton
              option="1"
              label="その場に捨てる"
              onSelect={onSelect}
            />
          </li>
          <li>
            <BranchChoiceButton
              option="2"
              label="持ち帰る"
              onSelect={onSelect}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
