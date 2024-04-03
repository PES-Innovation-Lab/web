import LayoutAlt from '../components/LayoutAlt';
import AboutUs from '../components/index/AboutUs';
import Hero from '../components/index/Hero';
import ProfessorsInfo from '../components/index/Professors';
import CardCarousel from '../components/CardCarousel';
import Projects_spotlight from './spotlight';
import projectsData from '../public/data/projects_common.json';

const cardData = projectsData[''].projects;



function Home() {
  return (
		<LayoutAlt title={'PIL | Home'} active={'Projects'} search={false}>
			<div className="bg-lab-bg text-white">
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
		</LayoutAlt>
  );
}

export default Home;
