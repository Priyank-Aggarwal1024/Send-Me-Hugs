import React, { useState } from 'react';
import { ImgFund } from '../assets';
import { useForm } from 'react-hook-form';
import { Otp, Step10 } from '../components';

function PhoneVerification({ children }) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted ", data);
    }
    const [tab, setTab] = useState("/phone-verification");
    console.log(errors)
    return (
        <>
            <div className="fund-raising-form grid grid-cols-2 h-[100vh]">
                <div className="fund-raising-form-left h-[100%] hidden xlg:block">
                    <img className="bg-contain h-[100vh] w-[100%]" src={ImgFund} alt="Fundraising Form Plant Money Image" />
                </div>
                <form className="fund-raising-form-right col-span-2 xlg:col-span-1" action="#" method="POST" onSubmit={handleSubmit(onSubmit)} >

                    {
                        tab == "/phone-verification" ? <Step10 setValue={setValue} register={register} setTab={setTab} tab={tab} /> :
                            <Otp register={register} setTab={setTab} tab={tab} />
                    }

                </form>
            </div>
        </>
    );
}

export default PhoneVerification;