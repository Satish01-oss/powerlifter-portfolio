import Achievements from "../components/Achievements";
import Records from "../components/Records";
import PageTransition from "../components/fx/PageTransition";
import usePageTitle from "../hooks/usePageTitle";

const AchievementsPage = () => {
  usePageTitle("Achievements");

  return (
    <PageTransition className="pt-20 bg-black min-h-screen">
      <Achievements headingLevel="h1" />
      <Records />
    </PageTransition>
  );
};

export default AchievementsPage;
