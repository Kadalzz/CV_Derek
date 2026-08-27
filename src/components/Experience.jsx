import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import { experience } from '../content.js';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="section-head">
            <p className="eyebrow">Employment History</p>
            <h2>From lecture theatre to boardroom, and back</h2>
          </div>
        </AnimatedContent>
        <div className="timeline">
          {experience.map((e, i) => (
            <AnimatedContent
              key={e.title}
              distance={26}
              duration={0.6}
              delay={Math.min(i * 0.05, 0.35)}
            >
              <div className="tl-item">
                <span className="tl-date">{e.date}</span>
                <div className="tl-body">
                  <h3>{e.title}</h3>
                  <p>{e.body}</p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
