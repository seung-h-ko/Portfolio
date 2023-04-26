import React from 'react'
import { easeIn, motion } from "framer-motion"
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    i: number;
    skill: SkillType;
}

export default function Skill({ skill, i }: Props) {
    return (
        <motion.div
            drag
            dragConstraints={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 5 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
        >
            <motion.div
                initial={{
                    x: 40,
                    opacity: 0
                }}
                transition={{
                    duration: 0.3,
                    delay: i / 20,
                    type: "spring",
                    mass: 1,
                    stiffness: 100,
                    damping: 5
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
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
                className="mt-5 group relative flex cursor-pointer justify-center"
            >
                <img
                    src={urlFor(skill?.image).url()}
                    className='rounded-2xl border border-[#292522]/0 w-[70px] h-[70px] md:w-[110px] md:h-[110px] m-1 md:m-4 object-contain
                 filter group-hover:scale-110 group-hover:border-[#292522] transition-all z-10 pointer-events-none'
                />
                <div className='absolute group-hover:opacity-100 group-hover:-translate-y-4 group-hover:rotate-0 scale-50
                    opacity-0 translate-y-0 -rotate-45 transition-all duration-500 text-[#292522] z-0 group-hover:scale-150'>
                    <p className='border rounded-3xl border-[#292522]/0 group-hover:border-[#292522] 
                        transition-all px-1 md:text-xs text-[7px]'>{skill?.title}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}