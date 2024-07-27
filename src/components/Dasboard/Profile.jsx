import React, { useState } from 'react';
import { attach_file, avatarCam, dArrow2, dashAvatar, defAvatar, Notificationbell, trash2 } from '../../assets';
import { useForm } from 'react-hook-form';
import AccountDeletePopup from '../Popups/AccountDeletePopup';
import EditPasswordPopup from '../Popups/EditPasswordPopup';
import NotificationHover from '../Popups/NotificationHover';
import { useOutletContext } from 'react-router-dom';

function Profile(props) {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted ", data);
    }
    const notificationData = useOutletContext()

    console.log(errors)
    const [deleteAccount, setDeleteAccount] = useState(false)
    const [editPassword, setEditPassword] = useState(false)
    const [notification, setNotification] = useState(false)

    return (
        <>
            <div className="flex h-[100vh] xlg:w-[calc(100vw_-_260px)] w-[calc(100vw_-_60px)] flex-col" onClick={() => setNotification(false)}>
                <div className="pl-[19px] w-[100%] xlg:h-[68px] h-[56px] pr-8 py-3 bg-white border-b border-[#d0d0d0] justify-between items-center inline-flex gap-4">

                    <h2 className="text-center text-black text-[22px] font-semibold font-popins leading-normal flex gap-2 items-center">Profile</h2>
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
                    <form method='DELETE' onSubmit={handleSubmit(onSubmit)} className=" w-[100%] flex-col justify-start items-start gap-5 inline-flex">
                        <div className="flex max-w-[724px] w-full p-5 flex-col  border rounded-lg border-[#D0D0D0] bg-white ">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-[20px] font-[600] font-inter leading-7 text-[#2C2F32]">Personal Information</h3>
                                <div className="flex flex-col gap-[44px]">
                                    <div className="relative w-fit">
                                        <img src={defAvatar} alt="Default Avatar" />
                                        <img src={avatarCam} alt="Avatar Camera" className="absolute -right-1 -bottom-1" />
                                    </div>
                                    <div className="flex md:gap-0  gap-[21px] flex-col w-full">
                                        <div className="grid grid-rows-2 gap-[21px]">

                                            <div className="grid md:grid-cols-2  gap-[21px]">
                                                <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                                    <input type="text" {...register("f-name", { required: "Field is requiered" })} id="f-name" className="step-form-input" placeholder="Adam" />
                                                    <label htmlFor="f-name" className="step-form-label text-[12px]">First Name</label>
                                                </div>
                                                <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                                    <input type="text" {...register("l-name", { required: "Field is requiered" })} id="l-name" className="step-form-input" placeholder="Adam" />
                                                    <label htmlFor="l-name" className="step-form-label text-[12px]">Last Name</label>
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2  gap-[21px]">
                                                <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                                    <input type="date" {...register("dob", { required: "Field is requiered" })} id="dob" className="step-form-input" placeholder="Birth Date" />
                                                    <label htmlFor="dob" className="step-form-label text-[12px]">Birth Date</label>
                                                </div>
                                                <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                                    <input type="email" {...register("email", { required: "Field is requiered" })} id="email" className="step-form-input" placeholder="Email Address" />
                                                    <label htmlFor="email" className="step-form-label text-[12px]">Email Address</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-[21px] md:flex-row flex-col">
                                            <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                                <select className="border-none outline-none text-[12px]" {...register("location")} id="location">
                                                    <option value="" defaultValue={""}>Location</option>
                                                    <option value="US">India</option>
                                                    <option value="US">U.S.A.</option>
                                                    <option value="US">Japan</option>
                                                    <option value="US">U.K.</option>
                                                </select>
                                            </div>
                                            <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                                <select className="border-none outline-none text-[12px]" {...register("language")} id="language">
                                                    <option value="" defaultValue={""}>Communication Language</option>
                                                    <option value="US">Hindi</option>
                                                    <option value="US">English</option>
                                                    <option value="US">French</option>
                                                    <option value="US">Spanish</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex  w-full justify-end items-center pt-5">
                                <div className="h-9 px-2 sm:w-fit w-full py-1.5 bg-[#e4f7f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 inline-flex">
                                    <div className="px-1 justify-start items-start gap-2.5 flex">
                                        <div className="text-center text-[#288d7c] text-sm font-medium font-popins leading-normal">Save Changes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex max-w-[724px] w-full p-5 flex-col  border rounded-lg border-[#D0D0D0] bg-white gap-5">
                            <div className="self-stretch h-[116px] flex-col justify-start items-start gap-6 flex">
                                <div className="text-center text-[#2c2f32] text-xl font-semibold font-inter leading-7">Wallet Address</div>
                                <div className="self-stretch h-16 pl-3 flex-col justify-start items-start gap-11 flex">
                                    <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                        <input type="text" {...register("w-address", { required: "Field is requiered" })} id="w-address" className="step-form-input" placeholder="305102d93353a9e0b7664382dd84f087858199a0" />
                                        <label htmlFor="w-address" className="step-form-label text-[12px]">Address</label>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-9 w-full flex-col justify-end items-end gap-2.5 flex">
                                <div className="px-2 sm:w-fit w-full cursor-pointer py-1.5 bg-[#e4f7f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 inline-flex">
                                    <div className="px-1 justify-start items-start gap-2.5 flex">
                                        <div className="text-center text-[#288d7c] text-sm font-medium font-popins leading-normal">Edit</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex max-w-[724px] w-full p-5 flex-col  border rounded-lg border-[#D0D0D0] bg-white gap-5">
                            <div className="self-stretch h-[116px] flex-col justify-start items-start gap-6 flex">
                                <div className="text-center text-[#2c2f32] text-xl font-semibold font-inter leading-7">Password</div>
                                <div className="self-stretch h-16 pl-3 flex-col justify-start items-start gap-11 flex">
                                    <div className="w-[100%] max-w-[306px] h-[64px] step-form-div flex justify-end flex-col relative">
                                        <input type="password" {...register("password", { required: "Field is requiered" })} id="password" className="step-form-input" placeholder=".........." />
                                        <label htmlFor="password" className="step-form-label text-[12px]">Password</label>
                                    </div>
                                </div>
                            </div>

                            <div className="self-stretch  w-full h-9 flex-col justify-end items-end gap-2.5 flex">
                                <div className="px-2 sm:w-fit w-full cursor-pointer py-1.5 bg-[#e4f7f4]/70 rounded-[36px] border-2 border-[#288d7c]  justify-center items-center gap-1 inline-flex" onClick={() => setEditPassword(!editPassword)}>
                                    <div className="px-1 justify-start items-start gap-2.5 flex">
                                        <div className="text-center text-[#288d7c] text-sm font-medium font-popins leading-normal">Edit</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex max-w-[724px] w-full p-5 flex-col  border rounded-lg border-[#D0D0D0] bg-white gap-5">
                            <div className="self-stretch flex-col justify-start items-start gap-5 flex">
                                <div className="self-stretch justify-between items-end inline-flex">
                                    <div className="max-w-[415px] flex-col justify-start items-start gap-[13px] inline-flex">
                                        <div className="max-w-[211px]"><span className="text-black text-xl font-semibold font-['Inter'] leading-tight">Certificates</span><span className="text-black text-sm font-normal font-['Inter'] leading-[14.14px]"> (NGO’s)</span></div>
                                        <div className="max-w-[415px] text-[#676767] text-sm font-normal font-['Poppins'] leading-normal">Upload certificates which help donators to understand your needs...</div>
                                    </div>
                                </div>
                                <div className="justify-start items-start gap-5 flex flex-wrap">
                                    <div className="md:w-[124px] md:h-[124px] w-[112px] h-[112px] flex justify-center items-center bg-[#efefef] rounded">
                                        <img src={trash2} alt="Trash 2" />
                                    </div>
                                    <div className="md:w-[124px] md:h-[124px] w-[112px] h-[112px] bg-[#efefef] rounded" />
                                    <div className="md:w-[124px] md:h-[124px] w-[112px] h-[112px] bg-[#efefef] rounded" />
                                    <div className="md:w-[124px] md:h-[124px] w-[112px] h-[112px] rounded border border-[#818181] border-dashed flex-col justify-center items-center gap-2 inline-flex">
                                        <div className="w-6 h-6 relative">
                                            <img src={attach_file} alt="Attach File" />
                                        </div>
                                        <div className="text-center text-[#676767] text-xs font-normal font-['Poppins'] leading-normal">Attach File</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex max-w-[724px] w-full p-5 flex-col  border rounded-lg border-[#D0D0D0] bg-white gap-5">
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-center text-black text-xl font-semibold font-popins leading-normal">Delete Account</div>
                                <div className="w-5 h-5 relative">
                                    <img src={dArrow2} alt="Downward Arrow" />
                                </div>
                            </div>
                            <div className="self-stretch justify-between md:flex-row flex-col md:gap-0 gap-[34px] md:items-center flex">
                                <div className="text-[#6d6d6d] text-sm font-normal font-roboto leading-tight">NOTE: All your data according this fundraising ...</div>
                                <div className="px-2 py-1.5  cursor-pointer rounded-[36px] border-2 border-[#ff4f49] justify-center items-center gap-1 flex" onClick={() => setDeleteAccount(!deleteAccount)}>
                                    <div className="px-1 justify-start items-start gap-2.5 flex">
                                        <div className="text-center text-[#ff4f49] text-sm font-medium font-popins leading-normal">Delete Account</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {
                deleteAccount && <div className="w-[100vw] h-[100vh] z-[100] flex justify-center items-center absolute  bg-black/40 z-99">
                    <AccountDeletePopup setDeleteAccount={setDeleteAccount} deleteAccount={deleteAccount} />
                </div>
            }
            {
                editPassword && <div className="w-[100vw] h-[100vh] z-[100] flex justify-center items-center absolute  bg-black/40 z-99">
                    <EditPasswordPopup setEditPassword={setEditPassword} editPassword={editPassword} />
                </div>
            }
        </>
    );
}

export default Profile;