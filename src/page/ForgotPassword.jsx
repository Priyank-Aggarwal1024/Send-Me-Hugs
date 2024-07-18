import React from 'react';
import { plant } from '../assets';
import { useForm } from 'react-hook-form';

function ForgotPassword(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted")
    }
    console.log(errors)
    return (
        <div className="max-w-[1512px] mx-auto grid xl:grid-cols-2 min-h-[100vh] md:h-[100vh]  items-center">
            <div className="flex justify-center items-center">
                <form className="sm:max-w-[417px] xl:min-h-[511px] p-5 xss:px-2.5  md:pt-[52px] sm:px-[55.5px] md:pb-[33px] text-black flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} action='/' method='POST'>
                    <div className="flex flex-col gap-[21px]">
                        <div className="">
                            <h3 className="text-black text-center font-inter text-[21px] leading-[13px] font-bold pb-[13px]">Reset Password</h3>
                            <p className="font-inter text-[14px] font-[400] leading-5 text-center max-w-[260px] mx-auto">Now, choose a password that’s at least as strong as your willpower.</p>
                        </div>
                        <div className="gap-3 flex flex-col">
                            <div className="form-group h-[64px] flex justify-end flex-col relative">
                                <input type="password" {...register("password", { required: "Password is required", minLength: { value: 8, message: "**Password must be more than 8 characters" } })} id="password" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" placeholder=".........." />
                                <label htmlFor="password" className="form-label text-[12px] font-[500] font-inter">New Password</label>
                            </div>
                            <div className="form-group h-[64px] flex justify-end flex-col relative">
                                <input type="password" {...register("c-password", { required: "Field is requiered" })} id="c-password" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" placeholder=".........." />
                                <label htmlFor="c-password" className="form-label text-[12px] font-[500] font-inter">Confirm Password</label>
                            </div>

                        </div>

                    </div>
                    <div className="flex gap-[9px] flex-col">
                        <p className="text-[12px] font-[400] font-inter leading-4">Must be at least 8 characters and have one of each: uppercase letters, symbols, and numbers.</p>
                        <div className="">
                            {
                                errors.password ? <><div className="grid grid-cols-10">
                                    <span className="h-1.5 bg-[#ff2b2b] rounded-l-[5px]"></span>
                                    <span className="h-1.5 bg-[#ff2b2b] col-span-4"></span>

                                    {errors.password.message == "Password is required" ?
                                        <>
                                            <span className="h-1.5 bg-[#ff2b2b] col-span-4"></span>
                                        </> :
                                        <>
                                            <span className="h-1.5  bg-gray-200 col-span-4"></span>
                                        </>
                                    }
                                    <span className="h-1.5 rounded-r-[5px] bg-gray-200"></span>

                                </div>
                                    <div className="font-inter text-[11px] font-[400] leading-5 text-[#737373] h5">

                                        <span className="text-[#a31010] font-bold">Poor</span>
                                        <span className="text-[14px]"> - </span>
                                        <span className="">A Insecure password.</span>
                                    </div></> : <>
                                    <div className="grid grid-cols-10">
                                        <span className="h-1.5 bg-[#59A310] rounded-l-[5px]"></span>
                                        <span className="h-1.5 bg-[#59A310] col-span-8"></span>
                                        <span className="h-1.5 rounded-r-[5px] bg-gray-200"></span>
                                    </div>
                                    <div className="font-inter text-[11px] font-[400] leading-5 text-[#737373] h5">
                                        <span className="text-[#59A310] font-bold">Strong</span>
                                        <span className="text-[14px]"> - </span>
                                        <span className="">A secure password.</span>
                                    </div></>
                            }

                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <button className="bg-gradient-cyan-hover bg-gradient-cyan  text-white font-[500] font-popins text-[16px] p-[10px_14px] rounded-[36px]">Change Password</button>
                    </div>
                </form>
            </div>
            <div className="hidden xl:block ml-auto">
                <img src={plant} className="md:h-[100vh]" alt="Plant Image" />
            </div>
        </div>
    );
}

export default ForgotPassword;