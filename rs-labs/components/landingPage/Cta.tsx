import { Facebook, Twitter, Instagram, Github } from "lucide-react"
import Link from "next/link"

const footerLinks = [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "Press", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Partners", href: "#" },
]

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
]


export function Cta() {
    return (
        <footer className="mt-20">
            <div className="relative py-16 mb-44 px-4 md:px-8 md:h-[200px] h-[150px]"
                 style={{
                backgroundImage: `url('/footerBg.png')`,
                backgroundSize: "cover",
            }}
            >

                {/* Contact Card */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="md:mt-8 -mt-2 bg-[#fff] rounded-xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row justify-between md:gap-8 gap-4">
                        {/* Left side - Contact info */}
                        <div className={'md:w-3/5 w-full'}>
                            <p className="text-xs font-semibold tracking-wider text-[#1E125C] uppercase mb-4">Contact Us</p>
                            <h3 className="text-2xl md:text-4xl font-bold text-[#121127] leading-tight md:mb-4 mb-2">
                                You have a new project?
                                or want to say hello...
                            </h3>
                            <a href="mailto:info@email.com" className="text-xl md:text-4xl text-[#12112766] font-bold hover:underline">
                                info@email.com
                            </a>
                        </div>

                        {/* Right side - Office addresses */}
                        <div >
                            <h4 className="font-bold text-[#121127] md:mb-4 mb-2">Offices</h4>
                            <div className="space-y-4 text-sm text-muted-foreground">
                                <div className={'md:w-3/5 w-full space-y-4 text-[#1211278F]'}>
                                    <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                                    <p>8502 Preston Rd. Inglewood, Maine 98380</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer links and social */}
            <div className="bg-[#FFF] md:py-14 pt-32 pb-8 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Navigation links */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm text-[#1211278F] hover:text-[#1E125C] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Social icons */}
                    <div className="flex justify-center gap-6 mb-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="text-muted-foreground hover:text-[#1E125C] transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-[#1211278F]">© {new Date().getFullYear()} royalsettle. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}