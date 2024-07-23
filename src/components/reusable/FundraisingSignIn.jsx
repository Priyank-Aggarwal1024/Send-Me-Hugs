import React from 'react';
import { FormLogo, ImgFund } from '../../assets';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function FundraisingSignIn(props) {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted ", data);
    }
    const navigate = useNavigate()
    console.log(errors)
    return (
        <div className="fund-raising-form grid grid-cols-2 h-[100vh]">
            <div className="fund-raising-form-left h-[100%] hidden xlg:block">
                <img className="bg-contain h-[100vh] w-[100%]" src={ImgFund} alt="Fundraising Form Plant Money Image" />
            </div>
            <form className="fund-raising-form-right col-span-2 xlg:col-span-1" action="#" method="POST" onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col justify-between w-[100%] max-h-[100vh] h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
                    <div className="">
                        <div className="flex w-[100%] justify-between items-center h-[30px]">
                            <img src={FormLogo} alt="SendMeHugs Form Logo" />
                            <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer">Sign In</div>
                        </div>
                        <div className="pt-[115px] flex flex-col gap-[43px] ">
                            <div className="flex flex-col gap-[21px]">
                                <h2 className="text-black font-bold text-[21px] font-inter leading-[124%]">Create an account to save and continue</h2>
                                <p className="text-[14px] leading-5 font-inter">Fill in your account details</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                                    <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                        <input type="text" {...register("f-name", { required: "Field is requiered" })} id="f-name" className="step-form-input" placeholder="Adam" />
                                        <label htmlFor="f-name" className="step-form-label">First Name</label>
                                    </div>
                                    <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                        <input type="text" {...register("l-name", { required: "Field is requiered" })} id="l-name" className="step-form-input" placeholder="Adam" />
                                        <label htmlFor="l-name" className="step-form-label">Last Name</label>
                                    </div>
                                </div>
                                <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                    <input type="email" {...register("email", { required: "Field is requiered" })} id="email" className="step-form-input" placeholder="adam_smith@hotmail.com" />
                                    <label htmlFor="email" className="step-form-label">Email</label>
                                </div>
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                                    <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 8, message: "**Password must be more than 8 characters" } })} id="password" className="step-form-input" placeholder=".........." />
                                        <label htmlFor="password" className="step-form-label">Password</label>
                                    </div>
                                    <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                        <input type="password" {...register("c-password", { required: "Password is required", validate: (value, formValue) => value == formValue.password || "Field doesn't match with password" })} id="c-password" className="step-form-input" placeholder=".........." />
                                        <label htmlFor="c-password" className="step-form-label">Confirm Password</label>
                                    </div>

                                </div>
                                <div className="flex gap-[9px] flex-col">
                                    <p className="text-[12px] font-[400] font-inter leading-4 text-[#737373]">Must be at least 8 characters and have one of each: uppercase letters, symbols, and numbers.</p>
                                    <div className="max-w-[336px]">
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
                            </div>
                            <div className="">
                                <div className="text-black font-inter leading-5 text-[14px] ">
                                    By clicking the Sign Up button below, you agree to the SendmeHugs <span className="underline">Terms of Service</span> and acknowledge the <span className="underline">Privacy Notice</span>
                                </div>
                                <div className="flex justify-end itc pt-7">
                                    <button className="py-2 px-3 w-fit text-[#fff] font-[500]  leading-6 text-[16px] text-center font-popins rounded-[36px] bg-gradient-cyan cursor-pointer" onClick={() => navigate("/fundraising")}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FundraisingSignIn;