"use client";

import WebProblem from "../WebProblem";
import { Weblastic } from "../Webplastic";

export const WebContainer = () => {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-white text-sky-900">
      <section className="w-full min-h-screen">
        <Weblastic />
      </section>

      <section className="w-full min-h-screen">
        <WebProblem />
      </section>
    </div>
  );
};
