'use client'
import React, {useState, useEffect, useRef} from 'react';
import Image from "next/image";
import {motion} from 'framer-motion';

const tabs = [
    {
        title: 'Ajo',
        description:
            'Save together, grow together. Bring your trusted circle online, contribute with ease, and enjoy transparent, stress-free payouts every round.',
    },
    {
        title: 'Thrift plan',
        description:
            'Create thrift in one second. Fast, secure, and seamless thrift creation - save at your own pace and watch your money grow effortlessly.',
    },
    {
        title: 'Loan',
        description: 'Coming soon...',
    },
];

const Plan = () => {
    const [active, setActive] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(0);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="flex w-full flex-col items-center pb-10 text-center">
                    <span className="mb-4 rounded-full bg-[#F1EBFF] px-3 py-1 text-xs font-medium text-[#5B3FD0]">
                        Features
                    </span>
                    <h2 className="mb-4 text-4xl font-bold text-[#101828] md:text-5xl">Our features</h2>
                    <p className="max-w-xl text-sm text-[#101828] md:text-base">
                        We offer amazing features to help you save and reach your financial goals with ease.
                    </p>
                </div>

                {/* App preview, fading out at the bottom */}
                <div className="flex w-full justify-center">
                    <Image
                        src="/feature.png"
                        width={600}
                        height={512}
                        alt="RoyalSettle app screens"
                        className="h-auto w-full max-w-[600px]"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                        }}
                    />
                </div>

                {/* Tabs */}
                <div
                    role="tablist"
                    aria-label="Features"
                    className="mx-auto mt-10 grid max-w-4xl grid-cols-1 md:grid-cols-3"
                >
                    {tabs.map((tab, index) => {
                        const isActive = index === active;
                        return (
                            <button
                                key={tab.title}
                                role="tab"
                                type="button"
                                aria-selected={isActive}
                                onClick={() => setActive(index)}
                                className="relative flex flex-col  items-center justify-start border-t-2 border-[#E4E7EC] px-6 pb-4 pt-6 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F29F05]"
                            >
                                {/* Yellow bar that slides between tabs */}
                                {isActive && (
                                    <motion.div
                                        layoutId="feature-active-bar"
                                        className="absolute -top-0.5 left-0 right-0 h-0.5 bg-[#F29F05]"
                                        transition={{type: 'spring', stiffness: 400, damping: 35}}
                                    />
                                )}
                                <div
                                    className={`mb-3 text-xl font-semibold transition-colors ${
                                        isActive ? 'text-[#101828]' : 'text-[#475467]'
                                    }`}
                                >
                                    {tab.title}
                                </div>
                                <p
                                    className={`mx-auto max-w-[260px] text-base leading-relaxed transition-colors ${
                                        isActive ? 'text-[#475467]' : 'text-[#667085]'
                                    }`}
                                >
                                    {tab.description}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Plan;