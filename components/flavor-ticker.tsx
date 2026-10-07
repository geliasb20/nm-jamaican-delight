"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

const phrases = [
  "ONE LOVE. BIG FLAVOR.",
  "SLOW COOKED. SOUL FILLED.",
  "JAMAICAN FOOD AT ITS BEST.",
];

export function FlavorTicker() {
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const track = useAnimationControls();
  const separators = useAnimationControls();

  useEffect(() => {
    if (reducedMotion || paused) {
      track.stop();
      separators.stop();
      return;
    }
    void track.start({
      x: ["0%", "-50%"],
      transition: { duration: 40, ease: "linear", repeat: Infinity },
    });
    void separators.start({
      rotate: [0, 360],
      transition: { duration: 6, ease: "linear", repeat: Infinity },
    });
    return () => {
      track.stop();
      separators.stop();
    };
  }, [paused, reducedMotion, track, separators]);

  return (
    <>
      <div
        className="ticker relative w-full overflow-hidden bg-[#F4B400] text-black font-black uppercase"
        aria-hidden="true"
      >
        <motion.div className="ticker-track flex w-max" animate={track}>
          {[0, 1].map((copy) => (
            <div className="ticker-group flex shrink-0 items-center" key={copy}>
              {phrases.map((phrase) => (
                <Fragment key={phrase}>
                  <span className="ticker-phrase">{phrase}</span>
                  <motion.span
                    className="ticker-separator inline-block mx-6 select-none"
                    animate={separators}
                  >
                    ✱
                  </motion.span>
                </Fragment>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      {!reducedMotion && (
        <button
          type="button"
          className="ticker-motion-toggle"
          onClick={() => setPaused(!paused)}
        >
          {paused ? "Restart banner animation" : "Pause banner animation"}
        </button>
      )}
    </>
  );
}
