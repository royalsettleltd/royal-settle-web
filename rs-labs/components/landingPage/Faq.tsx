
"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "What is Thrift on RoyalSettle?",
        answer:
            "Thrift is your personal savings plan where you contribute a fixed amount consistently to reach your financial goals at your pace.",
    },
    {
        question: "What is Ajo?",
        answer:
            "Ajo is a traditional rotating savings system where a group of people contribute money regularly and take turns receiving the pooled funds.",
    },
    {
        question: "Do I need to join a group to start Thrift?",
        answer:
            "No, you can start your personal Thrift savings independently without joining any group. It's completely flexible to your needs.",
    },
    {
        question: "Can I create my own Ajo group?",
        answer:
            "Yes, you can create and manage your own Ajo group, invite members, and set the contribution amount and schedule.",
    },
    {
        question: "Is Ajo safe on RoyalSettle?",
        answer:
            "Absolutely. We use bank-level security and smart contracts to ensure all transactions are safe and transparent.",
    },
    {
        question: "How do payouts work?",
        answer:
            "Payouts are automatically distributed according to the schedule set when the group was created. You'll receive notifications before each payout.",
    },
    {
        question: "Can I leave an Ajo group after joining?",
        answer:
            "You can leave a group before the cycle starts. Once a cycle begins, you'll need to complete it to ensure fairness for all members.",
    },
    {
        question: "Are there hidden charges?",
        answer:
            "No hidden charges. We believe in complete transparency. All fees are clearly displayed before you confirm any transaction.",
    },
    {
        question: "How do I get early access?",
        answer:
            "Sign up for our waitlist and you'll be among the first to know when we launch. Early users get exclusive benefits!",
    },
]

export function Faq() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#121127]">Frequently asked questions</h2>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#1211271F]">
                        <AccordionTrigger className="text-left text-sm md:text-base font-bold py-5 hover:no-underline">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1211278F] text-sm pb-5">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}