import React from 'react';
import ContinueButton from './ContinueButton';
import BackButton from './BackButton';
import { FormLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

function Step6({ swiper, register }) {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col justify-between w-[100%] max-h-[100vh] h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
            <div className="">
                <div className="flex w-[100%] justify-between items-center h-[30px]">
                    <img src={FormLogo} alt="SendMeHugs Form Logo" />
                    <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer" onClick={() => navigate("/fundraising/signin")}>Sign In</div>
                </div>
            </div>
            <div className="bottom-buttons flex justify-between items-center ">
                <BackButton swiper={swiper} />
                <ContinueButton swiper={swiper} />
            </div>
        </div>
    );
}

export default Step6;