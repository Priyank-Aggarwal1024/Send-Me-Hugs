import React, { useEffect, useRef, useState } from 'react';
import { bd3, bdlogo, larrow, rarrow } from '../../assets';
import CarouselCard from './CarouselCard';

function ExampleFundraiser(props) {
    const [pos, setPos] = useState(0);
    const nextHandle = () => {
        if (pos == 4) {
            setPos(0)
        } else {
            setPos(pos + 1)
        }
    }
    const prevHandle = () => {
        if (pos == 0) {
            setPos(4)
        } else {
            setPos(pos - 1)
        }
    }
    const timer = useRef(null);

    let id;
    useEffect(() => {
        timer.current = setInterval(nextHandle, 5000);
        return () => {
            if (timer.current !== null) clearInterval(timer.current);
        };
    },)
    return (
        <>
            <div className="mt-[66px] max-w-[1512px] mx-auto 2xl:px-[156px] lg:px-[33px] px-[16px] xl:px-[96px] relative ">
                <div className="background-design3">
                    <img src={bd3} alt="background-design3" />
                </div>
                <div className="background-logo">
                    <img src={bdlogo} alt="background-logo" />
                </div>
                <div className="background-circle-design3"></div>

                <div className="mx-w-[1093px] mx-auto flex flex-col gap-[71px] text-white relative  z-[2]">
                    <div className="md:max-w-[648px] mx-auto w-[100%]">
                        <h3 className="font-lato sm:text-[36px] xss:text-[28px] text-[32px] font-[700] text-center pb-[32px]">Examples of fundraisers happening on SendMeHugs </h3>
                        <div className="overflow-auto max-w-[100%]  rounded-[100px] ">
                            <div className="mx-auto w-fit p-2.5 flex gap-1 sm:gap-6 items-center bg-[rgba(255,255,255,0.10)] rounded-[100px] ">
                                <p className={`${pos == 0 && "bg-gradient-cyan "} text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]`}>Medical</p>
                                <p className={`${pos == 1 && "bg-gradient-cyan "}text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]`}>Sports</p>
                                <p className={`${pos == 2 && "bg-gradient-cyan "}text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]`}>Memorial</p>
                                <p className={`${pos == 3 && "bg-gradient-cyan "}text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]`}>Charity</p>
                                <p className={`${pos == 4 && "bg-gradient-cyan "}text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px] font-popins font-[500]`}>Education</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex xlg:items-center xlg:justify-between justify-center">
                        <div className="xlg:block hidden" onClick={prevHandle}>
                            <img src={larrow} alt="Left Arrow" />
                        </div>
                        {pos == 0 ? <CarouselCard nextHandle={nextHandle} prevHandle={prevHandle} />
                            : pos == 1 ? <CarouselCard nextHandle={nextHandle} prevHandle={prevHandle} />
                                : pos == 2 ? <CarouselCard nextHandle={nextHandle} prevHandle={prevHandle} />
                                    : pos == 3 ? <CarouselCard nextHandle={nextHandle} prevHandle={prevHandle} />
                                        : <CarouselCard nextHandle={nextHandle} prevHandle={prevHandle} />
                        }
                        <div className="xlg:block hidden" onClick={nextHandle}>
                            <img src={rarrow} alt="Right Arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExampleFundraiser;