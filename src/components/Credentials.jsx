import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import { education, memberships } from '../content.js';

export default function Credentials() {
  return (
    <section id="credentials" className="stripe">
      <div className="wrap">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="section-head">
            <p className="eyebrow">Qualifications</p>
            <h2>Education &amp; professional standing</h2>
          </div>
        </AnimatedContent>
        <div className="cred-grid">
          <AnimatedContent distance={30} duration={0.7}>
            <div>
              <h3>Academic Qualifications</h3>
              <ul className="cred-list">
                {education.map((e) => (
                  <li key={e.title}>
                    <span className="cl-title">{e.title}</span>
                    <span className="cl-meta">{e.meta}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={30} duration={0.7} delay={0.1}>
            <div>
              <h3>Professional Standing</h3>
              <ul className="mem-list">
                {memberships.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
