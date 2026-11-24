"use client"

import React, {useState} from "react"
import Image from "next/image"
import {ArrowLeft, ArrowRight, Star} from "lucide-react"

const testimonials = [
    {
        id: 1,
        quote: "Royalsettle helped me stay disciplined with my savings and reach my goal faster.",
        name: "Ajadi Israel",
        title: "Corper",
        image: "/img1.jpg",
    },
    {
        id: 2,
        quote:
            "Royalsettle has made saving intentional and stress-free for me. I can clearly track my contributions and stay committed to my savings goals without pressure.",
        name: "Grace Moses",
        title: "Educator",
        image: "/img2.jpg",
    },
    {
        id: 3,
        quote:
            "Royalsettle encouraged better spending habits by helping me save consistently and avoid impulse expenses.",
        name: "Olalekan Sofuyi",
        title: "Software Engineer",
        image: "/img3.jpg",
    },
    {
        id: 4,
        quote: "With Royalsettle, my savings has been well secured and am at ease with it.",
        name: "Nwaezeigwe-eze Omolara",
        title: "Frontend Engineer",
        image: "/img4.jpg",
    },
    {
        id: 5,
        quote: "I experienced easy savings with Royalsettle",
        name: "Olalekan-Ajadi Kehinde",
        title: "IT Officer",
        image: "/img5.jpeg",
    },
]

const CARD_W = 205
const GAP = 20
const PITCH = CARD_W + GAP

export function Testimonial() {
    const n = testimonials.length

    // Three copies of the list so the carousel can loop in both directions.
    // We always rest in the middle copy and silently jump back after an animation.
    const items = [...testimonials, ...testimonials, ...testimonials]
    const [pos, setPos] = useState(n)
    const [animate, setAnimate] = useState(true)

    const go = (direction: 1 | -1) => {
        setAnimate(true)
        setPos((p) => p + direction)
    }

    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        // Ignore hover transitions bubbling up from the cards
        if (e.target !== e.currentTarget || e.propertyName !== "transform") return
        if (pos >= 2 * n || pos < n) {
            setAnimate(false)
            setPos((p) => (p >= 2 * n ? p - n : p + n))
        }
    }

    return (
        <section className="w-full overflow-hidden bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-8">
                {/* Heading */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <span className="mb-4 rounded-full bg-[#F1EBFF] px-3 py-1 text-xs font-medium text-[#5B3FD0]">
                        Testimonials
                    </span>
                    <h2 className="mb-3 text-3xl font-bold text-[#101828] md:text-4xl">
                        Don&apos;t just take our word for it
                    </h2>
                    <p className="text-sm text-[#344054] md:text-base">
                        Hear from some of our amazing customers who are enjoying their growth.
                    </p>
                </div>

                {/* Track: clipped on the left at the container edge, bleeds off to the right */}
                <div style={{clipPath: "inset(0 -100vw 0 0)"}}>
                    <div
                        onTransitionEnd={handleTransitionEnd}
                        className={`flex ${
                            animate ? "transition-transform duration-500 ease-out motion-reduce:transition-none" : ""
                        }`}
                        style={{gap: GAP, transform: `translateX(-${pos * PITCH}px)`}}
                    >
                        {items.map((t, i) => (
                            <div
                                key={`${t.id}-${i}`}
                                tabIndex={0}
                                className="group relative h-[275px] shrink-0 overflow-hidden bg-[#E4E7EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B3FD0]"
                                style={{width: CARD_W}}
                            >
                                <Image
                                    src={t.image || "/Avatar.svg"}
                                    alt={t.name}
                                    fill
                                    sizes={`${CARD_W}px`}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"/>

                                {/* Frosted glass panel */}
                                <div className="absolute inset-x-3.5 bottom-3.5 bg-white/25 p-3.5 text-white backdrop-blur-md">
                                    {/* Quote: always visible on mobile, revealed on hover/focus on desktop */}
                                    <div className="overflow-hidden text-sm leading-snug transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:mb-3 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-focus:mb-3 md:group-focus:max-h-40 md:group-focus:opacity-100 max-md:mb-3">
                                        &ldquo;{t.quote}&rdquo;
                                    </div>
                                    <div className="mb-2 flex gap-0.5">
                                        {Array.from({length: 5}).map((_, s) => (
                                            <Star key={s} className="h-3.5 w-3.5 fill-white text-white"/>
                                        ))}
                                    </div>
                                    <div className="text-lg font-medium leading-tight">{t.name}</div>
                                    <div className="mt-1 text-xs">{t.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrows */}
                <div className="mt-6 flex gap-3">
                    <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label="Previous testimonial"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#2A0A59] transition hover:bg-[#F9F5FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B3FD0]"
                    >
                        <ArrowLeft className="h-4 w-4"/>
                    </button>
                    <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label="Next testimonial"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#2A0A59] transition hover:bg-[#F9F5FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B3FD0]"
                    >
                        <ArrowRight className="h-4 w-4"/>
                    </button>
                </div>
            </div>
        </section>
    )
}