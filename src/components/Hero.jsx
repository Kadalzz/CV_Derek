import DotGrid from '../reactbits/DotGrid.jsx';
import SplitText from '../reactbits/SplitText.jsx';
import DownloadCvButton from './DownloadCvButton.jsx';

const palettes = {
  light: { base: '#d9d0ba', active: '#2f6b5c' },
  dark: { base: '#303a33', active: '#6cc0a8' },
};

export default function Hero({ resolvedTheme }) {
  const palette = palettes[resolvedTheme] || palettes.light;

  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <DotGrid
          dotSize={4}
          gap={22}
          baseColor={palette.base}
          activeColor={palette.active}
          proximity={110}
          shockRadius={200}
          shockStrength={3}
          resistance={600}
          returnDuration={1.2}
        />
      </div>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Associate Professor in Cultural Management · University of Sunderland</p>
            <SplitText
              text="Dr Derek Watson"
              tag="h1"
              splitType="chars"
              delay={28}
              duration={0.9}
              from={{ opacity: 0, y: 32 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              threshold={0}
            />
            <p className="role">Making food safety a matter of culture, not just compliance.</p>
            <p className="lede">
              For over three decades I&rsquo;ve researched, taught and consulted on the human side
              of food safety &mdash; the beliefs, behaviours and leadership that decide whether a
              compliance system actually works. That work has carried me from Sunderland lecture
              theatres to boardrooms and keynote stages across five continents.
            </p>
            <div className="hero-cta">
              <DownloadCvButton className="btn btn-solid" />
              <a className="btn btn-ghost" href="#research">
                Read the research
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="seal">
            <img className="seal-photo" src="/derek-watson.jpg" alt="Portrait of Dr Derek Watson" />
          </div>
        </div>
      </div>
    </header>
  );
}
