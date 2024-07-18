import React, { useEffect, useState } from 'react';
import { Footer, FooterBottom, Navbar } from '../components';
import { useForm } from 'react-hook-form';

function GetInTouch(props) {
    const [navOpen, setNavOpen] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted")
    }
    console.log(errors)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={`w-[100%] relative max-w-[100vw] bg-dark-cyan `}>

            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
            <div className="faq-background-circle-design"></div>
            <div className="background-circle-design1 faq-design1"></div>
            <div className="flex flex-col justify-center items-center  py-[64px]  gap-[28px] max-w-[1512px] relative z-[2] mx-auto text-white 2xl:px-[156px] lg:px-[32px] xl:px-[96px] px-[16px] md:py-[96px]">
                <div className="flex flex-col gap-4">
                    <h2 className="font-lato text-[32px] font-bold leading-10 text-center">Get In Touch</h2>
                    <p className="text-[16px] font-[500] font-inter text-center">24/7 We will answer to your questions and problems</p>
                </div>
                <form action="" className="xlg:max-w-[793px] w-full flex flex-col gap-[22px] bg-[rgba(255,255,255,0.06)] p-[10px_16px_24px_16px]" onSubmit={handleSubmit(onSubmit)} method='POST'>
                    <div className="grid xlg:grid-cols-2 gap-[22px]">
                        <div className="form-group h-[64px] flex justify-end flex-col relative">
                            <input type="text" {...register("name", { required: "Field is requiered" })} id="name" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] bg-transparent py-2.5 px-1 placeholder:text-[16px]" placeholder=" " />
                            <label htmlFor="name" className="form-label bg-transparent text-[12px] font-[500] font-inter">Your name</label>
                        </div>
                        <div className="form-group h-[64px] flex justify-end flex-col relative">
                            <input type="email" {...register("email", { required: "Field is requiered" })} id="email" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] bg-transparent py-2.5 px-1 placeholder:text-[16px]" placeholder=" " />
                            <label htmlFor="email" className="form-label bg-transparent text-[12px] font-[500] font-inter">Email</label>
                        </div>
                        <div className="form-group min-h-[64px] flex justify-end flex-col relative xlg:col-span-2">
                            <textarea type="text" {...register("message", { required: "Field is requiered" })} id="message" className="form-input text-[14px] h-auto outline-none border-b border-[#D0D2D5] bg-transparent py-2.5 px-1 leading-5 placeholder:text-[16px]" placeholder=" " ></textarea>
                            <label htmlFor="message" className="form-label textarea-label bg-transparent text-[12px] font-[500] font-inter">Your message here</label>
                        </div>
                        <div className="ml-auto xlg:col-span-2 opacity-50">
                            <button className="bg-gradient-cyan bg-gradient-cyan-hover font-popins text-[16px] w-[200px] p-[10px_14px] rounded-[36px]">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="bg-[rgba(53,85,92,0.30)]">
                <Footer />
                <div className="px-4 md:px-0 my-3">
                    <div className="h-[1px] w-[100%] bg-[#D9D9D9]"></div>
                </div>
                <FooterBottom />
            </div>
        </div>
    );
}

export default GetInTouch;