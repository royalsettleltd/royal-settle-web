'use client';
import {Button} from "@/components/ui/button";

export const Access = () => {
    const gotoAccess = () => {
        window.location.href = 'https://docs.google.com/forms/d/19wnSshwkE5H4jAdXcCMLRXpsV2RcLJ4QXmBL8RwEj1g'
    }
  return (
    <div className={'px-6 md:px-8 py-20 bg-[#F2F3FF]'}>
        <div className={'relative flex md:flex-row justify-between flex-col gap-6 md:gap-12 max-w-7xl mx-auto'}>
            <div className={'md:mt-32 mt-20 md:w-1/2 w-full'}>
                <div className={'text-4xl text-[#121127] font-bold mb-6'}>Ready to dive in?
                    Get early access today.</div>
                <p>Be part of our early community and start building your thrift journey before the app launches.
                    This also takes them to register with us and they can create thrifts before the app comes</p>
                <Button className={'bg-[#1E125C] text-[#fff] mt-5 cursor-pointer'} onClick={gotoAccess}>Get early Access</Button>
            </div>
            <div className={'relative md:left-30 left-0 mt-12'}>
                <img src={'/access.png'} alt={'access'} width={822} height={23} className={'object-cover'} />
            </div>
        </div>
    </div>
  )
}