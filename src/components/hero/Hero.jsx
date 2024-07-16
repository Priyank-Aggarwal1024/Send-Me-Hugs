import React from 'react';
import { avatar1, avatar2, avatar3, avatar4, heroImgRect, homeImg, mobileHeroImg, networkDesign } from '../../assets';

function Hero(props) {
    return (
        <>
            <div className="hero max-w-[1512px] min-h-[1123px] pt-0 relative mx-auto bg-dark-cyan xl:p-[15px_96px] 2xl:p-[15px_156px] overflow-hidden">
                <div className="hero-img xlg:absolute relative right-0 top-0 z-[4]">
                    <img className="xlg:block hidden 2xl:w-[calc(855px_-_0px)] lg:w-[calc(100vw_-_400px)] xl:w-[calc(100vw_-_600px)] " src={homeImg} alt="Home Girl Image" />
                    <img className="xlg:hidden block" src={mobileHeroImg} alt="Home Girl Image" />
                    <img className="xlg:hidden block absolute top-0 h-[100%]" src={heroImgRect} alt="Home Girl Image rectangle over" />
                </div>
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
                    <div className="max-w-[594px] flex flex-col justify-start items-start gap-[33px] text-white xlg:mt-[31px] mt-[14px]">
                        <h1 className="font-lato xlg:text-[60px] text-[36px] sm:text-[48px] font-[700]">Start Fundraising on SendMeHugs</h1>
                        <p className="font-inter text-[18px]">Everything you need to help your fundraiser succeed is here. Start fundraising on the #1 crowdfunding platform today</p>
                        <button className="bg-gradient-cyan font-popins text-[16px] p-[10px_14px] rounded-[36px]">Start Send Me Hugs</button>
                    </div>
                    <div className="hero-cards pt-[24px] 2xl:pt-[155px] xlg:pt-[80px] sm:pt-[39px] grid sm:grid-cols-2 gap-[14px] max-w-[532px]">
                        <div className="md:w-[259px] h-[180px] p-4 w-[100%] flex flex-col items-start justify-between rounded-[8px] bg-gradient-card1">
                            <div className="icon p-2.5 flex items-center justify-center gap-2.5 bg-[rgba(126,167,159,0.58)] rounded-[100px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M0 1.03448V1.70068H15.724V1.03448C15.724 0.463447 15.2927 0 14.7612 0H0.962772C0.431322 0 0 0.463447 0 1.03448Z" fill="white" />
                                    <path d="M0 9.41793C0 9.98896 0.431322 10.4524 0.962771 10.4524H8.9788C8.99421 9.83793 9.46212 9.34343 10.0379 9.34343H10.9236V9.01653C10.9236 8.21998 10.3209 7.57447 9.5815 7.57447H9.53336C8.89793 7.57447 8.3453 8.05861 8.21821 8.72688C8.17008 8.98136 8.04107 9.21308 7.85621 9.37653C7.66751 9.54412 7.42874 9.63722 7.1842 9.63722H7.12836C6.81257 9.63722 6.51411 9.48619 6.31383 9.22343C6.1136 8.96069 6.03272 8.61931 6.09434 8.28621C6.24838 7.44208 6.67585 6.67242 7.29586 6.12001C7.60395 5.84484 7.95055 5.62967 8.3241 5.4807C8.71113 5.3276 9.11935 5.24898 9.53527 5.24898H9.58341C10.0571 5.24898 10.5153 5.34829 10.9486 5.54484C11.3664 5.73519 11.7419 6.00622 12.0635 6.35174C12.385 6.69725 12.6373 7.1007 12.8144 7.54964C12.9974 8.01516 13.0898 8.50759 13.0898 9.01653V9.34345H15.7278V3.42002H0V9.41793ZM0.982027 8.85931C0.982027 8.58412 1.18806 8.36276 1.44416 8.36276H3.94351C4.19961 8.36276 4.40564 8.58412 4.40564 8.85931V8.90276C4.40564 9.17793 4.19961 9.39931 3.94351 9.39931H1.44416C1.18806 9.39931 0.982027 9.17793 0.982027 8.90276V8.85931Z" fill="white" />
                                    <path d="M12.5083 9.34553V9.01861C12.5083 7.28069 11.197 5.87173 9.57955 5.87173H9.53141C8.11036 5.87173 6.9223 6.96414 6.6585 8.40827C6.60073 8.72484 6.82602 9.01861 7.12641 9.01861H7.18225C7.41137 9.01861 7.60392 8.84275 7.65015 8.60275C7.82923 7.66344 8.60522 6.95379 9.53141 6.95379H9.57955C10.6405 6.95379 11.4993 7.87862 11.4993 9.01654V9.34346H12.5083V9.34553Z" fill="white" />
                                    <path d="M17.5186 9.96624H10.0379C9.78178 9.96624 9.5719 10.1814 9.55649 10.4545C9.55649 10.4649 9.55649 10.4731 9.55649 10.4835V17.4828C9.55649 17.7683 9.77216 18 10.0379 18H17.5186C17.7843 18 18 17.7683 18 17.4828V10.4835C18 10.1959 17.7843 9.96624 17.5186 9.96624ZM14.2818 14.3793V15.8979C14.2818 16.08 14.1431 16.229 13.9737 16.229H13.5828C13.4133 16.229 13.2747 16.08 13.2747 15.8979V14.3793C13.0667 14.2779 12.8915 14.1166 12.7664 13.9138C12.6489 13.7235 12.5757 13.5 12.5642 13.2579C12.5622 13.2352 12.5622 13.2124 12.5622 13.1917C12.5622 12.9042 12.6489 12.6373 12.7972 12.42C12.878 12.3021 12.9743 12.2007 13.086 12.118C13.2824 11.971 13.5212 11.8862 13.7773 11.8862C14.4474 11.8862 14.9923 12.4697 14.9923 13.1917C14.9923 13.7193 14.7015 14.1724 14.2818 14.3793Z" fill="white" />
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M12.7774 0H5.23161C1.95397 0 0 1.953 0 5.229V12.762C0 16.047 1.95397 18 5.23161 18H12.7684C16.046 18 18 16.047 18 12.771V5.229C18.009 1.953 16.055 0 12.7774 0ZM5.97898 4.635C6.24011 4.374 6.67232 4.374 6.93345 4.635L10.8774 8.577V6.39C10.8774 6.021 11.1836 5.715 11.5528 5.715C11.9219 5.715 12.2281 6.021 12.2281 6.39V10.206C12.2281 10.296 12.2101 10.377 12.1741 10.467C12.102 10.629 11.976 10.764 11.8049 10.836C11.7238 10.872 11.6338 10.89 11.5438 10.89H7.72585C7.35667 10.89 7.05051 10.584 7.05051 10.215C7.05051 9.846 7.35667 9.54 7.72585 9.54H9.91394L5.97898 5.589C5.71785 5.328 5.71785 4.905 5.97898 4.635ZM14.6233 13.698C12.8134 14.301 10.9134 14.607 9.00449 14.607C7.09554 14.607 5.19559 14.301 3.38569 13.698C3.03451 13.581 2.84542 13.194 2.96248 12.843C3.07953 12.492 3.45772 12.294 3.8179 12.42C7.16757 13.536 10.8504 13.536 14.2001 12.42C14.5513 12.303 14.9384 12.492 15.0555 12.843C15.1636 13.203 14.9745 13.581 14.6233 13.698Z" fill="white" />
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path d="M8.3464 8.42717C9.36101 8.99618 10.6378 9.41326 10.6378 9.41326C10.7553 9.44453 10.9369 9.47178 11 9.47178C11.0623 9.47178 11.2438 9.44453 11.3613 9.41326C11.3613 9.41326 12.6373 8.99618 13.6527 8.42717C15.1978 7.56489 17.7041 5.87234 17.7041 3.48626C17.7041 1.06606 16.0318 -0.0306148 14.192 0.000649414C12.789 0.0214536 11.9602 0.700273 11.4043 1.3694C11.3025 1.49361 11.1508 1.57293 11 1.57617C10.8483 1.57293 10.6966 1.49361 10.5957 1.3694C10.0398 0.700273 9.21019 0.0214536 7.80711 0.000649414C5.96643 -0.0306148 4.29589 1.06606 4.29589 3.48626C4.29589 5.87234 6.80122 7.56493 8.3464 8.42717ZM6.96698 1.51619C7.10814 1.37442 7.28441 1.25419 7.4861 1.15399C7.68519 1.05564 7.94387 1.10767 8.064 1.27067C8.18507 1.43363 8.121 1.6458 7.92191 1.7438C7.78952 1.80984 7.69217 1.87878 7.62022 1.95161C7.47379 2.09952 7.20808 2.12141 7.02742 2.00117C6.84771 1.88094 6.82055 1.66414 6.96698 1.51619ZM5.98043 3.71279C5.98043 3.48236 6.00938 3.26842 6.07161 3.07168C6.13035 2.88715 6.36103 2.77695 6.58553 2.82543C6.81089 2.87317 6.94501 3.06165 6.88717 3.24576C6.84596 3.37356 6.8223 3.52934 6.8223 3.71279C6.8223 3.89443 6.84511 4.10336 6.8933 4.33742C6.97047 4.71221 7.16518 5.0604 7.45013 5.3874C7.5852 5.5421 7.54135 5.75747 7.35192 5.86806C7.16165 5.9786 6.89942 5.9427 6.7644 5.78766C6.41977 5.39384 6.16458 4.94657 6.06284 4.45229C6.00848 4.18739 5.98043 3.94183 5.98043 3.71279Z" fill="white" />
                                    <path d="M21.6041 11.0336C21.0727 10.5594 20.0826 10.6603 19.4205 11.0612C18.8155 11.474 14.679 13.6997 14.679 13.6997H9.65152L9.63568 13.7061C9.37086 13.699 9.16395 13.5169 9.17177 13.3005C9.18144 13.0837 9.4042 12.9139 9.66727 12.9214L9.65147 12.9139C10.5503 12.9139 13.3556 12.9139 13.3556 12.9139C14.0992 12.9139 14.7026 12.4206 14.7026 11.8122C14.7026 11.2027 14.0992 10.7091 13.3556 10.7091C12.6821 10.7091 11.336 10.7091 7.96948 10.7091C4.60206 10.7091 3.53573 11.8582 2.35715 12.8224L0.219224 14.3516C0.0797693 14.4507 0 14.5932 0 14.7447V19.8267C0 19.8938 0.0491251 19.9559 0.12451 19.9843C0.199942 20.0123 0.288527 20.0026 0.351654 19.9577L4.48372 17.0572C4.62931 16.956 4.82397 16.9129 5.01165 16.9405L11.4518 17.899C11.9008 17.9657 12.363 17.8814 12.7374 17.6657C12.7374 17.6657 20.956 12.9865 21.5637 12.5726C22.1416 12.1382 22.1355 11.5078 21.6041 11.0336Z" fill="white" />
                                </svg>
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
                <div className="hero-img absolute right-0 bottom-5 z-[1]">
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