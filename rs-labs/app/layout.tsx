import type { Metadata } from "next";
import {Familjen_Grotesk} from 'next/font/google';
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-familjen',
    display: 'swap',
});



export const metadata: Metadata = {
    title: "Royalsettle MFB",
    description: "Future of savings and loans",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${familjenGrotesk.variable}`}>
        <head>
            <link href="https://cdnfonts.com" rel="stylesheet" />
        </head>
        <body>
        <div className={'mx-auto w-full overflow-hidden'}>
            {children}
        </div>
        </body>
        </html>
    );
}
