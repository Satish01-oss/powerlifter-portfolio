import athleteData, { liftTotal } from "../data/athleteData";
import VelocityMarquee from "./fx/VelocityMarquee";

const { records, hero } = athleteData;

const lifts = [
  `Squat ${records.squat}KG`,
  `Bench ${records.bench}KG`,
  `Deadlift ${records.deadlift}KG`,
  `Total ${liftTotal}KG`,
];

// Two crossed ticker bands between the hero and the About section.
const StatsMarquee = () => {
  return (
    <section className="relative bg-ink py-14 md:py-20 overflow-hidden" aria-label="Highlights">
      <div className="-rotate-2 scale-105 bg-red-600 py-3 md:py-4 shadow-2xl shadow-red-900/40">
        <VelocityMarquee
          items={lifts}
          baseVelocity={-2}
          itemClassName="font-display text-4xl md:text-6xl leading-[1.15] pt-1 tracking-wider text-white"
        />
      </div>

      <div className="rotate-1 scale-105 bg-black border-y border-zinc-800 py-3 md:py-4 -mt-1">
        <VelocityMarquee
          items={hero.highlights}
          baseVelocity={2}
          itemClassName="font-display text-4xl md:text-6xl leading-[1.15] pt-1 tracking-wider text-outline-red"
        />
      </div>
    </section>
  );
};

export default StatsMarquee;
