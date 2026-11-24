'use client';
import {Button} from "@/components/ui/button";

const SIGNUP_URL = 'https://forms.gle/wATCDcjUrD5WPkf28';
const LOGIN_URL = '/login'; // TODO: point this at your real login route

export const Access = () => {
    const goto = (url: string) => {
        window.location.href = url;
    };

    return (
        <section className="bg-white px-6 py-12 md:px-8 md:py-20">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-2xl bg-[#F8F9FB] px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
                <div>
                    <h2 className="mb-3 text-3xl font-semibold text-[#101828]">
                        Get early access today
                    </h2>
                    <p className="text-xl text-[#475467]">
                        Join over 4,000+ communities already growing with Royalsettle.
                    </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                    <Button
                        variant="outline"
                        className="cursor-pointer border-[#D0D5DD] bg-white px-4 text-base font-semibold text-[#755F90] hover:bg-[#F9FAFB]"
                        onClick={() => goto(LOGIN_URL)}
                    >
                        Log in
                    </Button>
                    <Button
                        className="cursor-pointer bg-[#240046] px-4 text-base font-semibold text-white hover:bg-[#2F0460]"
                        onClick={() => goto(SIGNUP_URL)}
                    >
                        Create an Account
                    </Button>
                </div>
            </div>
        </section>
    );
};