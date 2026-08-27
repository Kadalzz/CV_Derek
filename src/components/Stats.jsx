import CountUp from '../reactbits/CountUp.jsx';
import { stats } from '../content.js';

export default function Stats() {
  return (
    <section aria-label="Career at a glance">
      <div className="wrap">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>
                <CountUp to={s.value} duration={1.6} />
                {s.suffix}
              </b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
