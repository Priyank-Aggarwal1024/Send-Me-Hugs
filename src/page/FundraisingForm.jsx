import React, { useRef, useState } from 'react';
import { ImgFund } from '../assets';
import { useForm } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8 } from '../components';

function FundraisingForm(props) {
    const { register, handleSubmit, setValue, getValues, watch, formState: { errors, isSubmitted } } = useForm();
    const swiper = useRef()
    const onSubmit = (data) => {
        console.log("Form Submitted ", data);
    }
    const [selectedFile, setSelectedFile] = useState(null);
    console.log(errors)
    return (
        <>
            <div className="fund-raising-form grid grid-cols-2 h-[100vh]">
                <div className="fund-raising-form-left h-[100%] hidden xlg:block">
                    <img className="bg-contain h-[100vh] w-[100%]" src={ImgFund} alt="Fundraising Form Plant Money Image" />
                </div>
                <form className="fund-raising-form-right col-span-2 xlg:col-span-1" action="#" method="POST" onSubmit={handleSubmit(onSubmit)} >
                    <Swiper modules={[Navigation, Pagination, A11y]} allowTouchMove={false} slidesPerView="auto" className="swiper" ref={swiper}>
                        <SwiperSlide>
                            <Step1 swiper={swiper} register={register} watch={watch} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Step2 swiper={swiper} register={register} watch={watch} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Step3 swiper={swiper} register={register} watch={watch} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Step4 swiper={swiper} selectedFile={selectedFile} setSelectedFile={setSelectedFile} register={register} watch={watch} setValue={setValue} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Step5 swiper={swiper} register={register} setValue={setValue} watch={watch} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Step6 swiper={swiper} selectedFile={selectedFile} getValues={getValues} setValue={setValue} register={register} watch={watch} isSubmitted={isSubmitted} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Step7 swiper={swiper} register={register} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Step8 swiper={swiper} register={register} />
                        </SwiperSlide>
                    </Swiper>
                </form>
            </div>
        </>
    );
}

export default FundraisingForm;