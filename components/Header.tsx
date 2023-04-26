import React, { useState, useEffect } from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from 'next/link'
import { Social } from '../typings'



type Props = {
    inView: boolean;
    socials: Social[]
}

export default function Header({ inView, socials }: Props) {



    return (
        <header className={inView
            ? 'sticky top-0 p-2 flex justify-center max-w-7xl mx-auto z-20 h-10'
            : 'sticky top-0 p-2 flex justify-center max-w-7xl mx-auto z-20 h-10'
        }
        >

            <div className={inView
                ? 'absolute top-[250%] space-x-3 skew-y-12 border border-[#292522] flex flex-row items-center px-5 transition-all duration-1000'
                : 'absolute top-[0%] space-x-3 border border-[#a39081]/0 flex flex-row items-center px-5 transition-all duration-1000'
            }
            >
                <Link href='#contact'>
                    <p className={inView
                        ? "uppercase text-sm text-[#292522] hover:scale-125 transition-transform"
                        : "uppercase text-sm text-[#292522]/50 hover:scale-125 transition-transform"
                    }>Contact</p>
                </Link>
                {
                    socials?.map((social, i) => (
                        <motion.div
                            key={social._id}
                            initial={{
                                y: -200,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 1.5 + i
                            }}
                        >
                            <SocialIcon
                                url={social.url}
                                fgColor={inView ? '#292522' : 'rgba(41,37,34,0.5)'}
                                bgColor='transparent'
                                className='hover:scale-125 transition-transform'
                            />
                        </motion.div>
                    ))
                }
            </div>

        </header >
    )
}