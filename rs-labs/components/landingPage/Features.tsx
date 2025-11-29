import React from 'react';
import Image from "next/image"

const Features = () => {
    return (
        <div className="px-6 md:px-8 py-20" style={{backgroundImage: `url("/background.png")`}}>
            <div className={'relative flex md:flex-row flex-col justify-between gap-6 max-w-7xl mx-auto min-h-screen'} >
                <div className={'text-[#fff] md:pt-32'}>
                    <div className={'md:text-6xl text-5xl font-bold leading-20'}>Ajo <span className={'md:text-4xl text-3xl'}>- Esusu</span></div>
                    <div className="md:text-6xl text-5xl font-extrabold text-transparent leading-20
                    [-webkit-text-stroke-width:0.2px] [-webkit-text-stroke-color:#ffffff]">
                        Thrift
                    </div>
                    <div className="text-5xl md:text-6xl font-extrabold text-transparent
                    [-webkit-text-stroke-width:0.2px] [-webkit-text-stroke-color:#ffffff]">
                        Loan
                    </div>
                </div>
                <div className={'relative md:right-12 right-0 left-4 md:left-0'}>
                    <Image src={'/desktop1.png'} alt={'overlap'} width={750} height={650} priority
                           className={'object-cover'}/>
                </div>
                    <Image src={'/deskOverlay.png'} alt={'overlap'} width={510} height={25} priority
                           className={'md:absolute relative md:w-[510px] w-[200px] md:-right-30 -right-50 md:top-35 -top-74 object-cover'}/>
                <Image src={'/deskframe.png'} alt={'frame'} width={180} height={100}
                       className={'absolute right-[52%] md:w-[180px] w-[110px] bottom-74 md:bottom-42 md:right-[36%] object-cover'}/>
            </div>
        </div>
    );
};

export default Features;