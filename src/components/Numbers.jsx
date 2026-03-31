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
    <section className="max-w-fit mx-auto bg-secondary rounded-3xl overflow-hidden px-4 sm:px-4 md:px-6 lg:px-10 py-8">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-sm uppercase tracking-[0.25em] text-primary">
          Results and Impact
        </h1>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl text-primary">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h2>
              <p className="mt-2 text-sm text-primary text-center">
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