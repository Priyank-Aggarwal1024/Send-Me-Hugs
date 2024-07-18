import React from 'react';
import { Link } from 'react-router-dom';
import { discord, instagram, privacy, telegram, twitter, youtube } from '../../assets';

function FooterBottom(props) {
    return (
        <>
            {/* max-w-[1512px]  */}
            <div className="mx-auto 2xl:px-[196px] lg:px-[32px] xl:px-[96px] px-[16px] min-h-[34px] flex justify-between text-white md:pb-3 pb-[22px] items-center flex-col md:flex-row gap-[22px]">
                <div className="font-inter text-[12px] font-[400] leading-6 flex items-center flex-col md:flex-row">
                    <span className="font-inter text-[12px] font-[400] leading-6 hidden xl:inline-block">© 2010-2024 GoFundMe</span>
                    <Link className="p-[5px_9px]">Terms</Link>
                    <Link className="p-[5px_9px]">Privacy</Link>
                    <Link className="p-[5px_9px]">Legal</Link>
                    <Link className="p-[5px_9px]">Accessibility Statement</Link>
                    <img src={privacy} alt="Privacy" />
                </div>
                <div className="flex gap-5 items-center">
                    <p className="font-inter text-[14px] font-[400] leading-4">Follow us</p>
                    <div className="flex items-center gap-[13px]">
                        <img src={discord} alt="Discord" />
                        <img src={telegram} alt="telegram" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
            </div>
            <span className="font-inter text-[12px] font-[400] leading-6 block xl:hidden text-white mx-auto w-fit pb-3">© 2010-2024 GoFundMe</span>
        </>
    );
}

export default FooterBottom;