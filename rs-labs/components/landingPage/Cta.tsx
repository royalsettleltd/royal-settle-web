import React from "react";

const PHONE_DISPLAY = "+234 803 072 3213";
const PHONE_TEL = "+2348030723213";
const EMAIL = "royalsettleltd@gmail.com";

const contacts = [
    {
        icon: "/face.png",
        title: "Send us a mail",
        description: "Speak to our friendly team.",
        label: EMAIL,
        href: `mailto:${EMAIL}`,
        underline: true,
    },
    {
        icon: "/chat.png",
        title: "Chat to support",
        description: "We're here to help.",
        label: PHONE_DISPLAY,
        href: `https://wa.me/${PHONE_TEL.replace("+", "")}`,
        underline: false,
    },
    {
        icon: "/call.png",
        title: "Call us",
        description: "Mon-Fri from 8am to 5pm.",
        label: PHONE_DISPLAY,
        href: `tel:${PHONE_TEL}`,
        underline: false,
    },
];

const Cta = () => {
    return (
        <section id="contact" className="bg-white px-6 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-12 flex flex-col items-center text-center md:mb-16">
                    <span className="mb-4 rounded-full bg-[#F1EBFF] px-3 py-1 text-xs font-medium text-[#5B3FD0]">
                        Contact us
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#101828] md:text-5xl">
                        We&apos;d love to hear from you
                    </h2>
                    <p className="text-sm text-[#475467] md:text-base">
                        Our friendly team is always here to chat.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {contacts.map(({icon, title, description, label, href, underline}) => (
                        <div
                            key={title}
                            className="flex flex-col items-center bg-[#F9FAFB] px-6 pb-8 pt-8 text-center"
                        >
                            <span className="mb-12 flex h-9 w-9 items-center justify-center rounded-lg bg-[#240046] text-white">
                                <img src={icon} alt={title} className="h-[28px] w-[28px]"/>
                            </span>
                            <h3 className="mb-2 text-base font-semibold text-[#101828]">{title}</h3>
                            <p className="mb-5 text-xs text-[#475467]">{description}</p>
                            <a
                                href={href}
                                {...(href.startsWith("http") ? {target: "_blank", rel: "noopener noreferrer"} : {})}
                                className={`text-xs font-semibold text-[#240046] hover:opacity-80 ${
                                    underline ? "underline underline-offset-2" : ""
                                }`}
                            >
                                {label}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cta;