import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ProfessorSectionRight({ prof, setProfessorInView }) {
    const { ref, inView, entry } = useInView({
        threshold: 0.4,
    })

    useEffect(() => {
        if (inView) {
            setProfessorInView(prof.name)
        }
    }, [inView])

    return (
        <section className="min-h-screen" ref={ref}>
            {/* SECTION IMAGE IN MOBILE */}
            <div className="mx-auto block py-10 md:hidden">
                <div className="relative h-80 w-full">
                    <Image
                        src={prof.image}
                        layout="fill"
                        objectFit="contain"
                        className="border"
                    />
                </div>
            </div>
            {/* SECTION DESC */}
            <div className="header sticky top-24 mx-4 rounded-3xl bg-black p-6 md:relative md:top-0 md:rounded-none md:bg-transparent md:p-8">
                <h2 className="text-step-1 font-bold uppercase text-lab-green md:text-step-4">
                    {prof.name}
                </h2>
                <p className="text-step--1 text-zinc-400 md:text-step-1">
                    {prof.designation}, {prof.org}
                </p>
            </div>
            <p className="mt-8 p-4 phone:text-step-0 md:mx-4 md:p-8 font-light phone:leading-loose leading-relaxed tracking-wide ">
                {prof.description}
            </p>
        </section>
    )
}
