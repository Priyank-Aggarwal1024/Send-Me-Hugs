import React from 'react';
import { useForm } from 'react-hook-form';
import { cross } from '../../assets';

function WidhdrawPopup({ widhdraw, setWidhdraw }) {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted ", data);
    }
    console.log(errors)
    return (
        <div className="popup-animation max-w-[666px] w-[90%] min-h-[350px] p-5 bg-white flex-col justify-start items-end gap-[43px] inline-flex">
            <div className="self-stretch h-[49px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch justify-between items-start inline-flex">
                    <div className="opacity-90 text-center text-[#112230] text-xl font-bold font-inter leading-7">Withdraw funds</div>
                    <div className="w-6 h-6 relative" onClick={() => setWidhdraw(!widhdraw)}>
                        <img src={cross} alt="Cancel" />
                    </div>
                </div>
                <div className="self-stretch h-px bg-[#d9d9d9]" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="self-stretch  flex-col justify-start items-start flex">
                <div className="self-stretch opacity-90 text-center text-[#112230] text-base font-semibold font-inter leading-7">Withdraw funds for ‘’Help homeless people” fundraising</div>
                <div className="self-stretch py-[17px] flex-col justify-start items-center gap-11 flex">
                    <div className="self-stretch h-[76px] flex-col justify-start items-center gap-3 flex">
                        <div className="h-10 max-w-[394px] w-full flex-col justify-start items-start gap-2 flex">
                            <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
                                <div className="self-stretch py-2.5 bg-white border-b border-[#d0d2d5] justify-start items-start gap-3 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="justify-start items-center gap-0.5 flex">
                                            <div className="text-[#2c2f32] text-sm font-normal font-roboto leading-tight">$ 63,589.02</div>
                                        </div>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>
                        <div className="justify-center items-center gap-2 inline-flex">
                            <div className="w-6 h-6 p-[3px] justify-center items-center flex">
                                <div className="w-[18px] h-[18px] relative bg-white
                                 rounded flex-col justify-start items-start flex">
                                    <input type="checkbox" id="fee" className="w-[18px] h-[18px] text-[white] accent-[#1dd2b4] rounded" />
                                </div>
                            </div>
                            <label htmlFor="fee" className="text-start text-[#6d6d6d] text-sm font-normal font-roboto leading-tight">I understand that Send me hugs should take  10% fee service</label>
                        </div>
                    </div>
                    <div className="justify-center gap-3 w-full sm:flex-row flex-col items-center inline-flex">
                        <div className="px-2 py-1.5 sm:w-fit w-full bg-[#e5f8f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 flex">
                            <div className="px-1 cursor-pointer justify-start items-start gap-2.5 flex" onClick={() => setWidhdraw(!widhdraw)}>
                                <div className="text-center text-[#288d7c] text-sm font-medium font-popins leading-normal">Cancel</div>
                            </div>
                        </div>
                        <div className="px-2 py-1.5 sm:w-fit w-full bg-gradient-to-b from-[#2dd6b4] to-[#21806f] rounded-[36px] justify-center items-center gap-1 flex">
                            <div className="px-1 cursor-pointer justify-start items-start gap-2.5 flex">
                                <button type='submit' className="text-center text-white text-sm font-medium font-popins leading-normal">Withdraw</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default WidhdrawPopup;