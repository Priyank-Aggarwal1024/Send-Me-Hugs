import React from 'react';
import { facebook, instagram, twitter } from '../../assets';

function Card({ card }) {
    return (
        <div className={`flex flex-col p-3 gap-[27px] text-white font-inter bg-[rgba(50,87,101,0.50)] rounded-[8px] ${card.clas && card.clas}`}>
            <div className="">
                <img className="w-full" src={card.src} alt={card.heading} />
                <h3 className="pt-4 pb-3 font-[700] text-[20px]">{card.heading}</h3>
                <p className="font-[400] text-[14px]">{card.desc}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="py-2 px-3 flex justify-center items-center font-popins text-[16px] bg-[#648997] font-[500] gap-[6px] rounded-[36px] w-fit">Donate</div>
                <div className="font-inter text-[14px] font-[500] flex justify-center items-center gap-5">
                    <p>Share</p>
                    <div className="flex justify-center items-center gap-[13px]">
                        <img src={instagram} alt="Instagram Icon" />
                        <img src={twitter} alt="Twitter Icon" />
                        <img src={facebook} alt="Facebook Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;