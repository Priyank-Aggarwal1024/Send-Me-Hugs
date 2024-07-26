import React, { useEffect, useState } from 'react';
import { dArrow2, dashAvatar, Notificationbell, reload, threeDot } from '../../assets';
import OptionsPopup from '../Popups/OptionsPopup';
function Transfers({ navOpen, setNavOpen }) {
    const [opt, setOpt] = useState(-1);

    return (
        <div className="flex h-[100vh]  w-[100%] flex-col">
            <div className="pl-[19px] w-[100%] h-[68px] pr-8 py-3 bg-white border-b border-[#d0d0d0] justify-between items-center inline-flex gap-4">
                <div className="text-center text-black text-[18px] md:text-[22px] font-semibold font-popins leading-normal flex gap-2 items-center">
                    <div className="md:hidden" onClick={() => setNavOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.7083 9.16667H3.29167C2.85444 9.16667 2.5 9.52111 2.5 9.95833V10.0417C2.5 10.4789 2.85444 10.8333 3.29167 10.8333H16.7083C17.1456 10.8333 17.5 10.4789 17.5 10.0417V9.95833C17.5 9.52111 17.1456 9.16667 16.7083 9.16667Z" fill="black" />
                            <path d="M16.7083 13.3333H3.29167C2.85444 13.3333 2.5 13.6878 2.5 14.125V14.2083C2.5 14.6456 2.85444 15 3.29167 15H16.7083C17.1456 15 17.5 14.6456 17.5 14.2083V14.125C17.5 13.6878 17.1456 13.3333 16.7083 13.3333Z" fill="black" />
                            <path d="M16.7083 5H3.29167C2.85444 5 2.5 5.35444 2.5 5.79167V5.875C2.5 6.31223 2.85444 6.66667 3.29167 6.66667H16.7083C17.1456 6.66667 17.5 6.31223 17.5 5.875V5.79167C17.5 5.35444 17.1456 5 16.7083 5Z" fill="black" />
                        </svg>
                    </div>
                    <h2>Transfers</h2>
                </div>
                <div className="justify-end h-11 items-center gap-5 flex">
                    <div className="justify-start items-center gap-5 flex">
                        <div className="w-6 h-6 relative flex justify-center items-center">
                            <div className="bg-[#FF3C3C] flex justify-center items-center absolute w-3 h-3 text-[8px] font-inter leading-[5px] text-white top-0.5 -right-0.5 rounded-[50%]">3</div>
                            <img className="w-6 h-6" src={Notificationbell} alt="Notificationbell" />
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                            <div className="text-center text-black text-sm font-medium font-popins leading-normal">James Brown</div>
                            <div className="w-8 h-8 pr-[3.56px] pb-[1.88px] justify-center items-center flex">
                                <div className="w-[28.44px] h-[30.12px] flex-col justify-center items-center inline-flex">
                                    <div className="w-[28.44px] h-[30.12px] flex-col justify-center items-center inline-flex">
                                        <div className="w-8 h-8 justify-center items-center inline-flex">
                                            <img className="w-8 h-8 relative shadow rounded-[64px] border border-white" src={dashAvatar} alt='Avatar' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-5 h-5 relative" >
                                <img src={dArrow2} alt="Downward Arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-start overflow-auto  w-[100%] items-start gap-1 inline-flex p-4">
                <div className=" w-[100%] flex-col justify-start items-start gap-5 flex">
                    <div className="flex w-full py-5 px-3 gap-5 flex-col bg-white rounded-lg border border-[#d0d0d0] ">
                        <div className="flex justify-between w-[100%] flex-wrap">
                            <div className="flex gap-2 items-center">
                                <h2 className="text-black text-[20px] font-[600] leading-6 font-inter">Transaction history</h2>
                                <img src={reload} alt="Reload" />
                            </div>
                            <div className="flex gap-3 items-center">
                                <select name="donation-duration" id="donation-duration" className="outline-none py-2 px-3 border border-black rounded-[4px]">
                                    <option value="week" className=" py-2 px-3 " >This Week</option>
                                    <option value="week" className=" py-2 px-3 " >This Month</option>
                                    <option value="week" className=" py-2 px-3 " >This Year</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-5 py-3 border-y border-[#BABDC1]">
                                <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Transaction</p>
                                <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Withdrawal Amount</p>
                                <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Fundraising</p>
                                <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Status</p>
                                <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Date</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                {
                                    [1, 2, 3, 4, 5, 6].map((item) => {
                                        return (
                                            <div key={item} className="grid  md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-5 md:h-[36px] items-center pb-1.5 border-b border-[#BABDC1]">
                                                <p className="font-roboto text-[12px] font-[400]  leading-[18px] text-[#393D42] "># 20315</p>
                                                <p className="font-roboto text-[12px] font-[400]  leading-[18px] text-[#393D42] ">$242</p>
                                                <p className="font-roboto text-[12px] font-[400]  leading-[18px] text-[#393D42] ">Name 1</p>
                                                <div className="">
                                                    <p className="font-roboto w-fit text-[12px] font-[500]  leading-[18px] text-[#fff] py-0.5 px-1.5 rounded-3xl bg-[#10A363] ">Done</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-roboto md:max-w-[77.25px] text-[12px] font-[400]  leading-[18px] text-[#393D42] ">28 May, 2023 04:10</p>
                                                    <div className="w-5 h-5 relative" onClick={() => { if (opt == item) { setOpt(-1) } else { setOpt(item) } }} >
                                                        <img className="rotate-90" src={threeDot} alt="threeDot" />
                                                        {opt == item && <div className="z-[20] absolute -top-[50%] right-[120%]" onClick={(e) => e.stopPropagation()}>
                                                            <OptionsPopup />
                                                        </div>
                                                        }
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="flex items-center justify-between">
                                <p className="leading-5 font-inter text-[12px] text-center text-[#686F78]">6 of 45 Results</p>
                                <div className="h-10 flex gap-2 p-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M12 14L8 10L12 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    {
                                        [1, 2, 3, 4, 5].map((item) => <p key={item} className="font-roboto text-[14px] leading-5 text-center bg-white hover:bg-[#A6A6A6] rounded-sm hover:text-white text-[#4A4F55] py-2 px-3.5 w-6 h-6 flex justify-center items-center">{item}</p>)
                                    }
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M8 6L12 10L8 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transfers;