import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import Lottie from 'react-lottie-player'
import lottieJson from '../public/66205-coding.json'
type Props = {
    pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
    return (
        <div
            className='relative flex flex-col h-screen max-w-7xl px-10 justify-evenly mx-auto items-center pt-10 pb-48'
        >
            <h3 className='uppercase tracking-[20px] text-[#6b7c7e] text-2xl'>
                About
            </h3>
            <motion.div
                initial={{
                    y: 200,
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.2
                }}
                className='flex w-[90%] h-[40%] max-w-[400px] max-h-[400px] rounded-full object-cover'
            >
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                />
            </motion.div>

            <motion.div
                initial={{
                    y: 200,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.2,
                    delay: 0.2
                }}
                className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold text-[#292522]'>
                    My <span className='underline decoration-[#d6a692]'>background</span>.
                </h4>
                <p className='text-base text-[#4d6160] text-justify'>
                    {pageInfo?.backgroundInformation}
                </p>
            </motion.div>

        </div>
    )
}