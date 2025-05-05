import React from 'react';


const Hero = () => {
  return (
    <section className="space-y-2 leading-relaxed">
      <p>◆ incoming SWE intern @ <span className="font-semibold text-green-600">Bloomberg</span></p>
      <p>◆ cs @ <span className="font-semibold text-yellow-800">University of Toronto</span></p>
      <p className="italic text-sm">recently:</p>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>working on bringing financial literacy to high schoolers through <span className="font-semibold text-yellow-800">Wealthseed</span></li>
        <li>built a deep learning framework in C++</li>
      </ul>
    </section>
  );
};
export default Hero;