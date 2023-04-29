import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
import { Skill as SkillType } from "../typings"



type Props = {
    skills: SkillType[];
}

export default function Skills({ skills }: Props) {
    return (
        <div
            className='h-screen flex flex-col text-center items-center pt-20 pb-48 px-5'>
            <h3 className='uppercase tracking-[20px] text-[#6b7c7e] text-2xl h-1/6'>
                My <span className='text-[#292522]'>Skills</span>
            </h3>

            {/* <div className='grid grid-cols-5 gap-5'> */}
            <div className='flex flex-row flex-wrap max-w-[800px] justify-center'>
                {
                    skills?.map((skill, i) => (
                        <Skill key={skill?._id} skill={skill} i={i} />
                    ))
                }
            </div>
        </div>
    )
}