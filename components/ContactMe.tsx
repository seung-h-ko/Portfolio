import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion"

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:seung.h.ko@outlook.com?subject=${formData.subject}&body=
        Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`
    };


    return (
        <div className='h-screen flex flex-col text-center px-10 items-center pt-20 pb-48 space-y-10'>
            <h3 className='uppercase tracking-[20px] text-[#6b7c7e] text-2xl h-1/6'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-[#292522] text-center'>
                    Here is my Info.{" "}
                    <span className='decoration-[#d6a692] underline'>Contact me!</span>
                </h4>

                <div className='space-y-8'>
                    <motion.div
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className='flex items-center space-x-5 justify-center relative'
                    >
                        <div className='absolute border border-[#292522] w-[110%] h-full p-6 skew-x-12' />
                        <PhoneIcon className='text-[#292522] h-7 w-7 animate-pulse' />
                        <p className='text-2xl text-[#292522]'>+1 514-754-9871</p>
                    </motion.div>

                    <motion.div
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2
                        }}
                        className='flex items-center space-x-5 justify-center relative'
                    >
                        <div className='absolute border border-[#292522] w-[110%] h-full p-6 -skew-x-12' />
                        <EnvelopeIcon className='text-[#292522] h-7 w-7 animate-pulse' />
                        <p className='text-2xl text-[#292522]'>seung.h.ko@outlook.com</p>
                    </motion.div>

                    <motion.div
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.4
                        }}
                        className='flex items-center space-x-5 justify-center relative'
                    >
                        <div className='absolute border border-[#292522] w-[110%] h-full p-6 skew-x-12' />
                        <MapPinIcon className='text-[#292522] h-7 w-7 animate-pulse' />
                        <p className='text-2xl text-[#292522]'>Monteal, QC, Canada</p>
                    </motion.div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput w-1/3' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput w-2/3' type="email" />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                    <textarea {...register('message')} placeholder="Message" className='contactInput' />
                    <button className='bg-[#292522] py-5 px-10 rounded-md text-[#efd9b4] font-bold text-lg'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}