import React, { useEffect, useState } from "react";
import { motion } from "motion/react"

const stats = [
  { value: 35, suffix: "%", label: "Lower Operating Costs" },
  { value: 99.9, suffix: "%", label: "System Uptime" },
  { value: 3, suffix: "x", label: "Faster Reporting" },
  { value: 60, suffix: "%", label: "Less Manual Work" },
];

const Counter = ({ end, suffix = "", duration = 1800 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = progress * end;

      setCount(Number.isInteger(end) ? Math.floor(value) : value.toFixed(1));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Numbers = () => {
  return (
    <motion.section
    initial='hidden'
    whileInView='visible'
    transition={{ delayChildren: 0.2 }}
    viewport={{ once: true }}

    className="max-w-fit mx-auto bg-secondary rounded-3xl overflow-hidden px-4 sm:px-4 md:px-6 lg:px-10 py-8">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-sm uppercase tracking-[0.25em] text-primary">
          Results and Impact
        </p>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl text-primary">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-primary text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Numbers;