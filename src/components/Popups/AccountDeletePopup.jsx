import React from 'react';
import { cross } from '../../assets';

function AccountDeletePopup({ deleteAccount, setDeleteAccount }) {
    return (
        <div className="popup-animation max-w-[666px] w-[90%] p-5 bg-white flex-col justify-start items-center gap-[104px] inline-flex">
            <div className="self-stretch h-6 flex-col justify-start items-start gap-5 flex">
                <div className="w-[626px] justify-end items-start gap-[43px] inline-flex">
                    <div className="w-6 h-6 relative" onClick={() => setDeleteAccount(!deleteAccount)}>
                        <img src={cross} alt="Cancel" />
                    </div>
                </div>
            </div>
            <div className="self-stretch h-[130px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[60px] flex-col justify-start items-center gap-3 flex">
                    <div className="self-stretch opacity-90 text-center text-[#112230] text-xl font-bold font-['Inter'] leading-7">Are you sure you want to delete your account?</div>
                    <div className="self-stretch text-center text-[#6d6d6d] text-sm font-normal font-['Roboto'] leading-tight">All your data according to this account will be deleted</div>
                </div>
                <div className="self-stretch h-[70px] py-[17px] flex-col justify-start items-center gap-11 flex">
                    <div className="self-stretch justify-center items-start gap-3 inline-flex">
                        <div className="px-2 py-1.5 cursor-pointer rounded-[36px] border-2 border-[#ff4f49] justify-center items-center gap-1 flex">
                            <div className="px-1 justify-start items-start gap-2.5 flex">
                                <div className="text-center text-[#ff4f49] text-sm font-medium font-['Poppins'] leading-normal">Delete Account</div>
                            </div>
                        </div>
                        <div className="h-9 px-2 py-1.5 w-[138px] cursor-pointer bg-gradient-to-b from-[#2dd6b4] to-[#21806f] rounded-[36px] justify-center items-center gap-1 flex" onClick={() => setDeleteAccount(!deleteAccount)}>
                            <div className="px-1 justify-start items-start gap-2.5 flex">
                                <div className="text-center text-white text-sm font-medium font-['Poppins'] leading-normal">Cancel</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountDeletePopup;