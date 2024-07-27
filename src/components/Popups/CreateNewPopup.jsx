import React, { useRef, useState } from 'react';
import { cross } from '../../assets';
import { useForm } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import Step1 from '../reusable/Step1';
import Step2 from '../reusable/Step2';
import Step3 from '../reusable/Step3';
import Step4 from '../reusable/Step4';
import Step5 from '../reusable/Step5';
import Step6 from '../reusable/Step6';
import Step7 from '../reusable/Step7';
import Step8 from '../reusable/Step8';
function CreateNewPopup({ createPopup, setCreatePopup }) {
    const { register, handleSubmit, setValue, getValues, watch, formState: { errors, isSubmitted } } = useForm();
    const swiper2 = useRef()
    const onSubmit = (data) => {
        console.log("Form Submitted ", data);
    }
    const [selectedFile, setSelectedFile] = useState(null);
    console.log(errors)
    return (
        <div className="create-new relative overflow-hidden popup-animation max-h-[90%] max-w-[621px] w-[90%] flex flex-col gap-6 xl:p-8 md:p-6 p-4 bg-white">
            <div className="pb-5 flex justify-between w-full border-b border-b-[#D9D9D9] ">
                <h2 className="text-[#112230] font-inter text-[20px] leading-7 font-bold opacity-[0.87]">Create new</h2>
                <div className="w-6 h-6 relative" onClick={() => setCreatePopup(!createPopup)}>
                    <img src={cross} alt="Cancel" />
                </div>
            </div>
            <form className="fund-raising-form-right overflow-auto h-[100%] col-span-2  xlg:col-span-1" action="#" method="POST" onSubmit={handleSubmit(onSubmit)} >
                <Swiper modules={[Navigation, Pagination, A11y]} allowTouchMove={false} slidesPerView="auto" className="swiper" ref={swiper2}>
                    <SwiperSlide>
                        <Step1 swiper={swiper2} register={register} watch={watch} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Step2 swiper={swiper2} register={register} watch={watch} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Step3 swiper={swiper2} register={register} watch={watch} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Step4 swiper={swiper2} selectedFile={selectedFile} setSelectedFile={setSelectedFile} register={register} watch={watch} setValue={setValue} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Step5 swiper={swiper2} register={register} setValue={setValue} watch={watch} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Step6 swiper={swiper2} selectedFile={selectedFile} getValues={getValues} setValue={setValue} register={register} watch={watch} isSubmitted={isSubmitted} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Step7 swiper={swiper2} register={register} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Step8 swiper={swiper2} register={register} />
                    </SwiperSlide>
                </Swiper>
            </form>
            <div className="create-new-shadow sm:hidden"></div>
        </div>
    );
}

export default CreateNewPopup;