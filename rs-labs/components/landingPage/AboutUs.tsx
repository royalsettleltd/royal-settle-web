import React from 'react';
import Image from 'next/image';
import {Button} from "@/components/ui/button";
import {IoIosArrowRoundForward} from "react-icons/io";
import {Badge} from "@/components/reusables/icons/Badge";
import {Square} from "@/components/reusables/icons/Square";

const AboutUs = () => {
    return (
        <div className={'px-6 md:px-8 pt-20'}>
            <div className={'relative md:flex md:flex-row justify-between flex-col gap-6 md:gap-12 max-w-7xl mx-auto md:h-[100vh] h-[128vh] overflow-hidden'}>
                <div className={'md:mt-20 mt-0 md:w-[46%] w-full'}>
                    <span className={'text-[#1E125C] text-sm font-semibold'}>YOU ARE NOT ALONE!</span>
                    <div className='text-[#121127] text-3xl font-bold mt-2'>Thrift and Ajo at your own pace</div>
                    <p className={'text-[#1211278F] mt-4 md:pb-16 pb-0'}>Save money, organize thrift, manage your financial goals
                        without breaking a sweat in one simple app and intuitive interface. </p>
                    <div className={'flex md:flex-row flex-col justify-between items-center md:mt-16 mt-8 gap-6 w-full'}>
                        <div>
                            <div className='mb-6'>
                                <Badge/>
                            </div>
                            <div className='text-[#121127] font-bold'>Thrift | Personal savings</div>
                            <p className='mt-4 text-sm text-[#1211278F]'>Plan your savings and watch them grow
                                effortlessly</p>
                            <Button variant='ghost'
                                    className={'flex items-center text-[#1E125C] text-sm font-medium p-0 md:mt-6 mt-3'}>Explore
                                more <span><IoIosArrowRoundForward/></span></Button>
                        </div>
                        <div>
                            <div className='mb-6'>
                                <Square/>
                            </div>
                            <div className='text-[#121127] font-bold'>Ajo | Contribution group</div>
                            <p className='mt-4 text-sm text-[#1211278F]'>Pool funds with friends and reach goals faster</p>
                            <Button variant='ghost'
                                    className={'flex items-center text-[#1E125C] text-sm font-medium p-0 md:mt-6 mt-3'}>Explore
                                more <span><IoIosArrowRoundForward/></span></Button>
                        </div>
                    </div>
                </div>

                <div className={'absolute md:right-10 right-2'}>
                    <Image src={'/img.png'} alt={'img'} width={522} height={23} className={'object-cover'} priority/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;