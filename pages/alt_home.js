import LayoutAlt from '../components/LayoutAlt';
import AboutUs from '../components/index/AboutUs';
import Hero from '../components/index/Hero';
import ProfessorsInfo from '../components/index/Professors';

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
      </div>
    </LayoutAlt>
  );
}

export default Home;
