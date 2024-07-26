import React from 'react';
import { cross } from '../../assets';
import { useForm } from 'react-hook-form';

function EditPasswordPopup({ editPassword, setEditPassword }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted")
    }
    console.log(errors)
    return (
        <div className="max-w-[463px] w-[90%] popup-animation max-h-[90%] items-center p-5 bg-white flex-col justify-start gap-[43px] inline-flex">
            <div className="self-stretch h-[49px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch justify-between items-start inline-flex">
                    <div className="opacity-90 text-center text-[#112230] text-xl font-bold font-inter leading-7">Edit password</div>
                    <div className="w-6 h-6 relative" onClick={() => setEditPassword(!editPassword)}>
                        <img src={cross} alt="Cancel" />
                    </div>
                </div>
                <div className="self-stretch h-px bg-[#d9d9d9]" />
            </div>
            <div className="overflow-auto w-full max-w-[423px] flex ">
                <form className="w-full overflow-auto items-center  flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <div className="max-w-[300px] flex-col items-start flex">
                        <div className="self-stretch   py-[17px] flex-col gap-11 flex">
                            <div className="flex-col justify-start items-start gap-6 flex">
                                <div className="gap-3 flex flex-col w-full">
                                    <div className="form-group h-[64px] flex justify-end flex-col relative">
                                        <input type="password" {...register("old-password", { required: "Password is required", minLength: { value: 8, message: "**Password must be more than 8 characters" } })} id="old-password" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" placeholder=".........." />
                                        <label htmlFor="old-password" className="form-label text-[12px] font-[500] font-inter">Old Password</label>
                                    </div>
                                    <div className="form-group h-[64px] flex justify-end flex-col relative">
                                        <input type="password" {...register("npassword", { required: "Password is required", minLength: { value: 8, message: "**Password must be more than 8 characters" } })} id="npassword" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" placeholder=".........." />
                                        <label htmlFor="npassword" className="form-label text-[12px] font-[500] font-inter">New Password</label>
                                    </div>

                                    <div className="form-group h-[64px] flex justify-end flex-col relative">
                                        <input type="password" {...register("c-password", { required: "Field is requiered", validate: (value, formValue) => value == formValue.password || "Field doesn't match with password" })} id="c-password" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" placeholder=".........." />
                                        <label htmlFor="c-password" className="form-label text-[12px] font-[500] font-inter">Confirm Password</label>
                                    </div>

                                </div>
                                <div className="flex gap-[9px] flex-col">
                                    <p className="text-[12px] font-[400] font-inter leading-4">Must be at least 8 characters and have one of each: uppercase letters, symbols, and numbers.</p>
                                    <div className="">
                                        {
                                            errors.npassword ? <><div className="grid grid-cols-10">
                                                <span className="h-1.5 bg-[#ff2b2b] rounded-l-[5px]"></span>
                                                <span className="h-1.5 bg-[#ff2b2b] col-span-4"></span>

                                                {errors.npassword.message == "Password is required" ?
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
                        </div>
                    </div>
                    <div className="self-stretch w-full justify-end items-center gap-3 inline-flex">
                        <button type="submit" className="h-9 px-2 py-1.5 bg-gradient-to-b cursor-pointer from-[#2dd6b4] to-[#21806f] rounded-[36px] justify-center items-center gap-1 flex">
                            <div className="px-1 justify-start items-start gap-2.5 flex">
                                <div className="text-center text-white text-sm font-medium font-['Poppins'] leading-normal">Save</div>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPasswordPopup;