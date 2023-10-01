import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ProfessorSectionRight({ prof, setProfessorInView }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setProfessorInView(prof.name);
    }
  }, [inView]);

  return (
    <section className="min-h-screen" ref={ref}>
      {/* SECTION IMAGE IN MOBILE */}
      <div className="mx-auto block md:hidden py-10">
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
      <div className="header p-6 md:p-8 bg-black sticky top-24 mx-4 rounded-3xl md:rounded-none md:relative md:bg-transparent md:top-0">
        <h2 className="text-step-1 md:text-step-4 text-lab-green uppercase font-bold">
          {prof.name}
        </h2>
        <p className="text-step--1 md:text-step-1 text-zinc-400">
          {prof.designation}, {prof.org}
        </p>
      </div>
      <p className="mt-8 p-4 md:mx-4 md:p-8 text-step-0">{prof.description}</p>
    </section>
  );
}
