import React, { useState } from 'react';
import { Faq, Footer, FooterBottom, Navbar } from '../components';

function FaqPage(props) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <div className="w-[100%] bg-dark-cyan ">
                <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
                <div className="max-w-[1512px] mx-auto text-white 2xl:px-[156px] lg:px-[32px] xl:px-[96px] px-[16px] pt-6">
                    <div className=" max-w-[895px] ">
                        <h2 className="font-lato font-[700] pb-[28px] text-[32px] leading-[40px] md:text-start -tracking-[.64px]">Frequently asked Questions</h2>
                        <Faq />
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

export default FaqPage;