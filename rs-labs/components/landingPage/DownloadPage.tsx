import Image from "next/image";
import React from "react";
import {Google} from "@/components/reusables/icons/Google";
import {Apple} from "@/components/reusables/icons/Apple";

const StoreBadge = ({icon, small, big}: { icon: React.ReactNode; small: string; big: string }) => (
    <div
        aria-disabled
        className="flex items-center gap-2 rounded-lg border border-[#F0931B] bg-[#1A0233] px-3 py-1.5 text-white"
    >
        <span className="flex h-5 w-5 items-center justify-center [&>svg]:h-full [&>svg]:w-full">{icon}</span>
        <span className="flex flex-col leading-none">
            <span className="text-[9px] text-white/80">{small}</span>
            <span className="mt-0.5 text-sm font-semibold">{big}</span>
        </span>
    </div>
);

const DownloadPage = () => {
    return (
        <section className="px-6 pt-16 md:px-8 md:pt-20">
            <div className="relative mx-auto flex max-w-7xl flex-col overflow-hidden rounded-3xl bg-[#240046] shadow-xl md:h-[460px] md:flex-row md:items-center">
                {/* Soft glow behind the phone */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{background: 'radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.35), transparent 55%)'}}
                />

                {/* Copy */}
                <div className="relative z-10 p-8 md:w-1/2 md:p-0 md:pl-16">
                    <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">Download our App</h2>
                    <p className="mb-8 max-w-[380px] text-sm leading-relaxed text-[#E6DFF0] md:text-base">
                        The best social investing experience. Download the Royalsettle Mobile Application.... coming soon.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <StoreBadge icon={<Apple/>} small="Download on the" big="App Store"/>
                        <StoreBadge icon={<Google/>} small="GET IT ON" big="Google Play"/>
                    </div>
                </div>

                {/* Phone: cropped at the bottom of the card */}
                <div className="relative z-10 flex h-[300px] justify-center overflow-hidden px-6 md:absolute md:bottom-0 md:right-16 md:block md:h-[calc(100%-2rem)] md:overflow-visible md:px-0">
                    <Image
                        src="/content.png"
                        alt="RoyalSettle app preview"
                        width={522}
                        height={640}
                        className="h-auto w-[300px] object-contain object-bottom md:h-full md:w-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default DownloadPage;