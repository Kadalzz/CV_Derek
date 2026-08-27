import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import { media } from '../content.js';

export default function Media() {
  return (
    <section id="media" className="stripe">
      <div className="wrap">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="section-head">
            <p className="eyebrow">Public Voice</p>
            <h2>When food safety makes the news, broadcasters call</h2>
          </div>
        </AnimatedContent>
        <AnimatedContent distance={16} duration={0.8}>
          <div className="chips media-grid">
            {media.map((m, i) => (
              <span className={`chip ${i % 2 ? 'brass' : ''}`} key={m.label}>
                {m.label} &mdash; {m.year}
              </span>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
