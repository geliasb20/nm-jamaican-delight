"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

const phrases = [
  "ONE LOVE. BIG FLAVOR.",
  "SLOW COOKED. SOUL FILLED.",
  "JAMAICAN FOOD AT ITS BEST.",
];

export function FlavorTicker() {
  return (
    <div
      className="ticker relative w-full overflow-hidden bg-[#F4B400] text-black font-black uppercase py-2"
      aria-hidden="true"
    >
      <motion.div
        className="ticker-track flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[0, 1].map((copy) => (
          <div className="ticker-group flex shrink-0 items-center" key={copy}>
            {phrases.map((phrase) => (
              <Fragment key={`${copy}-${phrase}`}>
                <span className="ticker-phrase whitespace-nowrap">{phrase}</span>
                <motion.span
                  className="ticker-separator inline-block mx-6 select-none"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  ✱
                </motion.span>
              </Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
