import React from 'react';

function OptionsPopup(props) {
    return (
        <>

            <div className="w-[131px] h-28 p-1 bg-white shadow flex-col justify-start items-center gap-1 inline-flex">
                <div className="group self-stretch h-8 p-2.5 bg-white hover:bg-[#f0f0f0] justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-start gap-3 flex">
                        <div className="group-hover:text-[#5e5e5e] text-[#1b2a3d] text-xs font-normal group-hover:font-semibold font-['Inter'] leading-tight">Delete</div>
                    </div>
                </div>
                <div className="group self-stretch h-8 p-2.5 bg-white hover:bg-[#f0f0f0] justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-start gap-3 flex">
                        <div className="group-hover:text-[#5e5e5e] text-[#1b2a3d] text-xs font-normal group-hover:font-semibold font-['Inter'] leading-tight">Option 2</div>
                    </div>
                </div>
                <div className="group self-stretch h-8 p-2.5 bg-white hover:bg-[#f0f0f0] justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-start gap-3 flex">
                        <div className="group-hover:text-[#5e5e5e] text-[#1b2a3d] text-xs font-normal group-hover:font-semibold font-['Inter'] leading-tight">Option 3</div>
                    </div>
                </div>

            </div></>
    );
}

export default OptionsPopup;