import GreenHightlight from './GreenHighlight'

export default function AboutUs() {
    return (
        <div className="phone:mx-auto max-w-7xl p-4">
            <h1 className='phone:text-4xl text-3xl opacity-80 mb-4 phone:mb-10'>About Us</h1>
            <div className="font-light phone:leading-loose leading-relaxed tracking-wide phone:text-xl">
                <p>
                    <GreenHightlight>Pes Innovation Lab</GreenHightlight> is a
                    unique community which inculcates the{' '}
                    <GreenHightlight>
                        spirit of student research
                    </GreenHightlight>
                    . Students work with like-minded peers to try and solve
                    carefully chosen{' '}
                    <GreenHightlight>real-world problems</GreenHightlight>. The
                    Lab’s activities include the flagship summer internship,{' '}
                    <GreenHightlight>HashCode</GreenHightlight> (a hackathon),
                    <GreenHightlight> RoadShow</GreenHightlight> (A project
                    presentation event) and other enriching opportunities such
                    as workshops and tutorials.
                </p>
                <p className="mt-5">
                    Students here, routinely
                    <GreenHightlight> push the boundaries</GreenHightlight> of
                    research by developing products to benefit the masses and{' '}
                    <GreenHightlight>
                        publishing their work in conferences and journals of
                        repute
                    </GreenHightlight>
                    . Interns continue working with the lab while in college,
                    sharing insights, starting new projects and mentoring
                    subsequent batches of student interns.
                </p>
                <p className="mt-5">
                    Over the years, the members of PIL have grown into a{' '}
                    <GreenHightlight>close-knit family</GreenHightlight> who
                    contribute to the lab long after their graduation.
                </p>
            </div>
        </div>
    )
}
