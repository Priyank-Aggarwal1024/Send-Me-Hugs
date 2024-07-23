import React from 'react';
import ContinueButton from './ContinueButton';
import BackButton from './BackButton';
import { FormLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

function Step3({ swiper, register }) {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col justify-between w-[100%] max-h-[100vh] h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
            <div className="flex flex-col gap-[44px]">
                <div className="flex w-[100%] justify-between items-center h-[30px]">
                    <img src={FormLogo} alt="SendMeHugs Form Logo" />
                    <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer" onClick={() => navigate("/fundraising/signin")}>Sign In</div>
                </div>
                <p className="text-black text-[16px] font-bold leading-6 font-inter">2 of 5</p>
                <div className="flex flex-col gap-[43px]">
                    <div className="flex flex-col gap-5 max-w-[415px]">
                        <h2 className="text-black font-bold text-[21px] font-inter leading-[101%]">How much would you like to rise?</h2>
                        <p className="font-popins text-[14px] leading-6 text-[#676767]">Fundraisers like yours typically aim to raise $13,000 or more.
                            Based on goals for similar fundraisers</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="max-w-[334px] w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                            <input type="number" {...register("amount", { required: "Field is requiered", maxLength: { value: 6, message: "Pincode have only six digit" }, typeof: Number })} id="amount" className="step-form-input" placeholder="Enter amount" />
                            <label htmlFor="amount" className="step-form-label w-[80%]">Enter amount</label>
                            <p className="absolute right-0 bottom-2.5 text-[14px] leading-5 text-[#868C93] font-roboto bg-white w-[15px] text-right">$</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-buttons flex justify-between items-center pt-5">
                <BackButton swiper={swiper} />
                <ContinueButton swiper={swiper} />
            </div>
        </div>
    );
}

export default Step3;