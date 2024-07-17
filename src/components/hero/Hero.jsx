import React from 'react';
import { avatar1, avatar2, avatar3, avatar4, heroImgRect, homeImg, mobileHeroImg, networkDesign, picon, sicon, web3icon } from '../../assets';

function Hero(props) {
    return (
        <>
            <div className="hero max-w-[1512px] min-h-[1123px] pt-0 relative mx-auto bg-dark-cyan xl:p-[15px_96px] 2xl:p-[0_156px] overflow-hidden">
                <div className="hero-img xlg:absolute relative right-0 top-0 z-[2]">
                    <img className="xlg:block hidden 2xl:w-[calc(855px_-_0px)] lg:w-[calc(100vw_-_400px)] xl:w-[calc(100vw_-_600px)] " src={homeImg} alt="Home Girl Image" />
                    <img className="xlg:hidden block" src={mobileHeroImg} alt="Home Girl Image" />
                    <img className="xlg:hidden block absolute top-0 h-[100%]" src={heroImgRect} alt="Home Girl Image rectangle over" />
                </div>
                <div className="background-circle-design2"></div>
                <div className="hero-design absolute h-[calc(100%_+_30px)] -top-[30px] right-0 z-[5] xlg:block hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="100%" viewBox="0 0 1512 1123" fill="none">
                        <path d="M1195.78 0L0 1123H1512V0H1195.78Z" fill="url(#paint0_linear_1_11131)" fillOpacity="0.18" />
                        <defs>
                            <linearGradient id="paint0_linear_1_11131" x1="756" y1="0" x2="756" y2="1123" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#477068" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#005E6B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="hero-design absolute right-0 z-[5] xl:h-[calc(100%_+_30px)] h-[calc(100%_+_15px)]  top-0 xlg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="844" height="1517" viewBox="0 0 844 1517" fill="none">
                        <path d="M667.485 0L0 1517H844V0H667.485Z" fill="url(#paint0_linear_1_12043)" fillOpacity="0.18" />
                        <defs>
                            <linearGradient id="paint0_linear_1_12043" x1="422" y1="0" x2="422" y2="1517" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#477068" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#005E6B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="p-[10px_16px] sm:p-[10px_32px] xl:p-0 relative z-[10] flex flex-col">
                    <div className="max-w-[594px] flex flex-col justify-start items-start gap-[33px] text-white xlg:mt-[31px] mt-[14px] design1-container">
                        <h1 className="font-lato xlg:text-[60px] text-[36px] sm:text-[48px] font-[700]">Start Fundraising on SendMeHugs</h1>
                        <p className="font-inter text-[16px] leading-[28px] sm:text-[18px]">Everything you need to help your fundraiser succeed is here. Start fundraising on the #1 crowdfunding platform today</p>
                        <button className="bg-gradient-cyan font-popins text-[16px] p-[10px_14px] rounded-[36px]">Start Send Me Hugs</button>
                        <div className="background-circle-design1 designm-1">

                        </div>
                    </div>
                    <div className="hero-cards pt-[24px] 2xl:pt-[155px] xlg:pt-[80px] sm:pt-[39px] grid sm:grid-cols-2 gap-[14px] max-w-[532px] design1-container">
                        <div className="md:w-[259px] h-[180px] p-4 w-[100%] flex flex-col items-start justify-between rounded-[8px] bg-gradient-card1">
                            <div className="icon p-2.5 flex items-center justify-center gap-2.5 bg-[rgba(126,167,159,0.58)] rounded-[100px]">
                                <img src={picon} alt="Payment System" />
                            </div>
                            <div className="card-content text-white flex flex-col gap-3 leading-none">
                                <h3 className="card-heading font-inter font-[700] text-[18px]">
                                    Payment System
                                </h3>
                                <p className="font-inter font-[400] text-[14px]">Secure payment methods to
                                    receive your money</p>
                            </div>
                        </div>
                        <div className="md:w-[259px] h-[180px] p-4 w-[100%] flex flex-col items-start justify-between rounded-[8px] bg-gradient-card2">
                            <div className="icon p-2.5 flex items-center justify-center gap-2.5 bg-[rgba(126,167,159,0.58)] rounded-[100px]">
                                <img src={web3icon} alt="Web 3 Project" />
                            </div>
                            <div className="card-content text-white flex flex-col gap-3 leading-none">
                                <h3 className="card-heading font-inter font-[700] text-[18px]">
                                    Web 3 Project
                                </h3>
                                <p className="font-inter font-[400] text-[14px]">Powerful tools to help you
                                    raise money</p>
                            </div>
                        </div>
                        <div className="md:w-[259px] h-[180px] p-4 w-[100%] flex flex-col items-start justify-between rounded-[8px] bg-gradient-card1">
                            <div className="icon p-2.5 flex items-center justify-center gap-2.5 bg-[rgba(126,167,159,0.58)] rounded-[100px]">
                                <img src={sicon} alt="Security" />
                            </div>
                            <div className="card-content text-white flex flex-col gap-3 leading-none">
                                <h3 className="card-heading font-inter font-[700] text-[18px]">
                                    Security
                                </h3>
                                <p className="font-inter font-[400] text-[14px]">Secure payment methods to
                                    receive your money</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-img absolute right-0 bottom-5 z-[3]">
                    <img src={networkDesign} alt="Network Design" />

                </div>
                <div className="para-network relative mt-[40px]  2xl:mt-0 pb-[81px] md:p-10 p-5">
                    <div className="font-lato lg:text-[36px] text-[24px] text-white font-[700] max-w-[700px] relative ml-auto right-0 ">
                        <span className="relative z-[10]">More than 8,000 people over the world already start fundraising on SendMeHugs</span>
                        <img src={avatar1} alt="Avatar 1" className="z-[2] absolute -top-[50%] md:-left-[20px] -left-[10px] opacity-[0.8]" />
                        <img src={avatar2} alt="Avatar 2" className="z-[2] absolute -bottom-[60px] md:-bottom-[77px] left-[40%]" />
                        <img src={avatar4} alt="Avatar 4" className="z-[2] absolute md:-top-[81px] -top-[60px] right-[20%]" />
                        <img src={avatar3} alt="Avatar 3" className="z-[2] absolute -bottom-[33px] left-[70%]" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;