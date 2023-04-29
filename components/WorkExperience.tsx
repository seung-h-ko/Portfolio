import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'


type Props = {
    experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
    return (
        <div
            className='flex overflow-hidden flex-col text-left max-w-full w-full
            justify-evenly mx-auto items-center h-screen pt-20 pb-48'>
            <h3 className='uppercase tracking-[20px] text-[#6b7c7e] text-2xl text-center'>
                My Work <span className='text-[#292522]'>Experience</span>
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a39081]'>
                {
                    experiences?.map((experience) => (
                        <ExperienceCard
                            key={experience?._id}
                            experience={experience}
                        />
                    ))
                }
            </div>
        </div>
    )
}