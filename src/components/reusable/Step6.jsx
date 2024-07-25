import React, { useState } from 'react';
import ContinueButton from './ContinueButton';
import BackButton from './BackButton';
import { edit, FormLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

function Step6({ swiper, setValue, selectedFile, watch, isSubmitted }) {
    const navigate = useNavigate()
    const title = watch("title");
    const amount = watch("amount");
    const category = watch("category");
    const pincode = watch("pincode");
    const country = watch("country");
    const story = watch("story");
    const defaultLoc = `${pincode} - ${country}`

    const [checkedTitle, setCheckedTitle] = useState(false)
    const [checkedAmount, setCheckedAmount] = useState(false)
    const [checkedCategory, setCheckedCategory] = useState(false)
    const [checkedStory, setCheckedStory] = useState(false)
    return (
        <div className="flex create-popup-slide flex-col justify-between w-[100%] max-h-[100vh] h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
            <div className="flex flex-col gap-[44px]">
                <div className="create-popup-hide flex w-[100%] justify-between items-center h-[30px]">
                    <img src={FormLogo} alt="SendMeHugs Form Logo" />
                    <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer" onClick={() => navigate("/fundraising/signin")}>Sign In</div>
                </div>
                <p className="text-black text-[16px] font-bold leading-6 font-inter">5 of 5</p>
                <div className="flex flex-col gap-[43px]">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-black font-bold text-[21px] font-inter leading-[101%]">You’re ready to start fundraising</h2>
                        <p className="font-popins text-[14px] leading-6 text-[#676767]">Preview what your fundraiser will look like to donors or revise any details.</p>
                    </div>
                    <div className="flex flex-col gap-[43px]">
                        <div className="w-[100%] h-[360px] rounded-lg">
                            {selectedFile && <img src={URL.createObjectURL(selectedFile)} className="w-[100%] h-[100%] rounded-lg" alt="" />}
                        </div>
                        <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative" onBlur={() => setCheckedTitle(false)}>
                            <input type="text" id="title-2" className={`step-form-input ${!checkedTitle && "hidden"}`} defaultValue={title} onChange={(e) => setValue("title", e.target.value)} />
                            <p className={`step-form-input ${checkedTitle && "hidden"}`}>{title}</p>
                            <label htmlFor="title-2" className="step-form-label w-[80%]">Fundraiser title</label>
                            <img src={edit} alt='Edit' className="absolute right-0 bottom-2.5 text-[14px] leading-5 text-[#868C93] font-roboto bg-white w-[15px] text-right" onClick={() => setCheckedTitle(true)} />
                        </div>
                        <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative" onBlur={() => setCheckedAmount(false)}>
                            <input type="number" id="amount-2" className={`step-form-input ${!checkedAmount && "hidden"}`} defaultValue={amount} onChange={(e) => setValue("amount", e.target.value)} />
                            <p className={`step-form-input ${checkedAmount && "hidden"}`}>$ {amount}</p>
                            <label htmlFor="amount-2" className="step-form-label w-[80%]">Goal</label>
                            <img src={edit} alt='Edit' className="absolute right-0 bottom-2.5 text-[14px] leading-5 text-[#868C93] font-roboto bg-white w-[15px] text-right" onClick={() => setCheckedAmount(true)} />
                        </div>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[43px]">

                            <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                <input type="text" id="category-2" className={`step-form-input ${!checkedCategory && "hidden"}`} defaultValue={category} onChange={(e) => setValue("amount", e.target.value)} />
                                <p className={`step-form-input ${checkedCategory && "hidden"}`}>{category}</p>
                                <label htmlFor="category-2" className="step-form-label w-[80%]">Category</label>
                                <img src={edit} alt='Edit' className="absolute right-0 bottom-2.5 text-[14px] leading-5 text-[#868C93] font-roboto bg-white w-[15px] text-right" onClick={() => setCheckedCategory(true)} />
                            </div>

                            <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                                <p className={`step-form-input`}>{defaultLoc}</p>
                                <label htmlFor="location" className="step-form-label w-[80%]">Location</label>
                                <img src={edit} alt='Edit' className="absolute right-0 bottom-2.5 text-[14px] leading-5 text-[#868C93] font-roboto bg-white w-[15px] text-right" onClick={() => swiper.current.swiper.slideTo(0)} />
                            </div>

                        </div>
                        <div className="w-[100%] min-h-[64px] step-form-div flex justify-between flex-col relative">
                            <label htmlFor="story-2" className="w-[100%] font-roboto text-[14px] font-[500] leading-5 text-[#686F78]">Story</label>
                            <textarea type="text" id="story-2" className={`step-form-input ${!checkedStory && "hidden"}`} defaultValue={story} onChange={(e) => setValue("story", e.target.value)} />
                            <p className={`step-form-input ${checkedStory && "hidden"}`}>{story}</p>
                            <img src={edit} alt='Edit' className="absolute right-0 top-2.5 text-[14px] leading-5 text-[#868C93] font-roboto bg-white w-[15px] text-right" onClick={() => setCheckedStory(true)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-buttons flex justify-between items-center pt-5">
                <BackButton swiper={swiper} text="Preview" />
                <ContinueButton swiper={swiper} text="Verify To Launch" isSubmitted={isSubmitted} />
            </div>
        </div>
    );
}

export default Step6;