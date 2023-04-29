import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';
import { motion } from "framer-motion"


type Props = {
    pageInfo: PageInfo;
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `My name is ${pageInfo?.name}`,
            "Welcome to my portfolio",
            "<HaveALookAround />"
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center
         overflow-hidden'>
            <div className='flex flex-row justify-between space-x-10 h-[180px] items-center px-3'>
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='flex flex-col justify-around h-full w-1/3'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                </motion.div>
                <div className='flex-1 relative w-1/3'>
                    <motion.div
                        drag
                        dragConstraints={{
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        }}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                        dragElastic={0.5}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <div className='w-full absolute bg-[#292522]/30 left-0 h-full scale-y-[200%] skew-y-12' />
                        <BackgroundCircles />
                        <img
                            src={urlFor(pageInfo?.heroImage).url()}
                            alt=''
                            width={300}
                            height={300}
                            className="relative rounded-full mx-auto object-cover"
                        />

                    </motion.div>
                </div>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='flex flex-col justify-around h-full w-1/3'>
                    <Link href="#skills">
                        <button className='heroButtonRight'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButtonRight'>Projects</button>
                    </Link>
                </motion.div>
            </div>

            <div className='z-10 pt-3'>
                <h2 className='text-sm uppercase text-[#292522] pb-2 tracking-[10px] hover:scale-110 transition-all'>
                    {
                        pageInfo?.role.split("").map((char, i) => (
                            <span key={i} className='hover:text-white transition-all hover:font-bold'>{char}</span>
                        ))
                    }
                </h2>
            </div>
            <div className='h-0'>
                <h1 className='text-4xl lg:text-5xl font-semibold px-1'>
                    <span className='mr-2 text-[#292522]'>{text}</span>
                    <Cursor cursorColor='#292522' />
                </h1>
            </div>


        </div>
    )
}