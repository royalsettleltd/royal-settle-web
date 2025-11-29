"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
const testimonials = [
    {
        id: 1,
        quote:
            "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitua vehicula elementum sed sit amet dui. Donec sollicitua.",
        name: "Henry Makanakii",
        title: "Lead designer at X",
        image: "",
    },
    {
        id: 2,
        quote:
            "The team delivered exceptional results that exceeded our expectations. Their attention to detail and creative approach made all the difference.",
        name: "Sarah Adeyemi",
        title: "Product Manager at Google",
        image: "",
    },
    {
        id: 3,
        quote:
            "Working with this team transformed our business. The innovative solutions they provided helped us reach new heights.",
        name: "Amara Johnson",
        title: "CEO at TechStart",
        image: "",
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
                    {/* Left side - Quote and info */}
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

                        {/* Previous button (always visible) */}
                        <button
                            onClick={handlePrevious}
                            className="absolute left-0 md:-left-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-muted transition"
                        >
                            <ChevronLeft className="w-5 h-5 text-[#898A8D]" />
                        </button>

                        {/* Mobile: show only the active image */}
                        <div className="flex md:hidden items-center justify-center w-full">
                            <img
                                src={testimonials[activeIndex].image || "/Avatar.svg"}
                                alt={testimonials[activeIndex].name}
                                className="w-48 h-48 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        {/* Desktop: Same look, ZERO jump */}
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
                                            // Base size
                                            "w-40 h-56 opacity-40 scale-90",
                                            // Active state
                                            isActive && "w-56 h-72 scale-110 opacity-100 z-30 shadow-2xl",
                                            // Inactive states
                                            absOffset === 1 && "opacity-70 scale-100 z-20",
                                            absOffset >= 2 && "opacity-0 scale-75 z-10"
                                        )}
                                        style={{
                                            // Position cards perfectly centered
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
                        {/* Desktop: show full carousel */}
                        {/*<div className="hidden md:flex items-end gap-4 px-16">*/}
                        {/*    {testimonials.map((testimonial, index) => {*/}
                        {/*        const isActive = index === activeIndex*/}

                        {/*        return (*/}
                        {/*            <button*/}
                        {/*                key={testimonial.id}*/}
                        {/*                onClick={() => setActiveIndex(index)}*/}
                        {/*                className={cn(*/}
                        {/*                    "relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer",*/}
                        {/*                    isActive*/}
                        {/*                        ? "w-48 h-64 md:w-56 md:h-72 shadow-2xl z-10"*/}
                        {/*                        : "w-32 h-48 md:w-40 md:h-56 opacity-60 grayscale-[30%]"*/}
                        {/*                )}*/}
                        {/*            >*/}
                        {/*                <img*/}
                        {/*                    src={testimonial.image || "/Avatar.svg"}*/}
                        {/*                    alt={testimonial.name}*/}
                        {/*                    className="w-full h-full object-cover"*/}
                        {/*                />*/}
                        {/*            </button>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</div>*/}

                        {/* Next button (always visible) */}
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