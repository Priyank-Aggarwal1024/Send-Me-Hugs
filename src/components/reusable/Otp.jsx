import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormLogo } from '../../assets';

function Otp({ register, setTab }) {
    const navigate = useNavigate()
    const onChange = (e, item) => {
        let val = +e.target.value;
        if (val >= 0 || val <= 9) {
            document.getElementById(`dig-${item != 6 ? item + 1 : item}`).focus()
        } else {
            e.target.value = ""
        }
    }
    return (
        <div className="flex flex-col w-[100%] max-h-[100vh] justify-between h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
            <div className="">
                <div className="flex w-[100%] justify-between items-center h-[30px] pb-[71px]">
                    <img src={FormLogo} alt="SendMeHugs Form Logo" />
                    <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer" onClick={() => navigate("/fundraising/signin")}>Sign In</div>
                </div>
                <div className="flex flex-col gap-[43px]">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-black font-bold text-[21px] font-inter leading-[101%]">Verification code</h2>
                        <p className="font-popins text-[14px] leading-6 text-[#676767]">Add your phone number for another layer of security</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3">
                            {[1, 2, 3, 4, 5, 6].map((item, idx) => <input key={item} id={`dig-${item}`} className="flex justify-center items-center w-[44px] h-[44px] border border-[#E5E5E5] outline-none focus:border-[#298D7C] focus:shadow-[0px_0px_0px_2px_#D0EDE6] rounded-[4px] focus:text-[rgb(41,141,124)] py-2 px-3 text-[18px] font-[600] font-inter leading-7 text-black" type='phone' {...register(`dig-${item}`, { required: "Field is required", type: Number, maxLength: { value: 1, message: "Max Lenght is only 1" } })} pattern="\d{1}" maxLength={1} onChange={(e) => onChange(e, item)} />)
                            }
                        </div>
                        <div className="flex flex-col gap-[21px] ">
                            <p className="text-[14px]  font-inter leading-5 text-black">This code will expire in 10 minutes. Need a new code?
                            </p>
                            <div className="flex gap-[21px] text-[#298D7C] text-center font-popins text-[14px] font-[500] leading-6">
                                <Link to="/">Resend Code</Link>
                                <p className="" onClick={() => setTab("/phone-verification")}>Change method</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bottom-buttons flex justify-end items-center ">
                <button type='submit' className="lg:py-2 py-1.5 lg:px-3 px-2 flex justify-center items-center gap-1.5 rounded-[36px] bg-gradient-cyan text-white w-fit text-center cursor-pointer font-popins leading-6 lg:text-[16px] text-[14px] font-[500]">Verify</button>
            </div>
        </div>

    );
}

export default Otp;