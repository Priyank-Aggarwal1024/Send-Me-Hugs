import React, { useState } from 'react';
import { edit, fundCoverPhoto, trash } from '../../assets';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function FundraiserIten({ deletePopup, setDeletePopup }) {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted ", data);
    }
    console.log(errors)
    console.log(deletePopup)
    return (
        <>
            <div className="justify-start overflow-auto flex-col  w-[100%] items-start gap-1 inline-flex p-4">
                <div className="pb-[14px]">
                    <div className="py-1.5 px-2 flex justify-center items-center gap-1 rounded-[36px] text-[#298D7C] text-center font-popins text-[14px] leading-6 font-[500]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.8002 7.99981L3.2002 7.9998M3.2002 7.9998L6.59431 11.1998M3.2002 7.9998L6.59431 4.7998" stroke="#298D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link to="/dashboard">Back to fundraisers</Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-[793px] w-[100%] p-5 bg-white rounded-lg border border-[#d0d0d0] flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch h-[392px] rounded-lg flex-col justify-center items-center gap-3 flex">
                        <img className="self-stretch rounded-lg" src={fundCoverPhoto} />
                        <div className="self-stretch px-1.5 justify-between items-start inline-flex">
                            <div className="w-5 h-5 relative">
                                <img src={trash} alt="Trash" />
                            </div>
                            <div className="w-5 h-5 relative">
                                <img src={edit} alt="Edit" />
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-5 flex">
                        <div className="w-[100%] h-[64px] step-form-div flex justify-between flex-col relative hover:border-[#F8A754]">
                            <label htmlFor="title" className="w-[100%] font-roboto text-[14px] font-[500] leading-5 text-[#686F78]">Fundraiser title</label>
                            <input type="text" {...register("title", { required: "Field is Required" })} id="title" className="border-none outline-none font-roboto text-[14px] font-[400] leading-5 text-[#393D42] placeholder:text-[#868C93]" placeholder="Save rivers from plastic.." />
                        </div>
                        <div className="w-[100%] h-[64px] step-form-div flex justify-between flex-col relative hover:border-[#F8A754]">
                            <label htmlFor="amount" className="w-[100%] font-roboto text-[14px] font-[500] leading-5 text-[#686F78]">Goal</label>
                            <input type="text" {...register("amount", { required: "Field is Required" })} id="amount" className="border-none outline-none font-roboto text-[14px] font-[400] leading-5 text-[#393D42] placeholder:text-[#868C93]" placeholder="$ 20" />
                        </div>
                        <div className="grid grid-cols-2 xl:gap-[43px] md:gap-6 gap-4 w-full">
                            <div className="w-[100%] h-[64px] step-form-div flex justify-between flex-col relative hover:border-[#F8A754]">
                                <label htmlFor="category" className="w-[100%] font-roboto text-[14px] font-[500] leading-5 text-[#686F78]">Category</label>
                                <input type="text" {...register("category", { required: "Field is Required" })} id="category" className="border-none outline-none font-roboto text-[14px] font-[400] leading-5 text-[#393D42] placeholder:text-[#868C93]" placeholder="Save rivers from plastic.." />
                            </div><div className="w-[100%] h-[64px] step-form-div flex justify-between flex-col relative hover:border-[#F8A754]">
                                <label htmlFor="location" className="w-[100%] font-roboto text-[14px] font-[500] leading-5 text-[#686F78]">Location</label>
                                <input type="text" {...register("location", { required: "Field is Required" })} id="location" className="border-none outline-none font-roboto text-[14px] font-[400] leading-5 text-[#393D42] placeholder:text-[#868C93]" placeholder="2564 - Glenquire NSW" />
                            </div>
                        </div>
                        <div className="w-[100%] min-h-[64px] step-form-div flex justify-between flex-col relative hover:border-[#F8A754]">
                            <label htmlFor="story" className="w-[100%] font-roboto text-[14px] font-[500] leading-5 text-[#686F78]">Story</label>
                            <textarea rows={3} type="text"  {...register("story", { required: "Field is Required" })} id="story" placeholder="Passionate chess student with 3 years of experience in competitive play. Currently rated 1800, specializing in strategic openings and endgames. Active in local chess clubs and online tournaments, always eager to learn and improve. Future grandmaster in the making!" className={`max-w-[586px] step-form-input`} />
                            <img src={edit} alt='Edit' className="mr-5 absolute right-0 top-2.5 w-5 h-5" />
                        </div>
                        <div className="self-stretch justify-end items-end gap-3 inline-flex">
                            <button type='submit' className="px-2 py-1.5 bg-[#e5f8f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 flex">
                                <div className="px-1 justify-start items-start gap-2.5 flex">
                                    <div className="text-center text-[#288d7c] text-sm font-medium font-['Poppins'] leading-normal">Save changes</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="self-stretch h-px bg-[#d9d9d9]" />
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-center text-black text-base font-semibold font-['Poppins'] leading-normal">Delete Fundraiser</div>
                        <div className="w-5 h-5 relative" />
                    </div>
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#6d6d6d] text-sm font-normal font-['Roboto'] leading-tight">NOTE: All your data according this fundraising ...</div>
                        <div className="px-2 py-1.5 rounded-[36px] border-2 cursor-pointer border-[#ff4f49] justify-center items-center gap-1 flex" onClick={() => setDeletePopup(!deletePopup)}>
                            <div className="px-1 justify-start items-start gap-2.5 flex">
                                <div className="text-center text-[#ff4f49] text-sm font-medium font-['Poppins'] leading-normal">Delete</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}

export default FundraiserIten;