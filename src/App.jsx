import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Approach from './components/Approach.jsx';
import Experience from './components/Experience.jsx';
import GlobalReach from './components/GlobalReach.jsx';
import Research from './components/Research.jsx';
import Grants from './components/Grants.jsx';
import Media from './components/Media.jsx';
import Recognition from './components/Recognition.jsx';
import Credentials from './components/Credentials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useTheme } from './useTheme.js';

export default function App() {
  const { resolved, toggle } = useTheme();

  return (
    <>
      <Nav theme={resolved} onToggleTheme={toggle} />
      <main>
        <Hero resolvedTheme={resolved} />
        <Stats />
        <Approach />
        <Experience />
        <GlobalReach />
        <Research />
        <Grants />
        <Media />
        <Recognition />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
