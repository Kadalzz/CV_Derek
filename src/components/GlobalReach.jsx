import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import SpotlightCard from '../reactbits/SpotlightCard.jsx';
import { appointments, countries } from '../content.js';

export default function GlobalReach() {
  return (
    <section id="global" className="stripe">
      <div className="wrap">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="section-head">
            <p className="eyebrow">International Standing</p>
            <h2>From a Sunderland lecture hall to visiting chairs on three continents</h2>
            <p>
              Current and recent international academic appointments, followed by the countries
              reached through keynotes, examining and consultancy.
            </p>
          </div>
        </AnimatedContent>

        <div className="appointments">
          {appointments.map((a, i) => (
            <AnimatedContent
              key={a.title}
              className="grid-item"
              distance={40}
              duration={0.6}
              delay={i * 0.08}
            >
              <SpotlightCard className="appointment" spotlightColor="var(--spotlight)">
                <span className="years">{a.years}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent distance={16} duration={0.8}>
          <div className="chips" aria-label="Countries engaged through keynotes, examining and consultancy">
            {countries.map((c, i) => (
              <span className={`chip ${i % 2 ? 'brass' : ''}`} key={c}>
                {c}
              </span>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
