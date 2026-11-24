"use client";
import { useState, useEffect } from "react";
import {X} from "lucide-react";
import {LuMenu} from "react-icons/lu";
import {Button} from "@/components/ui/button";

const links = [
    {name:'Home',path:'#home'},
    { name: "Our features", path: "#features" },
    { name: "Testimonials", path: "#testimonial" },
    { name: "FAQs", path: "#faq" },
    { name: "Contact us", path: "#contact" },
];

export const NavBar = () => {
    const [activeSection, setActiveSection] = useState("#home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false); // 👈 controls visibility
    const [lastScrollY, setLastScrollY] = useState(0);

    // 🔶 Scroll tracking
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide/show navbar logic
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                setHidden(true); // scrolling down → hide
            } else {
                setHidden(false); // scrolling up → show
            }
            setLastScrollY(currentScrollY);

            // Active section detection
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY + 120;
                    for (const link of links) {
                        const section = link.path.replace("#", "");
                        const el = document.getElementById(section);
                        if (el) {
                            const top = el.offsetTop;
                            const bottom = top + el.offsetHeight;
                            if (scrollY >= top && scrollY < bottom) {
                                setActiveSection(link.path);
                                break;
                            }
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // 🔶 Smooth scroll + close menu
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        const el = document.querySelector(path);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };
    const goto=()=>{
        window.location.href = "https://forms.gle/wATCDcjUrD5WPkf28";
    }

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#E9F8FB] to-[#FFF1F1] backdrop-blur-sm transition-all duration-500"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className={'flex items-center gap-2'}>
                    <img src={'/Logomark.png'} alt={'logo'}/>
                    <span className={'font-semibold text-xl text-[#27153E]'}>Royalsettle</span>
                </div>

                <nav className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            onClick={(e) => handleClick(e, link.path)}
                            className={`capitalize font-semibold text-base transition-all ${
                                activeSection === link.path
                                    ? "text-[#1E125C] border-b-2 border-[#1E125C]"
                                    : "text-[#121127B8] hover:text-[#1E125C]"
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className={'gap-2 md:flex hidden'}>
                    <Button variant={'outline'} className={'border-[#1211271F] cursor-pointer font-semibold text-base hover:text-[#1E125C]'} onClick={goto}>Login</Button>
                    <Button variant={'outline'} className={'border-[#1211271F] bg-[#240046] text-white tex-base font-semibold cursor-pointer'} onClick={goto}>Sign up</Button>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-3xl text-[#2928FB]"
                >
                    {menuOpen ? <X /> : <LuMenu />}
                </button>
            </div>

            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <nav className="flex flex-col items-center gap-6 py-6 bg-[#E6E6FF] backdrop-blur-md">
                    {links.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            onClick={(e) => handleClick(e, link.path)}
                            className={`capitalize font-medium text-lg transition-all ${
                                activeSection === link.path
                                    ? "text-[#2928FB] border-b-2 border-[#2928FB]"
                                    : "text-[#201F23] hover:text-[#2928FB]"
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};
