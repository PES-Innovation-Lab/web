'use client'
import LayoutAlt from '../LayoutAlt'
import AboutUs from './AboutUs'
import Hero from './Hero'
import ProfessorsInfo from './Professors'
import CardCarousel from '../CardCarousel'
import Projects_spotlight from '../../archived_pages/spotlight'
import projectsData from '../../public/data/projects_common.json'

const cardData = projectsData[''].projects

function Home() {
    return (
        <div className="bg-lab-bg pt-28 text-white">
            {/* HERO SECTION */}
            <Hero />

            {/* ABOUT US SECTION */}
            <AboutUs />

            {/* PROFESSOR INFO */}
            <ProfessorsInfo />
            {/* <p
					id="spotlight_title"
					className=" text-center text-5xl text-[#8bc34a]"
				>
					SPOTLIGHT
				</p>
				<Projects_spotlight />
				<CardCarousel cardData={cardData} /> */}
        </div>
    )
}

export default Home
