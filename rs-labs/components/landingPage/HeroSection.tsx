'use client'
import React from 'react';
import Image from "next/image"
import {Button} from "@/components/ui/button";
import {motion, Variants} from 'framer-motion';
import {bounce, float, phoneFloat} from "@/lib/types/Variant";
import {LuSmartphone} from "react-icons/lu";
import {Typewriter} from "react-simple-typewriter";

const HeroSection = () => {
    const goto = () => {
        window.location.href = "https://docs.google.com/forms/d/19wnSshwkE5H4jAdXcCMLRXpsV2RcLJ4QXmBL8RwEj1g";
    }
    return (
        <div className="px-6 md:px-8 mt:py-20 py-24 bg-gradient-to-r from-[#E9F8FB] to-[#FFF1F1] overflow-hidden">
            <div className={'flex flex-col md:flex-row gap-10 md:gap-0 md:flex justify-between items-center max-w-7xl mx-auto'}>
                <div>
                    <div className={'text-[#201F23] mb-5'}>
                        <motion.div
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.9, ease: "easeOut"}}
                            className="font-semibold text-4xl md:text-6xl mb-2 md:w-[50%]"
                        >
                            <motion.span
                                initial={{opacity: 0}}
                                whileInView={{
                                    opacity: 1,
                                }}
                                viewport={{once: true}}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                    delay: 0.3
                                }}
                            >
                                Save money and manage your goals.
                            </motion.span>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.7, delay: 2}}
                            className="md:w-6/12 flex md:text-xl text-base text-[#1211278F]"
                        >
                            Royalsettle is a digital savings and community finance platform that helps
                            individuals and groups reach their financial goals with ease, discipline, and trust.
                        </motion.div>

                    </div>
                    <div>
                        <Button className={'bg-[#1E125C] text-[#F7F7F8] cursor-pointer'} onClick={goto}>
                            <span className='flex items-center gap-2'>Get started</span>
                        </Button>
                    </div>
                </div>
                <div
                    className="relative w-[227px] h-[380px] md:w-[320px] md:h-[520px] flex items-center justify-center ">
                    <div className='absolute md:-left-52 left-0 md:mt-20 -mt-8'>
                        <Image src={"/frame.png"}
                               width={352}
                               height={473}
                               alt={"frame image"}
                               className=" object-cover "
                               priority/>
                        <div className={'absolute top-10 md:-top-10 md:-right-38 -right-12 w-[80px] md:w-[200px]'}>
                            <Image src={"/yes.png"}
                                   width={200}
                                   height={358}
                                   alt={"yes_pple"}
                                   className=" object-cover "
                                   priority/>
                        </div>
                        <div className={'absolute -bottom-4 md:-left-12 -left-10 w-[80px] md:w-[108px]'}>
                            <Image src={"/yaay.png"}
                                   width={108}
                                   height={176}
                                   alt={"yaay"}
                                   className=" object-cover "
                                   priority/>
                        </div>
                        <div className={'absolute -bottom-8 md:-bottom-10 md:right-6 right-0 md:w-[100px] w-[80px]'}>
                            <Image src={"/woye.png"}
                                   width={100}
                                   height={170}
                                   alt={"iriri"}
                                   className=" object-cover "
                                   priority/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;