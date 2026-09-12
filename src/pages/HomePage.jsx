import { Link } from 'react-router-dom'
import { disciplines } from '../data/projects'
import ComputerModel from '../components/ComputerModel'
import VintageCameraModel from '../components/VintageCameraModel'
import EightMMCameraModel from '../components/EightMMCameraModel'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-image-wrap">
          <img
            src="/backgroud.jpg"
            alt="Kathmandu Valley beneath the Himalayan mountains"
            className="hero-image"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="container hero-inner">
          <p className="eyebrow" data-reveal>
            Aspiring Frontend Developer × Photographer x Videographer
          </p>
          <h1 className="display" data-reveal>
            <span>Code.</span>
            <span>Frame.</span>
            <span>Motion.</span>
          </h1>
          <p className="lead" data-reveal>
            Building user friendly web experiences and creating visual stories.
          </p>
          <div className="hero-meta" data-reveal>
            <span>Kirtipur, Kathmandu</span>
            <Link to="/contact">Available for commission</Link>
          </div>
        </div>
      </section>

      <section className="disciplines section-pad">
        <div className="container">
          {disciplines.map((discipline, index) => (
            <article className={`discipline-row discipline-row-${index + 1}`} key={discipline.id} data-reveal>
              <div className="discipline-number">{discipline.label}</div>
              <div className="discipline-copy">
                <h2>{discipline.title}</h2>
                <p>{discipline.blurb}</p>
              </div>
              <div className="discipline-visual">
                {discipline.id === 'build' && <ComputerModel />}
                {discipline.id === 'frame' && <VintageCameraModel />}
                {discipline.id === 'motion' && <EightMMCameraModel />}
                {!['build', 'frame', 'motion'].includes(discipline.id) && (
                  <img src={discipline.image} alt={discipline.title} loading="lazy" />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-film section-pad">
        <div className="container film-intro" data-reveal>
          <h2>Latest film</h2>
          <p>Flames of the Sacred Valley — 02:21</p>
        </div>

        <div className="film-player" data-reveal>
          <iframe
            src="https://www.youtube.com/embed/-uLRDsQ9des?start=3&rel=0"
            title="Latest film by Prashanna Maharjan"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="container film-copy" data-reveal>
          <p>
            The work sits in the spaces between labor and light an essay on clay, process and care.
            Quietly observed and richly textured, each frame lets natural rhythm do the storytelling.
          </p>
          <Link to="/">Open the project</Link>
        </div>
      </section>

      <section className="contact-cta section-pad">
        <div className="container">
          <h2 data-reveal>
            <span>Tell me</span>
            <span>what you</span>
            <span>are making.</span>
          </h2>

          <div className="contact-links" data-reveal>
            <a href="mailto:prashanamahan13@gmail.com"><span>Email</span><span>prashanamahan13@gmail.com</span></a>
            <a href="https://www.instagram.com/_prashanna.maharjan/" target="_blank" rel="noreferrer"><span>Instagram</span><span>_prashanna.maharjan/</span></a>
            <a href="tel:+9779843958426"><span>Phone</span><span>9843958426</span></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><span>LinkedIn</span><span>LinkedIn profile</span></a>
            <a href="https://linktr.ee" target="_blank" rel="noreferrer"><span>More links</span><span>linktr.ee</span></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
