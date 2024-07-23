import React, { useRef, useState } from 'react';
import BackButton from './BackButton';
import ContinueButton from './ContinueButton';
import { defImg, FormLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';
// import { useDropzone } from 'react-dropzone';
function Step4({ swiper, register, setValue }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate()

    const handleDragOver = (e) => {
        console.log("Handle DragOver")

        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        console.log("Handle Drop")
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        setSelectedFile(file);
        setValue("file", selectedFile)
    };

    const handleChange = (e) => {
        console.log("Handle Change")

        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0])
        setValue("file", e.target.files[0])
    };
    console.log(selectedFile)
    const handlePreview = () => {
        if (selectedFile) {
            console.log(selectedFile)
            setValue("file", selectedFile)
            const reader = new FileReader();
            reader.onloadend = () => {
                // Handle the preview image here, e.g., set it to a state variable
                console.log(reader.result); // You can use this result to display the image
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    return (
        <div className="flex flex-col justify-between w-[100%] max-h-[100vh] h-[100vh] overflow-y-auto lg:p-[44px] sm:p-8 py-6 px-4">
            <div className="flex flex-col gap-[44px]">
                <div className="flex w-[100%] justify-between items-center h-[30px]">
                    <img src={FormLogo} alt="SendMeHugs Form Logo" />
                    <div className="leading-[30px] text-black font-inter text-[14px] font-bold cursor-pointer" onClick={() => navigate("/fundraising/signin")}>Sign In</div>
                </div>
                <p className="text-black text-[16px] font-bold leading-6 font-inter">3 of 5</p>
                <div className="flex flex-col gap-[43px]">
                    <div className="flex flex-col gap-5 max-w-[415px]">
                        <h2 className="text-black font-bold text-[21px] font-inter leading-[101%]">Add a cover photo</h2>
                        <p className="font-popins text-[14px] leading-6 text-[#676767]">Use clear and bright photo helps people connect to your fundraiser instantly.</p>
                    </div>
                    <div className="">

                        <input type="file" className="hidden w-[100%] " id="file"
                            accept="image/*"
                            onChange={handleChange}
                            {...register('file', { required: 'File is required' })}
                        />
                        <div className="flex w-[100%]">
                            {!selectedFile ? <label
                                htmlFor="file"
                                className="border-dashed border-2  w-[100%] h-[360px] border-gray-400 flex flex-col justify-center items-center gap-[39px]"
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >
                                <img src={defImg} alt="Default Image Icon" />
                                <p
                                    className="leading-6 text-[14px] font-popins text-[#676767] flex flex-wrap justify-center"
                                >
                                    Drag or upload your photo here
                                </p>

                            </label> : <div className="rounded-lg w-[100%] h-[360px] border-gray-400 flex flex-col justify-center items-center gap-[39px]">
                                <img src={URL.createObjectURL(selectedFile)} className="rounded-lg bg-contain w-[100%] h-[100%]" alt="Preview Image" />
                            </div>}
                            {
                                selectedFile && <div onClick={() => { document.getElementById("file").value = "", setSelectedFile(null) }}>Delete</div>
                            }
                        </div>
                        <div className="w-[100%] h-[64px] step-form-div flex justify-end flex-col relative">
                            <p className="my-2 leading-6 text-[14px] font-popins text-[#676767] flex flex-wrap justify-center">OR</p>
                            <div className="flex">
                                <p className="text-[14px] leading-5 text-[#868C93] font-roboto bg-white w-[25px] text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M11.7676 8.23047L8.23204 11.766" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M8.61114 5.83466L10 4.44576C11.5342 2.91163 14.0215 2.91163 15.5556 4.44576V4.44576C17.0898 5.9799 17.0898 8.46722 15.5556 10.0014L14.1667 11.3903" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M11.3889 14.1653L9.99996 15.5542C8.46583 17.0884 5.97851 17.0884 4.44437 15.5542V15.5542C2.91024 14.0201 2.91024 11.5328 4.44437 9.99865L5.83327 8.60975" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </p>
                                <input type="text" {...register("youtube")} id="youtube" className="step-form-input" placeholder="Enter youtube link" />

                                <label htmlFor="youtube" className="step-form-label left-[25px] w-[80%]">Add a youtube link</label>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="bottom-buttons flex justify-between items-center pt-5">
                <BackButton swiper={swiper} />
                <ContinueButton swiper={swiper} />
            </div>
        </div>
    );
}

export default Step4;