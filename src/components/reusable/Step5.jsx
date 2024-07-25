import React from 'react';
import BackButton from './BackButton';
import ContinueButton from './ContinueButton';
import { FormLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

function Step5({ swiper, register, setValue }) {
    const navigate = useNavigate()

    return (
        <div className="flex create-popup-slide flex-col justify-between w-[100%] max-h-[100vh] h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
            <div className="flex flex-col gap-[44px]">
                <div className="create-popup-hide flex w-[100%] justify-between items-center h-[30px]">
                    <img src={FormLogo} alt="SendMeHugs Form Logo" />
                    <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer" onClick={() => navigate("/fundraising/signin")}>Sign In</div>
                </div>
                <p className="text-black text-[16px] font-bold leading-6 font-inter">4 of 5</p>
                <div className="flex flex-col gap-[43px]">
                    <div className="flex flex-col gap-5 max-w-[415px]">
                        <h2 className="text-black font-bold text-[21px] font-inter leading-[101%]">Tell us why you’re fundraising</h2>
                    </div>
                    <div className="max-w-[334px] w-[100%] h-[64px] step-form-div flex justify-between flex-col relative">
                        <label htmlFor="title" className="w-[100%] font-roboto text-[14px] font-[500] leading-5 text-[#686F78]">Fundraiser title</label>
                        <input type="text" {...register("title", { required: "Field is Required" })} id="title" className="border-none outline-none font-roboto text-[14px] font-[400] leading-5 text-[#393D42] placeholder:text-[#868C93]" placeholder="Donate to help..." onChange={(e) => setValue("title", e.target.value)} />
                    </div>
                    <div className="w-[100%] min-h-[64px] step-form-div flex justify-between flex-col relative">
                        <label htmlFor="story" className="w-[100%] font-roboto text-[14px] font-[500] leading-5 text-[#686F78]">Tell your story</label>
                        <textarea type="text" {...register("story", { required: "Field is Required" })} id="story" className="border-none outline-none font-roboto text-[14px] font-[400] leading-5 text-[#393D42] h-auto placeholder:text-[#868C93]" placeholder="Hi, my name is John and I’m fundraising for" />
                    </div>
                </div>
            </div>
            <div className="bottom-buttons flex justify-between items-center pt-5">
                <BackButton swiper={swiper} />
                <ContinueButton swiper={swiper} text="Review" />
            </div>
        </div>
    );
}

export default Step5;