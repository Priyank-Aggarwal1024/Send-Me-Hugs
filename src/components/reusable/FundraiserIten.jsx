import React, { useState } from 'react';
import { attach_file, edit, fundCoverPhoto, trash, trash2 } from '../../assets';
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
            <div className="justify-start overflow-auto flex-col  w-[100%] items-start gap-1 inline-flex xlg:p-4 md:p-3 p-2.5">
                <div className="pb-[14px]">
                    <Link to="/dashboard" className="py-1.5 px-2 flex justify-center items-center gap-1 rounded-[36px] text-[#298D7C] text-center font-popins text-[14px] leading-6 font-[500]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.8002 7.99981L3.2002 7.9998M3.2002 7.9998L6.59431 11.1998M3.2002 7.9998L6.59431 4.7998" stroke="#298D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>Back to fundraisers</p>
                    </Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-[793px] w-[100%] xlg:p-4 md:p-3 p-2.5 bg-white rounded-lg border border-[#d0d0d0] flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch h-auto rounded-lg flex-col justify-center items-center gap-3 flex">
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
                        <div className="flex max-w-[724px] w-full flex-col bg-white gap-5">
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
                                    <div className="md:w-[124px] md:h-[124px] w-[112px] h-[112px] rounded border-dashed border border-[#818181] flex-col justify-center items-center gap-2 inline-flex">
                                        <div className="w-6 h-6 relative">
                                            <img src={attach_file} alt="Attach File" />
                                        </div>
                                        <div className="text-center text-[#676767] text-xs font-normal font-['Poppins'] leading-normal">Attach File</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch w-full justify-end items-end gap-3 inline-flex">
                            <button type='submit' className="px-2 py-1.5 sm:w-fit w-full bg-[#e5f8f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 flex">
                                <div className="px- justify-start items-start gap-2.5 flex">
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
                    <div className="sm:flex-row flex-col sm:justify-between gap-5 w-full sm:items-center inline-flex">
                        <div className="text-[#6d6d6d] text-sm font-normal font-roboto leading-tight">NOTE: All your data according this fundraising ...</div>
                        <div className="px-2 py-1.5  rounded-[36px] border-2 cursor-pointer border-[#ff4f49] justify-center items-center gap-1 flex" onClick={() => setDeletePopup(!deletePopup)}>
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