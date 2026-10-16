import Hero from "../components/Hero";
import StatsMarquee from "../components/StatsMarquee";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Records from "../components/Records";
import Gallery from "../components/Gallery";
import Instagram from "../components/Instagram";
import Contact from "../components/Contact";
import PageTransition from "../components/fx/PageTransition";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle();

  return (
    <PageTransition>
      <Hero />
      <StatsMarquee />
      <About />
      <Achievements />
      <Records />
      <Gallery />
      <Instagram />
      <Contact />
    </PageTransition>
  );
};

export default Home;
