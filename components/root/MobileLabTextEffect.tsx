'use client'
import Typewriter from 'typewriter-effect'

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function MobilePILEffect() {
    const texts = ['Research.', 'Knowledge.', 'Innovation.']

    return (
        <h1 className="flex items-center flex-col overflow-hidden phone:-rotate-6 mt-12 text-center font-bold text-lab-green">
            <div
                // animate={{
                //     opacity: [1, 0, 1],
                // }}
                // transition={{
                //     duration: 2,
                //     ease: 'easeInOut',
                //     times: [0, 1, 1.5],
                //     repeat: Infinity,
                //     repeatDelay: 1,
                // }}
                className="flex gap-32 text-4xl text-white/50 md:-top-16"
            >
                <Typewriter
                    options={{
                        strings: texts,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="text-2xl text-center">
                PES Innovation Lab
            </div>
        </h1>
    )
}

export default MobilePILEffect
