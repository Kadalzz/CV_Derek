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
        </AnimatedContent>
      </div>
    </section>
  );
}
