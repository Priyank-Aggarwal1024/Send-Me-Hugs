import React, { useEffect, useState } from 'react';
import BackButton from './BackButton';
import ContinueButton from './ContinueButton';
import { FormLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

function Step2({ swiper, register, watch }) {
    const [fF, setFf] = useState(null)
    const navigate = useNavigate()
    const [swi, setSwi] = useState(null)
    useEffect(() => {
        if (fF) {
            setSwi(swiper);
        } else {
            setSwi(null)
        }
    }, [fF])

    return (
        <div className="create-popup-slide flex flex-col justify-between w-[100%] max-h-[100vh] h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
            <div className="flex flex-col gap-[44px]">
                <div className="create-popup-hide flex w-[100%] justify-between items-center h-[30px]">
                    <img src={FormLogo} alt="SendMeHugs Form Logo" />
                    <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer" onClick={() => navigate("/fundraising/signin")}>Sign In</div>
                </div>
                <p className="text-black text-[16px] font-bold leading-6 font-inter">1 of 5</p>
                <div className="flex flex-col gap-[43px]">
                    <h2 className="text-black font-bold text-[21px] font-inter leading-[65.5%]">Who are you fundraising for?</h2>
                    <div className="flex flex-col gap-5">
                        <input type="radio" className="hidden" id="yourself" value="yourself" {...register("fundraising-for", { required: "Field is Required" })} />
                        <label htmlFor="yourself" className={`pt-2 pb-3 rounded-lg border border-[#D0D0D0]  ${fF == "yourself" ? "bg-[#e5e5e566] border-[2px]" : "bg-[#ffffff66]"}`} onClick={() => setFf("yourself")}>
                            <div className="max-w-[329px] flex flex-col justify-center gap-1.5 px-[11px]">
                                <p className="text-black text-[16px]  font-bold leading-6 font-inter">Yourself</p>
                                <p className="text-black font-inter text-[14px] leading-5">Funds are delivered to your bank account for your own use</p>
                            </div>
                        </label>
                        <input type="radio" className="hidden" id="someone-else" value="someone-else" {...register("fundraising-for", { required: "Field is Required" })} />
                        <label htmlFor="someone-else" className={`pt-2 pb-3 rounded-lg border border-[#D0D0D0]  ${fF == "someone-else" ? "bg-[#e5e5e566] border-[2px]" : "bg-[#ffffff66]"}`} onClick={() => setFf("someone-else")}>
                            <div className="max-w-[329px] flex flex-col justify-center gap-1.5 px-[11px]">
                                <p className="text-black text-[16px]  font-bold leading-6 font-inter">Someone else</p>
                                <p className="text-black font-inter text-[14px] leading-5">You’ll invite a beneficiary to receive funds or distribute them yourself</p>
                            </div>
                        </label>
                        <input type="radio" className="hidden" id="charity" value="charity" {...register("fundraising-for", { required: "Field is Required" })} />
                        <label htmlFor="charity" className={`pt-2 pb-3 rounded-lg border border-[#D0D0D0]  ${fF == "charity" ? "bg-[#e5e5e566] border-[2px]" : "bg-[#ffffff66]"}`} onClick={() => setFf("charity")}>
                            <div className="max-w-[329px] flex flex-col justify-center gap-1.5 px-[11px]">
                                <p className="text-black text-[16px]  font-bold leading-6 font-inter">Charity</p>
                                <p className="text-black font-inter text-[14px] leading-5">Funds are delivered to your chosen nonprofit for you</p>
                            </div>
                        </label>
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

export default Step2;