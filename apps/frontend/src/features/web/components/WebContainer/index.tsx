"use client";

import { WebProblem } from "../WebProblem";
import { WebInfluence } from "../WebInfluence";
import { Weblastic } from "../Webplastic";
import { WebActions } from "../WebActions";

export const WebContainer = () => {
  return (
    <div className="bg-gradient-to-b from-white via-sky-100 via-sky-200 via-sky-300 to-sky-500 text-sky-900">
      <section className="w-full min-h-screen">
        <Weblastic />
      </section>

      <section className="w-full min-h-screen">
        <WebProblem />
      </section>

      <section className="w-full min-h-screen">
        <WebInfluence />
      </section>

      <section className="w-full min-h-screen">
        <WebActions />
      </section>
    </div>
  );
}
