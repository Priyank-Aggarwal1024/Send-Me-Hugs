import React, { useState } from 'react';
import { dArrow2, dashAvatar, Notificationbell } from '../../assets';
import NotificationHover from '../Popups/NotificationHover';
import { useOutletContext } from 'react-router-dom';

function Notifications(props) {
    const [notification, setNotification] = useState(false)
    const notificationData = useOutletContext()

    return (
        <div className="flex h-[100vh] xlg:w-[calc(100vw_-_260px)] w-[calc(100vw_-_60px)] flex-col" onClick={() => setNotification(false)}>
            <div className="pl-[19px] w-[100%] xlg:h-[68px] h-[56px] pr-8 py-3 bg-white border-b border-[#d0d0d0] justify-between items-center inline-flex gap-4">

                <h2 className="text-center text-black text-[22px] font-semibold font-popins leading-normal flex gap-2 items-center">Notification</h2>
                <div className="justify-end items-center gap-5 flex">
                    <div className="justify-start xlg:flex items-center gap-[25px] hidden">
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
            <div className="justify-start overflow-auto  w-[100%] items-start gap-1 inline-flex xlg:p-4 md:p-3 p-2.5">
                <div className=" w-[100%] flex-col justify-start items-start gap-5 inline-flex">

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