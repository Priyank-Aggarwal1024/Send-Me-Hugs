import React from 'react';
import { dashAvatar, Notificationbell } from '../../assets';

function Notifications(props) {
    return (
        <div className="flex h-[100vh]  w-[100%] flex-col">
            <div className="pl-[19px] w-[100%] h-[68px] pr-8 py-3 bg-white border-b border-[#d0d0d0] justify-between items-center inline-flex">
                <div className="text-center text-black text-[22px] font-semibold font-popins leading-normal">Dashboard</div>
                <div className="justify-end items-center gap-5 flex">
                    <div className="justify-start items-center gap-[25px] flex">
                        <div className="w-[375px] h-11 px-3 py-2.5 bg-white rounded border border-[#babdc1] justify-start items-center gap-3 flex">
                            <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                <div className="w-5 h-5 relative" />
                                <div className="justify-start items-center gap-0.5 flex">
                                    <div className="text-[#868c93] text-sm font-normal font-['Roboto'] leading-tight">Search</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14 8L10 12L6 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-start overflow-auto  w-[100%] items-start gap-1 inline-flex p-4">
                <div className=" w-[100%] flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch pl-5 pr-2.5 py-2.5 bg-white rounded-lg border border-[#d0d0d0] justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                            <div className="text-[#4c545b] text-[11px] font-medium font-inter uppercase leading-tight">Sort by</div>
                            <div className="px-1.5 py-0.5 bg-neutral-100 rounded-3xl justify-center items-center gap-1.5 flex">
                                <div className="w-4 h-4 relative" />
                                <div className="text-center text-neutral-700 text-xs font-medium font-inter leading-tight">Amount raised</div>
                                <div className="w-4 h-4 relative" />
                            </div>
                        </div>
                        <div className="h-9 px-2 py-1.5 bg-gradient-to-b from-[#2dd6b4] to-[#21806f] rounded-[36px] justify-center items-center gap-1 flex">
                            <div className="px-1 justify-start items-start gap-2.5 flex">
                                <div className="text-center text-white text-sm font-medium font-popins leading-normal">Create New <span className="pl-1">+</span></div>
                            </div>
                            <div className="w-4 h-4 relative" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5 w-[100%]">
                        {/* {
                            data.map((item, idx) => <div key={idx} className="grow shrink basis-0 h-[258px] flex-col justify-start items-start gap-[22px] inline-flex">
                                <div className="self-stretch grow shrink basis-0 p-[18px] bg-white rounded-lg border border-[#d0d0d0] flex-col justify-between items-start flex">
                                    <div className="self-stretch justify-between items-start inline-flex">
                                        <div className="h-20 justify-start items-start gap-4 flex">
                                            <img className="w-20 h-20 rounded-[60px]" src={item.src} />
                                            <div className="flex-col justify-center items-start inline-flex">
                                                <div className="text-[#565656] text-xs font-medium font-inter leading-normal">{item.category}</div>
                                                <div className="justify-start items-center gap-2 inline-flex">
                                                    <div className="text-center text-black text-lg font-bold font-inter leading-normal">{item.name}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10Z" fill="black" />
                                            <path d="M17 10C17 10.8284 16.3284 11.5 15.5 11.5C14.6716 11.5 14 10.8284 14 10C14 9.17157 14.6716 8.5 15.5 8.5C16.3284 8.5 17 9.17157 17 10Z" fill="black" />
                                            <path d="M6 10C6 10.8284 5.32843 11.5 4.5 11.5C3.67157 11.5 3 10.8284 3 10C3 9.17157 3.67157 8.5 4.5 8.5C5.32843 8.5 6 9.17157 6 10Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[142px] flex-col justify-start items-start gap-0.5 inline-flex">
                                            <div className="self-stretch h-6 flex-col justify-start items-start gap-[5px] flex">
                                                <div className="text-center text-black text-xl font-semibold font-inter leading-normal">$ {item.amount}</div>
                                            </div>
                                            <div className="self-stretch text-[#838383] text-xs font-medium font-inter leading-tight">{item.date}</div>
                                        </div>
                                        <div className="justify-start items-center gap-3 flex">
                                            <div className="px-2 py-1.5 bg-[#e5f8f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 flex">
                                                <div className="px-1 justify-start items-start gap-2.5 flex">
                                                    <div className="text-center text-[#288d7c] text-sm font-medium font-popins leading-normal">Manage</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;