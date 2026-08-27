import CountUp from '../reactbits/CountUp.jsx';
import { stats } from '../content.js';

export default function Stats() {
  return (
    <section aria-label="Career at a glance" className="stats-band">
      <div className="wrap">
        <p className="eyebrow">At a Glance</p>
        <div className="stats-plate">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-num">
                <CountUp to={s.value} duration={1.6} />
                {s.suffix && <span className="stat-suffix">{s.suffix}</span>}
              </span>
              <span className="stat-rule" aria-hidden="true" />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
