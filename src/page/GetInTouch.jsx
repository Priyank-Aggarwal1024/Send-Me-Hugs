import React, { useState } from 'react';
import { Footer, FooterBottom, Navbar } from '../components';

function GetInTouch(props) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className={`w-[100%] relative max-w-[100vw] bg-dark-cyan overflow-hidden `}>

            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
            <div className="faq-background-circle-design"></div>
            <div className="background-circle-design1 faq-design1"></div>
            <div className="flex flex-col justify-center items-center  gap-[28px] max-w-[1512px] relative z-[2] mx-auto text-white 2xl:px-[156px] lg:px-[32px] xl:px-[96px] px-[16px] md:py-[96px]">
                <div className="flex flex-col gap-4">
                    <h2 className="font-lato text-[32px] font-bold leading-10 text-center">Get In Touch</h2>
                    <p className="text-[16px] font-[500] font-inter text-center">24/7 We will answer to your questions and problems</p>
                </div>
                <form action="" className="xlg:max-w-[793px] w-full flex flex-col gap-[22px] bg-[rgba(255,255,255,0.06)] p-[10px_16px_24px_16px]">
                    <div className="grid xlg:grid-cols-2 gap-[22px]">
                        <div className="h-[64px] flex justify-end flex-col relative">
                            <label htmlFor="name" className="text-[12px] font-[500] font-inter">Your name</label>
                            <input type="text" name="name" id="name" className="text-[14px] outline-none border-b border-[#D0D2D5] bg-transparent py-2.5 px-1 placeholder:text-[16px]" placeholder="Adam" />
                        </div>
                        <div className="h-[64px] flex justify-end flex-col relative">
                            <label htmlFor="email" className="text-[12px] font-[500] font-inter">Email</label>
                            <input type="email" name="email" id="email" className="text-[14px] outline-none border-b border-[#D0D2D5] bg-transparent py-2.5 px-1 placeholder:text-[16px]" placeholder="adam_smith@hotmail.com" />
                        </div>
                        <div className="min-h-[64px] flex justify-end flex-col relative xlg:col-span-2">
                            <label htmlFor="email" className="text-[12px] font-[500] font-inter">Your message here</label>
                            <textarea type="email" name="email" id="email" className="text-[14px] h-auto outline-none border-b border-[#D0D2D5] bg-transparent py-2.5 px-1 leading-5 placeholder:text-[16px]" placeholder="Your message here" ></textarea>
                        </div>
                        <div className="ml-auto xlg:col-span-2 opacity-50">
                            <button className="bg-gradient-cyan bg-gradient-cyan-hover font-popins text-[16px] w-[200px] p-[10px_14px] rounded-[36px]">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="bg-[rgba(53,85,92,0.30)]">
                <Footer />
                <div className="px-4 md:px-0 my-3">
                    <div className="h-[1px] w-[100%] bg-[#D9D9D9]"></div>
                </div>
                <FooterBottom />
            </div>
        </div>
    );
}

export default GetInTouch;