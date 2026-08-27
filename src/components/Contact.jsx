import AnimatedContent from '../reactbits/AnimatedContent.jsx';

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
            <a className="btn btn-solid" href="/derek-watson-cv.pdf" download="Derek-Watson-CV.pdf">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M7 1v8m0 0L4 6.3M7 9l3-2.7M2 10.5V12a1 1 0 001 1h8a1 1 0 001-1v-1.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download Full CV (PDF)
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
