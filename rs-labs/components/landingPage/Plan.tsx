import React from 'react';
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const Plan = () => {
    const  details=[
        {
            icon:'/thrift-icon.png',
            title:'Thrift',
            description:'Create thrift in one second.\n' +
                'Fast, secure, and seamless thrift creation — save at ' +
                'your own pace and watch your money grow effortlessly.',
            btnText:'Get started'
        },
        {
            icon:'/esusu-icon.png',
            title:'Ajo - Esusu',
            description:'Save together, grow together.\n' +
                'Bring your trusted circle online, contribute ' +
                'with ease, and enjoy transparent, stress-free payouts every round.',
            btnText:'Get started'
        },
        {
            icon:'/loan-icon.png',
            title:'Loan',
            description:'Users build financial credibility by saving regularly.\n' +
                'After an eligibility period, they can request loans based on their savings history.',
            btnText:'Coming soon'
        },
    ]
    return (
        <div className={'px-6 md:px-8 py-20'}>
            <div className={'max-w-7xl mx-auto'}>
                <div className={'flex flex-col justify-center items-center w-full border-b border-[#1211271F] pb-10'}>
                    <div className='font-bold text-4xl text-[#121127] mb-4'>User needs made visible.</div>
                    <span>Creativity is a highfalutin word for the work I have to do between now and Tuesday.</span>
                </div>
                <div className={'flex flex-col justify-center items-center w-full mt-10'}>
                    <div className={'grid md:grid-cols-3 grid-cols-1 gap-6 mt-10'}>
                            {details.map((item, index)=>(
                                <Card key={index} className={'p-6 md:w-[300px] w-full flex flex-col justify-between border-[#12112714] shadow-none transition-all duration-300 ease-out\n' +
                                    '    hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]'}>
                                    <div>
                                        <div className='w-12 h-12 mb-4'>
                                            <img src={item.icon} alt={item.title} className='w-full h-full object-contain'/>
                                        </div>
                                        <div className='font-bold text-[#121127]'>{item.title}</div>
                                        <p className='text-sm text-[#1211278F] whitespace-pre-line mt-4'>{item.description}</p>
                                    </div>
                                    <div className='mt-6'>
                                        <Button className={`px-4 py-2 w-full text-white ${item.btnText === 'Coming soon' ? 'bg-[#1E125C] cursor-not-allowed' : 'bg-[#1E125C] hover:bg-[#1e126c]'}`} disabled={item.btnText === 'Coming soon'}>
                                            {item.btnText}
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Plan;