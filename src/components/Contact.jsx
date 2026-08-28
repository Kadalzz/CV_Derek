import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import DownloadCvButton from './DownloadCvButton.jsx';
import ContactIcon from './ContactIcon.jsx';
import { contactLinks } from '../content.js';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <AnimatedContent distance={30} duration={0.7}>
          <p className="eyebrow">Get in Touch</p>
          <h2>Speaking, doctoral examining or cultural compliance consultancy</h2>
          <p className="lede">
            Open to keynote invitations, external examining, and applied research partnerships in
            food safety and cultural compliance.
          </p>

          <div className="contact-links">
            {contactLinks.map((c) => (
              <a
                key={c.id}
                className="contact-link"
                href={c.href}
                target={c.id === 'linkedin' ? '_blank' : undefined}
                rel={c.id === 'linkedin' ? 'noopener noreferrer' : undefined}
              >
                <span className="icon">
                  <ContactIcon name={c.id} />
                </span>
                <span className="text">
                  <b>{c.label}</b>
                  <span>{c.value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="contact-meta">
            <div>
              <b>Affiliation</b>
              <span>Faculty of Business, Law &amp; Tourism, University of Sunderland</span>
            </div>
            <div>
              <b>Focus areas</b>
              <span>Food safety culture &middot; Cultural compliance &middot; Third-stream engagement</span>
            </div>
            <div>
              <b>Based in</b>
              <span>Sunderland, United Kingdom</span>
            </div>
          </div>
          <div className="hero-cta" style={{ marginTop: '2.2rem' }}>
            <DownloadCvButton className="btn btn-solid">Download this page (PDF)</DownloadCvButton>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
