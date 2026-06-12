import Achievements from "../components/Achievements";
import Records from "../components/Records";

const AchievementsPage = () => {
  return (
    <main className="pt-24 bg-black min-h-screen">
      <Achievements />
      <Records />
    </main>
  );
};

export default AchievementsPage;