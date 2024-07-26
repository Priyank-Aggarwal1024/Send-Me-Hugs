import React, { useState } from 'react';
import { avatarCam, dArrow2, dashAvatar, defAvatar, Notificationbell } from '../../assets';
import { useForm } from 'react-hook-form';
import AccountDeletePopup from '../Popups/AccountDeletePopup';
import EditPasswordPopup from '../Popups/EditPasswordPopup';

function Profile({ navOpen, setNavOpen }) {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted ", data);
    }
    console.log(errors)
    const [deleteAccount, setDeleteAccount] = useState(false)
    const [editPassword, setEditPassword] = useState(false)
    return (
        <>
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
                        <h2>Profile</h2>
                    </div>
                    <div className="justify-end items-center gap-5 h-11 flex">
                        <div className="justify-start items-center gap-5 flex">
                            <div className="w-6 h-6 relative flex justify-center items-center">
                                <div className="bg-[#FF3C3C] flex justify-center items-center absolute w-3 h-3 text-[8px] font-inter leading-[5px] text-white top-0.5 -right-0.5 rounded-[50%]">3</div>
                                <img className="w-6 h-6" src={Notificationbell} alt="Notificationbell" />
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
                    <form method='DELETE' onSubmit={handleSubmit(onSubmit)} className=" w-[100%] flex-col justify-start items-start gap-5 inline-flex">
                        <div className="flex max-w-[724px] w-full p-5 flex-col  border rounded-lg border-[#D0D0D0] bg-white ">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-[20px] font-[600] font-inter leading-7 text-[#2C2F32]">Personal Information</h3>
                                <div className="flex flex-col gap-[44px]">
                                    <div className="relative w-fit">
                                        <img src={defAvatar} alt="Default Avatar" />
                                        <img src={avatarCam} alt="Avatar Camera" className="absolute -right-1 -bottom-1" />
                                    </div>
                                    <div className="flex gap-[21px] flex-col w-full">
                                        <div className="grid grid-cols-2 gap-[21px]">

                                            <div className="">
                                                <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                                    <input type="text" {...register("f-name", { required: "Field is requiered" })} id="f-name" className="step-form-input" placeholder="Adam" />
                                                    <label htmlFor="f-name" className="step-form-label text-[12px]">First Name</label>
                                                </div>
                                                <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                                    <input type="text" {...register("l-name", { required: "Field is requiered" })} id="l-name" className="step-form-input" placeholder="Adam" />
                                                    <label htmlFor="l-name" className="step-form-label text-[12px]">Last Name</label>
                                                </div>
                                            </div>
                                            <div className="">
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
                                        <div className="flex gap-[21px]">
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
                                <div className="h-9 px-2 py-1.5 bg-[#e4f7f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 inline-flex">
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
                            <div className="self-stretch h-9 flex-col justify-end items-end gap-2.5 flex">
                                <div className="px-2 cursor-pointer py-1.5 bg-[#e4f7f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 inline-flex">
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
                            <div className="self-stretch h-9 flex-col justify-end items-end gap-2.5 flex">
                                <div className="px-2 cursor-pointer py-1.5 bg-[#e4f7f4]/70 rounded-[36px] border-2 border-[#288d7c]  justify-center items-center gap-1 inline-flex" onClick={() => setEditPassword(!editPassword)}>
                                    <div className="px-1 justify-start items-start gap-2.5 flex">
                                        <div className="text-center text-[#288d7c] text-sm font-medium font-popins leading-normal">Edit</div>
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
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-[#6d6d6d] text-sm font-normal font-roboto leading-tight">NOTE: All your data according this fundraising ...</div>
                                <div className="px-2 py-1.5 cursor-pointer rounded-[36px] border-2 border-[#ff4f49] justify-center items-center gap-1 flex" onClick={() => setDeleteAccount(!deleteAccount)}>
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