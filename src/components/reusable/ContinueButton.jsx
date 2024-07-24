import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ContinueButton({ swiper, text, isSubmitted }) {
    useEffect(() => {
        console.log(isSubmitted)
        if (isSubmitted && text == "Verify To Launch") {
            swiper.current.swiper.slideTo(6);
        }
    }, [isSubmitted])
    return (
        <div>
            {text != "Verify To Launch" ? <div className="lg:py-2 py-1.5 lg:px-3 px-2 flex justify-center items-center gap-1.5 rounded-[36px] bg-gradient-cyan text-white w-fit text-center cursor-pointer font-popins leading-6 lg:text-[16px] text-[14px] font-[500]" onClick={() => swiper?.current?.swiper?.slideNext()}>{text ? text : "Continue"}</div> : <button type="submit" className="lg:py-2 py-1.5 lg:px-3 px-2 flex justify-center items-center gap-1.5 rounded-[36px] bg-gradient-cyan text-white w-fit text-center cursor-pointer font-popins leading-6 lg:text-[16px] text-[14px] font-[500]">{text ? text : "Continue"}</button>}
        </div>
    );
}

export default ContinueButton;