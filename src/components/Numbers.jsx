import React, { useEffect, useState } from "react";

const stats = [
  { value: 35, suffix: "%", label: "Lower Operating Costs" },
  { value: 99.9, suffix: "%", label: "System Uptime" },
  { value: 3, suffix: "x", label: "Faster Reporting" },
  { value: 60, suffix: "%", label: "Less Manual Work" },
];

const Counter = ({ end, suffix = "", duration = 1800 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = progress * end;

      setCount(Number.isInteger(end) ? Math.floor(value) : value.toFixed(1));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
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
    <section className="w-full py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-sm uppercase tracking-[0.25em] text-primary dark:text-white">
          Results and Impact
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl text-primary dark:text-white">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-sm text-primary dark:text-white text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Numbers;