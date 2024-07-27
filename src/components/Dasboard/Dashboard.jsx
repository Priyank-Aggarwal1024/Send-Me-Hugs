import React, { useState } from 'react';
import { dArrow2, dashAvatar, fundPost1, fundPost2, fundPost3, Notificationbell, threeDot } from '../../assets';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import DeleteFundraiserPopup from '../Popups/DeleteFundraiserPopup';
import CreateNewPopup from '../Popups/CreateNewPopup';
import NotificationHover from '../Popups/NotificationHover';

function Dashboard({ children, deletePopup, setDeletePopup }) {
    const data = [

        {
            src: fundPost1,
            category: "Category",
            name: "Fundraiser Name",
            amount: "63,589.02",
            date: "Started 18 July 2024"
        },
        {
            src: fundPost2,
            category: "Category",
            name: "Fundraiser Name",
            amount: "589.22",
            date: "Started 22 July 2024"
        },
        {
            src: fundPost3,
            category: "Category",
            name: "Fundraiser Name",
            amount: "0",
            date: "Started 18 July 2024"
        },
    ]
    const notificationData = useOutletContext()
    console.log(notificationData)
    const { slug } = useParams();
    const navigate = useNavigate();
    const [createPopup, setCreatePopup] = useState(false);
    const [notification, setNotification] = useState(false)

    return (
        <>
            <div className="flex h-[100vh] xlg:w-[calc(100vw_-_260px)] w-[calc(100vw_-_60px)] flex-col" onClick={() => setNotification(false)}>
                <div className="pl-[19px] w-[100%] xlg:h-[68px] h-[56px] pr-8 py-3 bg-white border-b border-[#d0d0d0] justify-between items-center inline-flex gap-4">

                    <h2 className="text-center text-black text-[22px] font-semibold font-popins leading-normal flex gap-2 items-center">Dashboard</h2>
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
                {
                    !slug ? <div className="justify-start overflow-auto  w-[100%] items-start gap-1 inline-flex xlg:p-4 md:p-3 p-2.5">
                        <div className=" w-[100%] flex-col justify-start items-start gap-3 xlg:gap-5 inline-flex md:pr-4 sm:pr-2 pr-0">
                            <div className="self-stretch pl-5 pr-2.5 py-2.5 bg-white rounded-lg border border-[#d0d0d0] justify-between items-center inline-flex">
                                <div className="justify-start items-center gap-2 flex">
                                    <div className="text-[#4c545b] text-[11px] font-medium font-inter uppercase leading-tight">Sort by</div>
                                    <div className="md:px-1.5 px-0.5 py-0.5 bg-neutral-100 rounded-3xl justify-center items-center md:gap-1.5 gap-0.5 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M10.8021 4.00191L10.8021 12.0019M10.8021 12.0019L12.8021 10.0019M10.8021 12.0019L8.80211 10.0019M3.20211 11.202L6.40211 11.2019M3.20212 8.00195L6.40212 8.00194M3.20214 4.80195L8.00214 4.80193" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>                                        <div className="text-center text-neutral-700 text-xs font-medium font-inter leading-tight">Amount raised</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M7.68172 9.74533L7.68174 9.74531L7.67816 9.74097L5.43594 7.02421C5.36446 6.93404 5.31945 6.82573 5.306 6.71138C5.29243 6.596 5.31154 6.47913 5.36114 6.3741L5.3613 6.37417L5.36656 6.36222C5.40053 6.28515 5.45595 6.2195 5.52619 6.17311C5.59577 6.12715 5.67699 6.102 5.76032 6.10058L10.2432 6.10056C10.3265 6.10198 10.4077 6.12712 10.4773 6.17308C10.5476 6.21948 10.603 6.28512 10.6369 6.36219L10.6368 6.36226L10.6424 6.37407C10.692 6.47911 10.7111 6.59598 10.6975 6.71136C10.6841 6.8257 10.639 6.93402 10.5676 7.02418L8.3253 9.74097L8.32528 9.74095L8.32175 9.74532C8.28286 9.79353 8.23374 9.83247 8.17796 9.85932C8.12293 9.88581 8.06277 9.89988 8.00173 9.90056C7.9407 9.89988 7.88054 9.88581 7.82551 9.85932C7.76972 9.83247 7.7206 9.79354 7.68172 9.74533Z" fill="#737373" stroke="#737373" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="h-8 md:h-9 px-2 py-1.5 cursor-pointer bg-gradient-to-b from-[#2dd6b4] to-[#21806f] rounded-[36px] justify-center items-center gap-1 flex" onClick={() => setCreatePopup(!createPopup)}>
                                    <div className="px-1 justify-start items-start hidden gap-2.5 md:flex">
                                        <div className="text-center text-white text-sm font-medium font-popins leading-normal">Create New </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.99967 3.33398V12.6673M12.6663 8.00065H3.33301" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="grid  2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-3 xlg:gap-5 w-[100%]">
                                {
                                    data.map((item, idx) => <div key={idx} className="grow shrink basis-0 h-[258px] flex-col justify-start items-start gap-[22px] inline-flex">
                                        <div className="self-stretch grow shrink basis-0 p-[18px] bg-white rounded-lg border border-[#d0d0d0] flex-col justify-between items-start flex">
                                            <div className="self-stretch justify-between items-start inline-flex">
                                                <div className="h-20 justify-start items-start gap-4 flex">
                                                    <img className="w-20 h-20 rounded-[50%]" src={item.src} />
                                                    <div className="flex-col justify-center items-start inline-flex">
                                                        <div className="text-[#565656] text-xs font-medium font-inter leading-normal">{item.category}</div>
                                                        <div className="text-cente text-black text-lg font-bold font-inter leading-normal">{item.name}</div>
                                                    </div>
                                                </div>
                                                <img src={threeDot} className="sm:block hidden" alt="Three Dots" />
                                            </div>
                                            <div className="self-stretch justify-between items-center inline-flex">
                                                <div className="w-[142px] flex-col justify-start items-start gap-0.5 inline-flex">
                                                    <div className="self-stretch h-6 flex-col justify-start items-start gap-[5px] flex">
                                                        <div className="text-center text-black text-xl font-semibold font-inter leading-normal">$ {item.amount}</div>
                                                    </div>
                                                    <div className="self-stretch text-[#838383] text-xs font-medium font-inter leading-tight">{item.date}</div>
                                                </div>
                                                <div className="justify-start items-center gap-3 flex">
                                                    <div className="px-2 cursor-pointer py-1.5 bg-[#e5f8f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 flex" onClick={() => navigate(`/dashboard/${item.name}`)}>
                                                        <div className="px-1 justify-start items-start gap-2.5 flex">
                                                            <div className="text-center text-[#288d7c] text-sm font-medium font-popins leading-normal">Manage</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div> :
                        children
                }
            </div>
            {
                deletePopup && <div className="w-[100vw] z-[100] h-[100vh] flex justify-center items-center absolute  bg-black/40 z-99">
                    <DeleteFundraiserPopup setDeletePopup={setDeletePopup} deletePopup={deletePopup} />
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

export default Dashboard;