import React from 'react';
import { ngo1, ngo2, ngo3, of1, of2, of3 } from '../../assets';
import Card from '../reusable/Card';

function Fundraising(props) {
    const oFundraising = [
        {
            clas: "",
            src: of1,
            heading: "We need help with this case",
            desc: "Click the ‘Start a GoFundMe’ button to get started. You’ll be guided by prompts to add fundraiser ."
        },
        {
            clas: "",
            src: of2,
            heading: "We need help with this case",
            desc: "Click the ‘Start a GoFundMe’ button to get started. You’ll be guided by prompts to add fundraiser ."
        },
        {
            clas: "",
            src: of3,
            heading: "We need help with this case",
            desc: "Click the ‘Start a GoFundMe’ button to get started. You’ll be guided by prompts to add fundraiser ."
        }, {

            clas: "xl:hidden",
            src: of3,
            heading: "We need help with this case",
            desc: "Click the ‘Start a GoFundMe’ button to get started. You’ll be guided by prompts to add fundraiser ."
        }
    ]
    const ngo = [
        {
            clas: "",
            src: ngo1,
            heading: "NGO need help with this case",
            desc: "Click the ‘Start a GoFundMe’ button to get started. You’ll be guided by prompts to add fundraiser ."
        },
        {
            clas: "",
            src: ngo2,
            heading: "NGO need help with this case",
            desc: "Click the ‘Start a GoFundMe’ button to get started. You’ll be guided by prompts to add fundraiser ."
        },
        {
            clas: "",
            src: ngo3,
            heading: "NGO need help with this case",
            desc: "Click the ‘Start a GoFundMe’ button to get started. You’ll be guided by prompts to add fundraiser ."
        },
        {
            clas: "xl:hidden",
            src: ngo1,
            heading: "NGO need help with this case",
            desc: "Click the ‘Start a GoFundMe’ button to get started. You’ll be guided by prompts to add fundraiser ."
        }
    ]
    return (
        <>
            <div className="w-[100%] px-4 sm:px-[34px] text-white max-w-[1200px] mx-auto flex flex-col gap-[25px]">
                <div className="flex flex-col gap-6">
                    <h2 className="font-inter font-[700] md:text-[32px] text-[24px] leading-[36px] text-start -tracking-[.64px]">Ongoing Fundraising</h2>
                    <div className="grid xl:grid-cols-3 gap-5 md:grid-cols-2">
                        {
                            oFundraising.map((card, index) => <Card key={index} card={card} />)
                        }
                    </div>
                    <div className="ml-auto flex py-2 px-3 gap-1.5 items-center">
                        <p className="font-popins text-[16px] font-[500]">See All</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path d="M4.09961 8.9999L14.8996 8.9999M14.8996 8.9999L11.0812 5.3999M14.8996 8.9999L11.0812 12.5999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="font-inter font-[700] md:text-[32px] text-[24px] leading-[36px] -tracking-[.64px] text-start">NGO’s that you can donate</h2>
                    <div className="grid xl:grid-cols-3 gap-5 md:grid-cols-2">
                        {
                            ngo.map((card, index) => <Card key={index} card={card} />)
                        }
                    </div>
                    <div className="ml-auto flex py-2 px-3 gap-1.5 items-center">
                        <p className="font-popins text-[16px] font-[500]">See All</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path d="M4.09961 8.9999L14.8996 8.9999M14.8996 8.9999L11.0812 5.3999M14.8996 8.9999L11.0812 12.5999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Fundraising;