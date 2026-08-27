import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import { publications } from '../content.js';

export default function Research() {
  return (
    <section id="research">
      <div className="wrap">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="section-head">
            <p className="eyebrow">Research &amp; Publications</p>
            <h2>The science behind a safer plate</h2>
            <p>
              My work asks why food safety systems succeed or fail once you account for the
              people running them &mdash; and what leaders can do about it.
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={26} duration={0.7}>
          <div className="callout">
            <p>
              <strong>The Enlighten Model.</strong> My food safety cultural compliance framework
              has attracted research funding from Inner Mongolia to Panama, underpins my
              membership of the global Salus Food Safety Culture Science Group, and has been the
              basis for keynotes on four continents.
            </p>
          </div>
        </AnimatedContent>

        <div className="pub-list">
          {publications.map((p, i) => (
            <AnimatedContent
              key={p.title}
              className="pub-item"
              distance={20}
              duration={0.6}
              delay={i * 0.06}
            >
              <span className="pub-year">{p.year}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.meta}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
        <p className="note">
          Plus 70+ further journal articles, conference papers, book chapters and a monograph
          spanning food safety culture, third-stream engagement and cross-cultural management
          &mdash; full list available on request.
        </p>
      </div>
    </section>
  );
}
