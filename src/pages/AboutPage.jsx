import './ContentPage.css'
import Silk from '../components/Silk'

function AboutPage() {
  return (
    <section className="content-page section-pad">
      <div className="about-silk-background">
        <Silk speed={5.5} scale={1.3} color="#9C7F49" noiseIntensity={1} rotation={5.7} />
      </div>
      <div className="container narrow">
        <p className="eyebrow">About</p>
        <h1 className="page-title">Frontend developer × Photographer x Videographer</h1>
        <div className="text-block">
          <p>
            I am Prashanna Maharjan, an enthusiastic Computer Science student at Taylor&apos;s University with a strong foundation in frontend development and creative digital production.
          </p>
          <p>
            I am currently seeking an internship opportunity as a Frontend Developer, where I can apply my React skills, strengthen my UI/UX practice, and help build engaging, user-friendly web applications.
          </p>
        </div>

        <div className="cv-section">
          <h2>Education</h2>
          <div className="cv-list">
            <article>
              <strong>Taylor&apos;s University</strong>
              <span>Bachelor of Computer Science (Hons) · Mar 2022 - Dec 2026</span>
            </article>
            <article>
              <strong>Kathmandu Bernhardt College, Kathmandu</strong>
              <span>Computer Science &amp; Business Studies · 2018 - 2021</span>
            </article>
            <article>
              <strong>Rarahil Memorial School, Kathmandu</strong>
              <span>SEE · 2018</span>
            </article>
          </div>
        </div>

        <div className="cv-section">
          <h2>Experience</h2>
          <div className="cv-list">
            <article>
              <strong>Frontend Developer Intern · Grafi Offshore Nepal</strong>
              <span>Lalitpur District, Nepal</span>
              <p>Developed responsive web pages with HTML, CSS, JavaScript and React. Built reusable UI components and collaborated on testing, debugging and performance improvements.</p>
            </article>
            <article>
              <strong>Technical Crew · Katha haru</strong>
              <span>Lalitpur District, Nepal</span>
              <p>Supported filming, photography, content creation, editing and post-production for visual projects.</p>
            </article>
            <article>
              <strong>Content Creator · Elements Studio</strong>
              <span>Lalitpur District, Nepal · Jul 2024 - Nov 2024</span>
              <p>Captured and edited photos and videos for client projects and events while collaborating with creative teams.</p>
            </article>
            <article>
              <strong>Content Team · Paradygm TV</strong>
              <span>Jan 2022 - Dec 2022</span>
              <p>Filmed, produced and edited video content for media projects and programs.</p>
            </article>
            <article>
              <strong>Graphic Designer · MOHP</strong>
              <span>Kathmandu · 2022</span>
              <p>Designed graphics, layouts, infographics and promotional materials for organizational campaigns.</p>
            </article>
          </div>
        </div>

        <div className="about-grid">
          <div>
            <h3>Skills</h3>
            <ul className="skill-list">
              <li>React · Beginner / Entry level</li>
              <li>UI/UX design · Moderate</li>
              <li>Photography · Good</li>
              <li>Videography · Good</li>
              <li>Graphic design · Moderate</li>
              <li>Effective communication</li>
              <li>Critical thinking</li>
            </ul>
          </div>

          <div>
            <h3>Languages &amp; certification</h3>
            <ul className="skill-list">
              <li>English · Good</li>
              <li>Nepali · Fluent</li>
              <li>Nepal bhasa · Fluent</li>
              <li>React JS Professional Course</li>
              <li>Agile Institute, Kathmandu · Jul - Nov 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
