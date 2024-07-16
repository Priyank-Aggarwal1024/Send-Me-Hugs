import React from 'react';
import { Hero, Navbar } from '../components';
import { larrow, rarrow, si1, si2, si3, support } from '../assets';

function Home(props) {
    return (
        <>
            <div className="home w-[100%] bg-dark-cyan">
                <Navbar />
                <Hero />
                <div className="max-w-[1512px] mx-auto pt-[18px] sm:pt-[75px] 2xl:px-[156px] lg:px-[33px] xl:px-[96px] px-[16px]">
                    <div className="flex flex-col gap-[32px] mx-auto max-w-[1200px text-white">
                        <div className="lg:w-[578px] mx-auto">
                            <h2 className="pb-2 font-lato sm:text-[36px] xss:text-[28px] text-[32px] font-[700] text-center">How to start a  SendMeHugs</h2>
                            <p className="font-inter text-[18px] font-[400]">Here is our 3 steps how to make Send me hugs work for you</p>
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
                <div className="mt-[66px] max-w-[1512px] mx-auto 2xl:px-[156px] lg:px-[33px] px-[16px] xl:px-[96px] ">
                    <div className="mx-w-[1093px] mx-auto flex flex-col gap-[71px] text-white">
                        <div className="md:max-w-[648px] mx-auto w-[100%]">
                            <h3 className="font-lato sm:text-[36px] xss:text-[28px] text-[32px] font-[700] text-center pb-[32px]">Examples of fundraisers happening on SendMeHugs </h3>
                            <div className="overflow-auto max-w-[100%]  rounded-[100px] ">
                                <div className="mx-auto w-fit p-2.5 flex gap-1 sm:gap-6 items-center bg-[rgba(255,255,255,0.10)] rounded-[100px] ">
                                    <p className="bg-gradient-cyan text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]">Medical</p>
                                    <p className="text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]">Sports</p>
                                    <p className="text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]">Memorial</p>
                                    <p className="text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]">Charity</p>
                                    <p className="text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]">Education</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex xlg:items-center xlg:justify-between justify-center">
                            <div className="xlg:block hidden">
                                <img src={larrow} alt="Left Arrow" />
                            </div>
                            <div className="flex gap-[53px] xlg:items-center xlg:justify-between xlg:w-[calc(100%_-_120px)] w-[100%] xlg:flex-row flex-col">
                                <div className="xlg:min-w-[300px] flex items-center justify-between gap-2">
                                    <div className="xlg:hidden">
                                        <img src={larrow} alt="Left Arrow" />
                                    </div>
                                    <div className="">
                                        <img className="" src={support} alt="Support for healing" />
                                    </div>
                                    <div className="xlg:hidden">
                                        <img src={rarrow} alt="Right Arrow" />
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-[27px] xlg:max-w-[359px]">
                                    <div className="">
                                        <p className="text-[24px] font-[700] font-inter border-b-2">Support for healing</p>

                                        <p className="pt-3 font-inter text-white font-[400] text-[18px]">When Victor received a diagnosis for ALS, his community wanted to show support. His partner started a <span className="font-inter text-primary-500 font-[800] text-[18px]">Send me hugs</span>  to help cover for transportation to treatment, monthly supplements, weekly PT, and much more.</p>
                                    </div>
                                    <div className="flex gap-[18px] xss:flex-col flex-row">
                                        <div className="flex text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                                <path d="M24.7502 9.4C24.7502 9.04638 24.6053 8.70724 24.3474 8.45719C24.0896 8.20714 23.7398 8.06667 23.3752 8.06667L12.3752 8C12.0105 8 11.6608 8.14048 11.4029 8.39052C11.145 8.64057 11.0002 8.97971 11.0002 9.33333C11.0002 9.68696 11.145 10.0261 11.4029 10.2761C11.6608 10.5262 12.0105 10.6667 12.3752 10.6667H20.0202L8.64891 21.72C8.52003 21.844 8.41774 21.9914 8.34793 22.1539C8.27813 22.3164 8.24219 22.4907 8.24219 22.6667C8.24219 22.8427 8.27813 23.017 8.34793 23.1794C8.41774 23.3419 8.52003 23.4894 8.64891 23.6133C8.77673 23.7383 8.92881 23.8375 9.09637 23.9052C9.26392 23.9729 9.44364 24.0077 9.62516 24.0077C9.80668 24.0077 9.9864 23.9729 10.154 23.9052C10.3215 23.8375 10.4736 23.7383 10.6014 23.6133L22.0002 12.56V20C22.0002 20.3536 22.145 20.6928 22.4029 20.9428C22.6607 21.1929 23.0105 21.3333 23.3752 21.3333C23.7398 21.3333 24.0896 21.1929 24.3474 20.9428C24.6053 20.6928 24.7502 20.3536 24.7502 20V9.4Z" fill="white" />
                                            </svg>
                                            <div className="font-inter text-[20px] font-[500] pl-[17px]">$23,698.00 </div>
                                        </div>
                                        <div className="flex text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <circle cx="15.9998" cy="16" r="3.2" fill="white" />
                                                <path d="M16.0002 16L28.8002 3.19995M23.6802 16C23.6802 20.2415 20.2417 23.68 16.0002 23.68C11.7586 23.68 8.3202 20.2415 8.3202 16C8.3202 11.7584 11.7586 8.31995 16.0002 8.31995C20.2417 8.31995 23.6802 11.7584 23.6802 16ZM28.8002 16C28.8002 23.0692 23.0694 28.8 16.0002 28.8C8.93095 28.8 3.2002 23.0692 3.2002 16C3.2002 8.93071 8.93095 3.19995 16.0002 3.19995C23.0694 3.19995 28.8002 8.93071 28.8002 16Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <div className="font-inter text-[20px] font-[500] pl-[17px]">$25,000.00 </div>
                                        </div>
                                    </div>
                                    <div className="p-[6px_8px] flex justify-center items-center gap-1 rounded-[36px] border-[1px] border-[#1DD2B4] mr-auto text-primary-500 sm:w-fit w-full">Send Me Hugs</div>
                                </div>
                            </div>
                            <div className="xlg:block hidden">
                                <img src={rarrow} alt="Right Arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;