import React from "react";
import Image from "next/image";
import WealthSeedLogo from "@/app/components/icons/WealthseedLogo.jpg";
import UofTLogo from "@/app/components/icons/UofTLogo.jpg";
import BlackInStemLogo from "@/app/components/icons/blackinstem.jpg";
import Zikora from "@/app/components/icons/zikora.jpg";

const Hero = () => {
    return (
        <div>
            <section className="flex items-center">
                <div className="w-[40%] p-5 pl-0">
                    <Image
                        src={Zikora}
                        alt="Picture of Zikora"
                        width={300}
                        height={300}
                        className="object-contain rounded-lg"
                    />
                </div>
                <div className="w-[60%] flex items-center justify-start pl-5">
                    <p className="font-vt323 text-9xl">
                        Zikora Chinedu
                    </p>
                </div>
            </section>
            <section className="space-y-2 leading-relaxed">
                <p>
                    ◆ Full Stack Developer @{" "}
                    <span
                        className="font-semibold text-green-600 inline-flex items-baseline gap-1">
            <Image
                src={WealthSeedLogo}
                alt="Wealthseed Logo"
                width={20}
                height={20}
                className="object-contain relative top-[3px] rounded-xs"
            />
            Wealthseed
          </span>
                </p>
                <p>
                    ◆ cs @
                    <span
                        className="font-semibold text-yellow-800 inline-flex items-baseline">
            <Image
                src={UofTLogo}
                alt="UofT Logo"
                width={20}
                height={20}
                className="object-contain relative top-[3px] rounded-xs ml-0"
            />
            University of Toronto
          </span>
                </p>
                <p className="italic text-sm">Currently:</p>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>
                        working on bringing financial literacy to high schoolers
                        through{" "}
                        <span
                            className="font-semibold text-yellow-800">Wealthseed</span>
                    </li>
                    <li>
                        VP Computer Science @ {""}
                        <span className="inline-flex items-baseline gap-1">
            <Image
                src={BlackInStemLogo}
                alt="BlackInStem Logo"
                width={20}
                height={20}
                className="object-contain relative top-[3px] rounded-xs ml-0"
            />
              BlackInStem.
            </span>
                    </li>
                    <li>finished 2nd year of CS at UofT.</li>
                    <li>
                        writing blogs on various topics i'm interested in. check
                        it out here
                    </li>
                </ul>
                <p className="italic text-sm">Some things about me:</p>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>
                        i'm interested in machine learning and software
                        engineering, and in
                        particular its intersection with the financial
                        space.{" "}
                    </li>
                    <li>
                        i am an avid reader. You can check out my reading
                        list/reviews here.{" "}
                    </li>
                    <li>
                        i love getting active. I play soccer (Arsenal fan),
                        basketball, and
                        I hit the gym.{" "}
                    </li>
                    <li>
                        i enjoy playing the piano, playing chess, doing typing
                        tests and watching YouTube
                        mini-documentaries.
                    </li>
                    <li>
                        i love talking about economics, current affairs, and
                        philosophical
                        questions. you can get in contact with me if you want to
                        have a
                        discussion!
                    </li>
                </ul>
            </section>
        </div>
    );
};
export default Hero;
