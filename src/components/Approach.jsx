import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import SpotlightCard from '../reactbits/SpotlightCard.jsx';
import { streams } from '../content.js';

export default function Approach() {
  return (
    <section id="approach" className="stripe">
      <div className="wrap">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="section-head">
            <p className="eyebrow">Career Summary</p>
            <h2>Three streams, one practice</h2>
            <p>
              UK academic careers are built on teaching, research and external engagement.
              Here&rsquo;s how each has taken shape across mine.
            </p>
          </div>
        </AnimatedContent>
        <div className="streams">
          {streams.map((s, i) => (
            <AnimatedContent
              key={s.title}
              className="grid-item"
              distance={50}
              duration={0.7}
              delay={i * 0.12}
            >
              <SpotlightCard className="stream-card" spotlightColor="var(--spotlight)">
                <span className="tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
