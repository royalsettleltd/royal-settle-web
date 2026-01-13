"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
const testimonials = [
    {
        id: 1,
        quote:
            "Royalsettle helped me stay disciplined with my savings and reach my goal faster.",
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
        quote:
            "With Royalsettle, my savings has been well secured and am at ease with it.",
        name: "Nwaezeigwe-eze Omolara",
        title: "Frontend Engineer",
        image: "/img4.jpg",
    },
]

export function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0)


    const handlePrevious = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    return (
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    <div className="flex-1 max-w-md">
                        <blockquote className="text-[#7F7F7F] text-lg leading-relaxed mb-6">
                            "{testimonials[activeIndex].quote}"
                        </blockquote>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-foreground">{testimonials[activeIndex].name}</h3>
                            <p className="text-muted-foreground">{testimonials[activeIndex].title}</p>
                        </div>
                        {/* Pagination dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={cn(
                                        "h-0.5 rounded-full transition-all duration-300",
                                        index === activeIndex ? "w-8 bg-[#1e3a5f]" : "w-4 bg-[#C4C4C4]",
                                    )}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>


                    <div className="flex-1 relative flex items-center justify-center">


                        <button
                            onClick={handlePrevious}
                            className="absolute left-0 md:-left-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-muted transition"
                        >
                            <ChevronLeft className="w-5 h-5 text-[#898A8D]" />
                        </button>


                        <div className="flex md:hidden items-center justify-center w-full">
                            <img
                                src={testimonials[activeIndex].image || "/Avatar.svg"}
                                alt={testimonials[activeIndex].name}
                                className="w-48 h-48 object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        <div className="hidden md:flex items-end justify-center gap-6 relative h-72 w-full">
                            {testimonials.map((testimonial, index) => {
                                const isActive = index === activeIndex
                                const offset = index - activeIndex
                                const absOffset = Math.abs(offset)

                                return (
                                    <div
                                        key={testimonial.id} // This is CRUCIAL for smooth remounting
                                        className={cn(
                                            "relative transition-all duration-700 ease-out",
                                            "rounded-2xl overflow-hidden shadow-lg",
                                            "w-40 h-56 opacity-40 scale-90",
                                            isActive && "w-56 h-72 scale-110 opacity-100 z-30 shadow-2xl",
                                            absOffset === 1 && "opacity-70 scale-100 z-20",
                                            absOffset >= 2 && "opacity-0 scale-75 z-10"
                                        )}
                                        style={{
                                            transform: `translateX(${offset * 40}px) ${isActive ? 'translateY(-20px)' : 'translateY(0)'}`,
                                        }}
                                    >
                                        <button
                                            onClick={() => setActiveIndex(index)}
                                            className="w-full h-full"
                                        >
                                            <img
                                                src={testimonial.image || "/Avatar.svg"}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover pointer-events-none"
                                            />
                                        </button>
                                    </div>
                                )
                            })}
                        </div>

                        <button
                            onClick={handleNext}
                            className="absolute right-0 md:-right-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-muted transition"
                        >
                            <ChevronRight className="w-5 h-5 text-[#898A8D]" />
                        </button>

                    </div>

                </div>
            </div>
        </section>
    )
}