import React from 'react';
import Image from 'next/image';
import WealthSeedLogo from '@/app/components/icons/WealthseedLogo.jpg'

const Hero = () => {
  return (
    <div>
    <section className="space-y-2 leading-relaxed">
      <p>◆ Full Stack Developer @ {" "}
        <span className="font-semibold text-green-600 inline-flex items-baseline gap-1">
        <Image src={WealthSeedLogo} alt="Wealthseed Logo" width={20} height={20} className="object-contain relative top-[3px] rounded-xs" />
        Wealthseed
        </span>
      </p>
      <p>◆ cs @ <span className="font-semibold text-yellow-800">
        University of Toronto
        </span>
      </p>
      <p className="italic text-sm">Currently:</p>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>working on bringing financial literacy to high schoolers through <span className="font-semibold text-yellow-800">Wealthseed</span></li>
        <li>VP Computer Science @ BlackInStem.</li>
        <li>finished 2nd year of CS at UofT.</li>
        <li>writing blogs on various topics i'm interested in. check it out here</li>
      </ul>
      <p className="italic text-sm">Some things about me:</p>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        <li>i'm interested in machine learning and software engineering, and in particular its intersection with the financial space. </li>
        <li>i am an avid reader. You can check out my reading list/reviews here. </li>
        <li>i love getting active. I play soccer (Arsenal fan), basketball, and I hit the gym. </li>
        <li>i enjoy playing the piano, playing chess, and watching YouTube mini-documentaries.</li>
        <li>i love talking about economics, current affairs, and philosophical questions. you can get in contact with me if you want to have a discussion!</li>
      </ul>
    </section>
    </div>
  );
};
export default Hero;