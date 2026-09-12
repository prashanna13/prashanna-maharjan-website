import { Link } from "react-router-dom";

function ContactIcon({ type }) {
  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
    phone: <path d="M6.6 3.5 9 3l2 5-2 1.5a16 16 0 0 0 5.5 5.5L16 13l5 2-.5 2.4a2 2 0 0 1-2.2 1.6C10.7 18 6 13.3 4.9 5.7a2 2 0 0 1 1.7-2.2Z" />,
    linkedin: <><path d="M5 8v11" /><path d="M5 5.5V5" /><path d="M10 19v-6a3 3 0 0 1 6 0v6" /><path d="M10 11V8" /><path d="M16 19v-6" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7.1 0l1.4-1.4a5 5 0 0 0-7.1-7.1L10 5.9" /><path d="M14 11a5 5 0 0 0-7.1 0l-1.4 1.4a5 5 0 0 0 7.1 7.1l1.4-1.4" /></>
  };

  return <svg className="footer-link-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-detail-row">
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          <div className="footer-links">
            <a href="mailto:prashanamahan13@gmail.com" aria-label="Email">
              <ContactIcon type="email" />
            </a>
            <a
              href="https://www.instagram.com/_prashanna.maharjan/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <ContactIcon type="instagram" />
            </a>
            <a href="tel:+9779843958426" aria-label="Phone">
              <ContactIcon type="phone" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <ContactIcon type="linkedin" />
            </a>
            <a href="https://linktr.ee" target="_blank" rel="noreferrer" aria-label="Linktree">
              <ContactIcon type="link" />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-copyright">
        <p>
          © {new Date().getFullYear()} Prashanna Maharjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
