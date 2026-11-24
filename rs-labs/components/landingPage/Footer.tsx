import React from "react";
import Image from "next/image";
import Link from "next/link";
import {FaXTwitter} from "react-icons/fa6";
import {FaLinkedin, FaFacebook, FaGithub, FaAngellist, FaDribbble} from "react-icons/fa";


const links = [
    {label: "Features", href: "#features"},
    {label: "Testimonials", href: "#testimonial"},
    {label: "FAQs", href: "#faq"},
    {label: "Contact us", href: "#contact"},
    {label: "Privacy", href: "/privacy"},
    {label: "T&C", href: "/terms"},
];

const socials = [
    {label: "X", href: "#", icon: FaXTwitter},
    {label: "LinkedIn", href: "#", icon: FaLinkedin},
    {label: "Facebook", href: "#", icon: FaFacebook},
    {label: "GitHub", href: "#", icon: FaGithub},
    {label: "AngelList", href: "#", icon: FaAngellist},
    {label: "Dribbble", href: "#", icon: FaDribbble},
];

const StoreBadge = ({icon, small, big}: { icon: React.ReactNode; small: string; big: string }) => (
    <div
        aria-disabled
        className="flex w-[93px] items-center gap-1.5 rounded-md border border-[#A6A6A6] bg-black px-2 py-1 text-white"
    >
        <span className="flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full">{icon}</span>
        <span className="flex flex-col leading-none">
            <span className="text-[6px]">{small}</span>
            <span className="text-[11px] font-semibold">{big}</span>
        </span>
    </div>
);

const Footer = () => {
    return (
        <footer className="bg-[#F4F3FF] px-6 pb-8 pt-12 md:px-8 md:pt-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    {/* Brand + links */}
                    <div>
                        <Link href="/" className="mb-6 flex items-center gap-2">
                            <Image src="/Logomark.png" width={24} height={24} alt="" className="h-6 w-6"/>
                            <span className="text-xl font-semibold tracking-wide text-[#27153E]">Royalsettle</span>
                        </Link>
                        <p className="mb-8 max-w-[260px] text-base leading-relaxed text-[#667085]">
                            Royalsettle is a digital savings and community finance platform that helps individuals
                            and groups reach their financial goals with ease, discipline, and trust.
                        </p>
                        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
                            {links.map((l) => (
                                <Link
                                    key={l.label}
                                    href={l.href}
                                    className="text-base font-semibold text-[#475467] hover:text-[#240046]"
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* App badges */}
                    <div className="md:text-left">
                        <div className="mb-3 text-base font-medium text-[#240046]">Get the mobile app</div>
                        <div className="flex flex-col gap-2.5">
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
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col gap-4 border-t border-[#E4E7EC] pt-8 md:flex-row md:items-center md:gap-8">
                    <p className="text-base text-[#667085]">
                        &copy; {new Date().getFullYear()} Royalsettleltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        {socials.map(({label, href, icon: Icon}) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="text-[#98A2B3] transition-colors hover:text-[#240046]"
                            >
                                <Icon className="h-[24px] w-[24px]"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;