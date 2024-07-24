import React, { useEffect, useState } from 'react';
import BackButton from './BackButton'
import ContinueButton from './ContinueButton'
import { FormLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

function Step1({ swiper, register, watch }) {
    const [bestDescribes, setBestDescribes] = useState("")
    const navigate = useNavigate()
    const ct = watch("country");
    const cate = watch("category");
    const pin = watch("pincode");
    const [swi, setSwi] = useState(null)
    useEffect(() => {
        if (ct == "" || cate == "" || pin == "") {
            setSwi(null);
        } else {
            setSwi(swiper)
        }
    }, [ct, cate, pin])
    return (
        <div className="flex flex-col justify-between w-[100%] max-h-[100vh] h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
            <div className="">
                <div className="flex w-[100%] justify-between items-center h-[30px]">
                    <img src={FormLogo} alt="SendMeHugs Form Logo" />
                    <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer" onClick={() => navigate("/fundraising/signin")}>Sign In</div>
                </div>
                <div className="pt-[115px] flex flex-col gap-[43px] ">
                    <div className="flex flex-col gap-[21px]">
                        <h2 className="text-black font-bold text-[21px] font-inter leading-[65.5%]">Where will the funds go?</h2>
                        <p className="text-[14px] leading-5 font-inter">Choose the location where you plan to withdraw your funds.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="relative max-w-[334px] w-[100%] h-[64px]">
                            <select id="countries" {...register("country", { required: "Field is required" })} className="relative w-[100%] outline-none border-b border-b-[#D0D2D5] h-[auto] py-2.5 placeholder:text-[14px] placeholder:leading-5 select-countries" placeholder="Select Country">
                                <option value="IN">India</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>

                        </div>
                        <div className="max-w-[334px] w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                            <input type="number" {...register("pincode", { required: "Field is requiered", maxLength: { value: 6, message: "Pincode have only six digit" }, typeof: Number })} id="pincode" className="step-form-input" placeholder="Eg: 250005" />
                            <label htmlFor="pincode" className="step-form-label">Zip Code</label>
                        </div>

                    </div>
                    <div className="flex flex-col gap-[21px]">
                        <p className="text-black font-[500] text-[16px] font-inter leading-5">What best describes why you're fundraising?</p>
                        <div className="flex flex-wrap gap-[11px]">
                            <input type="radio" className="hidden" id="animals" value="animals" {...register("category", { required: "Field is Required" })} />
                            <label htmlFor="animals" className={`py-1.5 gap-1 flex justify-center items-center w-fit rounded-[36px] font-popins text-[14px] text-center font-[500] leading-6 border border-[#6B6B6B] ${bestDescribes == "animals" ? "bg-[rgba(229,229,229,0.40)]" : ""} px-2`} onClick={() => setBestDescribes("animals")}>Animals</label>
                            <input type="radio" className="hidden" id="business" value="business" {...register("category", { required: "Field is Required" })} />
                            <label htmlFor="business" className={`py-1.5 gap-1 flex justify-center items-center w-fit rounded-[36px] font-popins text-[14px] text-center font-[500] leading-6 border border-[#6B6B6B] ${bestDescribes == "business" ? "bg-[rgba(229,229,229,0.40)]" : ""} px-2`} onClick={() => setBestDescribes("business")}>Business</label>
                            <input type="radio" className="hidden" id="community" value="community" {...register("category", { required: "Field is Required" })} />
                            <label htmlFor="community" className={`py-1.5 gap-1 flex justify-center items-center w-fit rounded-[36px] font-popins text-[14px] text-center font-[500] leading-6 border border-[#6B6B6B] ${bestDescribes == "community" ? "bg-[rgba(229,229,229,0.40)]" : ""} px-2`} onClick={() => setBestDescribes("community")}>Community</label>
                            <input type="radio" className="hidden" id="volunteer" value="volunteer" {...register("category", { required: "Field is Required" })} />
                            <label htmlFor="volunteer" className={`py-1.5 gap-1 flex justify-center items-center w-fit rounded-[36px] font-popins text-[14px] text-center font-[500] leading-6 border border-[#6B6B6B] ${bestDescribes == "volunteer" ? "bg-[rgba(229,229,229,0.40)]" : ""} px-2`} onClick={() => setBestDescribes("volunteer")}>Volunteer</label>
                            <input type="radio" className="hidden" id="environment" value="environment" {...register("category", { required: "Field is Required" })} />
                            <label htmlFor="environment" className={`py-1.5 gap-1 flex justify-center items-center w-fit rounded-[36px] font-popins text-[14px] text-center font-[500] leading-6 border border-[#6B6B6B] ${bestDescribes == "environment" ? "bg-[rgba(229,229,229,0.40)]" : ""} px-2`} onClick={() => setBestDescribes("environment")}>Environment</label>
                            <input type="radio" className="hidden" id="funreals-memorials" value="funreals-memorials" {...register("category", { required: "Field is Required" })} />
                            <label htmlFor="funreals-memorials" className={`py-1.5 gap-1 flex justify-center items-center w-fit rounded-[36px] font-popins text-[14px] text-center font-[500] leading-6 border border-[#6B6B6B] ${bestDescribes == "funreals-memorials" ? "bg-[rgba(229,229,229,0.40)]" : ""} px-2`} onClick={() => setBestDescribes("funreals-memorials")}>Funerals & Memorial</label>
                            <input type="radio" className="hidden" id="ukraine-relief" value="ukraine-relief" {...register("category", { required: "Field is Required" })} />
                            <label htmlFor="ukraine-relief" className={`py-1.5 gap-1 flex justify-center items-center w-fit rounded-[36px] font-popins text-[14px] text-center font-[500] leading-6 border border-[#6B6B6B] ${bestDescribes == "ukraine-relief" ? "bg-[rgba(229,229,229,0.40)]" : ""} px-2`} onClick={() => setBestDescribes("ukraine-relief")}>Ukraine Relief</label>
                            <input type="radio" className="hidden" id="events" value="events" {...register("category", { required: "Field is Required" })} />
                            <label htmlFor="events" className={`py-1.5 gap-1 flex justify-center items-center w-fit rounded-[36px] font-popins text-[14px] text-center font-[500] leading-6 border border-[#6B6B6B] ${bestDescribes == "events" ? "bg-[rgba(229,229,229,0.40)]" : ""} px-2`} onClick={() => setBestDescribes("events")}>Events</label>
                            <input type="radio" className="hidden" id="monthly-bills" value="monthly-bills" {...register("category", { required: "Field is Required" })} />
                            <label htmlFor="monthly-bills" className={`py-1.5 gap-1 flex justify-center items-center w-fit rounded-[36px] font-popins text-[14px] text-center font-[500] leading-6 border border-[#6B6B6B] ${bestDescribes == "monthly-bills" ? "bg-[rgba(229,229,229,0.40)]" : ""} px-2`} onClick={() => setBestDescribes("monthly-bills")}>Monthly Bills</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-buttons flex justify-between items-center pt-5">
                <BackButton swiper={swiper} />
                <ContinueButton swiper={swi} />
            </div>
        </div>
    );
}

export default Step1;