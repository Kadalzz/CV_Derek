import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import { awards } from '../content.js';

export default function Recognition() {
  return (
    <section id="recognition">
      <div className="wrap">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="section-head">
            <p className="eyebrow">Recognition</p>
            <h2>Awards &amp; distinctions</h2>
          </div>
        </AnimatedContent>
        <div className="seals">
          {awards.map((a, i) => (
            <AnimatedContent
              key={a.name}
              className="grid-item"
              distance={30}
              duration={0.6}
              delay={i * 0.05}
              scale={0.9}
            >
              <div className="medal">
                <span className="yr">{a.year}</span>
                <span className="name">{a.name}</span>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
