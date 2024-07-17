import React, { useState } from 'react';
import { Navbar, Footer, FooterBottom } from '../components';
import { Link } from 'react-router-dom';
import { graph, helpImg, of3, pay1, pay2, pay3, pay4, pay5, pay6 } from '../assets';

function Help(props) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="w-[100%] bg-dark-cyan ">
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
            <div className="max-w-[1512px] mx-auto text-white 2xl:px-[156px] lg:px-[32px] xl:px-[96px] px-[16px] pt-3">
                <Link className="flex items-center p-[6px_8px] gap-1 w-fit" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.8002 7.99981L3.2002 7.9998M3.2002 7.9998L6.59431 11.1998M3.2002 7.9998L6.59431 4.7998" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Back</span>
                </Link>
                <div className="flex pt-5 gap-5">
                    <div className="flex flex-col gap-7 w-[calc(100%_-_407px]">
                        <img src={helpImg} alt="Help Top Image" />
                    </div>
                    <div className="xlg:flex flex-col gap-[21px] bg-white w-[387px] hidden py-5 px-4">
                        <p className="border-b border-primary-500 text-primary-500 font-inter text-[16px] font-[400] leading-6 w-fit mx-auto">207 supporters</p>
                        <img className="w-[158px] mx-auto" src={graph} alt="Graph 75%" />
                        <div className="flex gap-[18px] mx-auto">
                            <div className="flex text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M24.7502 9.9C24.7502 9.54638 24.6053 9.20724 24.3474 8.95719C24.0896 8.70714 23.7398 8.56667 23.3752 8.56667L12.3752 8.5C12.0105 8.5 11.6608 8.64048 11.4029 8.89052C11.145 9.14057 11.0002 9.47971 11.0002 9.83333C11.0002 10.187 11.145 10.5261 11.4029 10.7761C11.6608 11.0262 12.0105 11.1667 12.3752 11.1667H20.0202L8.64891 22.22C8.52003 22.344 8.41774 22.4914 8.34793 22.6539C8.27813 22.8164 8.24219 22.9907 8.24219 23.1667C8.24219 23.3427 8.27813 23.517 8.34793 23.6794C8.41774 23.8419 8.52003 23.9894 8.64891 24.1133C8.77673 24.2383 8.92881 24.3375 9.09637 24.4052C9.26392 24.4729 9.44364 24.5077 9.62516 24.5077C9.80668 24.5077 9.9864 24.4729 10.154 24.4052C10.3215 24.3375 10.4736 24.2383 10.6014 24.1133L22.0002 13.06V20.5C22.0002 20.8536 22.145 21.1928 22.4029 21.4428C22.6607 21.6929 23.0105 21.8333 23.3752 21.8333C23.7398 21.8333 24.0896 21.6929 24.3474 21.4428C24.6053 21.1928 24.7502 20.8536 24.7502 20.5V9.9Z" fill="black" />
                                </svg>
                                <div className="font-inter text-[20px] font-[500] pl-[17px]">$23,698.00 </div>
                            </div>
                            <div className="flex text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <circle cx="15.9998" cy="16" r="3.2" fill="black" />
                                    <path d="M16.0002 16L28.8002 3.19995M23.6802 16C23.6802 20.2415 20.2417 23.68 16.0002 23.68C11.7586 23.68 8.3202 20.2415 8.3202 16C8.3202 11.7584 11.7586 8.31995 16.0002 8.31995C20.2417 8.31995 23.6802 11.7584 23.6802 16ZM28.8002 16C28.8002 23.0692 23.0694 28.8 16.0002 28.8C8.93095 28.8 3.2002 23.0692 3.2002 16C3.2002 8.93071 8.93095 3.19995 16.0002 3.19995C23.0694 3.19995 28.8002 8.93071 28.8002 16Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <div className="font-inter text-[20px] font-[500] pl-[17px]">$25,000.00 </div>
                            </div>
                        </div>
                        <button className="bg-gradient-cyan font-popins text-[16px] p-[10px_14px] rounded-[36px]">Start Send Me Hugs</button>
                        <p className="font-inter text-center text-[14px] leading-5 text-[rgba(93,93,93,1)]">Card, Netbanking, Cheque pickups</p>
                        <div className="grid grid-cols-4 gap-3 items-center px-5 font-inter text-center text-[14px] leading-5 text-[rgba(93,93,93,1)]">
                            <div className="h-[1px] bg-[rgba(156,51,83,0.18)]"></div>
                            <span className="col-span-2">Or Donate using</span>
                            <div className="h-[1px] bg-[rgba(156,51,83,0.18)]"></div>
                        </div>
                        <div className="flex items-center justify-center gap-[21px]">
                            <span className="w-[34px] h-6 border rounded border-[#F5F5F5] flex justify-center items-center">
                                <img className="" src={pay1} alt="Payoneer" />
                            </span>
                            <span className="w-[34px] h-6 border rounded border-[#F5F5F5] flex justify-center items-center">
                                <img className="" src={pay2} alt="Amazon" />
                            </span>
                            <span className="w-[34px] h-6 border rounded border-[#F5F5F5] flex justify-center items-center">
                                <img className="" src={pay3} alt="AMEX" />
                            </span>
                            <span className="w-[34px] h-6 border rounded border-[#F5F5F5] flex justify-center items-center">
                                <img className="" src={pay4} alt="Apple Pay" />
                            </span>
                            <span className="w-[34px] h-6 border rounded border-[#F5F5F5] flex justify-center items-center">
                                <img className="" src={pay5} alt="G Pay" />
                            </span>
                            <span className="w-[34px] h-6 border rounded border-[#F5F5F5] flex justify-center items-center">
                                <img className="" src={pay6} alt="Master Card" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div className="px-4 md:px-0 my-3">
                <div className="h-[1px] w-[100%] bg-[#D9D9D9]"></div>
            </div>
            <FooterBottom />
        </div>
    );
}

export default Help;