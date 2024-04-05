'use client'

import Image from 'next/image'
import PILEffect from './LabTextEffect'
import MobilePILEffect from './MobileLabTextEffect'

export default function Hero() {
    return (
        <div className="flex h-full flex-col phone:items-center phone:justify-center phone:gap-32 p-4 gap-4 phone:min-h-screen">
            {/* LOGO */}
            {/* <div className="relative left-2 h-48 w-48 sm:h-60 sm:w-60">
                    <Image
                        src="/images/mlab/mlab_logo.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div> */}
            <PILEffect />
            <div className="block phone:hidden mt-12">
                <div className="relative h-48 w-48 flex mx-auto">
                    <Image
                        src="/images/mlab/mlab_logo.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <MobilePILEffect />
                <p className="text-center text-sm phone:text-3xl max-w-6xl mt-12">
                    We are a student community dedicated to cultivating the
                    spirit of research and innovation in budding engineers!
                </p>
            </div>
            <p className="phone:text-center text-sm phone:text-3xl max-w-6xl hidden phone:block">
                We are a student community dedicated to cultivating the spirit
                of research and innovation in budding engineers!
            </p>{' '}
        </div>
    )
}
