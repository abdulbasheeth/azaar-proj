import React, { useState, useEffect } from "react";


const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-[#0E7CE9]">{count}+</h2>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
};

export default Counter;
