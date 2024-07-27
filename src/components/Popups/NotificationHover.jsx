import React, { useState } from 'react';
import { setting, smileLogo } from '../../assets';

function NotificationHover({ notificationData }) {
    const [settingOpen, setSettingOpen] = useState(false);
    const [app, setApp] = useState(false)
    const [email, setEmail] = useState(false)
    const [push, setPush] = useState(false)
    return (
        <>

            <div className="sm:w-[436px] w-full max-w-[100vw] max-h-[471px] overflow-hidden pt-[15px] pb-5 bg-white rounded shadow flex-col justify-start items-start gap-3.5 inline-flex relative">

                <div className="h-[46px] flex-col justify-start items-center gap-3.5 flex">
                    <div className="max-w-[396px] justify-between items-center w-full inline-flex">
                        <div className="flex gap-2 items-center justify-start">
                            {settingOpen && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => setSettingOpen(false)}>
                                <path d="M20.0156 11.0156V12.9844H7.82812L13.4062 18.6094L12 20.0156L3.98438 12L12 3.98438L13.4062 5.39062L7.82812 11.0156H20.0156Z" fill="#06203A" />
                            </svg>}
                            <div className="text-[#191c1f] text-xl font-semibold font-['Inter']">Notifications</div>
                        </div>
                        <div className="justify-end items-center gap-[11px] flex">
                            {!settingOpen && notificationData.length != 0 && <div className="text-black text-xs font-semibold font-['Inter']">Mark  as read</div>}
                            <div className="w-8 h-8 justify-center items-center flex">
                                <div className="w-8 h-8 relative flex-col justify-start items-start flex" onClick={() => setSettingOpen(true)}>
                                    <div className="w-8 h-8">
                                        <img src={setting} alt="Setting" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[436px] h-[0px] border border-[#edf3f8]"></div>
                </div>
                {
                    !settingOpen ? notificationData.length != 0 ?
                        <div className="justify-start items-start gap-0.5 overflow-auto  inline-flex">
                            <div className="flex-col justify-start items-center gap-[13px] inline-flex">
                                <div className="pl-4 flex-col justify-start items-center gap-[22px] flex">
                                    <div className="flex-col justify-start items-end gap-[11px] flex">
                                        <div className="flex-col justify-start items-start gap-2 flex">
                                            {
                                                notificationData.map((item, index) =>
                                                    <div key={index} className="flex-col justify-start items-start gap-3 flex">
                                                        <div className="self-stretch justify-between items-start inline-flex">
                                                            <div className="grow shrink basis-0 h-9 justify-between items-start flex">
                                                                <div className="max-w-[326px] w-full flex-col justify-start items-start gap-1 inline-flex">
                                                                    <div className="w-[314px] justify-start items-start gap-2.5 inline-flex">
                                                                        <div className="w-[357px] text-[#1b2a3d] text-sm font-bold font-['Inter']">{item.title}</div>
                                                                    </div>
                                                                    <div className="w-[314px] justify-start items-start gap-2.5 inline-flex">
                                                                        <div className="w-[314px] text-[#1b2a3d] text-xs font-medium font-['Inter']">{item.message}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="justify-start items-start gap-2.5 flex">
                                                                    <div className="text-right text-[#1b2a3d] text-[10px] font-semibold font-['Inter']">{item.time} </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-[396px] h-[0px] border border-[#edf3f8]"></div>
                                                    </div>
                                                )
                                            }

                                            <div className="flex-col justify-start items-start gap-3 flex">
                                                <div className="justify-start items-start gap-3.5 inline-flex">
                                                    <div className="pt-[3px] justify-start items-center gap-2.5 flex">
                                                        <div className="w-[28.20px] h-[28.39px] relative">
                                                            <img src={smileLogo} alt="Smile SendMeHug Logo" />
                                                        </div>
                                                    </div>
                                                    <div className="justify-end items-start flex">
                                                        <div className="w-[326px] flex-col justify-start items-start gap-1 inline-flex">
                                                            <div className="w-[314px] justify-start items-start gap-2.5 inline-flex">
                                                                <div className="w-[357px] text-[#818ea3] text-sm font-bold font-['Inter']">Update</div>
                                                            </div>
                                                            <div className="w-[314px] justify-start items-start gap-2.5 inline-flex">
                                                                <div className="w-[314px] text-[#818ea3] text-xs font-normal font-['Inter']">Sometimes you are forced to send push notifications to users even during their busy hours. However willing your users are to act on your notifications, they may just not find the time required to complete all the actions after opening the notification</div>
                                                            </div>
                                                        </div>
                                                        <div className="justify-start items-start gap-2.5 flex">
                                                            <div className="text-right text-[#818ea3] text-[10px] font-semibold font-['Inter']">1 day</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-[396px] h-[0px] border border-[#edf3f8]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[159.81px] h-[22px] text-[#696969] text-sm font-semibold font-['Manrope']">Load more notifications</div>
                                </div>
                            </div>
                        </div> : <div className="flex flex-col w-full">
                            <div className="h-[170px] flex flex-col items-center justify-end gap-[13px]">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                        <path d="M23 46C25.5376 46 27.6138 43.8769 27.6138 41.2821H18.3862C18.3862 43.8769 20.4624 46 23 46ZM36.8415 31.8462V20.0513C36.8415 12.8092 33.0812 6.74667 26.4604 5.14256V3.53846C26.4604 1.58051 24.9147 0 23 0C21.0853 0 19.5396 1.58051 19.5396 3.53846V5.14256C12.9418 6.74667 9.15848 12.7856 9.15848 20.0513V31.8462L4.54463 36.5641V38.9231H41.4554V36.5641L36.8415 31.8462ZM32.2277 34.2051H13.7723V20.0513C13.7723 14.201 17.2558 9.4359 23 9.4359C28.7442 9.4359 32.2277 14.201 32.2277 20.0513V34.2051ZM12.8034 3.72718L9.50451 0.353846C3.9679 4.67077 0.322969 11.3231 0 18.8718H4.61384C4.77726 15.8802 5.5985 12.9648 7.01643 10.3427C8.43436 7.72054 10.4124 5.45926 12.8034 3.72718ZM41.3862 18.8718H46C45.654 11.3231 42.009 4.67077 36.4955 0.353846L33.2197 3.72718C35.6004 5.46779 37.5697 7.73156 38.9828 10.3523C40.396 12.973 41.2172 15.8841 41.3862 18.8718Z" fill="#696969" />
                                    </svg>
                                </div>
                                <div className="text-center text-[14px] font-[600] font-manrope text-[#696969]">You don’t receive any notification yet</div>
                            </div>
                            <div className="h-[170px]"></div>

                        </div> : <>
                        <div className="flex flex-col w-full px-4 gap-[14px]  h-[325px]">
                            <div className="h-6 flex justify-between items-center">
                                <p className="font-inter text-[14px] font-[600] leading-5 text-[#1B2A3D]">In-App notifications </p>
                                <div className={`h-full items-center p-0.5 w-12 rounded-[12px] duration-600 flex ${app ? "justify-end bg-[#1DD2B4]" : "justify-start bg-[#D3D3D3]"}`} onClick={() => setApp(!app)}>
                                    <div className="w-5 h-5 rounded-[50%] bg-white"></div>
                                </div>
                            </div>
                            <div className="h-6 flex justify-between items-center">
                                <p className="font-inter text-[14px] font-[600] leading-5 text-[#1B2A3D]">Email Notifications </p>
                                <div className={`h-full items-center p-0.5 w-12 rounded-[12px] duration-600 flex ${email ? "justify-end bg-[#1DD2B4]" : "justify-start bg-[#D3D3D3]"}`} onClick={() => setEmail(!email)}>
                                    <div className="w-5 h-5 rounded-[50%] bg-white"></div>
                                </div>
                            </div>
                            <div className="h-6 flex justify-between items-center">
                                <p className="font-inter text-[14px] font-[600] leading-5 text-[#1B2A3D]">Push notifications </p>
                                <div className={`h-full items-center p-0.5 w-12 rounded-[12px] duration-600 flex ${push ? "justify-end bg-[#1DD2B4]" : "justify-start bg-[#D3D3D3]"}`} onClick={() => setPush(!push)}>
                                    <div className="w-5 h-5 rounded-[50%] bg-white"></div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>

        </>
    );
}

export default NotificationHover;