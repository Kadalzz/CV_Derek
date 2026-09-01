import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import { grants } from '../content.js';

export default function Grants() {
  return (
    <section id="grants">
      <div className="wrap">
        <AnimatedContent distance={40} duration={0.7}>
          <div className="section-head">
            <p className="eyebrow">Grants &amp; Awards</p>
            <h2>Funding the Enlighten model, grant by grant</h2>
            <p>
              Over £1.1 million secured in research, knowledge-transfer and innovation funding
              since 2017 &mdash; the full ledger, as recorded in Section E of my CV.
            </p>
          </div>
        </AnimatedContent>

        <div className="grants-table" role="table" aria-label="Grants and awards with funding amounts">
          <div className="grants-row grants-head" role="row">
            <span role="columnheader">Year</span>
            <span role="columnheader">Grant / Award</span>
            <span role="columnheader">Amount</span>
          </div>
          {grants.map((g, i) => (
            <AnimatedContent
              key={g.name}
              className="grants-row"
              distance={12}
              duration={0.5}
              delay={Math.min(i * 0.02, 0.3)}
              role="row"
            >
              <span className="grants-year" role="cell">
                {g.year}
              </span>
              <span role="cell">{g.name}</span>
              <span className="grants-amount" role="cell">
                {g.amount}
              </span>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
