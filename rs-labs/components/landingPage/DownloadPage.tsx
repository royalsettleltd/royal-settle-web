import Image from "next/image";
import React from "react";
import {Button} from "@/components/ui/button";
import {Google} from "@/components/reusables/icons/Google";
import {Apple} from "@/components/reusables/icons/Apple";

const DownloadPage = () => {
    return(
        <div className={'px-6 md:px-8 pt-20'}>
            <div className={'relative md:flex md:flex-row justify-between flex-col gap-6 md:gap-12 max-w-7xl mx-auto md:h-[100vh] h-[95vh] overflow-hidden'}>
                <div className={'md:mt-32 mt-10'}>
                    <div className={'text-3xl text-[#000000] font-semibold mb-6'}>Download our app</div>
                    <p className={'w-full md:w-1/2 text-[#6F6F6F]'}>The best social investing experience.
                        Download the Royalsettle app
                        coming soon.</p>
                    <div className={'flex gap-4'}>
                        <Button variant='outline' className={'mt-6 bg-black text-[#FFFFFF] '}>
                            <div className={'flex gap-2'}><span><Google/></span>Google Play</div>
                        </Button>
                        <Button variant='outline' className={'mt-6 bg-[#FFF] text-[#000] border-[#E5E7EB]'}>
                            <div className={'flex gap-2'}><span><Apple/></span>App Store</div>
                        </Button>
                    </div>
                </div>
                <div className={'absolute md:right-10 right-2'}>
                    <Image src={'/img.png'} alt={'img'} width={522} height={23} className={'object-cover'} priority/>
                </div>
            </div>
        </div>
    )
}
export default DownloadPage;