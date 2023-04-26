import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings';
import { urlFor } from '../sanity';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, LinkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    const [number, setNumber] = useState(0);
    const handleLeftClick = () => {
        if (number <= 0) {
            return
        } else {
            setNumber(number - 1)
        }
    }
    const handleRightClick = () => {
        if (number >= projects.length - 1) {
            return
        } else {
            setNumber(number + 1)
        }
    }

    return (
        <div
            className='relative h-screen flex overflow-hidden flex-col items-center pt-20 pb-48'
        >
            <h3 className='uppercase tracking-[20px] text-[#6b7c7e] text-2xl'>
                Projects
            </h3>

            <div className='w-full flex overflow-x-scroll overflow-y-hidden snap-x
            snap-mandatory z-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a39081]/80 h-full scroll-smooth'>
                {projects?.map((project, i) => (
                    <div
                        id={`project#${i}`}
                        key={project?._id}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-14 items-center justify-center
                             py-20 h-full'>
                        <motion.img
                            initial={{
                                y: -40,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1
                            }}
                            whileInView={{
                                opacity: 1, y: 0
                            }}
                            src={urlFor(project?.image).url()}
                            alt=''
                            className='h-60 w-60 md:h-80 md:w-80 object-contain'
                        />

                        <div className='space-y-5 px-2 md:px-10 text-[#292522]'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#a39081]'>Project {i + 1} of {projects?.length}:</span>{" "}
                                {project?.title}
                            </h4>
                            <div className='flex items-center space-x-2 justify-center'>
                                {project?.technologies.map((technology) => (
                                    <img
                                        className='h-10 w-10 object-contain'
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt=""
                                    />
                                ))}
                            </div>
                            <Link
                                href={project?.linkToBuild}
                                className="flex flex-row items-center space-x-3 justify-center text-[#292522] font-bold"
                            >
                                <LinkIcon
                                    height={20}
                                    width={20}
                                />
                                <p className='underline'>Project Link</p>
                            </Link>
                            <p className='text-lg text-center md:text-left max-w-[800px]'>
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute left-[5%] bottom-1/2 text-[#292522] z-20 hidden md:inline-block'>
                <Link
                    onClick={handleLeftClick} href={number != 0 ? `#project#${number - 1}` : '#project#0'}
                >
                    <ChevronDoubleLeftIcon
                        className='h-10 w-10 active:scale-75' />
                </Link>
            </div>
            <div className='absolute right-[5%] bottom-1/2 text-[#292522] z-20 hidden md:inline-block'>
                <Link onClick={handleRightClick} href={number != projects.length - 1 ? `#project#${number + 1}` : `#project#${projects.length - 1}`}>
                    <ChevronDoubleRightIcon
                        className='h-10 w-10 active:scale-75' />
                </Link>
            </div>

            <div className='absolute w-full top-[30%] left-0 h-[500px] border-t border-b border-[#efd9b4] skew-y-12' />
        </div>
    )
}