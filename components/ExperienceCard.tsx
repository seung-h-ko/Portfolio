import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <div className='flex flex-col rounded-3xl items-center space-y-7 flex-shrink-0
        w-[100%] md:w-[600px] xl:w-[800px] snap-center bg-[#292522] p-5
        cursor-pointer overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.8
                }}
                className='w-[50%] h-[25%] rounded-full xl:w-[200px] object-cover 
                object-center max-w-[200px]'
                src={urlFor(experience?.companyImage).url()}
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-3xl font-light text-[#efd9b4]'>{experience?.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1 text-[#d6a692]'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {
                        experience?.technologies.map((technology) => (
                            <img
                                key={technology._id}
                                className='h-10 w-10 rounded-full'
                                src={urlFor(technology.image).url()}
                                alt=''
                            />
                        ))
                    }
                </div>
                <p className='uppercase py-5 text-[#a39081] text-sm'>
                    {new Date(experience?.dateStarted).toDateString()} - {" "}
                    {experience?.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience?.dateEnded).toDateString()
                    }
                </p>
                <ul className='list-disc text-[#d6a692] space-y-1 md:text-xl px-5 max-h-96 overflow-y-scroll scrollbar-thin
                 scrollbar-track-white scrollbar-thumb-[#d6a692]/80'>
                    {
                        experience?.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}