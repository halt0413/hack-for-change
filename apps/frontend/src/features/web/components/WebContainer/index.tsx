"use client";

import { WebHeader } from "../WebHeader";
import { WebProblem } from "../WebProblem";
import { WebInfluence } from "../WebInfluence";
import { Weblastic } from "../Webplastic";
import { WebActions } from "../WebActions";
import { WebDonation } from "../WebDonation";

export const WebContainer = () => {
  return (
    <div className="bg-gradient-to-b from-white via-sky-100 via-sky-200 via-sky-300 to-sky-500 text-sky-900">

      <div className="sticky top-0 z-50">
        <WebHeader />
      </div>

      <section id="about" className="w-full min-h-screen scroll-mt-15">
        <Weblastic />
      </section>

      <section id="problem" className="w-full min-h-screen scroll-mt-12">
        <WebProblem />
      </section>

      <section id="influence" className="w-full min-h-screen scroll-mt-25">
        <WebInfluence />
      </section>

      <section id="actions" className="w-full min-h-screen scroll-mt-22">
        <WebActions />
      </section>
      
      <section id="donation" className="w-full min-h-screen scroll-mt-5">
        <WebDonation />
      </section>
    </div>
  );
}
