import React, { useState } from 'react';
import { darrow, dArrow2, dashAvatar, Notificationbell, reload, threeDot } from '../../assets';
import StatisticsCharts from './StatisticsCharts';
import WidhdrawPopup from '../Popups/WidhdrawPopup';
import CreateNewPopup from '../Popups/CreateNewPopup';
import OptionsPopup from '../Popups/OptionsPopup';
import NotificationHover from '../Popups/NotificationHover';
import { useOutletContext } from 'react-router-dom';

function Statistics({ navOpen, setNavOpen }) {
    const [widhdraw, setWidhdraw] = useState(false)
    const [createPopup, setCreatePopup] = useState(false);
    const [opt, setOpt] = useState(-1);
    const [notification, setNotification] = useState(false)
    const notificationData = useOutletContext()

    return (
        <>
            <div className="flex h-[100vh]  w-[100%] flex-col" onClick={() => setNotification(false)}>
                <div className="pl-[19px] w-[100%] h-[68px] pr-8 py-3 bg-white border-b border-[#d0d0d0] justify-between items-center inline-flex gap-4">
                    <div className="text-center text-black text-[18px] md:text-[22px] font-semibold font-popins leading-normal flex gap-2 items-center">
                        <div className="md:hidden" onClick={() => setNavOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.7083 9.16667H3.29167C2.85444 9.16667 2.5 9.52111 2.5 9.95833V10.0417C2.5 10.4789 2.85444 10.8333 3.29167 10.8333H16.7083C17.1456 10.8333 17.5 10.4789 17.5 10.0417V9.95833C17.5 9.52111 17.1456 9.16667 16.7083 9.16667Z" fill="black" />
                                <path d="M16.7083 13.3333H3.29167C2.85444 13.3333 2.5 13.6878 2.5 14.125V14.2083C2.5 14.6456 2.85444 15 3.29167 15H16.7083C17.1456 15 17.5 14.6456 17.5 14.2083V14.125C17.5 13.6878 17.1456 13.3333 16.7083 13.3333Z" fill="black" />
                                <path d="M16.7083 5H3.29167C2.85444 5 2.5 5.35444 2.5 5.79167V5.875C2.5 6.31223 2.85444 6.66667 3.29167 6.66667H16.7083C17.1456 6.66667 17.5 6.31223 17.5 5.875V5.79167C17.5 5.35444 17.1456 5 16.7083 5Z" fill="black" />
                            </svg>
                        </div>
                        <h2>Dashboard</h2>
                    </div>
                    <div className="justify-end items-center gap-5 flex">
                        <div className="justify-start md:flex items-center gap-[25px] hidden">
                            <div className="xl:w-[375px] w-[100%] h-11 px-3 py-2.5 bg-white rounded border border-[#babdc1] justify-start items-center gap-3 flex">
                                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                    <div className="w-5 h-5 relative" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M14.1523 13.0917L13.622 12.5613L12.5614 13.622L13.0917 14.1523L14.1523 13.0917ZM16.4697 17.5303C16.7626 17.8232 17.2375 17.8232 17.5304 17.5303C17.8232 17.2374 17.8232 16.7626 17.5304 16.4697L16.4697 17.5303ZM14.6944 9.22222C14.6944 12.2444 12.2444 14.6944 9.22222 14.6944V16.1944C13.0729 16.1944 16.1944 13.0729 16.1944 9.22222H14.6944ZM9.22222 14.6944C6.2 14.6944 3.75 12.2444 3.75 9.22222H2.25C2.25 13.0729 5.37157 16.1944 9.22222 16.1944V14.6944ZM3.75 9.22222C3.75 6.2 6.2 3.75 9.22222 3.75V2.25C5.37157 2.25 2.25 5.37157 2.25 9.22222H3.75ZM9.22222 3.75C12.2444 3.75 14.6944 6.2 14.6944 9.22222H16.1944C16.1944 5.37157 13.0729 2.25 9.22222 2.25V3.75ZM13.0917 14.1523L16.4697 17.5303L17.5304 16.4697L14.1523 13.0917L13.0917 14.1523Z" fill="#868C93" />
                                        </svg>
                                    </div>
                                    <div className="justify-start w-fit items-center gap-0.5 flex">
                                        <input type="text" className="text-[#868c93] w-[100%] border-none outline-none text-sm placeholder:text-sm placeholder:px-1 font-normal font-roboto leading-tight" name="query" id="query" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-5 flex">
                            <div className="w-6 h-6 relative flex justify-center items-center" onClick={(e) => { e.stopPropagation(); setNotification(!notification) }}>
                                <div className="bg-[#FF3C3C] flex justify-center items-center absolute w-3 h-3 text-[8px] font-inter leading-[5px] text-white top-0.5 -right-0.5 rounded-[50%]">3</div>
                                <img className="w-6 h-6" src={Notificationbell} alt="Notificationbell" />
                                {
                                    notification &&

                                    <div className="absolute top-[100%] z-[20]" onClick={(e) => e.stopPropagation()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="24" viewBox="0 0 45 24" fill="none">
                                            <path d="M20.554 1.6585C21.6753 0.702836 23.3247 0.702836 24.446 1.6585L43.5808 17.9667C45.7038 19.7761 44.4243 23.25 41.6349 23.25H3.36514C0.575743 23.25 -0.703795 19.7761 1.41916 17.9668L20.554 1.6585Z" fill="white" />
                                        </svg>
                                    </div>
                                }
                                {
                                    notification &&
                                    <div className="absolute top-[calc(100%_+_20px)] -right-[100px] z-[21]" onClick={(e) => e.stopPropagation()}>
                                        <NotificationHover notificationData={notificationData} />
                                    </div>
                                }
                            </div>
                            <div className="justify-start items-center gap-2 flex">
                                <div className="text-center md:block hidden text-black text-sm font-medium font-popins leading-normal">James Brown</div>
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
                    <div className=" w-[100%] flex-col justify-start items-start gap-5 inline-flex">
                        <div className="self-stretch pl-5 pr-2.5 py-2.5 bg-white rounded-lg border border-[#d0d0d0] justify-between items-center inline-flex">
                            <div className="h-9 px-3 py-2 bg-white rounded border border-[#babdc1] justify-start items-start gap-3 inline-flex max-w-[353px] w-full">
                                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                    <div className="justify-start items-center gap-0.5 flex">
                                        <div className="text-[#2c2f32] text-sm font-normal font-['Roboto'] leading-tight">Help homeless people</div>
                                    </div>
                                </div>
                                <div className="justify-end items-center gap-1 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M14 8L10 12L6 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="h-9 px-2 py-1.5 cursor-pointer bg-gradient-to-b from-[#2dd6b4] to-[#21806f] rounded-[36px] justify-center items-center gap-1 flex" onClick={() => setCreatePopup(!createPopup)}>
                                <div className="px-1 justify-start items-start gap-2.5 flex">
                                    <div className="text-center text-white text-sm font-medium font-popins leading-normal">Create New </div>
                                </div>
                                <span className="pl-1text-center text-white text-sm font-medium font-popins leading-normal">+</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-5" >
                            <div className="flex xl:flex-row flex-col w-[100%] gap-5">
                                <div className="chart-div flex p-5 flex-col gap-6 lg:max-w-[685px] w-full bg-white rounded-lg border border-[#D0D0D0] ">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 items-center">
                                            <h2 className="text-black text-[20px] font-[600] leading-6 font-inter">General income</h2>
                                            <img src={reload} alt="Reload" />
                                        </div>
                                        <img src={threeDot} alt="threeDot" />
                                    </div>
                                    <div className="flex w-[100%] justify-between  items-end">
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="font-inter text-[14px] font-[500] leading-6">General income</p>
                                            <h1 className="font-inter md:text-[30px] text-[20px] font-[600] leading-6">$ 63,589.02</h1>
                                        </div>
                                        <div className="flex">
                                            <select name="duration" id="duration" className="outline-none py-2 px-3 border border-black rounded-[4px]">
                                                <option value="week" className=" py-2 px-3 " >This Week</option>
                                                <option value="week" className=" py-2 px-3 " >This Month</option>
                                                <option value="week" className=" py-2 px-3 " >This Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="h-[314px] w-[100%]">
                                        <StatisticsCharts />
                                    </div>
                                </div>
                                <div className="grid gap-[22px] 844:grid-cols-2 844:grid-rows-1 grid-rows-2 grid-cols-1 xl:max-w-[459px] w-[100%]">
                                    <div className="h-[228.50px]  w-[100%] p-5 bg-white rounded-lg border border-[#d0d0d0] flex-col justify-between items-start inline-flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="justify-start items-center gap-2 flex">
                                                <div className="text-center text-black text-xl font-semibold font-inter leading-normal">Total income</div>
                                                <div className="w-5 h-5 relative" >
                                                    <img src={reload} alt="Reload" />

                                                </div>
                                            </div>
                                            <div className="w-5 h-5 relative" >
                                                <img src={threeDot} alt="threeDot" />

                                            </div>
                                        </div>
                                        <div className="self-stretch h-[60px] flex-col justify-end items-center flex">
                                            <div className="self-stretch justify-between items-end inline-flex">
                                                <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                                                    <div className="text-center text-black text-3xl font-semibold font-inter leading-normal">$ 63,589.02</div>
                                                </div>
                                            </div>
                                            <div className="self-stretch justify-between items-center inline-flex">
                                                <div className="text-[#838383] text-sm font-medium font-inter leading-normal">18 July 2024</div>
                                                <div className="px-2 py-1.5 bg-[#e5f8f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 flex">
                                                    <div className="px-1 justify-start cursor-pointer items-start gap-2.5 flex" onClick={() => setWidhdraw(!widhdraw)}>
                                                        <div className="text-center text-[#288d7c] text-sm font-medium font-popins leading-normal">Withdraw Funds</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[228.50px]  w-[100%] p-5 bg-white rounded-lg border border-[#d0d0d0] flex-col justify-between items-start inline-flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="justify-start items-center gap-2 flex">
                                                <div className="text-center text-black text-xl font-semibold font-inter leading-normal">Daily income</div>
                                                <div className="w-5 h-5 relative" >
                                                    <img src={reload} alt="Reload" />

                                                </div>
                                            </div>
                                            <div className="w-5 h-5 relative" >
                                                <img src={threeDot} alt="threeDot" />

                                            </div>
                                        </div>
                                        <div className="self-stretch h-[60px] flex-col justify-end items-center flex">
                                            <div className="self-stretch justify-between items-end inline-flex">
                                                <div className="text-[#838383] text-sm font-medium font-inter leading-normal">18 July 2024</div>

                                            </div>
                                            <div className="self-stretch justify-between items-end inline-flex">
                                                <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                                                    <div className="text-center text-black text-3xl font-semibold font-inter leading-normal">$ 1,589.02</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex py-5 px-3 gap-5 flex-col bg-white rounded-lg border border-[#d0d0d0] ">
                                <div className="flex justify-between w-[100%]">
                                    <div className="flex gap-2 items-center">
                                        <h2 className="text-black text-[20px] font-[600] leading-6 font-inter">General income</h2>
                                        <img src={reload} alt="Reload" />
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <select name="donation-duration" id="donation-duration" className="outline-none py-2 px-3 border border-black rounded-[4px]">
                                            <option value="week" className=" py-2 px-3 " >This Week</option>
                                            <option value="week" className=" py-2 px-3 " >This Month</option>
                                            <option value="week" className=" py-2 px-3 " >This Year</option>
                                        </select>
                                        <div className="w-5 h-5 relative" >
                                            <img src={threeDot} alt="threeDot" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-5 py-3 border-y border-[#BABDC1]">
                                        <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Transaction</p>
                                        <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Amount</p>
                                        <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Fundraising</p>
                                        <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Status</p>
                                        <p className="font-inter text-[14px] font-[600]  leading-5 text-[#969696] ">Date</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        {
                                            [1, 2, 3, 4, 5, 6].map((item) => {
                                                return (
                                                    <div key={item} className="grid  md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-5 md:h-[36px] items-center pb-1.5 border-b border-[#BABDC1]">
                                                        <p className="font-roboto text-[12px] font-[400]  leading-[18px] text-[#393D42] ">Noel StudNoel Studerer</p>
                                                        <p className="font-roboto text-[12px] font-[400]  leading-[18px] text-[#393D42] ">$242</p>
                                                        <p className="font-roboto text-[12px] font-[400]  leading-[18px] text-[#393D42] ">Name 1</p>
                                                        <div className="">
                                                            <p className="font-roboto w-fit text-[12px] font-[500]  leading-[18px] text-[#fff] py-0.5 px-1.5 rounded-3xl bg-[#10A363] ">Received</p>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <p className="font-roboto max-w-[77.25px] text-[12px] font-[400]  leading-[18px] text-[#393D42] ">28 May, 2023 04:10</p>
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
            </div >
            {
                widhdraw && <div className="w-[100vw] z-[100] h-[100vh] flex justify-center items-center absolute  bg-black/40 z-99">
                    <WidhdrawPopup widhdraw={widhdraw} setWidhdraw={setWidhdraw} />
                </div>
            }
            {
                createPopup && <div className="w-[100vw] z-[100] overflow-hidden h-[100vh] flex justify-center items-center absolute  bg-black/40 z-99">
                    <CreateNewPopup setCreatePopup={setCreatePopup} createPopup={createPopup} />
                </div>
            }
        </>
    );
}

export default Statistics;