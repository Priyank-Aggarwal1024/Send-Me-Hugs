import React from 'react';

function ContinueButton({ swiper, text }) {
    return (
        <div>
            <div className="lg:py-2 py-1.5 lg:px-3 px-2 flex justify-center items-center gap-1.5 rounded-[36px] bg-gradient-cyan text-white w-fit text-center cursor-pointer font-popins leading-6 lg:text-[16px] text-[14px] font-[500]" onClick={() => swiper?.current?.swiper?.slideNext()}>{text ? text : "Continue"}</div>
        </div>
    );
}

export default ContinueButton;