import React from 'react';
import { useState } from 'react';
import { ExampleFundraiser, Fundraising, Hero, Navbar, Faq, Card2, Footer, FooterBottom } from '../components';
import { child, logo2, mchild, mmoney, money, si1, si2, si3, smh1, smh2, smh3, smh4, smh5, smh6, smh7, smh8, smh9 } from '../assets';

function Home(props) {
    const smh = [
        {
            src: smh1,
            heading: "Charity",
            desc: "Make a difference for your favourite charity by starting a GoFundMe for your birthday, a marathon, or just because you care. ",
            arrow: false
        },
        {
            src: smh2,
            heading: "Memorial",
            desc: "Raise money to help cover the cost of memorial expenses, to support family members, or to honour someone’s memory on the world’s most chosen crowdfunding platform.",
            arrow: false
        },
        {
            src: smh3,
            heading: "Sports",
            desc: "Easily raise money for nonprofits, projects, and resources supporting environmental and conservation efforts.",
            arrow: true
        },
        {
            src: smh4,
            heading: "Charity",
            desc: "Easily raise money for nonprofits, projects, and resources supporting environmental and conservation efforts.",
            arrow: false
        },
        {
            src: smh5,
            heading: "Animals",
            desc: "Animal-lovers are coming to GoFundMe to fundraise for vet bills, animal shelters, and charities.",
            arrow: false
        },
        {
            src: smh6,
            heading: "Environment",
            desc: "Easily raise money for nonprofits, projects, and resources supporting environmental and conservation efforts.",
            arrow: false
        },
        {
            src: smh7,
            heading: "Education",
            desc: "Teachers, students, parents, clubs, and more use GoFundMe as a trusted and easy way to raise money for education needs. ",
            arrow: false
        },
        {
            src: smh8,
            heading: "Medical",
            desc: "Easily raise money for nonprofits, projects, and resources supporting environmental and conservation efforts.",
            arrow: false
        },
        {
            src: smh9,
            heading: "Charity",
            desc: "Easily raise money for nonprofits, projects, and resources supporting environmental and conservation efforts.",
            arrow: false
        },
    ]
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <div className={`home w-[100%] bg-dark-cyan ${navOpen && "fixed"}`}>

                <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
                <Hero />
                <div className="max-w-[1512px] mx-auto pt-[18px] sm:pt-[75px] 2xl:px-[156px] lg:px-[33px] xl:px-[96px] px-[16px]">
                    <div className="flex flex-col gap-[32px] mx-auto max-w-[1200px text-white">
                        <div className="lg:w-[578px] mx-auto">
                            <h2 className="pb-2 font-lato sm:text-[36px] xss:text-[28px] text-[32px] font-[700] text-center">How to start a  SendMeHugs</h2>
                            <p className="font-inter text-[18px] font-[400] leading-[28px] text-center sm:text-left">Here is our 3 steps how to make Send me hugs work for you</p>
                        </div>
                        <div className="grid xlg:grid-cols-3 gap-5 sm:grid-cols-2">
                            <div className="p-[12px] gap-[12px] flex flex-col h-[416px] rounded-[8px] bg-[#325765]">
                                <img src={si1} alt="Our tools help create your fundraiser" />
                                <div className="p-[3px_8px] bg-[#5A8B9D] rounded-[4px] flex items-center justify-center w-fit font-[600] font-manrope text-[12px]">Step 1</div>
                                <div className="flex flex-col gap-[12px]">
                                    <p className="font-inter font-[700] text-[20px] max-w-[300px]">Our tools help create your fundraiser</p>
                                    <p className="font-inter font-[400] text-[14px]">Click the ‘Start Send Me Hugs’ button to get started. You’ll be guided by prompts to add fundraiser details and set your goal, which can be changed anytime.</p>
                                </div>
                            </div>
                            <div className="p-[12px] gap-[12px] flex flex-col h-[416px] rounded-[8px] bg-[#325765]">
                                <img src={si2} alt="Share your fundraiser link to reach donors" />
                                <div className="p-[3px_8px] bg-[#5A8B9D] rounded-[4px] flex items-center justify-center w-fit font-[600] font-manrope text-[12px]">Step 2</div>
                                <div className="flex flex-col gap-[12px]">
                                    <p className="font-inter font-[700] text-[20px] max-w-[300px]">Share your fundraiser
                                        link to reach donors</p>
                                    <p className="font-inter font-[400] text-[14px]">Once live, share your fundraiser link with friends and family to start gaining momentum. You’ll also find helpful resources for running your fundraiser in your Send Me Hugs dashboard.</p>
                                </div>
                            </div>
                            <div className="p-[12px] gap-[12px] flex flex-col h-[416px] rounded-[8px] bg-[#325765]">
                                <img src={si3} alt="Our tools help creat your fundraiser" />
                                <div className="p-[3px_8px] bg-[#5A8B9D] rounded-[4px] flex items-center justify-center w-fit font-[600] font-manrope text-[12px]">Step 3</div>
                                <div className="flex flex-col gap-[12px]">
                                    <p className="font-inter font-[700] text-[20px] max-w-[300px]">Our tools help create
                                        your fundraiser</p>
                                    <p className="font-inter font-[400] text-[14px]">Add your bank information, or invite your intended recipient to add theirs, to securely start receiving funds. You don’t need to reach your fundraising goal to start receiving funds.</p>
                                </div>
                            </div>
                        </div>
                        <button className="px-3.5 py-2.5 bg-gradient-cyan sm:mx-auto rounded-[36px]">Start Send Me Hugs</button>
                    </div>
                </div>
                <ExampleFundraiser />
                <div className="my-[66px] w-[100%]">
                    <div className="mx-auto bg-white pt-[61px] px-4 pb-[90px] md:pb-[54px] 2xl:px-[128px] xl:px-[96px] sm:px-[44px]">
                        <div className="mx-auto flex gap-[70px] xl:gap-[37px] xl:max-w-[865px] md:flex-row flex-col items-center">
                            <img className="aspect-square w-[158px] h-[158px]" src={logo2} alt="Logo SVG" />
                            <div className="flex flex-col gap-[23px] items-center md:items-start">
                                <h2 className="font-inter font-[700] text-black xl:text-[32px] text-[24px] xl:leading-[44px] leading-[30px] -tracking-[.8px] text-center md:text-start">Join the millions of people fundraising for a
                                    cause they care about on SendMeHugs</h2>
                                <button className="px-3.5 py-2.5 text-white bg-gradient-cyan w-full sm:w-fit rounded-[36px]">Start Send Me Hugs</button>
                            </div>
                        </div>

                    </div>

                </div>
                <Fundraising />
                <div className="bg-[rgba(152,149,156,0.10)]">
                    <div className="mt-[66px] py-[44px] px-[20px] md:px-[59px] xl:px-[156px] flex flex-col 2xl:flex-row text-white gap-[55px] justify-between">
                        <div className="flex flex-col gap-5  2xl:min-w-[426px]">
                            <div className="flex flex-col gap-1.5 ">
                                <p className="font-inter font-[500] text-[20px] leading-[28px] md:text-start -tracking-[.4px]">Most Questions</p>
                                <h2 className="font-inter font-[700] text-[32px] leading-[36px] md:text-start -tracking-[.64px]">Frequently asked Questions</h2>

                            </div>
                            <div className="p-[8px_12px] flex justify-center items-center gap-1 font-popins text-[16px] rounded-[36px] border-[1px] border-[#1DD2B4] mr-auto text-primary-500 w-fit">Any Question?</div>
                        </div>
                        <Faq />

                    </div>
                </div>
                <div className="max-w-[1512px] mx-auto mt-[66px] 2xl:px-[156px] lg:px-[32px] xl:px-[96px] px-[16px] flex flex-col gap-[36px] text-white relative">
                    <div className="background-circle-design1 design4"></div>
                    <div className="flex flex-col gap-[20px]">
                        <h2 className="font-inter font-[700] text-[32px] leading-[48px] -tracking-[.8px] text-center">Send me hugs?</h2>
                        <p className="font-inter font-[400] text-[16px] leading-[24px] text-center self max-w-[650px] mx-auto">GoFundMe is the trusted place to fundraise for what you care about. There is no
                            pressure to reach your fundraising goal and we have created tools to make it easy
                            for donors to contribute to your fundraiser.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] relative z-[2]">
                        {
                            smh.map((item, idx) => <Card2 item={item} key={idx} />)
                        }
                    </div>
                </div>
                <div className="max-w-[1512px] mx-auto mt-[66px] 2xl:px-[156px] lg:px-[32px] xl:px-[96px] px-[16px] grid gap-5 lg:grid-cols-2 text-white pb-[38px] sm:pb-[66px]">
                    <div className="relative">
                        <img className="w-[100%] hidden sm:block" src={money} alt="Money" />
                        <img className="w-[100%] sm:hidden" src={mmoney} alt="Money" />
                        <div className="mask absolute top-0 h-[100%] w-[100%] py-5 px-6 ">
                            <h2 className="font-inter font-[700] text-[28px] leading-[36px] sm:text-[36px] sm:leading-[48px] -tracking-[.8px] ">Asking for help feels big.</h2>
                            <h2 className="font-inter font-[700] text-[28px] leading-[36px] sm:text-[36px] sm:leading-[48px] -tracking-[.8px]" > Let’s start small.</h2>
                            <button className="bg-gradient-cyan font-popins text-[16px] p-[10px_14px] mt-5 rounded-[36px] font-[500]">Start Send Me Hugs</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-[100%] hidden sm:block" src={child} alt="Child" />
                        <img className="w-[100%] sm:hidden" src={mchild} alt="Child" />
                        <div className="mask absolute top-0 h-[100%] w-[100%] py-5 px-6 ">
                            <h2 className="font-inter font-[700] text-[28px] leading-[36px] sm:text-[36px] sm:leading-[48px] -tracking-[.8px] ">Still need help?</h2>
                            <h2 className="font-inter font-[700] text-[28px] leading-[36px] sm:text-[36px] sm:leading-[48px] -tracking-[.8px] ">We’re here for you.</h2>
                            <button className="bg-[#4F4F4F] font-popins text-[16px] p-[10px_14px] mt-5 rounded-[38px] font-[500]">Visit Help Center</button>
                        </div>

                    </div>
                </div>
                <Footer />
                <div className="px-4 md:px-0 my-3">
                    <div className="h-[1px] w-[100%] bg-[#D9D9D9]"></div>
                </div>
                <FooterBottom />
            </div>
        </>
    );
}

export default Home;