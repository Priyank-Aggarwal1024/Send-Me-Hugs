import React, { useEffect, useState } from 'react';
import ContinueButton from './ContinueButton';
import BackButton from './BackButton';
import { FormLogo, germany, india, japan, uk, usa } from '../../assets';
import { useNavigate } from 'react-router-dom';

function Step10({ register, setTab, tab, setValue }) {
    const navigate = useNavigate()
    const [dropdown, setDropdown] = useState(false);
    const [img, setImg] = useState(india)
    const [country, setCountry] = useState("IN")
    useEffect(() => {
        setValue("country", country);
    }, [country])
    return (
        <div className="flex flex-col w-[100%] max-h-[100vh] justify-between h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
            <div className="">
                <div className="flex w-[100%] justify-between items-center h-[30px] pb-[71px]">
                    <img src={FormLogo} alt="SendMeHugs Form Logo" />
                    <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer" onClick={() => navigate("/fundraising/signin")}>Sign In</div>
                </div>
                <div className="flex flex-col gap-[43px]">
                    <div className="flex flex-col gap-5 max-w-[415px]">
                        <h2 className="text-black font-bold text-[21px] font-inter leading-[101%]">Keep your account safe</h2>
                        <p className="font-popins text-[14px] leading-6 text-[#676767]">Add your phone number for another layer of security</p>
                    </div>
                    <div className="flex flex-col gap-5 relative    ">
                        <div className="max-w-[334px] w-[100%] items-end flex  gap-[27px]">
                            <input type="text" {...register("country")} className="hidden" />
                            <div className="gap-2 step-form-div flex items-center relative overflow-auto" onClick={() => setDropdown(!dropdown)}>
                                <img src={img} alt="Selected Country Code" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14 8L10 12L6 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>
                            {
                                dropdown && <div className="absolute flex flex-col gap-2 -bottom-[calc(100%_+_70px)] z-[2] bg-white left-0 w-[44px] ">
                                    <div className="gap-2 h-fit flex items-center px-2 hover:bg-[rgba(0,0,0,.2)] py-0.5"
                                        onClick={() => { setDropdown(false); setImg(india); setCountry("IN") }}>
                                        <img src={india} alt="India" />
                                    </div>
                                    <div className="gap-2 h-fit flex items-center px-2 hover:bg-[rgba(0,0,0,.2)] py-0.5"
                                        onClick={() => { setDropdown(false); setImg(usa); setCountry("US") }}>
                                        <img src={usa} alt="usa" />
                                    </div>
                                    <div className="gap-2 h-fit flex items-center px-2 hover:bg-[rgba(0,0,0,.2)] py-0.5"
                                        onClick={() => { setDropdown(false); setImg(uk); setCountry("UK") }}>
                                        <img src={uk} alt="uk" />
                                    </div>
                                    <div className="gap-2 h-fit flex items-center px-2 hover:bg-[rgba(0,0,0,.2)] py-0.5"
                                        onClick={() => { setDropdown(false); setImg(japan); setCountry("JA") }}>
                                        <img src={japan} alt="japan" />
                                    </div>
                                    <div className="gap-2 h-fit flex items-center px-2 hover:bg-[rgba(0,0,0,.2)] py-0.5"
                                        onClick={() => { setDropdown(false); setImg(germany); setCountry("GE") }}>
                                        <img src={germany} alt="germany" />
                                    </div>
                                </div>
                            }
                            <div className=" h-[64px] step-form-div flex justify-between flex-col relative text-[#868C93]">
                                <label htmlFor="phone" className="font-roboto text-[14px] font-[500] leading-5">Phone number</label>
                                <input type="phone" {...register("phone", { required: "Field is requiered" })} id="amount" className="font-roboto outline-none border-none text-[14px] font-[400] leading-5" placeholder="(+140)58665888" />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-[21px]">
                        <p className="text-black font-[500] text-[16px] font-inter leading-5">What best describes why you're fundraising?</p>
                        <div className="flex gap-[21px]">
                            <div className="flex gap-[12px]">
                                <input type="radio" className="accent-[#298D7C]" id="send-opt-1" value="text-message" {...register("send-opt", { required: "Field is Required" })} />
                                <label htmlFor="send-opt-1" className="font-inter text-[14px] font-[400] leading-6">Text Message</label>

                            </div>
                            <div className="flex gap-[12px]">
                                <input type="radio" className="accent-[#298D7C]" id="send-opt-2" value="voice-call" {...register("send-opt", { required: "Field is Required" })} />
                                <label htmlFor="send-opt-2" className="font-inter text-[14px] font-[400] leading-6">Voice Call</label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-buttons flex justify-between items-center ">
                <div className="lg:py-2 py-1.5 lg:px-3 px-2 flex justify-center items-center gap-1.5 rounded-[36px] border-[2px_solid_#298D7C] bg-[rgba(229,248,244,0.70)] w-fit cursor-pointer text-[#298D7C] text-center font-popins leading-6 lg:text-[16px] text-[14px] font-[500]">Back</div>
                <div className="lg:py-2 py-1.5 lg:px-3 px-2 flex justify-center items-center gap-1.5 rounded-[36px] bg-gradient-cyan text-white w-fit text-center cursor-pointer font-popins leading-6 lg:text-[16px] text-[14px] font-[500]" onClick={() => setTab("/phone-verification/otp")}>Continue</div>
            </div>
        </div>
    );
}

export default Step10;