"use client"

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function PILEffect() {
    const ref = useRef(null)
    let [screenDim, setScreenDim] = useState({
        x: 0,
        y: 0,
    })

    const moveFGTextPercX = useMotionValue(0)
    const moveBGTextPercX = useMotionValue(0)

    const transformedFGX = useSpring(moveFGTextPercX, {
        stiffness: 100,
        damping: 50,
    })
    const transformedBGX = useSpring(moveBGTextPercX, {
        stiffness: 100,
        damping: 40,
    })

    const fgTransform = useMotionTemplate`translate(${transformedFGX}%, 0)`
    const bgTransform = useMotionTemplate`translate(${transformedBGX}%, 0)`

    const handleMouseMove = (e) => {
        // e.pageX
        console.log(e.pageX, screenDim.x)
        const moveX = (e.pageX / (screenDim.x)) * 50

        moveFGTextPercX.set(-moveX)
        moveBGTextPercX.set(-moveX)
    }

    useEffect(() => {
        if (ref.current != null) {
            // ;
            setScreenDim({
                x: window.innerWidth,
                y: window.innerHeight,
            })
        }
    }, [ref.current])

    return (
        <h1
            className="w-full overflow-hidden phone:-rotate-6 mt-20 phone:mt-32 text-center font-bold text-lab-green phone:block hidden"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={ref}
        >
            <motion.div
                className="flex gap-32 text-5xl phone:text-8xl text-lab-sec md:-top-16"
                style={{
                    transform: bgTransform,
                }}
            >
                <p className="flex-shrink-0">Research.</p>
                <p className="flex-shrink-0">Knowledge.</p>
                <p className="flex-shrink-0">Innovation.</p>
            </motion.div>
            <motion.div
                className="flex w-[300vw] gap-12 phone:gap-0 text-2xl phone:text-6xl"
                style={{
                    transform: fgTransform,
                }}
            >
                <p className="phone:w-[100vw] flex-shrink-0">
                    PES Innovation Lab
                </p>
                <p className="phone:w-[100vw] flex-shrink-0">
                    PES Innovation Lab
                </p>
                <p className="phone:w-[100vw] flex-shrink-0">
                    PES Innovation Lab
                </p>
            </motion.div>
        </h1>
    )
}

export default PILEffect
