'use client'
import React from 'react';
import Image from "next/image";
import {motion} from 'framer-motion';
import {LuArrowRight} from "react-icons/lu";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-white bg-[url('/pattern.png')] bg-cover bg-center px-6 py-16 md:px-8 md:py-24">

            <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row md:gap-0">
                {/* Left: copy */}
                <motion.div
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, ease: "easeOut"}}
                    className="w-full md:w-1/2"
                >
                    {/* "Coming soon" badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7F56D9] py-1 pl-1 pr-3 text-sm text-[#6941C6]">
                        <span className="rounded-full border border-[#7F56D9] px-2 py-0.5 font-medium">
                            Coming soon!
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                            Mobile-application
                            <LuArrowRight className="h-3.5 w-3.5"/>
                        </span>
                    </div>

                    <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight text-[#101828] md:text-6xl md:leading-[1.2]">
                        Save money and manage
                        <br className="hidden md:block"/>
                        {' '}your goal
                    </h1>

                    <p className="mb-8 text-base leading-relaxed text-[#3A3B48] md:text-xl">
                        RoyalSettle is a digital savings and rotational contribution platform designed
                        to automate thrift savings among users
                    </p>

                    {/* Store badges (not links yet, since the app is coming soon) */}
                    <div className="flex flex-wrap items-center gap-3">
                        <Image
                            src="/appleStore.png"
                            width={144}
                            height={48}
                            alt=""
                            className="h-10 w-auto"
                        />
                        <Image
                            src="/googlePlay.png"
                            width={162}
                            height={48}
                            alt="Get it on Google Play"
                            className="h-10 w-auto"
                        />
                    </div>
                </motion.div>

                {/* Right: phone mockup */}
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.9, ease: "easeOut", delay: 0.15}}
                    className="flex w-full justify-center md:w-1/2 md:justify-end"
                >
                    <Image
                        src="/iPhone mockup.png"
                        width={314}
                        height={638}
                        alt="RoyalSettle app preview"
                        className="h-auto w-[240px] drop-shadow-2xl md:w-[314px]"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;