import { Link, NavLink } from 'react-router-dom'

function Sidebar({ onNavigate }) {
  return (
    <aside className="sidebar" id="portfolio-sidebar">
      <div className="sidebar-inner">
        <Link to="/homepage" className="sidebar-brand" aria-label="Go to homepage" onClick={onNavigate}>
          <span className="brand-mark">P</span>
          <span>
            Prashanna
            <small>Maharjan</small>
          </span>
        </Link>

        <nav className="sidebar-nav" aria-label="Sidebar navigation">
          <NavLink to="/" end onClick={onNavigate}>Selected Work</NavLink>
          <NavLink to="/homepage" onClick={onNavigate}>Home</NavLink>
          <NavLink to="/about" onClick={onNavigate}>About</NavLink>
          <NavLink to="/contact" onClick={onNavigate}>Contact</NavLink>
          <a href={`${import.meta.env.BASE_URL}cv.pdf`} download onClick={onNavigate}>Download CV</a>
        </nav>

        <div className="sidebar-meta">
          Frontend Developer
          <span>×</span>
          Photography
          <span>×</span>
          Videography
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
